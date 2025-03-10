// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(loggedInStatus);
//   }, []);

//   const login = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem("isLoggedIn", "true");
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// // Custom hook for using auth context
// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export { AuthContext, AuthProvider, useAuth };



// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
//     const storedUser = localStorage.getItem("user");

//     setIsLoggedIn(loggedInStatus);
//     setUser(storedUser ? JSON.parse(storedUser) : null);
//   }, []);

//   const login = (userData) => {
//     setIsLoggedIn(true);
//     setUser(userData);
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUser(null);
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook for using auth context
// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export { AuthContext, AuthProvider, useAuth };



import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    const storedUser = localStorage.getItem("user");

    setIsLoggedIn(loggedInStatus);

    try {
      setUser(storedUser ? JSON.parse(storedUser) : null);
    } catch (error) {
      console.error("Invalid JSON in localStorage for 'user':", error);
      setUser(null);
      localStorage.removeItem("user");
    }
  }, []);

  const login = (userData, token) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(userData));
    if (token) {
      localStorage.setItem("token", token);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const isAdmin = user?.role?.toLowerCase() === "admin";

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };
