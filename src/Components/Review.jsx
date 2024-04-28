import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function Review() {
  const reviewsdata = [
    {
      image: "/avatar.jpg",
      Date: "April 12, 2024",
      name: "Jason Smith",
      text: "The generated Lorem Ipsum is therefore always free from repetitio injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit",
    },
    {
      image: "/avatar.jpg",
      Date: "April 12, 2024",
      name: "Jason Smith",
      text: "The generated Lorem Ipsum is therefore always free from repetitio injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit",
    },
  ];
  return (
    <div className=" w-full lg:w-[831px]">
      <div className="">
        {reviewsdata.map((e, index) => (
          <div key={index}>
            <div className="w-full lg:w-[100px] p-3">
              <Image src={e.image} alt="" width={80} height={50} className="" />
            </div>
            <div className="">
              <p className="">{e.Date}</p>
              <div className="flex items-center justify-between w-full lg:w-[731px]">
                <h5>{e.name}</h5>
                <div className="flex">
                  <FaStar className="text-bs-secondary" />
                  <FaStar className="text-bs-secondary" />
                  <FaStar className="text-bs-secondary" />
                  <FaStar className="text-bs-secondary" />
                  <FaStar className="text-[#747d88]" />
                </div>
              </div>
              <p className=" w-full lg:w-[731px]">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
