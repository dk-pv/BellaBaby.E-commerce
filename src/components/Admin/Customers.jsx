
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-gray-600 text-center text-xl">Loading customer details...</p>;
  }

  return (
    <div className="p-10 bg-gradient-to-br from-green-100 via-lime-50 to-lime-200 rounded-3xl shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          ← Back
        </button>
        <h2 className="text-5xl font-extrabold text-green-700">Customer Details</h2>
        <div></div>
      </div>

      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-green-300 rounded-xl">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="border p-4">ID</th>
                <th className="border p-4">Name</th>
                <th className="border p-4">Email</th>
                <th className="border p-4">Role</th>
                <th className="border p-4">Registered Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id || index}
                  className={`${
                    index % 2 === 0 ? "bg-lime-50" : "bg-white"
                  } hover:bg-lime-100 transition-transform transform hover:scale-[1.01]`}
                >
                  <td className="border p-4 text-center">{user.id || "N/A"}</td>
                  <td className="border p-4 text-center font-medium">{user.name || "N/A"}</td>
                  <td className="border p-4 text-center">{user.email || "N/A"}</td>
                  <td className="border p-4 text-center">{user.role || "N/A"}</td>
                  <td className="border p-4 text-center">{user.createDate || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 text-center text-2xl">No customers found.</p>
      )}
    </div>
  );
};

export default Customers;


