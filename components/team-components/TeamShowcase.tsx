// /components/team-components/TeamShowcase.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { allTeamMembers, type TeamMember } from "@/data/teamData";

// Get the CEO, Director, and the rest of the team
const ceo: TeamMember | undefined = allTeamMembers.find(
  (member) => member.id === 1
);
const director: TeamMember | undefined = allTeamMembers.find(
  (member) => member.id === 2
);
const coreTeam: TeamMember[] = allTeamMembers.filter(
  (member) => member.id !== 1 && member.id !== 2
);

export default function TeamShowcase() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* === 1. ENHANCED CEO SECTION === */}
        {ceo && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-3xl shadow-2xl p-8 md:p-16 mb-24 border border-gray-100 dark:border-neutral-700 overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative flex flex-col lg:flex-row items-center gap-12">
              {/* CEO Image - Enhanced with professional styling */}
              {ceo.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:w-2/5 w-full relative"
                >
                  <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={ceo.image}
                      alt={ceo.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    {/* Professional gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  {/* Accent element */}
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-20"></div>
                </motion.div>
              )}

              {/* CEO Info - Enhanced typography and layout */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:w-3/5 w-full text-center lg:text-left"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-orange-500 uppercase tracking-widest font-semibold text-sm mb-6 inline-block border border-orange-500/20 px-4 py-2 rounded-full bg-orange-500/5"
                >
                  Executive Leadership
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                >
                  {ceo.name}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-2xl text-orange-500 font-semibold mb-8"
                >
                  {ceo.position}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="space-y-6 text-gray-600 dark:text-gray-300"
                >
                  <p className="text-lg leading-relaxed font-light">
                    Imran Siddique completed his Master’s in Civil Engineering and began his professional career with the German Red Cross. In 2006, he established Pyramids Consulting Engineers & Architects, laying the foundation for a consultancy built on innovation, quality, and professional excellence.
                  </p>
                  <p className="text-lg leading-relaxed font-light">
                    With more than 25 years of experience in the fields of engineering, architecture, and construction, Imran Siddique has successfully delivered numerous remarkable projects. Today, he is also actively working as a real estate builder, leading premium developments such as LaVita Malam Jabba and Landmark Peshawar, projects that reflect modern design, luxury, and visionary development.
                  </p>
                </motion.div>

                {/* Professional credentials */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-neutral-600 justify-center lg:justify-start"
                >
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="font-medium">25+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Strategic Vision</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Technical Excellence</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* === DIRECTOR SECTION === */}
        {director && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-3xl shadow-2xl p-8 md:p-16 mb-24 border border-gray-100 dark:border-neutral-700 overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full -translate-y-32 -translate-x-32"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full translate-y-24 translate-x-24"></div>

            <div className="relative flex flex-col lg:flex-row-reverse items-center gap-12">
              {/* Director Image */}
              {director.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:w-2/5 w-full relative"
                >
                  <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    {/* Professional gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  {/* Accent element */}
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-500 rounded-full opacity-20"></div>
                </motion.div>
              )}

              {/* Director Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:w-3/5 w-full text-center lg:text-left"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-orange-500 uppercase tracking-widest font-semibold text-sm mb-6 inline-block border border-orange-500/20 px-4 py-2 rounded-full bg-orange-500/5"
                >
                  Executive Leadership
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                >
                  {director.name}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-2xl text-orange-500 font-semibold mb-8"
                >
                  {director.position}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="space-y-6 text-gray-600 dark:text-gray-300"
                >
                  <p className="text-lg leading-relaxed font-light">
                    As Director of Pyramids Consulting Engineers & Architects, Nooh Siddique brings strategic vision and operational leadership to the firm. His expertise in project management and business development has been instrumental in expanding the company's portfolio and strengthening client relationships.
                  </p>
                  <p className="text-lg leading-relaxed font-light">
                    With a focus on innovation and quality excellence, Nooh oversees the execution of complex engineering and architectural projects, ensuring that each development meets the highest standards of design and construction. His commitment to professional growth and team development continues to drive Pyramids forward.
                  </p>
                </motion.div>

                {/* Professional credentials */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-neutral-600 justify-center lg:justify-start"
                >
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Project Leadership</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Business Development</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Strategic Vision</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* === 2. ENHANCED CORE TEAM SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-100 dark:border-neutral-700 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent dark:from-black/50"></div>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-orange-500 uppercase tracking-widest font-semibold text-sm mb-4 block"
            >
              Expert Team
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Core Team
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              A collective of dedicated professionals committed to delivering
              exceptional results through innovation and expertise.
            </motion.p>
          </motion.div>

          {/* Enhanced Team Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto relative"
          >
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group text-center bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-neutral-600 relative overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-orange-500 font-semibold text-lg">
                    {member.position}
                  </p>
                </div>

                {/* Accent dot */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
