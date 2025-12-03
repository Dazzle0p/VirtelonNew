import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  // Placeholder Logo SVG for 'Viritelon'
  const Logo = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Viritelon Logo"
      role="img"
      className="text-[#9F79F2]"
    >
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM14.5 16L12 12L9.5 16H14.5ZM12 8L14.5 12L12 16L9.5 12L12 8Z"
        fill="currentColor"
      />
    </svg>
  );

  const SocialIcon = ({ icon: Icon, label }) => (
    <a
      href="#" // Placeholder link
      aria-label={label}
      className="p-2 text-white/60 hover:text-[#9F79F2] transition-colors duration-300
        hover:shadow-[0_0_10px_rgba(159,121,242,0.5)] rounded-full"
    >
      <Icon size={20} />
    </a>
  );

  return (
    <footer className="pt-16 pb-6 bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Logo />

          {/* Core Message */}
          <p className="text-xl sm:text-2xl font-semibold text-white mt-4 font-['Megabyte'] tracking-wider">
            Delivering what others only claim.
          </p>
          <p className="text-sm text-white/60 mt-2 mb-8 max-w-sm">
            Join thousands of StartUps already working with Viritelon.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-16">
            <SocialIcon icon={Facebook} label="Facebook" />
            <SocialIcon icon={Twitter} label="Twitter" />
            <SocialIcon icon={Instagram} label="Instagram" />
            <SocialIcon icon={Linkedin} label="LinkedIn" />
            <SocialIcon icon={Github} label="GitHub" />
          </div>
        </div>

        {/* Separator and Bottom Line */}
        <hr className="border-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/50">
          <p className="mb-2 sm:mb-0">
            &copy; 2025 Viritelon Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Placeholder for legal links or simple text */}
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
