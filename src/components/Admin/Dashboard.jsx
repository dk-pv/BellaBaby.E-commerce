// import React, { useEffect, useState } from "react";

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     users: 0,
//     orders: 0,
//     products: 0,
//     sales: 0,
//     recentUsers: [],
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const [usersRes, ordersRes, productsRes] = await Promise.all([
//           fetch("http://localhost:5000/users"),
//           fetch("http://localhost:5000/orders"),
//           fetch("http://localhost:5000/products"),
//         ]);

//         if (!usersRes.ok || !ordersRes.ok || !productsRes.ok) {
//           throw new Error("Failed to fetch data from one or more endpoints");
//         }

//         const users = await usersRes.json();
//         const orders = await ordersRes.json();
//         const products = await productsRes.json();

//         console.log("Orders Data:", orders);

//         const totalSales = orders.reduce((sum, order) => {
//           const amount = order.totalAmount || 0;
//           return sum + amount;
//         }, 0);

//         console.log("Total Sales:", totalSales);

//         setStats({
//           users: users.length,
//           orders: orders.length,
//           products: products.length,
//           sales: totalSales,
//           recentUsers: users.slice(-5).reverse(),
//         });
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };

//     fetchStats();
//   }, []);

//   const revenue = (stats.sales * 20) / 100;
//   console.log("Revenue:", revenue);

//   return (
//     <div className="flex flex-col gap-6 p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
//         Dashboard Overview
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="text-center border p-6 rounded-2xl shadow-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
//           <h2 className="text-2xl font-bold">Total Users</h2>
//           <p className="text-4xl mt-2">{stats.users || "N/A"}</p>
//         </div>

//         <div className="text-center border p-6 rounded-2xl shadow-xl bg-gradient-to-r from-pink-500 to-red-500 text-white">
//           <h2 className="text-2xl font-bold">Total Orders</h2>
//           <p className="text-4xl mt-2">{stats.orders || "N/A"}</p>
//         </div>

//         <div className="text-center border p-6 rounded-2xl shadow-xl bg-gradient-to-r from-green-500 to-teal-500 text-white">
//           <h2 className="text-2xl font-bold">Total Products</h2>
//           <p className="text-4xl mt-2">{stats.products || "N/A"}</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//         <div className="text-center border p-6 rounded-2xl shadow-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
//           <h2 className="text-2xl font-bold">Total Sales</h2>
//           <p className="text-4xl mt-2">
//             ${stats.sales ? stats.sales.toFixed(2) : "N/A"}
//           </p>
//         </div>

//         <div className="text-center border p-6 rounded-2xl shadow-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
//           <h2 className="text-2xl font-bold">Total Revenue</h2>
//           <p className="text-4xl mt-2">
//             ${stats.sales ? revenue.toFixed(2) : "N/A"}
//           </p>
//         </div>
//       </div>

//       <div className="mt-10">
//         <h2 className="text-2xl font-bold mb-4">Recent Registered Users</h2>
//         <table className="w-full table-auto border-collapse border-2 border-gray-300 rounded-xl">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="p-4 text-left uppercase tracking-wider">User</th>
//               <th className="p-4 text-left uppercase tracking-wider">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {stats.recentUsers.map((user, index) => (
//               <tr
//                 key={index}
//                 className="odd:bg-blue-50 even:bg-blue-100 hover:bg-blue-200 transition-all duration-150"
//               >
//                 <td className="p-4 text-gray-800 font-semibold">{user.name}</td>
//                 <td className="p-4 text-gray-600">{user.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    orders: 0,
    products: 0,
    sales: 0,
    recentUsers: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, ordersRes, productsRes] = await Promise.all([
          fetch("http://localhost:5000/users"),
          fetch("http://localhost:5000/orders"),
          fetch("http://localhost:5000/products"),
        ]);

        if (!usersRes.ok || !ordersRes.ok || !productsRes.ok) {
          throw new Error("Failed to fetch data from one or more endpoints");
        }

        const users = await usersRes.json();
        const orders = await ordersRes.json();
        const products = await productsRes.json();

        const totalSales = orders.reduce((sum, order) => {
          const amount = order.totalAmount || 0;
          return sum + amount;
        }, 0);

        setStats({
          users: users.length,
          orders: orders.length,
          products: products.length,
          sales: totalSales,
          recentUsers: users.slice(-5).reverse(),
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const revenue = (stats.sales * 20) / 100;

  return (
    <div className="flex flex-col gap-6 p-6 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[{ title: "Total Users", value: stats.users }, { title: "Total Orders", value: stats.orders }, { title: "Total Products", value: stats.products }].map((item, index) => (
          <div key={index} className="text-center p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-4xl font-bold text-indigo-600">{item.value || "N/A"}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="text-center p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Total Sales</h2>
          <p className="text-4xl font-bold text-green-500">
            ${stats.sales ? stats.sales.toFixed(2) : "N/A"}
          </p>
        </div>
        <div className="text-center p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Total Revenue</h2>
          <p className="text-4xl font-bold text-yellow-500">
            ${stats.sales ? revenue.toFixed(2) : "N/A"}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Recent Registered Users
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 bg-white shadow-lg rounded-xl">
            <thead className="bg-indigo-500 text-white">
              <tr>
                <th className="p-4 text-left">User</th>
                <th className="p-4 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentUsers.map((user, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-50 even:bg-gray-100 hover:bg-indigo-100 transition"
                >
                  <td className="p-4 text-gray-800">{user.name}</td>
                  <td className="p-4 text-gray-600">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



