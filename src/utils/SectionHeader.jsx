const SectionHeader = ({ tag, title, highlight, description }) => {
  return (
    <div className="text-center mb-16">
      {tag && (
        <div
          data-aos="fade-down"
          data-aos-delay="0"
          data-aos-duration="500"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#9F79F2] mb-4"
        >
          {tag}
        </div>
      )}

      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
      >
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F79F2] to-blue-500">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
