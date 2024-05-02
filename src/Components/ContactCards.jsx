import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactCards() {
  return (
    <div className="w-full mx-auto gap-y-5 flex flex-col lg:flex-row px-0 lg:px-8">
      <div className="">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full lg:w-[550px] border-none outline-none rounded-lg px-2 py-4 text-[#747d88] font-[400] text-[1rem]"
        />
        <input
          type="text"
          placeholder=" EnterYour Email"
          className=" w-full lg:w-[550px] border-none outline-none rounded-lg px-2 py-4 text-[#747d88] font-[400] text-[1rem] mt-5"
        />
        <textarea
          className="w-full lg:w-[550px] mt-5 px-2 py-1 border-b rounded-lg  outline-none"
          placeholder="Your Review"
          cols="30"
          rows="5"
          spellcheck="false"
        ></textarea>
        <button className="w-full lg:w-[550px] mt-5 bg-white rounded-lg  border border-bs-secondary text-[#81c408] cursor-pointer hover:bg-bs-secondary py-4 font-[600]">
          Submit
        </button>
      </div>
      <div>
        <div className="flex gap-5 w-full lg:w-[430px] bg-white rounded-lg px-0 lg:px-4 py-7">
          <FaMapMarkerAlt className="text-[#81c408] font-[900] text-[2em]" />
          <div className="leading-8">
            <h1 className="text-[#45595b] font-raleway font-[600] text-[24px]">
              Address
            </h1>
            <p className="text-[#747d88] font-[400] text-[1rem]">
              123 Street Pakistan,India
            </p>
          </div>
        </div>
        <div
          className="flex mt-8 gap-5 w-full lg:w-[430px] bg-white rounded-lg px-0
        lg:px-4 py-7"
        >
          <FaEnvelope className="text-[#81c408] font-[900] text-[2em]" />
          <div className="leading-8">
            <h1 className="text-[#45595b] font-raleway font-[600] text-[24px]">
              Mail Us
            </h1>
            <p className="text-[#747d88] font-[400] text-[1rem]">
              info@example.com
            </p>
          </div>
        </div>
        <div className="flex mt-8 gap-5 w-full lg:w-[430px] bg-white rounded-lg px-0 lg:px-4 py-7">
          <FaPhoneAlt className="text-[#81c408] font-[900] text-[2em]" />
          <div className="leading-8">
            <h1 className="text-[#45595b] font-raleway font-[600] text-[24px]">
              Telephone
            </h1>
            <p className="text-[#747d88] font-[400] text-[1rem]">
              (+012) 3456 7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
