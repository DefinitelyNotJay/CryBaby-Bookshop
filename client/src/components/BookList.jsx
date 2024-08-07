import { useState } from "react";
import { Heart } from "lucide-react";

export default function BookList({ name, cost, author, desc, rating }) {
  return (
    <div
      className={`min-h-96 w-44 flex flex-col items-stretch p-4`}
    >
      {/* <img src={"/" + name} /> */}
      <div className={`w-40 h-4/6 bg-[#333]`} />
      <div className="w-40 h-2/6 px-2 py-2 border flex flex-col justify-between">
        <div>
        <p className={"font-semibold"}>{name}</p>
        <p className={"text-sm text-gray-400"}>{author}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex ">
            {Array.from({ length: 5 }, (_, index) => (
              <Heart key={index} className={`h-4 w-4 ${index < rating && "fill-black"}`} />
            ))}
          </div>
          <button className="justify-self-end text-white bg-[#333] hover:bg-[#555] rounded px-2 py-1">
            ฿ {cost}
          </button>
        </div>
      </div>
    </div>
  );
}
