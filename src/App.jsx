import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Whatwebuild from "./components/Whatwebuild";
import HowWeDeliver from "./components/HowWeDeliver";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { PricingSection } from "./components/PricingSection";

// Important: You must ensure the 'Megabyte' font is correctly imported and available,
// likely through your public/index.html or the main CSS file.
// Example in a standard HTML index file:
// <link href="https://fonts.googleapis.com/css2?family=Megabyte&display=swap" rel="stylesheet">

const App = () => {
  return (
    // Set the overall background and default text color for the application
    <div
      className="min-h-screen  text-white antialiased"
      style={{
        background:
          "radial-gradient(50% 25% at 50% 0%, #361D88 0%, #170C39 50%, #000000 100%)",
      }}
    >
      <Navbar />
      <Hero />
      <Metrics />
      <Whatwebuild />
      <PricingSection />
      <HowWeDeliver />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
