"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Building2, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToMap = () => {
    document
      .getElementById("office-map")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - ONLY HEADER */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Headline */}
            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-6">
              Start Your
              <br />
              <span className="text-orange-500">Project</span>
            </h1>

            {/* Description */}
            <p className="font-inter text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Let's discuss your project
              with our architectural and engineering experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Column 1: Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-oswald text-3xl font-bold uppercase text-gray-900 mb-8">
                Send Us a Message
              </h2>

              {/* Google Form Iframe */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSc1b5hbOTckiGqX1391pBDX4gl6RsJIWy237Z7JLYpXzSCHBA/viewform?embedded=true"
                  width="100%"
                  height="900"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
            </motion.div>

            {/* Column 2: Contact Information - PREMIUM CARD */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <h2 className="font-oswald text-3xl font-bold uppercase text-gray-900 mb-8">
                  Get In Touch
                </h2>

                {/* Our Offices */}
                <div className="mb-8">
                  <h3 className="font-oswald text-xl font-bold uppercase text-gray-900 mb-4">
                    Our Offices
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 flex-shrink-0">
                        <Building2 size={24} className="text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold text-gray-900">
                          Islamabad (Head Office)
                        </h4>
                        <button
                          onClick={scrollToMap}
                          className="font-inter text-gray-600 hover:text-orange-500 transition-colors duration-300 text-left"
                        >
                          Office No.30, 2nd Floor, Aslam Business Square,
                          E-11/2, Islamabad
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 flex-shrink-0">
                        <Building2 size={24} className="text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold text-gray-900">
                          Peshawar Office
                        </h4>
                        <p className="font-inter text-gray-600">
                          3rd floor, Uhad tower, Phase 3 chowk, Peshawar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="mb-8">
                  <h3 className="font-oswald text-xl font-bold uppercase text-gray-900 mb-4">
                    Contact Details
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="mr-4 flex-shrink-0">
                        <Phone size={24} className="text-orange-500" />
                      </div>
                      <div>
                        <p className="font-inter text-gray-600">
                          0334-514-8335
                        </p>
                        <p className="font-inter text-gray-600">0301-0505015</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="mr-4 flex-shrink-0">
                        <Mail size={24} className="text-orange-500" />
                      </div>
                      <div>
                        <p className="font-inter text-gray-600">
                          Noohsiddique514@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="font-oswald text-xl font-bold uppercase text-gray-900 mb-4">
                    Business Hours
                  </h3>

                  <div className="flex items-center">
                    <div className="mr-4 flex-shrink-0">
                      <Clock size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-inter text-gray-600">
                        Monday - Friday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section - NO HEADER */}
      <section id="office-map" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.552391328333!2d73.03121527533824!3d33.68444037331807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfb2bfc1dafd%3A0x5a1b583b641e6f1e!2sE-11%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698765432107!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pyramids Head Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
