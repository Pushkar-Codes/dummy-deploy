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
          <div>
            <p>
              You can also ping us on our social media handle in case you have
              any query.
            </p>
          </div>
          {/* Google Map here... */}
          <div className="px-2 mt-5 w-full mb-2 h-auto">
            <h2 className="text-[#212020] text-2xl">
              Find us here... <br />
            </h2>
            <div className="mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14179.0664687866!2d88.58754634376021!3d27.320491735183648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a51cd953e76f%3A0x72c7246a6c58b10f!2sUpper%20Tadong%2C%20Tadong%2C%20Gangtok%2C%20Sikkim%20737102!5e0!3m2!1sen!2sin!4v1724420028116!5m2!1sen!2sin"
                width="100%" // Makes the iframe responsive to the width of the parent container
                height="200" // Adjust height as needed
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
