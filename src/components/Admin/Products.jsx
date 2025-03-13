import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!isConfirmed) return;

    try {
      await fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" });
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) {
    return (
      <p className="text-gray-600 text-center text-xl">
        Loading product details...
      </p>
    );
  }

  return (
    <div className="p-10 bg-gradient-to-br from-blue-100 via-indigo-50 to-indigo-300 rounded-3xl shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
        >
          ← Back
        </button>
        <h2 className="text-5xl font-extrabold text-blue-800">Product List</h2>
        <Link to={"/adminpage/addproducts"}>
          <button
            onClick={() => navigate("/products/add")}
            className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
          >
            + Add Product
          </button>
        </Link>
      </div>

      {products.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-blue-300 rounded-xl shadow-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border p-4">ID</th>
                <th className="border p-4">Name</th>
                <th className="border p-4">Price</th>
                <th className="border p-4">Stock</th>
                <th className="border p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id || index}
                  className={`${
                    index % 2 === 0 ? "bg-indigo-50" : "bg-white"
                  } hover:bg-indigo-100 transition-transform transform hover:scale-[1.02]`}
                >
                  <td className="border p-4 text-center font-bold text-blue-700">
                    {product.id || "N/A"}
                  </td>
                  <td className="border p-4 text-center font-medium text-gray-800">
                    {product.name || "N/A"}
                  </td>
                  <td className="border p-4 text-center text-green-600">
                    ₹{product.price || "N/A"}
                  </td>
                  <td className="border p-4 text-center text-purple-600">
                    {product.stock || "N/A"}
                  </td>
                  <td className="border p-4 text-center">
                    <Link to={"/adminpage/editproducts"}>
                      <button
                        onClick={() => navigate(`/products/edit/${product.id}`)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 mr-2"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 text-center text-2xl">No products found.</p>
      )}
    </div>
  );
};

export default Products;
