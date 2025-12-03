import GlassCard from "../utils/GlassCard";

const Whatwebuild = () => {
  return (
    <section className="py-20 md:py-28 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-16 tracking-tight">
          WHAT WE <span className="italic font-light">Build </span>?
        </h2>

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
                "linear-gradient(47.47deg, rgba(0, 0, 0, 0.63) 37.52%, rgba(74, 16, 16, 0.63) 64.62%, rgba(255, 56, 56, 0.63) 100%)",
            }}
            glowColor="red"
            glowPosition="left"
          />

          {/* Advanced Engineering Card */}
          <GlassCard
            title="Advanced Engineering"
            description="High-performance tech for teams that need speed, automation, and intelligent infrastructure."
            pills={["AI automation", "Cloud & DevOps", "System optimization"]}
            gradientStyle={{
              background:
                "linear-gradient(47.47deg, rgba(0, 0, 0, 0.63) 37.52%, rgba(16, 16, 74, 0.63) 64.62%, rgba(56, 66, 255, 0.63) 100%)",
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
