"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import "../globals.css";

export default function Career() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-cover bg-center h-auto bg-[#212020]">
        <Navbar />
      </div>
      {/* Section 1 */}
      <div className="">
        <div>
          <h1>Start Your Career With Us. Secure Your Future!</h1>
        </div>
        <div>
          <p>
            At SN Power & Infra, we believe in nurturing talent and fostering
            growth. Join our team to work on innovative projects that make a
            difference. With us, you will have the opportunity to develop your
            skills, collaborate with industry experts, and contribute to
            impactful solutions that shape the future. Secure your career with
            us and become part of a legacy of excellence.
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
