import Image from "next/image";
import React from "react";
import { skillLists } from "../../utils/data/skills";

const GROUPS = [
  {
    key: "Core Skill",
    label: "Core Stack",
    description: "Work with daily in production",
    badge: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
    border: "border-l-rose-400 dark:border-l-rose-500",
    hover:
      "hover:border-rose-300 dark:hover:border-rose-700 hover:shadow-rose-100 dark:hover:shadow-none",
  },
  {
    key: "Medium",
    label: "Proficient",
    description: "Production-ready, comfortable with",
    badge: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    border: "border-l-blue-400 dark:border-l-blue-500",
    hover:
      "hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-blue-100 dark:hover:shadow-none",
  },
  {
    key: "Familiar",
    label: "Familiar",
    description: "Used in projects, still growing",
    badge:
      "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    border: "border-l-amber-400 dark:border-l-amber-500",
    hover:
      "hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-amber-100 dark:hover:shadow-none",
  },
] as const;

const Skills = () => {
  const coreCount = skillLists.filter((s) => s.level === "Core Skill").length;

  return (
    <div
      className="skills flex flex-col items-center py-12 bg-slate-50 dark:bg-[#080808]"
      id="skills"
    >
      {/* Header */}
      <div className="flex flex-col items-center pb-6 mb-4 w-full px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
          My Stack
        </h2>
        <p
          className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400 mt-1 text-center animate__animated animate__fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          Always open to learn new technologies and skills
        </p>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-500" />
      </div>

      {/* Skill groups */}
      <div className="w-full max-w-5xl px-5 space-y-10">
        {GROUPS.map((group) => {
          const items = skillLists.filter((s) => s.level === group.key);
          if (!items.length) return null;

          return (
            <div key={group.key}>
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold ${group.badge}`}
                >
                  {group.label}
                </span>
                <span className="hidden sm:block text-xs text-slate-500 dark:text-slate-400 shrink-0">
                  {group.description}
                </span>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
              </div>

              {/* Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {items.map((skill, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 pl-3 pr-4 py-3 rounded-xl border border-l-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:shadow-md transition-all duration-200 ${group.border} ${group.hover}`}
                  >
                    <div className="w-8 h-8 shrink-0">
                      <Image
                        src={`/images/skills/${skill.logo}`}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate leading-tight">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
