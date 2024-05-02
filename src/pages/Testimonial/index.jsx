import Client from "@/Components/Client";
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
      <Shop title={"Testimonial"} desc={"Testimonial"} />
      <Client />
      <Footer />
    </div>
  );
}
