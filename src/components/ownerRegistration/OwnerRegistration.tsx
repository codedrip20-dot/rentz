"use client";

import { useState } from "react";

import BasicInformation from "./BasicInformation";
import BasicInformationForm from "./BasicInformationForm";
import PaymentSection from "./PaymentSection";
import PlanSelection from "./PlanSelection";
import RegistrationHeader from "./RegistrationHeader";
import RegistrationStepper from "./RegistrationStepper";
import RegistrationSuccess from "./RegistrationSuccess";

import type { OwnerPlan } from "@/types/ownerPlan";
import type { RegistrationStep } from "@/types/registration";
import { registerOwner } from "@/lib/firebase/owner";
import { useAuth } from "@/context/AuthContext";

export default function OwnerRegistration() {
    const { currentUser } = useAuth();

    const [currentStep, setCurrentStep] =
        useState<RegistrationStep>(
            "basic-information"
        );

    const [selectedPlan, setSelectedPlan] =
        useState<OwnerPlan | null>(null);

    const [paymentLoading, setPaymentLoading] =
        useState(false);

    // TODO:
    // Replace with useAuth() later.
    const email = "";

    const handleNext = () => {
        switch (currentStep) {
            case "basic-information":
                setCurrentStep("plan-selection");
                break;

            case "plan-selection":
                setCurrentStep("payment");
                break;

            case "payment":
                setCurrentStep("success");
                break;

            default:
                break;
        }
    };

    const handlePrevious = () => {
        switch (currentStep) {
            case "plan-selection":
                setCurrentStep(
                    "basic-information"
                );
                break;

            case "payment":
                setCurrentStep("plan-selection");
                break;

            case "success":
                setCurrentStep("payment");
                break;

            default:
                break;
        }
    };

    const handlePlanSelection = (
        plan: OwnerPlan
    ) => {
        setSelectedPlan(plan);
    };

    const handlePayment = async () => {
        if (!selectedPlan) return;

        if (!currentUser) {
            alert(
                "You must be logged in to continue."
            );
            return;
        }

        setPaymentLoading(true);

        try {
            const response = await fetch(
                "/api/payment/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        planId:
                            selectedPlan.id,
                    }),
                }
            );

            const data =
                await response.json();

            if (
                !response.ok ||
                !data.success
            ) {
                throw new Error(
                    data.message ||
                        "Payment failed"
                );
            }

            console.log(
                "Payment Successful"
            );

            console.log(
                "Transaction ID:",
                data.transactionId
            );

            const registration =
                await registerOwner({
                    uid: currentUser.uid,
                    planId: selectedPlan.id,
                    transactionId:
                        data.transactionId,
                });

            if (!registration.success) {
                throw new Error(
                    "Unable to register owner."
                );
            }

            console.log(
                "Owner registration completed."
            );

            setCurrentStep("success");
        } catch (error) {
            console.error(
                "Payment Error:",
                error
            );

            alert(
                error instanceof Error
                    ? error.message
                    : "Unable to complete payment."
            );
        } finally {
            setPaymentLoading(false);
        }
    };

    return (
        <div
            className="
                mx-auto
                w-full
                max-w-7xl
                space-y-6
                px-4
                py-6

                sm:space-y-8
                sm:px-6
                sm:py-8

                lg:space-y-10
                lg:py-10
            "
        >
            {/* ==================================================
                Registration Header
            ================================================== */}

            <RegistrationHeader />

            {/* ==================================================
                Registration Stepper
            ================================================== */}

            <div className="w-full overflow-x-auto">
                <RegistrationStepper
                    currentStep={currentStep}
                />
            </div>

            {/* ==================================================
                Basic Information
            ================================================== */}

            {currentStep ===
                "basic-information" && (
                <BasicInformation>
                    <BasicInformationForm
                        email={email}
                        onNext={handleNext}
                    />
                </BasicInformation>
            )}

            {/* ==================================================
                Plan Selection
            ================================================== */}

            {currentStep ===
                "plan-selection" && (
                <div
                    className="
                        space-y-6

                        sm:space-y-8
                    "
                >
                    <PlanSelection
                        selectedPlan={selectedPlan}
                        onSelect={
                            handlePlanSelection
                        }
                    />

                    {/* Navigation */}

                    <div
                        className="
                            flex
                            flex-col-reverse
                            gap-3

                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <button
                            type="button"
                            onClick={
                                handlePrevious
                            }
                            className="
                                min-h-12
                                w-full
                                rounded-xl
                                border
                                border-slate-300
                                px-6
                                py-3
                                text-sm
                                font-medium
                                text-slate-700
                                transition

                                active:scale-[0.98]

                                hover:bg-slate-100

                                sm:w-auto
                                sm:text-base
                            "
                        >
                            Previous
                        </button>

                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={
                                !selectedPlan
                            }
                            className="
                                min-h-12
                                w-full
                                rounded-xl
                                bg-blue-600
                                px-6
                                py-3
                                text-sm
                                font-medium
                                text-white
                                transition

                                active:scale-[0.98]

                                hover:bg-blue-700

                                disabled:cursor-not-allowed
                                disabled:bg-slate-300
                                disabled:hover:bg-slate-300
                                disabled:active:scale-100

                                sm:w-auto
                                sm:text-base
                            "
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {/* ==================================================
                Payment
            ================================================== */}

            {currentStep === "payment" && (
                <div
                    className="
                        space-y-6

                        sm:space-y-8
                    "
                >
                    <PaymentSection
                        plan={selectedPlan}
                        loading={paymentLoading}
                        onPayment={
                            handlePayment
                        }
                    />

                    {/* Navigation */}

                    <div className="flex">
                        <button
                            type="button"
                            onClick={
                                handlePrevious
                            }
                            disabled={
                                paymentLoading
                            }
                            className="
                                min-h-12
                                w-full
                                rounded-xl
                                border
                                border-slate-300
                                px-6
                                py-3
                                text-sm
                                font-medium
                                text-slate-700
                                transition

                                active:scale-[0.98]

                                hover:bg-slate-100

                                disabled:cursor-not-allowed
                                disabled:opacity-50
                                disabled:hover:bg-transparent
                                disabled:active:scale-100

                                sm:w-auto
                                sm:text-base
                            "
                        >
                            Previous
                        </button>
                    </div>
                </div>
            )}

            {/* ==================================================
                Success
            ================================================== */}

            {currentStep === "success" && (
                <RegistrationSuccess />
            )}
        </div>
    );
}