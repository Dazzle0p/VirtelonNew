import React from "react";
import GlassButton from "../utils/GlassButton";
import { ChevronRight } from "lucide-react";
import { Squircle } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative xl:min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-12">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-6xl mx-auto text-center flex-1">
        {/* Top Badge */}
        <div className="mt-10 md:mt-5 mb-10 px-6 py-2 rounded-full border border-purple-400/30 bg-purple-950/30 backdrop-blur-sm">
          <span className="text-sm font-medium text-white/90 tracking-wide">
            Trusted to Deliver.
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.15] mb-6">
          When vision needs Velocity,
          <br />
          <span className="inline-flex items-baseline relative mt-2">
            we build the{" "}
            <span className="ml-2 relative z-10 font-semibold italic text-purple-300">
              Engine
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Delivering engineered outcomes that scale your business,
          <br className="hidden sm:block" /> not your headaches.
        </p>

        {/* CTA Button */}

        <GlassButton variant="outline">
          {/* Inner span provides the dark, blurry background for the 'glass' effect */}
          <span className="relative flex gap-1 items-center text-xl tracking-widest text-gray-900">
            Initiate
            <ChevronRight
              size={16}
              className="text-gray-900 group-hover:translate-x-1 transition-transform"
            />
          </span>
        </GlassButton>

        {/* Bottom Small Text */}
        <p className="mt-6 text-xs text-gray-500 tracking-wide">
          Just click. Nothing to worry about.
        </p>
      </div>
    </section>
  );
}
