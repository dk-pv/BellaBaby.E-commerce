// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import Layout from "../layout/Layout";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/products/${id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return <div className="text-center mt-10">Loading product details...</div>;
//   }

//   return (
//     <Layout>
//       <div className="container mx-auto p-6">
//         <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-96 object-contain mb-6 rounded-lg"
//           />
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-2xl text-blue-700 font-semibold mb-4">₹{product.price}</p>
//           <p className="text-gray-600 mb-6">{product.description}</p>
//           <Link to="/allproducts" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5">
//             Back to Products
//           </Link>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ProductDetails;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

const ProductDetails = ({ AddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10 text-2xl font-semibold">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10 text-2xl font-semibold text-red-500">Product not found</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain mb-6 rounded-lg border border-gray-200"
          />
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
          <p className="text-3xl text-blue-700 font-semibold mb-4">₹{product.price}</p>
          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => AddToCart(product)}
              className="flex items-center space-x-2 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg px-5 py-2.5 transition-transform transform hover:scale-105"
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>

            <Link 
              to="/allproducts" 
              className="flex items-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5 transition-transform transform hover:scale-105"
            >
              <FaArrowLeft />
              <span>Back to Products</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;

