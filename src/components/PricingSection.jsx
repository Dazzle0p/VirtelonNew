import React from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "@/utils/SectionHeader";

const GlassButton = ({
  children,
  className = "",
  variant = "primary",
  onClick,
}) => {
  const baseStyles =
    "relative w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.6)] border border-white/10",
    secondary:
      "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 backdrop-blur-md",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      )}
    </button>
  );
};

// ----------------- Main Pricing Card -----------------

const PricingTier = ({ name, price, description, features, isPopular }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <div
        className={`
          relative h-full flex flex-col p-8
          rounded-3xl border transition-all duration-500
          backdrop-blur-xl bg-white/[0.03]
          group
          ${
            isPopular
              ? "border-purple-500/30 shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)] bg-gradient-to-b from-purple-500/[0.05] to-transparent"
              : "border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
          }
        `}
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 blur-[50px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-500" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/20 blur-[50px] rounded-full group-hover:bg-indigo-500/30 transition-colors duration-500" />
        </div>

        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <span
              className="
                inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
                text-xs font-bold uppercase tracking-wider text-white
                bg-gradient-to-r from-indigo-500 to-purple-500
                shadow-[0_4px_12px_-2px_rgba(99,102,241,0.5)]
                border border-white/20
              "
            >
              <Sparkles size={12} className="text-yellow-200 fill-yellow-200" />
              Most Popular
            </span>
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6">
            <h3
              className={`text-lg font-semibold mb-2 ${
                isPopular ? "text-purple-300" : "text-slate-200"
              }`}
            >
              {name}
            </h3>

            <div className="flex items-baseline gap-1">
              <span className="text-xl md:text-[1.75rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70">
                {price}
              </span>

              {price !== "Custom" && (
                <span className="text-sm text-slate-500 font-medium">
                  /month
                </span>
              )}
            </div>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed min-h-[40px]">
              {description}
            </p>
          </div>

          <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8" />

          <ul className="space-y-4 mb-8 grow">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <div
                  className={`
                    mt-0.5 p-0.5 rounded-full 
                    ${
                      isPopular
                        ? "bg-purple-500/20 text-purple-300"
                        : "bg-slate-700/50 text-slate-400"
                    }
                    group-hover/item:text-white group-hover/item:bg-indigo-500/50 transition-colors duration-300
                  `}
                >
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-sm text-slate-300 group-hover/item:text-slate-200 transition-colors">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <GlassButton variant={isPopular ? "primary" : "secondary"}>
            Subscribe Now
          </GlassButton>
        </div>
      </div>
    </motion.div>
  );
};

// ----------------- Main Pricing Section -----------------

export const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-5 md:py-15 overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <SectionHeader
          tag="SUBSCRIPTIONS"
          title="Choose Your"
          highlight="Plan"
          description="Transparent pricing tailored to scale with your product's lifecycle."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          <PricingTier
            name="Foundation"
            price="₹9,999 - ₹14,999"
            description="Essential maintenance and security for growing teams."
            features={[
              "Scheduled maintenance",
              "Core security patches",
              "Basic uptime monitoring",
              "Minor UI/UX adjustments",
              "Monthly status report",
            ]}
          />

          <PricingTier
            name="Momentum"
            price="₹29,999 - ₹65,000"
            description="For scaling products that need speed and reliability."
            features={[
              "Everything in Foundation",
              "Feature iterations",
              "API updates & tuning",
              "Priority ticket handling",
              "Quarterly performance optimisation",
            ]}
            isPopular
          />

          <PricingTier
            name="Velocity"
            price="₹1,20,000 - ₹3,50,000"
            description="Fractional engineering + PM for high-growth teams."
            features={[
              "Dedicated technical manager",
              "Sprint-based feature delivery",
              "SLA-backed support",
              "Architecture restructuring as needed",
              "Advanced monitoring",
            ]}
          />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
            <div className="px-8 py-4 rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <span className="text-slate-400 text-sm">
                Need a custom enterprise solution?
              </span>

              <button
                onClick={() => navigate("/contact-us")}
                className="group flex items-center gap-2 text-indigo-300 hover:text-white font-medium text-sm transition-colors"
              >
                Contact Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
