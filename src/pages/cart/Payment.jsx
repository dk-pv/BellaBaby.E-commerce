// // import { useState } from "react";


// // const Payment = () => {
// // const [paymentMethod, setPaymentMethod] = useState("card");

// //   return (
// //     <>
// //       <div className="bg-white p-4 rounded-lg shadow-md">
// //         <h2 className="text-lg font-semibold mb-4">Payment Section</h2>
// //         <div className="mb-4">
// //           <label className="block mb-2">Select Payment Method:</label>
// //           <select
// //             className="border p-2 w-full"
// //             value={paymentMethod}
// //             onChange={(e) => setPaymentMethod(e.target.value)}
// //           >
// //             <option value="card">Card Payment</option>
// //             <option value="cod">Cash on Delivery</option>
// //           </select>
// //         </div>

// //         {paymentMethod === "card" && (
// //           <form
// //             onSubmit={(e) => {
// //               e.preventDefault();
// //               handleOrderPlacement();
// //             }}
// //           >
// //             <label className="block mb-2">Card Number</label>
// //             <input
// //               type="text"
// //               className="border p-2 w-full mb-4"
// //               placeholder="1234 5678 9012 3456"
// //             />
// //             <label className="block mb-2">Expiration Date</label>
// //             <input
// //               type="text"
// //               className="border p-2 w-full mb-4"
// //               placeholder="MM/YY"
// //             />
// //             <label className="block mb-2">CVV</label>
// //             <input
// //               type="text"
// //               className="border p-2 w-full mb-4"
// //               placeholder="123"
// //             />
// //             <button
// //               type="submit"
// //               className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 w-full"
// //             >
// //               Pay Now
// //             </button>
// //           </form>
// //         )}

// //         {paymentMethod === "cod" && (
// //           <button
// //             className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 w-full"
// //             onClick={handleOrderPlacement}
// //           >
// //             Place Order (COD)
// //           </button>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default Payment;






// // import { useState } from "react";
// // import { FaCreditCard, FaMoneyBillWave, FaPaypal, FaGooglePay } from "react-icons/fa";

// // const Payment = () => {
// //   const [paymentMethod, setPaymentMethod] = useState("card");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [paymentStatus, setPaymentStatus] = useState("");

// //   const handleOrderPlacement = () => {
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       setIsLoading(false);
// //       setPaymentStatus("Payment successful! Thank you for your order.");
// //     }, 2000);
// //   };

// //   const validateCardDetails = (e) => {
// //     e.preventDefault();
// //     const cardNumber = e.target.cardNumber.value;
// //     const expiryDate = e.target.expiryDate.value;
// //     const cvv = e.target.cvv.value;

// //     if (!/^[0-9]{16}$/.test(cardNumber)) {
// //       alert("Invalid card number. Must be 16 digits.");
// //       return;
// //     }

// //     if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiryDate)) {
// //       alert("Invalid expiration date. Use MM/YY format.");
// //       return;
// //     }

// //     if (!/^[0-9]{3,4}$/.test(cvv)) {
// //       alert("Invalid CVV. Must be 3 or 4 digits.");
// //       return;
// //     }

// //     handleOrderPlacement();
// //   };

// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
// //       <h2 className="text-2xl font-bold mb-6 text-center">Payment Section</h2>
// //       <div className="mb-6">
// //         <label className="block mb-2 font-medium">Select Payment Method:</label>
// //         <select
// //           className="border p-3 w-full rounded-md"
// //           value={paymentMethod}
// //           onChange={(e) => setPaymentMethod(e.target.value)}
// //         >
// //           <option value="card">💳 Card Payment</option>
// //           <option value="paypal">🅿️ PayPal</option>
// //           <option value="gpay">🟢 Google Pay</option>
// //           <option value="cod">💵 Cash on Delivery</option>
// //         </select>
// //       </div>

// //       {paymentMethod === "card" && (
// //         <form onSubmit={validateCardDetails}>
// //           <label className="block mb-2 font-medium">Card Number</label>
// //           <input
// //             name="cardNumber"
// //             type="text"
// //             className="border p-3 w-full rounded-md mb-4"
// //             placeholder="1234 5678 9012 3456"
// //             required
// //           />
// //           <label className="block mb-2 font-medium">Expiration Date</label>
// //           <input
// //             name="expiryDate"
// //             type="text"
// //             className="border p-3 w-full rounded-md mb-4"
// //             placeholder="MM/YY"
// //             required
// //           />
// //           <label className="block mb-2 font-medium">CVV</label>
// //           <input
// //             name="cvv"
// //             type="text"
// //             className="border p-3 w-full rounded-md mb-6"
// //             placeholder="123"
// //             required
// //           />
// //           <button
// //             type="submit"
// //             className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 w-full rounded-md transition duration-300"
// //           >
// //             Pay Now
// //           </button>
// //         </form>
// //       )}

// //       {paymentMethod === "paypal" && (
// //         <button
// //           className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 w-full rounded-md transition duration-300"
// //           onClick={handleOrderPlacement}
// //         >
// //           Pay with PayPal
// //         </button>
// //       )}

// //       {paymentMethod === "gpay" && (
// //         <button
// //           className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 w-full rounded-md transition duration-300"
// //           onClick={handleOrderPlacement}
// //         >
// //           Pay with Google Pay
// //         </button>
// //       )}

// //       {paymentMethod === "cod" && (
// //         <button
// //           className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 w-full rounded-md transition duration-300"
// //           onClick={handleOrderPlacement}
// //         >
// //           Place Order (COD)
// //         </button>
// //       )}

// //       {paymentStatus && (
// //         <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
// //           {paymentStatus}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Payment;

// // // Let me know if you want me to add more features or refine the design! 🚀



// // import { useState } from "react";
// // import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

// // const Payment = () => {
// //   const [paymentMethod, setPaymentMethod] = useState("card");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [paymentStatus, setPaymentStatus] = useState("");

// //   const handleOrderPlacement = () => {
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       setIsLoading(false);
// //       setPaymentStatus("Payment successful! Thank you for your order.");
// //     }, 2000);
// //   };

// //   const validateCardDetails = (e) => {
// //     e.preventDefault();
// //     const cardNumber = e.target.cardNumber.value;
// //     const expiryDate = e.target.expiryDate.value;
// //     const cvv = e.target.cvv.value;

// //     if (!/^[0-9]{16}$/.test(cardNumber)) {
// //       alert("Invalid card number. Must be 16 digits.");
// //       return;
// //     }

// //     if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiryDate)) {
// //       alert("Invalid expiration date. Use MM/YY format.");
// //       return;
// //     }

// //     if (!/^[0-9]{3,4}$/.test(cvv)) {
// //       alert("Invalid CVV. Must be 3 or 4 digits.");
// //       return;
// //     }

// //     handleOrderPlacement();
// //   };

  

// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
// //       <h2 className="text-2xl font-bold mb-6 text-center">Payment Section</h2>
      
// //       <div className="mb-6">
// //         <label className="block mb-2 font-medium">Select Payment Method:</label>
// //         <select
// //           className="border p-3 w-full rounded-md"
// //           value={paymentMethod}
// //           onChange={(e) => setPaymentMethod(e.target.value)}
// //         >
// //           <option value="card">💳 Card Payment</option>
// //           <option value="upi">📲 UPI Payment</option>
// //           <option value="cod">💵 Cash on Delivery</option>
// //         </select>
// //       </div>

// //       {paymentMethod === "card" && (
// //         <form onSubmit={validateCardDetails}>
// //           <label className="block mb-2 font-medium">Card Number</label>
// //           <input
// //             name="cardNumber"
// //             type="text"
// //             className="border p-3 w-full rounded-md mb-4"
// //             placeholder="1234 5678 9012 3456"
// //             required
// //           />
// //           <label className="block mb-2 font-medium">Expiration Date</label>
// //           <input
// //             name="expiryDate"
// //             type="text"
// //             className="border p-3 w-full rounded-md mb-4"
// //             placeholder="MM/YY"
// //             required
// //           />
// //           <label className="block mb-2 font-medium">CVV</label>
// //           <input
// //             name="cvv"
// //             type="text"
// //             className="border p-3 w-full rounded-md mb-6"
// //             placeholder="123"
// //             required
// //           />
// //           <button
// //             type="submit"
// //             className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 w-full rounded-md transition duration-300"
// //           >
// //             Pay Now
// //           </button>
// //         </form>
// //       )}

// //       {paymentMethod === "upi" && (
// //         <form
// //           onSubmit={(e) => {
// //             e.preventDefault();
// //             handleOrderPlacement();
// //           }}
// //         >
// //           <label className="block mb-2 font-medium">UPI ID</label>
// //           <input
// //             name="upiId"
// //             type="text"
// //             className="border p-3 w-full rounded-md mb-6"
// //             placeholder="example@upi"
// //             required
// //           />
// //           <button
// //             type="submit"
// //             className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 w-full rounded-md transition duration-300"
// //           >
// //             Pay with UPI
// //           </button>
// //         </form>
// //       )}

// //       {paymentMethod === "cod" && (
// //         <button
// //           className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 w-full rounded-md transition duration-300"
// //           onClick={handleOrderPlacement}
// //         >
// //           Place Order (COD)
// //         </button>
// //       )}

// //       {paymentStatus && (
// //         <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
// //           {paymentStatus}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Payment;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

// const Payment = ({ userId }) => {
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [isLoading, setIsLoading] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState("");
//   const navigate = useNavigate();

//   const saveOrderToServer = (userId, orderData) => {
//     fetch(`http://localhost:5000/users/${userId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ orders: orderData }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to save order");
//         }
//         return response.json();
//       })
//       .then(() => {
//         setPaymentStatus("Order placed successfully!");
//         navigate("/orders");
//       })
//       .catch(() => {
//         setPaymentStatus("Payment failed: Failed to save order");
//       });
//   };

//   const handleOrderPlacement = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       const orderDetails = {
//         method: paymentMethod,
//         date: new Date().toLocaleString(),
//       };

//       saveOrderToServer(userId, orderDetails);
//     }, 2000);
//   };

//   const validateCardDetails = (e) => {
//     e.preventDefault();
//     const cardNumber = e.target.cardNumber.value;
//     const expiryDate = e.target.expiryDate.value;
//     const cvv = e.target.cvv.value;

//     if (!/^[0-9]{16}$/.test(cardNumber)) {
//       alert("Invalid card number. Must be 16 digits.");
//       return;
//     }

//     if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiryDate)) {
//       alert("Invalid expiration date. Use MM/YY format.");
//       return;
//     }

//     if (!/^[0-9]{3,4}$/.test(cvv)) {
//       alert("Invalid CVV. Must be 3 or 4 digits.");
//       return;
//     }

//     handleOrderPlacement();
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-6 text-center">Payment Section</h2>

//       <div className="mb-6">
//         <label className="block mb-2 font-medium">Select Payment Method:</label>
//         <select
//           className="border p-3 w-full rounded-md"
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//         >
//           <option value="card">💳 Card Payment</option>
//           <option value="upi">📲 UPI Payment</option>
//           <option value="cod">💵 Cash on Delivery</option>
//         </select>
//       </div>

//       {paymentMethod === "card" && (
//         <form onSubmit={validateCardDetails}>
//           <label className="block mb-2 font-medium">Card Number</label>
//           <input
//             name="cardNumber"
//             type="text"
//             className="border p-3 w-full rounded-md mb-4"
//             placeholder="1234 5678 9012 3456"
//             required
//           />
//           <label className="block mb-2 font-medium">Expiration Date</label>
//           <input
//             name="expiryDate"
//             type="text"
//             className="border p-3 w-full rounded-md mb-4"
//             placeholder="MM/YY"
//             required
//           />
//           <label className="block mb-2 font-medium">CVV</label>
//           <input
//             name="cvv"
//             type="text"
//             className="border p-3 w-full rounded-md mb-6"
//             placeholder="123"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 w-full rounded-md transition duration-300"
//           >
//             Pay Now
//           </button>
//         </form>
//       )}

//       {paymentMethod === "upi" && (
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleOrderPlacement();
//           }}
//         >
//           <label className="block mb-2 font-medium">UPI ID</label>
//           <input
//             name="upiId"
//             type="text"
//             className="border p-3 w-full rounded-md mb-6"
//             placeholder="example@upi"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 w-full rounded-md transition duration-300"
//           >
//             Pay with UPI
//           </button>
//         </form>
//       )}

//       {paymentMethod === "cod" && (
//         <button
//           className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 w-full rounded-md transition duration-300"
//           onClick={handleOrderPlacement}
//         >
//           Place Order (COD)
//         </button>
//       )}

//       {paymentStatus && (
//         <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
//           {paymentStatus}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Payment;
