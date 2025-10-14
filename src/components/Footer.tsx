import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-2">LeadOps</div>
            <p className="text-sm text-gray-400">
              © {currentYear} LeadOps Consulting. All rights reserved.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@leadops.com"
              className="text-gray-400 hover:text-brand-accent transition-colors flex items-center gap-2"
              aria-label="Email us"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">contact@leadops.com</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="/privacy"
              className="text-sm text-gray-400 hover:text-brand-accent transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
