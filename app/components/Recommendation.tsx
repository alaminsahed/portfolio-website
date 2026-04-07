"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { slides } from "../../utils/data/recommendation";
import { cn } from "@/libs/utils";

const Recommendation = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="flex flex-col items-center py-12 bg-slate-50 dark:bg-[#080808]">
      <div className="flex flex-col items-center pb-4 border-b-2 border-slate-300 dark:border-slate-700 mb-8 w-full px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
            Recommendations
          </h2>
          <p className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400 mt-1 animate__animated animate__fadeIn" style={{ animationDelay: "0.2s" }}>
            Colleague voices: reflecting me through their eyes
          </p>
      </div>

      <div className="py-6 w-full flex flex-col justify-center items-center">
        <div id="gallery" className="relative w-full max-w-3xl" data-carousel="slide">
          <div className="relative overflow-hidden rounded-lg min-h-80">
            <div
              className="ease-in-out rounded-lg h-full w-full flex items-center justify-center"
              data-carousel-item
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-opacity duration-700 ease-in-out w-full",
                    activeSlide === index ? "block opacity-100" : "hidden opacity-0",
                  )}
                >
                  <div className="flex flex-col justify-center items-center px-8 py-4">
                    <Image
                      src={`/images/recommendation/${slide.logo}`}
                      height={80}
                      width={80}
                      className="border-2 border-slate-200 dark:border-slate-700 rounded-full object-cover"
                      alt={slide.name}
                    />
                    <div className="flex flex-col justify-center items-center mt-3">
                      <h3 className="text-base font-semibold font-sans text-slate-800 dark:text-slate-100">
                        {slide.name}
                      </h3>
                      <p className="text-xs font-sans text-slate-500 dark:text-slate-400 mt-0.5">
                        {slide.currentProfession.designation} ·{" "}
                        {slide.currentProfession.company}
                      </p>
                      {slide.status === "ex-colleague" && (
                        <p className="text-xs font-sans text-slate-400 dark:text-slate-500 mt-0.5">
                          Formerly: {slide.exProfession.designation} ·{" "}
                          {slide.exProfession.company}
                        </p>
                      )}
                    </div>
                    <blockquote className="mt-5 max-w-xl text-sm md:text-base font-sans leading-relaxed text-slate-700 dark:text-slate-200 text-center italic">
                      &ldquo;{slide.feedback}&rdquo;
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={cn(
              "absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none",
              activeSlide === 0 ? "hidden" : "block",
            )}
            data-carousel-prev
            disabled={activeSlide === 0}
            onClick={() => handleSlideChange(activeSlide - 1)}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/80 dark:bg-slate-700/80 group-hover:bg-slate-300 dark:group-hover:bg-slate-600 group-focus:ring-2 group-focus:ring-slate-400 transition-colors">
              <svg
                className="w-4 h-4 text-slate-700 dark:text-slate-200"
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
              "absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none",
              activeSlide === slides.length - 1 ? "hidden" : "block",
            )}
            data-carousel-next
            disabled={activeSlide === slides.length - 1}
            onClick={() => handleSlideChange(activeSlide + 1)}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/80 dark:bg-slate-700/80 group-hover:bg-slate-300 dark:group-hover:bg-slate-600 group-focus:ring-2 group-focus:ring-slate-400 transition-colors">
              <svg
                className="w-4 h-4 text-slate-700 dark:text-slate-200"
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

        <div className="flex gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors",
                activeSlide === index
                  ? "bg-slate-700 dark:bg-slate-300"
                  : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
