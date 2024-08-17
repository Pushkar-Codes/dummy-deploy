"use client";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-[#212020] w-full h-auto px-2 flex flex-col justify-between">
      <div>
        <Image
          src="/logos/logo-png.png"
          alt="SNPI Logo"
          width={200}
          height={50}
        />
      </div>
      <div className="px-8 flex text-white text-[14px] mt-3 mb-8 ">
        <Link href="#" className="mr-4">
          About
        </Link>
        <Link href="#" className="mr-4">
          Other
        </Link>
        <Link href="/contact" className="mr-4">
          Contact
        </Link>
        <Link href="#">Portfolio</Link>
      </div>
      <div className="flex items-center px-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,1)"
          className="w-6 h-6"
          width="15"
          height="20"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"></path>
        </svg>
        <p className="text-white text-xs font-semibold ml-2">
          SN POWER & INFRA 2024
        </p>
      </div>
    </div>
  );
}
