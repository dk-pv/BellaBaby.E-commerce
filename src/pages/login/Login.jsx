import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import loginback from "../../assets/loginImg.webp";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContext";

const Login = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
  
      if (user) {
        login(); // ✅ Call login function
        setError("");
        navigate("/");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError("Error connecting to server. Please try again later.");
    }
  };
  

  return (
    <Layout>
      <div className="relative">
        <img
          src={loginback}
          alt="login background"
          className="object-cover w-full object-center h-[300px] mt-5"
        />
        <div className="w-full h-[300px] bg-black absolute top-0 opacity-50"></div>
        <h2 className="absolute top-[40%] left-[10%] text-white font-bold text-4xl md:text-6xl drop-shadow-lg">
          {isLoggedIn ? "Welcome" : "Login"}
        </h2>
      </div>

      <div className="container px-5 py-10 mx-auto flex justify-center">
        <div className="mx-auto bg-gradient-to-br from-[#57B8FF] to-[#2D2F92] text-white rounded-2xl p-10 flex flex-col md:mt-0 shadow-2xl mt-8 w-full max-w-md">
          {isLoggedIn ? (
            <>
              <h2 className="text-white text-4xl mb-6 font-extrabold title-font text-center">
                You are logged in!
              </h2>
              <button
                onClick={logout}
                className="text-white bg-red-500 py-3 px-8 rounded-lg hover:bg-red-700 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <h2 className="text-white text-4xl mb-6 font-extrabold title-font text-center">
                Welcome Back
              </h2>

              {error && <div className="text-red-500 text-center mb-4">{error}</div>}

              <div className="relative mb-6">
                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-[#57B8FF] focus:ring-2 focus:ring-[#57B8FF] text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-6">
                <label htmlFor="password" className="leading-7 text-sm text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-[#57B8FF] focus:ring-2 focus:ring-[#57B8FF] text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
                />
              </div>
              <button
                onClick={handleLogin}
                className="text-white bg-[#e3417c] py-3 px-8 rounded-lg hover:bg-[#c72c68] transition-all"
              >
                Login
              </button>
              <p className="text-sm text-white mt-4 text-center">
                Don't have an account?
                <Link to="/signup">
                  <button className="cursor-pointer text-[#FFD700] hover:text-[#FFB300] font-bold ml-2">
                    Sign Up
                  </button>
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Login;
