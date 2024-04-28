import Billing from "@/Components/Billing";
import Checkoutproduct from "@/Components/Checkoutproduct";
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
        <Shop title="Checkout" />
        <div className="w-[80%] mx-auto flex justify-between mt-10 gap-10">
          <div className="w-[60%]">
            <Billing />
          </div>
          <div className="w-[40%]">
            <Checkoutproduct />
          </div>
        </div>
      </div>
    </div>
  );
}
