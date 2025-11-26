"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link"; // Add Link for the "View Profile" buttons

export default function LeadershipTeamSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "ENGR. IMRAN SIDDIQUE",
      position: "CHIEF EXECUTIVE OFFICER",
      // Shortened, punchy description
      description:
        "25+ years of experience providing the strategic vision and technical leadership that defines Pyramids' excellence.",
    },
    {
      name: "ARCH. SHAKEEL",
      position: "PRINCIPAL ARCHITECT",
      description:
        "Blending aesthetic innovation with functional design to create landmark structures across the region.",
    },
    {
      name: "ENGR. ASAD KHAN",
      position: "STRUCTURAL ENGINEER",
      description:
        "Ensuring structural integrity and precision engineering for our most complex high-rise developments.",
    },
  ];

  return (
    // Reduced vertical padding (py-20 instead of py-28)
    <section ref={ref} className="w-full bg-black text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-orange-500 mr-3" />
            <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
              LEADERSHIP TEAM
            </span>
          </div>

          <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-white leading-tight mb-6">
            EXPERIENCED LEADERS
            <br />
            DRIVING EXCELLENCE
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                  },
                },
              }}
              // FIX: Removed rounded-lg, added border-white/10, reduced padding
              className="group bg-neutral-900 p-8 border border-white/10 hover:border-orange-500 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-1 bg-orange-500 mb-4 transition-all duration-300 group-hover:w-20"></div>
                <h3 className="font-oswald text-xl font-medium text-white uppercase mb-1">
                  {member.name}
                </h3>
                <p className="font-inter text-orange-500 text-xs uppercase tracking-wider mb-4">
                  {member.position}
                </p>
              </div>

              <p className="font-inter text-gray-400 text-sm leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Only show View Profile for CEO */}
              {index === 0 && (
                <Link
                  href="/others/team"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-orange-500 transition-colors"
                >
                  View Profile <span className="ml-2">→</span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Show All Team Members Button */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.6 },
            },
          }}
          className="text-center mt-12"
        >
          <Link
            href="/others/team"
            className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 font-bold uppercase tracking-widest text-sm hover:bg-orange-500 hover:text-black transition-all duration-300"
          >
            Show All Our Expert Team<span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
