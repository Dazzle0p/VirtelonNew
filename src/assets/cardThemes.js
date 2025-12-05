// cardThemes.js - Configuration file for service card themes

export const CARD_THEMES = [
  {
    name: "purple",
    gradient: "from-neon-purple/20 to-indigo-600/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(159,121,242,0.4)]",
    borderColor: "group-hover:border-neon-purple/50",
    iconColor: "group-hover:text-neon-purple",
    titleColor: "group-hover:text-neon-purple",
    iconShadow: "group-hover:shadow-[0_0_15px_rgba(159,121,242,0.3)]",
  },
  {
    name: "blue",
    gradient: "from-blue-500/20 to-cyan-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
    borderColor: "group-hover:border-blue-500/50",
    iconColor: "group-hover:text-blue-400",
    titleColor: "group-hover:text-blue-400",
    iconShadow: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
  },
  {
    name: "indigo",
    gradient: "from-indigo-500/20 to-purple-600/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]",
    borderColor: "group-hover:border-indigo-500/50",
    iconColor: "group-hover:text-indigo-400",
    titleColor: "group-hover:text-indigo-400",
    iconShadow: "group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]",
  },
  {
    name: "violet",
    gradient: "from-violet-500/20 to-fuchsia-600/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]",
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "group-hover:text-violet-400",
    titleColor: "group-hover:text-violet-400",
    iconShadow: "group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]",
  },
  {
    name: "cyan",
    gradient: "from-cyan-500/20 to-blue-600/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]",
    borderColor: "group-hover:border-cyan-500/50",
    iconColor: "group-hover:text-cyan-400",
    titleColor: "group-hover:text-cyan-400",
    iconShadow: "group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
  },
  {
    name: "pink",
    gradient: "from-purple-600/20 to-pink-600/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]",
    borderColor: "group-hover:border-purple-600/50",
    iconColor: "group-hover:text-purple-400",
    titleColor: "group-hover:text-purple-400",
    iconShadow: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
  },
];

// Helper function to get theme by index
export const getCardTheme = (index) => {
  return CARD_THEMES[index % CARD_THEMES.length];
};
