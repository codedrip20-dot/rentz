
export interface Coordinates {
    latitude: number;
    longitude: number;
}

export function getCurrentLocation(): Promise<Coordinates> {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported by this browser."));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        reject(
                            new Error(
                                "Location permission was denied."
                            )
                        );
                        break;

                    case error.POSITION_UNAVAILABLE:
                        reject(
                            new Error(
                                "Current location is unavailable."
                            )
                        );
                        break;

                    case error.TIMEOUT:
                        reject(
                            new Error(
                                "Location request timed out."
                            )
                        );
                        break;

                    default:
                        reject(
                            new Error(
                                "Failed to retrieve current location."
                            )
                        );
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    });
}