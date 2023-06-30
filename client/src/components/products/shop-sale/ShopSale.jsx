import React from "react";

export const ShopSale = () => {
  return (
    <div className="shop-sale-wrapper mx-10">
      <span className="text-black text-2xl font-semibold">SHOP THE SALE!</span>
      <div className="grid grid-cols-2 md:grid-cols-4 text-black mt-2 text-center">
        <div className="grid-item bg-green-300">GRID #1</div>
        <div className="grid-item bg-yellow-300">GRID #2</div>
        <div className="grid-item bg-black text-orange-300">GRID #3</div>
        <div className="grid-item bg-violet-600">GRID#4</div>
      </div>
    </div>
  );
};
