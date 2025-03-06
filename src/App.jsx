import React, { useState } from "react";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import "./App.css";
import { AuthProvider} from "./components/AuthContext/AuthContext";
import ProductDetails from "./components/AllProducts/ProductDetails";

const App = () => {
  const [cart, setCart] = useState([]);

  const AddToCart = (product) => {
    // add cart
    setCart([...cart, product]);
    alert("Item Addedd in card")
   
  };

  //remove cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };
  

  return (
    <>
      <div>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/cart"
                element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} />}
              />
              <Route
                path="/allproducts"
                element={<AllProducts AddToCart={AddToCart}  />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
};

export default App;
