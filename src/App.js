import React, { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    address: "",
    card: "",
    cvv: "",
  });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold text-center mb-4">Smart Checkout</h1>
        <ProgressBar step={step} />

        {step === 1 && <Step1 form={form} setForm={setForm} next={next} />}
        {step === 2 && (
          <Step2 form={form} setForm={setForm} next={next} back={back} />
        )}
        {step === 3 && <Step3 form={form} back={back} />}
      </div>
    </div>
  );
}
