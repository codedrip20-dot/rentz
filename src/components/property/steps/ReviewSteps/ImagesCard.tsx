"use client";

import Image from "next/image";
import { Images } from "lucide-react";

import Card from "@/components/ui/Card";
import { usePropertyWizard } from "@/context/PropertyWizardContext";

export default function ImagesCard() {
    const { propertyData } = usePropertyWizard();

    const coverImage =
        propertyData.images.find((image) => image.isCover) ??
        propertyData.images[0];

    const galleryImages = propertyData.images.filter(
        (image) => !image.isCover
    );

    return (
        <Card>
            <div className="mb-6">
                <div className="flex items-center gap-3">
                    <Images className="h-6 w-6 text-blue-600" />

                    <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                            Property Images
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                            Review all uploaded property images before publishing.
                        </p>
                    </div>
                </div>
            </div>

            {propertyData.images.length === 0 ? (
                <div className="flex h-52 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
                    <p className="text-sm text-slate-500">
                        No images uploaded.
                    </p>
                </div>
            ) : (
                <div className="space-y-6">

                    {/* Cover Image */}

                    {coverImage && (
                        <div>
                            <div className="mb-3 flex items-center justify-between">
                                <h4 className="font-semibold text-slate-900">
                                    Cover Image
                                </h4>

                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                                    Featured
                                </span>
                            </div>

                            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200">
                                <Image
                                    src={coverImage.url}
                                    alt="Cover Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}

                    {/* Gallery */}

                    {galleryImages.length > 0 && (
                        <div>
                            <h4 className="mb-3 font-semibold text-slate-900">
                                Gallery
                            </h4>

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

                                {galleryImages.map((image) => (
                                    <div
                                        key={image.id}
                                        className="relative aspect-square overflow-hidden rounded-xl border border-slate-200"
                                    >
                                        <Image
                                            src={image.url}
                                            alt="Property Image"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}

                            </div>
                        </div>
                    )}

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm text-slate-600">
                            <span className="font-semibold text-slate-900">
                                {propertyData.images.length}
                            </span>{" "}
                            image
                            {propertyData.images.length !== 1 && "s"} uploaded.
                        </p>
                    </div>

                </div>
            )}
        </Card>
    );
}