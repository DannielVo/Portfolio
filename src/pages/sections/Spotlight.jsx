import React from "react";
import { GITHUB_URL, LINKEDIN_URL } from "../../assets/assets";

const Spotlight = () => {
  return (
    <section
      id="home"
      className=" flex flex-col grow justify-center relative scroll-mt-24"
    >
      {/* Hiệu ứng nền */}
      <div className="absolute inset-0 z-0 pointer-events-none hero-pattern opacity-20"></div>
      <div className="absolute top-20 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[100px] pointer-events-none"></div>

      {/* Spotlight */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-start justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#232948] bg-[#1c2136] p-1.5 pr-5 shadow-lg shadow-black/10">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white animate-spin-once">
              <span className="material-symbols-outlined text-[20px">
                <i class="bxr  bx-code"></i>
              </span>
            </div>
            <span className="ml-3 text-sm font-medium tracking-wide text-white">
              Frontend Developer
            </span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6 leading-tight">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Danniel
            </span>
          </h1>
          <p className="mt-2 max-w-2xl text-lg leading-8 text-gray-400 mb-10">
            Passionate Frontend Developer with experience in React, focusing on
            building clean and responsive user interfaces, and currently
            expanding my skills toward full-stack development.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="group flex items-center justify-center gap-2.5 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-hover hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={GITHUB_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              className="group flex items-center justify-center gap-2.5 rounded-lg border border-gray-700 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
              href={LINKEDIN_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
