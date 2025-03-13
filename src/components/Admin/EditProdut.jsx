import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    imageUrl: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      // Show success alert
      alert("Product Updated Successfully!");
      
      // Immediately navigate back to products page
      navigate(-1);
      
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Failed to update product. Please try again.");
    }
  };

  if (loading) {
    return (
      <p className="text-gray-600 text-center text-xl">
        Loading product details...
      </p>
    );
  }

  if (error) {
    return (
      <div className="p-10 bg-gradient-to-br from-red-100 via-red-50 to-red-200 rounded-3xl shadow-2xl">
        <p className="text-red-600 text-center text-xl">{error}</p>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
          >
            ← Go Back
          </button>
        </div>
      </div>
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
        <h2 className="text-5xl font-extrabold text-blue-800">Edit Product</h2>
        <div className="w-32"></div> {/* Empty div to balance the header */}
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Price (₹)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="stock"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4 md:col-span-2">
            <label
              htmlFor="imageUrl"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={product.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {product.imageUrl && (
              <div className="mt-2">
                <img
                  src={product.imageUrl}
                  alt="Product preview"
                  className="h-32 w-32 object-cover rounded-lg border border-gray-300"
                  onError={(e) => {
                    e.target.src = "/placeholder-image.jpg";
                    e.target.alt = "Image not available";
                  }}
                />
              </div>
            )}
          </div>

          <div className="mb-4 md:col-span-2">
            <label
              htmlFor="description"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gray-500 text-white rounded-xl shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-110"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;