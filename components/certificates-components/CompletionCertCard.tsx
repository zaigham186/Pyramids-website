"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface CompletionCertCardProps {
  cert: {
    id: number;
    org: string;
    title: string;
    description: string;
    tags: Array<{ icon: any; text: string }>;
    image: string;
  };
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function CompletionCertCard({ cert, index }: CompletionCertCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-orange-500/30 transition-all duration-300 group"
    >
      {/* Card Content */}
      <div className="p-6">
        {/* Top Row: Icon Badge + Status */}
        <div className="flex items-start justify-between mb-4">
          {/* Orange Icon Badge */}
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Award className="w-5 h-5 text-white" />
          </div>

          {/* Status Pill */}
          <div className="px-3 py-1 bg-orange-50 border border-orange-200 rounded-full">
            <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wider">
              VERIFIED
            </span>
          </div>
        </div>

        {/* Organization Name */}
        <div className="mb-2">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
            {cert.org}
          </span>
        </div>

        {/* Certificate Title */}
        <h3 className="font-oswald text-lg font-bold text-gray-900 uppercase leading-tight mb-3 group-hover:text-orange-600 transition-colors">
          {cert.title}
        </h3>

        {/* Description */}
        <p className="font-inter text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {cert.description}
        </p>

        {/* Metadata Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
          {cert.tags.map((tag, idx) => {
            const TagIcon = tag.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded text-gray-600 text-[11px] font-medium"
              >
                <TagIcon className="w-3 h-3" />
                <span>{tag.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Orange Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:from-orange-600 group-hover:to-orange-500 transition-all" />
    </motion.div>
  );
}
