import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Topbar() {
  return (
    <div>
      <div className="bg-bs-primary text-bs-white w-4/5 mx-auto px-6 py-3 rounded-[100px] rounded-tl-[230px] rounded-br-[230px] lg:flex justify-between hidden ">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-bs-secondary  " />
          <p className="text-[0.875rem] font-[400] tracking-widest cursor-pointer">
            {" "}
            123 Street, New York
          </p>
          <div className="flex text-center items-center gap-4 ">
            <FaEnvelope className="text-bs-secondary " />
            <p className="text-[0.875rem] font-[400] tracking-widest cursor-pointer">
              Email@Example.com
            </p>
          </div>
        </div>
        <div className="">
          <ul className="flex gap-2">
            <li className="text-[0.875rem] font-[400] tracking-widest cursor-pointer hover:text-bs-secondary">
              Privacy Policy
            </li>
            /
            <li className="text-[0.875rem] font-[400] tracking-widest cursor-pointer hover:text-bs-secondary">
              Terms of Use
            </li>
            /
            <li className="text-[0.875rem] font-[400] tracking-widest cursor-pointer hover:text-bs-secondary">
              Sales and Refunds
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
