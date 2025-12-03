// GlassButton.jsx
import React from "react";

const SimpleButton = ({
  children = "EXPLORE",
  className = "",
  glowColor = "purple",
  ...props
}) => {
  const glowMap = {
    purple: "bg-purple-500/20",
    blue: "bg-blue-500/20",
    red: "bg-red-500/20",
  };

  return (
    <div className="relative inline-block">
      <button
        {...props}
        className={`
          relative px-8 py-3 rounded-full 
          bg-${glowColor}-600/40 backdrop-blur-md
          border border-${glowColor}-400/30
          text-white text-sm font-bold tracking-widest uppercase
          innerShadow-[0_0_30px_rgba(168,85,247,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:innerShadow-[0_0_50px_rgba(168,85,247,0.6)]
          transition-all duration-300 hover:scale-105
          overflow-hidden group
          ${className}
        `}
      >
        {/* Shine */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/20 to-transparent rounded-t-full pointer-events-none" />

        {/* Text */}
        <span className="relative z-10">{children}</span>

        {/* Hover Glow */}
        <div
          className={`
            absolute inset-0 
            ${glowMap[glowColor] || glowMap.purple}
            blur-xl opacity-0 
            group-hover:opacity-100 
            transition-opacity duration-300 pointer-events-none
          `}
        />
      </button>

      {/* Bottom glow */}
      <div
        className={`
        absolute -bottom-8 left-1/2 -translate-x-1/2 
        w-32 h-8 
        ${glowMap[glowColor] || glowMap.purple}
        blur-2xl rounded-full
      `}
      />
    </div>
  );
};

export default SimpleButton;
