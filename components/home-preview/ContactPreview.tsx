"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, Building2, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc1b5hbOTckiGqX1391pBDX4gl6RsJIWy237Z7JLYpXzSCHBA/formResponse";
      
      const formBody = new FormData();
      formBody.append("entry.123456789", formData.name);
      formBody.append("entry.987654321", formData.lastName);
      formBody.append("entry.111222333", formData.email);
      formBody.append("entry.444555666", formData.phone);
      formBody.append("entry.777888999", formData.subject);
      formBody.append("entry.000111222", formData.message);

      await fetch(formUrl, {
        method: "POST",
        body: formBody,
        mode: "no-cors",
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 bg-orange-50 rounded-full border border-orange-200">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase font-heading">
                Get In Touch
              </span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-heading mb-3">
            Start Your{" "}
            <span className="text-orange-500">Project</span>
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto font-sans">
            Ready to bring your vision to life? Let's discuss your project.
          </p>
        </motion.div>

        {/* COMPACT 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* LEFT COLUMN - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-5 lg:p-6 text-white shadow-xl h-full">
              <h3 className="font-oswald text-xl font-bold uppercase mb-1.5">
                Contact Information
              </h3>
              <p className="text-gray-400 text-xs font-sans mb-4">
                We're here to answer your questions.
              </p>

              {/* Contact Cards */}
              <div className="space-y-3">
                {/* Offices */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 size={16} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-white mb-1 font-heading text-xs">Our Offices</h4>
                      <div className="space-y-1.5 text-xs">
                        <div>
                          <p className="text-orange-400 font-semibold text-xs">Islamabad</p>
                          <p className="text-gray-400 text-xs leading-tight">Office No.30, 2nd Floor, E-11/2</p>
                        </div>
                        <div>
                          <p className="text-orange-400 font-semibold text-xs">Peshawar</p>
                          <p className="text-gray-400 text-xs leading-tight">3rd floor, Uhad tower, Phase 3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-0.5 font-heading text-xs">Phone</h4>
                      <p className="text-gray-300 text-xs">0334-514-8335</p>
                      <p className="text-gray-300 text-xs">0301-0505015</p>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={14} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-white mb-0.5 font-heading text-xs">Email</h4>
                      <p className="text-gray-300 text-xs break-all">Noohsiddique514@gmail.com</p>
                    </div>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-0.5 font-heading text-xs">Business Hours</h4>
                      <p className="text-gray-300 text-xs">Mon - Fri: 10AM - 5PM</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Trust Badge */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                  <p className="text-xs text-gray-300">
                    <span className="font-bold text-white">24-hour response</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - COMPACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-xl p-5 lg:p-6 border border-gray-100">
              <h3 className="font-oswald text-xl font-bold uppercase text-gray-900 mb-1.5">
                Send Message
              </h3>
              <p className="text-gray-600 text-xs mb-4 font-sans">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-3 p-2.5 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2"
                >
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-green-900 text-xs">Message sent!</p>
                    <p className="text-green-700 text-xs">We'll respond within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-3 p-2.5 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2"
                >
                  <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900 text-xs">Error</p>
                    <p className="text-red-700 text-xs">Please try again.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="First Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans transition-all duration-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans transition-all duration-300"
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message... *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans resize-none transition-all duration-300"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm rounded-lg uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 font-heading shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-gray-500 font-sans">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
