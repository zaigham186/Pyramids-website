"use client";

import Image from "next/image";
import { Project } from "@/data/projectData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-72">
        {/* Image and Hover Effect */}
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 ease-in-out group-hover:from-black/90" />

        {/* Text Content - FIXED: Always show stat AND title */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* STAT BADGE - Always show this */}
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 uppercase">
            {project.stat}
          </span>

          {/* TITLE - Always show this */}
          <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>

          {/* "View Project" Button */}
          <div className="text-orange-400 font-semibold flex items-center opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
            View Project Details
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
  );
}
