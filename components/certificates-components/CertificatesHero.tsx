"use client";

import { motion } from "framer-motion";

export default function CertificatesHero() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Main Headline */}
          <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-6">
            Our
            <br />
            <span className="text-orange-500">Certifications</span>
          </h1>

          {/* Description */}
          <p className="font-inter text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Recognized excellence in engineering and architectural services. Our certifications demonstrate our commitment to quality, safety, and professional standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
