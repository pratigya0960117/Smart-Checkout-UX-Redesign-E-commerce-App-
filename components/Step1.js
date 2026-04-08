import React from "react";

export default function Step1({ form, setForm, next }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full p-2 border mb-3"
      />
      <input
        type="text"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        className="w-full p-2 border mb-3"
      />
      <button onClick={next} className="w-full bg-blue-500 text-white p-2">
        Continue
      </button>
    </div>
  );
}
