import React from "react";

import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="w-full border-t border-solid">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="lg:flex-shrink-0 sm:max-lg:flex-grow-0 mx-auto md:mr-[35px]">
            <a href="#" className="text-white font-bold text-lg min-w-[121px]">
              <img src={logo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
