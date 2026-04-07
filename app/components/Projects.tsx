import React, { useState } from "react";
import { projectLists } from "../../utils/data/projects";
import { skillTagsVariants } from "./ui/SkillTags";
import ProjectModal from "./ui/ProjectModal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState<number>();

  const handleModal = (id: number) => {
    setShowModal(!showModal);
    setProjectId(id);
  };

  return (
    <div
      className="flex flex-col items-center py-12 bg-white dark:bg-[#111111]"
      id="portfolio"
    >
      <div className="flex flex-col items-center pb-4 border-b-2 border-slate-300 dark:border-slate-700 mb-8 w-full px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
            Projects
          </h2>
          <p className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400 mt-1 animate__animated animate__fadeIn" style={{ animationDelay: "0.2s" }}>
            Some of my personal works
          </p>
      </div>

      <div className="p-5 w-full max-w-5xl">
        <div className="grid mb-8 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm md:mb-12 md:grid-cols-2">
          {projectLists.map((project, index) => (
            <div
              className="flex flex-col p-8 justify-center items-center bg-white dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700 md:border-r last:border-b-0 md:last:border-b md:even:border-r-0 relative overflow-hidden"
              key={index}
            >
              {project.type === "Open Source" && (
                <div className="absolute top-0 right-0 w-44 h-5 mt-5 transform bg-rose-700 dark:bg-rose-800 text-white text-xs whitespace-no-wrap px-4 border-0 rounded rotate-[15deg] opacity-80 text-center font-semibold">
                  Open Source
                </div>
              )}

              <h2 className="z-10 text-base font-bold text-slate-800 dark:text-slate-100 font-sans text-center">
                {project.name}
              </h2>
              <p className="pt-1 z-10 text-sm font-sans leading-relaxed text-slate-600 dark:text-slate-300 text-center">
                {project.details}
              </p>
              <div className="p-1 flex flex-wrap justify-center gap-1 mt-1">
                {project.techTags.map((tag, index) => (
                  <span
                    className={skillTagsVariants({
                      variant: tag.style,
                    })}
                    key={index}
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
      </div>
    </div>
  );
};

export default Projects;
