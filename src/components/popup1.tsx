"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../globals.css";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(true);

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-slate-200">
      {/* Popup Overlay with Framer Motion */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="w-full min-h-auto bg-[#141213] shadow-[0_4px_20px_rgba(0,0,0,0.8)] pb-10 lg:flex lg:justify-center items-center lg:flex-col lg:px-40 lg:py-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="text-white text-xl font-semibold lg:text-4xl flex flex-col px-12 py-8 items-center">
              <h2>Project Status</h2>
              <hr className="w-[200px] mt-3 lg:w-[350px] border-0 h-[2px] bg-white" />
            </div>

            <div className="px-12 flex flex-col space-y-6 lg:items-center lg:flex-row lg:space-y-0 lg:space-x-8">
              <div
                className="w-[100%] h-[100px] bg-white rounded-md px-12 py-8 lg:w-[100%]"
                style={{ boxShadow: "0 2px 10px rgba(255, 255, 255, 0.5)" }}
              >
                <p className="text-xl">
                  <span className="text-orange-600">11</span> Total Projects
                </p>
              </div>

              <div
                className="w-[100%] h-[100px] bg-white rounded-md px-12 py-8 lg:w-[100%]"
                style={{ boxShadow: "0 2px 10px rgba(255, 255, 255, 0.5)" }}
              >
                <p className="text-xl">
                  <span className="text-orange-600">07</span> Completed
                </p>
              </div>

              <div
                className="w-[100%] h-[100px] bg-white rounded-md px-12 py-8 lg:w-[100%]"
                style={{ boxShadow: "0 2px 10px rgba(255, 255, 255, 0.5)" }}
              >
                <p className="text-xl">
                  <span className="text-orange-600">04</span> On-going
                </p>
              </div>
            </div>

            <div className="flex justify-center item-centre">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
