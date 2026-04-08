"use client";
import React, { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: Stat[] = [
  {
    value: 6,
    suffix: "",
    label: "Years of Experience",
    sublabel: "In production since 2020",
  },
  {
    value: 3,
    suffix: "",
    label: "Industries",
    sublabel: "Fintech  · Enterprise · E-commerce",
  },
  {
    value: 15,
    suffix: "+",
    label: "Products Shipped",
    sublabel: "Fintech  · ERP · Dashboards · Marketplace · AI Products",
  },
];

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);

  return count;
}

const StatCard = ({
  stat,
  triggered,
  index,
}: {
  stat: Stat;
  triggered: boolean;
  index: number;
}) => {
  const count = useCountUp(stat.value, 1200, triggered);

  return (
    <div
      className="flex flex-col items-center text-center px-6 py-8 animate__animated animate__fadeInUp"
      style={{ animationDelay: `${index * 0.12}s`, animationFillMode: "both" }}
    >
      <div className="flex items-end justify-center leading-none mb-2">
        <span className="text-5xl sm:text-6xl font-extrabold text-[#040c2c] dark:text-slate-100 tabular-nums tracking-tight">
          {triggered ? count : 0}
        </span>
        <span className="text-3xl sm:text-4xl font-extrabold text-rose-500 dark:text-rose-400 mb-0.5">
          {stat.suffix}
        </span>
      </div>
      <p className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-200 mt-1">
        {stat.label}
      </p>
      <p className="text-xs font-sans text-slate-500 dark:text-slate-400 mt-1 leading-snug">
        {stat.sublabel}
      </p>
    </div>
  );
};

const ImpactNumbers = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full bg-slate-50 dark:bg-[#080808] border-y border-slate-100 dark:border-slate-800/60"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 divide-x divide-y lg:divide-y-0 divide-slate-100 dark:divide-slate-800/60">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} triggered={triggered} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactNumbers;
