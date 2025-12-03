import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import SimpleButton from "../utils/SimpleButton";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background opacity adjustment
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state true after scrolling 20 pixels down
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Main Navigation Bar ---
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4" role="banner">
      <nav
        className={`
          max-w-7xl mx-auto flex items-center justify-between h-[65px] px-6 sm:px-8 lg:px-10 rounded-[62px] 
          transition-all duration-500 border border-neon-purple/30 
          shadow-neon-lg
          ${
            scrolled
              ? "bg-background-dark/70 backdrop-blur-md shadow-neon-sm"
              : "bg-background-dark/30 backdrop-blur-sm shadow-neon-lg"
          }
        `}
        aria-label="Main Navigation"
      >
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-3 group cursor-pointer select-none">
          <img
            src={logo}
            alt="V"
            className="w-8 h-8 flex items-center justify-center"
          />
        </div>

        {/* Right: Desktop CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop CTA Button (Glass/Neon Style) */}
          <div>
            <SimpleButton glowColor="purple">
              {/* Inner span provides the dark, blurry background for the 'glass' effect */}
              <span className="relative flex gap-1 items-center">
                Contact Us
                <Phone
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </SimpleButton>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          {/* <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X size={28} className="text-neon-purple drop-shadow-neon-sm" />
            ) : (
              <Menu
                size={28}
                className="text-neon-purple drop-shadow-neon-sm"
              />
            )}
          </button> */}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {/* <div
        id="mobile-menu"
        className={`md:hidden absolute top-[80px] left-4 right-4 transition-all duration-300 ease-in-out overflow-hidden 
          rounded-xl border border-neon-purple/20 shadow-neon-sm
          bg-background-secondary/90 backdrop-blur-lg ${
            isOpen ? "max-h-40 py-4" : "max-h-0"
          }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <button
            className="w-11/12 h-[48px] rounded-[62px] font-semibold text-sm text-white transition-all duration-300 ease-in-out
              bg-neon-purple/70 shadow-button-glow border border-neon-purple/50
              hover:bg-neon-purple hover:shadow-[0_0_25px_var(--color-neon-purple)]"
            onClick={() => setIsOpen(false)} // Close on click
          >
            Start Build
          </button>
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;
