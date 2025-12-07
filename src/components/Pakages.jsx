import { Target, Sparkles, Check } from "lucide-react";
export const Pakages = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#050507]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4">
            Service Categories
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2] to-blue-500">
              Engineering
            </span>{" "}
            Path
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Whether you need foundational development or cutting-edge solutions,
            we have you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Core Builds */}
          <div
            className="glass-panel rounded-3xl p-8 relative overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 blur-[60px] rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-green-400">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Core Builds
                  </h3>
                  <p className="text-slate-400">Essential digital foundation</p>
                </div>
              </div>

              <p className="text-slate-300 mb-6">
                Foundational services that establish your digital presence with
                quality, speed, and reliability. Perfect for startups and
                businesses looking to build or enhance their core digital
                assets.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Quick turnaround with predictable timelines</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Standardized processes for consistent quality</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Budget-friendly with fixed pricing</span>
                </li>
              </ul>

              <button className="w-full py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 transition-all font-medium">
                Explore Core Builds
              </button>
            </div>
          </div>

          {/* Advanced Engineering */}
          <div
            className="glass-panel rounded-3xl p-8 relative overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Advanced Engineering
                  </h3>
                  <p className="text-slate-400">Cutting-edge innovation</p>
                </div>
              </div>

              <p className="text-slate-300 mb-6">
                Specialized engineering solutions that solve complex problems,
                leverage emerging technologies, and create competitive
                advantages. Ideal for businesses looking to innovate and scale.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-purple-400" />
                  <span>Custom solutions for complex challenges</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-purple-400" />
                  <span>
                    Integration of emerging technologies (AI, ML, etc.)
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-purple-400" />
                  <span>Consultation-based approach with flexible scopes</span>
                </li>
              </ul>

              <button className="w-full py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-all font-medium">
                Explore Advanced Engineering
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
