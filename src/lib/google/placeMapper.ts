import type { ParsedPlace } from "@/types/google";
import type { Location } from "@/types/property";

/**
 * Converts a Google ParsedPlace into
 * Mission Rentz's internal Location model.
 *
 * Google Places is only an input.
 * Property.location is the single source of truth.
 */
export function mapParsedPlaceToLocation(
    place: ParsedPlace
): Location {
    return {
        placeId: place.placeId,

        nearbyLandmark: place.landmark,

        directions: "",

        address: {
            street: place.streetAddress,

            area: place.district,

            city: place.city,

            state: place.state,

            country: place.country,

            pincode: place.postalCode,
        },

        coordinates: {
            latitude: place.latitude,

            longitude: place.longitude,
        },
    };
}

export default mapParsedPlaceToLocation;