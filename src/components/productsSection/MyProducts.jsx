

// import React from "react";
// import { FaHatCowboy, FaTshirt, FaSoap, FaAppleAlt } from "react-icons/fa";
// import { GiToyMallet, GiBabyBottle, GiBabyFace } from "react-icons/gi";

// const Products = () => {
//   return (
//     <section className="text-gray-600 body-font bg-gradient-to-br from-[#FFDEE9] via-[#FFF5E4] to-[#B5FFFC] py-16">
//       <div className="container px-5 mx-auto">
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-[#2D2F92]">
//           Discover Our Baby Essentials
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           <div className="group bg-white py-8 px-10 rounded-2xl shadow-2xl hover:bg-[#FF9A9E] hover:text-white transition duration-500 flex flex-col items-center">
//             <FaHatCowboy size={50} className="group-hover:scale-125 transition-transform" />
//             <p className="mt-6 text-2xl font-semibold">Accessories</p>
//           </div>
//           <div className="group bg-white py-8 px-10 rounded-2xl shadow-2xl hover:bg-[#57B8FF] hover:text-white transition duration-500 flex flex-col items-center">
//             <GiToyMallet size={50} className="group-hover:rotate-12 transition-transform" />
//             <p className="mt-6 text-2xl font-semibold">Toys</p>
//           </div>
//           <div className="group bg-white py-8 px-10 rounded-2xl shadow-2xl hover:bg-[#FFDEE9] hover:text-[#2D2F92] transition duration-500 flex flex-col items-center">
//             <FaSoap size={50} className="group-hover:scale-110 transition-transform" />
//             <p className="mt-6 text-2xl font-semibold">Skincare</p>
//           </div>
//           <div className="group bg-white py-8 px-10 rounded-2xl shadow-2xl hover:bg-[#B5FFFC] hover:text-[#2D2F92] transition duration-500 flex flex-col items-center">
//             <FaTshirt size={50} className="group-hover:-rotate-6 transition-transform" />
//             <p className="mt-6 text-2xl font-semibold">Clothes</p>
//           </div>
//           <div className="group bg-white py-8 px-10 rounded-2xl shadow-2xl hover:bg-[#FFCCCB] hover:text-[#2D2F92] transition duration-500 flex flex-col items-center">
//             <FaAppleAlt size={50} className="group-hover:scale-125 transition-transform" />
//             <p className="mt-6 text-2xl font-semibold">Baby Foods</p>
//           </div>
//           <div className="group bg-white py-8 px-10 rounded-2xl shadow-2xl hover:bg-[#FF9A9E] hover:text-white transition duration-500 flex flex-col items-center">
//             <GiBabyFace size={50} className="group-hover:rotate-12 transition-transform" />
//             <p className="mt-6 text-2xl font-semibold">Diapers</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;



import React from "react";
import { FaHatCowboy, FaTshirt, FaSoap, FaAppleAlt } from "react-icons/fa";
import { GiToyMallet, GiBabyBottle, GiBabyFace } from "react-icons/gi";

const Products = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-br from-[#FFDEE9] via-[#FFF5E4] to-[#B5FFFC] py-16">
      <div className="container px-5 mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-[#2D2F92]">
          Explore Our Baby Essentials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[ 
            { icon: <FaHatCowboy size={60} />, label: 'Accessories', bg: 'bg-[#FF9A9E]' },
            { icon: <GiToyMallet size={60} />, label: 'Toys', bg: 'bg-[#57B8FF]' },
            { icon: <FaSoap size={60} />, label: 'Skincare', bg: 'bg-[#FFDEE9]' },
            { icon: <FaTshirt size={60} />, label: 'Clothes', bg: 'bg-[#B5FFFC]' },
            { icon: <FaAppleAlt size={60} />, label: 'Baby Foods', bg: 'bg-[#FFCCCB]' },
            { icon: <GiBabyFace size={60} />, label: 'Diapers', bg: 'bg-[#FF9A9E]' },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bg} group py-10 px-12 rounded-3xl shadow-3xl hover:shadow-[#2D2F92]/50 hover:scale-105 transition-all duration-500 flex flex-col items-center`}
            >
              <div className="group-hover:scale-125 transform transition-transform">
                {item.icon}
              </div>
              <p className="mt-6 text-3xl font-bold">{item.label}</p>
              <p className="text-lg mt-3 text-center">
                Browse our collection of high-quality {item.label.toLowerCase()} carefully crafted for your little ones.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
