"use client";

import { motion, LazyMotion, domAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState, useEffect, useCallback, memo } from "react";
import { createPortal } from "react-dom";
import { developments } from "../../data/developmentsData";
import { useRouter } from "next/navigation";
import { X, Check, Calendar, Download } from "lucide-react";

// Types - UPDATED TO MATCH YOUR DATA STRUCTURE
interface Project {
  id: number; // CHANGED FROM string TO number
  title: string;
  description: string;
  image: string;
  location: string;
  category: string;
  price: string;
  status: string; // ADDED MISSING STATUS PROPERTY
  features: string[];
  investment: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

// Optimized Framer Motion - only load essential animations
const OptimizedMotion = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
);

// Fixed fadeIn variants with proper typing
const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay,
    },
  },
});

// Memoized modal component
const ProjectModal = memo(({ isOpen, onClose, project }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<"overview" | "investment">(
    "overview"
  );
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Handle Hydration mismatch for Portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Optimized scroll prevention
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  const handleScheduleVisit = useCallback(() => {
    onClose();
    router.push("/contact");
  }, [onClose, router]);

  const handleDownloadBrochure = useCallback(() => {
    if (!project) return;

    try {
      const link = document.createElement("a");
      link.href = "/Brochure.pdf";
      link.download = `Pyramids-${project.title.replace(
        /\s+/g,
        "-"
      )}-Brochure.pdf`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download brochure:", error);
      window.open("/Brochure.pdf", "_blank");
    }
  }, [project]);

  const handleTabClick = useCallback((tab: "overview" | "investment") => {
    setActiveTab(tab);
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!mounted || !project || !isVisible) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`
          bg-white 
          w-full h-full 
          sm:w-full sm:max-w-4xl sm:h-auto sm:max-h-[85vh] sm:rounded-lg
          border border-gray-300 relative flex flex-col transform transition-transform duration-300 shadow-2xl
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Fixed Close Button */}
        <div className="relative h-48 sm:h-64 bg-gray-900 flex-shrink-0 sm:rounded-t-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk8DFbI5oW5I1aYrC4bkS0LDyYWukbqXKJ4ErjLk4gY8OMk6kJA+4n//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[99999] w-10 h-10 sm:w-12 sm:h-12 bg-black/90 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-300 group border border-white/20 rounded-full"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
            <h2
              id="modal-title"
              className="font-oswald text-2xl sm:text-3xl md:text-4xl uppercase mb-2"
            >
              {project.title}
            </h2>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:items-center sm:gap-4">
                <span className="font-inter text-gray-300 text-xs sm:text-sm">
                  {project.location}
                </span>
                <span className="font-inter text-orange-400 text-xs sm:text-sm">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        {/* Tabs */}
        <div className="flex border-b border-gray-200 flex-shrink-0">
          {[
            { id: "overview" as const, label: "Overview" },
            { id: "investment" as const, label: "Investment" },
          ].map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-1 py-3 sm:py-4 font-inter text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id
                ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6">
            <div
              id="overview-tab"
              role="tabpanel"
              aria-labelledby="overview-tab"
              className={activeTab === "overview" ? "block" : "hidden"}
            >
              <TabContent
                description={project.description}
                features={project.features}
                type="overview"
              />
            </div>

            <div
              id="investment-tab"
              role="tabpanel"
              aria-labelledby="investment-tab"
              className={activeTab === "investment" ? "block" : "hidden"}
            >
              <TabContent
                price={project.price}
                investment={project.investment}
                type="investment"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0 sm:rounded-b-lg">
          <OptimizedMotion>
            <motion.button
              onClick={handleScheduleVisit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-500 text-white font-bold uppercase py-3 sm:py-4 font-inter text-xs sm:text-sm border-2 border-orange-500 hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              Schedule Site Visit
            </motion.button>
          </OptimizedMotion>

          <OptimizedMotion>
            <motion.button
              onClick={handleDownloadBrochure}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-transparent text-gray-700 font-bold uppercase py-3 sm:py-4 font-inter text-xs sm:text-sm border-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              Download Brochure
            </motion.button>
          </OptimizedMotion>
        </div>
      </div>
    </div>,
    document.body
  );
});

ProjectModal.displayName = "ProjectModal";

// Tab Content Props Interface
interface TabContentProps {
  description?: string;
  features?: string[];
  price?: string;
  investment?: string[];
  type: "overview" | "investment";
}

// Memoized tab content components
const TabContent = memo(
  ({ description, features, price, investment, type }: TabContentProps) => {
    if (type === "overview") {
      return (
        <div className="space-y-4 sm:space-y-6">
          <p className="font-inter text-gray-700 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
          <div>
            <h4 className="font-oswald text-lg uppercase text-gray-900 mb-3 sm:mb-4">
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              {features?.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className="font-inter text-gray-600 text-xs sm:text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 p-4 sm:p-6 border border-orange-500/20">
          <h4 className="font-oswald text-lg uppercase text-gray-900 mb-2 sm:mb-3">
            Investment Details
          </h4>
          <p className="font-oswald text-xl sm:text-2xl text-orange-500 mb-2">
            {price}
          </p>
          <p className="font-inter text-gray-600 text-xs sm:text-sm">
            Competitive pricing with exceptional value proposition
          </p>
        </div>

        <div>
          <h4 className="font-oswald text-lg uppercase text-gray-900 mb-3 sm:mb-4">
            Investment Benefits
          </h4>
          <div className="space-y-2 sm:space-y-3">
            {investment?.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                  <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                </div>
                <span className="font-inter text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

TabContent.displayName = "TabContent";

// Project Card Props Interface
interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
}

// Memoized project card component
const ProjectCard = memo(({ project, onProjectClick }: ProjectCardProps) => {
  const handleClick = useCallback(() => {
    onProjectClick(project);
  }, [onProjectClick, project]);

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onProjectClick(project);
      }
    },
    [onProjectClick, project]
  );

  return (
    <div
      className="group cursor-pointer"
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      <div className="relative bg-white border border-gray-200/50 shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-orange-500/40 h-full rounded-xl">
        {/* Image Container - Fixed aspect ratio */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk8DFbI5oW5I1aYrC4bkS0LDyYWukbqXKJ4ErjLk4gY8OMk6kJA+4n//2Q=="
          />

          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

          {/* Premium Glow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent transition-all duration-500" />

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-4px]">
            <h3 className="font-oswald text-2xl lg:text-3xl uppercase mb-2 drop-shadow-lg">
              {project.title}
            </h3>
            <p className="font-inter text-gray-200 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </p>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-b from-white to-gray-50/50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-full font-inter text-orange-600 text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <p className="font-oswald text-xl text-gray-900 mt-3 font-bold">
                {project.price}
              </p>
            </div>
          </div>

          <p className="font-inter text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <span
                key={featureIndex}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-inter rounded-full border border-gray-200"
              >
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-inter rounded-full border border-orange-200 font-semibold">
                +{project.features.length - 3} more
              </span>
            )}
          </div>

          <button
            className="w-full py-3 border-2 border-gray-300 text-gray-700 font-inter text-sm font-semibold uppercase tracking-wider hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg group-hover:border-orange-500 group-hover:text-orange-600"
            aria-label={`View project details for ${project.title}`}
          >
            View Project Details
          </button>
        </div>

        {/* Premium Border Glow on Hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(255,107,53,0.3)]" />
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

const ProjectShowcaseSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoized event handlers
  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

  return (
    <OptimizedMotion>
      <section
        ref={ref}
        className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white text-black overflow-hidden py-24 lg:py-32"
        aria-labelledby="projects-section-title"
      >
        {/* Luxury Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Decorative Gradient Orbs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0)}
          >
            {/* Main Heading */}
            <h2
              id="projects-section-title"
              className="font-oswald text-5xl lg:text-7xl font-bold uppercase text-gray-900 leading-tight mb-8"
            >
              Current
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            {/* Description in Glassmorphic Card */}
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200/50">
                <p className="font-inter text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Explore our{" "}
                  <span className="font-semibold text-gray-900">premium real estate developments</span>{" "}
                  that combine{" "}
                  <span className="font-semibold text-orange-600">luxury living</span>{" "}
                  with{" "}
                  <span className="font-semibold text-orange-600">exceptional investment potential</span>.
                </p>
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5 pointer-events-none" />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="mt-10 flex justify-center items-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-orange-500/50 to-orange-500" />
              <div className="w-2 h-2 bg-orange-500 rotate-45" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-orange-500/50 to-orange-500" />
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developments.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn(0.1 + index * 0.1)}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProjectCard
                  project={project}
                  onProjectClick={handleProjectClick}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      </section>
    </OptimizedMotion>
  );
};

export default ProjectShowcaseSection;
