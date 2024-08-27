// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Outfit } from "next/font/google";
import Loader from "@/components/loader";
import Heropage from "@/components/hero-main";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export default function Hero() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 0); // 2 seconds loader display

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <div className={`${outfit.className}`}>
      {showLoader && <Loader />}
      <Heropage />
    </div>
  );
}
