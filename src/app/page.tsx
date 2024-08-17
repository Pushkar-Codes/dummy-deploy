"use client";

import { Outfit } from "@next/font/google";
import "./globals.css";
import Heropage from "@/components/hero-main";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export default function Hero() {
  return (
    <div className={`${outfit.className} ]`}>
      <Heropage />
    </div>
  );
}
