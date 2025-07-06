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
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob absolute top-20 left-20 w-36 h-36 opacity-12"></div>
        <div className="decorative-blob absolute bottom-10 right-10 w-28 h-28 opacity-15" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Our Services</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive dental care services designed to keep your smile healthy, 
            beautiful, and confident at every stage of life.
          </p>
        </div>

        {/* Revolutionary Services Grid - Mobile First & Unique Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-gradient p-6 sm:p-8 rounded-2xl sm:rounded-3xl float-shadow hover-scale-lg group transition-all duration-500 fade-in-delay relative overflow-hidden ${
                index === 0 ? 'md:col-span-2 xl:col-span-1' : 
                index === 3 ? 'md:col-span-2 xl:col-span-2' :
                ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Unique Background Pattern - Hidden on mobile */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500 hidden sm:block">
                <div className="w-full h-full rounded-full border-4 border-primary/20"></div>
                <div className="absolute top-4 left-4 w-24 h-24 rounded-full border-2 border-secondary/30"></div>
                <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10"></div>
              </div>

              {/* Creative Side Accent Bar */}
              <div className="absolute left-0 top-0 w-1 sm:w-2 h-full bg-gradient-to-b from-primary via-secondary to-primary-light opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Enhanced Icon with Unique Animation */}
              <div className="relative z-10 mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 float-animation group-hover:scale-125 transition-transform relative" style={{animationDelay: `${index * 0.3}s`}}>
                  {service.icon}
                  {/* Icon Glow Effect */}
                  <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{
                    background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`
                  }}></div>
                </div>
              </div>

              {/* Content with Enhanced Typography */}
              <div className="space-y-4 sm:space-y-6 relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {service.description}
                </p>

                {/* Enhanced Features List with Creative Bullets */}
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-muted-foreground text-sm sm:text-base"
                    >
                      {/* Creative Animated Bullet */}
                      <div className="relative mr-3 sm:mr-4 flex-shrink-0">
                        <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-primary rounded-full group-hover:bg-primary-light transition-colors"></div>
                        <div className="absolute inset-0 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Unique Learn More Button with Creative Design */}
                <button className="mt-6 sm:mt-8 text-primary font-bold hover:text-primary-light transition-smooth flex items-center group/btn relative">
                  <span className="relative z-10">Learn More</span>
                  {/* Button Background Animation */}
                  <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -m-2"></div>
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover/btn:translate-x-2 transition-transform relative z-10"
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

              {/* Hover Effects - Additional Creative Elements */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] sm:border-r-[30px] border-r-primary/10 border-t-[20px] sm:border-t-[30px] border-t-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center fade-in">
          <div className="bg-gradient-to-r from-primary via-primary-light to-primary-glow p-12 md:p-16 rounded-3xl text-white shadow-2xl hover:shadow-3xl transition-shadow">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Smile?</h3>
            <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white text-primary px-12 py-6 rounded-2xl font-bold hover:bg-gray-50 transition-smooth btn-hover-lift text-xl shadow-lg hover:shadow-xl"
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