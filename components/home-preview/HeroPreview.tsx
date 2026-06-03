"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper CSS (important order)
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation"; /* For next/prev arrows */
import "swiper/css/pagination";

// Your global styles (this should include the .hero-swiper bullet overrides)
import "@/app/globals.css";

// Video slide type
interface VideoSlide {
  id: number;
  video: string;
  poster: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function HeroPreview() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  // Check if mobile on component mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Define video slides
  const videoSlides: VideoSlide[] = useMemo(
    () => [
      {
        id: 1,
        video: "/homepage-vids/1.mp4",
        poster: "/homepage-vids/posters/1.png",
        title: "BUILDING",
        subtitle: "THE FUTURE",
        description:
          "A dynamic, fast-growing and multidimensional organization providing comprehensive services in architecture, engineering, and construction.",
      },
      {
        id: 2,
        video: "/homepage-vids/2.mp4",
        poster: "/homepage-vids/posters/2.png",
        title: "ENGINEERING",
        subtitle: "EXCELLENCE",
        description:
          "Delivering innovative solutions with precision engineering and architectural mastery across all project scales.",
      },
      {
        id: 3,
        video: "/homepage-vids/3.mp4",
        poster: "/homepage-vids/posters/3.png",
        title: "DESIGNING",
        subtitle: "LANDMARKS",
        description:
          "Creating iconic structures that define skylines and push the boundaries of modern architecture.",
      },
    ],
    []
  );

  const handleVideoReady = () => {
    setIsVideoLoaded(true);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.realIndex);
    if (isPlaying) {
      videoRefs.current.forEach((video) => {
        if (video) video.play().catch(() => {});
      });
    }
  };

  const addVideoRef = (el: HTMLVideoElement | null, index: number) => {
    if (el) {
      videoRefs.current[index] = el;
      el.playsInline = true;
      el.muted = true;
    }
  };

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      videoRefs.current.forEach((v) => v?.pause());
      swiperRef.current?.autoplay?.stop();
    } else {
      videoRefs.current.forEach((v) => {
        if (v) {
          v.play().catch(() => {
            swiperRef.current?.autoplay?.start();
          });
        }
      });
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  // For mobile, we'll use the second slide (ENGINEERING EXCELLENCE) as static content
  const mobileSlide = videoSlides[1]; // ENGINEERING EXCELLENCE slide

  return (
    <div className="hero-container mt-0 md:mt-0">
      {/* Video Section */}
      <div className="hero-swiper-wrapper">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="hero-swiper"
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          loop={true}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          navigation={true}
          allowTouchMove={false}
          speed={1000}
          onSlideChange={handleSlideChange}
          onInit={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {videoSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="video-slide">
                <video
                  ref={(el) => addVideoRef(el, index)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={slide.poster}
                  className="hero-video"
                  onCanPlayThrough={handleVideoReady}
                  onError={() =>
                    console.error(`Video ${index + 1} failed to load`)
                  }
                >
                  <source src={slide.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="video-controls" onClick={togglePlayPause}>
          {isPlaying ? <Pause /> : <Play />}
        </div>

        <div className="desktop-overlay" />
        <div className="swiper-pagination" />
      </div>

      {/* Text Section */}
      <div className="hero-text-content">
        {/* Desktop: Animated text that changes with slides */}
        {!isMobile && (
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start text-left w-full md:max-w-md lg:max-w-lg space-y-4 sm:space-y-5 md:space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-oswald text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight"
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                {videoSlides[activeSlide]?.title}
              </motion.span>
              <br className="hidden md:block" />{" "}
              <motion.span 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="text-orange-500 inline-block"
              >
                {videoSlides[activeSlide]?.subtitle}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-inter text-sm sm:text-base md:text-lg leading-relaxed max-w-full md:max-w-lg"
            >
              {videoSlides[activeSlide]?.description}
            </motion.p>

            {/* NO BUTTON ON DESKTOP - Removed completely */}
          </motion.div>
        )}

        {/* Mobile: Static ENGINEERING EXCELLENCE text with button */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left w-full space-y-5"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-oswald text-4xl font-bold uppercase leading-tight text-center w-full"
            >
              {mobileSlide.title}
              <br />
              <span className="text-orange-500">{mobileSlide.subtitle}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-inter text-base leading-relaxed text-center w-full px-4"
            >
              {mobileSlide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full flex justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 15px 30px rgba(249, 115, 22, 0.4)"
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="px-8 py-4 bg-orange-500 text-black font-bold text-lg rounded-none uppercase tracking-wider transition-colors duration-300 hover:bg-white flex items-center justify-center gap-2 font-inter border-2 border-orange-500 hover:border-white"
                >
                  Get In Touch
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
