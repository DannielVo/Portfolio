import { motion, useReducedMotion } from "motion/react";
import { fadeUp } from "./variants";

const Reveal = ({ children, className = "", delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
