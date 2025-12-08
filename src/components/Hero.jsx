import React, { useEffect } from "react";
import GetStartedButton from "./ui/GetStartedButton";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 50,
      disable: function () {
        return window.innerWidth < 768;
      },
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section className="relative xl:min-h-screen w-full flex flex-col items-center justify-center pt-10 pb-12 overflow-hidden">
      {/* Existing background elements (unchanged) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center sm:mt-10 justify-center px-6 mx-auto text-center flex-1 w-full max-w-6xl">
        {/* Top Badge with Animation */}
        <div
          className="mt-10 md:mt-5 mb-10"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <button
            type="button"
            className="group relative z-60 mx-auto rounded-full border border-gray-400/30 bg-gradient-to-b from-gray-900/30 to-gray-800/20 px-6 py-2 text-xs backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-100 md:text-sm"
          >
            {/* Top Glow Line - Updated to silver */}
            <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-lg transition-all duration-500 group-hover:w-3/4"></div>

            {/* Bottom Glow Line - Updated to silver */}
            <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-lg transition-all duration-500 group-hover:h-px"></div>

            <span
              className="relative bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-clip-text text-transparent font-medium"
              style={{
                textShadow: "0 0 6px rgba(255,255,255,0.3)",
              }}
            >
              Trust to Deliver
            </span>
          </button>
        </div>

        {/* Main Headline with Silver-Gray Gradient */}
        <div className="mb-6 px-4" data-aos="fade-up" data-aos-delay="400">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] md:leading-[1.05]">
            {/* First Line */}
            <span className="block mb-2 md:mb-4">
              <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                When vision needs
              </span>
            </span>

            {/* Second Line */}
            <span className="block mb-2 md:mb-4">
              <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Velocity,
              </span>
            </span>

            {/* Third Line with "Engine" highlight */}
            <span className="block">
              <span className="inline-flex items-baseline">
                <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  we build the{" "}
                </span>
                <span className="ml-2 md:ml-4 relative">
                  {/* Main Engine text with sharp silver gradient */}
                  <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-clip-text text-transparent font-bold italic tracking-tighter">
                    Engine
                  </span>
                  {/* Subtle glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-400/30 via-gray-300/30 to-gray-400/30 bg-clip-text text-transparent blur-sm opacity-50">
                    Engine
                  </span>
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Subtext with Silver-Gray Gradient */}
        <div
          className="mb-10 px-4 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed">
            <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Delivering engineered outcomes that scale your business,
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              not your headaches.
            </span>
          </p>
        </div>

        {/* CTA Button with Animation */}
        <div className="mb-6" data-aos="zoom-in" data-aos-delay="600">
          <GetStartedButton />
        </div>

        {/* Bottom Small Text with Animation */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="700">
          <p className="text-xs text-gray-400 tracking-wide font-light">
            <span className="inline-flex items-center gap-2">
              <svg
                className="w-3 h-3 text-gray-500 animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                Just click. Nothing to worry about.
              </span>
              <svg
                className="w-3 h-3 text-gray-500 animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
