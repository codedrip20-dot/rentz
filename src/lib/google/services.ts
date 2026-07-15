import { loadGoogleMaps } from "./maps";

let autocompleteService:
    google.maps.places.AutocompleteService | null = null;

let placesService:
    google.maps.places.PlacesService | null = null;

let initializationPromise:
    Promise<void> | null = null;

/**
 * Initializes Google Maps services once.
 * Safe to call multiple times.
 */
async function initializeServices(): Promise<void> {

    if (
        autocompleteService &&
        placesService
    ) {
        return;
    }

    if (initializationPromise) {
        return initializationPromise;
    }

    initializationPromise =
        (async () => {

            await loadGoogleMaps();

            const container =
                document.createElement("div");

            autocompleteService =
                new google.maps.places.AutocompleteService();

            placesService =
                new google.maps.places.PlacesService(
                    container
                );

        })();

    try {

        await initializationPromise;

    } finally {

        initializationPromise =
            null;

    }

}

/**
 * Returns the singleton AutocompleteService.
 */
export async function getAutocompleteService():
    Promise<google.maps.places.AutocompleteService> {

    await initializeServices();

    if (!autocompleteService) {

        throw new Error(
            "Failed to initialize Google AutocompleteService."
        );

    }

    return autocompleteService;

}

/**
 * Returns the singleton PlacesService.
 */
export async function getPlacesService():
    Promise<google.maps.places.PlacesService> {

    await initializeServices();

    if (!placesService) {

        throw new Error(
            "Failed to initialize Google PlacesService."
        );

    }

    return placesService;

}

/**
 * Indicates whether Google services
 * have already been initialized.
 */
export function isGoogleServicesReady(): boolean {

    return (
        autocompleteService !== null &&
        placesService !== null
    );

}