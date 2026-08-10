"use client";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { contactLists } from "../../utils/data/headerContactList";
import Image from "next/image";
import { useState } from "react";

library.add(fas, fab);

const HeaderMain = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative h-svh bg-black" id="header">
      <Image
        src="/images/background.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center text-white animate__animated animate__fadeInDown animate__fast">
          <h5 className="text-2xl tracking-widest p-3 font-light uppercase opacity-80">
            Hello
          </h5>
          <h2 className="md:text-5xl tracking-tight p-3 font-bold text-center">
            I am Md. Al-Amin Sahed
          </h2>
          <h3 className="md:text-2xl tracking-wide p-3">
            <Typewriter
              options={{
                strings: [
                  "Senior Software Engineer",
                  "React.js & Next.js Developer",
                  "TypeScript Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 60,
              }}
            />
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center gap-1 animate__animated animate__fadeIn" style={{ animationDelay: "0.3s" }}>
          {contactLists.map((item, index) => {
            const isPhone = item.name === "Phone";
            const phoneNumber = isPhone ? item.link.replace("tel:", "") : "";

            if (isPhone) {
              return (
                <div key={index} className="relative group">
                  <Link
                    href={item.link}
                    className="text-xl bg-gray-500 text-white border rounded-full transition duration-150 ease-linear m-1 p-1 hover:bg-white hover:text-black flex items-center"
                    aria-label={item.name}
                  >
                    <FontAwesomeIcon
                      icon={item.icon as IconProp}
                      className="text-xl text-center bg-black text-white hover:text-black hover:bg-white p-1 rounded-full"
                    />
                  </Link>

                  {/* Tooltip */}
                  <div className="pointer-events-none group-hover:pointer-events-auto absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
                    <div className="flex items-center gap-2 bg-gray-900/95 backdrop-blur-xs text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
                      <FontAwesomeIcon icon={["fas", "phone"] as IconProp} className="text-rose-400 text-[10px]" />
                      <span className="tracking-wide">{phoneNumber}</span>
                      <button
                        onClick={(e) => { e.preventDefault(); handleCopy(phoneNumber); }}
                        className="ml-1 flex items-center justify-center w-5 h-5 rounded-sm hover:bg-white/10 transition-colors"
                        aria-label="Copy phone number"
                      >
                        <FontAwesomeIcon
                          icon={copied ? ["fas", "check"] as IconProp : ["fas", "copy"] as IconProp}
                          className={`text-[10px] transition-colors ${copied ? "text-green-400" : "text-gray-300 hover:text-white"}`}
                        />
                      </button>
                    </div>
                    {/* Arrow */}
                    <div className="mx-auto w-fit border-4 border-transparent border-t-gray-900/95" />
                  </div>
                </div>
              );
            }

            return (
              <Link
                href={item.link}
                className="text-xl bg-gray-500 text-white border rounded-full transition duration-150 ease-linear m-1 p-1 hover:bg-white hover:text-black flex items-center"
                aria-label={item.name}
                key={index}
              >
                <FontAwesomeIcon
                  icon={item.icon as IconProp}
                  className="text-xl text-center bg-black text-white hover:text-black hover:bg-white p-1 rounded-full"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
