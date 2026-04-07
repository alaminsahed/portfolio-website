import React, { useState } from "react";
import { projectLists, ProjectCategory } from "../../utils/data/projects";
import { skillTagsVariants } from "./ui/SkillTags";
import ProjectModal from "./ui/ProjectModal";

const TABS: { label: string; value: ProjectCategory }[] = [
  { label: "Collaboration", value: "collaboration" },
  { label: "Extensions", value: "extensions" },
  { label: "Open Source", value: "open-source" },
  { label: "Projects", value: "projects" },
];

const TAB_SUBTITLES: Record<ProjectCategory, string> = {
  projects: "Personal builds & side projects",
  "open-source": "Contributions to open source",
  extensions: "Products & browser extensions",
  collaboration:
    "Ideas, code reviews & market exploration with early-stage teams",
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("collaboration");
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState<number>();

  const handleModal = (id: number) => {
    setShowModal(!showModal);
    setProjectId(id);
  };

  const filtered = projectLists.filter((p) => p.category === activeTab);

  return (
    <div
      className="flex flex-col items-center py-12 bg-white dark:bg-[#111111]"
      id="portfolio"
    >
      <div className="flex flex-col items-center pb-6 mb-6 w-full px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
          Projects
        </h2>
        <p
          className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400 mt-1 animate__animated animate__fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          {TAB_SUBTITLES[activeTab]}
        </p>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-500" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeTab === tab.value
                ? "bg-slate-800 text-white border-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:border-slate-200"
                : "bg-transparent text-slate-600 border-slate-300 hover:border-slate-500 dark:text-slate-400 dark:border-slate-600 dark:hover:border-slate-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-5 w-full max-w-5xl">
        {filtered.length === 0 ? (
          <p className="text-center text-slate-400 dark:text-slate-500 py-16 text-sm">
            Nothing here yet — check back soon.
          </p>
        ) : (
          <div
            className={`grid mb-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm md:mb-12 ${
              filtered.length === 1
                ? "md:grid-cols-1 max-w-xl mx-auto"
                : "md:grid-cols-2"
            }`}
          >
            {filtered.map((project, index) => (
              <div
                className="flex flex-col p-8 justify-center items-center bg-white dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700 md:border-r last:border-b-0 md:last:border-b md:even:border-r-0 relative overflow-hidden"
                key={index}
              >
                {/* {project.type === "Open Source" && (
                  <div className="absolute top-0 right-0 w-44 h-5 mt-5 transform bg-rose-700 dark:bg-rose-800 text-white text-xs whitespace-no-wrap px-4 border-0 rounded rotate-[15deg] opacity-80 text-center font-semibold">
                    Open Source
                  </div>
                )}
                {project.type === "Extension" && (
                  <div className="absolute top-0 right-0 w-44 h-5 mt-5 transform bg-indigo-600 dark:bg-indigo-700 text-white text-xs whitespace-no-wrap px-4 border-0 rounded rotate-[15deg] opacity-80 text-center font-semibold">
                    Extension
                  </div>
                )}
                {project.type === "Collaboration" && (
                  <div className="absolute top-0 right-0 w-44 h-5 mt-5 transform bg-emerald-600 dark:bg-emerald-700 text-white text-xs whitespace-no-wrap px-4 border-0 rounded rotate-[15deg] opacity-80 text-center font-semibold">
                    Collaboration
                  </div>
                )} */}

                <h2 className="z-10 text-base font-bold text-slate-800 dark:text-slate-100 font-sans text-center">
                  {project.name}
                </h2>
                <p className="pt-1 z-10 text-sm font-sans leading-relaxed text-slate-600 dark:text-slate-300 text-center">
                  {project.details}
                </p>
                <div className="p-1 flex flex-wrap justify-center gap-1 mt-1">
                  {project.techTags.map((tag, i) => (
                    <span
                      className={skillTagsVariants({
                        variant: tag.style as any,
                      })}
                      key={i}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <button
                  className="mt-3 text-sm font-medium bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white py-2 px-4 rounded-md transition-colors w-24"
                  onClick={() => handleModal(project.id)}
                >
                  Details
                </button>
                {showModal && project.id === projectId && (
                  <ProjectModal
                    project={project}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    parent="projects"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
