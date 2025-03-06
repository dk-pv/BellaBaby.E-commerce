// import React from "react";
// import Layout from "../../components/layout/Layout";
// import loginback from "../../assets/loginImg.webp";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   return (
//     <Layout>
//       <div className="relative">
//         <img
//           src={loginback}
//           alt=""
//           className="object-cover w-full object-center h-[200px] mt-5"
//         />
//         <div className="w-full h-[200px] bg-black absolute top-0 opacity-[.4]"></div>
//         <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
//           Sign Up
//         </h2>
//       </div>

//       <div className="container px-5 py-10 mx-auto flex ">
//         <div className="mx-auto bg-[#57B8FF] text-white rounded-lg p-8 flex flex-col  md:mt-0 shadow-md mt-8 w-[500px]">
//           <h2 className="text-black text-3xl mb-5 font-bold title-font">
//             Sign Up
//           </h2>

//           <div className="relative mb-4">
//             <label for="name" className="leading-7 text-sm text-black">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>

//           <div className="relative mb-4">
//             <label for="email" className="leading-7 text-sm text-black">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//           <div className="relative mb-4">
//             <label for="message" className="leading-7 text-sm text-black">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//           <button className="text-white bg-[#2D2F92] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//             Login
//           </button>
//           <p className="text-xs text-black mt-3">
//             Do you have an account ?
//             <Link to="/login">
//               <button className="cursor-pointer hover:text-[#e3417c] font-bold">
//                 Sign Up
//               </button>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Signup;




// import React from "react";
// import Layout from "../../components/layout/Layout";
// import loginback from "../../assets/loginImg.webp";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   return (
//     <Layout>
//       <div className="relative">
//         <img
//           src={loginback}
//           alt="signup background"
//           className="object-cover w-full object-center h-[300px] mt-5"
//         />
//         <div className="w-full h-[300px] bg-black absolute top-0 opacity-50"></div>
//         <h2 className="absolute top-[40%] left-[10%] text-white font-bold text-4xl md:text-6xl drop-shadow-lg">
//           Sign Up
//         </h2>
//       </div>

//       <div className="container px-5 py-10 mx-auto flex justify-center">
//         <div className="mx-auto bg-gradient-to-br from-[#57B8FF] to-[#2D2F92] text-white rounded-2xl p-10 flex flex-col md:mt-0 shadow-2xl mt-8 w-full max-w-md">
//           <h2 className="text-white text-4xl mb-6 font-extrabold title-font text-center">
//             Create Your Account
//           </h2>

//           <div className="relative mb-6">
//             <label htmlFor="name" className="leading-7 text-sm text-white">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               className="w-full bg-white rounded-lg border border-gray-300 focus:border-[#57B8FF] focus:ring-2 focus:ring-[#57B8FF] text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
//             />
//           </div>

//           <div className="relative mb-6">
//             <label htmlFor="email" className="leading-7 text-sm text-white">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               className="w-full bg-white rounded-lg border border-gray-300 focus:border-[#57B8FF] focus:ring-2 focus:ring-[#57B8FF] text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
//             />
//           </div>
//           <div className="relative mb-6">
//             <label htmlFor="password" className="leading-7 text-sm text-white">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               className="w-full bg-white rounded-lg border border-gray-300 focus:border-[#57B8FF] focus:ring-2 focus:ring-[#57B8FF] text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
//             />
//           </div>
//           <button className="text-white bg-[#e3417c] border-0 py-3 px-8 focus:outline-none hover:bg-[#c72c68] hover:scale-105 transform transition-all duration-200 rounded-lg text-lg shadow-lg">
//             Sign Up
//           </button>
//           <p className="text-sm text-white mt-4 text-center">
//             Already have an account?
//             <Link to="/login">
//               <button className="cursor-pointer text-[#FFD700] hover:text-[#FFB300] font-bold ml-2">
//                 Login
//               </button>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import loginback from "../../assets/loginImg.webp";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!validateEmail(formData.email)) {
      setError("Invalid email format");
      return;
    }

    if (!validatePassword(formData.password)) {
      setError("Password must be at least 8 characters, include an uppercase letter and a number");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("You have registered successfully! Redirecting to login...");
        navigate("/login")
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      } else {
        setError("Failed to register user");
      }
    } catch (error) {
      setError("Error connecting to server");
    }
  };

  return (
    <Layout>
      <div className="relative">
        <img src={loginback} alt="signup background" className="object-cover w-full object-center h-[300px] mt-5" />
        <div className="w-full h-[300px] bg-black absolute top-0 opacity-50"></div>
        <h2 className="absolute top-[40%] left-[10%] text-white font-bold text-4xl md:text-6xl drop-shadow-lg">Sign Up</h2>
      </div>

      <div className="container px-5 py-10 mx-auto flex justify-center">
        <div className="mx-auto bg-gradient-to-br from-[#57B8FF] to-[#2D2F92] text-white rounded-2xl p-10 flex flex-col md:mt-0 shadow-2xl mt-8 w-full max-w-md">
          <h2 className="text-white text-4xl mb-6 font-extrabold title-font text-center">Create Your Account</h2>

          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          {success && <div className="text-green-500 text-center mb-4">{success}</div>}

          <div className="relative mb-6">
            <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black rounded-lg border border-gray-300 py-2 px-4" />
          </div>

          <div className="relative mb-6">
            <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black rounded-lg border border-gray-300 py-2 px-4" />
          </div>

          <div className="relative mb-6">
            <label htmlFor="password" className="leading-7 text-sm text-white">Password</label>
            <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="w-full bg-black rounded-lg border border-gray-300 py-2 px-4" />
            <button onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-9 text-sm text-[#FFD700] hover:text-[#FFB300]">{showPassword ? "Hide" : "Show"}</button>
          </div>

          <div className="relative mb-6">
            <label htmlFor="confirmPassword" className="leading-7 text-sm ">Confirm Password</label>
            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full bg-black rounded-lg border border-gray-300 py-2 px-4" />
            <button onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute right-3 top-9 text-sm text-[#FFD700] hover:text-[#FFB300]">{showConfirmPassword ? "Hide" : "Show"}</button>
          </div>

          <button onClick={handleSubmit} className="text-white bg-[#e3417c] py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-[#c72c68] hover:scale-105">Sign Up</button>

          <p className="text-sm text-white mt-4 text-center">
            Already have an account?
            <Link to="/login">
              <button className="cursor-pointer text-[#FFD700] hover:text-[#FFB300] font-bold ml-2">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
