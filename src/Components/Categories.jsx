import React from "react";
import { FaAppleAlt } from "react-icons/fa";

export default function Categories() {
  return (
    // mt-[-160px]
    <div className="w-full ">
      <h1 className="text-[24px] font-raleway font-[600]">Categories</h1>
      <div className="flex justify-between py-3">
        <h5
          className="flex
          items-center gap-1 text-[16px] font-openSans text-[#81C408] hover:text-bs-secondary cursor-pointer"
        >
          <i>
            <FaAppleAlt />
          </i>
          Apples
        </h5>
        <span className="text-[#747d88] font-[400] font-openSans">(3)</span>
      </div>
      <div className="flex justify-between">
        <h5
          className="flex
          items-center gap-1 text-[16px] font-openSans text-[#81C408] hover:text-bs-secondary cursor-pointer"
        >
          <i>
            <FaAppleAlt />
          </i>
          Oranges
        </h5>
        <span className="text-[#747d88] font-[400] font-openSans">(3)</span>
      </div>
      <div className="flex justify-between py-3">
        <h5
          className="flex
          items-center gap-1 text-[16px] font-openSans text-[#81C408] hover:text-bs-secondary cursor-pointer"
        >
          <i>
            <FaAppleAlt />
          </i>
          Strawbery
        </h5>
        <span className="text-[#747d88] font-[400] font-openSans">(3)</span>
      </div>
      <div className="flex justify-between">
        <h5
          className="flex
          items-center gap-1 text-[16px] font-openSans text-[#81C408] hover:text-bs-secondary cursor-pointer"
        >
          <i>
            <FaAppleAlt />
          </i>
          Banana
        </h5>
        <span className="text-[#747d88] font-[400] font-openSans">(3)</span>
      </div>
      <div className="flex justify-between py-3">
        <h5
          className="flex
          items-center gap-1 text-[16px] font-openSans text-[#81C408] hover:text-bs-secondary cursor-pointer"
        >
          <i>
            <FaAppleAlt />
          </i>
          Pumpkin
        </h5>
        <span className="text-[#747d88] font-[400] font-openSans">(3)</span>
      </div>
    </div>
  );
}
