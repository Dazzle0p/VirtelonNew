import { motion } from "framer-motion";

const SectionHeader = ({ tag, title, highlight, description }) => {
  return (
    <div className="text-center mb-16">
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4"
        >
          {tag}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.05, duration: 0.45 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
      >
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9F79F2] to-blue-500">
            {highlight}
          </span>
        )}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.12, duration: 0.45 }}
        className="text-white/60 text-lg max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
