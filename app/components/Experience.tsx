"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { totalExperience } from "@/utils/data/experience";
import { skillTagsVariants } from "./ui/SkillTags";
import Modal from "./ui/ProjectModal";

type ExperienceEntry = (typeof totalExperience)[number] & {
  promoted?: boolean;
};

type ProcessedEntry =
  | { type: "promoted"; current: ExperienceEntry; previous: ExperienceEntry }
  | { type: "single"; experience: ExperienceEntry };

function groupExperiences(list: ExperienceEntry[]): ProcessedEntry[] {
  const result: ProcessedEntry[] = [];
  let i = 0;
  while (i < list.length) {
    const exp = list[i];
    if (
      exp.promoted &&
      i + 1 < list.length &&
      list[i + 1].company === exp.company
    ) {
      result.push({ type: "promoted", current: exp, previous: list[i + 1] });
      i += 2;
    } else {
      result.push({ type: "single", experience: exp });
      i++;
    }
  }
  return result;
}

function getStartYear(duration: string): string {
  return duration.match(/\d{4}/)?.[0] ?? "";
}

const cardBase =
  "rounded-lg p-5 sm:p-6 bg-slate-50 dark:bg-slate-900/70 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 border border-slate-200 dark:border-slate-700 border-l-[3px] border-l-rose-400 dark:border-l-rose-500";

const Experience = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [openProjects, setOpenProjects] = useState<Set<string>>(new Set());
  const [showAllProjects, setShowAllProjects] = useState<Set<string>>(
    new Set(),
  );

  const handleModal = (id: string) => {
    setShowModal(!showModal);
    setProjectId(id);
  };

  const toggleProjects = (key: string) => {
    setOpenProjects((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const toggleShowAll = (key: string) => {
    setShowAllProjects((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const processed = groupExperiences(totalExperience as ExperienceEntry[]);

  const renderSummary = (summary?: string[]) => {
    if (!summary?.length) return null;
    return (
      <ul className="mt-2 mb-1 space-y-1">
        {summary.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 dark:bg-rose-500 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    );
  };

  const renderProjectCard = (project: ExperienceEntry["projects"][number]) => (
    <div key={project.id}>
      <div className="p-5 rounded-lg mt-3 flex flex-col bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 transition-all duration-200 hover:shadow-sm">
        <div className="font-sans">
          {project.live_url ? (
            <Link
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-blue-700 dark:text-blue-300 hover:underline transition-colors"
            >
              {project.name}
            </Link>
          ) : (
            <span className="text-base font-semibold text-slate-800 dark:text-slate-100">
              {project.name}
            </span>
          )}
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 mt-1">
            {project.description}
          </p>
          <div className="pt-2 flex flex-wrap gap-1">
            {project.stacks.filter(Boolean).map((tag, index) => (
              <span
                className={skillTagsVariants({ variant: tag.style })}
                key={index}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          className="mt-3 text-sm font-medium bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white py-2 px-4 rounded-md transition-colors w-24"
          onClick={() => handleModal(project.id)}
        >
          Details
        </button>
      </div>
      {showModal && project.id === projectId && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          project={project}
          parent="experience"
        />
      )}
    </div>
  );

  const renderProjects = (
    projects: ExperienceEntry["projects"],
    entryKey: string,
  ) => {
    const isOpen = openProjects.has(entryKey);
    const isShowingAll = showAllProjects.has(entryKey);

    const featured = projects.filter(
      (p) => (p as typeof p & { featured?: boolean }).featured,
    );
    const others = projects.filter(
      (p) => !(p as typeof p & { featured?: boolean }).featured,
    );
    const hasOthers = others.length > 0;

    return (
      <div className="pt-4">
        {/* Collapsible header */}
        <button
          onClick={() => toggleProjects(entryKey)}
          className="flex items-center gap-2 group w-full text-left"
        >
          <h4 className="text-base font-semibold font-sans text-slate-700 dark:text-slate-200 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
            Projects
          </h4>
          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
            ({projects.length})
          </span>
          <svg
            className={cn(
              "w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-300 ml-0.5",
              isOpen && "rotate-180",
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Collapsible content */}
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden min-h-0">
            <div className="pt-1">
              {/* Featured projects — always visible when open */}
              {featured.map(renderProjectCard)}

              {/* Other projects — collapsible within the projects section */}
              {hasOthers && (
                <>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isShowingAll
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden min-h-0">
                      {others.map(renderProjectCard)}
                    </div>
                  </div>

                  {/* Show more / Show less toggle */}
                  <button
                    onClick={() => toggleShowAll(entryKey)}
                    className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                  >
                    <svg
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        isShowingAll && "rotate-180",
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    {isShowingAll
                      ? "Show less"
                      : `Show ${others.length} more project${others.length > 1 ? "s" : ""}`}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="experience" className="py-12 bg-white dark:bg-[#111111]">
      {/* Section header */}
      <div className="flex flex-col items-center pb-6 mb-10">
        <h2 className="text-2xl lg:text-4xl p-3 font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
          Experience
        </h2>
        <p
          className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400"
          style={{ animationDelay: "0.2s" }}
        >
          Where I have worked and what I have built
        </p>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-500" />
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="relative">
          {/* Mobile: left-side vertical line */}
          <div className="absolute sm:hidden left-3 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700" />
          {/* Desktop: center vertical line */}
          <div className="absolute hidden sm:block left-1/2 -translate-x-px top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-10">
            {processed.map((entry, index) => {
              const isRight = index % 2 === 0;
              const isCurrent = index === 0;
              const key =
                entry.type === "promoted"
                  ? entry.current.id
                  : entry.experience.id;
              const startYear =
                entry.type === "promoted"
                  ? getStartYear(entry.current.duration)
                  : getStartYear(entry.experience.duration);
              const projects =
                entry.type === "promoted"
                  ? renderProjects(
                      [
                        ...entry.current.projects,
                        ...entry.previous.projects,
                      ] as ExperienceEntry["projects"],
                      key,
                    )
                  : renderProjects(entry.experience.projects, key);

              const infoCard =
                entry.type === "promoted" ? (
                  <div className={cardBase}>
                    <div className="flex gap-4">
                      {/* Inner promoted timeline */}
                      <div className="flex flex-col items-center shrink-0 pt-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400 dark:bg-rose-500 ring-2 ring-rose-200 dark:ring-rose-900 shrink-0" />
                        <div className="flex-1 w-px border-l-2 border-dashed border-slate-300 dark:border-slate-600 my-1" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-500 ring-2 ring-slate-200 dark:ring-slate-700 shrink-0" />
                      </div>
                      <div className="flex-1 flex flex-col gap-5">
                        {/* Current role */}
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-xl sm:text-2xl font-bold text-rose-500 dark:text-rose-400 font-sans">
                              {entry.current.title}
                              <span className="text-base font-normal text-slate-500 dark:text-slate-400 ml-2">
                                ({entry.current.area})
                              </span>
                            </h3>
                          </div>
                          <h4 className="text-base sm:text-lg font-semibold mt-1">
                            <Link
                              href={entry.current.company_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 dark:text-blue-300 hover:underline transition-colors"
                            >
                              {entry.current.company}
                            </Link>
                          </h4>
                          {renderSummary((entry.current as ExperienceEntry & { summary?: string[] }).summary)}
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-sans">
                            {entry.current.duration}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 font-sans leading-relaxed">
                            <span className="font-semibold">Stack:</span>{" "}
                            {entry.current.stacks}
                          </p>
                        </div>
                        {/* Previous role */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-rose-500 dark:text-rose-400 font-sans">
                            {entry.previous.title}
                            <span className="text-base font-normal text-slate-500 dark:text-slate-400 ml-2">
                              ({entry.previous.area})
                            </span>
                          </h3>
                          <h4 className="text-base sm:text-lg font-semibold mt-1">
                            <Link
                              href={entry.previous.company_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 dark:text-blue-300 hover:underline transition-colors"
                            >
                              {entry.previous.company}
                            </Link>
                          </h4>
                          {renderSummary((entry.previous as ExperienceEntry & { summary?: string[] }).summary)}
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-sans">
                            {entry.previous.duration}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 font-sans leading-relaxed">
                            <span className="font-semibold">Stack:</span>{" "}
                            {entry.previous.stacks}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={cardBase}>
                    <h3 className="text-xl sm:text-2xl font-bold text-rose-500 dark:text-rose-400 font-sans">
                      {entry.experience.title}
                      <span className="text-base font-normal text-slate-500 dark:text-slate-400 ml-2">
                        ({entry.experience.area})
                      </span>
                    </h3>
                    <h4 className="text-base sm:text-lg font-semibold mt-1">
                      <Link
                        href={entry.experience.company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 dark:text-blue-300 hover:underline transition-colors"
                      >
                        {entry.experience.company}
                      </Link>
                    </h4>
                    {renderSummary((entry.experience as ExperienceEntry & { summary?: string[] }).summary)}
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-sans">
                      {entry.experience.duration}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 font-sans leading-relaxed">
                      <span className="font-semibold">Stack:</span>{" "}
                      {entry.experience.stacks}
                    </p>
                  </div>
                );

              return (
                <div key={key} className="relative">
                  {/* Year label — desktop only, opposite side of card */}
                  <span
                    className={cn(
                      "absolute hidden sm:block top-0.5 text-sm font-bold font-mono text-slate-400 dark:text-slate-500",
                      isRight
                        ? "right-[calc(50%+1.5rem)] text-right"
                        : "left-[calc(50%+1.5rem)] text-left",
                    )}
                  >
                    {startYear}
                  </span>

                  {/* Dot — left-3 on mobile, centered on desktop */}
                  <div className="absolute z-10 top-1 left-3 -translate-x-1/2 sm:left-1/2">
                    {/* Pulse ring for the current (first) entry */}
                    {isCurrent && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-rose-400 dark:bg-rose-500 opacity-50" />
                    )}
                    <div className="relative w-4 h-4 rounded-full bg-rose-400 dark:bg-rose-500 ring-2 ring-white dark:ring-[#111111]" />
                  </div>

                  {/* Content — right of left dot on mobile; alternates on desktop */}
                  <div
                    className={cn(
                      "pl-10",
                      isRight
                        ? "sm:pl-[calc(50%+1.5rem)] sm:pr-0"
                        : "sm:pl-0 sm:pr-[calc(50%+1.5rem)]",
                    )}
                  >
                    {/* Card wrapper with arrow connector */}
                    <div className="relative">
                      {/* Arrow: mobile + desktop right-side → points left toward dot */}
                      <div
                        className={cn(
                          "absolute top-5 w-3 h-3 rotate-45 z-20",
                          "bg-slate-50 dark:bg-slate-900 border-l border-b border-slate-200 dark:border-slate-700",
                          "left-0 -translate-x-1/2",
                          !isRight && "sm:hidden",
                        )}
                      />
                      {/* Arrow: desktop left-side only → points right toward center dot */}
                      {!isRight && (
                        <div className="hidden sm:block absolute top-5 right-0 translate-x-1/2 w-3 h-3 rotate-45 z-20 bg-slate-50 dark:bg-slate-900 border-r border-t border-slate-200 dark:border-slate-700" />
                      )}
                      {infoCard}
                    </div>
                    {projects}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
