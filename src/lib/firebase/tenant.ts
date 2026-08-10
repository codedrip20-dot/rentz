// src/lib/firebase/tenant.ts

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getCountFromServer,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  Timestamp,
  writeBatch,
} from "firebase/firestore";

import { db } from "./firebase";
import { Tenant, CreateTenantData } from "@/types/tenantTypes";
import { Room } from "@/types/roomTypes";
import {Property} from "@/types/property";
import { UserData } from "@/types/user";

import { getRoom } from "./room";
import { getProperty } from "./property";

const TENANTS_COLLECTION = "tenants";

/**
 * Generate a tenant document id.
 */
export function generateTenantId(): string {
  return doc(collection(db, TENANTS_COLLECTION)).id;
}
/**
 * Create a new tenant document.
 */
export async function createTenant(
    data: CreateTenantData
): Promise<Tenant> {
    const tenantId = data.tenantId;

    const tenant: Tenant = {
        tenantId,

        userId: data.userId,

        officialName: data.officialName,
        phoneNumber: data.phoneNumber,
        email: data.email,

        bookingId: data.bookingId,
        roomId: data.roomId,
        propertyId: data.propertyId,
        ownerId: data.ownerId,

        monthlyRent: data.monthlyRent,
        securityDeposit: data.securityDeposit,

        moveInDate: data.moveInDate,

        status: "active",

        createdAt: new Date(),
        updatedAt: new Date(),
        profileClaimed: false
    };

    await setDoc(
        doc(
            db,
            TENANTS_COLLECTION,
            tenantId
        ),
        {
            ...tenant,

            moveInDate:
                Timestamp.fromDate(
                    data.moveInDate
                ),

            createdAt:
                serverTimestamp(),

            updatedAt:
                serverTimestamp(),
        }
    );

    return tenant;
}

/**
 * Get tenant by tenant id.
 */
export async function getTenant(
  tenantId: string
): Promise<Tenant | null> {
  const snapshot = await getDoc(
    doc(db, TENANTS_COLLECTION, tenantId)
  );

  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.data();

  return {
    ...data,
    moveInDate: data.moveInDate.toDate(),
    moveOutDate: data.moveOutDate?.toDate(),
    createdAt: data.createdAt?.toDate() ?? new Date(),
    updatedAt: data.updatedAt?.toDate() ?? new Date(),
  } as Tenant;
}

/**
 * Get tenant using authenticated user id.
 */
export async function getTenantByUserId(
  userId: string
): Promise<Tenant | null> {
  const q = query(
    collection(db, TENANTS_COLLECTION),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  const data = snapshot.docs[0].data();

  return {
    ...data,
    moveInDate: data.moveInDate.toDate(),
    moveOutDate: data.moveOutDate?.toDate(),
    createdAt: data.createdAt?.toDate() ?? new Date(),
    updatedAt: data.updatedAt?.toDate() ?? new Date(),
  } as Tenant;
}

/**
 * Get all tenants belonging to an owner.
 */
export async function getTenantsByOwner(
  ownerId: string
): Promise<Tenant[]> {
  const q = query(
    collection(db, TENANTS_COLLECTION),
    where("ownerId", "==", ownerId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      ...data,
      moveInDate: data.moveInDate.toDate(),
      moveOutDate: data.moveOutDate?.toDate(),
      createdAt: data.createdAt?.toDate() ?? new Date(),
      updatedAt: data.updatedAt?.toDate() ?? new Date(),
    } as Tenant;
  });
}

/**
 * Check whether a tenant already exists for a user.
 */
export async function tenantExists(
  userId: string
): Promise<boolean> {
  const tenant = await getTenantByUserId(userId);
  return tenant !== null;
}

/**
 * Update tenant document.
 */
export async function updateTenant(
  tenantId: string,
  updates: Partial<Tenant>
): Promise<void> {
  await updateDoc(doc(db, TENANTS_COLLECTION, tenantId), {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Delete tenant document.
 */
export async function deleteTenant(
  tenantId: string
): Promise<void> {
  await deleteDoc(doc(db, TENANTS_COLLECTION, tenantId));
}

// ======================================================
// Tenant Page
// ======================================================

/**
 * Get all data required for the Tenant Page.
 */
export async function getTenantPageData(
  tenantId: string
): Promise<{
  tenant: Tenant;
  user: UserData | null;
  room: Room | null;
  property: Property | null;
} | null> {
  // Get tenant
  const tenant = await getTenant(tenantId);

  if (!tenant) {
    return null;
  }

  // Get user document
 const userSnapshot = await getDoc(
  doc(db, "users", tenant.userId)
);

const user = userSnapshot.exists()
  ? ({
      uid: userSnapshot.id,
      ...userSnapshot.data(),
    } as UserData)
  : null;

// Get room and property
const [room, property] = await Promise.all([
  getRoom(tenant.roomId),
  getProperty(tenant.propertyId),
]);

return {
  tenant,
  user,
  room,
  property,
};
}
/**
 * Promote a user's role to tenant if they have a tenant record.
 */
export async function activateTenantRole(
  userId: string
): Promise<Tenant | null> {
  const tenant = await getTenantByUserId(userId);

  if (!tenant) {
    return null;
  }

  await updateDoc(doc(db, "users", userId), {
    role: "tenant",
    updatedAt: serverTimestamp(),
  });

  return tenant;
}

/**
 * Get number of active tenants belonging to an owner.
 */
export async function getActiveTenantCountByOwner(
  ownerId: string
): Promise<number> {
  try {
    const tenantsRef = collection(
      db,
      TENANTS_COLLECTION
    );

    const tenantsQuery = query(
      tenantsRef,
      where("ownerId", "==", ownerId),
      where("status", "==", "active")
    );

    const snapshot =
      await getCountFromServer(
        tenantsQuery
      );

    return snapshot.data().count;
  } catch (error) {
    console.error(
      "[TenantService] Failed to count active tenants:",
      error
    );

    throw error;
  }
}