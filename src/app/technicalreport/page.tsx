"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceCard from "@/components/service-cards";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

export default function TechnicalReport() {
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
      {/* Page1 here... */}
      <div className="flex-grow relative">
        <div className="relative w-full h-[600px] lg:h-[600px]">
          <Image
            src="/bg-images/reports-services.jpg"
            alt="SNPI Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div
          className="absolute px-2 flex w-[100%] lg:w-[80%] flex-col mt-20 "
          style={{ top: "270px", left: "0" }}
        >
          <div className="relative">
            <p className="absolute text-white text-4xl font-semibold lg:text-7xl lg:top-[-20px] lg:px-24">
              Technical Report At SN Power & Infra
            </p>
          </div>
          <div className="mt-32 lg:mt-40">
            <p className="text-white  lg:text-2xl lg:px-24">
              We specialize in creating detailed technical reports, conducting
              feasibility studies, and providing in-depth analysis for informed
              decision-making.
            </p>
          </div>
        </div>

        {/* Page 2 here... */}

        <div className="py-10 bg-white px-2 text-[#141213] text-justify lg:text-2xl lg:flex lg:justify-center lg:items-center lg:px-24 lg:py-24">
          <p>
            The technical report services offered at SN Power & Infra are
            tailored to meet diverse needs, from residential to industrial
            projects. Our expert team ensures top-notch quality, accuracy, and
            clarity in every report, utilizing advanced technology and best
            practices to deliver comprehensive analyses that exceed expectations
            and stand the test of time.
            <br />
            <br />
            At SN Power & Infra, we prioritize customer satisfaction by offering
            comprehensive technical report services that cover detailed
            analysis, feasibility studies, and project documentation.
            <br />
            <br />
            Our commitment to excellence, combined with our extensive industry
            experience, allows us to provide customized solutions that deliver
            precise analysis, support informed decision-making, and ensure the
            success of projects across various sectors.
          </p>

          <div className="lg:flex lg:px-24 lg:py-18 mt-10">
            <ServiceCard
              title="Services"
              descriptions={[
                "Need Assessment Report",
                "Impact Assessment Report",
                "Waste Management Plan",
                "Rain Water Harvesting for Ground Water Recharge",
                "Environment, Health & Safety Management Plan",
                "Method Statement of Power Distribution Network",
              ]}
              linkText={""}
              linkUrl={""} //   linkText="Explore more"
              //   linkUrl="https://example.com"
            />
          </div>
        </div>

        <div className="w-full h-auto bg-slate-200 space-y-6 py-12">
          <h2 className="text-[#141213] text-4xl px-2 py-12 lg:text-4xl font-semibold lg:px-24 lg:py-8">
            Other Services We Offer :
          </h2>
          {/* Page 3 here... */}
          <motion.div
            className="w-full h-28 border flex lg:px-24 lg:h-48"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="w-[40%] h-full">
              <Image
                className="ml-auto h-full lg:w-full lg:ml-0 lg:max-h-screen"
                src="/main-images/electric-small.png"
                alt="services"
                width={280}
                height={20}
              />
            </div>
            <div
              className="bg-slate-100 w-full flex justify-between items-center px-5"
              style={{ boxShadow: "0 8px 10px rgba(0, 0, 0, 0.25)" }}
            >
              <h2 className="text-xl text-[#141213] lg:text-3xl">Electrical</h2>
              <div>
                <Link className="arraow-hover" href="/electrical">
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
          </motion.div>

          {/* Rain water card */}
          <motion.div
            className="w-full h-28 border flex lg:px-24 lg:h-48"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
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
              <h2 className="text-xl text-[#141213] lg:text-3xl">Civil</h2>
              <div>
                <Link className="arraow-hover" href="/civil">
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
          </motion.div>

          {/* Technical report card */}
          <motion.div
            className="w-full h-28 border flex lg:px-24 lg:h-48"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
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
              <h2 className="text-xl text-[#141213] lg:text-3xl">
                Rain Water Harvesting
              </h2>
              <Link
                className="arraow-hover"
                href="/rainwater
              "
              >
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
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
