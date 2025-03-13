import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthContext/AuthContext";
import {
  FaTachometerAlt,
  FaUsers,
  FaShoppingCart,
  FaBox,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import Dashboard from "./Dashboard";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, link: "/adminpage" },
    { name: "Customers", icon: <FaUsers />, link: "/adminpage/customers" },
    { name: "Orders", icon: <FaShoppingCart />, link: "/adminpage/orders" },
    { name: "Products", icon: <FaBox />, link: "/adminpage/products" },
  ];

  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      <div
        className={`bg-gradient-to-br from-indigo-600 to-purple-800 text-white p-6 flex flex-col w-72 h-screen fixed shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-50`}
      >
        <div className="flex items-center justify-between mb-8 border-b pb-4 border-indigo-400">
          <h1 className="text-3xl font-bold uppercase tracking-wide">
            BellaBaby
          </h1>
          <button
            className="md:hidden p-2 hover:bg-indigo-500 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
        <ul className="flex-grow">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-4 hover:bg-indigo-500 rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-105"
            >
              <Link
                to={item.link}
                className="flex items-center gap-4 w-full"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="text-lg font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <button
            className="w-full p-4 bg-red-500 hover:bg-red-600 rounded-xl flex items-center gap-3 justify-center shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            Log Out
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen md:ml-72">
        <button
          className={`md:hidden p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 fixed top-4 left-4 z-50 ${
            isOpen ? "hidden" : ""
          }`}
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
        <Dashboard />
      </div>
    </div>
  );
};

export default Sidebar;
