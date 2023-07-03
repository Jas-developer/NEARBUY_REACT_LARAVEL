import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [status, setStatus] = useState(false);

  return (
    <>
      {!status ? (
        <nav className="bg-orange-400 flex justify-between p-5 text-white">
          {/* Logo */}
          <div>
            <Link to="/" className="text-3xl" href="#">
              <img src="./logo/LogoResized.png" alt="LOGO" />
            </Link>
          </div>
          {/* Menu */}
          <div>
            <ul className="hidden md:flex space-x-12 ">
              <li>
                <Link to="/" className="hover:text-gray-200 align-middle">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-gray-200 align-middle">
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="hover:text-gray-200 align-middle"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link to="/store" className="hover:text-gray-200 align-middle">
                  Find a store
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-200 align-middle"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <button className="p-2 rounded bg-blue-400">Sign Up</button>
                </Link>
              </li>
            </ul>
            <AiOutlineBars
              className="md:hidden text-black cursor-pointer"
              size={"25px"}
              onClick={() => setStatus(true)}
            />
          </div>
        </nav>
      ) : null}

      {/* Responsive Side Navbar */}
      {status ? (
        <div className="text-white absolute w-full h-screen flex top-0">
          <div className="z-10 p-5 bg-gradient-to-b from-orange-400 to-white w-[240px] h-screen">
            <div className="flex mb-5">
              <Link to="/" className="text-3xl">
                LOGO
              </Link>
              <AiOutlineClose
                className="top-5 left-52 absolute cursor-pointer"
                size={"25px"}
                onClick={() => setStatus(false)}
              />
            </div>
            <div className="">
              <ul className="space-y-3 font-semibold">
                <li>
                  <Link to="/" className="hover:text-gray-200 align-middle">
                    Home
                  </Link>
                </li>
                <hr></hr>
                <li>
                  <Link to="/help" className="hover:text-gray-200 align-middle">
                    Help
                  </Link>
                </li>
                <hr></hr>
                <li>
                  <Link
                    to="/service"
                    className="hover:text-gray-200 align-middle"
                  >
                    Service
                  </Link>
                </li>
                <hr></hr>
                <li>
                  <Link
                    to="/store"
                    className="hover:text-gray-200 align-middle"
                  >
                    Find a store
                  </Link>
                </li>
                <hr></hr>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-gray-200 align-middle"
                  >
                    Contact
                  </Link>
                </li>
                <hr></hr>
                <li>
                  <button className="p-2 rounded bg-blue-400">Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
