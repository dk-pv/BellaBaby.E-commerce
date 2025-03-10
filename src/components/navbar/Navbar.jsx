

import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../../components/AuthContext/AuthContext";
import logo from "../navbar/logo.png";

const Navbar = ({ cartCount }) => {
  const { isLoggedIn, logout, user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleChange = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className="bg-gradient-to-r from-pink-400 to-red-400 shadow-lg sticky top-0 z-50 p-2 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 h-auto" />
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white font-semibold hover:text-yellow-300">
            Home
          </Link>
          <Link to="/allproducts" className="text-white font-semibold hover:text-yellow-300">
            All Products
          </Link>
          <Link to="#" className="text-white font-semibold hover:text-yellow-300">
            Accessories & Toys
          </Link>
          <Link to="#" className="text-white font-semibold hover:text-yellow-300">
            SkinCare & Clothes
          </Link>
          <Link to="#" className="text-white font-semibold hover:text-yellow-300">
            Feeding & Diapers
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700"
              >
                {user?.name || "User"}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Order Details
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400">
                Login
              </button>
            </Link>
          )}

          <Link to="/cart">
            <button className="relative">
              <FaShoppingCart size={25} className="text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>

          <button className="md:hidden text-white" onClick={toggleChange}>
            {isOpen ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-pink-500 p-5 space-y-6 absolute top-20 left-0 w-full shadow-xl">
          <Link to="/" className="block text-white font-semibold hover:text-yellow-300" onClick={toggleChange}>
            Home
          </Link>
          <Link to="/allproducts" className="block text-white font-semibold hover:text-yellow-300" onClick={toggleChange}>
            All Products
          </Link>
          <Link to="#" className="block text-white font-semibold hover:text-yellow-300" onClick={toggleChange}>
            Accessories & Toys
          </Link>
          <Link to="#" className="block text-white font-semibold hover:text-yellow-300" onClick={toggleChange}>
            SkinCare & Clothes
          </Link>
          <Link to="#" className="block text-white font-semibold hover:text-yellow-300" onClick={toggleChange}>
            Feeding & Diapers
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

