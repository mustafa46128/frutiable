import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between  w-4/5 mx-auto items-center py-3 lg:p-3 mt-4 relative">
      <h1 className="text-bs-primary text-4xl font-extrabold font-raleway">
        Fruitables
      </h1>
      <div className="">
        <ul
          className={`lg:flex gap-8 lg:relative absolute bg-white lg:bg-transparent lg:top-0 top-16 left-0 right-0 ${
            open ? "block" : "hidden"
          } `}
        >
          <li className="hover:text-bs-primary cursor-pointer text-[#6c757d] font-[400] text-[16px] ">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-bs-primary cursor-pointer text-[#6c757d] font-[400] text-[16px] mt-4 lg:mt-0">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-bs-primary cursor-pointer text-[#6c757d] font-[400] text-[16px] mt-4 lg:mt-0">
            <Link href="/ShopDetail">ShopDetail</Link>
          </li>
          <li className=" flex hover:text-bs-primary cursor-pointer relative group text-[#6c757d] font-[400] text-[16px] mt-4 lg:mt-0">
            Pages{" "}
            <i className="mt-1 text-[700] ml-2">
              <IoIosArrowDown />
              {/* <MdOutlineKeyboardArrowDown /> */}
            </i>
            <div className="absolute top-0 h-10 w-36"></div>
            <ul className="absolute w-40 hidden group-hover:block mt-8  bg-[#F4F6F8] rounded-lg leading-[30px] z-40 transition-all duration-300 ease-in-out">
              <li className="text-black hover:bg-bs-secondary">
                <Link href="/Carts">
                  <span className="px-3">Cart</span>
                </Link>
              </li>
              <li className="text-black hover:bg-bs-secondary">
                <Link href="/Checkout" className="">
                  <span className="px-3">Checkout</span>
                </Link>
              </li>
              <li className="text-black hover:bg-bs-secondary ">
                <Link href="/Testimonial" className="">
                  <span className="px-3">Testimonial</span>
                </Link>
              </li>
              <li className="text-black hover:text-bs-primary hover:bg-bs-secondary hover:">
                <Link href="404" className=" hover:bg-bs-secondry ">
                  <span className="px-3">404</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="hover:text-bs-primary cursor-pointer text-[#6c757d] font-[400] text-[16px] mt-4 mb-2 lg:mt-0 ">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className=" lg:flex gap-6 items-center hidden">
        <span className="rounded-full  w-[44px] aspect-square justify-center border-bs-secondary border flex items-center hover:bg-bs-secondary cursor-pointer">
          <FaSearch className="text-bs-primary text-center " />
        </span>
        <div className="relative">
          <FaShoppingBag className="text-bs-primary cursor-pointer font-[900] text-[2em] " />
          <span className="flex items-center justify-center absolute rounded-full bg-bs-secondary aspect-square -top-1 w-5 -right-1 text-[14px]">
            3
          </span>
        </div>
        <FaUserAlt className="text-bs-primary cursor-pointer font-[900] text-[2em]" />
      </div>
      <GiHamburgerMenu
        onClick={() => setOpen(!open)}
        className="lg:hidden block text-bs-primary text-[1.5rem] "
      />
    </div>
  );
}
