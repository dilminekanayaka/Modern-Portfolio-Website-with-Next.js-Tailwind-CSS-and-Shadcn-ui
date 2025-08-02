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
      className="min-h-screen flex items-center justify-center py-10 xl:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[#232329] p-8 xl:p-12 rounded-xl border border-white/10 mb-16"
          >
            <div className="mb-8">
              <h1 className="text-3xl xl:text-4xl font-bold text-accent mb-3">
                Let's work together
              </h1>
              <p className="text-white/60 text-base xl:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt sit illo esse commodi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Firstname"
                    className="w-full px-4 py-3 bg-[#1a1a1f] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent/50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Lastname"
                    className="w-full px-4 py-3 bg-[#1a1a1f] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent/50 transition-colors"
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
                    className="w-full px-4 py-3 bg-[#1a1a1f] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent/50 transition-colors"
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
                    className="w-full px-4 py-3 bg-[#1a1a1f] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent/50 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                  className="w-full px-4 py-3 bg-[#1a1a1f] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent/50 transition-colors flex items-center justify-between"
                >
                  <span
                    className={selectedService ? "text-white" : "text-white/40"}
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
                    className="absolute top-full left-0 right-0 mt-1 bg-[#1a1a1f] border border-white/10 rounded-lg z-10"
                  >
                    {services.map((service, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleServiceSelect(service)}
                        className="w-full px-4 py-3 text-left text-white hover:bg-accent/20 transition-colors first:rounded-t-lg last:rounded-b-lg"
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
                  placeholder="Type your message here."
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1a1a1f] border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-black px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Send message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-[#232329] p-6 rounded-xl border border-white/10 flex items-start gap-4"
            >
              <div className="text-accent text-xl xl:text-2xl mt-1">
                <FaPhone />
              </div>
              <div>
                <p className="text-white/60 text-xs xl:text-sm mb-1">Phone</p>
                <p className="text-white font-medium text-sm xl:text-base">
                  (+94) 77 133 8918
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-[#232329] p-6 rounded-xl border border-white/10 flex items-start gap-4"
            >
              <div className="text-accent text-xl xl:text-2xl mt-1">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-white/60 text-xs xl:text-sm mb-1">Email</p>
                <p className="text-white font-medium text-sm xl:text-base">
                  pasindusupun461@email.com
                </p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="bg-[#232329] p-6 rounded-xl border border-white/10 flex items-start gap-4"
            >
              <div className="text-accent text-xl xl:text-2xl mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-white/60 text-xs xl:text-sm mb-1">Address</p>
                <p className="text-white font-medium text-sm xl:text-base">
                  Bandarawela, Sri Lanka
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
