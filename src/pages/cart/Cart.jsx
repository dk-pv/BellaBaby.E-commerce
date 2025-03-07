import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Cart = ({ cart, removeFromCart, setCart }) => {
  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const totalAmount = cart.reduce(
    (total, item, index) => total + item.price * quantities[index],
    0
  );

  const handleOrderPlacement = () => {
    alert("Your order is placed!");
    setCart([]);
  };

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="container mx-auto mt-10">
          <div className="flex flex-col lg:flex-row shadow-md my-10">
            <div className="w-full lg:w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
              </div>

              {cart.map((cartItem, index) => (
                <div
                  key={index}
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                >
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img
                        className="h-24"
                        src={cartItem.image}
                        alt={cartItem.name}
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{cartItem.name}</span>
                      <span className="text-red-500 text-xs">
                        Price : {cartItem.price}
                      </span>
                      <a
                        href="#"
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <button
                      className="border px-2 py-1"
                      onClick={() =>
                        handleQuantityChange(
                          index,
                          Math.max(1, quantities[index] - 1)
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      className="mx-2 border text-center w-8"
                      type="number"
                      value={quantities[index]}
                      onChange={(e) =>
                        handleQuantityChange(
                          index,
                          parseInt(e.target.value) || 1
                        )
                      }
                    />
                    <button
                      className="border px-2 py-1"
                      onClick={() =>
                        handleQuantityChange(index, quantities[index] + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ₹{cartItem.price.toFixed(2)}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ₹{(cartItem.price * quantities[index]).toFixed(2)}
                  </span>
                </div>
              ))}

              <Link
                to="/allproducts"
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <span className="flex">
                  <FaLongArrowAltLeft size={22} /> Continue Shopping
                </span>
              </Link>
            </div>

            <div
              id="summary"
              className="w-full lg:w-1/4 bg-[#f6f6f6] px-8 py-10"
            >
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cart.length}
                </span>
                <span className="font-semibold text-sm">
                  ₹{totalAmount.toFixed(2)}
                </span>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Payment Section</h2>
                <div className="mb-4">
                  <label className="block mb-2">Select Payment Method:</label>
                  <select
                    className="border p-2 w-full"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="card">Card Payment</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </div>

                {paymentMethod === "card" && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleOrderPlacement();
                    }}
                  >
                    <label className="block mb-2">Card Number</label>
                    <input
                      type="text"
                      className="border p-2 w-full mb-4"
                      placeholder="1234 5678 9012 3456"
                    />
                    <label className="block mb-2">Expiration Date</label>
                    <input
                      type="text"
                      className="border p-2 w-full mb-4"
                      placeholder="MM/YY"
                    />
                    <label className="block mb-2">CVV</label>
                    <input
                      type="text"
                      className="border p-2 w-full mb-4"
                      placeholder="123"
                    />
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 w-full"
                    >
                      Pay Now
                    </button>
                  </form>
                )}

                {paymentMethod === "cod" && (
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 w-full"
                    onClick={handleOrderPlacement}
                  >
                    Place Order (COD)
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
