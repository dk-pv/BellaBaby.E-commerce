// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import { useAuth } from "../../components/AuthContext/AuthContext";
// import logo from "../navbar/logo.png";

// const Navbar = ({ cartCount }) => {
//   const { isLoggedIn, logout, user } = useAuth();

//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleChange = () => setIsOpen((prev) => !prev);
//   const toggleDropdown = () => setDropdownOpen((prev) => !prev);

//   return (
//     <header className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md sticky top-0 z-50 py-2">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         <Link to="/">
//           <img src={logo} alt="logo" className="w-20 h-auto" />
//         </Link>

//         <div className="hidden md:flex items-center space-x-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//         </div>

//         <nav className="hidden md:flex space-x-6">
//           <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
//           <Link to="/allproducts" className="text-white hover:text-yellow-300">All Products</Link>
//           <Link to="#" className="text-white hover:text-yellow-300">Accessories</Link>
//           <Link to="#" className="text-white hover:text-yellow-300">Clothes</Link>
//         </nav>

//         <div className="flex items-center gap-4">
//           {isLoggedIn ? (
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-700"
//               >
//                 {user?.name || "User"}
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
//                   <Link to="/orders" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>
//                     Order Details
//                   </Link>
//                   <button
//                     onClick={() => {
//                       logout();
//                       setDropdownOpen(false);
//                     }}
//                     className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to="/login">
//               <button className="bg-yellow-300 text-gray-800 py-1 px-3 rounded-lg hover:bg-yellow-400">
//                 Login
//               </button>
//             </Link>
//           )}

//           <Link to="/cart">
//             <button className="relative">
//               <FaShoppingCart size={24} className="text-white" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </Link>

//           <button className="md:hidden text-white" onClick={toggleChange}>
//             {isOpen ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-indigo-600 p-4 space-y-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//           <Link to="/" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Home
//           </Link>
//           <Link to="/allproducts" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             All Products
//           </Link>
//           <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Accessories
//           </Link>
//           <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Clothes
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import { useAuth } from "../../components/AuthContext/AuthContext";
// import logo from "../navbar/logo.png";

// const Navbar = ({ cartCount }) => {
//   const { isLoggedIn, logout, user } = useAuth();

//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleChange = () => setIsOpen((prev) => !prev);
//   const toggleDropdown = () => setDropdownOpen((prev) => !prev);

//   return (
//     <header className="bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg sticky top-0 z-50 py-3">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         <Link to="/">
//           <img src={logo} alt="logo" className="w-20 h-auto" />
//         </Link>

//         <div className="hidden md:flex items-center space-x-4 w-full max-w-lg">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//         </div>

//         <nav className="hidden md:flex space-x-6">
//           <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
//           <Link to="/allproducts" className="text-white hover:text-yellow-300">Shop</Link>
//           <Link to="#" className="text-white hover:text-yellow-300">New Arrivals</Link>
//           <Link to="#" className="text-white hover:text-yellow-300">Best Sellers</Link>
//           <Link to="#" className="text-white hover:text-yellow-300">Gifts</Link>
//           <Link to="#" className="text-white hover:text-yellow-300">Contact Us</Link>
//         </nav>

//         <div className="flex items-center gap-4">
//           {isLoggedIn ? (
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-700"
//               >
//                 {user?.name || "User"}
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
//                   <Link to="/orders" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>
//                     My Orders
//                   </Link>
//                   <button
//                     onClick={() => {
//                       logout();
//                       setDropdownOpen(false);
//                     }}
//                     className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to="/login">
//               <button className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full hover:bg-yellow-500">
//                 Login
//               </button>
//             </Link>
//           )}

//           <Link to="/cart">
//             <button className="relative">
//               <FaShoppingCart size={24} className="text-white" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </Link>

//           <button className="md:hidden text-white" onClick={toggleChange}>
//             {isOpen ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-cyan-600 p-4 space-y-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <Link to="/" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Home
//           </Link>
//           <Link to="/allproducts" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Shop
//           </Link>
//           <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             New Arrivals
//           </Link>
//           <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Best Sellers
//           </Link>
//           <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Gifts
//           </Link>
//           <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;















// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import { useAuth } from "../../components/AuthContext/AuthContext";
// import logo from "../navbar/logo.png";

// const Navbar = ({ cartCount }) => {
//   const { isLoggedIn, logout, user } = useAuth();

//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const toggleChange = () => setIsOpen((prev) => !prev);
//   const toggleDropdown = () => setDropdownOpen((prev) => !prev);

//   const handleSearch = () => {
//     alert(`Searching for: ${searchTerm}`);
//   };

//   return (
//     <header className="bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg sticky top-0 z-50 py-3">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         <Link to="/">
//           <img src={logo} alt="logo" className="w-20 h-auto" />
//         </Link>

//         <div className="hidden md:flex items-center space-x-2 w-full max-w-lg">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-500"
//           >
//             Search
//           </button>
//         </div>

//         <nav className="hidden md:flex space-x-6">
//           <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
//           <Link to="/allproducts" className="text-white hover:text-yellow-300">Shop</Link>
//           <Link to="#" className="text-white hover:text-yellow-300">New Arrivals</Link>
//           <Link to="#" className="text-white hover:text-yellow-300">Best Sellers</Link>
//           <Link to="#" className="text-white hover:text-yellow-300">Gifts</Link>
//           <Link to="#" className="text-white hover:text-yellow-300">Contact Us</Link>
//         </nav>

//         <div className="flex items-center gap-4">
//           {isLoggedIn ? (
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-700"
//               >
//                 {user?.name || "User"}
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
//                   <Link to="/orders" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>
//                     My Orders
//                   </Link>
//                   <button
//                     onClick={() => {
//                       logout();
//                       setDropdownOpen(false);
//                     }}
//                     className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to="/login">
//               <button className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full hover:bg-yellow-500">
//                 Login
//               </button>
//             </Link>
//           )}

//           <Link to="/cart">
//             <button className="relative">
//               <FaShoppingCart size={24} className="text-white" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </Link>

//           <button className="md:hidden text-white" onClick={toggleChange}>
//             {isOpen ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-cyan-600 p-4 space-y-4">
//           <div className="flex space-x-2">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             />
//             <button
//               onClick={handleSearch}
//               className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-500"
//             >
//               Search
//             </button>
//           </div>
//           <Link to="/" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Home
//           </Link>
//           <Link to="/allproducts" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Shop
//           </Link>
//           <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             New Arrivals
//           </Link>
//           <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Best Sellers
//           </Link>
//           <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Gifts
//           </Link>
//           <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


















// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import { useAuth } from "../../components/AuthContext/AuthContext";
// import logo from "../navbar/logo.png";
// import axios from "axios";

// const Navbar = ({ cartCount }) => {
//   const { isLoggedIn, logout, user } = useAuth();
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleChange = () => setIsOpen((prev) => !prev);
//   const toggleDropdown = () => setDropdownOpen((prev) => !prev);

//   const handleSearch = async () => {
//     if (searchQuery.trim() === "") return;

//     try {
//       const response = await axios.get("http://localhost:5000/products");
//       const products = response.data;
//       const matchedProduct = products.find(
//         (product) => product.name.toLowerCase() === searchQuery.toLowerCase()
//       );

//       if (matchedProduct) {
//         navigate(`/ProductDetails/${matchedProduct.id}`);
//         setSearchQuery("");
//       } else {
//         alert("Product not found!");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       alert("Failed to search products");
//     }
//   };

//   return (
//     <header className="bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg sticky top-0 z-50 py-3">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         <Link to="/">
//           <img src={logo} alt="logo" className="w-20 h-auto" />
//         </Link>

//         <div className="hidden md:flex items-center space-x-4 w-full max-w-lg">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-500"
//           >
//             Search
//           </button>
//         </div>

//         <div className="flex items-center gap-4">
//           {isLoggedIn ? (
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-700"
//               >
//                 {user?.name || "User"}
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
//                   <Link
//                     to="/orders"
//                     className="block px-4 py-2 hover:bg-gray-200"
//                     onClick={() => setDropdownOpen(false)}
//                   >
//                     My Orders
//                   </Link>
//                   <button
//                     onClick={() => {
//                       logout();
//                       setDropdownOpen(false);
//                     }}
//                     className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to="/login">
//               <button className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full hover:bg-yellow-500">
//                 Login
//               </button>
//             </Link>
//           )}

//           <Link to="/cart">
//             <button className="relative">
//               <FaShoppingCart size={24} className="text-white" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </Link>

//           <button className="md:hidden text-white" onClick={toggleChange}>
//             {isOpen ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-cyan-600 p-4 space-y-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <button
//             onClick={handleSearch}
//             className="w-full bg-yellow-400 text-gray-800 py-2 rounded-full hover:bg-yellow-500"
//           >
//             Search
//           </button>
//           <Link to="/" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Home
//           </Link>
//           <Link to="/allproducts" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
//             Shop
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../../components/AuthContext/AuthContext";
import logo from "../navbar/logo.png";
import axios from "axios";

const Navbar = ({ cartCount }) => {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleChange = () => setIsOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") return;

    try {
      const response = await axios.get("http://localhost:5000/products");
      const products = response.data;
      const matchedProduct = products.find(
        (product) => product.name.toLowerCase() === searchQuery.toLowerCase()
      );

      if (matchedProduct) {
        navigate(`/ProductDetails/${matchedProduct.id}`);
        setSearchQuery("");
      } else {
        alert("Product not found!");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Failed to search products");
    }
  };

  return (
    <header className="bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg sticky top-0 z-50 py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 h-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-4 w-full max-w-lg">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-500"
          >
            Search
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
          <Link to="/allproducts" className="text-white hover:text-yellow-300">Shop</Link>
          <Link to="#" className="text-white hover:text-yellow-300">New Arrivals</Link>
          <Link to="#" className="text-white hover:text-yellow-300">Best Sellers</Link>
          <Link to="#" className="text-white hover:text-yellow-300">Gifts</Link>
          <Link to="#" className="text-white hover:text-yellow-300">Contact Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-700"
              >
                {user?.name || "User"}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
                  <Link
                    to="/orders"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full hover:bg-yellow-500">
                Login
              </button>
            </Link>
          )}

          <Link to="/cart">
            <button className="relative">
              <FaShoppingCart size={24} className="text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>

          <button className="md:hidden text-white" onClick={toggleChange}>
            {isOpen ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cyan-600 p-4 space-y-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            onClick={handleSearch}
            className="w-full bg-yellow-400 text-gray-800 py-2 rounded-full hover:bg-yellow-500"
          >
            Search
          </button>
          <Link to="/" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
            Home
          </Link>
          <Link to="/allproducts" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
            Shop
          </Link>
          <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
            New Arrivals
          </Link>
          <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
            Best Sellers
          </Link>
          <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
            Gifts
          </Link>
          <Link to="#" className="block text-white hover:text-yellow-300" onClick={toggleChange}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;


