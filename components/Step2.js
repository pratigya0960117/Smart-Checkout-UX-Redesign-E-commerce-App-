import React from "react";

export default function Step2({ form, setForm, next, back }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Card Number"
        value={form.card}
        onChange={(e) => setForm({ ...form, card: e.target.value })}
        className="w-full p-2 border mb-3"
      />
      <input
        type="text"
        placeholder="CVV"
        value={form.cvv}
        onChange={(e) => setForm({ ...form, cvv: e.target.value })}
        className="w-full p-2 border mb-3"
      />
<div className="flex justify-between">
        <button onClick={back} className="bg-gray-400 text-white px-3 py-2">
          Back
        </button>
        <button onClick={next} className="bg-blue-500 text-white px-3 py-2">
          Continue
        </button>
      </div>
    </div>
  );
}
