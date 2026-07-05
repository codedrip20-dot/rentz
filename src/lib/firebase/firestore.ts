import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  DocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

import { db } from "./firebase";

/* -------------------------------------------------------------------------- */
/*                                  User Types                                */
/* -------------------------------------------------------------------------- */

export type UserRole =
  | "normalUser"
  | "owner"
  | "freelancer"
  | "admin";

export interface UserData {
  uid: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  photoURL: string;
  emailVerified: boolean;
}

/* -------------------------------------------------------------------------- */
/*                           Get User Document                                */
/* -------------------------------------------------------------------------- */

export const getUserDocument = async (
  uid: string
): Promise<DocumentSnapshot<DocumentData>> => {
  return await getDoc(doc(db, "users", uid));
};

/* -------------------------------------------------------------------------- */
/*                         Check User Exists                                  */
/* -------------------------------------------------------------------------- */

export const userDocumentExists = async (
  uid: string
): Promise<boolean> => {
  const snapshot = await getUserDocument(uid);

  return snapshot.exists();
};

/* -------------------------------------------------------------------------- */
/*                           Create User Document                             */
/* -------------------------------------------------------------------------- */

export const createUserDocument = async (
  user: UserData
): Promise<void> => {
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,

    fullName: user.fullName,

    email: user.email,

    phone: user.phone,

    role: user.role,

    photoURL: user.photoURL,

    emailVerified: user.emailVerified,

    profileCompleted: false,

    createdAt: serverTimestamp(),

    updatedAt: serverTimestamp(),
  });
};

/* -------------------------------------------------------------------------- */
/*                           Complete Registration                            */
/* -------------------------------------------------------------------------- */

export const provisionUserAccount = async (
  user: UserData
): Promise<void> => {
  const exists = await userDocumentExists(user.uid);

  if (exists) return;

  await createUserDocument(user);
};

/* -------------------------------------------------------------------------- */
/*                             Update User Profile                            */
/* -------------------------------------------------------------------------- */

export const updateUserDocument = async (
  uid: string,
  data: Partial<UserData>
): Promise<void> => {
  await updateDoc(doc(db, "users", uid), {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

/* -------------------------------------------------------------------------- */
/*                           Mark Profile Complete                            */
/* -------------------------------------------------------------------------- */

export const markProfileCompleted = async (
  uid: string
): Promise<void> => {
  await updateDoc(doc(db, "users", uid), {
    profileCompleted: true,
    updatedAt: serverTimestamp(),
  });
};

/* -------------------------------------------------------------------------- */
/*                           Get User Profile                      */
/* -------------------------------------------------------------------------- */

export const getUserProfile = async (uid: string) => {
  const userRef = doc(db, "users", uid);

  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    throw new Error("User profile not found.");
  }

  return snapshot.data();
};


/* -------------------------------------------------------------------------- */
/*                           Update User Profile                      */
/* -------------------------------------------------------------------------- */

export const updateUserProfile = async (
  uid: string,
  data: Record<string, unknown>
): Promise<void> => {
  const userRef = doc(db, "users", uid);

  await updateDoc(userRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

/* -------------------------------------------------------------------------- */
/*                           Check if User Profile Exists                      */
/* -------------------------------------------------------------------------- */

export const userProfileExists = async (
  uid: string
): Promise<boolean> => {
  const userRef = doc(db, "users", uid);

  const snapshot = await getDoc(userRef);

  return snapshot.exists();
};

/* -------------------------------------------------------------------------- */
/*                          Get only one field from user Profile              */
/* -------------------------------------------------------------------------- */

export const getUserRole = async (
  uid: string
): Promise<string | null> => {
  const user = await getUserProfile(uid);

  return user.role ?? null;
};
