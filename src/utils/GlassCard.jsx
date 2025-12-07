import React from "react";
import { ChevronRight } from "lucide-react";
import GlassButton from "./GlassButton";
import { useNavigate } from "react-router-dom";
export default function GlassCard({
  title,
  description,
  pills,
  gradientStyle,
  glowColor = "purple",
  glowPosition = "center",
  to,
}) {
  const navigate = useNavigate();
  const glowColors = {
    red: "bg-red-600/20",
    blue: "bg-blue-600/20",
    purple: "bg-purple-600/30",
  };

  const glowPositions = {
    center: "left-1/2 -translate-x-1/2",
    right: "right-1/4",
  };

  return (
    <div
      className=" relative p-10 rounded-4xl border border-white/10
        transition-all duration-500 ease-out
        hover:scale-[1.02] hover:border-white/15
        overflow-hidden backdrop-blur-xl"
      style={gradientStyle}
    >
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-linear-to-br from-white/3 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-4xl text-center font-bold text-white mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-white/90 mb-8 leading-relaxed max-w-md">
          {description}
        </p>

        {/* Pills */}
        <div className="flex flex-col items-center md:inline-block space-y-3 w-full mb-10">
          {pills.map((pill, index) => (
            <React.Fragment key={index}>
              <div className="inline-block px-15 py-2.5 rounded-full bg-white/8 border border-white/20 text-white text-sm font-medium backdrop-blur-md">
                {pill}
              </div>
              {index < pills.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>

        {/* Button with glassmorphism and reflection */}
        <div className="relative inline-block">
          <GlassButton
            children="EXPLORE"
            icon={<ChevronRight size={16} />}
            onClick={() => navigate(to)}
          />
          {/* Bottom reflection/glow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 bg-purple-600/30 blur-2xl rounded-full" />
        </div>
      </div>

      {/* Bottom ambient glow */}
      <div
        className={`absolute bottom-0 ${glowPositions[glowPosition]} w-64 h-32 ${glowColors[glowColor]} blur-[80px] opacity-60`}
      />
    </div>
  );
}
