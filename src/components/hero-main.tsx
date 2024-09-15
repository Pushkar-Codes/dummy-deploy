"use client";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import Footer from "./footer";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Heropage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Show popup 1 second after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 1000); // 1 second delay

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Starts from top
        animate={{ opacity: 1, y: 0 }} // Moves to its final position
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-cover bg-center min-h-screen bg-[url('/bg-images/head-bg.png')]"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <Navbar />

          <div className="hero-page">
            <AnimatePresence>
              {isPopupVisible && (
                <motion.div
                  className="w-auto min-h-auto bg-[#141213] shadow-[0_4px_20px_rgba(0,0,0,0.8)] pb-10 lg:flex lg:justify-center items-center lg:flex-col lg:px-40 lg:py-10"
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
                      style={{
                        boxShadow: "0 2px 10px rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <p className="text-xl">
                        <span className="text-orange-600">11</span> Total
                        Projects
                      </p>
                    </div>

                    <div
                      className="w-[100%] h-[100px] bg-white rounded-md px-12 py-8 lg:w-[100%]"
                      style={{
                        boxShadow: "0 2px 10px rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <p className="text-xl">
                        <span className="text-orange-600">07</span> Completed
                      </p>
                    </div>

                    <div
                      className="w-[100%] h-[100px] bg-white rounded-md px-12 py-8 lg:w-[100%]"
                      style={{
                        boxShadow: "0 2px 10px rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      <p className="text-xl">
                        <span className="text-orange-600">04</span> On-going
                      </p>
                    </div>
                  </div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
                    onClick={() => setIsPopupVisible(false)}
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hero section starts from here ... */}
          <div className="lg:px-40 lg:py-10 px-2">
            <h1 className="text-white lg:text-8xl text-6xl leading-none mt-4">
              Welcome to SN Power <br /> & Infra, where <br /> passion lies in
              <br />
              perfection.
            </h1>
          </div>

          {/* Hero page 1 button */}
          <div className="lg:h-12 lg:px-40 lg:flex lg:space-x-8 h-auto mt-12 px-2 w-full">
            <button className="button2">Work With Us</button>
            <div className="lg:flex space-x-6 items-center">
              <Image
                className="lg:flex hidden"
                src="/snapshots/arrow.png"
                alt="SNPI Logo"
                width={150}
                height={20}
              />
              <div className="text-white text-xl lg:m-0 mt-6">
                <p>24x7 Available, reach out today</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero page 2 starts from here... */}
      <div className="w-full min-h-screen">
        <div className="min-w-full h-auto lg:h-screen">
          <div className="flex">
            <div className="px-8 py-12 w-[50%] lg:px-24 lg:py-24">
              <div className="text-[#141213] text-xs font-semibold lg:text-4xl">
                SN Power & Infra was founded to deliver expert consultancy,
                offering services in Power Distribution, Civil, and other
                sectors, ensuring industry-specific, top-notch solutions.
              </div>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-xs mt-5 lg:text-2xl lg:py-8"
              >
                We pride ourselves on our ability to provide tailored solutions
                that meet the unique needs of each client.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="text-xs mt-5 lg:text-2xl"
              >
                SN Power & Infra has quickly established itself as a trusted
                name in the industry.
              </motion.p>
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
                height={1920}
              />
            </div>
            <div className="px-8 py-12 w-[50%] lg:px-24 lg:py-24">
              <div className="text-[#141213] text-xs font-semibold lg:text-4xl">
                S N Power & Infra works together as a team to achieve
                extraordinary results. Working together seamlessly to tackle
                complex challenges.
              </div>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-xs mt-5 lg:text-2xl lg:py-8"
              >
                By fostering an environment of collaboration and creativity, we
                encourage innovative solutions and continuous improvement.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="text-xs mt-5 lg:text-2xl"
              >
                This synergy allows us to innovate and deliver solutions that
                surpass what any single individual could achieve, ensuring that
                our clients receive the best possible outcomes.
              </motion.p>
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
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-white text-xl px-2 py-12 text-justify lg:text-3xl "
          >
            At S. N. Power & Infra, our vision is to harness the power of
            collaboration to achieve results that surpass individual
            capabilities. By working as a unified team, we strive to push the
            boundaries of innovation and deliver extraordinary outcomes for our
            clients. Our commitment to teamwork enables us to tackle challenges
            with creativity and precision, setting new industry standards for
            excellence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-white text-xl px-2 py-12 text-justify lg:text-3xl "
          >
            Our goal is to provide the best possible solutions to our clients in
            the simplest way. We focus on understanding client needs and
            delivering tailored, efficient solutions that are easy to implement.
            Through transparency and reliability, we build long-term
            partnerships, ensuring that every project is executed with care and
            precision. Our vision is to be a trusted leader in our field,
            consistently exceeding client expectations.
          </motion.p>
        </div>
      </div>

      {/* Hero page 4 starts from here... */}

      <div className="bg-slate-200 w-full min-h-auto pb-14">
        <h2 className="text-[#141213] text-4xl px-2 py-12 lg:text-7xl font-semibold lg:px-24 lg:py-24">
          Services We Offer :
        </h2>

        <div className="px-2 space-y-6">
          {/* Electrical card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
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

          {/* Civil card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
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

          {/* Rain water card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
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
              <Link className="arraow-hover" href="/rainwater">
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

          {/* Technical report card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="w-full h-28 border flex lg:px-24 lg:h-48"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
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
              <h2 className="text-xl text-[#141213] lg:text-3xl">
                Technical Report
              </h2>
              <Link className="arraow-hover" href="/technicalreport">
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

      {/* Hero page 5 starts from here... */}

      <div className="w-full min-h-screen bg-white">
        <div className="lg:px-24 lg:py-24">
          <h2 className="text-[#141213] text-4xl px-2 py-12 lg:text-7xl font-semibold">
            Why Us ?
          </h2>
          <hr className="w-[200px] ml-2 lg:w-[350px] border border-[#141213]" />
          <div className="text-[#141213] text-xl px-2 py-12 text-justify lg:text-3xl ">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              S N Power & Infra has ability to manage complex projects, provide
              cost effective and environment friendly solutions to the clients
              by using the young dynamic team, innovative ideas, case studies,
              expert advices, research papers and Indian & International
              specifications and technology.
            </motion.p>
            <br />
            <br />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              S N Power & Infra excels in delivering sustainable energy
              solutions, combining technical expertise with innovative
              methodologies. Our team is dedicated to achieving excellence in
              every project by leveraging advanced technologies, strategic
              planning, and a deep understanding of both Indian and global
              standards.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Hero page 6 with Google map integration starts from here... */}
      <div className="px-24 py-4 mt-5 w-full  bg-[#212020]">
        <h2 className="text-white text-2xl">
          Find us here... <br />
        </h2>
        <div className="mt-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14179.0664687866!2d88.58754634376021!3d27.320491735183648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a51cd953e76f%3A0x72c7246a6c58b10f!2sUpper%20Tadong%2C%20Tadong%2C%20Gangtok%2C%20Sikkim%20737102!5e0!3m2!1sen!2sin!4v1724420028116!5m2!1sen!2sin"
            width="100%" // Makes the iframe responsive to the width of the parent container
            height="200" // Adjust height as needed
            style={{ border: 0 }}
            allowFullScreen={true} // No need for quotes or value here
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
