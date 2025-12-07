import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Sparkles,
  User,
  Building,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      });
      // Show success message (you can use toast here)
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "contact@virtelon.com",
      subtitle: "Typical response within 1 business day",
      color: "from-purple-500/20 to-blue-500/20",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9AM-6PM EST",
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

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000+",
  ];

  return (
    <div className="min-h-screen bg-background-dark text-slate-200 relative overflow-hidden selection:bg-neon-purple selection:text-white">
      {/* Noise Texture */}
      <div className="fixed inset-0 bg-noise opacity-30 pointer-events-none z-0" />

      {/* Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-indigo-900/20 blur-[120px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-neon-purple/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-24 px-4 sm:px-6 text-center max-w-7xl mx-auto">
          <div
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md mb-8 md:mb-12 animate-float"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full rounded-full bg-neon-purple opacity-75 animate-ping" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-neon-purple shadow-[0_0_10px_#9f79f2]" />
            </span>
            <span className="text-sm font-semibold text-slate-200 tracking-wide uppercase">
              Contact Us
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 md:mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Start the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-blue-500">
              Conversation
            </span>
            <br className="hidden md:block" />
            <span className="text-white drop-shadow-2xl">That Delivers</span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10 md:mb-16 font-light px-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Tell us what you're building, how fast you need it, and what success
            looks like. We'll connect you with the right team to make it happen.
          </p>

          <div
            className="flex items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-sm text-slate-300">
                Response: 1 Business Day
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">Free Consultation</span>
            </div>
          </div>
        </section>

        {/* CONTACT METHODS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="glass-panel rounded-3xl p-6 text-center group hover:bg-white/[0.03] transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} border border-white/10 flex items-center justify-center text-white mx-auto mb-4`}
                >
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-xl font-semibold text-white mb-1">
                  {method.value}
                </p>
                <p className="text-sm text-slate-400">{method.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/20"
              data-aos="zoom-in"
              data-aos-delay="100"
              style={{
                background:
                  "linear-gradient(227.47deg, rgba(0, 0, 0, 0.63) 37.52%, rgba(74, 16, 16, 0.63) 64.62%, rgba(255, 56, 56, 0.63) 100%)",
              }}
            >
              {/* Glow Effects */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -right-10 w-20 h-20 md:-top-20 md:-right-20 md:w-40 md:h-40 bg-purple-500/20 blur-[30px] md:blur-[50px] rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-20 h-20 md:-bottom-20 md:-left-20 md:w-40 md:h-40 bg-blue-500/20 blur-[30px] md:blur-[50px] rounded-full" />
              </div>

              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Talk to Engineering That Ships
                  </h2>
                  <p className="text-slate-400 max-w-xl mx-auto">
                    We'll only use your information to respond and provide the
                    best solution for your needs.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Success State */}
                  {isSubmitted ? (
                    <div className="text-center py-16" data-aos="fade-in">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-slate-400 max-w-md mx-auto">
                        We'll get back to you within one business day.
                        Meanwhile, check out our case studies.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neon-purple focus:outline-none transition-colors"
                              placeholder="John Smith"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neon-purple focus:outline-none transition-colors"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              Company (Optional)
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neon-purple focus:outline-none transition-colors"
                              placeholder="Your Company"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                              <DollarSign className="w-4 h-4" />
                              Estimated Budget
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neon-purple focus:outline-none transition-colors appearance-none"
                            >
                              <option value="">Select a budget range</option>
                              {budgetRanges.map((range, index) => (
                                <option key={index} value={range}>
                                  {range}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                          I'm Reaching Out About
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neon-purple focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your project, timeline, and what you hope to achieve..."
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
                        <p className="text-sm text-slate-400">
                          By submitting, you agree to our privacy policy. No
                          spam, ever.
                        </p>
                        <button
                          type="submit"
                          className="group relative px-8 py-4 bg-gradient-to-r from-neon-purple to-blue-500 text-white font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(159,122,242,0.5)] hover:scale-105 transition-all flex items-center gap-2 min-w-[200px] justify-center"
                        >
                          <span className="relative z-10">Send Message</span>
                          <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple/50 to-blue-500/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / QUICK INFO */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                What Happens{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2] to-blue-500">
                  Next?
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Our process is transparent and designed to get you results
                quickly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  step: "01",
                  title: "Initial Response",
                  description:
                    "We'll get back to you within 24 hours with relevant questions.",
                  icon: "📧",
                },
                {
                  step: "02",
                  title: "Discovery Call",
                  description:
                    "A 30-minute call to understand your needs and timeline.",
                  icon: "📞",
                },
                {
                  step: "03",
                  title: "Custom Proposal",
                  description:
                    "A detailed scope, timeline, and investment estimate.",
                  icon: "📋",
                },
                {
                  step: "04",
                  title: "Project Kickoff",
                  description: "We start building within days of agreement.",
                  icon: "🚀",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-2xl group hover:bg-white/[0.03] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-xs font-bold text-neon-purple bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded-full">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-32 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div
              className="glass-panel rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 lg:p-24 text-center relative overflow-hidden border-t border-white/20"
              data-aos="zoom-in"
              data-aos-delay="100"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(30,41,88,0.4), rgba(10,10,20,0.4))",
              }}
            >
              {/* Glows */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="absolute -top-16 -left-16 md:-top-24 md:-left-24 w-48 h-48 md:w-64 md:h-64 bg-neon-purple/20 blur-[60px] md:blur-[80px] rounded-full" />
              <div className="absolute -bottom-16 -right-16 md:-bottom-24 md:-right-24 w-48 h-48 md:w-64 md:h-64 bg-blue-500/20 blur-[60px] md:blur-[80px] rounded-full" />

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-neon-purple to-indigo-600 flex items-center justify-center text-white shadow-neon-glow">
                  <Sparkles className="w-10 h-10" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-6">
                  Still Have{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-400">
                    Questions?
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                  Check our FAQ or schedule a quick call with our technical lead
                  to get specific answers.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <a
                    href="mailto:contact@virtelon.com"
                    className="px-8 md:px-12 py-3 md:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base md:text-lg font-bold rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-105 transition-all border border-white/20 flex items-center gap-3"
                  >
                    Email Us Directly
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <button className="px-6 md:px-10 py-3 md:py-4 rounded-full text-white font-medium border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 backdrop-blur-sm">
                    Schedule a Call
                  </button>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-sm md:text-base text-slate-400">
                    <span className="text-slate-300 font-semibold">
                      Working Hours:
                    </span>{" "}
                    Mon-Fri, 9AM-6PM EST •
                    <span className="text-slate-300 font-semibold ml-4">
                      Response Time:
                    </span>{" "}
                    1 Business Day •
                    <span className="text-slate-300 font-semibold ml-4">
                      Success Rate:
                    </span>{" "}
                    98%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
