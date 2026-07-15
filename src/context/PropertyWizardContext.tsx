"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
} from "react";

import { initialProperty } from "@/constants/initialProperty";
import {
    ValidationResult,
    validateStep,
} from "@/lib/property/propertyValidation";
import type { Property } from "@/types/property";

interface PropertyWizardContextType {
    currentStep: number;

    propertyData: Property;

    validation: ValidationResult;

    draftId: string | null;

    isSaving: boolean;

    nextStep: () => void;

    previousStep: () => void;

    goToStep: (step: number) => void;

    setPropertyData: React.Dispatch<
        React.SetStateAction<Property>
    >;

    /**
     * Merge updates into the property.
     * Preferred over setPropertyData in UI components.
     */
    updateProperty: (
        updater:
            | Partial<Property>
            | ((previous: Property) => Property)
    ) => void;

    setDraftId: React.Dispatch<
        React.SetStateAction<string | null>
    >;

    setIsSaving: React.Dispatch<
        React.SetStateAction<boolean>
    >;

    resetWizard: () => void;
}

const PropertyWizardContext =
    createContext<PropertyWizardContextType | null>(
        null
    );

export function PropertyWizardProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [currentStep, setCurrentStep] =
        useState(0);

    const [propertyData, setPropertyData] =
        useState<Property>(initialProperty);

    const [draftId, setDraftId] =
        useState<string | null>(null);

    const [isSaving, setIsSaving] =
        useState(false);

    const [validation, setValidation] =
        useState<ValidationResult>({
            isValid: true,
            errors: {},
        });

    const updateProperty = useCallback<
    PropertyWizardContextType["updateProperty"]
        >((updater) => {
    if (typeof updater === "function") {
        setPropertyData(updater);
        return;
    }

    setPropertyData((previous) => ({
        ...previous,
        ...updater,
    }));
        }, []);

    const nextStep = () => {

    console.log("========== PROPERTY DATA ==========");
    console.log(propertyData);

    const result = validateStep(
        currentStep,
        propertyData
    );

    console.log("========== VALIDATION ==========");
    console.log(result);

    setValidation(result);

    if (!result.isValid) {
        console.log("❌ Validation Failed");
        return;
    }

    console.log("✅ Validation Passed");

    setCurrentStep((prev) => prev + 1);
};
    const previousStep = () => {
        setCurrentStep((previous) =>
            Math.max(previous - 1, 0)
        );
    };

    const goToStep = (step: number) => {
        setCurrentStep(step);
    };

    const resetWizard = () => {
        setCurrentStep(0);

        setPropertyData(initialProperty);

        setDraftId(null);

        setValidation({
            isValid: true,
            errors: {},
        });

        setIsSaving(false);
    };

    return (
        <PropertyWizardContext.Provider
            value={{
                currentStep,

                propertyData,

                validation,

                draftId,

                isSaving,

                nextStep,

                previousStep,

                goToStep,

                setPropertyData,

                updateProperty,

                setDraftId,

                setIsSaving,

                resetWizard,
            }}
        >
            {children}
        </PropertyWizardContext.Provider>
    );
}

export function usePropertyWizard() {
    const context =
        useContext(PropertyWizardContext);

    if (!context) {
        throw new Error(
            "usePropertyWizard must be used inside PropertyWizardProvider."
        );
    }

    return context;
}