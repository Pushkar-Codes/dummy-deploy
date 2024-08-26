// // components/SimpleImageSlider.tsx
// import React from "react";
// import { useState, useEffect } from "react";

// const images: string[] = [
//   "/bg-images/electrical3.jpg",
//   "/bg-images/electrical2.jpg",
//   "/bg-images/electrical1.jpg",
//   // Add more image paths here
// ];

// const SimpleImageSlider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="">
//       <img
//         src={images[currentIndex]}
//         alt="Slide"
//         className="w-full h-auto"
//         style={{ height: "50vh" }} // Adjust height as needed
//       />
//     </div>
//   );
// };

// export default SimpleImageSlider;
