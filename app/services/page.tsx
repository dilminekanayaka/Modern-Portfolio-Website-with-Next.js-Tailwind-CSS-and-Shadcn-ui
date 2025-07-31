"use client";

import { ChevronDown } from "lucide-react";

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

export default function Services() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
            Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of digital services to help bring your
            ideas to life
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
    </main>
  );
}
