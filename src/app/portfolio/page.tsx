"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SimpleImageSlider from "@/components/image-silder1";
import SimpleImageSliders from "@/components/image-slider2";
import Loader from "@/components/loader";
import "../globals.css";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#212020]">
      <Navbar />
      {/* Section 1 */}
      <div className="lg:flex lg:px-24 lg:py-14 bg-white">
        <div className="bg-white lg:w-[50%]">
          <div className="px-4 py-4">
            <div>
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

        <div className="px-4 py-4 lg:w-[50%]">
          <div>
            <SimpleImageSlider />
          </div>
          <div className="h-auto bg-[#e5bc05] shadow-[0_1px_10px_rgba(250,207,14,0.8)] px-3 py-4">
            <h2 className="text-[#212020] text-2xl mt-3">
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

      {/* Rest of the sections here... */}
      {/* Example: Section 3 */}
      <div className="bg-white px-5 py-6 lg:px-72 lg:py-14">
        <h2 className="font-semibold">
          At SN Power & Infra, our actions speak louder than words, delivering
          results through innovative solutions, unmatched expertise, and a
          commitment to excellence in every project we undertake.
        </h2>
        <button
          className="button3 mt-5 flex items-center"
          onClick={() => window.open("/about", "_blank")}
        >
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

        <button
          className="button3 mt-5 flex items-center"
          onClick={() => window.open("/contact", "_blank")}
        >
          Contact us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(33,32,32,32,32,32,1)"
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
      <div className="w-full min-h-auto bg-[#141213] shadow-[0_4px_20px_rgba(0,0,0,0.8)] pb-10 lg:flex lg:justify-center items-center lg:flex-col lg:px-40 lg:py-10 ">
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
      <div className="bg-slate-100 py-10 lg:px-24 lg:py-24">
        <div className="px-5">
          <h2 className="text-xl font-semibold">Total Projects - 11:</h2>
          <p className="mt-3">
            SN Power & Infra has successfully initiated a total of 11 diverse
            projects, demonstrating our wide-ranging expertise across various
            domains. Each project reflects our commitment to delivering
            excellence in infrastructure and consultancy services.
          </p>
        </div>

        <div className="px-5 py-4">
          <h2 className="text-xl font-semibold">Completed Projects - 07:</h2>
          <p className="mt-3">
            With 7 projects successfully completed, SN Power & Infra has
            consistently met and exceeded client expectations. These completed
            projects stand as a testament to our ability to deliver on time,
            within budget, and with outstanding quality.
          </p>
        </div>

        <div className="px-5 py-4">
          <h2 className="text-xl font-semibold">Ongoing Projects - 04:</h2>
          <p className="mt-3">
            Currently, SN Power & Infra is actively working on 4 ongoing
            projects, driving forward with precision and dedication. These
            projects are in various stages of development, each poised to
            contribute significantly to our portfolio of successful ventures.
          </p>
        </div>
      </div>

      {/* Section 6 here... */}
      <div className="w-full min-h-auto bg-white pb-10 lg:flex lg:justify-center items-center lg:flex-col lg:px-40 lg:py-10">
        <div className="text-[#141213] text-xl font-semibold lg:text-4xl flex flex-col px-12 py-8 items-center">
          <h2>Signature Aspect</h2>
          <hr className="w-[230px] mt-3 lg:w-[350px] border-0 h-[2px] bg-[#141213] shadow-[0_10px_20px_rgba(0,0,0,0.8)]" />
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e5bc05"
            >
              <path d="M282.67-278h66.66v-203.33h-66.66V-278Zm328 0h66.66v-413.33h-66.66V-278Zm-164 0h66.66v-118.67h-66.66V-278Zm0-203.33h66.66V-548h-66.66v66.67ZM186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z" />
            </svg>
            <p className="mt-1 text-[18px]">Data Insights</p>
          </div>

          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e5bc05"
            >
              <path d="m622-288.67 48.67-48.66-155.34-156v-195.34h-66.66v222l173.33 178ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-82.33 31.5-155.33 31.5-73 85.83-127.34Q251.67-817 324.67-848.5T480-880q82.33 0 155.33 31.5 73 31.5 127.34 85.83Q817-708.33 848.5-635.33T880-480q0 82.33-31.5 155.33-31.5 73-85.83 127.34Q708.33-143 635.33-111.5T480-80Zm0-400Zm0 333.33q137.67 0 235.5-97.83 97.83-97.83 97.83-235.5 0-137.67-97.83-235.5-97.83-97.83-235.5-97.83-137.67 0-235.5 97.83-97.83 97.83-97.83 235.5 0 137.67 97.83 235.5 97.83 97.83 235.5 97.83Z" />
            </svg>
            <p className="mt-1 text-[18px]">On Time Report</p>
          </div>

          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e5bc05"
            >
              <path d="M434.67-227.33 295.33-366l47.34-47.33 92 90.66 178.66-178.66 47.34 48-226 226ZM186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34Z" />
            </svg>
            <p className="mt-1 text-[18px]">Proper Planning</p>
          </div>

          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e5bc05"
            >
              <path d="M480-260.67q66.67 0 122.17-36.5t80.5-98.16H277.33q25.67 61.66 80.84 98.16 55.16 36.5 121.83 36.5Zm-174.67-268 44.67-44 44 44 38-38-82-82.66-82.67 82.66 38 38Zm261.34 0 44-44 44.66 44 38-38-82.66-82.66-82 82.66 38 38ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 333.33q139.58 0 236.46-96.87 96.87-96.88 96.87-236.46t-96.87-236.46Q619.58-813.33 480-813.33t-236.46 96.87Q146.67-619.58 146.67-480t96.87 236.46q96.88 96.87 236.46 96.87Z" />
            </svg>
            <p className="mt-1 text-[18px]">Coustomer Satisfaction</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
