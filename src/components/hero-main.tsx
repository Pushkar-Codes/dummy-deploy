"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import ServiceCard from "./service-cards";
import Footer from "./footer";

export default function Heropage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-cover bg-center min-h-screen bg-[url('/bg-images/head-bg.png')] ">
        <Navbar />
        {/* Hero section starts from here ... */}
        <div className="lg:px-40 lg:py-10 px-2">
          <h1 className="text-white lg:text-8xl text-6xl leading-none mt-4">
            Welcome to SN Power <br /> & Infra, where <br /> passion lies in
            <br />
            perfection.
          </h1>
        </div>
        {/* Hero page 1 button */}

        <div className=" lg:h-12 lg:px-40 lg:flex lg:space-x-8 h-auto mt-12 px-2 w-full">
          <button className="button2">Work With Us</button>
          <div className=" lg:flex space-x-6 items-center">
            <Image
              className="lg:flex hidden"
              src="/snapshots/arrow.png"
              alt="SNPI Logo"
              width={150}
              height={20}
            />
            <div className="text-white text-xl lg:m-0 mt-6">
              <p>24x7 Availbale, reach out today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero page 2 starts from here... */}
      <div className="w-full min-h-screen ">
        <div className="min-w-full h-auto lg:h-screen">
          <div className="flex">
            <div className="px-8 py-12 w-[50%] lg:px-24 lg:py-24">
              <h2 className="text-[#141213] text-xs font-semibold lg:text-4xl">
                S N Power & Infra was incorporated in 2023. S N Power & Infra is
                a proprietorship consultancy firm. We provide consultancy
                services in Power Distribution, Civil & Other Sectors.
              </h2>
              <p className="text-xs mt-5 lg:text-2xl lg:py-8">
                We pride ourselves on our ability to provide tailored solutions
                that meet the unique needs of each client.
              </p>

              <p className="text-xs mt-5 lg:text-2xl">
                S N Power & Infra has quickly established itself as a trusted
                name in the industry.
              </p>
            </div>

            <div className="w-[50%] flex">
              <Image
                className="ml-auto h-full lg:w-full lg:ml-0 lg:max-h-screen"
                src="/main-images/tower-big.jpg"
                alt="SNPI Logo"
                width={1280}
                height={1920}
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="min-w-full h-auto lg:h-screen">
          <div className="flex">
            <div className="w-[50%] flex">
              <Image
                className="ml-auto h-full lg:w-full lg:ml-0 lg:max-h-screen"
                src="/main-images/civil1.jpg"
                alt="SNPI Logo"
                width={1280}
                height={1920} // Set to the original height of your image
                // Sets the quality to maximum
              />
            </div>
            <div className="px-8 py-12 w-[50%] lg:px-24 lg:py-24">
              <h2 className="text-[#141213] text-xs font-semibold lg:text-4xl">
                S N Power & Infra works together as a team to achieve
                extraordinary results. Working together seamlessly to tackle
                complex challenges.
              </h2>
              <p className="text-xs mt-5 lg:text-2xl lg:py-8">
                By fostering an environment of collaboration and creativity, we
                encourage innovative solutions and continuous improvement.
              </p>

              <p className="text-xs mt-5 lg:text-2xl">
                This synergy allows us to innovate and deliver solutions that
                surpass what any single individual could achieve, ensuring that
                our clients receive the best possible outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero page 3 starts from here... */}
      <div className="w-full min-h-screen bg-[#27525B]">
        <div className="lg:px-24 lg:py-24">
          <h2 className="text-white text-4xl px-2 py-12 lg:text-7xl font-semibold">
            Our Vision
          </h2>
          <hr className="w-[200px] ml-2 lg:w-[350px]" />
          <p className="text-white text-xl px-2 py-12 text-justify lg:text-3xl ">
            At S. N. Power & Infra, our vision is to harness the power of
            collaboration to achieve results that surpass individual
            capabilities. By working as a unified team, we strive to push the
            boundaries of innovation and deliver extraordinary outcomes for our
            clients. Our commitment to teamwork enables us to tackle challenges
            with creativity and precision, setting new industry standards for
            excellence.
            <br />
            <br />
            Our goal is to provide the best possible solutions to our clients in
            the simplest way. We focus on understanding client needs and
            delivering tailored, efficient solutions that are easy to implement.
            Through transparency and reliability, we build long-term
            partnerships, ensuring that every project is executed with care and
            precision. Our vision is to be a trusted leader in our field,
            consistently exceeding client expectations.
          </p>
        </div>
      </div>

      {/* Hero page 4 starts from here... */}

      <div className="bg-cover bg-center min-h-auto bg-[url('/bg-images/service-bg.png')]">
        <h2 className="text-[#141213] text-4xl px-6 py-12 lg:text-7xl font-semibold lg:px-24 lg:py-24">
          Our Services
        </h2>
        <div className="lg:flex lg:px-24 lg:py-18">
          <ServiceCard
            title="Electrical"
            descriptions={[
              "Survey & Mapping of Electrical Distribution Network",
              "Bid Process Management",
              "Preparation of AutoCAD Drawings",
              "Execution Plan Development",
              "Preparation of Monthly Progress Reports",
              // "Supply Chain Management",
              // "Examination of Technical Specifications",
              // "Project Supervision and Management",
            ]}
            linkText="Explore more"
            linkUrl="https://example.com"
          />

          <br />
          <br />

          <ServiceCard
            title="Civil"
            descriptions={[
              "Architectural and Structural Drawings",
              "Project Execution App",
              "Infrastructure Mapping",
              "Execution Plan",
              "Progress Reporting",
              // "Supply Chain Management",
              // "Work Progress Review",
              // "Project Closure",
              // "Staff Management",
              // "Project Supervision",
            ]}
            linkText="Explore more"
            linkUrl="https://example.com"
          />

          <br />
          <br />

          <ServiceCard
            title="Others"
            descriptions={[
              "Preparation of Disaster Management Plan",
              "Rain Water Harvesting Management",
              "Designing of interior & exterior lighting system",
              "Digitization of office record",
            ]}
            linkText=""
            linkUrl=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
