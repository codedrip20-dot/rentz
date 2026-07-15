import { Loader } from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_API_KEY) {
    throw new Error(
        "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is missing. Please check your .env.local file."
    );
}

export const googleMapsLoader = new Loader({
    apiKey: GOOGLE_MAPS_API_KEY,
    version: "weekly",
    libraries: ["places"],
});

let googleMapsPromise: Promise<typeof google> | null = null;

/**
 * Loads the Google Maps JavaScript API.
 * Multiple calls reuse the same Promise so the API
 * is only loaded once during the application's lifetime.
 */
export const loadGoogleMaps = (): Promise<typeof google> => {
    if (!googleMapsPromise) {
        googleMapsPromise = googleMapsLoader.load();
    }

    return googleMapsPromise;
};