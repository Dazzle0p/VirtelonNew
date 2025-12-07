import React, { useState } from "react";
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
  Database,
  Brain,
  MessageSquare,
  Music,
  Settings,
  Cloud,
  Zap,
  Sparkles,
  ArrowRight,
  Target,
  Users,
  Clock,
  Shield,
  Check,
  Filter,
  ChevronRight,
} from "lucide-react";

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <div
      className="group relative"
      data-aos="fade-up"
      data-aos-delay={index * 50}
      data-aos-duration="500"
    >
      <div
        className={`glass-panel rounded-3xl p-6 border border-white/5 hover:border-white/20 transition-all duration-500 h-full ${service.gradient} backdrop-blur-xl relative overflow-hidden hover:scale-[1.02] cursor-pointer`}
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
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full border ${
                service.category === "Core Builds"
                  ? "bg-green-500/10 border-green-500/20 text-green-400"
                  : "bg-purple-500/10 border-purple-500/20 text-purple-400"
              }`}
            >
              {service.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-blue-400 transition-all duration-300">
            {service.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <div className="relative z-10 mt-6">
          <div className="flex flex-wrap gap-1.5">
            {service.features.map((feature, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
};

// Services Page Component
const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const coreServices = [
    {
      title: "Website Development",
      description:
        "Custom, responsive websites engineered for speed and conversion.",
      icon: Globe,
      gradient: "bg-gradient-to-br from-purple-500/10 to-blue-500/10",
      features: ["Custom Code", "Responsive", "SEO", "Performance"],
      category: "Core Builds",
    },
    {
      title: "App Development",
      description:
        "Native & cross-platform apps built for performance and retention.",
      icon: Smartphone,
      gradient: "bg-gradient-to-br from-green-500/10 to-cyan-500/10",
      features: ["Native", "Cross-Platform", "Performance", "Retention"],
      category: "Core Builds",
    },
    {
      title: "Software Development",
      description:
        "Custom business systems and SaaS with maintainable architecture.",
      icon: Code,
      gradient: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
      features: ["SaaS", "Custom Systems", "Maintainable", "Scalable"],
      category: "Core Builds",
    },
    {
      title: "UI / UX Designing",
      description: "Interfaces that convert — usable, tested, polished.",
      icon: Palette,
      gradient: "bg-gradient-to-br from-pink-500/10 to-red-500/10",
      features: ["User-Centric", "Tested", "Conversion", "Polished"],
      category: "Core Builds",
    },
    {
      title: "Graphic Designing",
      description: "Brand assets and visuals that lift product perception.",
      icon: Layout,
      gradient: "bg-gradient-to-br from-orange-500/10 to-yellow-500/10",
      features: ["Brand Assets", "Visuals", "Identity", "Marketing"],
      category: "Core Builds",
    },
    {
      title: "Website Management",
      description: "Ongoing ops updates, monitoring, backups, and SLAs.",
      icon: Server,
      gradient: "bg-gradient-to-br from-cyan-500/10 to-emerald-500/10",
      features: ["Monitoring", "Updates", "Backups", "SLAs"],
      category: "Core Builds",
    },
    {
      title: "Brand Promotion",
      description: "Strategic digital promotion to drive qualified growth.",
      icon: TrendingUp,
      gradient: "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
      features: ["Strategy", "Digital", "Growth", "Targeted"],
      category: "Core Builds",
    },
    {
      title: "Customer Support Executive",
      description: "Human-run support ops integrated with your stack.",
      icon: Headphones,
      gradient: "bg-gradient-to-br from-rose-500/10 to-pink-500/10",
      features: ["Human Support", "Integration", "24/7", "Quality"],
      category: "Core Builds",
    },
    {
      title: "Troubleshooting (Fast Response)",
      description: "Rapid incident triage and permanent fixes.",
      icon: AlertTriangle,
      gradient: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
      features: ["Rapid Response", "Incident", "Fixes", "Reliability"],
      category: "Core Builds",
    },
  ];

  const advancedServices = [
    {
      title: "Web Scraping & Data Engineering",
      description:
        "Accurate data extraction pipelines that feed decisions and drive business intelligence.",
      icon: Database,
      gradient: "bg-gradient-to-br from-purple-500/10 to-blue-500/10",
      features: ["Real-time Data", "APIs", "ETL Pipelines", "Data Warehousing"],
      category: "Advanced Engineering",
    },
    {
      title: "Generative AI",
      description:
        "Practical ML integrations that automate workflows and enhance products with intelligent features.",
      icon: Brain,
      gradient: "bg-gradient-to-br from-green-500/10 to-cyan-500/10",
      features: ["LLM Integration", "Fine-tuning", "Automation", "Workflow AI"],
      category: "Advanced Engineering",
    },
    {
      title: "Voicebot / Chatbot (Conversational AI)",
      description:
        "Conversational systems that reduce support load and improve customer experience.",
      icon: MessageSquare,
      gradient: "bg-gradient-to-br from-pink-500/10 to-red-500/10",
      features: ["NLP", "Voice Synthesis", "Multi-platform", "24/7 Support"],
      category: "Advanced Engineering",
    },
    {
      title: "Sound Engineering & Music Production",
      description:
        "High-fidelity audio & composition for branded experiences, podcasts, and multimedia projects.",
      icon: Music,
      gradient: "bg-gradient-to-br from-orange-500/10 to-yellow-500/10",
      features: ["Audio Processing", "Composition", "Mixing", "Mastering"],
      category: "Advanced Engineering",
    },
    {
      title: "Troubleshooting — Deep Systems",
      description:
        "In-depth performance tuning, security hardening, and architectural rescue for complex systems.",
      icon: Settings,
      gradient: "bg-gradient-to-br from-gray-500/10 to-slate-500/10",
      features: [
        "Performance Tuning",
        "Security Hardening",
        "Architecture",
        "Rescue",
      ],
      category: "Advanced Engineering",
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description:
        "Scalable cloud architectures, CI/CD pipelines, and container orchestration solutions.",
      icon: Cloud,
      gradient: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
      features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD", "Infrastructure"],
      category: "Advanced Engineering",
    },
  ];

  const allServices = [...coreServices, ...advancedServices];

  const filteredServices =
    activeTab === "all"
      ? allServices
      : activeTab === "core"
      ? coreServices
      : advancedServices;

  const serviceCategories = [
    {
      id: "all",
      label: "All Services",
      count: allServices.length,
      color: "from-purple-500 to-blue-500",
    },
    {
      id: "core",
      label: "Core Builds",
      count: coreServices.length,
      color: "from-green-500 to-cyan-500",
    },
    {
      id: "advanced",
      label: "Advanced Engineering",
      count: advancedServices.length,
      color: "from-orange-500 to-red-500",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "End-to-End Solutions",
      description: "From concept to deployment and ongoing support",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Quality Guaranteed",
      description: "Industry best practices and rigorous testing",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Timely Delivery",
      description: "Adherence to deadlines with transparent communication",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Team",
      description: "Skilled professionals across all technologies",
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
              Our Services
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 md:mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-blue-500">
              Digital
            </span>
            <br className="hidden md:block" />
            <span className="text-white drop-shadow-2xl">
              Engineering Services
            </span>
          </h1>

          <p
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10 md:mb-16 font-light px-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            From foundational development to cutting-edge engineering, we
            provide end-to-end solutions that drive growth, enhance performance,
            and deliver measurable results for your business.
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
              Download Service Catalog
            </button>
          </div>
        </section>

        {/* SERVICE CATEGORIES TABS */}
        <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
          <div
            className="glass-panel rounded-3xl p-6 md:p-8"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Explore Our Services
                </h2>
                <p className="text-slate-400">
                  Filter by service category to find exactly what you need
                </p>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">
                <Filter className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-300">
                  Filter by Category
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 hover:border-white/20"
                  }`}
                >
                  {category.label}
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/20">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={`${service.category}-${index}`}
                service={service}
                index={index}
              />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16" data-aos="fade-up">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Filter className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                No Services Found
              </h3>
              <p className="text-slate-400 max-w-md mx-auto">
                Try selecting a different category or browse all our services
              </p>
            </div>
          )}
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-black/20">
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
                Whether you need foundational development or cutting-edge
                solutions, we have you covered.
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
                      <p className="text-slate-400">
                        Essential digital foundation
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">
                    Foundational services that establish your digital presence
                    with quality, speed, and reliability. Perfect for startups
                    and businesses looking to build or enhance their core
                    digital assets.
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
                    Specialized engineering solutions that solve complex
                    problems, leverage emerging technologies, and create
                    competitive advantages. Ideal for businesses looking to
                    innovate and scale.
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
                      <span>
                        Consultation-based approach with flexible scopes
                      </span>
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

        {/* BENEFITS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Why Choose Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                  Services
                </span>
              </h2>
              <div className="w-16 md:w-24 h-1 mx-auto bg-gradient-to-r from-neon-purple to-transparent rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-2xl group hover:bg-white/[0.03] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-white mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {benefit.description}
                  </p>
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
                  Ready to Transform Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                    Digital Presence?
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                  Whether you need core development or advanced engineering,
                  let's build something remarkable together.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <button className="px-8 md:px-12 py-3 md:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base md:text-lg font-bold rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-105 transition-all border border-white/20 flex items-center gap-3">
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button className="px-6 md:px-10 py-3 md:py-4 rounded-full text-white font-medium border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 backdrop-blur-sm">
                    Book a Consultation
                  </button>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-sm md:text-base text-slate-400">
                    <span className="text-slate-300 font-semibold">
                      Free consultation:
                    </span>{" "}
                    30-minute discovery call •
                    <span className="text-slate-300 font-semibold ml-4">
                      Response time:
                    </span>{" "}
                    Within 2 hours •
                    <span className="text-slate-300 font-semibold ml-4">
                      Projects delivered:
                    </span>{" "}
                    150+
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

export default ServicesPage;
