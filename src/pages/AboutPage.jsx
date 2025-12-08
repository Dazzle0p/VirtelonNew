import React, { useEffect } from "react";
import { SERVICES, PROCESS_STEPS } from "../assets/projectData";
import { ArrowRight, Target, Layers } from "lucide-react";
import { CARD_THEMES, getCardTheme } from "../assets/cardThemes";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const Navigate = useNavigate();
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
        <section className="pt-25 pb-15 md:pt-25 md:pb-40 px-4 sm:px-6 text-center max-w-7xl mx-auto">
          {/* Floating Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md mb-8 md:mb-12 animate-float"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full rounded-full bg-neon-purple opacity-75 animate-ping" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-neon-purple shadow-[0_0_10px_#9f79f2]" />
            </span>
            <span className="text-sm font-semibold text-slate-200 tracking-wide uppercase">
              About - Virtelon
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 md:mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Engineering that turns <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-neon-purple/20 blur-2xl rounded-full" />
              <span className="relative text-transparent bg-clip-text bg-linear-to-r from-neon-purple via-indigo-400 to-blue-500">
                product friction
              </span>
            </span>
            <br className="hidden md:block" />
            <span className="text-white drop-shadow-2xl">
              into reliable growth
            </span>
          </h1>

          {/* Description */}
          <p
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10 md:mb-16 font-light px-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
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
          <div
            className="flex justify-center items-center gap-4 sm:gap-6 flex-col sm:flex-row"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] text-sm sm:text-base"
              onClick={() => Navigate("/robs")}
            >
              <div className="absolute inset-0 rounded-full bg-white blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Start Growth{" "}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-medium border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 backdrop-blur-sm text-sm sm:text-base"
              onClick={() => Navigate("/services")}
            >
              View Services
            </button>
          </div>
        </section>

        {/* ================= BENTO GRID ================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            {/* Who we are */}
            <div
              className="glass-panel p-6 md:p-10 lg:p-14 rounded-3xl lg:col-span-7 relative overflow-hidden transition-all"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Layers className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                Who we are?
              </h2>

              <p className="text-base md:text-xl text-slate-300 leading-relaxed mb-6 md:mb-8 font-light">
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

              <div className="h-px bg-gradient-to-r from-white/10 to-transparent my-6 md:my-8" />

              <div className="flex flex-wrap gap-2 md:gap-3">
                {["Startups", "D2C Brands", "Scale-ups"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div
              className="glass-panel p-6 md:p-10 lg:p-14 rounded-3xl lg:col-span-5 relative overflow-hidden"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-indigo-600 flex items-center justify-center text-white shadow-neon-glow mb-6 md:mb-8">
                <Target className="w-5 h-5 md:w-7 md:h-7" />
              </div>

              <h3 className="text-xs md:text-sm font-bold text-neon-purple uppercase tracking-widest mb-3 md:mb-4">
                Our Mission
              </h3>

              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight mb-4 md:mb-6">
                "To make engineering predictable, measurable, and aligned to
                business outcomes."
              </p>

              <p className="text-slate-400 text-sm md:text-base border-l-2 border-white/10 pl-3 md:pl-4">
                We design systems so teams spend less time firefighting and more
                time building durable value.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div
            className="flex flex-col md:flex-row items-center md:items-end   md:justify-between gap-4 md:gap-6 mb-10 md:mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white ">
              What we do?
            </h2>
            <div className="hidden md:block h-px flex-grow md:max-w-md bg-white/10 ml-8" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const theme = getCardTheme(i);

              return (
                <div
                  key={i}
                  className={`glass-panel p-6 md:p-8 rounded-2xl group hover:bg-white/[0.03] transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden border border-white/5 ${theme.borderColor} ${theme.glowColor}`}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  {/* Glow Effects */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-20 h-20 md:-top-20 md:-right-20 md:w-40 md:h-40 bg-purple-500/20 blur-[30px] md:blur-[50px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-500" />
                    <div className="absolute -bottom-10 -left-10 w-20 h-20 md:-bottom-20 md:-left-20 md:w-40 md:h-40 bg-indigo-500/20 blur-[30px] md:blur-[50px] rounded-full group-hover:bg-indigo-500/30 transition-colors duration-500" />
                  </div>

                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl`}
                  />

                  <div className="relative z-10">
                    <div className="hidden md:flex justify-between items-start mb-4 md:mb-6">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background-secondary border border-white/5 flex items-center justify-center text-slate-300 ${theme.iconColor} ${theme.borderColor} ${theme.iconShadow} transition-all duration-300`}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 opacity-0 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-300 text-slate-500" />
                    </div>

                    <h3
                      className={`text-lg md:text-xl font-bold text-white mb-2 ${theme.titleColor} transition-colors duration-300`}
                    >
                      {service.title}
                    </h3>

                    {service.subtitle && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded mb-3">
                        {service.subtitle}
                      </span>
                    )}

                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-auto pt-3 md:pt-4 border-t border-white/5 group-hover:text-slate-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= PROCESS STEPS ================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-20" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                How we work?
              </h2>
              <div className="w-16 md:w-24 h-1 mx-auto bg-gradient-to-r from-neon-purple to-transparent rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              {PROCESS_STEPS.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={i}
                    className="flex gap-4 md:gap-6 group"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <div className="relative flex-shrink-0">
                      {/* Vertical Line */}
                      {i !== PROCESS_STEPS.length - 1 && (
                        <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/5 group-hover:bg-white/10 transition-colors hidden md:block" />
                      )}

                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl glass-panel flex items-center justify-center border-white/10 text-white group-hover:border-neon-purple/50 transition-colors">
                        <StepIcon className="w-5 h-5 md:w-8 md:h-8" />
                      </div>
                    </div>

                    <div className="pt-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 flex items-center gap-2 md:gap-3">
                        {step.title}
                        <span className="w-6 md:w-8 h-px bg-white/10 group-hover:bg-neon-purple/50 transition-colors" />
                      </h3>

                      <div className="glass-panel p-4 md:p-6 rounded-xl border border-white/5 bg-white/[0.01]">
                        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
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
        <section className="py-16 md:py-20 lg:py-32 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div
              className="glass-panel rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 lg:p-24 text-center relative overflow-hidden border-t border-white/20"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {/* Glows */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="absolute -top-16 -left-16 md:-top-24 md:-left-24 w-48 h-48 md:w-64 md:h-64 bg-neon-purple/20 blur-[60px] md:blur-[80px] rounded-full" />
              <div className="absolute -bottom-16 -right-16 md:-bottom-24 md:-right-24 w-48 h-48 md:w-64 md:h-64 bg-blue-500/20 blur-[60px] md:blur-[80px] rounded-full" />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-6 md:mb-10">
                  Pick a Ready-On-Board to <br />
                  launch{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                    fast and clean.
                  </span>
                </h2>

                <div className="flex flex-col items-center gap-6 md:gap-8">
                  <button className="px-8 md:px-12 py-3 md:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base md:text-lg font-bold rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-105 transition-all border border-white/20 flex items-center gap-2 md:gap-3">
                    Launch Now
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>

                  <div>
                    <p className="text-lg md:text-xl lg:text-2xl text-slate-200 font-light italic mb-1 md:mb-2">
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
