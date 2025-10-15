import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "services", "about", "packages", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-border shadow-sm py-3"
          : "bg-white border-b border-border py-4"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-brand-primary hover:text-brand-accent transition-all duration-300 hover:scale-110 active:scale-95 relative group"
          >
            <span className="relative z-10">Ravexa Consulting</span>
            <span className="absolute inset-0 bg-brand-accent/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: "services", label: "Services" },
              { id: "about", label: "About" },
              { id: "packages", label: "Packages" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-brand-accent"
                    : "text-text-muted hover:text-brand-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            variant="primary"
            onClick={() => scrollToSection("contact")}
            className="hidden sm:inline-flex"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
