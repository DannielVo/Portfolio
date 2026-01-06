import React from "react";
import { assets } from "../../../assets/assets";

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
          <div className="group bg-transparent rounded-2xl p-6 md:p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-32 flex-shrink-0 flex items-start pt-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  Frontend
                </h2>
              </div>
              <div className="flex-1 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="HTML5 Logo"
                    className="size-8 md:size-9"
                    data-alt="HTML5 orange shield logo"
                    src={assets.html_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    HTML
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="CSS3 Logo"
                    className="size-8 md:size-9"
                    data-alt="CSS3 blue shield logo"
                    src={assets.css_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    CSS
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="JavaScript Logo"
                    className="size-8 md:size-9 rounded-sm"
                    data-alt="JavaScript yellow square logo"
                    src={assets.javascript_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    JavaScript
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="React Logo"
                    className="size-8 md:size-9"
                    data-alt="React blue atom logo"
                    src={assets.react_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    React
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="Tailwind Logo"
                    className="size-8 md:size-9"
                    data-alt="Tailwind CSS teal waves logo"
                    src={assets.tailwind_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="Bootstrap Logo"
                    className="size-8 md:size-9"
                    data-alt="Bootstrap purple B logo"
                    src={assets.bootstrap_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    Bootstrap
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="group bg-transparent rounded-2xl p-6 md:p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-32 flex-shrink-0 flex items-start pt-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  Backend
                </h2>
              </div>
              <div className="flex-1 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="Node.js Logo"
                    className="size-8 md:size-9"
                    data-alt="Node.js green hexagon logo"
                    src={assets.nodejs_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    Node.js
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="Express.js Logo"
                    className="size-8 md:size-9 rounded-sm"
                    src={assets.express_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    Express.js
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="FastAPI Logo"
                    className="size-8 md:size-9"
                    src={assets.fastapi_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    FastAPI
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="group bg-transparent rounded-2xl p-6 md:p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-32 flex-shrink-0 flex items-start pt-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  Database
                </h2>
              </div>
              <div className="flex-1 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="PostgreSQL Logo"
                    className="size-8 md:size-9"
                    data-alt="PostgreSQL blue elephant logo"
                    src={assets.postgres_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
                  <img
                    alt="MongoDB Logo"
                    className="size-8 md:size-9"
                    data-alt="MongoDB green leaf logo"
                    src={assets.mongodb_logo}
                  />
                  <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
