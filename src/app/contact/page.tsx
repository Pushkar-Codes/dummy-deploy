"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Contact() {
  return (
    <div>
      <div className="h-screen">
        <div className="bg-cover bg-center h-auto bg-[#212020] ">
          <Navbar />
        </div>
        <div className="px-2 py-10">
          <h1 className="text-[#212020] text-4xl">
            Contact us, Feel free to conntect with us. <br />
          </h1>
          <hr className="mt-6 mb-4" />
          <div>
            <p className="button2">Available 24x7</p>
          </div>
        </div>
        <div className="px-2">
          <p>Email: snpowerinfrainfo@gmail.com</p>
          <p>Phone: +91 9555494092</p>
          <br />
          <hr className="mt-6 mb-4" />
          <p>
            You can also ping us on our social media handle in case you have any
            query.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
