import { ParsedPlace } from "@/types/google";

const getComponent = (
    components: google.maps.GeocoderAddressComponent[] = [],
    type: string
): string => {
    return (
        components.find((component) =>
            component.types.includes(type)
        )?.long_name ?? ""
    );
};

function isPlaceResult(
    place:
        | google.maps.places.PlaceResult
        | google.maps.GeocoderResult
): place is google.maps.places.PlaceResult {
    return "name" in place;
}

export function parsePlace(
    place:
        | google.maps.places.PlaceResult
        | google.maps.GeocoderResult
): ParsedPlace {

    const components =
        place.address_components ?? [];

    const streetNumber =
        getComponent(
            components,
            "street_number"
        );

    const route =
        getComponent(
            components,
            "route"
        );

    return {

        placeId:
            place.place_id ?? "",

        name:
            isPlaceResult(place)
                ? place.name ?? ""
                : place.formatted_address ?? "",

        formattedAddress:
            place.formatted_address ?? "",

        streetAddress:
           `${streetNumber} ${route}`.trim(),

        landmark:
            getComponent(
                components,
                "sublocality"
            ) ||
            getComponent(
                components,
                "neighborhood"
            ),

        city:
            getComponent(
                components,
                "locality"
            ) ||
            getComponent(
                components,
                "postal_town"
            ),

        district:
            getComponent(
                components,
                "administrative_area_level_2"
            ),

        state:
            getComponent(
                components,
                "administrative_area_level_1"
            ),

        country:
            getComponent(
                components,
                "country"
            ),

        postalCode:
            getComponent(
                components,
                "postal_code"
            ),

        latitude:
            place.geometry?.location?.lat() ?? 0,

        longitude:
            place.geometry?.location?.lng() ?? 0,

    };

}