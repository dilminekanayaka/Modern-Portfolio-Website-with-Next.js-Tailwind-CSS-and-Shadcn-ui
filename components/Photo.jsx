"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="relative">
      {/* Glowing dashed border */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, #00ff99 10deg, transparent 20deg, #00ff99 30deg, transparent 40deg, #00ff99 50deg, transparent 60deg, #00ff99 70deg, transparent 80deg, #00ff99 90deg, transparent 100deg, #00ff99 110deg, transparent 120deg, #00ff99 130deg, transparent 140deg, #00ff99 150deg, transparent 160deg, #00ff99 170deg, transparent 180deg, #00ff99 190deg, transparent 200deg, #00ff99 210deg, transparent 220deg, #00ff99 230deg, transparent 240deg, #00ff99 250deg, transparent 260deg, #00ff99 270deg, transparent 280deg, #00ff99 290deg, transparent 300deg, #00ff99 310deg, transparent 320deg, #00ff99 330deg, transparent 340deg, #00ff99 350deg, transparent 360deg)`,
          filter: "drop-shadow(0 0 10px #00ff99)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner border for depth */}
      <div className="absolute inset-2 rounded-full bg-primary" />

      {/* Profile Image */}
      <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
        <Image
          src="/assets/profile.png"
          alt="Dilmin Ekanayaka - Full Stack Developer"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          priority
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback placeholder */}
        <div
          className="w-full h-full rounded-full overflow-hidden bg-primary flex items-center justify-center"
          style={{ display: "none" }}
        >
          <div className="text-center text-gray-400">
            <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
            <p className="text-sm">Profile Image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
