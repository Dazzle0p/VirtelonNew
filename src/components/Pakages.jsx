import { Target, Sparkles, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Pakages = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 bg-[#050507]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4">
            Service Categories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2] to-blue-500">
              Engineering
            </span>{" "}
            Path
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Whether you need foundational development or cutting-edge solutions,
            we have you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Core Builds */}
          <div
            className={`rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent ${
              !isMobile
                ? "transition-transform duration-300 hover:scale-[1.02]"
                : ""
            }`}
          >
            <div
              className={`absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 blur-[60px] rounded-full ${
                isMobile ? "opacity-50" : ""
              }`}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-green-400">
                  <Target className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    Core Builds
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base">
                    Essential digital foundation
                  </p>
                </div>
              </div>

              <p className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base">
                Foundational services that establish your digital presence with
                quality, speed, and reliability. Perfect for startups and
                businesses looking to build or enhance their core digital
                assets.
              </p>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-start gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">
                    Quick turnaround with predictable timelines
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">
                    Standardized processes for consistent quality
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">
                    Budget-friendly with fixed pricing
                  </span>
                </li>
              </ul>

              <button
                className="w-full py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 active:scale-95 md:transition-all font-medium text-sm md:text-base"
                onClick={() => navigate("/core-builds")}
              >
                Explore Core Builds
              </button>
            </div>
          </div>

          {/* Advanced Engineering */}
          <div
            className={`rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent ${
              !isMobile
                ? "transition-transform duration-300 hover:scale-[1.02]"
                : ""
            }`}
          >
            <div
              className={`absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full ${
                isMobile ? "opacity-50" : ""
              }`}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    Advanced Engineering
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base">
                    Cutting-edge innovation
                  </p>
                </div>
              </div>

              <p className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base">
                Specialized engineering solutions that solve complex problems,
                leverage emerging technologies, and create competitive
                advantages. Ideal for businesses looking to innovate and scale.
              </p>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-start gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">
                    Custom solutions for complex challenges
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">
                    Integration of emerging technologies (AI, ML, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">
                    Consultation-based approach with flexible scopes
                  </span>
                </li>
              </ul>

              <button
                className="w-full py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 active:scale-95 md:transition-all font-medium text-sm md:text-base"
                onClick={() => navigate("/adv-eng")}
              >
                Explore Advanced Engineering
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
