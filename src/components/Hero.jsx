import React from "react";
import GetStartedButton from "./ui/GetStartedButton";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative xl:min-h-screen w-full flex flex-col items-center justify-center pt-10 pb-12">
      {/* Background Gradient */}

      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center px-6  mx-auto text-center flex-1">
        {/* Top Badge */}
        <div className="mt-10 md:mt-5 mb-10 px-6 py-2 rounded-full">
          <button
            type="button"
            className="group relative z-60 mx-auto rounded-full border border-[#361D88]/40 bg-[#170C39]/40 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105  hover:shadow-[0_0_20px_#361D88] active:scale-100 md:text-sm"
          >
            {/* Top Glow Line */}
            <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-linear-to-r from-transparent via-[#361D88] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>

            {/* Bottom Glow Line */}
            <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-linear-to-r from-transparent via-[#361D88] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>

            <span
              className="relative text-white"
              style={{
                textShadow: "0 0 6px #361D88, 0 0 12px #170C39",
              }}
            >
              Trust to Deliver
            </span>
          </button>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.15] mb-6">
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

        <GetStartedButton />

        {/* Bottom Small Text */}
        <p className="mt-6 text-xs text-gray-500 tracking-wide">
          Just click. Nothing to worry about.
        </p>
      </div>
    </section>
  );
}
