import React, { useRef } from "react";
// import React from "react";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
export default function Client() {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    ref: sliderRef,
    rows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
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
  const testimonials = [
    {
      content:
        "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,",
      name: "Client Name",
      profession: "Profession",
      imageSrc: "/testimonial-1.jpg",
    },
    {
      content:
        "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,",
      name: "Client Name",
      profession: "Profession",
      imageSrc: "/testimonial-1.jpg",
    },
  ];

  return (
    <div className="w-[80%] mx-auto">
      <div className="mt-14">
        <h4 className="text-center text-bs-primary text-[1.5rem] font-[600] font-raleway">
          Our Testimonials
        </h4>
        <h1 className="text-center text-[3rem] font-[800] font-raleway">
          Our Clients Saying!
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
      </div>

      {/* Map over testimonials array to render testimonial components */}
      <Slider className="mt-5 gap-5" {...settings}>
        {/* <div className="w-full flex gap-5 mt-5"> */}
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full px-3">
            <div className="w-full bg-[#f4f6f8] px-5 py-5 rounded-lg ">
              <p className="text-[#747d88] text-[1rem] font-[400] font-sans">
                {testimonial.content}
              </p>
              <hr className="mt-4 border-bs-secondary" />
              <div className="flex gap-5 mt-4">
                <Image
                  src={testimonial.imageSrc}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div className="w-full">
                  <h4 className="text-[#45595b] text-[1.5rem] font-[600] font-raleway">
                    {testimonial.name}
                  </h4>
                  <div className="flex justify-between">
                    <p className="mt-1 text-[#45595b] text-[1rem] font-[400] font-raleway">
                      {testimonial.profession}
                    </p>
                    <FaQuoteRight className="text-[2em] font-[900] text-bs-secondary" />
                  </div>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className="fas fa-star text-bs-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </Slider>
    </div>
  );
}
