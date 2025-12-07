import React, { useState } from "react";
import {
  Sparkles,
  Check,
  ArrowRight,
  Zap,
  Star,
  Clock,
  Shield,
  Target,
  Rocket,
  Users,
  DollarSign,
} from "lucide-react";
import { ROB_PLANS } from "../assets/robdata";

const PricingCard = ({ plan, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const planIcons = {
    Starter: <Zap className="w-6 h-6" />,
    Growth: <Rocket className="w-6 h-6" />,
    Scale: <Target className="w-6 h-6" />,
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="600"
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
          <div className="bg-gradient-to-r from-neon-purple to-blue-500 text-white text-xs font-bold px-4 py-2 uppercase tracking-wider rounded-full shadow-[0_0_30px_rgba(159,122,242,0.4)] flex items-center gap-2 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 fill-white" />
            Most Popular
          </div>
        </div>
      )}

      {/* Card Container */}
      <div
        className={`glass-panel rounded-3xl p-8 border transition-all duration-500 h-full flex flex-col relative overflow-hidden ${
          isHovered ? "border-white/30" : "border-white/10"
        } ${
          plan.isPopular
            ? "bg-linear-to-br from-white/[0.03] to-white/[0.01]"
            : ""
        }`}
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div
            className="absolute -top-10 -right-10 w-20 h-20 md:-top-20 md:-right-20 md:w-40 md:h-40 blur-[30px] md:blur-[50px] rounded-full transition-all duration-500"
            style={{
              backgroundColor: isHovered
                ? `${plan.glowColor
                    .replace(")", ", 0.3)")
                    .replace("rgb", "rgba")}`
                : `${plan.glowColor
                    .replace(")", ", 0.15)")
                    .replace("rgb", "rgba")}`,
            }}
          />
          <div className="absolute -bottom-10 -left-10 w-20 h-20 md:-bottom-20 md:-left-20 md:w-40 md:h-40 bg-blue-500/10 blur-[30px] md:blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
        </div>

        {/* Header */}
        <div className="relative z-10 mb-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                {plan.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {plan.subtitle}
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              {planIcons[plan.title] || <Star className="w-6 h-6" />}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-5" />

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span
              className="text-3xl font-bold"
              style={{ color: plan.accentColor }}
            >
              {plan.price}
            </span>
          </div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">
            One-time engagement
          </p>
        </div>

        {/* Features */}
        <div className="flex-grow mb-8">
          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Check className="w-4 h-4" />
            What's Included
          </h4>
          <ul className="space-y-3">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-400" strokeWidth={3} />
                </div>
                <span className="text-[14px] font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline & CTA */}
        <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Clock className="w-4 h-4" />
              <span className="text-white font-semibold">{plan.time}</span>
            </div>
            {plan.team && (
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Users className="w-4 h-4" />
                <span className="text-white font-semibold">{plan.team}</span>
              </div>
            )}
          </div>

          <button
            className={`
              w-full py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden
              ${
                plan.isPopular
                  ? "bg-gradient-to-r from-neon-purple to-blue-500 text-white hover:shadow-[0_0_40px_-10px_rgba(159,122,242,0.5)]"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-white/30"
              }
              group/btn
            `}
          >
            <span className="relative z-10">{plan.cta}</span>
            <ArrowRight
              className={`w-4 h-4 relative z-10 ${
                isHovered ? "translate-x-1" : ""
              } transition-transform duration-300`}
            />

            {/* Button Glow */}
            {plan.isPopular && (
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/50 to-blue-500/50 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const ROBSection = () => {
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
        {/* HERO SECTION */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-24 px-4 sm:px-6 text-center max-w-7xl mx-auto">
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
              Ready On Board Packages
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 md:mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Launch-Ready,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-blue-500">
              Engineering Packages
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10 md:mb-16 font-light px-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Select a package designed for your current stage. No hourly billing
            surprises—just shipped code and predictable outcomes.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-slate-300">Fixed Scope</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">
                Guaranteed Timeline
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Ready to Start</span>
            </div>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {ROB_PLANS.map((plan, i) => (
              <PricingCard key={i} plan={plan} index={i} />
            ))}
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4">
                Why Choose ROB?
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Predictable{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2] to-blue-500">
                  Engineering
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                No hourly billing, no scope creep—just clear deliverables and
                timelines.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: "Reasonable Pricing",
                  description: "No hidden costs or hourly billing surprises",
                  icon: <DollarSign className="w-6 h-6" />,
                  color: "from-green-500/20 to-emerald-500/20",
                },
                {
                  title: "Clear Timeline",
                  description: "Guaranteed delivery dates for every milestone",
                  icon: <Clock className="w-6 h-6" />,
                  color: "from-blue-500/20 to-cyan-500/20",
                },
                {
                  title: "Full Transparency",
                  description: "Weekly updates and detailed progress reports",
                  icon: <Shield className="w-6 h-6" />,
                  color: "from-purple-500/20 to-pink-500/20",
                },
                {
                  title: "Expert Team",
                  description: "Dedicated engineers with relevant expertise",
                  icon: <Users className="w-6 h-6" />,
                  color: "from-orange-500/20 to-red-500/20",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-2xl text-center group hover:bg-white/[0.03] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center text-white mx-auto mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 md:py-32 px-4 sm:px-6">
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-6">
                  Ready to Ship Code <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                    Without The Guesswork?
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                  Choose a package and get started immediately. No sales calls
                  needed—just select, pay, and we begin.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <button className="px-8 md:px-12 py-3 md:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base md:text-lg font-bold rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-105 transition-all border border-white/20 flex items-center gap-3">
                    Select Package & Start
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button className="px-6 md:px-10 py-3 md:py-4 rounded-full text-white font-medium border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 backdrop-blur-sm">
                    Schedule a Consultation
                  </button>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-sm md:text-base text-slate-400">
                    <span className="text-slate-300 font-semibold">
                      All packages include:
                    </span>
                    <span className="ml-2 text-green-400">
                      ✓ Technical Specifications
                    </span>{" "}
                    •
                    <span className="ml-2 text-green-400">
                      ✓ Weekly Progress Updates
                    </span>{" "}
                    •
                    <span className="ml-2 text-green-400">
                      ✓ Post-Launch Support
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ROBSection;
