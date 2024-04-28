import Client from "@/Components/Client";
import Navbar from "@/Components/Navbar";
import Shop from "@/Components/Shop";
import Topbar from "@/Components/Topbar";
import React from "react";

export default function index() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Shop title={"Testimonial"} />
      <Client />
    </div>
  );
}
