import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import GlassButton from "../utils/GlassButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "ROBs", href: "/robs" },
  ];

  // Track scroll to shrink / float navbar
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
      {/* GLASS + NEON FLOATING NAV */}
      <nav
        className={`
          flex items-center justify-between px-6 h-14 rounded-full transition-all duration-500 hover:cursor-pointer
          relative overflow-hidden backdrop-blur-xl bg-black/30 border border-gray-500/10
          shadow-[0_2px_8px_rgba(0,0,0,0.6)]
          before:content-[''] before:absolute before:inset-0 before:rounded-full
          before:shadow-[inset_0_2px_3px_rgba(255,255,255,0.2),inset_0_-4px_6px_rgba(0,0,0,0.6)]
          after:content-[''] after:absolute after:inset-0 after:rounded-full
          after:shadow-[0_0_6px_#a855f7,0_0_2px_#a855f7,inset_0_0_4px_rgba(168,85,247,0.3)]
          animate-[float_4s_ease-in-out_infinite]
          ${scrolled ? "scale-[0.96] -translate-y-1" : "scale-100"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-9 h-9 drop-shadow-[0_0_8px_#a855f7]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`
                  text-md transition-all duration-300 relative z-10
                  ${
                    isActive
                      ? "text-neon-purple font-semibold"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-neon-purple rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 z-10">
          <GlassButton
            className="hidden sm:flex items-center gap-2 rounded-full transition-all duration-300"
            children="Contact Us"
            icon={<Phone size={14} />}
            onClick={() => navigate("/contact-us")}
          />

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-purple-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-black/70 backdrop-blur-xl border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.25)] animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block w-full text-left py-3 text-white/70 border-b border-purple-500/10
                  transition-all duration-300
                  ${isActive ? "text-neon-purple" : "hover:text-white"}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
