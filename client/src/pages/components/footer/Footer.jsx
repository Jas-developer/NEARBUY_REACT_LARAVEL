import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer-wrapper mt-3">
      <div className="grid grid-cols-2 md:grid-cols-4 mx-8 md:mx-12 lg:mx-24">
        <div className="grid bg-red-400">GRID-1</div>
        <div className="grid bg-blue-400">GRID-2</div>
        <div className="grid bg-green-500">GRID-3</div>
        <div className="grid bg-violet-500">GRID-4</div>
      </div>
    </div>
  );
};
