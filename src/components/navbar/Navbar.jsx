import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../../components/AuthContext/AuthContext";
import logo from '../navbar/logo.png'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleChange = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <header className="bg-gradient-to-r from-pink-500 to-red-500 shadow-lg sticky top-0 z-50 p-2 ">
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
            <button
              onClick={logout}
              className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700"
            >
              Logout
            </button>
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
            </button>
          </Link>

          <button className="md:hidden text-white" onClick={toggleChange}>
            {isOpen ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-pink-600 p-5 space-y-6 absolute top-20 left-0 w-full shadow-xl">
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
