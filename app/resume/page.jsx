"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaCalendarAlt,
  FaUser,
  FaCode,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiGit,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// About data
const about = {
  title: "About me",
  info: [
    {
      icon: <FaUser />,
      fieldName: "Name",
      fieldValue: "Dilmin Ekanayaka",
    },
    {
      icon: <FaPhone />,
      fieldName: "Phone",
      fieldValue: "(+94) 77 133 8918",
    },
    {
      icon: <FaCalendarAlt />,
      fieldName: "Experience",
      fieldValue: "Undergraduate",
    },
    {
      icon: <FaLinkedin />,
      fieldName: "LinkedIn",
      fieldValue: "dilmin-ekanayaka",
      link: "https://www.linkedin.com/in/dilmin-ekanayaka",
    },
    {
      icon: <FaMapMarkerAlt />,
      fieldName: "Location",
      fieldValue: "Colombo, Sri Lanka",
    },
    {
      icon: <FaEnvelope />,
      fieldName: "Email",
      fieldValue: "pasindusupun461@gmail.com",
      link: "mailto:pasindusupun461@gmail.com",
    },
    {
      icon: <FaCode />,
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      icon: <FaGlobe />,
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ],
};

// Experience data
const experience = {
  title: "My Experience",
  items: [
    {
      company: "CINEC Campus",
      position: "Undergraduate Student",
      duration: "2023 - Present",
      description:
        "Currently pursuing a BSc (Hons) in Software Engineering. Developing skills in React, Next.js, Node.js, and cloud technologies through coursework and personal projects.",
    },
  ],
};

// Education data
const education = {
  title: "My Education",
  items: [
    {
      institution: "CINEC campus",
      degree: "Bsc (Hons) in Software Engineering",
      duration: "2023 - Present",
      description: "Undergraduate",
      gpa: "-",
      achievements: [
        "Head of Editer- TechStrike Club",
        "Volunteer - Leo Club",
        "Volunteer - IEEE",
      ],
    },
    {
      institution: "Sabaragamuwa University",
      degree: "Diploma in Software Engineering",
      duration: "2021 - 2022",
      description:
        "Gained strong knowledge in programming, databases, and software design through practical learning.",
      certifications: [
        "Python & OOP",
        "HTML5 & CSS",
        "DBMS",
        "System Analysis & Design",
        "Programming Design Techniques",
      ],
      projects: "Built 15+ full-stack applications",
    },
    {
      institution: "SITC campus",
      degree: "Diploma in Cyber Security and Ethical Hacking",
      duration: "2022 - 2023",
      description:
        "Learned the basics of cyber security with hands-on practice in finding and analyzing system vulnerabilities.",
      projects: "Built 5+ algorithmic projects",
      achievements: [
        "Information Gathering",
        "Vulnerability Scanning",
        "Social engineering basics",
        "Firewalls & IDS/IPS",
        "Metasploit Framework",
        "Networking basics (TCP/IP, OSI Model)",
      ],
    },
    {
      institution: "Wijaya Graphics - Sri Lanka",
      degree: "Advanced Diploma in Graphic Design",
      duration: "2019-2022",
      description:
        "Trained in creative design, video editing, and visual storytelling using Adobe Photoshop, Illustrator, Premiere Pro, and After Effects. Also learned the fundamentals of photography, product photography, and videography..",
      skills: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe After effects",
        "Adobe Premier Pro",
        "Adobe XD",
      ],
      achievements: [
        "Graphic Design Principles",
        "Product Photography",
        "Videography Basics",
      ],
    },
  ],
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const handleDownloadCV = () => {
    window.open("/assets/cv.pdf", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen py-8 xl:py-12"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center mb-0"
        ></motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 xl:gap-12">
            {/* Sidebar Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="xl:col-span-1"
            >
              <TabsList className="flex flex-col w-full bg-[#1a1a1f]/50 backdrop-blur-sm p-4 rounded-2xl border border-white/5 gap-2">
                <TabsTrigger
                  value="experience"
                  className="w-full justify-start text-left p-4 rounded-xl hover:bg-accent/10 transition-all"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-medium">Experience</span>
                  </motion.div>
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="w-full justify-start text-left p-4 rounded-xl hover:bg-accent/10 transition-all"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-medium">Education</span>
                  </motion.div>
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="w-full justify-start text-left p-4 rounded-xl hover:bg-accent/10 transition-all"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-medium">Skills</span>
                  </motion.div>
                </TabsTrigger>
                <TabsTrigger
                  value="about"
                  className="w-full justify-start text-left p-4 rounded-xl hover:bg-accent/10 transition-all"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-medium">About me</span>
                  </motion.div>
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="xl:col-span-3"
            >
              <AnimatePresence mode="wait">
                {/* Experience */}
                <TabsContent
                  key="experience"
                  value="experience"
                  className="w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="text-center xl:text-left">
                      <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4">
                        {experience.title}
                      </h2>
                      <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
                        {experience.description}
                      </p>
                    </div>

                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-6">
                        {experience.items.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -2 }}
                            className="bg-[#1a1a1f]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                          >
                            <div className="space-y-4">
                              <div className="flex justify-between items-start">
                                <span className="text-accent font-semibold text-sm bg-accent/10 px-3 py-1 rounded-full">
                                  {item.duration}
                                </span>
                                <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                              </div>

                              <div>
                                <h3 className="text-xl xl:text-2xl font-semibold text-white group-hover:text-accent transition-colors mb-2">
                                  {item.position}
                                </h3>
                                <p className="text-white/80 font-medium text-lg">
                                  {item.company}
                                </p>
                              </div>

                              {item.description && (
                                <p className="text-white/60 text-base leading-relaxed">
                                  {item.description}
                                </p>
                              )}

                              {item.technologies && (
                                <div className="flex flex-wrap gap-2">
                                  {item.technologies.map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {item.achievements && (
                                <div className="space-y-3">
                                  <p className="text-white/80 text-sm font-medium">
                                    Key Achievements:
                                  </p>
                                  <ul className="space-y-2">
                                    {item.achievements.map(
                                      (achievement, achIndex) => (
                                        <li
                                          key={achIndex}
                                          className="text-white/60 text-sm flex items-center gap-3"
                                        >
                                          <FaStar className="text-accent text-xs flex-shrink-0" />
                                          <span>{achievement}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </motion.div>
                </TabsContent>

                {/* Education */}
                <TabsContent
                  key="education"
                  value="education"
                  className="w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="text-center xl:text-left">
                      <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4">
                        {education.title}
                      </h2>
                      <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
                        {education.description}
                      </p>
                    </div>

                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-6">
                        {education.items.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -2 }}
                            className="bg-[#1a1a1f]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                          >
                            <div className="space-y-4">
                              <div className="flex justify-between items-start">
                                <span className="text-accent font-semibold text-sm bg-accent/10 px-3 py-1 rounded-full">
                                  {item.duration}
                                </span>
                                <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                              </div>

                              <div>
                                <h3 className="text-xl xl:text-2xl font-semibold text-white group-hover:text-accent transition-colors mb-2">
                                  {item.degree}
                                </h3>
                                <p className="text-white/80 font-medium text-lg">
                                  {item.institution}
                                </p>
                              </div>

                              {item.description && (
                                <p className="text-white/60 text-base leading-relaxed">
                                  {item.description}
                                </p>
                              )}

                              {item.gpa && (
                                <p className="text-accent text-base font-medium bg-accent/10 px-3 py-1 rounded-full inline-block">
                                  GPA: {item.gpa}
                                </p>
                              )}

                              {item.certifications && (
                                <div className="flex flex-wrap gap-2">
                                  {item.certifications.map(
                                    (cert, certIndex) => (
                                      <span
                                        key={certIndex}
                                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                                      >
                                        {cert}
                                      </span>
                                    )
                                  )}
                                </div>
                              )}

                              {item.achievements && (
                                <div className="space-y-3">
                                  <p className="text-white/80 text-sm font-medium">
                                    Achievements:
                                  </p>
                                  <ul className="space-y-2">
                                    {item.achievements.map(
                                      (achievement, achIndex) => (
                                        <li
                                          key={achIndex}
                                          className="text-white/60 text-sm flex items-center gap-3"
                                        >
                                          <FaStar className="text-accent text-xs flex-shrink-0" />
                                          <span>{achievement}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </motion.div>
                </TabsContent>

                {/* Skills */}
                <TabsContent key="skills" value="skills" className="w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="text-center xl:text-left">
                      <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4">
                        My Skills
                      </h2>
                      <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
                        A comprehensive collection of technologies and tools I
                        use to build modern, scalable web applications.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#E34F26" }}
                          >
                            <FaHtml5 />
                          </div>
                          <p className="font-medium text-sm text-center">
                            HTML5
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#1572B6" }}
                          >
                            <FaCss3 />
                          </div>
                          <p className="font-medium text-sm text-center">
                            CSS3
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#F7DF1E" }}
                          >
                            <FaJs />
                          </div>
                          <p className="font-medium text-sm text-center">
                            JavaScript
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#61DAFB" }}
                          >
                            <FaReact />
                          </div>
                          <p className="font-medium text-sm text-center">
                            React.js
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#000000" }}
                          >
                            <SiNextdotjs />
                          </div>
                          <p className="font-medium text-sm text-center">
                            Next.js
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#06B6D4" }}
                          >
                            <SiTailwindcss />
                          </div>
                          <p className="font-medium text-sm text-center">
                            Tailwind CSS
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#339933" }}
                          >
                            <FaNodeJs />
                          </div>
                          <p className="font-medium text-sm text-center">
                            Node.js
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#47A248" }}
                          >
                            <SiMongodb />
                          </div>
                          <p className="font-medium text-sm text-center">
                            MongoDB
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#F05032" }}
                          >
                            <SiGit />
                          </div>
                          <p className="font-medium text-sm text-center">Git</p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#181717" }}
                          >
                            <FaGithub />
                          </div>
                          <p className="font-medium text-sm text-center">
                            GitHub
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#F24E1E" }}
                          >
                            <FaFigma />
                          </div>
                          <p className="font-medium text-sm text-center">
                            Figma
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className="text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300"
                            style={{ color: "#3178C6" }}
                          >
                            <SiTypescript />
                          </div>
                          <p className="font-medium text-sm text-center">
                            TypeScript
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </TabsContent>

                {/* About me */}
                <TabsContent key="about" value="about" className="w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="text-center xl:text-left">
                      <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4">
                        {about.title}
                      </h2>
                      <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
                        {about.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {about.info.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          whileHover={{ x: 5 }}
                          className="bg-[#1a1a1f]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="text-accent text-xl group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-white/40 text-sm mb-1">
                                {item.fieldName}
                              </p>
                              {item.link ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white font-medium hover:text-accent transition-colors flex items-center gap-2"
                                >
                                  {item.fieldValue}
                                  <FaExternalLinkAlt className="text-xs" />
                                </a>
                              ) : (
                                <p className="text-white font-medium">
                                  {item.fieldValue}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </motion.div>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
