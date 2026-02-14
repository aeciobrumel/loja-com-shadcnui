"use client"

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Progress } from "../ui/progress"
import { StepAddress } from "./step-address";
import { StepUser } from "./step-user";
import { StepFinish } from "./step-finish";
import { CheckoutSteps } from "@/types/checkout-steps";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
    const [step, setStep] = useState<CheckoutSteps>('user');
    let progressPct = 0;
    switch (step) {
        case 'user': progressPct = 30;
            break;
        case 'address': progressPct = 70;
            break;
        case 'finish': progressPct = 100;

    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === 'user' && 'Dados Pessoais'}
                        {step === 'address' && 'Endereço de Entrega'}
                        {step === 'finish' && 'Finalizar Compra'}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct} />

                <div className="flex flex-col gap-3">
                    {step === 'user' && <StepUser setStep={setStep} />}
                    {step === 'address' && <StepAddress setStep={setStep} />}
                    {step === 'finish' && <StepFinish />}
                </div>
            </DialogContent>
        </Dialog>
    )
}