"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import SimpleImageSlider from "@/components/image-silder1";
import SimpleImageSliders from "@/components/image-slider2";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-[#212020]">
      <Navbar />
      {/* Section 1 here... */}
      <div className="bg-white">
        <div className="px-4 py-4">
          <div className="">
            <SimpleImageSlider />
          </div>
          <div className="h-auto bg-[rgb(229,188,5)] shadow-[0_1px_10px_rgba(250,207,14,0.8)] px-3 py-4">
            <h2 className="text-[#212020] text-2xl mt-3 ">
              Industry Leading Survey
            </h2>
            <p className="text-[#212020] mt-5">
              We are well-known for organizing surveys that set industry
              standards. Our expertise spans across various sectors, ensuring
              accurate assessments and data-driven insights.
            </p>
          </div>
        </div>
      </div>
      {/* Section 2 here... */}
      <div className="bg-white">
        <div className="px-4 py-4">
          <div className="">
            <SimpleImageSliders />
          </div>
          <div className="h-auto bg-[#212020] shadow-[0_1px_10px_rgba(0,0,0,0.8)] px-3 py-4">
            <h2 className="text-white text-2xl mt-3 ">
              Detailed Analysis & Strategies
            </h2>
            <p className="text-white mt-5">
              We provide comprehensive analysis and actionable strategies,
              helping you make informed decisions that drive success in your
              projects and initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 here... */}
      <div className="bg-white px-5 py-6">
        <h2 className="font-semibold">
          At SN Power & Infra, our actions speak louder than words, delivering
          results through innovative solutions, unmatched expertise, and a
          commitment to excellence in every project we undertake.
        </h2>
        <button className="button3 mt-5 flex items-center">
          More about us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(33,32,32,1)"
            width="20"
            height="20"
            className="ml-1"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
          </svg>
        </button>
      </div>

      {/* Section 4 here... */}
      <div className="w-full min-h-auto bg-[#141213] shadow-[0_4px_20px_rgba(0,0,0,0.8)] pb-10 lg:flex lg:justify-center items-center lg:flex-col lg:px-40 lg:py-10">
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
      </div>

      {/* Section 5 here... */}

      <Footer />
    </div>
  );
}
