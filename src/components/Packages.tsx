import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Packages = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const packages = [
    {
      name: "Diagnostic",
      duration: "2 weeks",
      description: "For leaders needing rapid clarity.",
      deliverables: [
        "Current-state assessment",
        "ROI map",
        "90-day action plan",
      ],
      price: "$X fixed",
      recommended: false,
    },
    {
      name: "Accelerator",
      duration: "8–12 weeks",
      description: "For teams needing momentum and capability build.",
      deliverables: [
        "Redesigned workflows",
        "KPI instrumentation",
        "Enablement",
      ],
      price: "From $Y",
      recommended: true,
    },
    {
      name: "Partnership",
      duration: "Quarterly",
      description: "For ongoing transformation and governance.",
      deliverables: [
        "Roadmap ownership",
        "Cadence",
        "Quarterly OKR refresh",
      ],
      price: "Retainer",
      recommended: false,
    },
  ];

  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Engagement models
          </h2>
          <p className="text-lg text-text-muted">
            Choose the right approach for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up relative ${
                pkg.recommended
                  ? "border-brand-accent border-t-[3px]"
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-accent text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-primary mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">{pkg.duration}</p>
                <p className="text-text-primary">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-brand-primary mb-3">
                  Deliverables:
                </p>
                <ul className="space-y-2">
                  {pkg.deliverables.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-text-muted text-sm">
                      <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-brand-primary">
                  {pkg.price}
                </p>
              </div>

              <Button
                variant={pkg.recommended ? "primary" : "ghost"}
                className="w-full"
                onClick={scrollToContact}
              >
                Book a Call
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm">
          Custom scopes available.
        </p>
      </div>
    </section>
  );
};

export default Packages;
