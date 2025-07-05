const Services = () => {
  const services = [
    {
      title: "Teeth Cleaning",
      description: "Professional dental cleanings to maintain optimal oral health and prevent gum disease.",
      icon: "🦷",
      features: ["Deep cleaning", "Plaque removal", "Gum health assessment", "Fluoride treatment"]
    },
    {
      title: "Teeth Whitening",
      description: "Safe, effective whitening treatments to brighten your smile and boost confidence.",
      icon: "✨",
      features: ["Professional whitening", "Custom trays", "Safe bleaching", "Lasting results"]
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solution that looks and feels like natural teeth.",
      icon: "🔧",
      features: ["Titanium implants", "Crown placement", "Bone grafting", "Full restoration"]
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with modern braces and clear aligners for all ages.",
      icon: "😁",
      features: ["Traditional braces", "Clear aligners", "Retainer therapy", "Adult orthodontics"]
    },
    {
      title: "Root Canal Therapy",
      description: "Save infected teeth with gentle, pain-free root canal treatments.",
      icon: "🩺",
      features: ["Pain relief", "Infection removal", "Tooth preservation", "Crown protection"]
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with veneers, crowns, and aesthetic dental procedures.",
      icon: "💎",
      features: ["Porcelain veneers", "Dental crowns", "Smile makeovers", "Bonding"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dental care services designed to keep your smile healthy, 
            beautiful, and confident at every stage of life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover-scale card-shadow group transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-smooth">
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button className="mt-6 text-primary font-semibold hover:text-primary-light transition-smooth flex items-center group">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-primary-light p-8 md:p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Schedule a consultation today and discover how our comprehensive dental services 
              can improve your oral health and confidence.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-smooth btn-hover-lift"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;