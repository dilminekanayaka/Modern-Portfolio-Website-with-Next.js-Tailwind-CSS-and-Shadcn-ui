"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Consulting",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setIsServiceOpen(false);
    setFormData((prev) => ({
      ...prev,
      service: service,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen py-8 xl:py-12 -mt-16"
    >
      <div className="container mx-auto  -mt-8 px-4 max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center mb-12"
        ></motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="xl:col-span-1 space-y-6"
          >
            <div className="bg-[#1a1a1f]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Get in touch
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="text-accent text-xl mt-1 group-hover:scale-110 transition-transform">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Phone</p>
                    <p className="text-white font-medium">(+94) 77 133 8918</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="text-accent text-xl mt-1 group-hover:scale-110 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Email</p>
                    <a
                      href="mailto:dilmin@example.com"
                      className="text-white font-medium hover:text-accent transition-colors"
                    >
                      pasindusupun461@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="text-accent text-xl mt-1 group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Location</p>
                    <p className="text-white font-medium">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="xl:col-span-2"
          >
            <div className="bg-[#1a1a1f]/50 backdrop-blur-sm p-8 xl:p-12 rounded-2xl border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="w-full px-4 py-3 bg-[#232329]/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="w-full px-4 py-3 bg-[#232329]/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address"
                      className="w-full px-4 py-3 bg-[#232329]/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="w-full px-4 py-3 bg-[#232329]/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                    className="w-full px-4 py-3 bg-[#232329]/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all flex items-center justify-between"
                  >
                    <span
                      className={
                        selectedService ? "text-white" : "text-white/40"
                      }
                    >
                      {selectedService || "Select a service"}
                    </span>
                    <FaChevronDown
                      className={`text-white/40 transition-transform ${
                        isServiceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isServiceOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-[#232329] border border-white/10 rounded-xl z-10 shadow-xl"
                    >
                      {services.map((service, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleServiceSelect(service)}
                          className="w-full px-4 py-3 text-left text-white hover:bg-accent/20 transition-colors first:rounded-t-xl last:rounded-b-xl"
                        >
                          {service}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-4 py-3 bg-[#232329]/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent text-black px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
                >
                  Send message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
