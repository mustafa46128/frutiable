import Bestseller from "@/Components/Bestseller";
import Bestseller1 from "@/Components/Bestseller1";
import Cardfruits from "@/Components/Cardfruits";
import Cards from "@/Components/Cards";
import Carousel from "@/Components/Carousel";
import Client from "@/Components/Client";
import Exotic from "@/Components/Exotic";
import Footer from "@/Components/Footer";
import Fruitemax from "@/Components/Fruitemax";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Icons from "@/Components/Icons";
import Satisfied from "@/Components/Satisfied";
import Shop from "@/Components/Shop";
import React from "react";

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <Icons />
      <Cardfruits />
      <Cards />
      <Fruitemax />
      <Carousel />
      <Exotic />
      <Bestseller />
      <Bestseller1 />
      <Satisfied />
      <Client />
      <Footer />
      {/* <Shop /> */}
    </>
  );
}
