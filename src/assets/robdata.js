import {
  Rocket,
  Shield,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Layout,
  Code,
  Repeat,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES_DATA = [
  {
    title: "Rapid product launches",
    subtitle: "(Landing pages to MVPs)",
    description:
      "We build the foundation fast without accumulating technical debt.",
    icon: Rocket,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Ongoing platform maintenance",
    subtitle: "and SLAs",
    description: "Patches, monitoring, and security. We keep the lights on.",
    icon: Shield,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Growth engineering",
    subtitle: "(CRO, A/B testing)",
    description: "Analytics and performance tuning to maximize conversion.",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Fractional product engineering",
    subtitle: "(Dedicated PM + Team)",
    description:
      "Dedicated PM + remote team cycles for plug-and-play capacity.",
    icon: Users,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Integrations & automation",
    subtitle: "(CRMs, API Orchestration)",
    description:
      "Connecting tools (CRMs, analytics) to work as one cohesive system.",
    icon: Zap,
    gradient: "from-indigo-500 to-violet-500",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Outcome-first",
    description:
      "We don't just write code; we engineer business results. Every sprint is scoped against a measurable KPI—whether it's reducing latency, increasing conversion, or launching a new vertical. If it doesn't drive value, we don't build it.",
    icon: BarChart3,
  },
  {
    title: "Predictable delivery",
    description:
      "No black boxes. We use fixed-scope 'Rapid Outcome Builders' (ROBs) for clear deliverables and subscription retainers for ongoing velocity. You always know exactly what is shipping and when.",
    icon: Layout,
  },
  {
    title: "Transparency",
    description:
      "You get a dedicated Slack channel, weekly demo looms, and direct access to your lead engineer. No account managers playing telephone—just direct, high-bandwidth collaboration with the people building your product.",
    icon: Code,
  },
  {
    title: "Incremental impact",
    description:
      "We favor rapid iteration over 'big bang' launches. By shipping small, testable increments, we de-risk development and compound value faster than traditional dev shops. We iterate based on real user feedback.",
    icon: Repeat,
  },
];

export const HERO_STATS = [
  { label: "Avg. MVP Launch", value: "14 Days" },
  { label: "Uptime Guarantee", value: "99.9%" },
  { label: "Client Retention", value: "92%" },
  { label: "Code Ownership", value: "100%" },
];

export const ROB_PLANS = [
  {
    id: "startup",
    title: "Startup Launch ROB",
    subtitle: "Your brand, engineered to launch clean and fast.",
    features: [
      "Landing page + setup",
      "Core integrations",
      "SEO baseline",
      "Deployment setup",
      "1 revision cycle",
    ],
    time: "7–12 Days",
    scope: "Fixed Scope",
    price: "₹35,000 – ₹85,000",
    cta: "GET THIS ROB",
    accentColor: "text-cyan-400",
    glowColor: "#22d3ee", // cyan-400
  },
  {
    id: "growth",
    title: "Growth Engine ROB",
    subtitle: "Convert traffic into growth with measurable optimizations.",
    features: [
      "CRO audit",
      "1 feature enhancement",
      "API performance tuning",
      "Analytics & A/B setup",
      "1-month insights report",
    ],
    time: "10–18 Days",
    scope: "Performance Focused",
    price: "₹45,000 – ₹1,10,000",
    cta: "GET THIS ROB",
    accentColor: "text-purple-400",
    glowColor: "#c084fc", // purple-400
    isPopular: true,
  },
  {
    id: "maintenance",
    title: "Maintenance & Stability ROB",
    subtitle: "Keep your site stable, secure and always updated.",
    features: [
      "Full code audit",
      "Up to 15 bug fixes",
      "Security hardening",
      "Speed optimization",
      "1-month warranty",
    ],
    time: "5–10 Days",
    scope: "Includes QA",
    price: "₹18,000 – ₹45,000",
    cta: "GET THIS ROB",
    accentColor: "text-emerald-400",
    glowColor: "#34d399", // emerald-400
  },
];
