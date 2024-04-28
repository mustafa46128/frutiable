import React from "react";
import { FaStar } from "react-icons/fa";

export default function Reply() {
  return (
    <div className="mt-20">
      <h4 className="text-[24px] font-bold font-raleway">Leave a Reply</h4>
      <div className="flex gap-8 mt-10">
        <input
          type="text"
          placeholder="Your Name *"
          className="bg-[#fff]  outline-none focus:shadow-custom rounded-lg border-b  py-2 px-2 w-full"
        />
        <input
          type="text"
          placeholder="Your Email *"
          className="bg-[#fff] focus:shadow-custom border-b rounded-lg outline-none   py-2 px-2 w-full"
        />
      </div>
      <div className=" w-full mt-10">
        <textarea
          className="w-full p-2 border-b rounded-lg focus:shadow-custom outline-none"
          placeholder="Your Review *"
          cols="30"
          rows="8"
          spellcheck="false"
        ></textarea>
      </div>
      <div className="flex justify-between py-16">
        <div className="flex items-center">
          <p className="text-[#747d88] font-[400] text-[16px]">Please rate:</p>
          <div className="flex items-center justify-center ml-3">
            <FaStar className="text-[#6c757d] font-[900]" />
            <FaStar className="text-[#6c757d] font-[900]" />
            <FaStar className="text-[#6c757d] font-[900]" />
            <FaStar className="text-[#6c757d] font-[900]" />
            <FaStar className="text-[#6c757d] font-[900]" />
          </div>
        </div>
        <button className="border rounded-full border-bs-secondary px-6 py-3 text-[#81c408] hover:bg-bs-secondary hover:text-white font-[600]">
          Post Comment
        </button>
      </div>
    </div>
  );
}
