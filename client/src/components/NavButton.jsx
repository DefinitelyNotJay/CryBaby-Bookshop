import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavButton({ title, link, name }) {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const isActive = pathname.includes(name);

  useEffect(() => {
    console.log(pathname);
  });

  return (
    <button
      className={`rounded-[20px]  h-fit px-3 py-2 ${
        isActive ? "bg-secondary" : ""
      }`}
    >
      <Link to={link}>
        <p className={`${isActive ? "text-white" : "text-black"}`}>{title}</p>
      </Link>
    </button>
  );
}
