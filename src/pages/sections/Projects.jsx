import React from "react";
import { assets } from "../../assets/assets";
import { projectsData } from "../../assets/dummy";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="grow w-full max-w-300 mx-auto px-4 sm:px-8 py-12 scroll-mt-24"
    >
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-white text-4xl font-extrabold leading-tight tracking-[-0.015em]">
          Featured Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={`projectCard-${project.id}`}
            image={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
