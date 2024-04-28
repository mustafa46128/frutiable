import Image from "next/image";
import React from "react";
import HeroCarsoule from "./HeroCarsoule";
const slides = ["./hero-img-2.jpg", "./hero-img-2.jpg"];

export default function Hero() {
  return (
    <div
      className="w-full py-20"
      style={{
        backgroundImage: "url('/hero-img.jpg')",
        backgroundSize: "cover",
        backgroundOrigin: "center",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[80%] flex-wrap gap-y-3 flex justify-between mx-auto">
        <div className="w-full lg:w-3/5">
          <h1 className="text-bs-secondary lg:text-xl text-lg  font-semibold font-raleway mb-8">
            100% Organic Foods
          </h1>
          <p className="lg:text-6xl text-5xl font-extrabold font-raleway w-[500px] lg:w-[650px] text-bs-primary leading-[70px] lg:leading-[70px]">
            Organic Veggies & Fruits Foods
          </p>
          <form className=" lg:w-[70%] w-[80%] bg-white rounded-full flex justify-between border-2 border-bs-secondary mt-12">
            <input
              type="text"
              placeholder="Search"
              className="w-96 min-w-0 px-3 py-4  border-none outline-none bg-transparent"
            />
            <button className="bg-[#81c408] rounded-full whitespace-nowrap py-4 px-5 text-white font-[600] border-l-2 border-bs-secondary">
              Submit Now
            </button>
          </form>
        </div>
        <div className=" lg:w-2/5 w-full rounded-lg overflow-hidden">
          {/* <Image src="/hero-img-2.jpg" alt="" width={800} height={400} /> */}
          <HeroCarsoule />
        </div>
      </div>
    </div>
  );
}
