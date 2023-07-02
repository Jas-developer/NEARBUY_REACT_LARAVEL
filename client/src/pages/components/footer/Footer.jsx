import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-orange text-white text-center">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="text-lg font-bold mb-2">About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-2">Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-2">Follow Us</h5>
            <ul className="list-none">
              <li className="inline-block mr-4">
                <a href="#" className="text-white hover:text-gray-300">Facebook</a>
              </li>
              <li className="inline-block mr-4">
                <a href="#" className="text-white hover:text-gray-300">Twitter</a>
              </li>
              <li className="inline-block mr-4">
                <a href="#" className="text-white hover:text-gray-300">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-3">
        <p className="text-sm text-white m-0">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

