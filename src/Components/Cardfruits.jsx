import React from "react";

export default function Cardfruits() {
  return (
    <div className=" w-4/5 mx-auto flex flex-wrap gap-y-4 justify-between mt-8">
      <div className=" md:w-full lg:w-[20%]">
        <h1 className="font-semibold text-4xl">Our Organic Products</h1>
      </div>

      <div className="md:full lg:w-[70%]">
        <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:cols-4 lg:grid-cols-5 gap-2">
          <li className="bg-bs-secondary rounded-full px-6 py-2 text-[#fff] text-[16px] font-openSans font-[400] cursor-pointer">
            All Products
          </li>
          <li className=" bg-[#f4f6f8] rounded-full text-[#45595b] font-openSans text-[16px] px-6 py-2 cursor-pointer">
            Vegetables
          </li>
          <li className="bg-[#f4f6f8] rounded-full text-[#45595b] font-openSans text-[16px] px-12 py-2 cursor-pointer">
            Fruits
          </li>
          <li className="bg-[#f4f6f8] rounded-full text-[#45595b] font-openSans text-[16px] px-12 py-2 cursor-pointer">
            Bread
          </li>
          <li className="bg-[#f4f6f8] rounded-full text-[#45595b] font-openSans text-[16px] px-12 py-2 cursor-pointer">
            Meat
          </li>
        </ul>
      </div>
    </div>
  );
}
