
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiKeyReturnFill } from "react-icons/pi";
import { FaCcAmazonPay } from "react-icons/fa";

const Service = () => {
  return (
    <div className="bg-[#f8f9fa] py-16">
      <div className="container px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white hover:bg-[#FF91A4] transform hover:scale-110 transition-all py-8 px-6 rounded-xl text-center shadow-lg border-t-4 border-[#FF6B6B]">
          <FaShippingFast size={50} className="text-[#FF6B6B] mx-auto" />
          <h3 className="text-xl font-bold mt-4">Shipping & Delivery</h3>
          <p className="text-sm mt-2 text-gray-600">Get your products delivered swiftly and safely.</p>
        </div>

        <div className="bg-white hover:bg-[#FFD700] transform hover:scale-110 transition-all py-8 px-6 rounded-xl text-center shadow-lg border-t-4 border-[#FFC300]">
          <MdProductionQuantityLimits size={50} className="text-[#FFC300] mx-auto" />
          <h3 className="text-xl font-bold mt-4">Authentic Products</h3>
          <p className="text-sm mt-2 text-gray-600">Only the best, verified products for your little ones.</p>
        </div>

        <div className="bg-white hover:bg-[#98FB98] transform hover:scale-110 transition-all py-8 px-6 rounded-xl text-center shadow-lg border-t-4 border-[#32CD32]">
          <PiKeyReturnFill size={50} className="text-[#32CD32] mx-auto" />
          <h3 className="text-xl font-bold mt-4">Easy Return</h3>
          <p className="text-sm mt-2 text-gray-600">Change your mind? No worries, easy returns available.</p>
        </div>

        <div className="bg-white hover:bg-[#ADD8E6] transform hover:scale-110 transition-all py-8 px-6 rounded-xl text-center shadow-lg border-t-4 border-[#1E90FF]">
          <FaCcAmazonPay size={50} className="text-[#1E90FF] mx-auto" />
          <h3 className="text-xl font-bold mt-4">Secure Payment</h3>
          <p className="text-sm mt-2 text-gray-600">Pay with confidence through secure methods.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;



