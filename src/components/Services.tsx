import { Target, BookOpen, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Operating model design, OKRs, portfolio prioritization.",
    },
    {
      icon: BookOpen,
      title: "Training & Enablement",
      description: "Playbooks, KPI dashboards, leader routines.",
    },
    {
      icon: Settings,
      title: "Operations Management",
      description: "Process mapping, capacity planning, automation.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            We offer a wide range of services
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            designed to optimize <span className="text-text-primary font-semibold">your business</span> and achieve{" "}
            <span className="text-text-primary font-semibold">your goals</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
