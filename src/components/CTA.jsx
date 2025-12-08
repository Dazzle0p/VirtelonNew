import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const Navigate = useNavigate();
  return (
    <section className="py-16 md:py-20 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="glass-panel rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 lg:p-24 text-center relative overflow-hidden border-t border-white/20"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {/* Glows */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="absolute -top-16 -left-16 md:-top-24 md:-left-24 w-48 h-48 md:w-64 md:h-64 bg-neon-purple/20 blur-[60px] md:blur-[80px] rounded-full" />
          <div className="absolute -bottom-16 -right-16 md:-bottom-24 md:-right-24 w-48 h-48 md:w-64 md:h-64 bg-blue-500/20 blur-[60px] md:blur-[80px] rounded-full" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-6 md:mb-10">
              Pick a Ready-On-Board to <br />
              launch{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                fast and clean.
              </span>
            </h2>

            <div className="flex flex-col items-center gap-6 md:gap-8 ">
              <button
                className="px-8 md:px-12 py-3 md:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base md:text-lg font-bold rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-105 transition-all border border-white/20 flex items-center gap-2 md:gap-3"
                onClick={() => Navigate("/robs")}
              >
                Launch Now
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
