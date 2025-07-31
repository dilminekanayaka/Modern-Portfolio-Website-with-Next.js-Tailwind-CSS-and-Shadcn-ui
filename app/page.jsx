"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    isActive: false,
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    isActive: false,
  },
  {
    id: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    isActive: true,
  },
  {
    id: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    isActive: false,
  },
];

export default function Home() {
  const handleDownloadCV = () => {
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Dilmin_Ekanayaka_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Introduction */}
            <div className="space-y-8">
              {/* Role */}
              <p className="text-gray-400 text-lg font-medium">
                Full Stack Developer
              </p>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white">
                  Hello I'm
                </h1>
                <h2 className="text-5xl lg:text-7xl font-bold text-accent">
                  Dilmin Ekanayaka
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                I excel at crafting elegant digital experiences and I am
                proficient in various programming languages and technologies.
              </p>

              {/* CTA Button and Social Links */}
              <div className="flex items-center gap-6">
                <Button
                  variant="accent"
                  size="lg"
                  className="px-8 py-3 text-lg font-medium"
                  onClick={handleDownloadCV}
                >
                  <Download className="mr-2 h-5 w-5" />
                  DOWNLOAD CV
                </Button>

                {/* Social Icons */}
                <div className="flex gap-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/dilminekanayaka",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/dilmin-ekanayaka",
                      label: "LinkedIn",
                    },
                  ].map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Profile Picture */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glowing dashed border */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, #00ff99 10deg, transparent 20deg, #00ff99 30deg, transparent 40deg, #00ff99 50deg, transparent 60deg, #00ff99 70deg, transparent 80deg, #00ff99 90deg, transparent 100deg, #00ff99 110deg, transparent 120deg, #00ff99 130deg, transparent 140deg, #00ff99 150deg, transparent 160deg, #00ff99 170deg, transparent 180deg, #00ff99 190deg, transparent 200deg, #00ff99 210deg, transparent 220deg, #00ff99 230deg, transparent 240deg, #00ff99 250deg, transparent 260deg, #00ff99 270deg, transparent 280deg, #00ff99 290deg, transparent 300deg, #00ff99 310deg, transparent 320deg, #00ff99 330deg, transparent 340deg, #00ff99 350deg, transparent 360deg)`,
                    filter: "drop-shadow(0 0 10px #00ff99)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Inner border for depth */}
                <div className="absolute inset-2 rounded-full bg-primary" />

                {/* Profile Image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                  <Image
                    src="/profile.png"
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
            </div>
          </div>

          {/* Bottom Section - Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-800">
            {[
              { number: "02", label: "Years of experience" },
              { number: "13", label: "Projects completed" },
              { number: "06", label: "Technologies mastered" },
              { number: "254", label: "Code commits" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I offer a comprehensive range of digital services to help bring
              your ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative p-8 rounded-lg border border-gray-800 hover:border-accent/50 transition-all duration-300 group bg-gray-900/50 backdrop-blur-sm"
              >
                {/* Service Number and Button */}
                <div className="flex items-start justify-between mb-6">
                  {/* Number - Outlined for inactive, filled for active */}
                  <div className="flex items-center">
                    {service.isActive ? (
                      // Active state - filled green number
                      <span className="text-4xl font-bold text-accent">
                        {service.id}
                      </span>
                    ) : (
                      // Inactive state - outlined white number
                      <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {service.id}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Circular Button */}
                  <button
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      service.isActive
                        ? "bg-accent text-white"
                        : "bg-white text-black"
                    }`}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>

                {/* Service Title */}
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    service.isActive ? "text-accent" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
