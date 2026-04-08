import React from "react";

export default function ProgressBar({ step }) {
  return (
    <div className="flex mb-4">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`flex-1 text-center py-1 rounded-full mx-1 ${
            step >= s ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Step {s}
        </div>
      ))}
    </div>
  );
}
