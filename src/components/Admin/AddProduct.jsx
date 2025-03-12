// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     id: "",
//     name: "",
//     price: "",
//     category: "",
//     image: "",
//     description: "",
//     stocks: ""
//   });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(product),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add product");
//       }

//       navigate("/products");
//     } catch (error) {
//       console.error("Error adding product:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-10 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300 rounded-3xl shadow-2xl">
//       <div className="flex items-center justify-between mb-8">
//         <button
//           onClick={() => navigate(-2)}
//           className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
//         >
//           ← Back
//         </button>
//         <h2 className="text-5xl font-extrabold text-purple-700 text-center">Add New Product</h2>
//         <div></div>
//       </div>
//       <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
//         {[
//           { label: "Product ID", name: "id", type: "text" },
//           { label: "Product Name", name: "name", type: "text" },
//           { label: "Price", name: "price", type: "number" },
//           { label: "Category", name: "category", type: "text" },
//           { label: "Image URL", name: "image", type: "text" },
//           { label: "Description", name: "description", type: "textarea" },
//           { label: "Stocks", name: "stocks", type: "number" },
//         ].map((field, index) => (
//           <div className="mb-6" key={index}>
//             <label className="block text-lg font-medium text-gray-700">{field.label}</label>
//             {field.type === "textarea" ? (
//               <textarea
//                 name={field.name}
//                 value={product[field.name]}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             ) : (
//               <input
//                 type={field.type}
//                 name={field.name}
//                 value={product[field.name]}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             )}
//           </div>
//         ))}

//         <div className="flex justify-between items-center">
//           <button
//             type="button"
//             onClick={() => navigate(-1)}
//             className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             disabled={loading}
//             className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
//           >
//             {loading ? "Adding..." : "Add Product"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    images: [],
    description: "",
    stocks: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setProduct({ ...product, images: [...product.images, ...imageUrls] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      navigate("/products");
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300 rounded-3xl shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate(-2)}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
        >
          ← Back
        </button>
        <h2 className="text-5xl font-extrabold text-purple-700 text-center">Add New Product</h2>
        <div></div>
      </div>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        {[
          { label: "Product ID", name: "id", type: "text" },
          { label: "Product Name", name: "name", type: "text" },
          { label: "Price", name: "price", type: "number" },
          { label: "Category", name: "category", type: "text" },
        ].map((field, index) => (
          <div className="mb-6" key={index}>
            <label className="block text-lg font-medium text-gray-700">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={product[field.name]}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        ))}

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Product Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex flex-wrap mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg mr-4 mb-4 shadow"
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Stocks</label>
          <input
            type="number"
            name="stocks"
            value={product.stocks}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
