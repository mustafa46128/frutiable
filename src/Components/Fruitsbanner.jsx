import Image from "next/image";
import React from "react";

export default function Fruitsbanner() {
  return (
    <div className="flex items-center w-full relative mt-10">
      <Image
        src="/banner-fruits.jpg"
        alt=""
        width={100}
        height={100}
        className="w-full rounded-lg "
      />
      <h2 className="absolute right-10 text-xl font-bold text-bs-secondary w-[50px]">
        Fresh Fruits Banner
      </h2>
    </div>
  );
}
