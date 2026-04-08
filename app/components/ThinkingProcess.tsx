"use client";
import React, { useEffect, useRef, useState } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  ai?: boolean;
  icon: React.ReactNode;
  accent: string;
  textAccent: string;
  bgAccent: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Understand the Requirement",
    description:
      "I don't open the editor first. I read, ask questions, and map the real problem behind the request — not just what's written, but what's meant. I use AI early to surface edge cases and blind spots I might not think to ask about.",
    ai: true,
    accent: "border-rose-400 dark:border-rose-500",
    textAccent: "text-rose-500 dark:text-rose-400",
    bgAccent: "bg-rose-50 dark:bg-rose-900/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Challenge Assumptions",
    description:
      "Requirements as given are rarely the actual requirement. Before planning, I push back — why this approach? What if we did it differently? I treat AI as a sounding board here, pressure-testing ideas and exploring alternatives before committing to a direction.",
    ai: true,
    accent: "border-violet-400 dark:border-violet-500",
    textAccent: "text-violet-500 dark:text-violet-400",
    bgAccent: "bg-violet-50 dark:bg-violet-900/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Break Into Tasks",
    description:
      "Once I'm confident about the direction, I decompose the work into small, shippable pieces. I use AI here to stress-test my breakdown — it often catches missing edge cases or subtasks I glossed over. The output is granular enough to estimate accurately and clear enough that any team member can pick one up without a long briefing.",
    ai: true,
    accent: "border-blue-400 dark:border-blue-500",
    textAccent: "text-blue-500 dark:text-blue-400",
    bgAccent: "bg-blue-50 dark:bg-blue-900/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Choose Tech & Structure",
    description:
      "Deliberate, not habitual. I evaluate options against real constraints — team familiarity, scale, deadline, long-term maintainability. I use AI to compare tradeoffs quickly and flag things I might have overlooked. Then I commit and document the reasoning.",
    ai: true,
    accent: "border-amber-400 dark:border-amber-500",
    textAccent: "text-amber-500 dark:text-amber-400",
    bgAccent: "bg-amber-50 dark:bg-amber-900/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Estimate Per Task",
    description:
      "I estimate task by task, not just a final deadline. This exposes hidden complexity early, gives the team a shared sense of scope, and makes slippage visible before it becomes a crisis.",
    accent: "border-cyan-400 dark:border-cyan-500",
    textAccent: "text-cyan-500 dark:text-cyan-400",
    bgAccent: "bg-cyan-50 dark:bg-cyan-900/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Brief the Team on Structure",
    description:
      "Before anyone writes code, I walk the team through the architecture, key decisions, and the reasoning behind them. Alignment at this stage saves days of rework later. I treat this as a two-way conversation — not a lecture.",
    accent: "border-emerald-400 dark:border-emerald-500",
    textAccent: "text-emerald-500 dark:text-emerald-400",
    bgAccent: "bg-emerald-50 dark:bg-emerald-900/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Allocate by Strength",
    description:
      "Right person, right task. I factor in experience, growth goals, current load — not just availability. A task handed to the wrong person costs more time than the time saved by assigning it fast.",
    accent: "border-pink-400 dark:border-pink-500",
    textAccent: "text-pink-500 dark:text-pink-400",
    bgAccent: "bg-pink-50 dark:bg-pink-900/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Build with Check-ins",
    description:
      "Not just a kickoff and then silence. During implementation, I use AI for code generation, boilerplate, and debugging speed — so I spend less time on the mechanical and more on the decisions that actually matter. I run short, frequent syncs to catch blockers early and make small course corrections before they become large ones.",
    ai: true,
    accent: "border-indigo-400 dark:border-indigo-500",
    textAccent: "text-indigo-500 dark:text-indigo-400",
    bgAccent: "bg-indigo-50 dark:bg-indigo-900/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    ),
  },
  {
    number: "09",
    title: "Review & Learn",
    description:
      "After shipping, I look back — how accurate were the estimates? What created friction? What would I change? This isn't blame, it's calibration. A process that doesn't improve isn't a process, it's just habit.",
    accent: "border-slate-400 dark:border-slate-500",
    textAccent: "text-slate-500 dark:text-slate-400",
    bgAccent: "bg-slate-50 dark:bg-slate-900/30",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const ThinkingProcess = () => {
  const { ref, inView } = useInView();

  return (
    <div
      className="py-16 bg-white dark:bg-[#111111]"
      id="thinking"
    >
      {/* Header */}
      <div className="flex flex-col items-center pb-6 mb-12 w-full px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
          How I Think
        </h2>
        <p
          className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400 mt-1 text-center animate__animated animate__fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          My process from first read of the brief to shipping and learning
        </p>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-500" />
      </div>

      {/* Timeline */}
      <div ref={ref} className="max-w-3xl mx-auto px-5">
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-transparent dark:from-slate-800 dark:via-slate-700 dark:to-transparent" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex gap-5 transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Step number bubble */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center border ${step.accent} ${step.bgAccent} shadow-sm`}
                  >
                    <span className={`text-[10px] font-bold font-mono ${step.textAccent} leading-none`}>
                      {step.number}
                    </span>
                    <span className={`mt-1 ${step.textAccent}`}>{step.icon}</span>
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 mb-1 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-5 hover:shadow-md transition-shadow duration-200`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug">
                      {step.title}
                    </h3>
                    {step.ai && (
                      <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 border border-violet-200 dark:border-violet-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
                        </svg>
                        AI-assisted
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-sans text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-xs font-sans text-slate-400 dark:text-slate-600 leading-relaxed">
          I use AI across the full process — surfacing edge cases, pressure-testing ideas, comparing tradeoffs, and accelerating code generation. It handles the mechanical; the judgment, architecture, and decisions are still mine.
        </p>
      </div>
    </div>
  );
};

export default ThinkingProcess;
