


import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children, cart = [] }) => {
  const location = useLocation();
  const hideLayoutFor = ['/adminpage' , '/adminpage/customers','/adminpage/orders','/adminpage/products','/adminpage/addproducts','/adminpage/editproducts']; // Add any routes you want to exclude layout for

  const shouldHideLayout = hideLayoutFor.includes(location.pathname);

  return (
    <div>
      {!shouldHideLayout && <Navbar cartCount={cart.length} />}
      <div className="content">
        {children}
      </div>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default Layout;

