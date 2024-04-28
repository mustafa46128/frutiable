import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function FeatureProduct1() {
  return (
    <div className="w-full mt-7">
      <h1 className="text-[#45595b] text-[1.5rem] font-raleway font-[600]">
        Featured products
      </h1>
      <div className="flex mt-5">
        <Image src="/featur-1.jpg" alt="" width={100} height={100} />
        <div className="px-5">
          <h3 className="text-[#45595b] font-raleway font-[600] text-[1rem]">
            Big Banana
          </h3>
          <div className="flex py-1">
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-[#747d88]" />
          </div>

          <h5 className="text-[1.25rem] font-raleway font-[600]">
            2.99 $<span className="text-[#dc3545] line-through">4.11 $</span>
          </h5>
        </div>
      </div>
      <div className="flex mt-5">
        <Image
          src="/featur-2.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="px-5">
          <h3 className="text-[#45595b] font-raleway font-[600] text-[1rem]">
            Big Banana
          </h3>
          <div className="flex py-1">
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-[#747d88]" />
          </div>

          <h5 className="text-[1.25rem] font-raleway font-[600]">
            2.99 $<span className="text-[#dc3545] line-through">4.11 $</span>
          </h5>
        </div>
      </div>
      <div className="flex mt-5">
        <Image
          src="/featur-3.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="px-5">
          <h3 className="text-[#45595b] font-raleway font-[600] text-[1rem]">
            Big Banana
          </h3>
          <div className="flex py-1">
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-[#747d88]" />
          </div>

          <h5 className="text-[1.25rem] font-raleway font-[600]">
            2.99 $<span className="text-[#dc3545] line-through">4.11 $</span>
          </h5>
        </div>
      </div>
      <div className="flex mt-5">
        <Image
          src="/vegetable-item-4.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="px-5">
          <h3 className="text-[#45595b] font-raleway font-[600] text-[1rem]">
            Big Banana
          </h3>
          <div className="flex py-1">
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-[#747d88]" />
          </div>

          <h5 className="text-[1.25rem] font-raleway font-[600]">
            2.99 $<span className="text-[#dc3545] line-through">4.11 $</span>
          </h5>
        </div>
      </div>
      <div className="flex mt-5">
        <Image
          src="/vegetable-item-5.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="px-5">
          <h3 className="text-[#45595b] font-raleway font-[600] text-[1rem]">
            Big Banana
          </h3>
          <div className="flex py-1">
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-[#747d88]" />
          </div>

          <h5 className="text-[1.25rem] font-raleway font-[600]">
            2.99 $<span className="text-[#dc3545] line-through">4.11 $</span>
          </h5>
        </div>
      </div>
      <div className="flex mt-5">
        <Image
          src="/vegetable-item-6.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="px-5">
          <h3 className="text-[#45595b] font-raleway font-[600] text-[1rem]">
            Big Banana
          </h3>
          <div className="flex py-1">
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-bs-secondary" />
            <FaStar className="text-[#747d88]" />
          </div>

          <h5 className="text-[1.25rem] font-raleway font-[600]">
            2.99 $<span className="text-[#dc3545] line-through">4.11 $</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
