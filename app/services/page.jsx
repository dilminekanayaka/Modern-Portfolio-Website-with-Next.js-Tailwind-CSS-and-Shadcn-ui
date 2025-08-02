"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsArrowDownRight,
  BsCodeSlash,
  BsPalette,
  BsWordpress,
  BsBox,
  BsPhone,
  BsGear,
  BsGraphUp,
  BsShieldCheck,
  BsLightning,
  BsEye,
  BsStar,
} from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Front-End Development",
    icon: <BsCodeSlash className="text-2xl" />,
    description:
      "Modern, responsive web applications built with React, Next.js, and cutting-edge technologies. I create fast, accessible, and SEO-optimized websites that deliver exceptional user experiences.",
    features: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "SEO-Optimized",
      "HTML5",
      "JavaScript",
      "CSS3",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    href: "/work",
    color: "from-blue-500 to-cyan-500",
  },
  {
    num: "02",
    title: "UI/UX Design",
    icon: <BsPalette className="text-2xl" />,
    description:
      "User-centered design solutions that combine aesthetics with functionality. From wireframes to high-fidelity prototypes, I create intuitive interfaces that users love to interact with.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "User Testing",
      "Accessibility",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Principle",
      "Protopie",
    ],
    href: "/work",
    color: "from-purple-500 to-pink-500",
  },
  {
    num: "03",
    title: "Mobile App Development",
    icon: <BsPhone className="text-2xl" />,
    description:
      "Native and cross-platform mobile applications that provide seamless experiences across iOS and Android. Built with React Native and modern mobile development practices.",
    features: [
      "React Native",
      "Native Performance",
      "App Store Optimization",
      "Push Notifications",
      "Offline Support",
      "Analytics Integration",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Redux",
      "TypeScript",
      "Jest",
    ],
    href: "/work",
    color: "from-green-500 to-emerald-500",
  },
  {
    num: "04",
    title: "Backend Development",
    icon: <BsGear className="text-2xl" />,
    description:
      "Robust server-side solutions with scalable architectures. From REST APIs to GraphQL, I build secure and efficient backend systems that power modern applications.",
    features: [
      "Node.js & Express",
      "Database Design",
      "API Development",
      "Authentication",
      "Cloud Deployment",
      "Performance Monitoring",
    ],
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Docker",
    ],
    href: "/work",
    color: "from-orange-500 to-red-500",
  },
  {
    num: "05",
    title: "DevOps & Cloud",
    icon: <BsBox className="text-2xl" />,
    description:
      "Complete DevOps solutions including CI/CD pipelines, containerization, and cloud infrastructure. I help teams deploy faster and more reliably with modern DevOps practices.",
    features: [
      "CI/CD Pipelines",
      "Containerization",
      "Cloud Infrastructure",
      "Monitoring",
      "Security",
      "Automation",
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions",
      "Jenkins",
      "Terraform",
    ],
    href: "/work",
    color: "from-indigo-500 to-blue-500",
  },
  {
    num: "06",
    title: "Performance Optimization",
    icon: <BsLightning className="text-2xl" />,
    description:
      "Speed up your applications with comprehensive performance optimization. From frontend optimization to database tuning, I ensure your applications run at peak performance.",
    features: [
      "Frontend Optimization",
      "Database Tuning",
      "Caching Strategies",
      "CDN Implementation",
      "Bundle Optimization",
      "Performance Monitoring",
    ],
    technologies: [
      "Webpack",
      "Redis",
      "CDN",
      "Lighthouse",
      "Web Vitals",
      "Analytics",
    ],
    href: "/work",
    color: "from-yellow-500 to-orange-500",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="min-h-screen flex flex-col justify-center py-8 xl:py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="h1 mb-4">Services</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive development and design solutions tailored to your
            needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.6, ease: "easeIn" },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12"
        >
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                onClick={() =>
                  setSelectedService(selectedService === index ? null : index)
                }
                className="group cursor-pointer"
              >
                <div className="bg-[#1a1a1f] p-8 rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  {/* Top Section */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/80 group-hover:text-accent transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div className="text-2xl font-light text-white/40 group-hover:text-white/60 transition-colors duration-300">
                        {service.num}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: hoveredService === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-accent transition-all duration-300 flex justify-center items-center"
                    >
                      <BsArrowDownRight className="text-white/60 group-hover:text-black text-sm" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold leading-tight text-white group-hover:text-accent transition-colors duration-300 mb-4">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies
                        .slice(0, 4)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      {service.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">
                          +{service.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features - Show on hover or when selected */}
                  <AnimatePresence>
                    {(hoveredService === index ||
                      selectedService === index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-white/5 pt-4"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {service.features
                            .slice(0, 4)
                            .map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="text-white/40 text-xs flex items-center gap-2"
                              >
                                <div className="w-1 h-1 bg-accent rounded-full" />
                                {feature}
                              </motion.div>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
