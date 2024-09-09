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
          <div className="h-auto bg-[#e5bc05] px-3 py-4">
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
          <div className="h-auto bg-[#212020] px-3 py-4">
            <h2 className="text-white text-2xl mt-3 ">
              Detailed Analysis & Strategy
            </h2>
            <p className="text-white mt-5">
              We provide comprehensive analysis and actionable strategies,
              helping you make informed decisions that drive success in your
              projects and initiatives.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
