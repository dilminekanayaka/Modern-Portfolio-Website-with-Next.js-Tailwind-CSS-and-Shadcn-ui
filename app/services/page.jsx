"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with seamless front-end and back-end integration. I build scalable, secure, and user-friendly solutions.",
    technologies: ["React / Next.js", "Node.js", "MySQL", "MongoDB"],
    href: "/services/fullstack",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Modern, user-friendly designs that focus on smooth navigation and great experiences. From wireframes to final prototypes.",
    technologies: ["Figma"],
    href: "/services/ui-ux",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Robust and secure server-side applications with APIs, authentication, and integrations.",
    technologies: ["Node.js", "Python (Django)"],
    href: "/services/backend",
  },
  {
    num: "04",
    title: "Database Design & Management",
    description:
      "Efficient, reliable databases to power your applications with optimized queries and secure storage.",
    technologies: ["MySQL", "MongoDB"],
    href: "/services/database",
  },
  {
    num: "05",
    title: "Automation & Testing",
    description:
      "Ensure software quality with automated testing and CI/CD pipelines for smooth deployments.",
    technologies: ["Selenium", "GitHub Actions (CI/CD)", "Jmeter"],
    href: "/services/automation",
  },
  {
    num: "06",
    title: "WordPress Development",
    description:
      "Custom WordPress websites, themes, and plugins for businesses, blogs, and e-commerce.",
    technologies: ["WordPress CMS", "Elementor", "WooCommerce"],
    href: "/services/wordpress",
  },
];

const Services = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.7, ease: "easeOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 -mt-20"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#121212] rounded-2xl p-8 hover:bg-[#1e1e1e] transition-all shadow-xl hover:shadow-2xl border border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-black text-white/10 group-hover:text-accent transition-colors duration-300">
                  {service.num}
                </span>

                {service.href ? (
                  <div
                    href={service.href}
                    className="w-[48px] h-[48px] rounded-full bg-white flex justify-center items-center transition-all duration-300 group-hover:bg-accent hover:rotate-[-45deg]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </div>
                ) : (
                  <div className="w-[48px] h-[48px] rounded-full bg-white/10 flex justify-center items-center opacity-40">
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed text-sm mb-4">
                {service.description}
              </p>

              {/* Technologies */}
              {service.technologies && (
                <div className="mb-4">
                  <p className="text-white/50 text-xs mb-2 font-medium">
                    Tech I use:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Divider */}
              <div className="mt-6 border-t border-white/10 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
