import Image from "next/image";
import { useState } from "react";

export default function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative  w-4/6 md:w-5/6 lg:w-full ">
      <div className="slider relative overflow-hidden">
        <div
          className="slider-track flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto object-cover block mt-0"
            />
          ))}
        </div>
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg text-gray-800 w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-white/20 transition"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg text-gray-800 w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-white/20 transition"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
