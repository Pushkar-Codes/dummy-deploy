"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "../globals.css";
import ServiceCard from "@/components/service-cards";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#212020]">
      <Navbar />
      {/* Section 1 here... */}
      <div className="w-full min-h-[40vh] bg-white lg:px-40 lg:py-10">
        <div className="w-full text-[#141213] text-xl font-semibold lg:text-4xl flex flex-col px-6 py-12">
          <div className="flex space-x-3 justify-center">
            <h2> About Us</h2>
          </div>
          <div className="flex justify-center">
            <hr className="w-[230px] mt-3 lg:w-[350px] border-0 h-[2px] bg-[#141213] shadow-[0_10px_20px_rgba(0,0,0,0.8)]" />
          </div>

          <div>
            <p className="text-xs mt-5 lg:text-2xl lg:py-8 font-normal text-justify">
              S N Power & Infra is a consultancy firm dedicated to delivering
              top-notch services in Power Distribution, Civil, and other
              sectors. We pride ourselves on providing clients with the best
              possible solutions in the most efficient manner.
            </p>
            <p className="text-xs mt-5 lg:text-2xl font-normal text-justify">
              Our dynamic team works collaboratively to achieve extraordinary
              results, tackling complex projects with cost-effective,
              environmentally friendly approaches. Leveraging innovative ideas,
              expert advice, and adherence to both Indian and international
              standards, S N Power & Infra is committed to excellence in every
              project.
            </p>
          </div>
        </div>
      </div>

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

      <div className="bg-white py-6 flex items-center justify-center ">
        <div className="px-16 lg:px-32 py-3 rounded-lg bg-[#212020] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          <h1 className="font-semibold">Know More </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="44px"
            fill="#facf0ecc"
          >
            <path d="M480-83 240-323l56-56 184 183 184-183 56 56L480-83Zm0-238L240-561l56-56 184 183 184-183 56 56-240 240Zm0-238L240-799l56-56 184 183 184-183 56 56-240 240Z" />
          </svg>
        </div>
      </div>

      {/* Section 2 here... */}

      <div className="w-full min-h-[50vh] bg-white lg:px-40 lg:py-10 lg:flex">
        <div className="w-full text-[#141213] text-xl font-semibold lg:text-4xl flex flex-col px-6 py-8">
          <div className="flex space-x-3 ">
            <h2> Our Mission</h2>
          </div>
          <div className="flex">
            <hr className="w-[230px] mt-3 lg:w-[350px] border-0 h-[2px] bg-[#141213] shadow-[0_10px_20px_rgba(0,0,0,0.8)]" />
          </div>

          <div>
            <p className="text-xs mt-5 lg:text-2xl lg:py-8 font-normal flex ">
              S N Power & Infra has a data bank of more than 1000 Technical
              Documents such as IEC (International Electro-technical Commission)
              Specifications, IS (Indian Standard) Specifications, Reports of
              Central Board of Irrigation and Power (CBIP), Reports of CEA
              (Central Electricity Authority), Manuals & References of
              Government of India, Annual Reports, Technical Specifications of
              various govt. & non-govt. bodies, Research Papers, Case Studies
              and References of worldwide superstructures & mega projects etc.
            </p>
          </div>
        </div>

        <div className="lg:flex lg:px-24 lg:py-18 mt-10 pb-10 flex items-center justify-center">
          <ServiceCard
            title="Our Field"
            descriptions={[
              "Electrical",
              "Civil",
              "Rain Water Harvesting",
              "Technical Report",
            ]}
            linkText={""}
            linkUrl={""} // linkText="Explore more"
            // linkUrl="https://example.com"
          />
        </div>
      </div>

      {/* Section 3 here... */}
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
      <div className="w-full min-h-auto bg-white pb-10 lg:px-40 lg:py-10">
        <div className="w-full text-[#141213] text-xl font-semibold lg:text-4xl flex flex-col px-6 py-8">
          <div className="flex space-x-3 justify-center">
            <h2> Meet the Founder</h2>
          </div>
          <div className="flex justify-center">
            <hr className="w-[230px] mt-3 lg:w-[350px] border-0 h-[2px] bg-[#141213] shadow-[0_10px_20px_rgba(0,0,0,0.8)]" />
          </div>
          <div className="font-normal text-justify mt-5 text-xs lg:text-2xl">
            <p>
              Mr. K N Mishra established S N Power & Infra after an illustrious
              35-year career at ITI Limited, a Public Sector Unit of the
              Government of India. His vast experience and dedication have been
              instrumental in shaping the vision and direction of SN Power &
              Infra.
              <br />
              <br />
              He founded S N Power & Infra with the vision of providing the best
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
