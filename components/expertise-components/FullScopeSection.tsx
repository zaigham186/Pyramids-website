"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const serviceCategories = [
  {
    id: "planning",
    title: "Planning & Feasibility",
    items: [
      "Feasibility studies and preparation of PC-1 FOMRS for various government agencies",
      "Planning and designing of all site work and services including approach roads, parking areas, walk ways and site investigation works",
      "Preparation of tender documents, such as, B.O.Q's., estimates, specifications and conditions of contracts etc",
    ],
  },
  {
    id: "design",
    title: "Design & Engineering",
    items: [
      "Development of architectural design",
      "Preparation of structural designs in sufficient detail, including an estimate of the costs",
      "Heating and ventilation systems design and installation proposals",
      "Preparation of designs and details of additional facilities, such as internal and external water supply and drainage systems",
    ],
  },
  {
    id: "management",
    title: "Management & Execution",
    items: [
      "Providing services for tender invitation and evaluation",
      "Project management and construction supervision",
      "Quality control and assurance throughout project lifecycle",
      "Commissioning and handover of completed projects",
    ],
  },
];

export default function FullScopeSection() {
  const [activeTab, setActiveTab] = useState("planning");

  return (
    <section className="w-full bg-black py-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center mb-3">
            <div className="w-3 h-3 bg-orange-500 mr-2" />
            <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
              COMPLETE SOLUTIONS
            </span>
          </div>

          <h2 className="font-oswald text-3xl lg:text-4xl font-medium uppercase text-white leading-tight mb-3">
            FROM CONCEPT TO COMPLETION
          </h2>

          <p className="font-inter text-gray-400 text-sm max-w-2xl mx-auto">
            End-to-end engineering services delivering excellence at every
            project phase
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="flex flex-col items-center">
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`px-6 py-3 rounded-xl font-oswald text-base font-medium uppercase transition-colors duration-300 ${
                  activeTab === category.id
                    ? "bg-orange-500 text-black shadow-lg shadow-orange-500/25"
                    : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-orange-400/40 hover:text-orange-400"
                }`}
              >
                {category.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content - FIXED: Consistent height and premium border */}
          <div className="w-full max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-900 border border-gray-700 rounded-xl p-5 lg:p-6 shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
              >
                <motion.h3
                  className="font-oswald text-lg lg:text-xl font-medium text-white uppercase mb-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {serviceCategories.find((cat) => cat.id === activeTab)?.title}
                </motion.h3>

                {/* FIXED: Consistent height container */}
                <div className="min-h-[140px] space-y-3">
                  {" "}
                  {/* Added min-h-[140px] for consistent height */}
                  {serviceCategories
                    .find((cat) => cat.id === activeTab)
                    ?.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3 group cursor-pointer"
                      >
                        {/* Custom Premium Checkmark */}
                        <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-2 h-2 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                        <p className="font-inter text-gray-300 text-xs leading-snug group-hover:text-orange-400 transition-colors duration-300">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                </div>

                {/* FIXED: Orange line now stays in consistent position */}
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
