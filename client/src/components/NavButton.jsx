import React from "react";
import { Link } from "react-router-dom";

export default function NavButton({ title, link, isActive }) {
  return (
    <button className="rounded-[20px] bg-secondary h-fit px-3 py-2">
      <Link to={link}>
        <p className="text-[#e7e7e7]">{title}</p>
      </Link>
    </button>
  );
}
