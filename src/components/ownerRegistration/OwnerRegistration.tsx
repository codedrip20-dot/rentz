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
    const { currentUser } = useAuth()
    const [currentStep, setCurrentStep] =
        useState<RegistrationStep>("basic-information");

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
                setCurrentStep("basic-information");
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

    const handlePlanSelection = (plan: OwnerPlan) => {
        setSelectedPlan(plan);
    };

 const handlePayment = async () => {
    if (!selectedPlan) return;

    if (!currentUser) {
        alert("You must be logged in to continue.");
        return;
    }

    setPaymentLoading(true);

    try {
        const response = await fetch("/api/payment/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                planId: selectedPlan.id,
            }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error(data.message || "Payment failed");
        }

        console.log("Payment Successful");
        console.log("Transaction ID:", data.transactionId);

        const registration = await registerOwner({
            uid: currentUser.uid,
            planId: selectedPlan.id,
            transactionId: data.transactionId,
        });

        if (!registration.success) {
            throw new Error("Unable to register owner.");
        }

        console.log("Owner registration completed.");

        setCurrentStep("success");
    } catch (error) {
        console.error("Payment Error:", error);

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
        <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
            <RegistrationHeader />

            <RegistrationStepper
                currentStep={currentStep}
            />

            {currentStep === "basic-information" && (
                <BasicInformation>
                    <BasicInformationForm
                        email={email}
                        onNext={handleNext}
                    />
                </BasicInformation>
            )}

            {currentStep === "plan-selection" && (
                <div className="space-y-8">
                    <PlanSelection
                        selectedPlan={selectedPlan}
                        onSelect={handlePlanSelection}
                    />

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handlePrevious}
                            className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                            Previous
                        </button>

                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={!selectedPlan}
                            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {currentStep === "payment" && (
                <div className="space-y-8">
                    <PaymentSection
                        plan={selectedPlan}
                        loading={paymentLoading}
                        onPayment={handlePayment}
                    />

                    <div className="flex justify-start">
                        <button
                            type="button"
                            onClick={handlePrevious}
                            disabled={paymentLoading}
                            className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
                        >
                            Previous
                        </button>
                    </div>
                </div>
            )}

            {currentStep === "success" && (
                <RegistrationSuccess />
            )}
        </div>
    );
}