"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceCard from "@/components/service-cards";
import Image from "next/image";
import Link from "next/link";

export default function Electrical() {
  return (
    <div className="flex flex-col min-h-screen bg-[#212020]">
      <Navbar />
      {/* Page1 here... */}
      <div className="flex-grow relative">
        <div className="relative w-full h-[500px]">
          <Image
            src="/bg-images/electrical-service.jpg"
            alt="SNPI Logo"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute  px-2 " style={{ top: "290px", left: "0" }}>
            <p className="text-white text-2xl font-semibold">
              Electrical services we offer at SN Power & Infra
            </p>
          </div>
          <div className="absolute px-2 " style={{ top: "370px", left: "0" }}>
            <p className="text-white">
              Our expertise spans residential, commercial, and industrial
              sectors, ensuring top-notch solutions for lighting, wiring, and
              electrical systems.
            </p>
          </div>
        </div>

        {/* Page 2 here... */}

        {/* Each item starts here */}
        {/* <div className="flex w-full px-2 my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(250,207,14,0.8)"
              width={24}
              height={24}
              className="flex-shrink-0 mr-3"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M17 2V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM9 16V18H7V16H9ZM9 13V15H7V13H9ZM9 10V12H7V10H9ZM15 4H9V6H15V4Z"></path>
            </svg>
            <div className="text-[#141213]">
              <h2 className="font-semibold inline">Field Survey:</h2>{" "}
              <p className="">
                Conducting on-site assessments to gather essential data for
                project planning and execution.
              </p>
            </div>
          </div> */}
        {/* Repeat similar blocks for each item */}

        <div className="py-10 bg-white px-2 text-[#141213]">
          <p>
            The electrical services offered at SN Power & Infra are tailored to
            meet diverse needs, from residential to industrial projects. Our
            expert team ensures top-notch quality, safety, and efficiency in
            every task, utilizing advanced technology and best practices to
            deliver reliable solutions that exceed expectations and stand the
            test of time.
            <br />
            <br />
            At SN Power & Infra, we prioritize customer satisfaction by offering
            comprehensive electrical services that cover installation,
            maintenance, and emergency support.
            <br />
            <br />
            Our commitment to excellence, combined with our extensive industry
            experience, allows us to provide customized solutions that enhance
            performance, reduce downtime, and ensure the longevity of electrical
            systems across various sectors.​
          </p>

          <div className="lg:flex lg:px-24 lg:py-18 mt-10">
            <ServiceCard
              title="Services"
              descriptions={[
                "Field Survey",
                "Design Engineering",
                "Detailed Project Report (DPR)",
                "Project Planning",
                "Quality Assurance",
                "Asset Mapping Project Closure",
                "Supply Chain Management",
              ]}
              linkText={""}
              linkUrl={""} //   linkText="Explore more"
              //   linkUrl="https://example.com"
            />
          </div>
        </div>

        {/* Page 3 here... */}

        <div className="px-2 space-y-6 py-10 bg-white  ">
          {/* Civil card */}

          <div className="w-f h-28 border flex ">
            <div className="w-[40%] h-full">
              <Image
                className="ml-auto h-full lg:w-full lg:ml-0 lg:max-h-screen"
                src="/main-images/civil-small.png"
                alt="services"
                width={280}
                height={20}
              />
            </div>
            <div
              className="bg-slate-100 w-full flex justify-between items-center px-5"
              style={{ boxShadow: "0 8px 10px rgba(0, 0, 0, 0.25)" }}
            >
              <h2 className="text-xl text-[#141213]">Civil</h2>
              <div>
                <Link href="/electrical">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(250,207,14,0.8)"
                    height={50}
                    width={30}
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Rain water card */}
          <div className="w-f h-28 border flex ">
            <div className="w-[40%] h-full">
              <Image
                className="ml-auto h-full lg:w-full lg:ml-0 lg:max-h-screen"
                src="/main-images/rain-small.png"
                alt="services"
                width={280}
                height={20}
              />
            </div>
            <div
              className="bg-slate-100 w-full flex justify-between items-center px-5"
              style={{ boxShadow: "0 8px 10px rgba(0, 0, 0, 0.25)" }}
            >
              <h2 className="text-xl text-[#141213]">Rain Water Harversting</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(250,207,14,0.8)"
                height={50}
                width={30}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </div>

          {/* Technical report card */}

          <div className="w-f h-28 border flex ">
            <div className="w-[40%] h-full">
              <Image
                className="ml-auto h-full lg:w-full lg:ml-0 lg:max-h-screen"
                src="/main-images/report-small.png"
                alt="services"
                width={280}
                height={20}
              />
            </div>
            <div
              className="bg-slate-100 w-full flex justify-between items-center px-5"
              style={{ boxShadow: "0 8px 10px rgba(0, 0, 0, 0.25)" }}
            >
              <h2 className="text-xl text-[#141213]">Technical Report</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(250,207,14,0.8)"
                height={50}
                width={30}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
