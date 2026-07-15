import { getAutocompleteService } from "./services";

import type { PlaceSuggestion } from "@/types/google";

const MINIMUM_QUERY_LENGTH = 3;

export async function getPredictions(
    query: string,
    country = "in"
): Promise<PlaceSuggestion[]> {

    const searchQuery =
        query.trim();

    if (
        searchQuery.length <
        MINIMUM_QUERY_LENGTH
    ) {

        return [];

    }

    const autocompleteService =
        await getAutocompleteService();

    return new Promise(
        (
            resolve,
            reject
        ) => {

            autocompleteService.getPlacePredictions(

                {
                    input: searchQuery,

                    componentRestrictions: {
                        country,
                    },

                    types: [
                        "geocode",
                    ],

                },

                (
                    predictions,
                    status
                ) => {

                    if (
                        status ===
                            google.maps.places.PlacesServiceStatus.ZERO_RESULTS ||
                        !predictions
                    ) {

                        resolve([]);

                        return;

                    }

                    if (
                        status !==
                        google.maps.places.PlacesServiceStatus.OK
                    ) {

                        reject(
                            new Error(
                               `Google Places prediction failed: ${status}`
                            )
                        );

                        return;

                    }

                    resolve(

                        predictions.map(

                            (
                                prediction
                            ): PlaceSuggestion => ({

                                placeId:
                                    prediction.place_id,

                                description:
                                    prediction.description,

                            })

                        )

                    );

                }

            );

        }

    );

}

export default getPredictions;