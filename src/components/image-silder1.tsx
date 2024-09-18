import React, { useState, useEffect } from "react";

const images: string[] = [
  "/portfolio-images/port-image5.jpeg",
  "/portfolio-images/port-image6.jpeg",
  "/portfolio-images/port-image7.jpeg",
];

const SimpleImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full" style={{ height: "50vh" }}>
      <div
        className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="inline-block w-full h-auto object-cover"
            style={{ height: "50vh" }}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleImageSlider;
