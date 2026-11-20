import { useCallback, useState } from "react";
import { projectsData } from "../../assets/dummy";
import ProjectCard from "../../components/ProjectCard";
import ProjectDetailsModal from "../../components/ProjectDetailsModal";
import { motion, useReducedMotion } from "motion/react";
import { fadeUp, staggerContainer } from "../../animations/variants";

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section
      id="projects"
      className="grow w-full max-w-300 mx-auto px-4 sm:px-8 py-12 scroll-mt-24"
    >
      <motion.div
        variants={fadeUp}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center mb-10"
      >
        <h2 className="text-white text-4xl md:text-5xl font-extrabold">
          My Projects
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={shouldReduceMotion ? undefined : fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ProjectCard
              key={`projectCard-${project.id}`}
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
              demoUrl={project.demoUrl}
              onViewDetails={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
