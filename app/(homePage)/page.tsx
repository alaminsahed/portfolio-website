"use client";
import React from "react";
import { useState, useEffect } from "react";
const NavBar = React.lazy(() => import("../components/Navbar"));
const HeaderMain = React.lazy(() => import("../components/HeaderMain"));
const About = React.lazy(() => import("../components/About"));
const Skills = React.lazy(() => import("../components/Skills"));
const Experience = React.lazy(() => import("../components/Experience"));
const Recommendation = React.lazy(() => import("../components/Recommendation"));
const Projects = React.lazy(() => import("../components/Projects"));
const Blogs = React.lazy(() => import("../components/Blogs"));
const Collaborate = React.lazy(() => import("../components/Collaborate"));
const Contact = React.lazy(() => import("../components/Contact"));
const Footer = React.lazy(() => import("../components/Footer"));

export default function Home() {
  const [theme, setTheme] = useState<string | null>("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("currentTheme");
    setTheme(currentTheme);
  }, [theme]);

  return (
    <>
      <NavBar />
      <HeaderMain />
      <About />
      <Skills />
      <Experience />
      <Recommendation />
      <Projects />
      <Blogs />
      <Collaborate />
      <Contact />
      <Footer />
    </>
  );
}
