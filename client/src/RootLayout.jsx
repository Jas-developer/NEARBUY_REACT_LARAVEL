// IMPORT YOUR COMPONENTS HERE </RAFC>
import React from "react";
import { Hero } from "./components/hero/Hero";
import { ShopSale } from "./components/products/shop-sale/ShopSale";
import { SameDay } from "./components/products/same-day-section/SameDay";

export const RootLayout = () => {
  return (
    <div>
      <Hero />
      <ShopSale />
      <SameDay />
    </div>
  );
};
