import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginback from "../../assets/loginImg.webp";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role:"user",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);

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
      setError(
        "Password must be at least 8 characters, include an uppercase letter and a number"
      );
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
        navigate("/login");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      } else {
        setError("Failed to register user");
      }
    } catch (error) {
      setError("Error connecting to server");
    }
  };

  return (
    <>
      <div className="relative">
        <img
          src={loginback}
          alt="signup background"
          className="object-cover w-full object-center h-[300px] mt-5"
        />
        <div className="w-full h-[300px] bg-black absolute top-0 opacity-50"></div>
        <h2 className="absolute top-[40%] left-[10%] text-white font-bold text-4xl md:text-6xl drop-shadow-lg">
          Sign Up
        </h2>
      </div>

      <div className="container px-5 py-10 mx-auto flex justify-center">
        <div className="mx-auto bg-gradient-to-br from-[#57B8FF] to-[#2D2F92] text-white rounded-2xl p-10 flex flex-col md:mt-0 shadow-2xl mt-8 w-full max-w-md">
          <h2 className="text-white text-4xl mb-6 font-extrabold title-font text-center">
            Create Your Account
          </h2>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          {success && (
            <div className="text-green-500 text-center mb-4">{success}</div>
          )}

          <div className="relative mb-6">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black rounded-lg border border-gray-300 py-2 px-4"
            />
          </div>

          <div className="relative mb-6">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black rounded-lg border border-gray-300 py-2 px-4"
            />
          </div>

          <div className="relative mb-6">
            <label htmlFor="password" className="leading-7 text-sm text-white">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-black rounded-lg border border-gray-300 py-2 px-4"
            />
            <button
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-sm text-[#FFD700] hover:text-[#FFB300]"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative mb-6">
            <label htmlFor="confirmPassword" className="leading-7 text-sm ">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-black rounded-lg border border-gray-300 py-2 px-4"
            />
            <button
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-sm text-[#FFD700] hover:text-[#FFB300]"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="text-white bg-[#e3417c] py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-[#c72c68] hover:scale-105"
          >
            Sign Up
          </button>

          <p className="text-sm text-white mt-4 text-center">
            Already have an account?
            <Link to="/login">
              <button className="cursor-pointer text-[#FFD700] hover:text-[#FFB300] font-bold ml-2">
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
