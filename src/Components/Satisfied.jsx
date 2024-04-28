import React from "react";
import { FaUsers } from "react-icons/fa";

export default function Satisfied() {
  return (
    <div className="bg-gray-100 p-12 rounded w-[80%] mx-auto mt-20">
      <div className="w-full gap-6 justify-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1">
          <div className="bg-white rounded px-16 py-7">
            <div className="flex items-center justify-center">
              {" "}
              <FaUsers className="text-bs-secondary text-[70px]" />
            </div>
            <h4 className="flex items-center justify-center text-lg font-[600]  leading-6 text-center mt-5 text-bs-primary uppercase text-[22px] font-raleway tracking-widest  ">
              satisfied customers
            </h4>
            <h1 className="flex items-center justify-center text-[40px] font-[600] text-center mt-2 mb-10 text-[#45595b]">
              1963
            </h1>
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="bg-white rounded px-16 py-7">
            <div className="flex items-center justify-center ">
              <FaUsers className="text-bs-secondary text-[70px]" />
            </div>
            <h4 className=" flex items-center justify-center text-lg font-[600]  text-bs-primary leading-6 text-center mt-5 uppercase text-[22px] font-raleway tracking-widest">
              quality of service
            </h4>
            <h1 className=" flex items justify-center text-[40px] font-[600] text-center mt-2 mb-4 text-[#45595b]">
              99%
            </h1>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded px-16 py-7">
            <div className="flex items-center justify-center">
              <FaUsers className=" text-bs-secondary text-[70px]" />
            </div>

            <h4 className=" flex items-center justify-center text-lg font-[600] leading-6 text-center mt-5 text-bs-primary uppercase text-[22px] font-raleway tracking-widest">
              quality certificates
            </h4>
            <h1 className=" flex items-center justify-center text-[40px] font-[600] text-center mt-2 text-[#45595b] mb-10">
              33
            </h1>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded  px-16 py-7">
            <div className="flex items-center justify-center">
              <FaUsers className=" text-bs-secondary text-[70px]" />
            </div>
            <h4 className=" flex items-center justify-center text-lg font-[600] leading-6 text-center mt-5 text-bs-primary uppercase text-[22px] font-raleway tracking-widest">
              Available Products
            </h4>
            <h1 className=" flex items-center justify-center text-[40px] font-[600]  font-raleway text-[#45595b] text-center mt-2 mb-10">
              789
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
