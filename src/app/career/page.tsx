"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import ServiceCard from "@/components/service-cards";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

export default function Career() {
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Section 1 */}
      <div className="relative bg-red-300 flex-1">
        <div className="relative w-full h-[600px] lg:h-[600px]">
          <Image
            src="/bg-images/career.jpg"
            alt="SNPI Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div
          className="absolute flex w-[100%] lg:w-[80%] flex-col px-2"
          style={{ top: "270px", left: "0", zIndex: 10 }}
        >
          <div className="relative">
            <p className="absolute text-white text-4xl font-semibold lg:text-7xl lg:top-[-20px] lg:px-24">
              Join Our Team of Experts at S N Power & Infra
            </p>
          </div>
          <div className="mt-32 lg:mt-40">
            <p className="text-white lg:text-2xl lg:px-24 text-justify">
              At S N Power & Infra, we are not just building structures; we are
              building careers. Whether you are a seasoned engineer, a skilled
              craftsman, or a passionate newcomer, S N Power & Infra offers a
              dynamic environment where your skills can grow, and your career
              can flourish.
            </p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="px-2 w-full max-h-auto">
        <div>
          <h2 className="text-[#212020] text-2xl px-2 py-10 lg:px-24 lg:py-14 lg:text-7xl font-semibold">
            Why Work With Us?
          </h2>
        </div>
        <hr className="w-[200px] ml-2 lg:w-[750px] border border-[#212020] lg:ml-24" />

        <div className="mb-5 mt-10">
          <p className="text-[#212020] text-justify px-2 lg:px-24 lg:py-14">
            At S N Power & Infra, you all be part of a team that values quality,
            safety, and sustainability. We are committed to providing the best
            civil services across residential, commercial, and industrial
            sectors. Our employees are given the tools, training, and
            opportunities they need to excel in their roles and contribute to
            projects that make a tangible difference in our communities.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center lg:px-24 lg:py-14">
          <Image
            className="max-h-auto w-full lg:w-full lg:ml-0 lg:max-h-screen rounded-sm"
            src="/main-images/consulting.jpg"
            alt="services"
            width={280}
            height={20}
          />
        </div>
        <div className="lg:px-24 lg:py-14">
          <Link
            href="https://www.linkedin.com/in/s-n-power-infra-1b1b2126a/"
            passHref
          >
            <button className="flex items-center px-6 py-4 ml-2 font-semibold border border-[#212020] rounded-sm mt-8 lg:mt-3 mb-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:underline">
              <span className="hover:underline">View Openings</span>
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(33,32,32,1)"
                width="20"
                height="20"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      {/* Section 3 */}
      <div className="lg:flex lg:px-24 ">
        <div className="px-2">
          <div>
            <h2 className="text-[#212020] text-2xl px-2 py-12 lg:text-7xl font-semibold">
              Career Opportunities
            </h2>
          </div>
          <hr className="w-[200px] ml-2 lg:w-[750px] border border-[#212020]" />
          <div className="mt-10 px-2">
            <p className="text-[#212020] text-justify">
              We are always looking for talented individuals to join our team.
              Explore our current openings and discover how you can contribute
              to our mission of delivering top-notch civil services and
              infrastructure solutions. This content highlights the company
              commitment to its employees and its mission, which should resonate
              well with potential candidates.
            </p>
          </div>
        </div>

        <div className="w-full px-2 max-h-auto mt-7">
          <div className="lg:flex lg:px-24 mt-10">
            <ServiceCard
              title="Perks We Offer:"
              descriptions={[
                "Flexible Work Hours",
                "Remote Work Opportunities",
                "Health and Wellness Benefits",
                "Learning and Development",
                "Competitive Salary",
                " Performance Bonuses",
                "Team Building Events & Socials",
              ]}
              linkText={""}
              linkUrl={""} //   linkText="Explore more"
              //   linkUrl="https://example.com"
            />
          </div>
        </div>
      </div>
      <div className="lg:px-24">
        <div className="">
          <Link
            href="https://www.linkedin.com/in/s-n-power-infra-1b1b2126a/"
            passHref
          >
            <button className="flex items-center px-6 lg:px-20 py-4 ml-2 font-semibold border border-[#212020] rounded-sm mt-14 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:underline">
              <span className="hover:underline">View Openings</span>
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(33,32,32,1)"
                width="20"
                height="20"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z"></path>
              </svg>
            </button>
          </Link>
        </div>

        <div className="">
          <a
            href="mailto: snpowerinfrainfo@gmail.com?subject=Resume%20Submission"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center px-6 lg:px-28 py-4 ml-2 font-semibold border border-[#212020] rounded-sm mt-7 mb-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:underline">
              <span className="hover:underline">Send Us Your Resume</span>
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#212020"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="px-2 py-14 w-full h-auto ">
        <div>
          <h2 className="text-xl mb-8 font-semibold">Serivces We Offer: </h2>
        </div>

        <div className="px-2 space-y-6">
          {/* Electrical card */}
          <div
            className="w-full h-28 border flex lg:px-24 lg:h-48"
            style={{
              transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 15px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
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
          </div>

          {/* Civil card */}
          <div
            className="w-full h-28 border flex lg:px-24 lg:h-48"
            style={{
              transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 15px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
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
          </div>

          {/* Rain water card */}
          <div
            className="w-full h-28 border flex lg:px-24 lg:h-48"
            style={{
              transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 15px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
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
          </div>

          {/* Technical report card */}
          <div
            className="w-full h-28 border flex lg:px-24 lg:h-48"
            style={{
              transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 15px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
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
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
