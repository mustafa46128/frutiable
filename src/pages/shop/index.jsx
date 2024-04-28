import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Shop from "@/Components/Shop";
import Shopcards from "@/Components/Shopcards";
import Sidebar from "@/Components/Sidebar";
import Topbar from "@/Components/Topbar";
import React from "react";
import { FaSearch } from "react-icons/fa";

function index({ title }) {
  return (
    <div className="w-full">
      <Topbar />
      <Navbar />
      <Shop title="Shop" desc="Shop" />
      <div className="w-[85%] mx-auto">
        <h1 className="text-[2.5rem] font-raleway font-[600] text-[#45595b] mt-20">
          Fresh fruits shop
        </h1>
        <div className="lg:w-full flex flex-wrap justify-between items-center gap-y-4">
          <div className="w-full lg:w-1/4 min-w-[245px]">
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
          <div className="flex w-full lg:w-1/4 min-w-[245px] bg-[#f4f6f8] px-3 py-4 rounded-lg items-center justify-between">
            <h4 className="text-[#747d88] text-[1rem] font-[400]">
              Default Sorting:
            </h4>
            <select
              name="fruits"
              id="fruitslist"
              className="bg-transparent pl-4"
            >
              <option value="">Nothing</option>
              <option value="">popularity</option>
              <option value="">orginic</option>
              <option value="">Fantistic</option>
            </select>
          </div>
        </div>

        <div className="mt-6 w-full grid grid-cols-1 lg:grid-cols-4 gap-y-6 lg:gap-x-6">
          {/* <div className="w-[25%]"> */}
          <Sidebar className="" />
          {/* </div> */}
          {/* <div className=" mt-6 w-[80%] "> */}
          <Shopcards className=" col-span-3 " />
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
