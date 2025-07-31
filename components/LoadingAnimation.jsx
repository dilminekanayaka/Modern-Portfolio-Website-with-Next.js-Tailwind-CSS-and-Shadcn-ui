"use client";

import { motion } from "framer-motion";

const LoadingAnimation = () => {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const dotVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 1],
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="h-3 w-3 rounded-full bg-accent"
            variants={dotVariants}
            custom={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
