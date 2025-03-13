import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children, cart = [] }) => {
  const location = useLocation();

  // Define routes to hide layout for
  const hideLayoutFor = [
    "/adminpage",
    "/adminpage/customers",
    "/adminpage/orders",
    "/adminpage/products",
    "/adminpage/addproducts",
  ];

  // Handle dynamic route matching
  const shouldHideLayout =
    hideLayoutFor.includes(location.pathname) || 
    location.pathname.startsWith("/adminpage/editproducts/");

  return (
    <div>
      {!shouldHideLayout && <Navbar cartCount={cart.length} />}
      <div className="content">{children}</div>
      {!shouldHideLayout && <Footer />}
      <Outlet />
    </div>
  );
};

export default Layout;

