import Navbar from "@/Components/Navbar";
import Shop from "@/Components/Shop";
import Topbar from "@/Components/Topbar";
import { BsExclamationTriangle } from "react-icons/bs";
import React from "react";
import Footer from "@/Components/Footer";

export default function index() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Shop title={"404 Error"} desc={404} />
      <div className="w-full flex justify-center mt-16">
        <div className=" w-1/2 flex flex-col justify-center items-center text-center">
          <BsExclamationTriangle className="text-7xl text-bs-orange" />
          <h1 className=" text-[5rem] font-[800] font-raleway text-[#45595b]">
            404
          </h1>
          <h1 className="text-[2.5rem] text-[#45595b] font-[600]">
            Page Not Found
          </h1>
          <p className="text-[1rem] font-[400] text-[#747d88] mb-5">
            We’re sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
          <button className="rounded-full border border-bs-secondary py-3 px-8 font-[600] text-[#747d88] hover:text-[white] hover:bg-bs-secondary">
            Go Back To Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
