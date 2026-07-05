import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";

import { auth } from "./firebase";

/* -------------------------------------------------------------------------- */
/*                                Register                                    */
/* -------------------------------------------------------------------------- */

interface RegisterUserData {
  email: string;
  password: string;
}

export const registerUser = async ({
  email,
  password,
}: RegisterUserData): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
};

/* -------------------------------------------------------------------------- */
/*                                  Login                                     */
/* -------------------------------------------------------------------------- */

interface LoginUserData {
  email: string;
  password: string;
}

export const loginUser = async ({
  email,
  password,
}: LoginUserData): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

/* -------------------------------------------------------------------------- */
/*                                 Logout                                     */
/* -------------------------------------------------------------------------- */

export const logoutUser = async (): Promise<void> => {
  await signOut(auth);
};

/* -------------------------------------------------------------------------- */
/*                             Reset Password                                 */
/* -------------------------------------------------------------------------- */

export const resetPassword = async (
  email: string
): Promise<void> => {
  await sendPasswordResetEmail(auth, email);
};

/* -------------------------------------------------------------------------- */
/*                           Update User Profile                              */
/* -------------------------------------------------------------------------- */

export const updateUserProfile = async (
  user: User,
  displayName: string
): Promise<void> => {
  await updateProfile(user, {
    displayName,
  });
};

/* -------------------------------------------------------------------------- */
/*                      Send Verification Email                               */
/* -------------------------------------------------------------------------- */

export const sendVerificationEmail = async (
  user: User
): Promise<void> => {
  await sendEmailVerification(user);
};

/* -------------------------------------------------------------------------- */
/*                    Resend Verification Email                               */
/* -------------------------------------------------------------------------- */

export const resendVerificationEmail =
  async (): Promise<void> => {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("No authenticated user found.");
    }

    await sendEmailVerification(user);
  };

/* -------------------------------------------------------------------------- */
/*                              Google Login                                  */
/* -------------------------------------------------------------------------- */

const googleProvider = new GoogleAuthProvider();

export const googleSignIn =
  async (): Promise<UserCredential> => {
    return await signInWithPopup(
      auth,
      googleProvider
    );
  };

/* -------------------------------------------------------------------------- */
/*                        Refresh Current User                                */
/* -------------------------------------------------------------------------- */

export const refreshAuthState =
  async (): Promise<User | null> => {
    const user = auth.currentUser;

    if (!user) return null;

    await user.reload();

    return auth.currentUser;
  };

/* -------------------------------------------------------------------------- */
/*                       Check Email Verification                             */
/* -------------------------------------------------------------------------- */

export const isCurrentUserVerified =
  async (): Promise<boolean> => {
    const user = await refreshAuthState();

    if (!user) return false;

    return user.emailVerified;
  };

/* -------------------------------------------------------------------------- */
/*                          Current User                                      */
/* -------------------------------------------------------------------------- */

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

/* -------------------------------------------------------------------------- */
/*                        Auth State Listener                                 */
/* -------------------------------------------------------------------------- */

export const subscribeToAuth = (
  callback: (user: User | null) => void
) => {
  return onAuthStateChanged(auth, callback);
};