import React from "react";
import Image from "next/image";
import { FaShoppingBag, FaStar } from "react-icons/fa";

export default function Bestseller1() {
  return (
    <div className="py-5">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
        <div className=" ">
          <Image
            src="/fruite-item-1.jpg"
            alt=""
            width={500}
            height={200}
            className="border rounded-lg overflow-hidden"
          />
          <div className="text-center mt-5">
            <h2 className="text-[1.25rem] text-[#45595b] font[800] font-raleway,sans-serif">
              Organic Tomato
            </h2>
          </div>
          <div className="flex text-center justify-center mt-2">
            <FaStar className="fas fa-star text-bs-primary " />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar />
          </div>
          <h4 className="text-center mt-3 text-[1.5rem] font-[600] text-[#45595b] font-raleway">
            3.12 $
          </h4>
          <div className=" flex items-center justify-center text-center mt-5">
            <a
              href="#"
              className="btn border border-bs-secondary rounded-full py-1 flex text-bs-primary hover:bg-bs-secondary  w-[130px]"
            >
              <i className="text-bs-primary">
                <FaShoppingBag className="mt-1 ml-3" />
              </i>
              Add to cart
            </a>
          </div>
        </div>
        <div className=" ">
          <Image
            src="/fruite-item-1.jpg"
            alt=""
            width={500}
            height={200}
            className="border  rounded-lg overflow-hidden"
          />{" "}
          <div className="text-center mt-5">
            <h2 className="text-[1.25rem] text-[#45595b] font[800] font-raleway,sans-serif">
              Organic Tomato
            </h2>
          </div>
          <div className="flex text-center justify-center mt-2">
            <FaStar className="fas fa-star text-bs-primary " />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar />
          </div>
          <h4 className="text-center mt-3 text-[1.5rem] font-[600] text-[#45595b] font-raleway">
            3.12 $
          </h4>
          <div className=" flex items-center justify-center text-center mt-5">
            <a
              href="#"
              className="btn border border-bs-secondary rounded-full py-1 flex text-bs-primary hover:bg-bs-secondary  w-[130px]"
            >
              <i className="-bag me-2 text-bs-primary">
                <FaShoppingBag className="mt-1 ml-3" />
              </i>{" "}
              Add to cart
            </a>
          </div>
        </div>
        <div className="">
          <Image
            src="/fruite-item-1.jpg"
            alt=""
            width={500}
            height={200}
            className="border  rounded-lg overflow-hidden"
          />
          <div className="text-center mt-5">
            <h2 className="text-[1.25rem] text-[#45595b] font[800] font-raleway,sans-serif">
              Organic Tomato
            </h2>
          </div>
          <div className="flex text-center justify-center mt-2">
            <FaStar className="fas fa-star text-bs-primary " />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar />
          </div>
          <h4 className="text-center mt-3 text-[1.5rem] font-[600] text-[#45595b] font-raleway">
            3.12 $
          </h4>
          <div className=" flex items-center justify-center text-center mt-5">
            <a
              href="#"
              className="btn border border-bs-secondary rounded-full py-1 flex text-bs-primary hover:bg-bs-secondary  w-[130px]"
            >
              <i className="-bag me-2 text-bs-primary">
                <FaShoppingBag className="mt-1 ml-3" />
              </i>{" "}
              Add to cart
            </a>
          </div>
        </div>
        <div className=" ">
          <Image
            src="/fruite-item-1.jpg"
            alt=""
            width={500}
            height={200}
            className="border rounded-lg overflow-hidden"
          />
          <div className="text-center mt-5">
            <h2 className="text-[1.25rem] text-[#45595b] font[800] font-raleway,sans-serif">
              Organic Tomato
            </h2>
          </div>
          <div className="flex text-center justify-center mt-2">
            <FaStar className="fas fa-star text-bs-primary " />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar className="fas fa-star text-bs-primary" />
            <FaStar />
          </div>
          <h4 className="text-center mt-3 text-[1.5rem] font-[600] text-[#45595b] font-raleway">
            3.12 $
          </h4>
          <div className=" flex items-center justify-center text-center mt-5">
            <a
              href="#"
              className="btn border border-bs-secondary rounded-full py-1 flex text-bs-primary hover:bg-bs-secondary  w-[130px]"
            >
              <i className="-bag me-2 text-bs-primary">
                <FaShoppingBag className="mt-1 ml-3" />
              </i>{" "}
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
