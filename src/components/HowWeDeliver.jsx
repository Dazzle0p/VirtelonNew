import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

// --- Utility for Tailwind ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * DeferredIcon
 * - iconName: name of export from 'lucide-react' (e.g. "Search", "PenTool")
 * - isVisible: start loading only once visible
 * - size: forwarded size to rendered icon
 */

function DeferredIcon({ iconName, isVisible, size = 24, className = "" }) {
  const [IconComp, setIconComp] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!isVisible || IconComp) return;

    import("lucide-react")
      .then((mod) => {
        if (!mounted) return;
        const Comp = mod[iconName];
        if (Comp) setIconComp(() => Comp);
      })
      .catch(() => {
        // ignore
      });

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, iconName]);

  if (!IconComp) {
    return (
      <div
        aria-hidden
        className={cn(
          "rounded-md bg-white/3 flex items-center justify-center",
          className
        )}
        style={{ width: size + 8, height: size + 8 }}
      />
    );
  }

  const Comp = IconComp;
  return <Comp size={size} className={className} />;
}

// ----------------------------
// Delivery stages data
// ----------------------------

const deliveryStages = [
  {
    id: 1,
    key: "DIAGNOSE",
    iconName: "Search",
    title: "Discovery & Diagnosis",
    subtitle: "Root Cause Analysis",
    content:
      "We don't just skim the surface. We deeply diagnose constraints, map potential risks, and identify high-value opportunities so nothing moves forward on guesswork. Every decision is data-backed.",
    color: "#9F79F2",
  },
  {
    id: 2,
    key: "ENGINEER",
    iconName: "PenTool",
    title: "Strategic Engineering",
    subtitle: "Architecture & Design",
    content:
      "We architect the optimal solution, selecting the precise technology stack that fits your scale. Our blueprints prioritize modularity, security, and future-proofing your digital ecosystem.",
    color: "#60A5FA",
  },
  {
    id: 3,
    key: "EXECUTE",
    iconName: "CheckCircle",
    title: "Precision Execution",
    subtitle: "Development & Testing",
    content:
      "The build phase where vision becomes code. We write clean, scalable algorithms, rigorously tested against edge cases to meet the highest performance standards before deployment.",
    color: "#34D399",
  },
  {
    id: 4,
    key: "DELIVER",
    iconName: "Truck",
    title: "Seamless Delivery",
    subtitle: "Deploy & Handover",
    content:
      "We deploy with zero downtime strategies, ensuring a smooth launch. We provide comprehensive documentation and a clear handover, empowering your team for ongoing operations.",
    color: "#F472B6",
  },
];

// ----------------------------
// Helper hook: detect mobile/tablet
// ----------------------------

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

// ----------------------------
// HowWeDeliver component
// ----------------------------

const HowWeDeliver = () => {
  // index-based state for carousel simplicity
  const [activeIndex, setActiveIndex] = useState(0);
  const activeContent = deliveryStages[activeIndex];

  // autoplay management
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // intersection (section visibility)
  const rootRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // reduced motion preference
  const shouldReduceMotion = useReducedMotion();

  // mobile/tablet detection
  const isMobile = useIsMobile(1024);

  // carousel measurements (width)
  const carouselRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const update = () => {
      setViewportWidth(carouselRef.current?.clientWidth ?? window.innerWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // IntersectionObserver for section visibility
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.25);
        });
      },
      { root: null, threshold: [0, 0.25, 0.5, 1] }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Pause autoplay when tab hidden
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState !== "visible") {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
          autoPlayRef.current = null;
        }
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Autoplay advancing index; only when allowed
  useEffect(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }

    const canAutoPlay =
      isAutoPlaying &&
      isInView &&
      typeof document !== "undefined" &&
      document.visibilityState === "visible";

    if (canAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % deliveryStages.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isAutoPlaying, isInView]);

  // clicking a left tab (desktop) should set the index and stop autoplay
  const handleTabClick = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  // Swipe end handling for mobile carousel
  const handleDragEnd = (info) => {
    // simple threshold logic
    const threshold = 80;
    const offsetX = info.offset.x;

    if (offsetX < -threshold) {
      // swipe left -> next
      setActiveIndex((prev) => (prev + 1) % deliveryStages.length);
      setIsAutoPlaying(false);
    } else if (offsetX > threshold) {
      // swipe right -> prev
      setActiveIndex(
        (prev) => (prev - 1 + deliveryStages.length) % deliveryStages.length
      );
      setIsAutoPlaying(false);
    } else {
      // small drag - snap back, do nothing
    }
  };

  // Motion variants
  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const shouldAnimate = isInView && !shouldReduceMotion;

  return (
    <section
      ref={rootRef}
      className="relative py-20 md:py-32 bg-[#050507] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9F79F2] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4"
          >
            {/* Inline sparkles SVG */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14 10.5 9.5 6 8l4.5-1.5L12 2z"
                fill="#9F79F2"
              />
            </svg>
            <span>OUR METHODOLOGY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
            }
            transition={{ delay: 0.05, duration: 0.45 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            How We{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9F79F2] to-blue-500">
              Deliver
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
            }
            transition={{ delay: 0.12, duration: 0.45 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            A rigorous, four-step framework designed to eliminate risk and
            maximize impact from day one.
          </motion.p>
        </div>

        {/* ----- Responsive Content: Desktop (tabs + card) OR Mobile Carousel ----- */}
        {!isMobile ? (
          // ------------------------
          // DESKTOP — original two-column layout
          // ------------------------
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Navigation / Timeline (unchanged) */}
            <div className="lg:col-span-5 flex flex-col space-y-4 relative">
              <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden lg:block" />

              {deliveryStages.map((stage, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={stage.key}
                    onClick={() => handleTabClick(idx)}
                    className={cn(
                      "group relative flex items-center p-4 rounded-xl transition-all duration-300 w-full text-left",
                      isActive
                        ? "bg-white/5 border-white/10"
                        : "hover:bg-white/5 border-transparent"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-white/5 rounded-xl border border-white/10 shadow-[0_0_30px_-10px_rgba(159,121,242,0.3)]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <div
                      className={cn(
                        "relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300",
                        isActive
                          ? "bg-[#0A0A0F] border-[#9F79F2] text-[#9F79F2] shadow-[0_0_15px_rgba(159,121,242,0.4)]"
                          : "bg-[#0A0A0F]/50 border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white/80"
                      )}
                    >
                      <DeferredIcon
                        iconName={stage.iconName}
                        isVisible={isInView}
                        size={24}
                      />
                      {isActive && (
                        <span className="absolute inset-0 rounded-full animate-ping bg-[#9F79F2] opacity-20" />
                      )}
                    </div>

                    <div className="relative z-10 ml-6">
                      <span
                        className={cn(
                          "text-xs font-bold tracking-widest uppercase mb-1 block transition-colors",
                          isActive ? "text-[#9F79F2]" : "text-white/40"
                        )}
                      >
                        Step 0{stage.id}
                      </span>
                      <h3
                        className={cn(
                          "text-lg font-bold transition-colors",
                          isActive ? "text-white" : "text-white/60"
                        )}
                      >
                        {stage.key}
                      </h3>
                    </div>

                    <div
                      className={cn(
                        "relative z-10 ml-auto transition-all duration-300 transform",
                        isActive
                          ? "opacity-100 translate-x-0 text-[#9F79F2]"
                          : "opacity-0 -translate-x-4"
                      )}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M5 12h14M13 5l6 7-6 7"
                          stroke={isActive ? "#9F79F2" : "#a0a0a0"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Display Card (unchanged) */}
            <div className="lg:col-span-7 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeContent.key}
                  initial="hidden"
                  animate={shouldAnimate ? "visible" : "visible"}
                  exit="exit"
                  variants={cardVariants}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0F]/50 backdrop-blur-xl p-8 sm:p-12 shadow-2xl"
                >
                  <div
                    className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full blur-[80px] opacity-20 transition-colors duration-500"
                    style={{ backgroundColor: activeContent.color }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className="p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                        style={{ color: activeContent.color }}
                      >
                        <DeferredIcon
                          iconName={activeContent.iconName}
                          isVisible={isInView}
                          size={32}
                        />
                      </div>

                      <div>
                        <h4 className="text-white/50 font-mono text-sm uppercase tracking-wider">
                          Stage 0{activeContent.id}
                        </h4>
                        <div
                          className="h-0.5 w-12 mt-1 rounded-full"
                          style={{ backgroundColor: activeContent.color }}
                        />
                      </div>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                      {activeContent.title}
                    </h3>

                    <h4 className="text-xl text-white/80 font-medium mb-6">
                      {activeContent.subtitle}
                    </h4>

                    <p className="text-lg text-white/60 leading-relaxed mb-8">
                      {activeContent.content}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {getTagsForStage(activeContent.key).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none">
                    <DeferredIcon
                      iconName={activeContent.iconName}
                      isVisible={isInView}
                      size={200}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          // ------------------------
          // MOBILE / TABLET — swipeable carousel
          // ------------------------

          <div className="relative w-full">
            {/* MOBILE NAVIGATION DOT PATH */}
            {/* MOBILE NAVIGATION DOT PATH */}
            <div className="flex flex-col items-center mb-6 select-none">
              {/* Dot Line */}
              <div className="flex items-center gap-2 text-white/40 mb-2 text-lg font-bold">
                {deliveryStages.map((stage, i) => (
                  <React.Fragment key={i}>
                    <span
                      className={cn(
                        "transition-all",
                        activeIndex === i ? "text-[#9F79F2]" : "text-white/30"
                      )}
                    >
                      {activeIndex === i ? "●" : "○"}
                    </span>
                    {i < deliveryStages.length - 1 && (
                      <span className="text-white/20">────</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Labels */}
              <div className="grid grid-cols-4 w-full text-center text-[10px] text-white/50 font-semibold tracking-wide">
                {deliveryStages.map((stage, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(i);
                    }}
                    className={cn(
                      "transition-colors",
                      activeIndex === i ? "text-[#9F79F2]" : "text-white/40"
                    )}
                  >
                    {stage.key.charAt(0) + stage.key.slice(1).toLowerCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Carousel viewport */}
            <div ref={carouselRef} className="overflow-hidden">
              <motion.div
                drag="x"
                dragConstraints={{
                  left: -Math.max(
                    0,
                    (deliveryStages.length - 1) * viewportWidth
                  ),
                  right: 0,
                }}
                onDragEnd={(_, info) => handleDragEnd(info)}
                style={{
                  display: "flex",
                  width: `${deliveryStages.length * viewportWidth}px`,
                  touchAction: "pan-y",
                }}
                animate={{ x: -activeIndex * viewportWidth }}
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
              >
                {deliveryStages.map((stage, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={stage.key}
                      style={{ minWidth: viewportWidth }}
                      className="px-3"
                    >
                      <motion.div
                        className="rounded-3xl border border-white/10 bg-[#0A0A0F]/50 backdrop-blur-xl p-6 shadow-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0.6, y: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className="p-3 rounded-lg bg-white/5 border border-white/10"
                            style={{ color: stage.color }}
                          >
                            <DeferredIcon
                              iconName={stage.iconName}
                              isVisible={true}
                              size={32}
                            />
                          </div>

                          <div>
                            <h4 className="text-white/50 font-mono text-xs uppercase tracking-wider">
                              Stage 0{stage.id}
                            </h4>
                            <div
                              className="h-0.5 w-12 mt-1 rounded-full"
                              style={{ backgroundColor: stage.color }}
                            />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">
                          {stage.title}
                        </h3>
                        <h4 className="text-lg text-white/80 mb-4">
                          {stage.subtitle}
                        </h4>
                        <p className="text-white/60 mb-6">{stage.content}</p>

                        <div className="flex flex-wrap gap-2">
                          {getTagsForStage(stage.key).map((t, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-white/70 rounded-md"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-6 gap-2">
              {deliveryStages.map((stage, i) => (
                <button
                  key={stage.key}
                  aria-label={`Go to ${stage.key}`}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    activeIndex === i ? "bg-[#9F79F2] scale-110" : "bg-white/20"
                  )}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(i);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Helper to generate some dummy tags for visual richness
function getTagsForStage(stage) {
  switch (stage) {
    case "DIAGNOSE":
      return ["Stakeholder Interviews", "Tech Audit", "Risk Matrix"];
    case "ENGINEER":
      return ["System Arch", "Tech Stack", "Sprint Planning"];
    case "EXECUTE":
      return ["Clean Code", "CI/CD", "Unit Testing"];
    case "DELIVER":
      return ["Deployment", "Documentation", "Knowledge Transfer"];
    default:
      return [];
  }
}

export default HowWeDeliver;
