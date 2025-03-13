import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-600 text-center text-xl">
        Loading order details...
      </p>
    );
  }

  return (
    <div className="p-10 bg-gradient-to-br from-yellow-100 via-orange-50 to-orange-200 rounded-3xl shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          ← Back
        </button>
        <h2 className="text-5xl font-extrabold text-orange-700">
          Order Details
        </h2>
        <div></div>
      </div>

      {orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-orange-300 rounded-xl">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="border p-4">Order ID</th>
                <th className="border p-4">Total Price</th>
                <th className="border p-4">Date</th>
                <th className="border p-4">Payment Method</th>
                <th className="border p-4">Customer Name</th>
                <th className="border p-4">Email</th>
                <th className="border p-4">Delivery Status</th>
                <th className="border p-4">Total Ordered Products</th>
                <th className="border p-4">Ordered Products</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order.id || index}
                  className={`${
                    index % 2 === 0 ? "bg-orange-50" : "bg-white"
                  } hover:bg-orange-100 transition-transform transform hover:scale-[1.01]`}
                >
                  <td className="border p-4 text-center">
                    {order.id || "N/A"}
                  </td>
                  <td className="border p-4 text-center font-semibold">
                    ₹{order.totalAmount || "0"}
                  </td>
                  <td className="border p-4 text-center">
                    {order.date || "N/A"}
                  </td>
                  <td className="border p-4 text-center">
                    {order.paymentMethod || "N/A"}
                  </td>
                  <td className="border p-4 text-center font-medium">
                    {order.customer.name || "N/A"}
                  </td>
                  <td className="border p-4 text-center">
                    {order.customer.email || "N/A"}
                  </td>
                  <td className="border p-4 text-center">
                    <select className="p-2 bg-white border border-orange-400 rounded-lg">
                      <option>Pending</option>
                      <option>Packed</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                  <td className="border p-4 text-center">
                    {order.quantities.length || "N/A"}
                  </td>
                  <td className="border p-4 text-center">
                    {order.items?.length > 0
                      ? order.items.map((item) => item.name).join(", ")
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 text-center text-2xl">No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
