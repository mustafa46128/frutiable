import Cart from "@/Components/Cart";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Shop from "@/Components/Shop";
import Topbar from "@/Components/Topbar";
import React from "react";

export default function index({ title }) {
  return (
    <div>
      <Topbar />
      <Navbar />
      {/* <Shop /> */}
      <Shop title="Carts" desc="Cart" />
      <Cart />
      <Footer />
    </div>
  );
}
