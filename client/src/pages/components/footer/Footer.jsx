import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer-wrapper mt-2 bg-orange-400">
      <div className="grid grid-cols-2 md:grid-cols-4 mx-8 md:mx-12 lg:mx-24 mt-6">
        <div className="grid bg-orange-400 mt-2">
          <img src="Logo" alt="Logo" />
          <p>Logo</p>
        </div>
        <div className="grid bg-orange-400 mt-2">
          <h2 className="text-lg font-semibold mb-3">About us</h2>
          <p>We're your go-to online marketplace for seamless buying and selling experiences. We prioritize trust, convenience, and quality to ensure your satisfaction.</p>
        </div>
        <div className="grid bg-orange-400 mt-2">
          <h2 className="text-lg font-semibold mb-3">Vision</h2>
          <p className="mb-12">To be the leading online marketplace, connecting buyers and sellers in a seamless and vibrant shopping experience.</p>
        </div>
        <div className="grid bg-orange-400 mt-2">
          <h2 className="text-lg font-semibold mb-3">Mission</h2>
          <p>Our mission is to provide a trusted platform that empowers individuals and businesses to buy and sell products easily, fostering growth and entrepreneurship in the digital marketplace.</p>
        </div>
      </div>
    </div>
  );
};
