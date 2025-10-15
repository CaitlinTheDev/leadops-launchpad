import { useEffect } from "react";

const Contact = () => {

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);


  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Reassurance copy */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
            Let's run a 15-minute fit check
          </h2>
          <p className="text-lg text-text-primary mb-6 leading-relaxed">
            No pressure, just clarity. Let's discuss your challenges and see if we're the right fit.
          </p>
          <p className="text-text-muted">
            We respond within 24 hours and respect your time. 
            Book a call—we're here to help.
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="animate-fade-in">
          <div 
            className="calendly-inline-widget bg-white rounded-2xl shadow-sm overflow-hidden" 
            data-url="https://calendly.com/razvan-ravexaconsulting/30min?hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
