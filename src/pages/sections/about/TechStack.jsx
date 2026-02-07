import React from "react";
import { assets } from "../../../assets/assets";
import { techStack } from "../../../assets/dummy";

const TechStack = () => {
  return (
    <div className="grow flex flex-col justify-start pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Tech Stack
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          {techStack.map((section) => (
            <div
              key={`tech-stack-section${section.title}`}
              className="group bg-transparent rounded-2xl p-6 md:p-8 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-32 shrink-0 flex items-start pt-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                    {section.title}
                  </h2>
                </div>
                <div className="flex-1 flex flex-wrap gap-4">
                  {section.items.map((item) => (
                    <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                      <img
                        alt={`${item.logo} Logo`}
                        className="size-8 md:size-9"
                        data-alt="HTML5 orange shield logo"
                        src={item.logo}
                      />
                      <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
