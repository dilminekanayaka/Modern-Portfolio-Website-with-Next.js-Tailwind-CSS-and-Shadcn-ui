"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on route change
    setIsVisible(true);

    // Hide after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isVisible && (
        <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-50">
          {/* Background overlay */}
          <motion.div
            className="absolute inset-0 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <Stairs />
        </div>
      )}
    </>
  );
};

export default StairTransition;
