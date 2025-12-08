import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  User,
  Building,
} from "lucide-react";

const ContactUs = () => {
  const formRef = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ------- EmailJS Config -------
    const SERVICE_ID = import.meta.env.VITE_MAIL_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_MAIL_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_MAIL_PUBLIC_KEY;

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      toast.success("Message sent successfully!");

      setIsSubmitted(true);
      setIsSubmitting(false);

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Try again!");

      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "contact@virtelon.com",
      subtitle: "Typical response in 1 business day",
      color: "from-purple-500/20 to-blue-500/20",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 92202 45244",
      subtitle: "Mon–Fri, 9AM–6PM IST",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Remote First",
      subtitle: "Working globally across timezones",
      color: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background-dark text-slate-200 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-indigo-900/20 blur-[120px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-neon-purple/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-24 max-w-7xl mx-auto text-center px-4">
          <div
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 animate-float"
            data-aos="fade-down"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full rounded-full bg-neon-purple opacity-75 animate-ping" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-neon-purple shadow-[0_0_10px_#9f79f2]" />
            </span>
            <span className="text-sm font-semibold uppercase">Contact Us</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
            data-aos="fade-up"
          >
            Start the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-blue-500">
              Conversation
            </span>
            <br />
            <span className="text-white">That Delivers</span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg text-slate-400 mb-12"
            data-aos="fade-up"
          >
            Tell us your goals, timelines, and what you’re building. We’ll
            connect you with the right engineering team.
          </p>

          <div
            className="flex flex-row items-center justify-center gap-4 sm:gap-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Phone className="w-4 h-4 text-green-400" />
              <span className="text-sm text-slate-300">Contact</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">Collaborate</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Create</span>
            </div>
          </div>
        </section>

        {/* CONTACT METHODS */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <div
                key={i}
                className="glass-panel rounded-3xl p-6 text-center hover:bg-white/[0.04] transition-all"
                data-aos="fade-up"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} border border-white/10 flex items-center justify-center mx-auto mb-4`}
                >
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold">{method.title}</h3>
                <p className="text-xl font-semibold">{method.value}</p>
                <p className="text-sm text-slate-400">{method.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="glass-panel rounded-3xl p-10 border border-white/20 relative"
              data-aos="zoom-in"
              style={{
                background:
                  "linear-gradient(227deg, rgba(0,0,0,0.63) 30%, rgba(74,16,16,0.63) 60%, rgba(255,56,56,0.63) 100%)",
              }}
            >
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-green-500/20 border border-white/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-slate-300 max-w-md mx-auto">
                    We’ll respond within one business day.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
                  {/* Two Column Layout */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neon-purple outline-none"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neon-purple outline-none"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          name="company"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neon-purple outline-none"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neon-purple outline-none"
                          placeholder="+91 99999 99999"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neon-purple outline-none resize-none"
                      placeholder="Tell us about your project, timeline, and goals..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <p className="text-sm text-slate-400">
                      By submitting, you agree to our privacy policy.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative px-8 py-4 bg-gradient-to-r from-neon-purple to-blue-500 text-white font-bold rounded-full hover:scale-105 transition-all flex items-center gap-2 min-w-[200px] justify-center disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
