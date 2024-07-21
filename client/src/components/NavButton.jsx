import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavButton({ title, link, name }) {

  const location = useLocation();
  const pathname = location.pathname.split("/")[1]
  const isActive = pathname === name

  useEffect(()=>{
    console.log(pathname)
  })

  return (
    <button className="rounded-[20px] bg-secondary h-fit px-3 py-2">
      <Link to={link}>
        <p className="text-[#e7e7e7]">{title}</p>
      </Link>
    </button>
  );
}
