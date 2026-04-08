"use client";
import { cn } from "@/libs/utils";
import React from "react";
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
    <div className="about bg-white dark:bg-[#111111] py-12 px-5" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col pb-6 mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
            About Me
          </h2>
          <p
            className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400 mt-1 animate__animated animate__fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Senior Software Engineer
          </p>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-slate-400 via-slate-300 to-transparent dark:from-slate-500 dark:via-slate-600 dark:to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:basis-2/3 flex flex-col">
            <div className="about-text">
              <div className="mb-4 border-b border-slate-200 dark:border-slate-700">
                <ul
                  className="flex flex-wrap -mb-px text-sm font-medium font-sans text-center"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  {aboutNavLists.map((item, index) => (
                    <li className="mr-1" role="presentation" key={index}>
                      <button
                        className={cn(
                          "inline-block px-4 py-3 border-b-2 border-transparent rounded-t-lg text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 transition-colors text-sm",
                          activeTab === item.tag
                            ? "border-slate-700 dark:border-slate-400 text-slate-800 dark:text-slate-200 font-semibold"
                            : "",
                        )}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === item.tag}
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
                <div
                  className={cn(
                    "p-5 rounded-lg bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700",
                    activeTab === "aboutMe" ? "block" : "hidden",
                  )}
                  role="tabpanel"
                >
                  <p className="text-sm md:text-base font-sans tracking-normal leading-relaxed text-slate-700 dark:text-slate-200">
                    I am a software engineer with about six years of experience,
                    specializing in React.js and modern frontend engineering. I
                    care about scalable UI architecture, performance, and clear
                    collaboration with backend and product teams—and I enjoy
                    strengthening systems with solid RESTful API design where it
                    helps the whole stack.
                    <br />
                    <br />
                    At SSL Wireless, I progressed from Software Engineer to
                    Senior Software Engineer, where I design and build scalable,
                    reusable, and high-performance web applications for banking,
                    payment, ERP, and enterprise platforms. Working with
                    React.js, Next.js, TypeScript, Redux, TanStack Query, Ant
                    Design, and Tailwind CSS, I have delivered solutions
                    including NPSB-related products, payment reconciliation
                    systems, financial analytics dashboards, scam detection
                    tools, a municipality admin panel, an automated distribution
                    system for a global brand, and a garment-sector ERP. In
                    addition to hands-on development, I take ownership of
                    frontend architecture, drive reusable design and state
                    management patterns, contribute to technical planning and
                    product decisions, collaborate closely with cross-functional
                    teams, and resolve complex technical challenges to improve
                    reliability, maintainability, and delivery speed.
                    <br />
                    <br />
                    Before SSL, I was a Software Engineer (frontend) at SVAM
                    International Inc., where I maintained high-traffic React
                    products, integrated REST and third-party APIs, and
                    partnered with backend engineers on contracts and data
                    flow—supporting loan provisioning, food distribution, online
                    learning, and other initiatives with international
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

                <div
                  className={cn(
                    "p-5 rounded-lg bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700",
                    activeTab === "degree" ? "block" : "hidden",
                  )}
                  role="tabpanel"
                >
                  <div className="text-sm md:text-lg font-sans tracking-normal leading-relaxed text-slate-700 dark:text-slate-200">
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

                <div
                  className={cn(
                    "p-5 rounded-lg bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700",
                    activeTab === "learning" ? "block" : "hidden",
                  )}
                  role="tabpanel"
                >
                  <div className="text-sm md:text-base font-sans tracking-normal leading-relaxed text-slate-700 dark:text-slate-200 space-y-3">
                    <p>
                      <b>Frontend:</b> JavaScript, TypeScript, React.js,
                      Next.js, Redux, Ant Design, Tailwind CSS, Material UI,
                      Bootstrap
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

                <div
                  className={cn(
                    "p-5 rounded-lg bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700",
                    activeTab === "profession" ? "block" : "hidden",
                  )}
                  role="tabpanel"
                >
                  <div className="text-sm md:text-lg font-sans tracking-normal leading-relaxed text-slate-700 dark:text-slate-200">
                    <h4 className="font-bold">Senior Software Engineer</h4>
                    <h6>SSL Wireless · Dhaka, Bangladesh</h6>
                    <p>January 2026 – Present</p>
                  </div>
                </div>

                <div
                  className={cn(
                    "p-5 rounded-lg bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 mt-2",
                    activeTab === "profession" ? "block" : "hidden",
                  )}
                  role="tabpanel"
                >
                  <div className="text-sm md:text-lg font-sans tracking-normal leading-relaxed text-slate-700 dark:text-slate-200">
                    <h4 className="font-bold">Software Engineer (Frontend)</h4>
                    <h6>SSL Wireless · Dhaka, Bangladesh</h6>
                    <p>December 2023 – January 2026</p>
                  </div>
                </div>

                <div
                  className={cn(
                    "p-5 rounded-lg bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 mt-2",
                    activeTab === "profession" ? "block" : "hidden",
                  )}
                  role="tabpanel"
                >
                  <div className="text-sm md:text-lg font-sans tracking-normal leading-relaxed text-slate-700 dark:text-slate-200">
                    <h2 className="font-bold">Software Engineer</h2>
                    <h4>SVAM International Inc. · Dhaka, Bangladesh</h4>
                    <p>July 2022 – November 2023</p>
                  </div>
                </div>

                <div
                  className={cn(
                    "p-5 rounded-lg bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 mt-2",
                    activeTab === "profession" ? "block" : "hidden",
                  )}
                  role="tabpanel"
                >
                  <div className="text-sm md:text-lg font-sans tracking-normal leading-relaxed text-slate-700 dark:text-slate-200">
                    <h2 className="font-bold">
                      Junior Web Developer (Full Stack)
                    </h2>
                    <h4>UniShopr.com · Dhaka, Bangladesh</h4>
                    <p>July 2021 – June 2022</p>
                  </div>
                </div>

                <div
                  className={cn(
                    "p-5 rounded-lg bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700",
                    activeTab === "certs" ? "block" : "hidden",
                  )}
                  role="tabpanel"
                >
                  <ul className="list-disc pl-5 text-sm md:text-base font-sans tracking-normal leading-relaxed text-slate-700 dark:text-slate-200 space-y-3">
                    <li>
                      <Link
                        href="https://res.cloudinary.com/bohubrihi/image/upload/v1720343975/production/668a5da3083a80421ddd5159.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                      >
                        Back-end Development with NodeJS, Express &amp; MongoDB
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-fd28ab8d-80e0-436b-b25b-96c9d14d5c48.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                      >
                        NestJS – Building Real Project API From Scratch
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.coursera.org/account/accomplishments/verify/KRZXY3ZNXU33"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                      >
                        Advanced React
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://res.cloudinary.com/bohubrihi/image/upload/v1705486137/production/65a7a736ce73e0a68f02ec79.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                      >
                        SQL Fundamentals course
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.sololearn.com/Certificate/CT-VOODZXLX/jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                      >
                        Introduction to Python Programming
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="md:basis-1/3 flex flex-col justify-center items-center mt-10 md:mt-0 md:pl-10">
            <div className="m-auto border-slate-300 dark:border-slate-600 border-4 select-none grayscale hover:grayscale-0 transition-all duration-500 rounded-full h-56 w-56 overflow-hidden shadow-md">
              <video
                width="250"
                height="250"
                autoPlay={true}
                muted
                loop
                className="h-56 w-56"
              >
                <source src="/video/image-me2.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-row mt-4">
              <Link
                href="mailto:alaminsahed101@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-medium bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white border border-slate-700 py-2 px-5 rounded-md m-2 transition-colors"
              >
                Hire Me
              </Link>
              <Link
                href="https://drive.google.com/file/d/1pIJMzfYt8JgG4rXJ90Q4Ke4UpttFYgQR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm font-medium border border-slate-700 dark:border-slate-500 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 py-2 px-5 rounded-md m-2 transition-colors"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
