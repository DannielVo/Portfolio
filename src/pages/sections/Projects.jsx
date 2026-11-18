import { useCallback, useState } from "react";
import { projectsData } from "../../assets/dummy";
import ProjectCard from "../../components/ProjectCard";
import ProjectDetailsModal from "../../components/ProjectDetailsModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section
      id="projects"
      className="grow w-full max-w-300 mx-auto px-4 sm:px-8 py-12 scroll-mt-24"
    >
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold">
          My Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={`projectCard-${project.id}`}
            image={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
            demoUrl={project.demoUrl}
            onViewDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
