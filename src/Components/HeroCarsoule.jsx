import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function HeroCarsoule() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ref: sliderRef,
    rows: true,
  };

  const slides = [
    {
      image: "/hero-img-2.jpg",
      name: "Vesitables",
    },
    {
      image: "/hero-img-2.jpg",
      name: "Fruties",
    },
  ];
  return (
    <div className="relative">
      <div
        className="absolute left-2 z-50 text-xl rounded-full opacity-60 hover:opacity-100 p-3 border border-white aspect-square text-white bg-bs-primary top-1/2 -translate-y-1/2"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <SlArrowLeft />
      </div>
      <div
        className="absolute right-2 z-50 text-xl p-3 border border-white rounded-full opacity-60 hover:opacity-100 aspect-square text-white bg-bs-primary top-1/2 -translate-y-1/2"
        onClick={() => sliderRef.current.slickNext()}
      >
        <SlArrowRight />
      </div>

      <Slider {...settings}>
        {slides?.map((item, index) => (
          <div className="w-full h-full relative" key={index}>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   px-4 py-2 text-white rounded text-[25px] font-[600]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 181, 36, 0.7), rgba(255, 181, 36, 0.7))",
              }}
            >
              {item?.name}
            </div>
            <Image
              src={item?.image}
              alt=""
              width={0}
              height={0}
              className="!w-full h-full rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
