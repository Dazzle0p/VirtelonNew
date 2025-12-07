import React from "react";
import {
  Globe,
  Smartphone,
  Code,
  Palette,
  Layout,
  Server,
  TrendingUp,
  Headphones,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users,
  Target,
} from "lucide-react";

const ServiceCard = ({ title, subtitle, icon, gradient, index }) => {
  const Icon = icon;

  return (
    <div
      className="group relative"
      data-aos="fade-up"
      data-aos-delay={index * 50}
      data-aos-duration="500"
    >
      <div
        className={`glass-panel rounded-3xl p-6 border border-white/5 hover:border-white/20 transition-all duration-500 h-full ${gradient} backdrop-blur-xl relative overflow-hidden hover:scale-[1.02]`}
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute -top-8 -right-8 w-16 h-16 md:-top-10 md:-right-10 md:w-20 md:h-20 bg-purple-500/20 blur-[20px] md:blur-[30px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-500" />
          <div className="absolute -bottom-8 -left-8 w-16 h-16 md:-bottom-10 md:-left-10 md:w-20 md:h-20 bg-blue-500/20 blur-[20px] md:blur-[30px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-500" />
        </div>

        {/* Icon and Header */}
        <div className="relative z-10 mb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-slate-400 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
              #{index + 1}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-blue-400 transition-all duration-300">
            {title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">{subtitle}</p>
        </div>

        {/* Features */}
        <div className="relative z-10 mt-6">
          <div className="flex flex-wrap gap-1.5">
            {getFeatures(title).map((feature, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const getFeatures = (title) => {
  const featureMap = {
    "Website Development": ["Custom Code", "Responsive", "SEO", "Performance"],
    "App Development": ["Native", "Cross-Platform", "Performance", "Retention"],
    "Software Development": [
      "SaaS",
      "Custom Systems",
      "Maintainable",
      "Scalable",
    ],
    "UI / UX Designing": ["User-Centric", "Tested", "Conversion", "Polished"],
    "Graphic Designing": ["Brand Assets", "Visuals", "Identity", "Marketing"],
    "Website Management": ["Monitoring", "Updates", "Backups", "SLAs"],
    "Brand Promotion": ["Strategy", "Digital", "Growth", "Targeted"],
    "Customer Support Executive": [
      "Human Support",
      "Integration",
      "24/7",
      "Quality",
    ],
    "Troubleshooting (Fast Response)": [
      "Rapid Response",
      "Incident",
      "Fixes",
      "Reliability",
    ],
  };
  return featureMap[title] || ["Custom", "Professional", "Quality", "Support"];
};

const CoreBuilds = () => {
  const services = [
    {
      title: "Website Development",
      subtitle:
        "Custom, responsive websites engineered for speed and conversion.",
      icon: Globe,
      gradient: "bg-gradient-to-br from-purple-500/10 to-blue-500/10",
    },
    {
      title: "App Development",
      subtitle:
        "Native & cross-platform apps built for performance and retention.",
      icon: Smartphone,
      gradient: "bg-gradient-to-br from-green-500/10 to-cyan-500/10",
    },
    {
      title: "Software Development",
      subtitle:
        "Custom business systems and SaaS with maintainable architecture.",
      icon: Code,
      gradient: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
    },
    {
      title: "UI / UX Designing",
      subtitle: "Interfaces that convert — usable, tested, polished.",
      icon: Palette,
      gradient: "bg-gradient-to-br from-pink-500/10 to-red-500/10",
    },
    {
      title: "Graphic Designing",
      subtitle: "Brand assets and visuals that lift product perception.",
      icon: Layout,
      gradient: "bg-gradient-to-br from-orange-500/10 to-yellow-500/10",
    },
    {
      title: "Website Management",
      subtitle: "Ongoing ops updates, monitoring, backups, and SLAs.",
      icon: Server,
      gradient: "bg-gradient-to-br from-cyan-500/10 to-emerald-500/10",
    },
    {
      title: "Brand Promotion",
      subtitle: "Strategic digital promotion to drive qualified growth.",
      icon: TrendingUp,
      gradient: "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
    },
    {
      title: "Customer Support Executive",
      subtitle: "Human-run support ops integrated with your stack.",
      icon: Headphones,
      gradient: "bg-gradient-to-br from-rose-500/10 to-pink-500/10",
    },
    {
      title: "Troubleshooting (Fast Response)",
      subtitle: "Rapid incident triage and permanent fixes.",
      icon: AlertTriangle,
      gradient: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
    },
  ];

  const coreCapabilities = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Reliable Quality",
      description: "Consistent, maintainable code and designs",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Ongoing Support",
      description: "Continuous maintenance and updates",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Client-First",
      description: "Solutions tailored to your business needs",
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
              Core Builds
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 md:mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Foundation for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-blue-500">
              Digital Success
            </span>
            <br className="hidden md:block" />
            <span className="text-white drop-shadow-2xl">
              Core Development Services
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10 md:mb-16 font-light px-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Essential digital services that form the backbone of your online
            presence, from development to design and ongoing management.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] text-sm sm:text-base">
              <div className="absolute inset-0 rounded-full bg-white blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-medium border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 backdrop-blur-sm text-sm sm:text-base">
              View Portfolio
            </button>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4">
              Comprehensive Services
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Full-Spectrum{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2] to-blue-500">
                Development
              </span>{" "}
              Services
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything you need to build, launch, and grow your digital
              presence in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                  Core Builds
                </span>
              </h2>
              <div className="w-16 md:w-24 h-1 mx-auto bg-gradient-to-r from-neon-purple to-transparent rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-2xl group hover:bg-white/[0.03] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-white mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Workflow */}
            <div
              className="glass-panel p-8 rounded-3xl mt-12 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                <Target className="w-6 h-6 text-neon-purple" />
                Streamlined Workflow
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Consultation</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>Planning</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span>Development</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>Testing</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                  <span>Delivery</span>
                </div>
              </div>
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
                <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-neon-purple to-indigo-600 flex items-center justify-center text-white shadow-neon-glow">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-6">
                  Ready to Build Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                    Digital Foundation?
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                  Let's discuss your project and create a solid foundation for
                  your digital success.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <button className="px-8 md:px-12 py-3 md:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base md:text-lg font-bold rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-105 transition-all border border-white/20 flex items-center gap-3">
                    Start Your Build
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button className="px-6 md:px-10 py-3 md:py-4 rounded-full text-white font-medium border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 backdrop-blur-sm">
                    Schedule Discovery Call
                  </button>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-sm md:text-base text-slate-400">
                    <span className="text-slate-300 font-semibold">
                      Average project timeline:
                    </span>{" "}
                    2-8 weeks •
                    <span className="text-slate-300 font-semibold ml-4">
                      Starting at:
                    </span>{" "}
                    $2,500 •
                    <span className="text-slate-300 font-semibold ml-4">
                      Satisfaction rate:
                    </span>{" "}
                    98%
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

export default CoreBuilds;
