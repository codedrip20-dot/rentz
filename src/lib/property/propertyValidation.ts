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

    /* ------------------------------------------ */
    /* Title                                      */
    /* ------------------------------------------ */

    if (!details.title.trim()) {

        errors.title =
            "Property title is required.";

    }

    /* ------------------------------------------ */
    /* Description                                */
    /* ------------------------------------------ */

    if (!details.description.trim()) {

        errors.description =
            "Description is required.";

    }

    /* ------------------------------------------ */
    /* Area                                       */
    /* ------------------------------------------ */

    if (details.builtUpArea < 0) {

        errors.builtUpArea =
            "Built-up area cannot be negative.";

    }

    if (details.carpetArea < 0) {

        errors.carpetArea =
            "Carpet area cannot be negative.";

    }

    /* ------------------------------------------ */
    /* Floor                                      */
    /* ------------------------------------------ */

    if (details.floorNumber < 0) {

        errors.floorNumber =
            "Floor number cannot be negative.";

    }

    if (details.totalFloors <= 0) {

        errors.totalFloors =
            "Total floors must be greater than zero.";

    }

    if (
        details.floorNumber >= 0 &&
        details.totalFloors > 0 &&
        details.floorNumber > details.totalFloors
    ) {

        errors.floorNumber =
            "Floor number cannot exceed total floors.";

    }
    if (!details.furnishing) {

    errors.furnishing =
        "Please select the furnishing status.";

        }

    return {

        isValid:
            Object.keys(errors).length === 0,

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

    return {

        isValid:
            Object.keys(errors).length === 0,

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