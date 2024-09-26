// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "../globals.css";

// export default function Popup() {
//   const [showPopup, setShowPopup] = useState(false);

//   // Function to close the popup
//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 1000); // Show popup after 1 second

//     return () => clearTimeout(timer); // Cleanup timer
//   }, []);

//   return (
//     <div className="relative h-screen flex items-center justify-center bg-slate-200">
//       {/* Popup Overlay with Framer Motion */}
//       <AnimatePresence>
//         {showPopup && (
//           <motion.div
//             className="w-80 bg-white shadow-lg rounded-lg p-4"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h2 className="text-lg font-semibold">Project Status</h2>
//               <button
//                 className="text-orange-600 text-xl font-bold"
//                 onClick={closePopup}
//               >
//                 X
//               </button>
//             </div>
//             <p className="text-black text-center">11 Total Projects</p>
//             <p className="text-black text-center">07 Completed</p>
//             <p className="text-black text-center">04 Ongoing</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
