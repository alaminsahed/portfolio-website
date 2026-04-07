"use client";
import { cn } from "@/libs/utils";
import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import Link from "next/link";

const About = () => {
  const [activeTab, setActiveTab] = React.useState("aboutMe");

  const aboutNavLists = [
    { label: "About Me", tag: "aboutMe" },
    { label: "Education", tag: "degree" },
    { label: "Skills", tag: "learning" },
    { label: "Experience", tag: "profession" },
    { label: "Certifications", tag: "certs" },
  ];

  return (
    <div className="about bg-white/80 dark:bg-[#121212] p-5" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-2/3 flex flex-col mt-16">
            <div className="pb-10">
              <h2 className="text-2xl lg:text-4xl p-3 font-bold text-[#040c2c] dark:text-slate-400">
                <Zoom cascade duration={3000}>
                  About Me
                </Zoom>
              </h2>
              <h3 className="text-lg lg:text-2xl p-3 font-normal dark:text-slate-200/70">
                <Slide bottom cascade>
                  Senior Software Engineer
                </Slide>
              </h3>
            </div>
            <div className="about-text">
              <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  className="flex flex-wrap -mb-px text-sm font-medium text-center"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  {aboutNavLists.map((item, index) => (
                    <li className="mr-2" role="presentation" key={index}>
                      <button
                        className={cn(
                          "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 xl:text-2xl",
                          activeTab === item.tag ? "border-gray-300" : "",
                        )}
                        type="button"
                        role="tab"
                        aria-selected="true"
                        id={item.tag}
                        onClick={() => setActiveTab(item.tag)}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="myTabContent" className="p-2">
                <Rotate top left cascade>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800",
                      activeTab === "aboutMe" ? "block" : "hidden",
                    )}
                    role="tabpanel"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      I am a software engineer with about six years of
                      experience, specializing in React.js and modern frontend
                      engineering. I care about scalable UI architecture,
                      performance, and clear collaboration with backend and
                      product teams—and I enjoy strengthening systems with solid
                      RESTful API design where it helps the whole stack.
                      <br />
                      <br />
                      At SSL Wireless I progressed from Software Engineer
                      (December 2023–January 2026) to Senior Software Engineer
                      (January 2026–present). I build responsive, reusable
                      interfaces with React.js, Next.js, TypeScript, Redux,
                      TanStack Query, Ant Design, and Tailwind CSS across
                      banking and payment experiences, reconciliation tooling,
                      ERP and analytics surfaces, scam detection, and other
                      internal and client-facing apps—including work such as the
                      Shiabchar Municipality admin panel, an automated
                      distribution system for a global brand, and a
                      garment-sector ERP—while contributing to tech choices that
                      keep delivery efficient.
                      <br />
                      <br />
                      Before SSL, I was a Software Engineer (frontend) at SVAM
                      International Inc., where I maintained high-traffic React
                      products, integrated REST and third-party APIs, and
                      partnered with backend engineers on contracts and data
                      flow—supporting loan provisioning, food distribution,
                      online learning, and other initiatives with international
                      teammates.
                      <br />
                      <br />
                      Earlier, as a junior full-stack developer at UniShopr, I
                      shipped React.js and Next.js features, Node.js and
                      GraphQL/Hasura APIs, and improvements across an e-commerce
                      platform serving 500+ daily orders.
                      <br />
                      <br />I keep learning across the stack, write technical
                      articles on Hashnode, and hold certifications in Node,
                      NestJS, React, SQL, and Python fundamentals.
                    </p>
                  </div>
                </Rotate>
                <Bounce cascade duration={4000}>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800",
                      activeTab === "degree" ? "block" : "hidden",
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-2xl text-gray-500 dark:text-gray-400">
                      <h2 className="font-bold">
                        B.Sc. in Computer Science and Engineering.
                      </h2>
                      <h4>Southeast University, Bangladesh</h4>
                      <p>CGPA: 3.64/4</p>
                      <p>Graduation: December 2020</p>
                      <p className="text-sm mt-2">
                        Studied: July 2016 – December 2020
                      </p>
                    </div>
                  </div>
                </Bounce>
                <Roll cascade>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800",
                      activeTab === "learning" ? "block" : "hidden",
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-lg text-gray-500 dark:text-gray-400 space-y-3">
                      <p>
                        <b>Frontend:</b> JavaScript, TypeScript, HTML, CSS,
                        React.js, Next.js, Redux, Ant Design, Tailwind CSS,
                        Material UI, Bootstrap
                      </p>
                      <p>
                        <b>Backend &amp; APIs:</b> Node.js, Express.js, Nest.js,
                        RESTful APIs, GraphQL, Hasura
                      </p>
                      <p>
                        <b>Data &amp; tools:</b> Git, GitHub, Bitbucket, Jira;
                        MongoDB, PostgreSQL, MySQL, Firebase
                      </p>
                      <p>
                        <b>Familiar:</b> AngularJS, Hono.js, Redux-Saga
                      </p>
                    </div>
                  </div>
                </Roll>
                <Bounce cascade>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800",
                      activeTab === "profession" ? "block" : "hidden",
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-2xl text-gray-500 dark:text-gray-400">
                      <h4 className="font-bold">Senior Software Engineer</h4>
                      <h6>SSL Wireless · Dhaka, Bangladesh</h6>
                      <p>January 2026 – Present</p>
                    </div>
                  </div>
                </Bounce>
                <Bounce cascade duration={3000}>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800 mt-1",
                      activeTab === "profession" ? "block" : "hidden",
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-2xl text-gray-500 dark:text-gray-400">
                      <h4 className="font-bold">
                        Software Engineer (Frontend)
                      </h4>
                      <h6>SSL Wireless · Dhaka, Bangladesh</h6>
                      <p>December 2023 – January 2026</p>
                    </div>
                  </div>
                </Bounce>
                <Bounce cascade duration={4000}>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800 mt-1",
                      activeTab === "profession" ? "block" : "hidden",
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-2xl text-gray-500 dark:text-gray-400">
                      <h2 className="font-bold">Software Engineer</h2>
                      <h4>SVAM International Inc. · Dhaka, Bangladesh</h4>
                      <p>July 2022 – November 2023</p>
                    </div>
                  </div>
                </Bounce>
                <Bounce cascade duration={6000}>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800 mt-1",
                      activeTab === "profession" ? "block" : "hidden",
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-2xl text-gray-500 dark:text-gray-400">
                      <h2 className="font-bold">
                        Junior Web Developer (Full Stack)
                      </h2>
                      <h4>UniShopr.com · Dhaka, Bangladesh</h4>
                      <p>July 2021 – June 2022</p>
                    </div>
                  </div>
                </Bounce>
                <Roll cascade>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800",
                      activeTab === "certs" ? "block" : "hidden",
                    )}
                    role="tabpanel"
                  >
                    <ul className="list-disc pl-5 text-sm md:text-lg text-gray-500 dark:text-gray-400 space-y-2">
                      <li>
                        Back-end Development with NodeJS, Express &amp; MongoDB
                      </li>
                      <li>NestJS – Building Real Project API From Scratch</li>
                      <li>Advanced React</li>
                      <li>SQL Fundamentals course</li>
                      <li>Introduction to Python Programming</li>
                    </ul>
                  </div>
                </Roll>
              </div>
            </div>
          </div>
          <div className="md:basis-1/3 flex flex-col justify-center items-center mt-16">
            <div className="m-auto border-white border-4 select-none grayscale hover:filter-none rounded-full h-56 w-56 overflow-hidden">
              <video
                width="250"
                height="250"
                autoPlay={true}
                muted
                loop
                className="h-56 w-56"
              >
                <source src="/video/image-me2.webm" type="video/webm"></source>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-row">
              <Fade left>
                <Link
                  href="mailto:alaminsahed101@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-slate-900/100 hover:bg-white border border-white hover:text-black text-white font-bold py-2 px-4 rounded-sm m-2">
                    Hire Me
                  </button>
                </Link>
              </Fade>
              <Fade right>
                <Link
                  href="https://drive.google.com/file/d/1pIJMzfYt8JgG4rXJ90Q4Ke4UpttFYgQR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-slate-900/100 hover:bg-white border border-white hover:text-black text-white font-bold py-2 px-4 rounded-sm m-2">
                    {" "}
                    Download CV{" "}
                  </button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
