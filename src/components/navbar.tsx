import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="lg:px-16 lg:py-14 w-full h-20 flex items-center justify-between">
        <Image
          src="/logos/logo-png.png"
          alt="SNPI Logo"
          width={230}
          height={50}
        />
        <div className="hidden md:flex text-white">
          <div className="mr-52 space-x-14 ">
            <Link href="#">About</Link>
            <Link href="#">Other</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <button className="button1">
            Portfolio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(250,207,14,1)"
              width="20"
              height="20"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
            </svg>
          </button>
        </div>
        <button className="md:hidden text-white mr-8" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,1)"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"></path>
          </svg>
        </button>
      </div>
      <div
        className={`p-8 absolute top-20 left-0 w-full bg-[#141213] text-white flex flex-col items-center space-y-4 md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link href="#" onClick={toggleMenu}>
          About
        </Link>
        <Link href="#" onClick={toggleMenu}>
          Other
        </Link>
        <Link href="/contact" onClick={toggleMenu}>
          Contact
        </Link>
        <button className="button1" onClick={toggleMenu}>
          Portfolio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(250,207,14,1)"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
