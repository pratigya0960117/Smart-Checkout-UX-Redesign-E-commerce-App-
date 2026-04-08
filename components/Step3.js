import React from "react";

export default function Step3({ form, back }) {
  return (
    <div>
      <h2 className="font-bold mb-2">Order Summary</h2>
      <p>Name: {form.name}</p>
      <p>Address: {form.address}</p>
      <p>Card: ****{form.card.slice(-4)}</p>

      <div className="flex justify-between mt-4">
        <button onClick={back} className="bg-gray-400 text-white px-3 py-2">
          Back
        </button>
        <button className="bg-green-500 text-white px-3 py-2">
          Place Order
        </button>
      </div>
    </div>
  );
}
