import React from "react";

export const SameDay = () => {
  return (
    <div className="sameday-wrapper mx-10 mt-8">
      <div className="bg-orange-400 rounded-lg drop-shadow-2xl">
        <div className="grid md:grid-cols-2 mt-4">
          <div className="grid-item p-4 text-2xl font-semibold drop-shadow-md text-white">
            <span>Same Day Delivery</span> <br />
            <span>From Sellers Near You.</span>
          </div>
          <div className="grid-item">
            <div className="flex  lg:justify-end md:justify-end p-4">
              <button className=" text-white transition-transform duration-300 transform hover:scale-110 mt-2 mr-20 bg-blue-400 p-2 rounded-lg w-36 text-white-600 font-semibold text-xl shadow-gray-900">
                Learn more.
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <span className=" text-2xl lg:text-4xl font-bold text-orange-600  p-4">
          JUST FOR YOU!
        </span>
        <div className="grid grid-cols-3 gap-2  md:grid-cols-4 text-black mt-4 md:gap-6 ">
          <div className="grid-item">
            <div className="  grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl cursor-pointer">
              <img
                src="./products/nestle.png"
                alt=""
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="cursor-pointer grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl ">
              <img
                src="./products/feed.png"
                alt=""
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="cursor-pointer grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl">
              <img
                src="./products/fan.png"
                alt=""
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
          <div className="grid-item ">
            <div className="cursor-pointer grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl">
              <img
                src="./products/choco.png"
                alt=""
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="cursor-pointer grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl">
              <img
                src="./products/mouse.png"
                alt=""
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
          <div className="grid-item ">
            <div className="cursor-pointer grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl">
              <img
                src="./products/kindle.png"
                alt=""
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="cursor-pointer grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl">
              <img
                src="./products/keyb.png"
                alt=""
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
          <div className="grid-item ">
            <div className="cursor-pointer grid place-items-center bg-gray-300 rounded-lg h-42 shadow-2xl">
              <img
                src="./products/note.png"
                alt=""
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="order-text-wrapper lg:text-2xl text-lg font-semibold text-center underline mt-6 text-gray-600">
        <span className=" cursor-pointer shadow p-3 transition-transform duration-300 transform hover:scale-110">
          200,000+ Successfull Orders.
        </span>
      </div>
    </div>
  );
};
