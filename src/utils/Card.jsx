export default function Card({
  children,
  className = "",
  glowColor = "purple",
  backgroundUrl = null,
  ...rest
}) {
  const glowStyles = {
    purple:
      "shadow-[0_0_60px_rgba(139,92,246,0.15)] hover:shadow-[0_0_80px_rgba(139,92,246,0.25)]",
    blue: "shadow-[0_0_60px_rgba(59,130,246,0.15)] hover:shadow-[0_0_80px_rgba(59,130,246,0.25)]",
    gold: "shadow-[0_0_60px_rgba(234,179,8,0.15)] hover:shadow-[0_0_80px_rgba(234,179,8,0.25)]",
    green:
      "shadow-[0_0_60px_rgba(34,197,94,0.15)] hover:shadow-[0_0_80px_rgba(34,197,94,0.25)]",
    noglow:
      "shadow-[0_0_0px_rgba(0,0,0,0)] hover:shadow-[0_0_0px_rgba(0,0,0,0)]",
  };

  return (
    <div
      {...rest}
      className={`
        relative overflow-hidden rounded-4xl
        bg-linear-to-br from-[#1a1625] via-[#130f1f] to-[#0a0812]
        border border-white/8
        p-8
        transition-all duration-500 ease-out 
        hover:scale-[1.02] hover:border-white/12
        ${glowStyles[glowColor]}
        ${className}
      `}
    >
      {/* Background Image Layer */}
      {backgroundUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${backgroundUrl})`,
          }}
        />
      )}

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient shine effect */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-60 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-[3] h-full flex flex-col">{children}</div>
    </div>
  );
}
