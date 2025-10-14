const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Experience, not theory.
            </h2>
            <div className="space-y-4 text-text-primary text-lg leading-relaxed">
              <div className="flex gap-3">
                <span className="text-brand-accent font-bold">•</span>
                <p>
                  10+ years in strategy & ops across SaaS, manufacturing, and services.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-brand-accent font-bold">•</span>
                <p>
                  Lean/Six Sigma toolset + data-backed decision making.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-brand-accent font-bold">•</span>
                <p>
                  Programs delivered across 8 countries.
                </p>
              </div>
            </div>
          </div>

          {/* Right: KPI Cards */}
          <div className="grid gap-4 animate-fade-in">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-brand-accent mb-2">30%+</div>
              <p className="text-text-muted">Average cycle-time reduction</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-brand-accent mb-2">12w</div>
              <p className="text-text-muted">Typical time to first ROI</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-brand-accent mb-2">&gt;$25M</div>
              <p className="text-text-muted">Cumulative client impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
