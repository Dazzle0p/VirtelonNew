import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

const initialState = {
  email: "",
  name: "",
  socialProfile: "",
  mobileNo: "",
  service: "",
  requirements: "",
};

export default function ContactForm() {
  const { title } = useParams();
  const [formData, setFormData] = useState({ ...initialState, service: title });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Enter a valid email";
    if (formData.mobileNo && formData.mobileNo.length < 10)
      return "Mobile number must be 10 digits";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ ...initialState, service: title });
      })
      .catch(() => toast.error("Something went wrong! Try again."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Let’s Build Something Amazing
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="glassmorphism p-6 rounded-2xl space-y-4 border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm">Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-box"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-box"
            placeholder="johndoe@gmail.com"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block mb-1 text-sm">Mobile Number</label>
          <input
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            className="input-box"
            placeholder="9876543210"
          />
        </div>

        {/* Social Profile */}
        <div>
          <label className="block mb-1 text-sm">Social Profile</label>
          <input
            name="socialProfile"
            value={formData.socialProfile}
            onChange={handleChange}
            className="input-box"
            placeholder="LinkedIn / Instagram / Portfolio"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block mb-1 text-sm">Service</label>
          <input
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="input-box"
            placeholder="Web Development"
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="block mb-1 text-sm">Project Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="input-box h-28 resize-none"
            placeholder="Tell us about your project…"
          ></textarea>
        </div>

        {/* Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 rounded-xl bg-white text-black font-semibold shadow-xl hover:bg-gray-200 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </div>
  );
}
