import React from "react";
import SectionHeader from "@/utils/SectionHeader";
import { Shield, Clock, Zap } from "lucide-react";
import CTA from "@/components/CTA";

const projects = [
  {
    title: "Healthcare Workflow Engine",
    challenge: "Legacy system struggling with scale and patient routing.",
    solution: "Modular workflow automation with role-based routing.",
    outcome: [
      "60% reduction in manual tasks",
      "Improved department coordination",
    ],
    gradient: "from-red-400/10 to-purple-500/10",
    borderColor: "border-white/5",
    iconColor: "text-red-400",
  },
  {
    title: "D2C Commerce Hub Optimization",
    challenge: "Low conversions and weak cart recovery.",
    solution: "A/B tested flows + optimized checkout architecture.",
    outcome: ["27% conversion uplift", "Faster multi-device load times"],
    gradient: "from-purple-400/10 to-blue-400/10",
    borderColor: "border-white/5",
    iconColor: "text-purple-400",
  },
  {
    title: "Cloud Infrastructure Modernization",
    challenge: "High cloud cost and unstable deployments.",
    solution: "IaC, CI/CD pipelines, autoscaling strategies.",
    outcome: ["38% cost reduction", "Stabler releases with auto-rollback"],
    gradient: "from-blue-400/10 to-purple-500/10",
    borderColor: "border-white/5",
    iconColor: "text-blue-400",
  },
  {
    title: "Creator Automation Toolkit",
    challenge: "Manual content distribution across platforms.",
    solution: "Unified API integration with automated scheduling.",
    outcome: ["5x faster content distribution", "Unified analytics dashboard"],
    gradient: "from-green-400/10 to-cyan-500/10",
    borderColor: "border-white/5",
    iconColor: "text-green-400",
  },
  {
    title: "Real-time Analytics Dashboard",
    challenge: "Slow data processing and outdated reports.",
    solution: "Streaming data pipeline with real-time visualization.",
    outcome: ["Real-time data processing", "95% faster report generation"],
    gradient: "from-cyan-400/10 to-blue-500/10",
    borderColor: "border-white/5",
    iconColor: "text-cyan-400",
  },
  {
    title: "TopNotch Ads Dashboard upgradation",
    challenge: "Manual workflows slowing onboarding and compliance.",
    solution: "Automated decision engine + workflow orchestration layer.",
    outcome: [
      "43% faster processing",
      "Near-zero errors",
      "Instant audit trail",
    ],
    gradient: "from-orange-400/10 to-red-500/10",
    borderColor: "border-white/5",
    iconColor: "text-orange-400",
  },
  {
    title: "E-commerce Platform for Clothing Brand (Pune)",
    challenge:
      "Brand needed a modern D2C store with fast load times and clean UX to compete in a saturated apparel market.",
    solution:
      "Built a custom e-commerce storefront with optimized product flows, smart filters, and a checkout experience tuned for conversions.",
    outcome: [
      "29% increase in product-page engagement",
      "Faster mobile performance across regions",
      "Streamlined catalog management for internal team",
    ],
    gradient: "from-red-400/10 to-purple-500/10",
    borderColor: "border-white/5",
    iconColor: "text-red-400",
  },
  {
    title: "Shopify Website for Home Decor Brand (UK)",
    challenge:
      "Existing store lacked structure, visual appeal, and international conversion readiness.",
    solution:
      "Designed and launched a Shopify theme with high-end visuals, optimized product storytelling, and localization-ready architecture.",
    outcome: [
      "34% uplift in add-to-cart rate",
      "Reduced bounce rate on landing pages",
      "Improved backend workflows through Shopify automation",
    ],
    gradient: "from-purple-400/10 to-blue-400/10",
    borderColor: "border-white/5",
    iconColor: "text-purple-400",
  },
  {
    title: "ATF Social Game & Software Platform (Dubai)",
    challenge:
      "Client needed a scalable gaming + social ecosystem capable of handling real-time interactions and rapid feature releases.",
    solution:
      "Engineered a modular backend, matchmaking logic, event pipeline, and a polished UX framework to support future expansions.",
    outcome: [
      "Stable real-time performance under heavy load",
      "Faster feature deployment cycles",
      "Architecture ready for multi-region scaling",
    ],
    gradient: "from-blue-400/10 to-purple-500/10",
    borderColor: "border-white/5",
    iconColor: "text-blue-400",
  },
];

const ProjectCard = ({
  title,
  challenge,
  solution,
  outcome,
  gradient,
  borderColor,
  iconColor,
  index,
}) => (
  <div
    className={`glass-panel rounded-3xl p-8 border ${borderColor} bg-gradient-to-br ${gradient} backdrop-blur-xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 cursor-pointer`}
    data-aos="fade-up"
    data-aos-delay={index * 100}
    data-aos-duration="600"
  >
    {/* Glow Effects */}
    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
      <div className="absolute -top-10 -right-10 w-20 h-20 md:-top-20 md:-right-20 md:w-40 md:h-40 bg-purple-500/20 blur-[30px] md:blur-[50px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-500" />
      <div className="absolute -bottom-10 -left-10 w-20 h-20 md:-bottom-20 md:-left-20 md:w-40 md:h-40 bg-blue-500/20 blur-[30px] md:blur-[50px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-500" />
    </div>

    {/* Icon Badge */}
    <div className="absolute top-6 right-6">
      <div
        className={`w-12 h-12 rounded-2xl bg-white/5 border ${borderColor} flex items-center justify-center ${iconColor}`}
      >
        <span className="text-2xl font-bold">#{index + 1}</span>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-white mb-6 pr-16 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-blue-400 transition-all duration-300">
      {title}
    </h3>

    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <p className="text-red-300 font-semibold text-sm uppercase tracking-wider">
            Challenge
          </p>
        </div>
        <p className="text-slate-300 text-base pl-4 border-l border-white/10">
          {challenge}
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
            Solution
          </p>
        </div>
        <p className="text-slate-300 text-base pl-4 border-l border-white/10">
          {solution}
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <p className="text-green-300 font-semibold text-sm uppercase tracking-wider">
            Outcome
          </p>
        </div>
        <ul className="text-slate-300 text-base space-y-2 pl-4 border-l border-white/10">
          {outcome.map((o, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
              {o}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function ProjectPage() {
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
              Projects
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 md:mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Engineered Outcomes
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-neon-purple/20 blur-2xl rounded-full" />
              <span className="relative text-transparent bg-clip-text bg-linear-to-r from-neon-purple via-indigo-400 to-blue-500">
                That Drive Impact
              </span>
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10 md:mb-16 font-light px-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            A curated look at the systems, products, and automation pipelines
            we've built to drive{" "}
            <span className="text-white font-medium border-b border-neon-purple/50">
              performance
            </span>{" "}
            for fast-moving teams across industries.
          </p>

          <div
            className="flex flex-row items-center justify-center gap-4 sm:gap-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-slate-300">Design</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">Develop</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Deploy</span>
            </div>
          </div>
        </section>

        {/* PROJECTS GRID SECTION */}
        <section className="py-5 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <SectionHeader
            tag="Selected Work"
            title="Industry-Leading"
            highlight="Projects"
            description="Real-world solutions that transformed business operations and drove measurable results."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>

          {/* "And many more..." section */}
          <div
            className="text-center mt-16 md:mt-24"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-white/20" />
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                and many more…
              </span>
              <div className="h-px w-12 md:w-24 bg-gradient-to-r from-white/20 to-transparent" />
            </div>
            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
              Each project is a testament to our commitment to delivering
              exceptional engineering solutions.
            </p>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-20" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                By The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                  Numbers
                </span>
              </h2>
              <div className="w-16 md:w-24 h-1 mx-auto bg-gradient-to-r from-neon-purple to-transparent rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  value: "150+",
                  label: "Projects Delivered",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  value: "4.8/5",
                  label: "Client Satisfaction",
                  color: "from-green-500 to-cyan-500",
                },
                {
                  value: "98%",
                  label: "On-Time Delivery",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  value: "5+",
                  label: "Years Experience",
                  color: "from-orange-500 to-red-500",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-panel p-6 md:p-8 rounded-2xl text-center group hover:bg-white/[0.03] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-slate-400 font-medium">
                    {stat.label}
                  </div>
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
}
