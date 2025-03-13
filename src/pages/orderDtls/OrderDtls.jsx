import React, { useEffect, useState } from "react";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("userId"); // Get the logged-in user ID from local storage

  useEffect(() => {
    fetch(`http://localhost:5000/orders?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, [userId]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-5 mb-5 bg-white shadow-lg">
            <h2 className="text-lg font-semibold">Order {index + 1}</h2>
            <p>Date: {order.date}</p>
            <p>Payment Method: {order.paymentMethod}</p>
            <p>Total Amount: ₹{order.totalAmount.toFixed(2)}</p>
            <h3 className="font-semibold mt-3">Items:</h3>
            <ul>
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} x {order.quantities[idx]} — ₹
                  {(item.price * order.quantities[idx]).toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderDetails;



