import Carousel from "@/Components/Carousel";
import Descripition from "@/Components/Descripition";
import Footer from "@/Components/Footer";
import QuantityInput from "@/Components/Inputgroupbtn";
import Navbar from "@/Components/Navbar";
import Reply from "@/Components/Reply";
import Review from "@/Components/Review";
import Shop from "@/Components/Shop";
import Shopdetimage from "@/Components/Shopdetimage";
import Sidebar from "@/Components/Sidebar";
import SidebarShopdet from "@/Components/SidebarShopdet";
import Topbar from "@/Components/Topbar";
import Carsales from "@/Components/Carsales";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function index() {
  const [isDescription, setIsDescription] = useState(true);
  return (
    <div>
      <Topbar />
      <Navbar />
      <Shop title="Shop Detail" desc="Shop Detail" />

      <div className="w-[84%] mx-auto flex flex-col lg:flex-row gap-5">
        <div className="w-full">
          <Shopdetimage />
          <div className="flex flex-wrap items-start gap-x-4 mt-5 lg:mt-0">
            <h2
              onClick={() => setIsDescription(true)}
              className={` text-bs-primary focus:text-[#495057] cursor-pointer ${
                isDescription ? "border-b-2 border-bs-secondary" : ""
              }`}
            >
              Description
            </h2>
            <h2
              onClick={() => setIsDescription(false)}
              className={` text-bs-primary cursor-pointer ${
                isDescription ? "" : "border-b-2 border-bs-secondary"
              }`}
            >
              Review
            </h2>
            <hr className="w-full" />
          </div>
          {isDescription ? <Descripition /> : <Review />}

          <Reply />
        </div>
        <div className="mt-32">
          <div className="w-full  min-w-[245px]">
            <form className="bg-white border rounded-lg flex  w-full overflow-hidden">
              <input
                type="text"
                placeholder="Keywords"
                className=" min-w-0 px-3  border-none outline-none bg-transparent py-4 flex-grow"
              />
              <span className="bg-[#E9ECEF] px-4 items-center flex justify-center ">
                <FaSearch />
              </span>
            </form>
          </div>
          <SidebarShopdet />
        </div>
      </div>
      <Carsales />
      <Footer />
    </div>
  );
}
