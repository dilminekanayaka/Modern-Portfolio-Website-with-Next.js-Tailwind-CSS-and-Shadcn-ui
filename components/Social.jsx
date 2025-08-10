"use client";

import { motion } from "framer-motion";

const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    {
      name: "GitHub",
      path: "https://github.com/dilminekanayaka",
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/dilmin-ekanayaka",
    },
    {
      name: "Behance",
      path: "https://www.behance.net/dilminekanayake",
    },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <motion.a
            key={index}
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconStyles} group relative overflow-hidden`}
            aria-label={social.name}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            {social.name === "GitHub" ? (
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            ) : social.name === "LinkedIn" ? (
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 3h18v18H3z" />
                <path d="M9 9h6v2H9z" />
                <path d="M9 13h6v2H9z" />
                <path d="M9 17h6v2H9z" />
                <path d="M15 5h2v4h-2z" />
              </svg>
            )}

            {/* Hover effect overlay */}
            <motion.div
              className="absolute inset-0 bg-white/10 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        );
      })}
    </div>
  );
};

export default Social;
