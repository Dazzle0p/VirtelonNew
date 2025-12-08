import React from "react";
import {
  Database,
  Cpu,
  MessageSquare,
  Music,
  Settings,
  Sparkles,
  ArrowRight,
  Zap,
  Brain,
  Cloud,
  Headphones,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CTA from "@/components/CTA";

const ServiceCard = ({ title, subtitle, icon, gradient, index }) => {
  const Icon = icon;

  return (
    <div
      className="group relative"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="600"
    >
      <div
        className={`glass-panel rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-500 h-full ${gradient} backdrop-blur-xl relative overflow-hidden`}
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-20 h-20 md:-top-20 md:-right-20 md:w-40 md:h-40 bg-purple-500/20 blur-[30px] md:blur-[50px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-500" />
          <div className="absolute -bottom-10 -left-10 w-20 h-20 md:-bottom-20 md:-left-20 md:w-40 md:h-40 bg-blue-500/20 blur-[30px] md:blur-[50px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-500" />
        </div>

        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
            <Icon className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-blue-400 transition-all duration-300">
            {title}
          </h3>

          <p className="text-slate-300 text-base leading-relaxed">{subtitle}</p>
        </div>

        {/* Features & CTA */}
        <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-wrap gap-2 mb-4">
            {getFeatures(title).map((feature, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                {feature}
              </span>
            ))}
          </div>

          <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-between group/btn">
            <span className="text-white font-medium">Explore Service</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};

const getFeatures = (title) => {
  switch (title) {
    case "Web Scraping & Data Engineering":
      return ["Real-time Data", "APIs", "ETL Pipelines", "Data Warehousing"];
    case "Generative AI":
      return ["LLM Integration", "Fine-tuning", "Automation", "Workflow AI"];
    case "Voicebot / Chatbot (Conversational AI)":
      return ["NLP", "Voice Synthesis", "Multi-platform", "24/7 Support"];
    case "Sound Engineering & Music Production":
      return ["Audio Processing", "Composition", "Mixing", "Mastering"];
    case "Troubleshooting — Deep Systems":
      return [
        "Performance Tuning",
        "Security Hardening",
        "Architecture",
        "Rescue",
      ];
    default:
      return ["Custom Solutions", "Enterprise Grade", "Scalable", "Secure"];
  }
};

const AdvancedEngineering = () => {
  const Navigate = useNavigate();
  const services = [
    {
      title: "Web Scraping & Data Engineering",
      subtitle:
        "Accurate data extraction pipelines that feed decisions and drive business intelligence.",
      icon: Database,
      gradient: "bg-gradient-to-br from-purple-500/10 to-blue-500/10",
    },
    {
      title: "Generative AI",
      subtitle:
        "Practical ML integrations that automate workflows and enhance products with intelligent features.",
      icon: Brain,
      gradient: "bg-gradient-to-br from-green-500/10 to-cyan-500/10",
    },
    {
      title: "Voicebot / Chatbot (Conversational AI)",
      subtitle:
        "Conversational systems that reduce support load and improve customer experience.",
      icon: MessageSquare,
      gradient: "bg-gradient-to-br from-pink-500/10 to-red-500/10",
    },
    {
      title: "Sound Engineering & Music Production",
      subtitle:
        "High-fidelity audio & composition for branded experiences, podcasts, and multimedia projects.",
      icon: Headphones,
      gradient: "bg-gradient-to-br from-orange-500/10 to-yellow-500/10",
    },
    {
      title: "Troubleshooting — Deep Systems",
      subtitle:
        "In-depth performance tuning, security hardening, and architectural rescue for complex systems.",
      icon: Settings,
      gradient: "bg-gradient-to-br from-gray-500/10 to-slate-500/10",
    },
    {
      title: "Cloud Infrastructure & DevOps",
      subtitle:
        "Scalable cloud architectures, CI/CD pipelines, and container orchestration solutions.",
      icon: Cloud,
      gradient: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
    },
  ];

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
              Advanced Engineering
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 md:mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Beyond{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-blue-500">
              Standard
            </span>
            <br className="hidden md:block" />
            <span className="text-white drop-shadow-2xl">
              Engineering Solutions
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10 md:mb-16 font-light px-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Specialized engineering services that push boundaries, solve complex
            challenges, and create competitive advantages through cutting-edge
            technology.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] text-sm sm:text-base"
              onClick={() => Navigate("/robs")}
            >
              <div className="absolute inset-0 rounded-full bg-white blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Start Advanced Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4">
              Specialized Services
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Cutting-Edge{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2] to-blue-500">
                Engineering
              </span>{" "}
              Services
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From AI/ML to infrastructure, we deliver specialized solutions for
              complex technical challenges.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4">
                Our Capabilities
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2] to-blue-500">
                  Advanced
                </span>{" "}
                Engineering?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Deep Technical Expertise",
                  description:
                    "Specialized knowledge in niche technologies and complex system architecture",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Enterprise-Grade Security",
                  description:
                    "Robust security protocols and compliance-focused development",
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Innovation-First Approach",
                  description:
                    "Pushing boundaries with cutting-edge technologies and novel solutions",
                },
                {
                  icon: <Cpu className="w-6 h-6" />,
                  title: "Performance Optimization",
                  description:
                    "Fine-tuning systems for maximum efficiency and scalability",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-2xl text-center group hover:bg-white/[0.03] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-white mx-auto mb-4">
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

        {/* CTA */}
        <CTA />
      </div>
    </div>
  );
};

export default AdvancedEngineering;
