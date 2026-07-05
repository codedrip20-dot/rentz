"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { User } from "firebase/auth";

import {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
  googleSignIn,
  subscribeToAuth,
  resendVerificationEmail as resendVerificationEmailService,
  refreshAuthState,
  updateUserProfile,
  sendVerificationEmail,
} from "@/lib/firebase/auth";

import {
  provisionUserAccount,
} from "@/lib/firebase/firestore";

import {
  savePendingRegistration,
  getPendingRegistration,
  clearPendingRegistration,
} from "@/lib/storage/registration";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

interface AuthContextType {
  currentUser: User | null;

  authLoading: boolean;

  register: (
    data: RegisterData
  ) => Promise<void>;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;

  forgotPassword: (
    email: string
  ) => Promise<void>;

  googleLogin: () => Promise<void>;

  resendVerificationEmail: () => Promise<void>;

  refreshCurrentUser: () => Promise<User | null>;

  isEmailVerified: () => Promise<boolean>;

  completeRegistration: () => Promise<void>;
}

/* -------------------------------------------------------------------------- */
/*                               Context                                      */
/* -------------------------------------------------------------------------- */

const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

/* -------------------------------------------------------------------------- */
/*                              Provider                                      */
/* -------------------------------------------------------------------------- */

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentUser, setCurrentUser] =
    useState<User | null>(null);

  const [authLoading, setAuthLoading] =
    useState(true);

  /* ---------------------------------------------------------------------- */
  /*                               Register                                 */
  /* ---------------------------------------------------------------------- */

  const register = async ({
    fullName,
    email,
    password,
    phone,
  }: RegisterData): Promise<void> => {
    const credential = await registerUser({
      email,
      password,
    });

    await updateUserProfile(
      credential.user,
      fullName
    );

    await sendVerificationEmail(
      credential.user
    );

    savePendingRegistration({
      fullName,
      email,
      password,
      phone,
    });
  };

  /*                                Login                                   */
  /* ---------------------------------------------------------------------- */

  const login = async (
    email: string,
    password: string
  ): Promise<void> => {
    await loginUser({
      email,
      password,
    });
  };

  /* ---------------------------------------------------------------------- */
  /*                                Logout                                  */
  /* ---------------------------------------------------------------------- */

  const logout = async (): Promise<void> => {
    clearPendingRegistration();
    await logoutUser();
  };

  /* ---------------------------------------------------------------------- */
  /*                           Forgot Password                              */
  /* ---------------------------------------------------------------------- */

  const forgotPassword = async (
    email: string
  ): Promise<void> => {
    await resetPassword(email);
  };

  /* ---------------------------------------------------------------------- */
  /*                            Google Login                                */
  /* ---------------------------------------------------------------------- */

  const googleLogin = async (): Promise<void> => {
    const credential = await googleSignIn();

    await provisionUserAccount({
      uid: credential.user.uid,
      fullName:
        credential.user.displayName ?? "",
      email:
        credential.user.email ?? "",
      phone: "",
      role: "normalUser",
      photoURL:
        credential.user.photoURL ?? "",
      emailVerified:
        credential.user.emailVerified,
    });
  };

  /* ---------------------------------------------------------------------- */
  /*                    Resend Verification Email                           */
  /* ---------------------------------------------------------------------- */

  const resendVerificationEmail =
    async (): Promise<void> => {
      await resendVerificationEmailService();
    };

  /* ---------------------------------------------------------------------- */
  /*                     Refresh Current User                               */
  /* ---------------------------------------------------------------------- */

  const refreshCurrentUser =
    async (): Promise<User | null> => {
      return await refreshAuthState();
    };

  /* ---------------------------------------------------------------------- */
  /*                     Check Email Verification                           */
  /* ---------------------------------------------------------------------- */

  const isEmailVerified =
    async (): Promise<boolean> => {
      const user =
        await refreshCurrentUser();

      return user?.emailVerified ?? false;
    };

  /* ---------------------------------------------------------------------- */
  /*                    Complete Registration                               */
  /* ---------------------------------------------------------------------- */

  const completeRegistration =
    async (): Promise<void> => {
      const user =
        await refreshCurrentUser();

      if (!user) {
        throw new Error(
          "No authenticated user found."
        );
      }

      if (!user.emailVerified) {
        throw new Error(
          "Please verify your email before continuing."
        );
      }

      const pendingRegistration =
        getPendingRegistration();

      if (!pendingRegistration) {
        throw new Error(
          "Registration session expired. Please register again."
        );
      }

      await provisionUserAccount({
        uid: user.uid,
        fullName:
          pendingRegistration.fullName,
        email:
          user.email ??
          pendingRegistration.email,
        phone:
          pendingRegistration.phone,
        role: "normalUser",
        photoURL:
          user.photoURL ?? "",
        emailVerified:
          user.emailVerified,
      });

      clearPendingRegistration();
    };

  /* ---------------------------------------------------------------------- */
  /*                    Global Auth Listener                                */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    const unsubscribe =
      subscribeToAuth((user) => {
        console.log("Auth state changed:", user);
        setCurrentUser(user);
        setAuthLoading(false);
      });

    return unsubscribe;
  }, []);

  /* ---------------------------------------------------------------------- */
  /*                          Context Value                                 */
  /* ---------------------------------------------------------------------- */

  const value: AuthContextType = {
    currentUser,
    authLoading,
    register,
    login,
    logout,
    forgotPassword,
    googleLogin,
    resendVerificationEmail,
    refreshCurrentUser,
    isEmailVerified,
    completeRegistration,
  };

  /* ---------------------------------------------------------------------- */
  /*                             Provider                                   */
  /* ---------------------------------------------------------------------- */

  return (
    <AuthContext.Provider value={value}>
      {!authLoading && children}
    </AuthContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Custom Hook                                   */
/* -------------------------------------------------------------------------- */

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider."
    );
  }

  return context;
};