import React from "react";
import Categories from "./Categories";
import Price from "./Price";
import Additional from "./Additional";
import Featuredproducts from "./Featured products";
import Button from "./Button";
import Fruitsbanner from "./Fruitsbanner";

function Sidebar({ className = "" }) {
  return (
    <div className={`w-full ${className} `}>
      <Categories />
      <Price />
      <Additional />
      <Featuredproducts />
      <Button />
      <Fruitsbanner />
    </div>
  );
}

export default Sidebar;
