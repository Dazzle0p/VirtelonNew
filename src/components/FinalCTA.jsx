import React from "react";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-40 bg-[#0A0A0F] text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4 font-['Megabyte'] tracking-wider">
          Your Vision Deserves
          <br />
          <span
            className="inline-block text-transparent bg-clip-text
            bg-gradient-to-r from-[#FF3838] to-[#9F79F2]
            shadow-[0_0_20px_rgba(159,121,242,0.8)]"
            style={{
              // Use a combination of text and box shadow to simulate neon glow
              textShadow:
                "0 0 10px rgba(159,121,242,0.6), 0 0 20px rgba(255,56,56,0.4)",
            }}
          >
            Momentum
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
          Let’s engineer something that actually moves the needle.
        </p>

        {/* Button */}
        <button
          className="h-[65px] w-[208px] rounded-[62px] font-bold text-lg text-white transition-all duration-300 ease-in-out
            bg-[#9F79F2] shadow-[0_4px_24px_7px_rgba(255,255,255,0.25)]
            hover:shadow-[0_0_25px_#9F79F2,0_0_50px_rgba(159,121,242,0.8)] hover:scale-[1.05]
            focus:outline-none focus:ring-4 focus:ring-[#9F79F2] focus:ring-offset-4 focus:ring-offset-black"
        >
          Start Build
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
