import React from "react";
import Categories from "./Categories";
import Featuredproducts from "./Featured products";
import Button from "./Button";
import Fruitsbanner from "./Fruitsbanner";
import FeatureProduct1 from "./FeatureProduct1";

export default function SidebarShopdet({ className = "" }) {
  return (
    <div className={`w-full ${className} `}>
      <Categories />
      <FeatureProduct1 />
      <Button />
      <Fruitsbanner />
    </div>
  );
}
