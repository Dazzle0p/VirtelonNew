import React, { useState } from "react";
import { Search, PenTool, CheckCircle, Truck } from "lucide-react";

const deliveryStages = [
  {
    key: "DIAGNOSE",
    icon: Search,
    title: "DIAGNOSE",
    content:
      "We diagnose by breaking down the problem to its roots, mapping constraints, risks and opportunities so nothing moves forward on guesswork.",
  },
  {
    key: "ENGINEER",
    icon: PenTool,
    title: "ENGINEER",
    content:
      "We design and architect the optimal solution, selecting the right technology stack and mapping out a robust development plan.",
  },
  {
    key: "EXECUTE",
    icon: CheckCircle,
    title: "EXECUTE",
    content:
      "The build phase: clean, scalable code is written, rigorously tested, and integrated to meet the highest performance standards.",
  },
  {
    key: "DELIVER",
    icon: Truck,
    title: "DELIVER",
    content:
      "We deploy the solution, ensuring smooth launch, comprehensive documentation, and a clear handover for ongoing operations.",
  },
];

const HowWeDeliver = () => {
  const [activeTab, setActiveTab] = useState(deliveryStages[0].key);
  const activeContent = deliveryStages.find((stage) => stage.key === activeTab);

  return (
    <section className="py-20 md:py-32 bg-[#0A0A0F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-['Megabyte'] tracking-wider">
          HOW WE <span className="text-[#9F79F2]">DELIVER</span>?
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2 sm:space-x-6">
          {deliveryStages.map((stage) => (
            <button
              key={stage.key}
              onClick={() => setActiveTab(stage.key)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out
                ${
                  activeTab === stage.key
                    ? "bg-black border border-[#9F79F2] text-[#9F79F2] shadow-[0_0_10px_#9F79F2]"
                    : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20"
                }`}
              aria-controls={`panel-${stage.key}`}
              role="tab"
              aria-selected={activeTab === stage.key}
            >
              {stage.key}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div
          id={`panel-${activeContent.key}`}
          role="tabpanel"
          className="p-8 md:p-12 rounded-3xl mx-auto max-w-4xl backdrop-blur-sm border border-white/10
            shadow-[0_0_15px_rgba(147,96,255,0.6)] transition-all duration-500 ease-in-out animate-fadeIn"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(180, 155, 233, 0.2) 0%, rgba(190, 160, 255, 0.2) 23.04%, rgba(29, 28, 33, 0.2) 100%)",
          }}
        >
          <div
            key={activeContent.key}
            className="transition-opacity duration-500"
          >
            <h3 className="text-4xl font-bold text-[#9F79F2] mb-4 font-['Megabyte'] tracking-wider flex items-center">
              <activeContent.icon
                size={36}
                className="mr-3"
                aria-hidden="true"
              />
              {activeContent.title}
            </h3>
            <p className="text-xl text-white/90">{activeContent.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;
