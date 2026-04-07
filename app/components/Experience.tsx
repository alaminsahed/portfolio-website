"use client";
import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { totalExperience } from "@/utils/data/experience";
import { skillTagsVariants } from "./ui/SkillTags";
import Modal from "./ui/ProjectModal";

const Experience = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState("");

  const handleModal = (id: string) => {
    setShowModal(!showModal);
    setProjectId(id);
  };

  return (
    <div id="experience" className="">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl p-3 font-bold text-[#040c2c] dark:text-slate-400 border-b-4 border-double">
          <Zoom cascade duration={2000}>
            Experience
          </Zoom>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 sm:divide-x-4 p-5 sm:divide-lime-300">
        {totalExperience.map((experience, index) => (
          <div className="p-3" key={experience.id}>
            <LightSpeed left delay={experience.animationDelay}>
              <div className="shadow-2xl rounded-lg p-6 dark:bg-gray-900">
                <h3 className="text-xl sm:text-2xl font-bold text-rose-400">
                  {experience.title} ({experience.area})
                </h3>
                <h4 className=" text-base sm:text-lg font-semibold">
                  <Link href={experience.company_url}>
                    {experience.company}
                  </Link>
                </h4>
                <h5>{experience.duration}</h5>
                <small>
                  <b>Technical Stack:</b> {experience.stacks}
                </small>
              </div>
            </LightSpeed>
            <div className="pt-5">
              <h4 className="text-xl font-semibold">Project Lists:</h4>
              {experience.projects.map((project, index) => (
                <div key={project.id}>
                  <Bounce
                    cascade
                    duration={project.animationDuration}
                    delay={project.animationDelay}
                  >
                    <div className="p-4 rounded-lg mt-3 flex flex-col bg-gray-300 dark:bg-gray-800">
                      <div className="text-base text-slate-600 dark:text-gray-400">
                        {project.live_url ? (
                          <Link
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-semibold text-blue-900 dark:text-white"
                          >
                            {project.name}
                          </Link>
                        ) : (
                          <span className="text-base font-semibold text-blue-900 dark:text-white">
                            {project.name}
                          </span>
                        )}
                        <div>
                          <small className="text-xs">
                            {project.description}
                          </small>
                        </div>
                        <div className="pt-2">
                          {project.stacks.map((tag, index) => (
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
                      </div>
                      <button
                        className="text-sm p-1 bg-blue-900 hover:bg-white text-white hover:text-black sm:font-bold md:py-2 md:px-4 rounded mt-2 h-10 w-20"
                        onClick={() => handleModal(project.id)}
                      >
                        Details
                      </button>
                    </div>
                  </Bounce>
                  {showModal && project.id === projectId && (
                    <Modal
                      showModal={showModal}
                      setShowModal={setShowModal}
                      project={project}
                      parent="experience"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
