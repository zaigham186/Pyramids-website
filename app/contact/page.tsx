"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Building2, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const { ref: formRef, inView: formInView } = useInView({
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
      // Submit to Google Forms
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc1b5hbOTckiGqX1391pBDX4gl6RsJIWy237Z7JLYpXzSCHBA/formResponse";
      
      const formBody = new FormData();
      // Replace these entry IDs with your actual Google Form field IDs
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

  const scrollToMap = () => {
    document
      .getElementById("office-map")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section - ELEGANT HEADER */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 lg:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-3 px-6 py-2 bg-orange-500/20 rounded-full border border-orange-500/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-orange-400 tracking-wider uppercase font-heading">
                  Get In Touch
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-6">
              Start Your Next
              <br />
              <span className="text-orange-500 relative inline-block">
                Project
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-orange-500"
                ></motion.div>
              </span>
            </h1>

            {/* Description */}
            <p className="font-inter text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your vision into reality with Pakistan's leading architectural and engineering firm.
              Let's discuss how we can bring excellence to your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - PREMIUM 5-COLUMN LAYOUT */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* LEFT COLUMN - CONTACT INFO (2 cols) */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 lg:p-10 text-white shadow-2xl h-full relative overflow-hidden sticky top-8">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500 rounded-full blur-3xl opacity-10"></div>

                <div className="relative z-10">
                  <h2 className="font-oswald text-3xl font-bold uppercase mb-3">
                    Contact Information
                  </h2>
                  <p className="text-gray-400 font-sans mb-10 leading-relaxed">
                    We're here to answer your questions and discuss your project needs. Reach out through any of these channels.
                  </p>

                  {/* Contact Cards */}
                  <div className="space-y-6">
                    {/* Offices */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-3 font-heading">Our Offices</h3>
                          <div className="space-y-3 text-sm">
                            <div>
                              <button
                                onClick={scrollToMap}
                                className="text-orange-400 font-semibold hover:text-orange-300 transition-colors text-left"
                              >
                                Islamabad (Head Office)
                              </button>
                              <p className="text-gray-400">Office No.30, 2nd Floor, Aslam Business Square, E-11/2</p>
                            </div>
                            <div>
                              <p className="text-orange-400 font-semibold">Peshawar Office</p>
                              <p className="text-gray-400">3rd floor, Uhad tower, Phase 3 chowk</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-2 font-heading">Phone</h3>
                          <p className="text-gray-300 text-sm">0334-514-8335</p>
                          <p className="text-gray-300 text-sm">0301-0505015</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-2 font-heading">Email</h3>
                          <p className="text-gray-300 text-sm break-all">Noohsiddique514@gmail.com</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Business Hours */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-2 font-heading">Business Hours</h3>
                          <p className="text-gray-300 text-sm">Monday - Friday</p>
                          <p className="text-gray-300 text-sm">10:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-400" />
                      <p className="text-sm text-gray-300">
                        <span className="font-bold text-white">24-hour response time</span> • Professional consultation guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - PREMIUM FORM (3 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                <h2 className="font-oswald text-3xl font-bold uppercase text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8 font-sans">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-green-900 text-sm">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                  >
                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-red-900 text-sm">Something went wrong</p>
                      <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2 font-heading uppercase tracking-wide">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-gray-900 mb-2 font-heading uppercase tracking-wide">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2 font-heading uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2 font-heading uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans transition-all duration-300"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2 font-heading uppercase tracking-wide">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans transition-all duration-300"
                      placeholder="Project Consultation"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2 font-heading uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white text-gray-900 placeholder-gray-400 font-sans resize-none transition-all duration-300"
                      placeholder="Tell us about your project requirements, timeline, and any specific details..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-lg uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 font-heading shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-sm text-gray-500 font-sans">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="office-map" className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-oswald text-4xl font-bold uppercase text-white mb-4">
              Visit Our <span className="text-orange-500">Head Office</span>
            </h2>
            <p className="text-gray-400 font-sans">
              Office No.30, 2nd Floor, Aslam Business Square, E-11/2, Islamabad
            </p>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.552391328333!2d73.03121527533824!3d33.68444037331807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfb2bfc1dafd%3A0x5a1b583b641e6f1e!2sE-11%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698765432107!5m2!1sen!2s"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pyramids Head Office Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
