import React from "react";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Whatwebuild from "../components/Whatwebuild";
import { PricingSection } from "../components/PricingSection";
import HowWeDeliver from "../components/HowWeDeliver";

const HomePage = () => {
  return (
    <div
      className="min-h-screen  text-white antialiased"
      style={{
        background:
          "radial-gradient(50% 25% at 50% 0%, #361D88 0%, #170C39 50%, #000000 100%)",
      }}
    >
      <Hero />
      <Metrics />
      <Whatwebuild />
      <PricingSection />
      <HowWeDeliver />
    </div>
  );
};

export default HomePage;
