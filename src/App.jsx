import React, { useState } from "react";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import "./App.css";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import ProductDetails from "./components/AllProducts/ProductDetails";
import Layout from "./components/layout/Layout";
import OrderDetails from "./pages/orderDtls/OrderDtls";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminMain from "./components/Admin/AdminMain";
import Customers from "./components/Admin/Customers";
import Orders from "./components/Admin/Orders";
import Products from "./components/Admin/Products";
import AddProduct from "./components/Admin/AddProduct";
import EditProduct from "./components/Admin/EditProdut";
const App = () => {
  const [cart, setCart] = useState([]);

  const AddToCart = (product) => {
    setCart([...cart, product]);
    alert(product.name + " " + "Add to cart");
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <div>
        <AuthProvider>
          <BrowserRouter>
            <Layout cart={cart}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/cart"
                  element={
                    <Cart
                      cart={cart}
                      setCart={setCart}
                      removeFromCart={removeFromCart}
                    />
                  }
                />
                <Route
                  path="/allproducts"
                  element={<AllProducts AddToCart={AddToCart} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/ProductDetails/:id"
                  element={<ProductDetails AddToCart={AddToCart} />}
                />
                <Route path="/orders" element={<OrderDetails />} />

                {/* Protected Route for Admin Dashboard */}
                <Route
                  path="/adminpage"
                  element={
                    <ProtectedRoute
                      element={<AdminMain />}
                      allowedRoles={["admin"]}
                    />
                  }
                />
                <Route path="/adminpage/customers" element={<Customers />} />
                <Route path="/adminpage/orders" element={<Orders />} />
                <Route path="/adminpage/products" element={<Products />} />
                <Route path="/adminpage/addproducts" element={<AddProduct />} />
                <Route path="/adminpage/editproducts" element={<EditProduct/>} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
};

export default App;
