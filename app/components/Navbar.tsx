"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeChangeBtn from "./ui/ThemeChangeBtn";
import Image from "next/image";
import { cn } from "@/libs/utils";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [navColor, setNavColor] = useState(" ");
  const [activeLink, setActiveLink] = useState("");

  const changeNav = () => {
    if (window.scrollY > 0) {
      setNavColor("bg-gray-900");
    } else {
      setNavColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const navLists = [
    { name: "Home", link: "header" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Experience", link: "experience" },
    { name: "How I Think", link: "thinking" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Blog", link: "blog" },
    { name: "Collaborate", link: "collaborate" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav
      className={cn(
        "border-gray-200 fixed w-full z-20 top-0 left-0 md:h-20",
        `${navColor}`
      )}
    >
      <div className="max-w-(--breakpoint-xl) flex flex-col md:flex-row md:items-center justify-center md:justify-between mx-auto p-1">
        <Link to="/" className="flex items-center" href="/">
          <Image src="/images/logo.png" alt="Logo" width={90} height={40} />
          <span className="sr-only">Md. Al-Amin Sahed — home</span>
        </Link>

        <button
          data-collapse-toggle="#navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMobileView(!mobileView)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={cn(
            "w-full md:block md:w-auto",
            mobileView ? "block" : "hidden"
          )}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-1 bg-gray-800 md:bg-transparent">
            {navLists.map((navList) => (
              <li key={navList.link}>
                <Link
                  to={navList.link}
                  className={cn(
                    "block py-2 pl-3 pr-4 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white cursor-pointer relative",
                    activeLink === `${navList.link}` ? "underline" : ""
                  )}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-96}
                  duration={500}
                  onSetActive={() => setActiveLink(navList.link)}
                  href={navList.link}
                >
                  {navList.name}
                </Link>
              </li>
            ))}
            <li>
              <ThemeChangeBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
