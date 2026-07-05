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