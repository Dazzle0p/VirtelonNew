import { useState } from "react";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// If you are using shadcn UI, import these:
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "ROBs", href: "/robs" },
    { name: "ContactUs", href: "/contact-us" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 1 business day.",
    });

    setFormData({
      fullName: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* ---------------- HERO ---------------- */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(54.76% 50% at 50% 0%, #361D88 0%, #170C39 50%, transparent 100%)",
          }}
        />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Start the{" "}
            <span className="text-neon-purple italic underline underline-offset-8 decoration-neon-purple">
              Conversation
            </span>
          </motion.h1>

          <p className="text-lg md:text-xl text-foreground font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
            Tell us what you're building, how fast you need it, and what success
            looks like.
          </p>

          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Typical responses within one business day.
          </p>
        </div>
      </section>

      {/* ---------------- FORM ---------------- */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl p-8 md:p-12 border border-border/50"
            style={{
              background:
                "linear-gradient(227.47deg, rgba(0,0,0,0.63) 37%, rgba(74,16,16,0.63) 65%, rgba(255,56,56,0.63) 100%)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Talk to engineering that ships
            </h2>

            <p className="text-sm text-muted-foreground text-center mb-8 max-w-xl mx-auto">
              We'll only use your info to respond.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border/50 rounded-xl h-12 focus:border-neon-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company (Optional)
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border/50 rounded-xl h-12 focus:border-neon-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Est. Budget
                    </label>
                    <Input
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border/50 rounded-xl h-12 focus:border-neon-purple"
                    />
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      E-mail Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border/50 rounded-xl h-12 focus:border-neon-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      I'm Reaching out About
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={7}
                      className="bg-secondary/50 border-border/50 rounded-xl resize-none focus:border-neon-purple"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="px-10 py-3 bg-neon-purple rounded-full text-white font-semibold hover:scale-105 transition-all shadow-[0_0_20px_rgba(159,121,242,0.5)]"
                >
                  ENQUIRE
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ---------------- DIRECT CONTACT ---------------- */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl p-8 md:p-12 border border-border/30"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(30,41,88,0.4), rgba(10,10,20,0.4))",
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-neon-purple mb-6">
              Prefer Direct Contact?
            </h3>

            <a
              href="mailto:contact@virtelon.com"
              className="inline-block px-8 py-3 bg-secondary/60 border border-border/50 rounded-full hover:border-neon-purple hover:text-neon-purple transition-all mb-4"
            >
              contact@virtelon.com
            </a>

            <p className="text-sm font-medium">Response : 1 Business Day</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
