import { Target, Sparkles, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Pakages = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 50,
      disable: function () {
        const maxWidth = 768;
        return window.innerWidth < maxWidth;
      },
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Refresh AOS on resize
    window.addEventListener("resize", function () {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  // Refresh AOS when component mounts
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 bg-[#050507] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9F79F2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9F79F2]"></span>
            </span>
            Service Categories
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Choose Your{" "}
            <span className="relative inline-block">
              {/* Main gradient text */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2] via-blue-400 to-blue-500">
                Engineering
              </span>
              {/* Optional subtle text shadow for depth */}
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2]/30 via-blue-400/30 to-blue-500/30 -translate-y-[1px] translate-x-[1px] blur-[2px] opacity-70">
                Engineering
              </span>
            </span>{" "}
            Path
          </h2>
          <p
            className="text-white/60 text-base md:text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Whether you need foundational development or cutting-edge solutions,
            we have you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Core Builds - Left Card */}
          <div
            className={`rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent ${
              !isMobile
                ? "transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                : ""
            }`}
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-offset="100"
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div
              className={`absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 blur-[60px] rounded-full ${
                isMobile ? "opacity-50" : ""
              } animate-pulse`}
            />

            <div className="relative z-10">
              <div
                className="flex items-center gap-3 mb-4 md:mb-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-green-400 group"
                  data-aos="flip-left"
                  data-aos-delay="550"
                >
                  <Target className="w-5 h-5 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-white mb-1"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Core Builds
                  </h3>
                  <p
                    className="text-slate-400 text-sm md:text-base"
                    data-aos="fade-up"
                    data-aos-delay="650"
                  >
                    Essential digital foundation
                  </p>
                </div>
              </div>

              <p
                className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Foundational services that establish your digital presence with
                quality, speed, and reliability. Perfect for startups and
                businesses looking to build or enhance their core digital
                assets.
              </p>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {[
                  "Quick turnaround with predictable timelines",
                  "Standardized processes for consistent quality",
                  "Budget-friendly with fixed pricing",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-300"
                    data-aos="fade-up"
                    data-aos-delay={800 + index * 100}
                  >
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 active:scale-95 transition-all font-medium text-sm md:text-base relative overflow-hidden group"
                onClick={() => navigate("/core-builds")}
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                <span className="relative z-10 group-hover:text-green-300 transition-colors duration-300">
                  Explore Core Builds
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-green-400/30 rounded-full animate-pulse" />
            <div className="absolute bottom-6 right-6 w-1 h-1 bg-green-400/20 rounded-full animate-ping" />
          </div>

          {/* Advanced Engineering - Right Card */}
          <div
            className={`rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent ${
              !isMobile
                ? "transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                : ""
            }`}
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-offset="100"
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div
              className={`absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full ${
                isMobile ? "opacity-50" : ""
              } animate-pulse`}
            />

            <div className="relative z-10">
              <div
                className="flex items-center gap-3 mb-4 md:mb-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center text-purple-400 group"
                  data-aos="flip-left"
                  data-aos-delay="550"
                >
                  <Sparkles className="w-5 h-5 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-white mb-1"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Advanced Engineering
                  </h3>
                  <p
                    className="text-slate-400 text-sm md:text-base"
                    data-aos="fade-up"
                    data-aos-delay="650"
                  >
                    Cutting-edge innovation
                  </p>
                </div>
              </div>

              <p
                className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Specialized engineering solutions that solve complex problems,
                leverage emerging technologies, and create competitive
                advantages. Ideal for businesses looking to innovate and scale.
              </p>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {[
                  "Custom solutions for complex challenges",
                  "Integration of emerging technologies (AI, ML, etc.)",
                  "Consultation-based approach with flexible scopes",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-300"
                    data-aos="fade-up"
                    data-aos-delay={800 + index * 100}
                  >
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 active:scale-95 transition-all font-medium text-sm md:text-base relative overflow-hidden group"
                onClick={() => navigate("/adv-eng")}
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                <span className="relative z-10 group-hover:text-purple-300 transition-colors duration-300">
                  Explore Advanced Engineering
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" />
            <div className="absolute bottom-6 right-6 w-1 h-1 bg-purple-400/20 rounded-full animate-ping" />
          </div>
        </div>

        {/* Decorative Elements with AOS */}
        <div
          className="absolute left-1/4 top-1/4 w-64 h-64 bg-gradient-to-r from-green-500/5 to-purple-500/5 rounded-full blur-3xl"
          data-aos="zoom-in"
          data-aos-delay="1200"
        />
        <div
          className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-gradient-to-l from-green-500/5 to-purple-500/5 rounded-full blur-3xl"
          data-aos="zoom-in"
          data-aos-delay="1300"
        />
      </div>
    </section>
  );
};
