

import React from "react";
import Logo from "./logo.png";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaLocationDot, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#e3417c] text-white">
      <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
          <img src={Logo} alt="BellaBaby Logo" className="mx-auto md:mx-0 w-32 h-auto" />
          <h3 className="text-3xl font-bold text-[#57B8FF] mt-4">
            Bella<span className="text-[#2D2F92]">Baby.</span>
          </h3>
          <p className="mt-2 text-sm">Caring for Your Little One with Love and Safety</p>
        </div>

        <div className="w-full md:w-1/4 px-4">
          <h2 className="title-font font-bold tracking-widest text-lg mb-3 text-black">CONTACT</h2>
          <ul className="list-none">
            <li className="mt-2 flex items-center">
              <IoCall className="mr-2 text-black" /> +91 8285852135
            </li>
            <li className="mt-2 flex items-center">
              <SiGmail className="mr-2 text-black" /> bellababyindia@gmail.com
            </li>
            <li className="mt-2 flex items-start">
              <FaLocationDot className="mr-2 text-black mt-1" />
              <span>
                DK Company<br />
                BellaBaby HeadOffice<br />
                Manjeri (676122)<br />
                Malappuram, Kerala, India<br />
                Open 9 am - Closes 7 pm
              </span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 px-4">
          <h2 className="title-font font-bold tracking-widest text-lg mb-3 text-black">PRODUCTS</h2>
          <ul className="list-none">
            <li className="mt-2 hover:text-[#57B8FF] cursor-pointer">Accessories & Toys</li>
            <li className="mt-2 hover:text-[#57B8FF] cursor-pointer">SkinCare & Clothes</li>
            <li className="mt-2 hover:text-[#57B8FF] cursor-pointer">Feeding & Diapers</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 px-4">
          <h2 className="title-font font-bold tracking-widest text-lg mb-3 text-black">MENU</h2>
          <ul className="list-none">
            <li className="mt-2">
              <Link to="/signup" className="hover:text-[#57B8FF]">Register</Link>
            </li>
            <li className="mt-2">
              <Link to="/login" className="hover:text-[#57B8FF]">Login</Link>
            </li>
            <li className="mt-2">
              <Link to="/allproducts" className="hover:text-[#57B8FF]">All Products</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#2D2F92] text-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap justify-between items-center">
          <p className="text-sm">ID 2024 BellaBaby -- <span>@copyright</span></p>
          <div className="flex space-x-4">
            <FaXTwitter size={30} className="hover:text-[#57B8FF] cursor-pointer" />
            <FaFacebook size={30} className="hover:text-[#57B8FF] cursor-pointer" />
            {/* <FaInstagramSquare size={30} className="hover:text-[#57B8FF] cursor-pointer" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;