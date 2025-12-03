import GlassCard from "../utils/GlassCard";
import { motion } from "framer-motion";

const Whatwebuild = () => {
  return (
    <section className="py-20 md:py-28 bg-[#050507] text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            What we{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9F79F2] to-blue-500">
              Build
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg text-gray-400"
          >
            Smart solutions. Seamless performance. Real results.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Core Builds Card */}
          <GlassCard
            title="Core Builds"
            description="Foundational digital products engineered with performance, clarity, and long-term maintainability."
            pills={[
              "Web & Mobile Apps",
              "MVP Systems",
              "Business Workflow Tools",
            ]}
            gradientStyle={{
              background:
                "linear-gradient(227.47deg, rgba(0, 0, 0, 0.63) 37.52%, rgba(74, 16, 16, 0.63) 64.62%, rgba(255, 56, 56, 0.63) 100%)",
            }}
            glowColor="red"
            glowPosition="right"
          />

          {/* Advanced Engineering Card */}
          <GlassCard
            title="Advanced Engineering"
            description="High-performance tech for teams that need speed, automation, and intelligent infrastructure."
            pills={["AI automation", "Cloud & DevOps", "System optimization"]}
            gradientStyle={{
              background:
                "linear-gradient(137.47deg, rgba(0, 0, 0, 0.63) 37.52%, rgba(16, 16, 74, 0.63) 64.62%, rgba(56, 66, 255, 0.63) 100%)",
            }}
            glowColor="blue"
            glowPosition="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Whatwebuild;
