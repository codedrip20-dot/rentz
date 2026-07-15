import { getPlacesService } from "./services";
import { parsePlace } from "./placeParser";

import type { ParsedPlace } from "@/types/google";

export async function getPlaceDetails(
    placeId: string
): Promise<ParsedPlace> {

    if (!placeId.trim()) {

        throw new Error(
            "Place ID is required."
        );

    }

    const placesService =
        await getPlacesService();

    return new Promise(
        (
            resolve,
            reject
        ) => {

            placesService.getDetails(

                {
                    placeId,

                    fields: [
                        "address_components",
                        "formatted_address",
                        "geometry",
                        "name",
                        "place_id",
                    ],

                },

                (
                    place,
                    status
                ) => {

                    if (
                        status !==
                        google.maps.places.PlacesServiceStatus.OK
                    ) {

                        reject(
                            new Error(
                                `Google Place Details failed: ${status}`
                            )
                        );

                        return;

                    }

                    if (!place) {

                        reject(
                            new Error(
                                "Google returned an empty place."
                            )
                        );

                        return;

                    }

                    try {

                        const parsedPlace =
                            parsePlace(place);

                        resolve(
                            parsedPlace
                        );

                    } catch (error) {

                        reject(

                            error instanceof Error
                                ? error
                                : new Error(
                                      "Failed to parse Google Place."
                                  )

                        );

                    }

                }

            );

        }

    );

}

export default getPlaceDetails;