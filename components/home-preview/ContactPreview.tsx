"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("Cpn322BDQ9EFLPqiq");

export default function ContactPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        "service_7syzf8p", // Your Service ID
        "template_siau848", // Your Template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          // UPDATED HERE: Now sending to Imran
          to_email: "Noohsiddique514@gmail.com",
          reply_to: formData.email,
        },
        "Cpn322BDQ9EFLPqiq" // Your Public Key
      );

      console.log("Email sent successfully:", result);
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Email sending failed:", error);
      console.error("Error details:", {
        text: error.text,
        status: error.status,
        message: error.message,
      });
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MINIMAL HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
            <span className="text-xs lg:text-sm font-bold text-orange-500 tracking-widest uppercase font-heading">
              Contact
            </span>
            <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight font-heading mb-6">
            Start Your <span className="text-orange-500">Project</span>
          </h2>

          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-6"></div>

          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto font-sans">
            Ready to bring your vision to life? Let's discuss your project.
          </p>
        </motion.div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            ✅ Message sent successfully! We'll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            ❌ Failed to send message. Please try again or contact us directly.
          </div>
        )}

        {/* CLEAN 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT - MINIMAL CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 font-heading">
                Get In Touch
              </h3>

              {/* MINIMAL CONTACT ITEMS */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "Noohsiddique514@gmail.com",
                    description: "Send us your project details",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "0301-0505015",
                    description: "Direct consultation",
                  },
                  {
                    icon: MapPin,
                    title: "Studio",
                    value: "Peshawar Office",
                    description: "3rd floor, Uhad tower, Phase 3 chowk, Peshawar",
                  },
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="w-10 h-10 bg-orange-500 rounded-none flex items-center justify-center flex-shrink-0"
                      >
                        <Icon size={18} className="text-white" />
                      </motion.div>
                      <div>
                        <p className="text-black font-semibold font-heading uppercase text-sm tracking-wide">
                          {contact.title}
                        </p>
                        <p className="text-orange-500 font-medium font-sans">
                          {contact.value}
                        </p>
                        <p className="text-gray-500 text-sm font-sans mt-1">
                          {contact.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT - PROFESSIONAL FORM WITH ALL FIELDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-black placeholder-gray-500 font-sans transition-all duration-300"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-black placeholder-gray-500 font-sans transition-all duration-300"
                  />
                </motion.div>
              </div>

              {/* Email */}
              <motion.div whileFocus={{ scale: 1.02 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-black placeholder-gray-500 font-sans transition-all duration-300"
                />
              </motion.div>

              {/* Phone & Subject - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-orange-500 text-black placeholder-gray-500 font-sans transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-orange-500 text-black placeholder-gray-500 font-sans transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project... *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-orange-500 text-black placeholder-gray-500 font-sans resize-none transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ 
                  scale: isLoading ? 1 : 1.03,
                  y: isLoading ? 0 : -3,
                  boxShadow: isLoading ? "none" : "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: isLoading ? 1 : 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-full px-8 py-4 bg-black text-white font-bold text-lg rounded-none uppercase tracking-wider hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-3 font-heading"
              >
                {isLoading ? "Sending..." : "Send Message"}
                {!isLoading && <ArrowRight size={18} />}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* MINIMAL FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-gray-500 text-sm font-sans">
            We respond within 24 hours • Professional consultation guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
