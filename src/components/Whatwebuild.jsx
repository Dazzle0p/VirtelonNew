import GlassCard from "../utils/GlassCard";
import SectionHeader from "../utils/SectionHeader";

const Whatwebuild = () => {
  return (
    <section
      id="service"
      className="py-20 md:py-28 bg-[#050507] text-white px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <SectionHeader
          title="What we"
          highlight="Build"
          description="Smart solutions. Seamless performance. Real results."
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Core Builds Card */}
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="700"
          >
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
              to="/core-builds"
            />
          </div>

          {/* Advanced Engineering Card */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="700"
          >
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
              to="/adv-eng"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatwebuild;
