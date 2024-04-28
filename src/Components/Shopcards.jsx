import React from "react";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "/fruite-item-5.jpg",
    title: "Grapes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 1,
    image: "/fruite-item-5.jpg",
    title: "Grapes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 1,
    image: "/fruite-item-2.jpg",
    title: "Raspberries",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 1,
    image: "/fruite-item-4.jpg",
    title: "Apricots",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 1,
    image: "/fruite-item-3.jpg",
    title: "Banana",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 1,
    image: "/fruite-item-1.jpg",
    title: "Oranges",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 1,
    image: "/fruite-item-2.jpg",
    title: "Raspberries",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 1,
    image: "/fruite-item-5.jpg",
    title: "Grapes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  {
    id: 1,
    image: "/fruite-item-5.jpg",
    title: "Grapes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "$4.99 / kg",
  },
  // Add more products as needed
  ,
];

export default function Shopcards({ className = "" }) {
  return (
    <div
      className={` ${className} w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`}
    >
      {products.map((product) => (
        <div key={product.id} className="w-full">
          <div className="border border-bs-secondary rounded-lg overflow-hidden relative">
            <div className="absolute rounded-lg bg-bs-secondary pt-1 pl-3 pr-3 pb-1 justify-center mt-2 ml-2">
              <p>Fruite</p>
            </div>
            <Image
              src={product.image}
              alt=""
              width={0}
              height={0}
              className="w-[100%]"
            />
            <h1 className="text-center mt-6 mb-3 text-[20px] font-semibold font-raleway">
              {product.title}
            </h1>
            <p className="text-center justify-center text-[#747d88] font-normal text-[16px] font-openSans mb-8">
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
      <div className=" col-span-full flex w-full items-center justify-center text-center mt-10 gap-4">
        <a
          href=""
          className="flex border border-bs-secondary rounded-lg w-10 items-center justify-center p-2 hover:bg-bs-primary"
        >
          «
        </a>
        <a
          href=""
          className=" flex border border-bs-secondary rounded-lg w-10 items-center justify-center p-2 hover:bg-bs-primary"
        >
          1
        </a>
        <a
          href=""
          className=" flex border border-bs-secondary rounded-lg w-10 items-center justify-center p-2 hover:bg-bs-primary"
        >
          2
        </a>
        <a
          href=""
          className=" flex border border-bs-secondary rounded-lg w-10 items-center justify-center p-2 hover:bg-bs-primary"
        >
          3
        </a>
        <a
          href=""
          className=" flex border border-bs-secondary rounded-lg w-10 items-center justify-center p-2 hover:bg-bs-primary"
        >
          4
        </a>
        <a
          href=""
          className=" flex border border-bs-secondary rounded-lg w-10 items-center justify-center p-2 hover:bg-bs-primary"
        >
          5
        </a>
        <a
          href=""
          className=" flex border border-bs-secondary rounded-lg w-10 items-center justify-center p-2 hover:bg-bs-primary"
        >
          6
        </a>
        <a
          href=""
          className=" flex border border-bs-secondary rounded-lg w-10 items-center justify-center p-2 hover:bg-bs-primary"
        >
          »
        </a>
      </div>
    </div>
  );
}
