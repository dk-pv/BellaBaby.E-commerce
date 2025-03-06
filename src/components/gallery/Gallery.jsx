// import React from "react";
// import image2 from'../../assets/galleryImages/image2.webp'
// import image3 from'../../assets/galleryImages/image3.webp'
// import image4 from'../../assets/galleryImages/image4.webp'
// import image5 from'../../assets/galleryImages/image5.webp'
// import image6 from'../../assets/galleryImages/image6.webp'
// import image1 from'../../assets/galleryImages/image1.webp'






// const Gallery = () => {
//   return (
//     <>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto flex flex-wrap">
//           <div className="flex flex-wrap md:-m-2 -m-1">
//             <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500" >
//               <div className="md:p-2 p-1 w-1/2">
//                 <img
//                   alt="gallery"
//                   className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500"
//                   src={image3}
//                 />
//               </div>
//               <div className="md:p-2 p-1 w-1/2">
//                 <img
//                   alt="gallery"
//                   className="w-full object-cover h-full object-center block
//                   hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500"
//                   src={image4}
//                 />
//               </div>
//               <div className="md:p-2 p-1 w-full">
//                 <img
//                   alt="gallery"
//                   className="w-full h-full object-cover object-center block
//                   hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500"
//                   src={image2}
//                 />
//               </div>
//             </div>
//             <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500">
//               <div className="md:p-2 p-1 w-full">
//                 <img
//                   alt="gallery"
//                   className="w-full h-full object-cover object-center block
//                   hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500"
//                   src={image5}
//                 />
//               </div>
//               <div className="md:p-2 p-1 w-1/2">
//                 <img
//                   alt="gallery"
//                   className="w-full object-cover h-full object-center block
//                   hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500"
//                   src={image6}
//                 />
//               </div>
//               <div className="md:p-2 p-1 w-1/2">
//                 <img
//                   alt="gallery"
//                   className="w-full object-cover h-full object-center block
//                   hover:scale-75 hover:translate-y-4 hover:skew-x-3 transition duration-500"
//                   src={image1}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Gallery;



// import React from "react";
// import image2 from '../../assets/galleryImages/image2.webp';
// import image3 from '../../assets/galleryImages/image3.webp';
// import image4 from '../../assets/galleryImages/image4.webp';
// import image5 from '../../assets/galleryImages/image5.webp';
// import image6 from '../../assets/galleryImages/image6.webp';
// import image1 from '../../assets/galleryImages/image1.webp';

// const Gallery = () => {
//   return (
//     <section className="text-gray-600 body-font bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] py-16">
//       <div className="container px-5 mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="relative group">
//             <img
//               alt="gallery"
//               className="w-full h-80 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-500"
//               src={image1}
//             />
//           </div>
//           <div className="grid gap-4">
//             <img
//               alt="gallery"
//               className="w-full h-40 object-cover rounded-lg shadow-lg transform hover:rotate-3 hover:scale-110 transition duration-500"
//               src={image2}
//             />
//             <img
//               alt="gallery"
//               className="w-full h-40 object-cover rounded-lg shadow-lg transform hover:-rotate-3 hover:scale-110 transition duration-500"
//               src={image3}
//             />
//           </div>
//           <div className="grid gap-4">
//             <img
//               alt="gallery"
//               className="w-full h-40 object-cover rounded-lg shadow-lg transform hover:translate-x-4 transition duration-500"
//               src={image4}
//             />
//             <img
//               alt="gallery"
//               className="w-full h-40 object-cover rounded-lg shadow-lg transform hover:translate-y-4 transition duration-500"
//               src={image5}
//             />
//           </div>
//           <div className="col-span-2">
//             <img
//               alt="gallery"
//               className="w-full h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
//               src={image6}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;



import React from "react";
import image2 from '../../assets/galleryImages/image2.webp';
import image3 from '../../assets/galleryImages/image3.webp';
import image4 from '../../assets/galleryImages/image4.webp';
import image5 from '../../assets/galleryImages/image5.webp';

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] py-16">
      <div className="container px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative group">
            <img
              alt="gallery"
              className="w-full h-72 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-500"
              src={image2}
            />
          </div>
          <div className="relative group">
            <img
              alt="gallery"
              className="w-full h-72 object-cover rounded-2xl shadow-xl transform group-hover:rotate-6 group-hover:scale-110 transition duration-500"
              src={image3}
            />
          </div>
          <div className="relative group">
            <img
              alt="gallery"
              className="w-full h-72 object-cover rounded-2xl shadow-xl transform group-hover:-rotate-6 group-hover:scale-110 transition duration-500"
              src={image4}
            />
          </div>
          <div className="col-span-2 lg:col-span-3">
            <img
              alt="gallery"
              className="w-full h-96 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition duration-500"
              src={image5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
