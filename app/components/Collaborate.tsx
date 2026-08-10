"use client";
import React from "react";
import { Link } from "react-scroll";

const interests = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    title: "Product Engineering Across Domains",
    description:
      "I enjoy contributing to many kinds of digital products — from internal tools and dashboards to customer-facing platforms, workflow systems, and scalable web applications.",
    accent: "border-l-rose-400 dark:border-l-rose-500",
    badge: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
    badgeLabel: "Broad fit",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    title: "Open Source & Early-Stage Teams",
    description:
      "I’m open to contributing to open source projects and collaborating with early-stage teams that need product-minded engineering support across web platforms, tools, and MVPs.",
    accent: "border-l-blue-400 dark:border-l-blue-500",
    badge: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    badgeLabel: "Open to contribute",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-2.846.813a1.125 1.125 0 00-.272 2.01l2.347 1.565a1.125 1.125 0 001.344 0l2.347-1.565a1.125 1.125 0 00-.272-2.01L12 18.75l-.813-2.846a1.125 1.125 0 00-2.374 0zM18.259 8.715L17.25 12l-3.285 1.009a1.125 1.125 0 00-.154 2.072l2.716 1.358 1.358 2.716a1.125 1.125 0 002.072-.154L21 15.75l3.285-1.009a1.125 1.125 0 00.154-2.072l-2.716-1.358-1.358-2.716a1.125 1.125 0 00-2.072.154zM6.75 4.5l.617 1.973L9.34 7.09l-1.973.617L6.75 9.68l-.617-1.973L4.16 7.09l1.973-.617L6.75 4.5z"
        />
      </svg>
    ),
    title: "AI Products & Web-Based Research",
    description:
      "I’m interested in AI-related products, research-driven prototypes, and academic collaborations connected to web technologies. I enjoy turning ideas and experiments into usable tools, interfaces, and product-ready systems.",
    accent: "border-l-amber-400 dark:border-l-amber-500",
    badge:
      "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    badgeLabel: "Research-friendly",
  },
];

const Collaborate = () => {
  return (
    <div
      className="flex flex-col items-center py-12 min-h-fit bg-slate-50 dark:bg-[#080808]"
      id="collaborate"
    >
      <div className="flex flex-col items-center pb-6 mb-6 w-full px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
          Open to Collaboration
        </h2>
        <p
          className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400 mt-1 text-center animate__animated animate__fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          Open to working with open-source maintainers, contributors,
          early-stage teams, and researchers building meaningful products.
        </p>
        <div className="mt-4 h-px w-24 bg-linear-to-r from-transparent via-slate-400 to-transparent dark:via-slate-500" />
      </div>

      <div className="w-full max-w-5xl px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {interests.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col gap-3 p-5 rounded-xl border border-l-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:shadow-md transition-all duration-200 ${item.accent}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="text-slate-600 dark:text-slate-400">
                  {item.icon}
                </div>
                <span
                  className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold ${item.badge}`}
                >
                  {item.badgeLabel}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs font-sans text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5">
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-3">
              What I bring
            </h4>
            <ul className="space-y-2">
              {[
                "Strong frontend foundation with React, Next.js, and TypeScript",
                "Ability to support backend integration, APIs, and product workflows",
                "Interest in AI-enabled features, research prototypes, and web-focused academic collaboration",
                "Experience building dashboards, internal tools, workflows, and scalable web products",
                "Clear communication and a product-focused engineering mindset",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs font-sans text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-0.5 shrink-0 text-slate-500 dark:text-slate-400">
                    ✦
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:w-64 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 p-5 flex flex-col justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                Availability
              </h4>
              <p className="text-xs font-sans text-slate-500 dark:text-slate-400 leading-relaxed">
                I&apos;m currently employed full-time and take on selective
                collaborations outside work hours. Best fit: meaningful ideas,
                clear scope, and teams that value thoughtful engineering.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Available to collaborate
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to="contact"
            smooth={true}
            offset={-96}
            duration={500}
            className="cursor-pointer"
          >
            <button className="font-sans text-sm font-medium bg-slate-800 hover:bg-slate-700 active:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white py-2.5 px-8 rounded-md transition-colors">
              Let&apos;s connect
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
