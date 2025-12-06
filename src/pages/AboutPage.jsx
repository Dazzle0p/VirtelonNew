import React from "react";
import { SERVICES, PROCESS_STEPS } from "../assets/projectData";
import { ArrowRight, Target, Layers } from "lucide-react";
import { CARD_THEMES, getCardTheme } from "../assets/cardThemes";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background-dark text-slate-200 relative overflow-hidden selection:bg-neon-purple selection:text-white">
      {/* Noise Texture */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none z-0" />

      {/* Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-indigo-900/20 blur-[120px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-neon-purple/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* ================= HERO SECTION ================= */}
        <section className="pt-32 pb-32 md:pt-30 md:pb-40 px-6 text-center max-w-7xl mx-auto">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md mb-12 animate-float">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full rounded-full bg-neon-purple opacity-75 animate-ping" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-neon-purple shadow-[0_0_10px_#9f79f2]" />
            </span>
            <span className="text-sm font-semibold text-slate-200 tracking-wide uppercase">
              About - Virtelon
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-10">
            Engineering that turns <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-neon-purple/20 blur-2xl rounded-full" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-blue-500">
                product friction
              </span>
            </span>
            <br className="hidden md:block" />
            <span className="text-white drop-shadow-2xl">
              into reliable growth
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-16 font-light">
            We partner with startups, D2C brands, and scale-ups to move from
            idea to{" "}
            <span className="text-white font-medium border-b border-neon-purple/50">
              reliable product
            </span>
            , and from live product to{" "}
            <span className="text-white font-medium border-b border-blue-500/50">
              repeatable growth
            </span>
            .
          </p>

          {/* CTA */}
          <div className="flex justify-center items-center gap-6 flex-col sm:flex-row">
            <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              <div className="absolute inset-0 rounded-full bg-white blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Start Growth{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="px-8 py-4 rounded-full text-white font-medium border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 backdrop-blur-sm">
              View Services
            </button>
          </div>
        </section>

        {/* ================= BENTO GRID ================= */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Who we are */}
            <div className="glass-panel p-10 md:p-14 rounded-3xl lg:col-span-7 relative overflow-hidden transition-all">
              <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-8">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Layers className="w-6 h-6 text-blue-400" />
                </div>
                Who we are?
              </h2>

              <p className="text-xl text-slate-300 leading-relaxed mb-8 font-light">
                Virtelon is a product engineering studio focused on delivering{" "}
                <strong className="text-white">
                  high-quality web experiences
                </strong>
                , <strong className="text-white">robust infrastructure</strong>,
                and{" "}
                <strong className="text-white">
                  measurable growth engineering
                </strong>
                .
              </p>

              <div className="h-px bg-gradient-to-r from-white/10 to-transparent my-8" />

              <div className="flex flex-wrap gap-3">
                {["Startups", "D2C Brands", "Scale-ups"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="glass-panel p-10 md:p-14 rounded-3xl lg:col-span-5 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-indigo-600 flex items-center justify-center text-white shadow-neon-glow mb-8">
                <Target className="w-7 h-7" />
              </div>

              <h3 className="text-sm font-bold text-neon-purple uppercase tracking-widest mb-4">
                Our Mission
              </h3>

              <p className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-6">
                "To make engineering predictable, measurable, and aligned to
                business outcomes."
              </p>

              <p className="text-slate-400 text-sm md:text-base border-l-2 border-white/10 pl-4">
                We design systems so teams spend less time firefighting and more
                time building durable value.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What we do?
            </h2>
            <div className="hidden md:block h-px flex-grow md:max-w-md bg-white/10 ml-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const theme = getCardTheme(i);

              return (
                <div
                  key={i}
                  className={`glass-panel p-8 rounded-2xl group hover:bg-white/[0.03] transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden border border-white/5 ${theme.borderColor} ${theme.glowColor}`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl`}
                  />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-background-secondary border border-white/5 flex items-center justify-center text-slate-300 ${theme.iconColor} ${theme.borderColor} ${theme.iconShadow} transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <ArrowRight className="w-5 h-5 -rotate-45 opacity-0 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-300 text-slate-500" />
                    </div>

                    <h3
                      className={`text-xl font-bold text-white mb-2 ${theme.titleColor} transition-colors duration-300`}
                    >
                      {service.title}
                    </h3>

                    {service.subtitle && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded mb-4">
                        {service.subtitle}
                      </span>
                    )}

                    <p className="text-slate-400 text-sm leading-relaxed mt-auto pt-4 border-t border-white/5 group-hover:text-slate-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= PROCESS STEPS ================= */}
        <section className="py-24 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How we work?
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-neon-purple to-transparent rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {PROCESS_STEPS.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div key={i} className="flex gap-6 group">
                    <div className="relative flex-shrink-0">
                      {/* Vertical Line */}
                      {i !== PROCESS_STEPS.length - 1 && (
                        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/5 group-hover:bg-white/10 transition-colors hidden md:block" />
                      )}

                      <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center border-white/10 text-white group-hover:border-neon-purple/50 transition-colors">
                        <StepIcon className="w-8 h-8" />
                      </div>
                    </div>

                    <div className="pt-2">
                      <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                        {step.title}
                        <span className="w-8 h-px bg-white/10 group-hover:bg-neon-purple/50 transition-colors" />
                      </h3>

                      <div className="glass-panel p-6 rounded-xl border border-white/5 bg-white/[0.01]">
                        <p className="text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-panel rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden border-t border-white/20">
              {/* Glows */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-neon-purple/20 blur-[80px] rounded-full" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-10">
                  Pick a Ready-On-Board to <br />
                  launch{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                    fast and clean.
                  </span>
                </h2>

                <div className="flex flex-col items-center gap-8">
                  <button className="px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-105 transition-all border border-white/20 flex items-center gap-3">
                    Launch Now
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div>
                    <p className="text-xl md:text-2xl text-slate-200 font-light italic mb-2">
                      "Delivering what others only claim."
                    </p>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      Make modern UI to improve UX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
