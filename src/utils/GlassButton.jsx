import React from "react";

/**
 * GlassButton Component
 *
 * @param {object} props - Component props
 * @param {string} [props.variant="primary"] - Button style: "primary" | "secondary" | "outline" | "icon-only"
 * @param {React.ReactNode} props.children - Text/content inside the button
 * @param {React.ReactNode} [props.icon] - Optional icon element
 * @param {string} [props.className] - Additional custom classes
 * @param {any} props...rest - Other button props (onClick, disabled, etc.)
 *
 * @example
 * <GlassButton variant="secondary" icon={<ArrowRight />} >
 *   Get Started
 * </GlassButton>
 */
const GlassButton = React.forwardRef(
  ({ children, icon, variant = "primary", className = "", ...rest }, ref) => {
    // Variant Styles
    const variantClasses = {
      primary: "bg-[#0a0a12] text-white group-hover:bg-opacity-80",
      secondary: "bg-[#1d1d2a] text-purple-300 group-hover:bg-opacity-80",
      outline: "bg-transparent border border-purple-400 text-purple-300",
      "icon-only": "p-2 bg-[#0a0a12] text-purple-300 group-hover:bg-opacity-70",
    };

    const currentVariant = variantClasses[variant] || variantClasses.primary;

    return (
      <button
        ref={ref}
        className={`
          relative group overflow-hidden rounded-full p-px
          ${className}
        `}
        {...rest}
      >
        {/* Animated border */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        {/* Inner Button */}
        <span
          className={`
            relative flex items-center justify-center gap-2 rounded-full
            px-6 py-2.5 text-sm font-semibold backdrop-blur-3xl transition-all duration-300
            ${currentVariant}
            ${variant === "icon-only" ? "w-10 h-10 p-0!" : ""}
          `}
        >
          {children}

          {icon && (
            <span className="text-purple-400 flex items-center transition-transform group-hover:translate-x-1">
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
