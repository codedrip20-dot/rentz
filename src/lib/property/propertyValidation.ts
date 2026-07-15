import { Property } from "@/types/property";

export interface ValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
}

/* ------------------------------------------ */
/* Utility                                    */
/* ------------------------------------------ */

const success = (): ValidationResult => ({
    isValid: true,
    errors: {},
});

/* ------------------------------------------ */
/* Step 1 - Location                          */
/* ------------------------------------------ */

export const validateLocationStep = (
    property: Property
): ValidationResult => {

    const errors: Record<string, string> = {};

    if (!property.propertyType) {
        errors.propertyType = "Please select a property type.";
    }

    const address = property.location.address;

    if (!address.street.trim()) {
        errors.street = "Street address is required.";
    }

    if (!address.city.trim()) {
        errors.city = "City is required.";
    }

    if (!address.state.trim()) {
        errors.state = "State is required.";
    }

    if (!address.country.trim()) {
        errors.country = "Country is required.";
    }

    if (!address.pincode.trim()) {
        errors.pincode = "Pincode is required.";
    }

    if (
        address.pincode &&
        !/^\d{6}$/.test(address.pincode)
    ) {
        errors.pincode = "Invalid pincode.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

/* ------------------------------------------ */
/* Step 2 - Details                           */
/* ------------------------------------------ */

export const validateDetailsStep = (
    property: Property
): ValidationResult => {

    const errors: Record<string, string> = {};

    const details = property.details;

    if (!details.title.trim()) {
        errors.title = "Property title is required.";
    }

    if (!details.description.trim()) {
        errors.description = "Description is required.";
    }

    if (details.builtUpArea < 0) {
        errors.builtUpArea =
            "Built-up area cannot be negative.";
    }

    if (details.carpetArea < 0) {
        errors.carpetArea =
            "Carpet area cannot be negative.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

/* ------------------------------------------ */
/* Step 3 - Information                       */
/* ------------------------------------------ */

export const validateInformationStep = (
    property: Property
): ValidationResult => {

    const errors: Record<string, string> = {};

    const pricing = property.information.pricing;

    if (pricing.monthlyRent <= 0) {
        errors.monthlyRent =
            "Monthly rent must be greater than zero.";
    }

    if (pricing.securityDeposit < 0) {
        errors.securityDeposit =
            "Security deposit cannot be negative.";
    }

    if (pricing.maintenanceCharge < 0) {
        errors.maintenanceCharge =
            "Maintenance charge cannot be negative.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

/* ------------------------------------------ */
/* Step 4 - Images                            */
/* ------------------------------------------ */

export const validateImagesStep = (
    property: Property
): ValidationResult => {

    const errors: Record<string, string> = {};

    if (property.images.length === 0) {
        errors.images =
            "Please upload at least one image.";
    }

    const hasCover = property.images.some(
        (image) => image.isCover
    );

    if (
        property.images.length > 0 &&
        !hasCover
    ) {
        errors.cover =
            "Please select a cover image.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

/* ------------------------------------------ */
/* Step 5 - Review                            */
/* ------------------------------------------ */

export const validateReviewStep = (
    property: Property
): ValidationResult => {

    const validators = [
        validateLocationStep(property),
        validateDetailsStep(property),
        validateInformationStep(property),
        validateImagesStep(property),
    ];

    const errors = validators.reduce(
        (acc, validator) => ({
            ...acc,
            ...validator.errors,
        }),
        {}
    );

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

/* ------------------------------------------ */
/* Master Validator                           */
/* ------------------------------------------ */

export const validateStep = (
    step: number,
    property: Property
): ValidationResult => {

    switch (step) {

        case 0:
            return validateLocationStep(property);

        case 1:
            return validateDetailsStep(property);

        case 2:
            return validateInformationStep(property);

        case 3:
            return validateImagesStep(property);

        case 4:
            return validateReviewStep(property);

        default:
            return success();
    }
};