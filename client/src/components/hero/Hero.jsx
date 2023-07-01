import React from "react";

export const Hero = () => {
  return (
    <div className="bg-white">
      <div className="hero-wrapper p-10">
        <div className="grid grid-cols-1  md:grid-cols-2 bg-orange-300  md:bg-orange-400 rounded-2xl ">
          <div className="grid-item p-5 mt-6 lg:ml-24 ml-6">
            <div>
              <span>
                <b className=" text-3xl md:text-4xl text-orange-600 md:text-white">
                  {" "}
                  EXTRA 20% OFF
                </b>{" "}
                <br />
              </span>
            </div>
            <div>
              <span className="text-black">
                <strong>for first time users only</strong>
              </span>
            </div>
            <div className="button-wrapper mt-6">
              <button className="bg-white w-36 text-orange-400 font-semibold p-1 rounded-md">
                Shop now
              </button>
            </div>
            <div className="terms-wrapper  mt-2 md:mt-10">
              <p className="text-black">
                <ul className="underline">See terms</ul>
              </p>
            </div>
          </div>
          <div
            className="grit-item p-16  lg:ml-24 ml-6 bg-no-repeat bg-center object-fit"
            style={{ backgroundImage: `url('./products/bg-image.png')` }}
          >
            <div className="mt-2 md:mt-12">
              <span className="text-3xl md:text-5xl font-bold text-black"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
