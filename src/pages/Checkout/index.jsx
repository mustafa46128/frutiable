import Billing from "@/Components/Billing";
import Checkoutproduct from "@/Components/Checkoutproduct";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Shop from "@/Components/Shop";
import Topbar from "@/Components/Topbar";
import React from "react";

export default function index() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="w-full">
        <Shop title="Checkout" desc="Checkout" />
        <div className="w-[80%] mx-auto grid grid-cols-12 mt-10 gap-10">
          <h1 className="text-[40px] font-raleway font-[600] text-[#45595b] col-span-full ">
            Billing details
          </h1>
          <Billing />
          <Checkoutproduct />
        </div>
        <Footer />
      </div>
    </div>
  );
}
