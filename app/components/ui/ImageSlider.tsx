import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/libs/utils";

const ImageSlider = ({ project }: any) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (slideIndex: any) => {
    setActiveSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % project.images.length);
    }, 800);
    return () => clearInterval(interval);
  }, [activeSlide, project.images.length]);

  return (
    <div className="py-10 flex flex-col justify-center items-center mt-10">
      <div id="gallery" className="relative" data-carousel="slide">
        <div className="relative overflow-hidden md:h-96">
          <div
            className="duration-700 ease-in-out dark:bg-gray-700 shadow-2xl flex items-center justify-center w-full h-full"
            data-carousel-item
          >
            {project.images.map((image: any, index: any) => (
              <div
                key={index}
                className={`${
                  activeSlide === index ? "block" : "hidden"
                } transition-opacity duration-700 ease-in-out w-96 h-56`}
              >
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <Image
                    src={image}
                    height={500}
                    width={500}
                    className="border border-gray-200 dark:border-gray-700 object-cover rounded-lg shadow-xs"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={cn(
            "absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-hidden",
            activeSlide === 0 ? "hidden" : "block"
          )}
          data-carousel-prev
          disabled={activeSlide === 0}
          onClick={() => handleSlideChange(activeSlide - 1)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-hidden">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className={cn(
            "absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-hidden",
            activeSlide === project.images.length - 1 ? "hidden" : "block"
          )}
          data-carousel-next
          disabled={activeSlide === project.images.length - 1}
          onClick={() => handleSlideChange(activeSlide + 1)}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-hidden">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
