import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className="bg-orange-400 text-white text-center py-6">
      <div className="container mx-auto">
        <p className="text-lg">
          © {new Date().getFullYear()} NearBuy. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed and developed by NearBuy.
        </p>
      </div>
    </div>
  );
};


