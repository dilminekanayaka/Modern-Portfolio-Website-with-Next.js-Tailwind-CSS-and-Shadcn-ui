"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../lib/emailjs-config";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaCheck,
  FaExclamationTriangle,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Consulting",
    "Other",
  ];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if EmailJS is properly configured
    if (
      !EMAILJS_CONFIG.TEMPLATE_ID ||
      EMAILJS_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID"
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      console.error("EmailJS not configured: Missing TEMPLATE_ID");
      return;
    }

    if (
      !EMAILJS_CONFIG.PUBLIC_KEY ||
      EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      console.error("EmailJS not configured: Missing PUBLIC_KEY");
      return;
    }

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        from_phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: "Pasindu", // Your name
      };

      console.log("Sending email with config:", {
        serviceId: EMAILJS_CONFIG.SERVICE_ID,
        templateId: EMAILJS_CONFIG.TEMPLATE_ID,
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY
          ? "***" + EMAILJS_CONFIG.PUBLIC_KEY.slice(-4)
          : "NOT SET",
      });

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setSelectedService("");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      console.error("Error details:", {
        message: error.message,
        text: error.text,
        status: error.status,
        config: EMAILJS_CONFIG,
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen py-4 xl:py-8 2xl:py-12 mt-8"
    >
      <div className="container mx-auto mt-4 px-4 max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center mb-8 xl:mb-12 -mt-24"
        ></motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="xl:col-span-1 space-y-6 order-2 xl:order-1"
          >
            <div className="bg-[#1a1a1f]/50 backdrop-blur-sm p-4 sm:p-6 xl:p-8 rounded-2xl border border-white/5">
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
            className="xl:col-span-2 order-1 xl:order-2"
          >
            <div className="bg-[#1a1a1f]/50 backdrop-blur-sm p-4 sm:p-6 xl:p-12 rounded-2xl border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 cursor-pointer"
                    onClick={resetStatus}
                  >
                    <FaCheck className="text-green-400" />
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 cursor-pointer"
                    onClick={resetStatus}
                  >
                    <FaExclamationTriangle className="text-red-400" />
                    <span>
                      {!EMAILJS_CONFIG.TEMPLATE_ID ||
                      EMAILJS_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
                      !EMAILJS_CONFIG.PUBLIC_KEY ||
                      EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY"
                        ? "EmailJS not configured. Please check the setup guide."
                        : "Failed to send message. Please try again."}
                    </span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl ${
                    isSubmitting
                      ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                      : "bg-accent text-black hover:bg-accent/90"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
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
