"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

interface PerformanceCertCardProps {
  cert: {
    id: number;
    org: string;
    title: string;
    contract: string;
    duration: string;
    remarks: string;
    image: string;
  };
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function PerformanceCertCard({ cert }: PerformanceCertCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-lg border-l-4 border-l-[#1A2340] border-t border-r border-b border-gray-200 overflow-hidden hover:border-r-orange-500/30 hover:border-t-orange-500/30 hover:border-b-orange-500/30 transition-all duration-300 group"
    >
      {/* Card Content */}
      <div className="p-6">
        {/* Top Row: Icon Badge + Status */}
        <div className="flex items-start justify-between mb-4">
          {/* Navy Icon Badge */}
          <div className="w-10 h-10 bg-[#1A2340] rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-white" />
          </div>

          {/* Status Pill - Navy */}
          <div className="px-3 py-1 bg-[#1A2340] rounded-full">
            <span className="text-[10px] font-semibold text-white uppercase tracking-wider">
              EXCELLENT
            </span>
          </div>
        </div>

        {/* Organization Name */}
        <div className="mb-2">
          <span className="text-xs font-semibold text-[#1A2340] uppercase tracking-wider">
            {cert.org}
          </span>
        </div>

        {/* Certificate Title */}
        <h3 className="font-oswald text-lg font-bold text-gray-900 uppercase leading-tight mb-4 group-hover:text-[#1A2340] transition-colors">
          {cert.title}
        </h3>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Contract Value */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Contract Value
            </div>
            <div className="font-oswald text-sm font-bold text-gray-900">
              {cert.contract}
            </div>
          </div>

          {/* Duration */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Duration
            </div>
            <div className="font-oswald text-sm font-bold text-gray-900">
              {cert.duration}
            </div>
          </div>
        </div>

        {/* Remarks Section */}
        <div className="bg-orange-50 border-l-2 border-l-orange-500 rounded-r-lg p-4">
          <p className="font-inter text-xs text-gray-700 leading-relaxed">
            <span className="font-semibold text-orange-600">Remarks:</span>{" "}
            {cert.remarks}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
