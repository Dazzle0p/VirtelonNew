import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, ArrowRight, Zap } from "lucide-react";
import { ROB_PLANS } from "../assets/robdata";

const PricingCard = ({ plan }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      className="relative h-full"
    >
      <AnimatePresence>
        {plan.isPopular && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute -top-4 left-0 right-0 flex justify-center z-20 pointer-events-none"
          >
            <span className="bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 fill-black" />
              Most Popular
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="relative h-full flex flex-col p-8 rounded-3xl border transition-all duration-300 overflow-hidden"
        style={{
          backgroundColor: "rgba(23, 23, 23, 0.5)", // neutral-900/50
          borderColor: isHovered ? plan.glowColor : "#262626",
          boxShadow: isHovered
            ? `0 30px 60px -15px ${plan.glowColor}30, 0 0 0 1px ${plan.glowColor}`
            : "0 0 0 0 transparent",
        }}
      >
        {/* Top Gradient Fade */}
        <div
          className="absolute inset-x-0 top-0 h-32 opacity-10 pointer-events-none transition-opacity duration-500"
          style={{
            background: `linear-gradient(180deg, ${plan.glowColor}, transparent)`,
          }}
        />

        <div className="relative z-10 mb-6">
          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
            {plan.title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed h-[40px]">
            {plan.subtitle}
          </p>
        </div>

        <div className="w-full h-px bg-neutral-800 mb-6" />

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-bold ${plan.accentColor}`}>
              {plan.price}
            </span>
          </div>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mt-1">
            One-time engagement
          </p>
        </div>

        <div className="flex-grow mb-8">
          <ul className="space-y-4">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <div
                  className={`mt-0.5 min-w-[18px] w-[18px] h-[18px] rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors`}
                >
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-[14px] font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-3 mb-6 text-[11px] uppercase tracking-wider font-semibold text-neutral-500">
            <span className="bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-md flex items-center gap-1.5">
              Time: <span className="text-white">{plan.time}</span>
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className={`
              w-full py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300
              ${
                plan.isPopular
                  ? "bg-white text-black hover:bg-neutral-200 shadow-lg shadow-white/10"
                  : "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600"
              }
            `}
          >
            <span>{plan.cta}</span>
            <ArrowRight
              className={`w-4 h-4 ${
                isHovered ? "translate-x-1" : ""
              } transition-transform duration-300`}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ROBSection = () => {
  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-6"
        >
          <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold text-neutral-300 uppercase tracking-widest">
            Fixed Price & Scope
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          READY ON BOARD PACKAGES
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Select a package designed for your current stage. No hourly billing
          surprises—just shipped code.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {ROB_PLANS.map((plan, i) => (
          <PricingCard key={i} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default ROBSection;
