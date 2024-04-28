import Image from "next/image";
import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import QuantityInput from "./Inputgroupbtn";

export default function Shopdetimage() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 mt-32">
      <div className="w-full">
        <Image
          src="/single-item.jpg"
          alt=""
          width={100}
          height={100}
          className="w-full aspect-square border rounded-lg "
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-[1.5rem] text-[#45595b] font-raleway font-bold mb-3 ">
          Brocoli
        </h1>
        <span className="text-[16px] font-openSans font-[400] text-[#747d88]">
          Category: Vegetables
        </span>
        <h5 className="text-[#45595b] font-raleway font-bold text-[1.25rem] mt-3">
          3,35 $
        </h5>
        <div className="flex py-1 mt-2">
          <FaStar className="text-bs-secondary" />
          <FaStar className="text-bs-secondary" />
          <FaStar className="text-bs-secondary" />
          <FaStar className="text-bs-secondary" />
          <FaStar className="text-[#747d88]" />
        </div>
        <p className="mt-4 text-[#747d88] font-[400] font-openSans text-[16px]">
          The generated Lorem Ipsum is therefore always free from repetition
          injected humour, or non-characteristic words etc.
        </p>
        <br />
        <p className="mb-10 text-[#747d88] font-[400] font-openSans text-[16px]">
          Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock
          flounder; chain pickerel hatchetfish, pencilfish snailfish
        </p>
        <QuantityInput />
        <div className="flex items-center gap-3 border border-bs-secondary px-3 rounded-full w-40 mt-5 justify-center pt-2 pb-2 hover:bg-bs-secondary">
          <FaShoppingBag className="text-bs-primary" />
          <button className="text-bs-primary hover:text-white font-semibold">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
