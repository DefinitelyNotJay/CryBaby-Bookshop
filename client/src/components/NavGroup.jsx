import React from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

export default function NavGroup({ setData }) {
  return (
    <section className="w-[800px] border-b border-b-[#333] mt-[106px] mx-auto z-99 h-16 flex items-center justify-between gap-2 px-12">
      <Link to={"/"}>หน้าแรก</Link>
      <Link to={"/bestsellers"}>ขายดี</Link>
      <Link to={"/news"}>มาใหม่</Link>
      <Link to={"/free"}>ฟรีกระจาย</Link>
      <Link to={"/promotion"}>โปรโมชั่น</Link>
      <Link to={"/hit"}>ฮิตขึ้นหิ้ง</Link>
    </section>
  );
}
