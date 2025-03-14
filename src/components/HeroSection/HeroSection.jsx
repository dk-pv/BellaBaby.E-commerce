import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-teal-300 to-cyan-200 flex items-center justify-center p-6 md:p-12">
      <div className="text-center">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl animate-fade-in">
          Welcome to <span className="text-yellow-300">BellaBaby</span>
        </h1>
        <p 
          className="mt-4 text-lg md:text-2xl lg:text-3xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          "Wrap your little one in comfort and care. Explore our handcrafted, safe, and delightful baby essentials."
        </p>
        <div className="mt-8 space-x-4">
          <button 
            onClick={() => navigate('/allproducts')}
            className="px-6 py-3 bg-yellow-300 text-teal-900 font-bold rounded-full hover:bg-yellow-400 transition">
            Shop Now
          </button>
          <button 
            className="px-6 py-3 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition">
            Learn More
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-teal-600">Quality Products</h2>
            <p className="mt-2 text-gray-600">Our baby products are crafted with the highest quality materials, ensuring safety and durability.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-teal-600">24/7 Support</h2>
            <p className="mt-2 text-gray-600">Need assistance? Our friendly customer support team is available around the clock to help you out.</p>
          </div>
        
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-teal-600">Our Mission</h2>
            <p className="mt-2 text-gray-600">We’re committed to providing safe, sustainable, and affordable baby essentials for every family.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




