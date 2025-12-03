import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SimpleButton from "../utils/SimpleButton";
import { CardSpotlight } from "../utils/CardSpotLight";

const PricingTier = ({ name, price, description, features, isPopular }) => {
  return (
    <CardSpotlight
      className={`h-full ${
        isPopular ? "border-primary" : "border-white/10"
      } border-2`}
    >
      <div className="relative h-full p-6 flex flex-col">
        {isPopular && (
          <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
            Most Popular
          </span>
        )}

        <h3 className="text-xl font-medium mb-2">{name}</h3>

        <div className="mb-4">
          <span className="text-2xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-gray-400">/month</span>}
        </div>

        <p className="text-gray-400 mb-6">{description}</p>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-sm text-gray-300">{feature}</span>
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
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Choose Your{" "}
          <span className=" text-neon-purple font-medium">Plan</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Simple Pricing, Scaled to your needs
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Foundation"
          price="₹9,999 – ₹14,999"
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
          price="₹29,999 – ₹65,000"
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
          price="₹1,20,000 – ₹3,50,000"
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
    </section>
  );
};
