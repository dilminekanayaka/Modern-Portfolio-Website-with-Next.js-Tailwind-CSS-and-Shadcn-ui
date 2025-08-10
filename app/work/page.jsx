"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Bite.-Restaurant Management System",
    description:
      "A modern and fully functional restaurant management system built with HTML, CSS, JavaScript, and PHP. Features an interactive admin dashboard with full CRUD operations, all connected to a MySQL database via phpMyAdmin",
    technologies: ["HTML", "CSS", "JavaScript", "Php", " MySQL"],
    image: "/assets/work/work1.png",
    github: "https://github.com/dilminekanayaka/Restaurant-Management-System",
    live: "#",
  },
  {
    title: "SereneTripsLK-Travel Management System",
    description:
      "A travel booking website for Sri Lanka, offering curated tour packages with a booking system. Built with HTML, CSS, JavaScript, and PHP, and fully connected to a MySQL database via phpMyAdmin. Includes a complete admin dashboard for managing packages and bookings.",
    technologies: ["HTML", "CSS", "JavaScript", "Php", "MySQL"],
    image: "/assets/work/work2.png",
    github: "https://github.com/dilminekanayaka/SereneTripsLK",
    live: "#",
  },
  {
    title: "Crown Glory Hair Salon Website",
    description:
      "A modern, feminine salon website for natural hair care services, built with React and Tailwind CSS. Customers can browse services and book appointments online, while admins receive real-time notifications for new bookings.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    image: "/assets/work/work3.png",
    github:
      "https://github.com/dilminekanayaka/crown-glory-hair-salon-website-react-tailwindcss",
    live: "#",
  },
  {
    title: "Ocean Breeze Resort - Hotel Management System",
    description:
      "A Java-based desktop application for managing hotel operations at Ocean Breeze Resort. Features include customer management, room booking, employee records, department tracking, and service updates, all connected to a MySQL database.",
    technologies: ["Java", "Swing", "MySQL"],
    image: "/assets/work/work4.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Python Buddy - Interactive Learning Assistant",
    description:
      "A Python-based chatbot designed to teach Python programming from basics to advanced. Includes lessons, exercises, code examples, a progress tracker, and a Python cheat sheet for quick reference.",
    technologies: ["Python", "Tkinter", "SQLite"],
    image: "/assets/work/work5.png",
    github: "#",
    live: "#",
  },
  {
    title: "Byte Buddy - AI Chatbot",
    description:
      "A web-based AI chatbot built with HTML, CSS, and JavaScript using the free Cohere API. Works like ChatGPT, allowing users to ask questions and receive instant responses on any topic.",
    technologies: ["HTML", "CSS", "JavaScript", "Cohere API"],
    image: "/assets/work/work6.png",
    github: "#",
    live: "#",
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
            Here are some of the projects I've worked on.
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
