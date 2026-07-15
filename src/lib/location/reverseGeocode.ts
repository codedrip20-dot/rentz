import { loadGoogleMaps } from "../google/maps";

export async function reverseGeocode(
    latitude: number,
    longitude: number
): Promise<google.maps.GeocoderResult> {
    await loadGoogleMaps();

    const geocoder = new google.maps.Geocoder();

    const { results } = await geocoder.geocode({
        location: {
            lat: latitude,
            lng: longitude,
        },
    });

    if (!results || results.length === 0) {
        throw new Error("No address found for the current location.");
    }

    return results[0];
}