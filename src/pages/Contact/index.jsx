import ContactCards from "@/Components/ContactCards";
import Navbar from "@/Components/Navbar";
import Shop from "@/Components/Shop";
import Topbar from "@/Components/Topbar";
import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GrDirections } from "react-icons/gr";

export default function index() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Shop title="Contact" desc="Contact" />
      <div className="bg-[#f4f6f8] w-[80%] mx-auto border rounded-lg mt-10">
        <div className="mt-10 w-full flex flex-col items-center">
          <h1 className="flex items-center justify-center text-[2.5rem] font-raleway font-[600] text-[#81C408]">
            Get in touch
          </h1>
          <p className="text-[16px] font-openSans text-[#747D88] flex items-center justify-center lg:w-[700px] text-center">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.
          </p>
          <h3 className="text-[#81c408] text-[16px] font-[400] font-openSans flex cursor-pointer justify-center items-center">
            Download Now.
          </h3>
        </div>
        <div className=" px-12 py-5 relative">
          {/* <div> */}
          <Image
            src="/map.jpg"
            alt=""
            width={100}
            height={100}
            className="w-[100%] rounded-lg "
          />
          {/* <div className="absolute bottom-10 left-3"> */}
          <Image
            src="/map-pakistan.png"
            alt=""
            width={0}
            height={0}
            className="w-10 border-2 border-white absolute bottom-10 left-14"
          />
          {/* </div> */}
          {/* </div> */}

          <div className="md:w-[145px] lg:w-[299px] bg-white pl-3 pr-5 py-2 absolute top-8 left-[60px]">
            <div className="flex justify-between">
              <div>
                <h5 className="text-[14px] font-[500] font-roboto ">
                  Pakistan
                </h5>
                <p className="text-[12px] text-[#5b5b5b] font-roboto">
                  Pakistan,India
                </p>
              </div>
              <div className="">
                <GrDirections className="text-[#1a73e8] text-[14px]" />
                <h4
                  className="text-[#1a73e8] text-[12px]
                 cursor-pointer hover:underline"
                >
                  Direction
                </h4>
              </div>
            </div>
            <p className="text-[#1a73e8] text-[12px] font-roboto mt-5 cursor-pointer hover:underline ">
              view larger map
            </p>
          </div>

          <div className=" w-8 bg-white px-2 py-2 absolute right-14 bottom-8 ">
            <FaPlus className="flex items-center justify-center cursor-pointer text-[#343a40] hover:text-black" />
            <hr className="text-[#e9ecef] mt-2 mb-2" />
            <FaMinus className="flex items-center justify-center cursor-pointer text-[#343a40] hover:text-black " />
          </div>
        </div>
        <div>
          <ContactCards />
        </div>
      </div>
    </div>
  );
}
