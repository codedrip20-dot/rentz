"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import { getOwnerRegistrationStatus } from "@/lib/firebase/firestore";

import AuthenticationLoader from "./OwnerRegistraionLoader";
import LoginRequired from "./LoginRequired";
import BasicInformation from "./BasicInformation";
import ErrorMessage from "./ErrorMessage";

interface AuthenticationGateProps {
    children: React.ReactNode;
}

export default function AuthenticationGate({
    children,
}: AuthenticationGateProps) {
    const { currentUser, authLoading } = useAuth();

    const [checking, setChecking] = useState(true);
    const [profileComplete, setProfileComplete] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (authLoading) return;

        async function checkAccess() {
            try {
                if (!currentUser) {
                    setChecking(false);
                    return;
                }

                const status = await getOwnerRegistrationStatus(
                    currentUser.uid
                );

                if (!status.userExists) {
                    setError("User account not found.");
                    return;
                }

                setProfileComplete(status.profileComplete);
                setIsOwner(status.isOwner);
            } catch (error) {
                console.error("Authentication Gate:", error);
                setError(
                    "Something went wrong while verifying your account."
                );
            } finally {
                setChecking(false);
            }
        }

        checkAccess();
    }, [currentUser, authLoading]);

    if (authLoading || checking) {
        return <AuthenticationLoader />;
    }

    if (!currentUser) {
        return <LoginRequired />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (!profileComplete) {
        return <BasicInformation />;
    }

    if (isOwner) {
        return (
            <ErrorMessage
                title="Already Registered"
                message="You are already registered as a property owner."
            />
        );
    }

    return <>{children}</>;
}