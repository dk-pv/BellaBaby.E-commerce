// import React from "react";
// import Background from "./home1.webp";

// const HeroSection = () => {
//   return (
//     <>
//       <div className="relative">
//         <div className="">
//           <img
//             src={Background}
//             alt="homeImg"
//             className="w-[1300px]  object-cover object-center mx-auto"
//           />
//         </div>
//         <div className="absolute top-[10%] ml-0 md:ml-50 ">
//           <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text  text-[#57B8FF]">
//             Bella<span className="text-[#2D2F92]">Baby.</span>
//           </h1>
//           <p className=" lg:text-2xl ml-[0px] lg:ml-[50px] font-semibold leading-10" >
//             "Discover gentle, safe, and lovingly crafted <br /> products for your little
//             one's every moment."
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;



import React from "react";
import Background from "./home1.webp";

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div className="">
          <img
            src={Background}
            alt="homeImg"
            className="w-full h-[700px] object-cover object-center mx-auto brightness-75"
          />
        </div>
        <div className="absolute top-[10%] left-[5%] p-4">
          <h1 
            className="text-1xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#57B8FF]  animate-fade-in shadow-2xl">
            Bella<span className="text-[#2D2F92]">Baby.</span>
          </h1>
          <p 
            className="lg:text-2xl ml-[0px] lg:ml-[50px] font-semibold leading-10 text-white drop-shadow-lg animate-bounce">
            "Wrap your little one in comfort and care. <br /> Explore our handcrafted, safe, and delightful baby essentials."
          </p>
        </div>

        {/* Notes on the image */}
        <div className="absolute top-[35%] left-[10%] p-3 bg-[#FFB6C1] bg-opacity-80 rounded-xl shadow-xl">
          <p className="text-sm text-gray-800 font-medium">🍼 Hypoallergenic Baby Wipes — Gentle on skin, tough on mess.</p>
        </div>
        <div className="absolute top-[40%] left-[70%] p-3 bg-[#FFD700] bg-opacity-80 rounded-xl shadow-xl">
          <p className="text-sm text-gray-800 font-medium">👶 Organic Baby Oils — Nourish and soothe delicate skin.</p>
        </div>
        <div className="absolute bottom-[20%] left-[30%] p-3 bg-[#98FB98] bg-opacity-80 rounded-xl shadow-xl">
          <p className="text-sm text-gray-800 font-medium">🎀 Hand-Knitted Blankets — Soft, warm, and crafted with love.</p>
        </div>
        <div className="absolute bottom-[5%] right-[10%] p-3 bg-[#ADD8E6] bg-opacity-80 rounded-xl shadow-xl">
          <p className="text-sm text-gray-800 font-medium">🚼 Bamboo Diapers — Eco-friendly, ultra-absorbent, and comfy.</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;