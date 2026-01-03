import React from "react";
import { assets } from "../../../assets/assets";

const About = () => {
  return (
    <div className="grow">
      {" "}
      <section className="relative py-20 lg:py-32 px-4 md:px-10">
        <div className="absolute inset-0 z-0 pointer-events-none hero-pattern opacity-20"></div>
        <div className="absolute top-20 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[100px] pointer-events-none"></div>
        {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/15 blur-[100px]"></div>
        </div> */}
        <div className="layout-content-container mx-auto flex max-w-[1000px] flex-col relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full border-4 border-[#232948] bg-[#111422] overflow-hidden shadow-2xl">
                <img
                  src={assets.avatar}
                  alt="Danniel Vo - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col text-center md:text-left justify-center">
              <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                <p>
                  Hello! I'm Danniel, a Frontend Developer and aspiring
                  Full-Stack developer with a strong focus on building scalable
                  and efficient web applications. I primarily work with React
                  and JavaScript, crafting clean, responsive, and user-friendly
                  interfaces. I’m passionate about continuous learning,
                  improving performance, and expanding my backend knowledge to
                  deliver complete, real-world web solutions.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a className="inline-flex items-center justify-center h-12 px-6 py-3.5 gap-2.5 cursor-pointer bg-primary hover:bg-hover active:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]">
                  <span className="material-symbols-outlined text-[1.25rem]">
                    article
                  </span>
                  <span>View my CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
