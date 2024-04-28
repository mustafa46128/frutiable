import React from "react";
import Image from "next/image";

export default function Fruitemax() {
  return (
    <div className="mt-10 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
      <div className="rounded-lg border border-bs-secondary overflow-hidden  relative">
        <Image
          src="/featur-1.jpg"
          alt=""
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
          className="items-center justify-center text-center !w-full"
        />
        <div className="absolute rounded-lg bg-bs-primary top-[225px] w-[230px] h-[100px] left-1/2 -translate-x-1/2">
          <h5 className="justify-center text-center mt-3 text-white text-[20px] font-[600] font-raleway">
            Fresh Apples
          </h5>
          <h3 className="justify-center text-center text-[#45595b] font-semibold font-raleway text-[28px]">
            20% OFF
          </h3>
        </div>
        <div className="rounded-b-lg bg-bs-secondary h-[120px]"></div>
      </div>
      <div className="rounded-lg border border-bs-gray-dark overflow-hidden  relative">
        <Image
          src="/featur-2.jpg"
          alt=""
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={300}
          height={300}
        />
        <div className="absolute rounded-lg bg-bs-light top-[225px] w-[230px] h-[100px] left-1/2 -translate-x-1/2">
          <h5 className="justify-center text-center mt-3 text-bs-primary text-[20px] font-[600] font-raleway">
            Tasty Fruits
          </h5>
          <h3 className="justify-center text-center text-[#45595b] font-semibold font-raleway text-[28px]">
            Free delivery
          </h3>
        </div>
        <div className="rounded-b-lg bg-bs-gray-dark h-[120px]"></div>
      </div>
      <div className=" rounded-lg border border-bs-primary overflow-hidden  relative">
        <Image
          src="/featur-3.jpg"
          alt=""
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
        <div className="absolute rounded-lg bg-bs-secondary top-[225px] px-4 w-[230px] h-[100px] left-1/2 -translate-x-1/2 ">
          <h5 className="justify-center text-center mt-3 text-bs-light text-[20px] font-[600] font-raleway">
            Exotic vegitable
          </h5>
          <h3 className="justify-center text-center text-[#45595b] font-semibold font-raleway text-[28px]">
            Discount 30$
          </h3>
        </div>
        <div className="rounded-b-lg bg-bs-primary h-[120px]"></div>
      </div>
    </div>
  );
}
