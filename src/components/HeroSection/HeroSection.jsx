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
      </div>
    </>
  );
};

export default HeroSection;