import Image from "next/image";
import React from "react";
import { skillLists } from "../../utils/data/skills";

const Skills = () => {
  const getExperience = (start: number) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear - start;
  };

  return (
    <div
      className="skills flex flex-col items-center py-12 bg-slate-50 dark:bg-[#080808]"
      id="skills"
    >
      <div className="flex flex-col items-center pb-4 border-b-2 border-slate-300 dark:border-slate-700 mb-10 w-full px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#040c2c] dark:text-slate-300 animate__animated animate__fadeInDown animate__faster">
            My Stack
          </h2>
          <p className="text-sm sm:text-lg font-sans text-slate-500 dark:text-slate-400 mt-1 text-center animate__animated animate__fadeIn" style={{ animationDelay: "0.2s" }}>
            Always open to learn new technologies and skills
          </p>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-4 sm:gap-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-4">
          {skillLists.map((item, index) => (
            <div
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/20 border-2 border-slate-200 dark:border-slate-700 rounded-full"
              key={index}
            >
                <div className="h-40 w-40">
                  <Image
                    height={250}
                    width={250}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-full"
                    src={`/images/skills/${item.logo}`}
                    alt={item.name}
                  />
                </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-full" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-sans leading-snug">
                  <span className="text-sm text-white font-bold">
                    {item.name}
                  </span>
                  <br />
                  <span className="text-xs text-slate-300 font-medium">
                    {item.level}
                  </span>
                  <br />
                  <span className="text-xs text-slate-400">
                    {getExperience(item.start)}y exp
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
