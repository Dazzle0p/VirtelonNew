import {
  Rocket,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Layout as LayoutIcon,
  Code,
  BarChart3,
  Repeat,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    title: "Rapid product launches",
    subtitle: "(Landing pages to MVPs)",
    description:
      "We build the foundation fast without accumulating technical debt.",
    icon: Rocket, // component reference
  },
  {
    title: "Ongoing platform maintenance",
    subtitle: "and SLAs",
    description: "Patches, monitoring, and security. We keep the lights on.",
    icon: Shield,
  },
  {
    title: "Growth engineering",
    subtitle: "(CRO, A/B testing)",
    description: "Analytics and performance tuning to maximize conversion.",
    icon: TrendingUp,
  },
  {
    title: "Fractional product engineering",
    subtitle: "(Dedicated PM + Team)",
    description:
      "Dedicated PM + remote team cycles for plug-and-play capacity.",
    icon: Users,
  },
  {
    title: "Integrations & automation",
    subtitle: "(CRMs, API Orchestration)",
    description:
      "Connecting tools (CRMs, analytics) to work as one cohesive system.",
    icon: Zap,
  },
];

export const PROCESS_STEPS = [
  {
    title: "Outcome-first",
    description:
      "Every sprint ties to a measurable KPI. We don't just ship code; we ship business value.",
    icon: BarChart3,
  },
  {
    title: "Predictable delivery",
    description:
      "Fixed-scope ROBs for fast outcomes, and subscription retainers for continuous velocity.",
    icon: LayoutIcon,
  },
  {
    title: "Transparency",
    description:
      "Weekly reports, clear SLAs, and a single point of technical contact for every account.",
    icon: Code,
  },
  {
    title: "Incremental impact",
    description:
      "Small, testable changes that compound into meaningful business outcomes.",
    icon: Repeat,
  },
];
