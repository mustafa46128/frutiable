import React from "react";
import Sidebar from "./Sidebar";
import Shopcards from "./Shopcards";
import { FaSearch } from "react-icons/fa";

export default function Shop({ title, desc }) {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/cart-page-header-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          // back
        }}
      >
        {" "}
        <div className="py-8">
          <h1 className="text-[2.5rem] text-[#fff] font-[800] text-center ">
            {title}
          </h1>
          <ul className="list-none flex gap-2 text-center justify-center py-2">
            <li className="text-[#81c408] text-[16px] font-openSans cursor-pointer">
              Home
            </li>{" "}
            <span className="text-[#81c408]">/</span>
            <li className="text-[#81c408] text-[16px] font-openSans cursor-pointer">
              Page
            </li>{" "}
            <span className="text-[#81c408]">/</span>
            <li className="text-white">{desc}</li>
          </ul>
        </div>
        {/* <div className="mt-10">
          <Sidebar />
        </div>
        <Shopcards /> */}
      </div>
    </div>
  );
}
