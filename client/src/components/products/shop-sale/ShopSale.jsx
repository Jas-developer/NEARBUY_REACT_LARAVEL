import React from "react";
export const ShopSale = () => {
  return (
    <div className="shop-sale-wrapper mx-10 ">
      <span className="text-orange-500 text-2xl lg:text-3xl font-bold ml-2">
        SHOP THE SALE!
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 text-black mt-4 gap-6 ">
        <div className="grid-item">
          <div className="grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl">
            <img
              src="./products/nestle.png"
              alt=""
              className="transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        </div>
        <div className="grid-item">
          <div className="grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl ">
            <img
              src="./products/feed.png"
              alt=""
              className="transition-transform duration-300 transform hover:scale-110 "
            />
          </div>
        </div>
        <div className="grid-item">
          <div className="grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl">
            <img
              src="./products/fan.png"
              alt=""
              className="transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        </div>
        <div className="grid-item ">
          <div className="grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl">
            <img
              src="./products/note.png"
              alt=""
              className="transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
