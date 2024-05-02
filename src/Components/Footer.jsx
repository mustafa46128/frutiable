import Image from "next/image";
import React from "react";
import { AiFillCopyrightCircle } from "react-icons/ai";
import {
  FaCopyright,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-[#45595b] mt-32 pt-12">
      <div className="flex flex-col lg:flex-row gap-y-3 w-[80%] mx-auto justify-between items-center  ">
        <div className="w-full lg:w-[20%] flex flex-col items-start cursor-pointer">
          <h1 className="text-[#81c408] text-[2.5rem] font-raleway font-[600]">
            Frutiables
          </h1>
          <p className="leading-3 text-bs-secondary">Fresh Products</p>
        </div>
        <div className="w-full lg:w-[50%]">
          <form className="bg-white rounded-full flex justify-between ">
            <input
              type="text"
              placeholder="Your Email"
              className="w-96 px-3  border-none outline-none bg-transparent"
            />
            <button className="bg-[#81c408] rounded-full whitespace-nowrap py-3 px-4 text-white font-[600]">
              Subscribe Now
            </button>
          </form>
        </div>
        <div className=" flex justify-end gap-5">
          <div className="group w-10 h-10 border rounded-full border-bs-secondary flex items-center justify-center hover:bg-bs-secondary cursor-pointer">
            <FaTwitter className="text-bs-secondary group-hover:text-black" />
          </div>
          <div className=" group w-10 h-10 border rounded-full border-bs-secondary flex  items-center justify-center hover:bg-bs-secondary cursor-pointer">
            <FaFacebookF className="border-bs-secondary text-bs-secondary group-hover:text-black" />
          </div>
          <div className=" group w-10 h-10 border rounded-full border-bs-secondary flex items-center justify-center hover:bg-bs-secondary cursor-pointer">
            <FaYoutube className="text-bs-secondary group-hover:text-black" />
          </div>
          <div className=" group w-10 h-10 border rounded-full border-bs-secondary flex items-center justify-center hover:bg-bs-secondary cursor-pointer">
            <FaLinkedinIn className="text-bs-secondary group-hover:text-black" />
          </div>
        </div>
      </div>
      <hr className="w-[80%] h-1 mx-auto border-bs-secondary mt-5 " />
      <div className="w-[80%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="">
          <h1 className="text-white font-raleway font-[600] text-[24px]">
            Why People Like us!
          </h1>
          <p className="text-[#DADADA] mt-2">
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
          </p>
          <div className=" group rounded-full border border-bs-secondary w-28 px-3 py-1 hover:bg-bs-secondary mt-4">
            <button className=" text-bs-primary  group-hover:text-white font-[600]">
              Read More
            </button>
          </div>
        </div>
        <div className="">
          <h1 className="text-white font-raleway font-[600] text-[24px]">
            Shop Info
          </h1>
          <ul className="list-none text-[#DADADA]">
            <li className="mt-2">About Us</li>
            <li className="mt-2">Contact Us</li>
            <li className="mt-2">Privacy Policy</li>
            <li className="mt-2">Terms & Condition</li>
            <li className="mt-2">Return Policy</li>
            <li className="mt-2">FAQs & Help</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-white font-raleway font-[600] text-[24px]">
            Account
          </h1>
          <ul className="list-none text-[#DADADA]">
            <li className="mt-2">My Account</li>
            <li className="mt-2">Shop details</li>
            <li className="mt-2">Shopping Cart</li>
            <li className="mt-2">Wishlist</li>
            <li className="mt-2">Order History</li>
            <li className="mt-2">International Orders</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-white font-raleway font-[600] text-[24px]">
            Contact
          </h1>
          <p className="text-[#DADADA] mt-2">
            Address: <span>1429 Netus Rd, NY 48247</span>
          </p>
          <p className="text-[#DADADA] mt-2">
            Email: <span>mustafa128khan@gmail.com</span>
          </p>
          <p className="text-[#DADADA] mt-2">
            Phone: <span>+0123 4567 8910</span>
          </p>
          <p className="text-[#DADADA] mt-2">Payment Accepted</p>
          <Image
            src="/payment.png"
            alt=""
            width={100}
            height={100}
            className="w-52 mt-4"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between w-[80%] mx-auto mt-14 items-center">
        <div className="flex gap-1 justify-center items-center">
          <div className="w-4 h-4 flex justify-center items-center ">
            <FaCopyright className="" />
          </div>
          <h1 className="text-white text-base">
            {" "}
            <span className="text-bs-primary">Your Site Name</span>, All right
            reserved.
          </h1>
        </div>
        <div className="flex mb-8">
          <h1 className="text-white text-base">
            Designed By{" "}
            <span className="text-bs-primary border-b">HTML Codex</span>{" "}
            Distributed By{" "}
            <span className="text-bs-primary border-b">ThemeWagon</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
