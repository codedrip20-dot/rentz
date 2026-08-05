export interface UserData {
    uid: string;
    fullName: string;
    email: string;
    phone: string;
    photoURL: string;
    role: "normalUser" | "owner" |"tenant";
    emailVerified: boolean;
    profileComplete: boolean;
    createdAt: unknown;
    updatedAt: unknown;
}