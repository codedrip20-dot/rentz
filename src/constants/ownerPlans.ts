import type { OwnerPlan } from "@/types/ownerPlan";

export const OWNER_PLANS: readonly OwnerPlan[] = [
    {
        id: "basic",
        name: "Basic",
        price: "₹350/month",
        description: "Perfect for individual property owners.",
        propertyLimit: 1,
        features: [
            "1 Property",
            "Property Management",
            "Marketplace Listing",
            "Email Support",
        ],
    },
    {
        id: "pro",
        name: "Pro",
        price: "₹800/month",
        description: "Ideal for growing property owners.",
        propertyLimit: 3,
        recommended: true,
        features: [
            "Up to 3 Properties",
            "Marketplace Listing",
            "Priority Support",
            "Property Analytics",
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "₹1500/month",
        description: "Built for professional property managers.",
        propertyLimit: 5,
        features: [
            "Up to 5 Properties",
            "Advanced Dashboard",
            "Marketplace Listing",
            "Priority Support",
        ],
    },
] as const;