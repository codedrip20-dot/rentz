"use client";

import AddressSearch from "./AddressSearch";

import InputField from "@/components/ui/InputField";

import { usePropertyWizard } from "@/context/PropertyWizardContext";

export default function AddressForm() {
    const {
        propertyData,
        setPropertyData,
    } = usePropertyWizard();

    const location = propertyData.location;

    function updateAddressField<
        K extends keyof typeof location.address
    >(
        field: K,
        value: typeof location.address[K]
    ) {
        setPropertyData((previous) => ({
            ...previous,
            location: {
                ...previous.location,
                address: {
                    ...previous.location.address,
                    [field]: value,
                },
            },
        }));
    }

    return (
        <div className="space-y-6">

            <AddressSearch />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <InputField
                    label="Street Address"
                    value={location.address.street}
                    onChange={(event) =>
                        updateAddressField(
                            "street",
                            event.target.value
                        )
                    }
                />

                <InputField
                    label="Area / District"
                    value={location.address.area}
                    onChange={(event) =>
                        updateAddressField(
                            "area",
                            event.target.value
                        )
                    }
                />

                <InputField
                    label="City"
                    value={location.address.city}
                    onChange={(event) =>
                        updateAddressField(
                            "city",
                            event.target.value
                        )
                    }
                />

                <InputField
                    label="State"
                    value={location.address.state}
                    onChange={(event) =>
                        updateAddressField(
                            "state",
                            event.target.value
                        )
                    }
                />

                <InputField
                    label="Country"
                    value={location.address.country}
                    onChange={(event) =>
                        updateAddressField(
                            "country",
                            event.target.value
                        )
                    }
                />

                <InputField
                    label="Postal Code"
                    value={location.address.pincode}
                    onChange={(event) =>
                        updateAddressField(
                            "pincode",
                            event.target.value
                        )
                    }
                />

                <InputField
                    label="Latitude"
                    value={location.coordinates.latitude.toString()}
                    readOnly
                />

                <InputField
                    label="Longitude"
                    value={location.coordinates.longitude.toString()}
                    readOnly
                />

            </div>

        </div>
    );
}