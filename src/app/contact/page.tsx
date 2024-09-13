"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "../globals.css";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

export default function Contact() {
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
      <div>
        <div className="bg-cover bg-center h-auto bg-[#212020]">
          <Navbar />
        </div>
        <div className="px-2 py-10 lg:px-40 lg:py-10">
          <h1 className="text-[#212020] text-4xl">
            Contact us, Feel free to connect with us. <br />
          </h1>
          <hr className="mt-6 mb-4" />
          <div>
            <p className="button2">Available 24x7</p>
          </div>
        </div>
        <div className="px-2 lg:px-40 lg:py-10">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:snpowerinfrainfo@gmail.com"
              className="text-blue-600 hover:underline"
            >
              snpowerinfrainfo@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+9195555494092"
              className="text-blue-600 hover:underline"
            >
              +91 9555494092
            </a>
          </p>
          <br />
          <hr className="mt-6 mb-4" />
          <div>
            <p>
              You can also ping us on our social media handle in case you have
              any query.
            </p>
            <div className="mt-5 w-full mb-2 lg:px-40">
              <h2 className="text-[#212020] text-2xl">
                Find us here... <br />
              </h2>
              <div className="mt-2 lg:py-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14179.0664687866!2d88.58754634376021!3d27.320491735183648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a51cd953e76f%3A0x72c7246a6c58b10f!2sUpper%20Tadong%2C%20Tadong%2C%20Gangtok%2C%20Sikkim%20737102!5e0!3m2!1sen!2sin!4v1724420028116!5m2!1sen!2sin"
                  width="100%"
                  height="400" // Adjusted height for better fit
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer is now flex-shrink-0 to ensure it stays at the bottom */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
