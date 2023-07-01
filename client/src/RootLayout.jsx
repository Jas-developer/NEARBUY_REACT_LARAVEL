// IMPORT YOUR COMPONENTS HERE </RAFC>
import React from "react";
import { Hero } from "./components/hero/Hero";
import { ShopSale } from "./components/products/shop-sale/ShopSale";
import { SameDay } from "./components/products/same-day-section/SameDay";

export const RootLayout = () => {
  return (
    <div>
      {/* navbar area here */}
      <div className="md:mx-4 mx-1 lg:mx-12">
        <Hero />
        <ShopSale />
        <SameDay />
      </div>
    </div>
  );
};
