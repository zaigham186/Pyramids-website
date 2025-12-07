"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Fixed Animation variants with proper typing
const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

const AccreditationSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
        {/* Two-column responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0)}
            className="flex flex-col"
          >
            {/* Trust & Accreditation Label */}
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-orange-500 mr-3" />
              <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
                TRUST & ACCREDITATION
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-gray-900 leading-tight mb-6">
              OFFICIALLY RECOGNIZED
              <br />
              ENGINEERING AUTHORITY
            </h2>

            {/* Description Paragraph */}
            <p className="font-inter text-base text-gray-700 leading-relaxed max-w-lg">
              We are a fully registered and accredited firm with the Pakistan
              Engineering Council (PEC). This official status is your assurance
              that our services meet the highest national standards for quality,
              safety, and professionalism.
            </p>
          </motion.div>

          {/* Right Column - Architectural Lines with Card */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.3)}
            className="relative flex items-center justify-center"
          >
            {/* Architectural Grid Lines Background */}
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, transparent 95%, #f97316 95%),
                  linear-gradient(0deg, transparent 95%, #f97316 95%)
                `,
                backgroundSize: "40px 40px",
                backgroundPosition: "center center",
              }}
            />

            {/* Additional Engineering Grid for depth */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, transparent 99%, #f97316 99%),
                  linear-gradient(0deg, transparent 99%, #f97316 99%)
                `,
                backgroundSize: "20px 20px",
                backgroundPosition: "center center",
              }}
            />

            {/* Blueprint-style Circles */}
            <div className="absolute inset-0 opacity-[0.1]">
              <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full border border-orange-500"></div>
              <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full border border-orange-500"></div>
              <div className="absolute bottom-1/4 right-1/4 w-10 h-10 rounded-full border border-orange-500"></div>
              <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full border border-orange-500"></div>
            </div>

            {/* Black Certificate Card */}
            <motion.div 
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative bg-black text-white rounded-2xl p-8 shadow-2xl border border-gray-800 z-10 w-full max-w-md cursor-pointer"
            >
              {/* Card Content */}
              <div>
                {/* Title */}
                <h3 className="font-oswald text-2xl lg:text-3xl font-medium text-white uppercase mb-2">
                  Pakistan Engineering Council
                </h3>

                {/* Subtitle */}
                <p className="font-inter text-gray-400 text-base mb-8">
                  Official Registered Consultants
                </p>

                {/* Data Fields */}
                <div className="space-y-6">
                  {/* Registration Number - Orange Highlight */}
                  <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                    <span className="font-inter text-sm text-gray-400 uppercase tracking-wide">
                      Reg. No
                    </span>
                    <span className="font-oswald text-xl font-medium text-orange-500">
                      CONSULT/1205
                    </span>
                  </div>

                  {/* Since Year */}
                  <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                    <span className="font-inter text-sm text-gray-400 uppercase tracking-wide">
                      Since
                    </span>
                    <span className="font-oswald text-xl font-medium text-white">
                      2006
                    </span>
                  </div>

                  {/* Expertise */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-inter text-sm text-gray-400 uppercase tracking-wide">
                      Expertise
                    </span>
                    <span className="font-oswald text-xl font-medium text-white">
                      Multidisciplinary
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
