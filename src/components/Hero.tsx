import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--brand-primary)) 0%, hsl(217, 33%, 12%) 100%)`,
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--brand-accent)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--brand-accent)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Strategic & Operational Management that Drives{" "}
              <span className="text-brand-accent">Measurable Results</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We help growth and enterprise teams remove bottlenecks, standardize processes, 
              and accelerate EBIT improvement.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                Book a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("services")}
              >
                Discover our work
              </Button>
            </div>

            {/* Trust strip placeholder */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Trusted by leading organizations</p>
              <div className="flex flex-wrap gap-8 opacity-50">
                <div className="text-white font-semibold">Company A</div>
                <div className="text-white font-semibold">Company B</div>
                <div className="text-white font-semibold">Company C</div>
              </div>
            </div>
          </div>

          {/* Right: Visual cards (inspired by reference images) */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-brand-accent text-3xl mb-2">🎯</div>
              <h3 className="text-white font-semibold mb-2">Experience & Expertise</h3>
              <p className="text-gray-400 text-sm">Years of strategic excellence</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 mt-8">
              <div className="text-brand-accent text-3xl mb-2">💡</div>
              <h3 className="text-white font-semibold mb-2">Individual approach</h3>
              <p className="text-gray-400 text-sm">Tailored solutions for your business</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-brand-accent text-3xl mb-2">🚀</div>
              <h3 className="text-white font-semibold mb-2">Innovation & Technology</h3>
              <p className="text-gray-400 text-sm">Cutting-edge methodologies</p>
            </div>
            <div className="bg-brand-accent/20 backdrop-blur-sm border border-brand-accent/30 rounded-2xl p-6 hover:bg-brand-accent/30 transition-all duration-300 mt-8">
              <div className="text-4xl font-bold text-white mb-1">30%</div>
              <p className="text-white text-sm">Increase in overall profit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
