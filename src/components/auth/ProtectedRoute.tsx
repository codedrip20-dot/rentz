"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import {
  getUserRole,
  UserRole,
} from "@/lib/firebase/firestore";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const router = useRouter();

  const { currentUser, authLoading } = useAuth();

  const [roleLoading, setRoleLoading] = useState(
    Boolean(allowedRoles?.length)
  );

  const [authorized, setAuthorized] = useState(
    !allowedRoles?.length
  );

  useEffect(() => {
    let isMounted = true;

    const checkAuthorization = async () => {
      /* ------------------------------------------------------------------ */
      /* Authentication check                                                */
      /* ------------------------------------------------------------------ */

      if (authLoading) {
        return;
      }

      if (!currentUser) {
        if (isMounted) {
          setRoleLoading(false);
          setAuthorized(false);
        }

        router.replace("/login");
        return;
      }

      /* ------------------------------------------------------------------ */
      /* No role restriction                                                 */
      /* ------------------------------------------------------------------ */

      if (!allowedRoles || allowedRoles.length === 0) {
        if (isMounted) {
          setRoleLoading(false);
          setAuthorized(true);
        }

        return;
      }

      /* ------------------------------------------------------------------ */
      /* Role authorization                                                   */
      /* ------------------------------------------------------------------ */

      try {
        if (isMounted) {
          setRoleLoading(true);
        }

        const role = await getUserRole(currentUser.uid);

        const hasPermission =
          role !== null &&
          allowedRoles.includes(role as UserRole);

        if (!hasPermission) {
          if (isMounted) {
            setAuthorized(false);
            setRoleLoading(false);
          }

          router.replace("/");
          return;
        }

        if (isMounted) {
          setAuthorized(true);
          setRoleLoading(false);
        }
      } catch (error) {
        console.error(
          "Failed to verify user authorization:",
          error
        );

        /*
         * Fail closed:
         * If we cannot verify the user's role,
         * do not allow access to a role-protected route.
         */
        if (isMounted) {
          setAuthorized(false);
          setRoleLoading(false);
        }

        router.replace("/");
      }
    };

    checkAuthorization();

    return () => {
      isMounted = false;
    };
  }, [
    authLoading,
    currentUser,
    allowedRoles,
    router,
  ]);

  /* ---------------------------------------------------------------------- */
  /* Loading state                                                           */
  /* ---------------------------------------------------------------------- */

  if (authLoading || roleLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-sm text-slate-400">
          Loading...
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------------- */
  /* Unauthorized                                                            */
  /* ---------------------------------------------------------------------- */

  if (!currentUser || !authorized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-sm text-slate-400">
          Redirecting...
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------------- */
  /* Authorized                                                              */
  /* ---------------------------------------------------------------------- */

  return <>{children}</>;
}