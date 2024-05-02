import React, { useRef } from "react";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";

const products = [
  {
    id: 2,
    image: "/vegetable-item-6.jpg",
    title: "Grapes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 2,
    image: "/vegetable-item-1.jpg",
    title: "Grapes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 2,
    image: "/vegetable-item-3.png",
    title: "Grapes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 2,
    image: "/vegetable-item-4.jpg",
    title: "Grapes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
];

export default function Carousel() {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    ref: sliderRef,
    rows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[80%] mx-auto mt-20 ">
      <h1 className="text-[2.5rem] text-[#45595b] font-raleway font-[600]">
        Fresh Organic Vegetables
      </h1>
      <div className="w-full flex items-center justify-end gap-5">
        <span
          className="rounded-full border border-bs-secondary px-5 py-1 hover:bg-bs-secondary cursor-pointer"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <IoIosArrowRoundForward className="text-[25px] text-bs-primary hover:text-white" />
        </span>
        <span
          className="rounded-full border border-bs-secondary px-5 py-1 hover:bg-bs-secondary cursor-pointer"
          onClick={() => sliderRef.current.slickNext()}
        >
          <IoIosArrowRoundBack className="text-[25px] text-bs-primary hover:text-white" />
        </span>
      </div>
      {/* <div className="w-full flex item gap-x-5 "> */}
      <Slider className="mt-5 mb-32" {...settings}>
        {products.map((product) => (
          <div key={product.id} className="w-full px-1">
            <div className="border border-bs-primary rounded-lg overflow-hidden relative">
              <div className="absolute rounded-lg bg-bs-secondary pt-1 pl-3 pr-3 pb-1 justify-center mt-2 ml-2">
                <p>Fruite</p>
              </div>
              <Image src={product.image} alt="" width={266} height={50} />
              <h1 className="text-center mt-6 mb-3 text-[20px] font-semibold font-raleway">
                {product.title}
              </h1>
              <p className="px-4 text-center justify-center text-[#747d88] font-normal text-[16px] font-openSans mb-6">
                {product.description}
              </p>
              <h2 className="pl-4 text-[#45595b] font-bold text-[20px]">
                {product.price}
              </h2>
              <div className="flex items-center gap-3 border border-bs-secondary rounded-full w-36 mb-5 ml-4 justify-center pt-2 pb-2 hover:bg-bs-secondary">
                <FaShoppingBag className="text-bs-primary" />
                <button className="text-bs-primary hover:text-white font-semibold">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
