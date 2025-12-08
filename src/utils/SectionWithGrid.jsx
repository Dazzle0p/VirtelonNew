import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const SectionWithGrid = ({
  tag,
  title,
  highlight,
  description,
  children,
  gridClassName = "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
  sectionClassName = "",
  containerClassName = "max-w-7xl mx-auto",
  nextSectionId,
  showArrow = true,
  arrowText = "Explore More",
  bgColor = "bg-background-dark",
  paddingY = "py-16 md:py-24",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToNextSection = () => {
    if (nextSectionId) {
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Scroll to next sibling section if no ID provided
      const sections = document.querySelectorAll("section");
      const currentSection = document.getElementById(`section-${tag}`);
      if (currentSection) {
        const currentIndex = Array.from(sections).indexOf(currentSection);
        if (currentIndex < sections.length - 1) {
          sections[currentIndex + 1].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const section = document.getElementById(`section-${tag}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          setIsVisible(isVisible);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tag]);

  return (
    <section
      id={`section-${tag}`}
      className={`relative ${paddingY} px-4 sm:px-6 ${bgColor} text-slate-200 ${sectionClassName}`}
    >
      {/* Content Container */}
      <div className={containerClassName}>
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          {tag && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4">
              {tag}
            </div>
          )}

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {title}{" "}
            {highlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2] to-blue-500">
                {highlight}
              </span>
            )}
          </h2>

          {description && (
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Grid Content */}
        <div className={gridClassName} data-aos="fade-up" data-aos-delay="100">
          {children}
        </div>
      </div>

      {/* Animated Arrow Button */}
      {showArrow && (
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            onClick={scrollToNextSection}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label={`Scroll to ${arrowText}`}
          >
            <span className="text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {arrowText}
            </span>

            {/* Animated Arrow Container */}
            <div className="relative">
              <div
                className={`w-10 h-16 rounded-full border border-white/10 group-hover:border-white/30 transition-all duration-500 flex items-center justify-center ${
                  isVisible
                    ? "bg-white/5 group-hover:bg-white/10"
                    : "bg-transparent"
                }`}
              >
                {/* Pulsing Ring */}
                <div
                  className={`absolute inset-0 rounded-full border border-[#9F79F2] opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                    isVisible ? "animate-ping" : ""
                  }`}
                />

                {/* Arrow */}
                <div className="relative z-10">
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-500 ${
                      isVisible
                        ? "translate-y-0 group-hover:translate-y-1"
                        : "translate-y-0"
                    }`}
                  />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#9F79F2]/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

// Optional: Arrow Button as a standalone component
export const AnimatedArrowButton = ({
  targetId,
  text = "Scroll Down",
  className = "",
  size = "md",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTarget = () => {
    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const sizeClasses = {
    sm: "w-8 h-12",
    md: "w-10 h-16",
    lg: "w-12 h-20",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <button
      onClick={scrollToTarget}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 focus:outline-none ${className}`}
      aria-label={`Scroll to ${text}`}
    >
      <span className="text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </span>

      <div className="relative">
        <div
          className={`${sizeClasses[size]} rounded-full border border-white/10 group-hover:border-white/30 transition-all duration-500 flex items-center justify-center bg-white/5 group-hover:bg-white/10`}
        >
          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-full border border-[#9F79F2] opacity-30 animate-ping" />

          {/* Animated Dot Trail */}
          {isHovered && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-[#9F79F2] animate-bounce"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    bottom: `${i * 4}px`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Arrow */}
          <div className="relative z-10">
            <ChevronDown
              className={`${iconSizes[size]} transition-all duration-500 ${
                isHovered ? "translate-y-1" : "translate-y-0"
              }`}
            />
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#9F79F2]/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>
    </button>
  );
};

// Alternative: Simple Arrow Button Component
export const ScrollArrow = ({
  targetId,
  direction = "down",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToTarget = () => {
    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else if (direction === "down") {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    } else {
      window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTarget}
      className={`group relative w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center ${className}`}
      aria-label={`Scroll ${direction}`}
    >
      {/* Animated Circle */}
      <div className="absolute inset-0 rounded-full border border-[#9F79F2]/30 animate-pulse" />

      {/* Arrow */}
      <ChevronDown
        className={`w-5 h-5 text-white transition-transform duration-500 ${
          direction === "up" ? "rotate-180" : ""
        } ${isVisible ? "group-hover:translate-y-1" : ""}`}
      />

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-full bg-[#9F79F2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
    </button>
  );
};

export default SectionWithGrid;
