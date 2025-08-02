"use client";

import { motion } from "framer-motion";

const Stairs = () => {
  const stairCount = 6;

  return (
    <div className="h-full w-full flex">
      {[...Array(stairCount)].map((_, index) => {
        const delay = (stairCount - 1 - index) * 0.08;

        return (
          <motion.div
            key={index}
            className="h-full w-1/6 bg-white relative"
            initial={{ top: "-100%" }}
            animate={{ top: "0%" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: delay,
            }}
            style={{ zIndex: stairCount - index }}
          />
        );
      })}
    </div>
  );
};

export default Stairs;
