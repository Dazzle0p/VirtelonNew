import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import SimpleButton from "../utils/SimpleButton";
import CardSpotlight from "../utils/CardSpotlight";
import SectionHeader from "../utils/SectionHeader";
import { useNavigate } from "react-router-dom";

const PricingTier = ({ name, price, description, features, isPopular }) => {
  return (
    <CardSpotlight
      className={`h-full ${
        isPopular ? "border-neon-purple" : "border-white/10"
      } border-2`}
    >
      <div className="relative h-full p-6 flex flex-col">
        {isPopular && (
          <span
            className="
    inline-flex items-center gap-2 px-3 py-1 rounded-full w-fit
    text-[10px] font-semibold tracking-wide text-[#d8b4fe]

    /* Glass layer */
    bg-white/10 backdrop-blur-md border border-white/20

    /* 3D hard edges */
    shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.6)]

    /* Neon glow */
    after:content-[''] after:absolute after:inset-0 after:rounded-full
    after:shadow-[0_0_8px_rgba(159,121,242,0.8),0_0_3px_rgba(159,121,242,0.6)]

    /* Slight lift animation */
    relative animate-[float_3s_ease-in-out_infinite]
  "
          >
            <Star
              size={11}
              className="text-[#d8b4fe] drop-shadow-[0_0_6px_rgba(159,121,242,0.9)]"
            />
            Most Popular
          </span>
        )}

        <h3 className="text-xl text-neon-purple font-bold mb-2">{name}</h3>

        <div className="mb-4">
          <span className="text-2xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-gray-400">/month</span>}
        </div>

        <p className="md:text-lg text-gray-400 mb-6">{description}</p>

        <ul className="space-y-3 mb-8 grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-neon-purple" />
              <span className="text-sm md:text-md text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <SimpleButton className="button-gradient w-full">
          Subscribe
        </SimpleButton>
      </div>
    </CardSpotlight>
  );
};

export const PricingSection = () => {
  const navigate = useNavigate();
  return (
    <section className="container px-4 py-24 mx-auto">
      <SectionHeader
        title="Choose Your"
        highlight="Plan"
        description="Simple Pricing, Scaled to your needs"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-white/60 mb-4">
          Need a custom solution? We're here to help.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[#5358e7] hover:text-[#538ee8]/80 font-medium transition-colors"
          onClick={() => navigate("contact-us")}
        >
          Contact our sales team →
        </motion.button>
      </motion.div>
    </section>
  );
};
