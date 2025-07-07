
const Services = () => {
  const services = [
    {
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile.",
      icon: "✨",
      features: ["Professional bleaching", "Custom trays", "Same-day results", "Long-lasting brightness"]
    },
    {
      title: "Orthodontics",
      description: "Modern braces and clear aligners to straighten teeth for all ages.",
      icon: "😁", 
      features: ["Clear aligners", "Traditional braces", "Adult orthodontics", "Retainer therapy"]
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement that looks and feels completely natural.",
      icon: "🦷",
      features: ["Titanium implants", "Natural appearance", "Bone preservation", "Lifetime solution"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob absolute top-10 sm:top-20 left-10 sm:left-20 w-24 sm:w-36 h-24 sm:h-36 opacity-12"></div>
        <div className="decorative-blob absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-20 sm:w-28 h-20 sm:h-28 opacity-15" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient-primary">Our Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive dental care services designed to keep your smile healthy, 
            beautiful, and confident at every stage of life.
          </p>
        </div>

        {/* Mobile-First Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-gradient p-6 sm:p-8 rounded-2xl sm:rounded-3xl float-shadow hover-scale-lg group transition-all duration-500 fade-in-delay relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Unique Background Pattern - Hidden on mobile for performance */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500 hidden sm:block">
                <div className="w-full h-full rounded-full border-4 border-primary/20"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full border-2 border-secondary/30"></div>
                <div className="absolute top-6 sm:top-8 left-6 sm:left-8 w-8 sm:w-16 h-8 sm:h-16 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10"></div>
              </div>

              {/* Creative Side Accent Bar */}
              <div className="absolute left-0 top-0 w-1 sm:w-2 h-full bg-gradient-to-b from-primary via-secondary to-primary-light opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Enhanced Icon with Unique Animation */}
              <div className="relative z-10 mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 float-animation group-hover:scale-125 transition-transform relative" style={{animationDelay: `${index * 0.3}s`}}>
                  {service.icon}
                  {/* Icon Glow Effect */}
                  <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{
                    background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`
                  }}></div>
                </div>
              </div>

              {/* Content with Enhanced Typography */}
              <div className="space-y-3 sm:space-y-4 relative z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Enhanced Features List with Creative Bullets */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-muted-foreground text-xs sm:text-sm"
                    >
                      {/* Creative Animated Bullet */}
                      <div className="relative mr-2 sm:mr-3 flex-shrink-0">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full group-hover:bg-primary-light transition-colors"></div>
                        <div className="absolute inset-0 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Unique Learn More Button with Creative Design */}
                <button className="mt-4 sm:mt-6 text-primary font-bold hover:text-primary-light transition-smooth flex items-center group/btn relative text-sm sm:text-base">
                  <span className="relative z-10">Learn More</span>
                  {/* Button Background Animation */}
                  <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -m-2"></div>
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform relative z-10"
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
              <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[15px] sm:border-r-[20px] border-r-primary/10 border-t-[15px] sm:border-t-[20px] border-t-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section - Mobile Responsive */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center fade-in">
          <div className="bg-gradient-to-r from-primary via-primary-light to-primary-glow p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl text-white shadow-2xl hover:shadow-3xl transition-shadow">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Smile?</h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
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
              className="bg-white text-primary px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold hover:bg-gray-50 transition-smooth btn-hover-lift text-base sm:text-lg lg:text-xl shadow-lg hover:shadow-xl"
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
