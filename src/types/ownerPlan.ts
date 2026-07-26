export interface OwnerPlan {
    id: "basic" | "pro" | "enterprise";

    name: string;

    price: string;

    description: string;

    features: readonly string[];

    propertyLimit: number;

    recommended?: boolean;
}