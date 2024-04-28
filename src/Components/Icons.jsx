import React from "react";
import {
  FaCarSide,
  FaExchangeAlt,
  FaPhoneAlt,
  FaUserShield,
} from "react-icons/fa";

export default function Icons() {
  return (
    <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto mt-14">
      <div className=" bg-[#f4f6f8] pt-4 pb-4 rounded-lg flex flex-col justify-center items-center px-3 ">
        <div className="rounded-full bg-bs-secondary w-28 aspect-square items-center flex  justify-center relative ">
          <FaCarSide className="text-white w-16 h-16 items-center " />
          <div className="bg-bs-secondary w-10 aspect-square rotate-45 absolute -bottom-2"></div>
        </div>
        <h5 className="mt-12 text-xl font-semibold font-raleway text-bs-dark ">
          Free Shipping
        </h5>
        <p className="text-base font-normal font-openSans pt-1 text-bs-dark">
          Free on order over $300
        </p>
      </div>
      <div className="bg-[#f4f6f8] pt-4 pb-4 rounded-lg flex flex-col justify-center items-center">
        <div className="rounded-full bg-bs-secondary w-28 h-28 items-center flex  justify-center relative ">
          <FaUserShield className="text-white w-16 h-16 items-center z-20" />
          <div className="bg-bs-secondary w-10 h-10 rotate-45 absolute -bottom-2"></div>
        </div>
        <h5 className="mt-12 text-xl font-semibold font-raleway text-bs-dark mb-2 ">
          Security Payment
        </h5>
        <p className="text-base font-normal font-openSans pt-1 text-bs-dark mb-2">
          100% security payment
        </p>
      </div>
      <div className="bg-[#f4f6f8] pt-4 pb-4 rounded-lg flex flex-col justify-center items-center">
        <div className="rounded-full bg-bs-secondary w-28 h-28 items-center flex  justify-center relative ">
          <FaExchangeAlt className="text-white w-16 h-16 items-center z-20 " />
          <div className="bg-bs-secondary w-10 h-10 rotate-45 absolute -bottom-2"></div>
        </div>
        <h5 className="mt-12 text-xl font-semibold font-raleway text-bs-dark ">
          30 Day Return
        </h5>
        <p className="text-base font-normal font-openSans pt-1 text-bs-dark mb-2">
          30 day money guarantee
        </p>
      </div>
      <div className="bg-[#f4f6f8] pt-4 pb-4 rounded-lg flex flex-col justify-center items-center">
        <div className="rounded-full bg-bs-secondary w-28 h-28 items-center flex  justify-center relative ">
          <FaPhoneAlt className="text-white w-16 h-16 items-center z-20 " />
          <div className="bg-bs-secondary w-10 h-10 rotate-45 absolute -bottom-2"></div>
        </div>
        <h5 className="mt-12 text-xl font-semibold font-raleway text-bs-dark ">
          24/7 Support
        </h5>
        <p className="text-base font-normal font-openSans pt-1 text-bs-dark mb-2">
          Support every time fast
        </p>
      </div>
    </div>
  );
}
