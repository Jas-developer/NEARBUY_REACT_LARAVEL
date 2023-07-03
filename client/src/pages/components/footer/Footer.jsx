import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-orange-400 text-white text-center py-6 mt-6 ">
      <div className="container mx-auto p-2">
        <p className=" text-xl font-semibold">
          © {new Date().getFullYear()} NearBuy. All Rights Reserved.
        </p>
        <p className="text-sm mt-2 font-medium">
          Designed and developed by NearBuy.
        </p>
      </div>
    </div>
  );
};
