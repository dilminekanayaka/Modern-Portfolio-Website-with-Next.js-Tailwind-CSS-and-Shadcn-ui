"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/assets/work/thumb1.png",
    github: "https://github.com/username/project1",
    live: "https://project1.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing my work and skills. Built with Next.js and Tailwind CSS for optimal performance.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/assets/work/thumb2.png",
    github: "https://github.com/username/project2",
    live: "https://project2.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Firebase", "Material-UI"],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/username/project3",
    live: "https://project3.com",
  },
];

const Work = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-8 xl:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="h1 mb-3">My Work</h1>
          <p className="text-white/70 text-base xl:text-lg max-w-[600px] mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each project
            represents my commitment to creating high-quality, user-friendly
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#232329] rounded-xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="aspect-video bg-[#1a1a1f] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
