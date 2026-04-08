"use client";
import React from "react";
const NavBar = React.lazy(() => import("../components/Navbar"));
const HeaderMain = React.lazy(() => import("../components/HeaderMain"));
const ImpactNumbers = React.lazy(() => import("../components/ImpactNumbers"));
const About = React.lazy(() => import("../components/About"));
const Skills = React.lazy(() => import("../components/Skills"));
const Experience = React.lazy(() => import("../components/Experience"));
const Recommendation = React.lazy(() => import("../components/Recommendation"));
const ThinkingProcess = React.lazy(
  () => import("../components/ThinkingProcess"),
);
const Projects = React.lazy(() => import("../components/Projects"));
const Blogs = React.lazy(() => import("../components/Blogs"));
const Collaborate = React.lazy(() => import("../components/Collaborate"));
const Contact = React.lazy(() => import("../components/Contact"));
const Footer = React.lazy(() => import("../components/Footer"));
const BackToTop = React.lazy(() => import("../components/ui/BackToTop"));

export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderMain />
      <ImpactNumbers />
      <About />
      <Skills />
      <Experience />
      <Recommendation />
      <ThinkingProcess />
      <Projects />
      <Blogs />
      <Collaborate />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
