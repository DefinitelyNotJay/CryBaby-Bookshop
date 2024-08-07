import React from "react";

export default function BookShowArea({ children, label }) {
  return (
    <div className="py-4 mx-auto flex flex-col max-w-6xl">
      <h1 className="text-xl font-semibold border-b py-4 border-b-black">{label}</h1>
      <div className="flex overflow-x-scroll">{children}</div>
    </div>
  );
}
