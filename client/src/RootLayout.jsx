// IMPORT YOUR COMPONENTS HERE </RAFC>
import React from "react";
import { Hero } from "./components/hero/Hero";
import { ShopSale } from "./components/products/shop-sale/ShopSale";

export const RootLayout = () => {
  return (
    <div>
      <Hero />
      <ShopSale />
    </div>
  );
};
