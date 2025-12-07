import React from "react";

/**
 * GlassButton with Custom Animated Border Variants
 */
const GlassButton = React.forwardRef(
  (
    {
      children,
      icon,
      variant = "primary",
      borderVariant = "purple", // NEW PROP
      className = "",
      ...rest
    },
    ref
  ) => {
    // ---------------------------
    // Button Variants
    // ---------------------------
    const variantClasses = {
      primary: "bg-[#0a0a12] text-white group-hover:bg-opacity-80",
      secondary: "bg-[#1d1d2a] text-purple-300 group-hover:bg-opacity-80",
      outline: "bg-transparent border border-purple-400 text-purple-300",
      "icon-only": "p-2 bg-[#0a0a12] text-purple-300 group-hover:bg-opacity-70",
    };

    const currentVariant = variantClasses[variant] || variantClasses.primary;

    // ---------------------------
    // Border Animation Variants
    // ---------------------------
    const borderStyles = {
      purple:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
      red: "bg-[conic-gradient(from_90deg_at_50%_50%,#ff3b3b_0%,#a30000_50%,#ff3b3b_100%)]",
      black:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#444_0%,#000_50%,#444_100%)]",
      neon: "bg-[conic-gradient(from_90deg_at_50%_50%,#39ff14_0%,#00c2ff_50%,#39ff14_100%)]",
      gold: "bg-[conic-gradient(from_90deg_at_50%_50%,#FFD700_0%,#DAA520_50%,#FFD700_100%)]",
      light:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#cccccc_50%,#ffffff_100%)]",
      dark: "bg-[conic-gradient(from_90deg_at_50%_50%,#0a0a2a_0%,#2c1458_50%,#0a0a2a_100%)]",
    };

    const currentBorder = borderStyles[borderVariant] || borderStyles.purple;

    return (
      <button
        ref={ref}
        className={`relative group overflow-hidden rounded-full p-px ${className}`}
        {...rest}
      >
        {/* Animated spinning border */}
        <span
          className={`
            absolute inset-[-1000%] 
            animate-[spin_2s_linear_infinite] 
            ${currentBorder}
          `}
        />

        {/* Inner Section */}
        <span
          className={`
            relative flex items-center justify-center gap-2 rounded-full
            px-6 py-2.5 text-sm font-semibold backdrop-blur-3xl 
            transition-all duration-300 ${currentVariant}
            ${variant === "icon-only" ? "w-10 h-10 p-0!" : ""}
          `}
        >
          {children}

          {icon && (
            <span className="text-inherit flex items-center transition-transform group-hover:translate-x-1">
              {icon}
            </span>
          )}
        </span>
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export default GlassButton;
