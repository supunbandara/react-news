import React from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { BiImages } from "react-icons/bi";
import { BsGlobeAmericas } from "react-icons/bs";

import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-solid">
      <div className="container mx-auto my-6 px-4 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <HiMenu
              fontSize={32}
              className="text-black cursor-pointer inline-flex items-center justify-center mr-3.5"
            />
          </div>

          <div className="lg:flex-shrink-0 sm:max-lg:flex-grow-0 mx-auto md:mr-[35px]">
            <a href="#" className="text-white font-bold text-lg min-w-[121px]">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="sm:block flex-grow hidden">
            <form className="flex justify-center w-[320px] h-[42px]">
              <input
                className="inline-block bg-gray-200 rounded-md w-full text-gray-800 py-2.5 px-4 leading-tight focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>

          <div className="flex items-center text-right font-normal md:ml-8 ml-0 text-black">
            <a
              href="#"
              className="hidden lg:flex flex-col items-center pr-6 text-base"
            >
              <AiOutlineHome size={20} className="mr-2" />
              Home
            </a>
            <a
              href="#"
              className="hidden lg:flex flex-col items-center pr-6 text-base"
            >
              <FaRegHandshake size={20} className="mr-2" />
              Partners
            </a>
            <a
              href="#"
              className="hidden lg:flex flex-col items-center pr-6 text-base"
            >
              <BiImages size={20} className="mr-2" />
              Digital Assets
            </a>
            <a
              href="#"
              className="hidden lg:flex flex-col items-center pr-6 text-base"
            >
              <BsGlobeAmericas size={20} className="mr-2" />
              Dilmah Universe
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
