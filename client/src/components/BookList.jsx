import { useState } from "react";

export default function BookList({ name, cost, author }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className="w-full flex flex-col items-center justify-items-stretch p-4" onMouseLeave={()=>{setIsHover(false)}} onMouseEnter={()=>{setIsHover(true)}}>
      {/* <img src={"/" + name} /> */}
      <div className="w-32 h-44 bg-primary"></div>
      <p className={`${isHover && "text-white"}`}>{name}</p>
      <p className={`${isHover ? "text-neutral-300" : "text-neutral-400"}`}>{author}</p>
    </div>
  );
}
