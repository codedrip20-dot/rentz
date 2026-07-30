"use client";

import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import {
    CalendarClock,
    CalendarDays,
    ChevronRight,
    CheckCircle2,
    Info,
} from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { useRoomWizard } from "@/hooks/useRoomWizard";

const AvailableFromPicker = () => {
    const {
        room,
        updateAvailability,
    } = useRoomWizard();

    const availableNow = room.availability.availableNow;

    const [open, setOpen] = useState(false);

    const selectedDate =
        room.availability.availableFrom?.toDate();

    const handleSelect = (date: Date | undefined) => {
        if (!date) return;

        updateAvailability({
            availableFrom: Timestamp.fromDate(date),
        });

        setOpen(false);
    };

    const formattedDate = selectedDate?.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );

    const formattedDay = selectedDate?.toLocaleDateString(
        "en-IN",
        {
            weekday: "long",
        }
    );

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-violet-50 via-indigo-50 to-blue-50 p-6">
                <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 text-white shadow-xl shadow-indigo-500/20">
                        <CalendarDays className="h-8 w-8" />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-bold text-slate-900">
                                Available From
                            </h3>

                            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                                Optional
                            </span>
                        </div>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                            Schedule when this room becomes available
                            for tenants. If the room is available
                            immediately, this field will automatically
                            be disabled.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6 p-6">
                {/* Date Picker */}
                <Popover
                    open={open}
                    onOpenChange={setOpen}
                >
                    <PopoverTrigger>
                        <button
                            type="button"
                            disabled={availableNow}
                            className={`group w-full rounded-3xl border text-left transition-all duration-300 ${
                                availableNow
                                    ? "cursor-not-allowed border-slate-200 bg-slate-100 opacity-70"
                                    : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-xl"
                            }`}
                        >
                            <div className="flex items-center justify-between p-5">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                        <CalendarClock className="h-6 w-6" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">
                                            {formattedDate ??
                                                "Select Availability Date"}
                                        </p>

                                        <p className="mt-1 text-sm text-slate-500">
                                            {formattedDay ??
                                                "Choose the first day tenants can move in"}
                                        </p>
                                    </div>
                                </div>

                                <ChevronRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                            </div>
                        </button>
                    </PopoverTrigger>

                    <PopoverContent
                        side="bottom"
                        align="start"
                        sideOffset={10}
                        className="w-auto rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl"
                    >
                        <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleSelect}
                            disabled={(date) =>
                                date < new Date()
                            }
                        />
                    </PopoverContent>
                </Popover>

                {/* Selected Date Summary */}
                {selectedDate && !availableNow && (
                    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
                        <div className="flex items-start gap-4">
                            <div className="rounded-2xl bg-emerald-100 p-3">
                                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                            </div>

                            <div className="flex-1">
                                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                                    Availability Scheduled
                                </p>

                                <h4 className="mt-1 text-lg font-bold text-emerald-900">
                                    {formattedDate}
                                </h4>

                                <p className="text-sm text-emerald-700">
                                    {formattedDay}
                                </p>

                                <p className="mt-3 text-sm leading-6 text-emerald-800">
                                    This room will automatically
                                    appear as available from the
                                    selected date.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Status */}
                <div
                    className={`rounded-3xl border-l-4 p-5 ${
                        availableNow
                            ? "border-l-blue-600 border-blue-200 bg-blue-50"
                            : "border-l-amber-500 border-amber-200 bg-amber-50"
                    }`}
                >
                    <div className="flex items-start gap-4">
                        <div
                            className={`rounded-xl p-2 ${
                                availableNow
                                    ? "bg-blue-100"
                                    : "bg-amber-100"
                            }`}
                        >
                            <Info
                                className={`h-5 w-5 ${
                                    availableNow
                                        ? "text-blue-600"
                                        : "text-amber-600"
                                }`}
                            />
                        </div>

                        <div>
                            <h4
                                className={`font-semibold ${
                                    availableNow
                                        ? "text-blue-900"
                                        : "text-amber-900"
                                }`}
                            >
                                {availableNow
                                    ? "Available Immediately"
                                    : "Future Availability"}
                            </h4>

                            <p
                                className={`mt-2 text-sm leading-7 ${
                                    availableNow
                                        ? "text-blue-800"
                                        : "text-amber-800"
                                }`}
                            >
                                {availableNow
                                    ? "Since this room is marked as available now, tenants can book and move in immediately. A future availability date is not required."
                                    : "Choose the first day this room becomes available. This date will be shown on your marketplace listing and helps prevent booking conflicts."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AvailableFromPicker;