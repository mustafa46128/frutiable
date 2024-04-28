import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";

export default function Bestseller() {
  return (
    <div className="">
      <div className="text-center mx-auto mb-5 ">
        <h1 className=" text-[3.5rem] font-[800] text-[#45595b] font-raleway">
          Bestseller Products
        </h1>
        <p className="text-center font-[400] text-[#45595b] text-[1rem] font-openSans">
          Latin words, combined with a handful of model sentence structures, to
          generate Lorem <br />
          Ipsum which looks reasonable.
        </p>
      </div>

      <div className="w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className=" bg-gray-100 p-6">
          <div className="flex items-center ">
            <div className="w-full lg:w-1/2 rounded-full overflow-hidden">
              <img
                src="/fruite-item-1.jpg"
                className="w-full aspect-square"
                alt=""
                style={{ width: "", height: "" }}
              />
            </div>
            <div className=" w-1/2 ml-5">
              <a href="#" className="text-lg font-bold text-[#45595b] ">
                Organic <br /> Tomato
              </a>
              <div className="flex my-3 font-[900] text-[1rem]">
                <FaStar className="fas fa-star text-bs-primary " />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar />
              </div>
              <h4 className="mb-3 text-[1.5rem] font-[600] font-raleway text-[#45595b]">
                3.12 $
              </h4>
              <a
                href="#"
                className="btn border border-bs-secondary rounded-full px-3 py-1  flex  text-bs-primary hover:bg-bs-secondary"
              >
                <i className="-bag me-2 text-bs-primary">
                  <FaShoppingBag className="mt-1 ml-3" />
                </i>{" "}
                Add to <br /> cart
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4">
          <div className="flex items-center">
            <div className="w-1/2">
              <img
                src="/fruite-item-2.jpg"
                className="rounded-full"
                alt=""
                style={{ width: "140px", height: "140px" }}
              />
            </div>
            <div className="w-1/2 ml-5">
              <a href="#" className="text-lg font-bold text-[#45595b]">
                Organic <br />
                Tomato
              </a>
              <div className="flex my-3 font-[900] text-[1rem]">
                <FaStar className="fas fa-star text-bs-primary " />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar />
              </div>
              <h4 className="mb-3 text-[1.5rem] font-[600] font-raleway text-[#45595b]">
                3.12 $
              </h4>
              <a
                href="#"
                className="btn border border-bs-secondary rounded-full px-3 py-1  flex  text-bs-primary hover:bg-bs-secondary"
              >
                <i className="-bag me-2 text-bs-primary">
                  <FaShoppingBag className="mt-1 ml-3" />
                </i>{" "}
                Add to <br />
                cart
              </a>
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 p-4 ">
          <div className="flex items-center">
            <div className="w-1/2">
              <img
                src="/fruite-item-3.jpg"
                className="rounded-full"
                alt=""
                style={{ width: "140px", height: "140px" }}
              />
            </div>
            <div className="w-1/2 ml-5">
              <a href="#" className="text-lg font-bold text-[#45595b]">
                Organic <br /> Tomato
              </a>
              <div className="flex my-3 font-[900] text-[1rem]">
                <FaStar className="fas fa-star text-bs-primary " />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar />
              </div>
              <h4 className="mb-3 text-[1.5rem] font-[600] font-raleway text-[#45595b]">
                3.12 $
              </h4>
              <a
                href="#"
                className="btn border border-bs-secondary rounded-full px-3 py-1  flex  text-bs-primary hover:bg-bs-secondary"
              >
                <i className="-bag me-2 text-bs-primary">
                  <FaShoppingBag className="mt-1 ml-3" />
                </i>{" "}
                Add to <br />
                cart
              </a>
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 p-4 ">
          <div className="flex items-center">
            <div className="w-1/2">
              <img
                src="/fruite-item-4.jpg"
                className="rounded-full"
                alt=""
                style={{ width: "140px", height: "140px" }}
              />
            </div>
            <div className="w-1/2 ml-5">
              <a href="#" className="text-lg font-bold text-[#45595b]">
                Organic <br /> Tomato
              </a>
              <div className="flex my-3 font-[900] text-[1rem]">
                <FaStar className="fas fa-star text-bs-primary " />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar />
              </div>
              <h4 className="mb-3 text-[1.5rem] font-[600] font-raleway text-[#45595b]">
                3.12 $
              </h4>
              <a
                href="#"
                className="btn border border-bs-secondary rounded-full px-3 py-1  flex  text-bs-primary hover:bg-bs-secondary"
              >
                <i className="-bag me-2 text-bs-primary">
                  <FaShoppingBag className="mt-1 ml-3" />
                </i>{" "}
                Add to <br />
                cart
              </a>
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 p-4 ">
          <div className="flex items-center">
            <div className="w-1/2">
              <img
                src="/fruite-item-5.jpg"
                className="rounded-full"
                alt=""
                style={{ width: "140px", height: "140px" }}
              />
            </div>
            <div className="w-1/2 ml-5">
              <a href="#" className="text-lg font-bold text-[#45595b]">
                Organic <br /> Tomato
              </a>
              <div className="flex my-3 font-[900] text-[1rem]">
                <FaStar className="fas fa-star text-bs-primary " />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar />
              </div>
              <h4 className="mb-3 text-[1.5rem] font-[600] font-raleway text-[#45595b]">
                3.12 $
              </h4>
              <a
                href="#"
                className="btn border border-bs-secondary rounded-full px-3 py-1  flex  text-bs-primary hover:bg-bs-secondary"
              >
                <i className="-bag me-2 text-bs-primary">
                  <FaShoppingBag className="mt-1 ml-3" />
                </i>{" "}
                Add to <br />
                cart
              </a>
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 p-4 ">
          <div className="flex items-center">
            <div className="w-1/2">
              <img
                src="/best-product-6.jpg"
                className="rounded-full"
                alt=""
                style={{ width: "140px", height: "140px" }}
              />
            </div>
            <div className="w-1/2 ml-5">
              <a href="#" className="text-lg font-bold text-[#45595b]">
                Organic <br /> Tomato
              </a>
              <div className="flex my-3 font-[900] text-[1rem]">
                <FaStar className="fas fa-star text-bs-primary " />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar className="fas fa-star text-bs-primary" />
                <FaStar />
              </div>
              <h4 className="mb-3 text-[1.5rem] font-[600] font-raleway text-[#45595b]">
                3.12 $
              </h4>
              <a
                href="#"
                className="btn border border-bs-secondary rounded-full px-3 py-1  flex  text-bs-primary hover:bg-bs-secondary"
              >
                <i className="-bag me-2 text-bs-primary">
                  <FaShoppingBag className="mt-1 ml-3" />
                </i>{" "}
                Add to <br />
                cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
