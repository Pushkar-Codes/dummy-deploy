"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import Link from "next/link";
import "../globals.css";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#212020]">
      <Navbar />
      {/* Section 1 here... */}
      <div className="w-full min-h-[50vh] bg-white lg:px-40 lg:py-10">
        <div className="w-full text-[#141213] text-xl font-semibold lg:text-4xl flex flex-col px-6 py-12">
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#facf0ecc"
            >
              <path
                d="M120-160v-520l
              160 120 200-280 200 160h160v520H120Zm200-120 160-220 280 218v-318H652L496-725 298-447l-98-73v144l120 96Z"
              />
            </svg>
            <h2> About Us</h2>
          </div>

          <div>
            <p className="text-xs mt-5 lg:text-2xl lg:py-8 font-normal text-justify">
              SN Power & Infra, established in 2023, is a proprietorship
              consultancy firm dedicated to delivering top-notch services in
              Power Distribution, Civil, and other sectors.
            </p>
            <p className="text-xs mt-5 lg:text-2xl font-normal text-justify">
              We pride ourselves on providing clients with the best possible
              solutions in the most efficient manner. Our dynamic team works
              collaboratively to achieve extraordinary results, tackling complex
              projects with cost-effective, environmentally friendly approaches.
              Leveraging innovative ideas, expert advice, and adherence to both
              Indian and international standards, SN Power & Infra is committed
              to excellence in every project.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 here... */}

      <div className="w-full min-h-[50vh] bg-white lg:px-40 lg:py-10">
        <div className="w-full text-[#141213] text-xl font-semibold lg:text-4xl flex flex-col px-6 py-8">
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#facf0ecc"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z" />
            </svg>
            <h2> Our Mission</h2>
          </div>

          <div>
            <p className="text-xs mt-5 lg:text-2xl lg:py-8 font-normal text-justify">
              SN Power & Infra has a data bank of more than 1000 Technical
              Documents such as IEC (International Electro-technical Commission)
              Specifications, IS (Indian Standard) Specifications, Reports of
              Central Board of Irrigation and Power (CBIP), Reports of CEA
              (Central Electricity Authority), Manuals & References of
              Government of India, Annual Reports, Technical Specifications of
              various govt. & non-govt. bodies, Research Papers, Case Studies
              and References of worldwide superstructures & mega projects etc.
              This data bank boosts the knowledge of our team that reflects in
              the project during execution resulting in affordable, reliable and
              high quality of work.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 here... */}
      <div className="w-full min-h-auto border border-b-2 bg-[#141213] pb-10 lg:flex lg:justify-center items-center lg:flex-col lg:px-40 lg:py-10">
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

      {/* Section 4 here...  Company details are hidden here...*/}
      {/* <div className="w-full max-h-[100vh] bg-white lg:flex lg:justify-center lg:items-center lg:px-40 lg:py-10 ">
        <div className="text-[#141213] text-xl font-semibold lg:text-4xl flex flex-col px-12 py-8 items-center">
          <h2>Company Details</h2>
          <hr className="w-[200px] mt-3 lg:w-[350px] border-0 h-[2px] bg-[#141213]" />
          <div className="font-normal text-xs mt-6">
            <p>
              <span className="inline-block w-[150px]">Name of the Firm</span>
              <span className="inline-block w-[10px] text-right">:</span> SN
              Power & Infra
            </p>
            <br />
            <p>
              <span className="inline-block w-[150px]">
                Name of the Founder
              </span>
              <span className="inline-block w-[10px] text-right">:</span> Mr. KN
              Mishra
            </p>
            <br />
            <p>
              <span className="inline-block w-[150px]">Firm Structure</span>
              <span className="inline-block w-[10px] text-right">:</span>{" "}
              Proprietorship
            </p>
            <br />
            <p className="mb-6">
              <span className="inline-block w-[150px]">Principal Business</span>
              <span className="inline-block w-[10px] text-right">:</span>{" "}
              Consultancy Services
            </p>

            <div className="flex items-center w-full">
              <Link
                className="text-xl text-[#141213] flex items-center hover:underline"
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-4 transition-colors duration-200 ease-in-out hover:fill-orange-600 ml-2"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#facf0ecc"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Section 5 here... */}
      <div className="w-full min-h-auto border border-b-2 bg-white pb-10 lg:px-40 lg:py-10">
        <div className="w-full text-[#141213] text-xl font-semibold lg:text-4xl flex flex-col px-6 py-8">
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#facf0ecc"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            <h2> Meet the Founder</h2>
          </div>
          <div className="font-normal text-justify mt-5 text-xs lg:text-2xl">
            <p>
              Mr. KN Mishra had founded SN Power & Infra in the year of 2023.
              Before SN Power & Infra, Mr. Mishra had contributed his service
              upto 35 years in ITI Limited; a Public Sector Unit of Government
              of India.
              <br />
              <br />
              He founded SN Power & Infra with the vision of providing the best
              possible solution to the client in the easiest way as possible to
              contribute more and more in the sector of consultancy services.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
