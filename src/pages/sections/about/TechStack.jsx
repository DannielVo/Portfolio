import { motion, useReducedMotion } from "motion/react";
import { fadeUp, staggerContainer } from "../../../animations/variants";
import { techStack } from "../../../assets/dummy";

const TechStack = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grow flex flex-col justify-start pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-300 mx-auto w-full">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Tech Stack
          </h1>
        </motion.div>

        <div className="flex flex-col gap-8">
          {techStack.map((section) => (
            <motion.div
              key={`tech-stack-section${section.title}`}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="group bg-transparent rounded-2xl p-6 md:p-8 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-23">
                <div className="md:w-32 shrink-0 flex items-start pt-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-text-secondary uppercase tracking-wide">
                    {section.title}
                  </h2>
                </div>
                <motion.div
                  variants={staggerContainer}
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="flex-1 flex flex-wrap gap-4"
                >
                  {section.items.map((item) => (
                    <motion.div
                      key={`tech-stack-item${item.name}`}
                      variants={shouldReduceMotion ? undefined : fadeUp}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item"
                    >
                      <img
                        alt={`${item.name} Logo`}
                        className="size-9 md:size-10"
                        src={item.logo}
                      />

                      <span className="text-xl md:text-3xl font-medium text-gray-200 group-hover/item:text-white">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
