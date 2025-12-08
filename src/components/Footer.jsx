import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "ROBs", href: "/robs" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/virtelon.pvt.ltd/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/virtelon-pvt-ltd/",
      label: "LinkedIn",
    },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

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
    <footer className="pt-5 md:pt-16 md:pb-6 bg-background-dark text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col text-center md:text-start md:grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="w-full flex justify-center md:inline-block">
              <img className="h-10 w-10 " src={logo} alt="Vertelon" />
            </div>

            <h4 className="text-xl font-bold">
              Delivering what others only claim.
            </h4>
            <p className="text-sm text-muted-foreground">
              Join thousands of StartUps already working with Virtelon.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-neon-purple transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Virtelon Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-neon-purple transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
