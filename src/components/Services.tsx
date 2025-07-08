
const Services = () => {
  const services = [
    {
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile.",
      icon: "✨",
      features: ["Professional bleaching", "Custom trays", "Same-day results", "Long-lasting brightness"],
      color: "from-yellow-400/10 to-orange-400/10"
    },
    {
      title: "Orthodontics",
      description: "Modern braces and clear aligners to straighten teeth for all ages.",
      icon: "😁", 
      features: ["Clear aligners", "Traditional braces", "Adult orthodontics", "Retainer therapy"],
      color: "from-blue-400/10 to-purple-400/10"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement that looks and feels completely natural.",
      icon: "🦷",
      features: ["Titanium implants", "Natural appearance", "Bone preservation", "Lifetime solution"],
      color: "from-green-400/10 to-teal-400/10"
    },
    {
      title: "Preventive Care",
      description: "Regular checkups and cleanings to maintain optimal oral health.",
      icon: "🛡️",
      features: ["Regular cleanings", "Fluoride treatments", "Sealants", "Oral cancer screening"],
      color: "from-emerald-400/10 to-cyan-400/10"
    },
    {
      title: "Emergency Care",
      description: "Immediate dental care for urgent situations and dental emergencies.",
      icon: "🚨",
      features: ["24/7 availability", "Pain relief", "Urgent repairs", "Same-day treatment"],
      color: "from-red-400/10 to-pink-400/10"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic dental procedures.",
      icon: "💎",
      features: ["Veneers", "Bonding", "Smile makeovers", "Aesthetic fillings"],
      color: "from-violet-400/10 to-indigo-400/10"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob absolute top-20 left-10 w-32 h-32 opacity-8"></div>
        <div className="decorative-blob absolute bottom-20 right-10 w-24 h-24 opacity-10" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 lg:mb-20 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Our Services</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive dental care services designed to keep your smile healthy, 
            beautiful, and confident at every stage of life.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-gradient p-6 lg:p-8 rounded-2xl lg:rounded-3xl float-shadow hover-scale-lg group transition-all duration-500 fade-in-delay relative overflow-hidden bg-gradient-to-br ${service.color}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Icon */}
              <div className="mb-6">
                <div className="text-4xl lg:text-5xl mb-4 float-animation group-hover:scale-125 transition-transform" style={{animationDelay: `${index * 0.3}s`}}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-muted-foreground text-sm"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-primary-light transition-colors"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button className="mt-6 text-primary font-bold hover:text-primary-light transition-smooth flex items-center group/btn">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 lg:mt-20 text-center fade-in">
          <div className="bg-gradient-to-r from-primary via-primary-light to-primary-glow p-8 lg:p-16 rounded-2xl lg:rounded-3xl text-white shadow-2xl hover:shadow-3xl transition-shadow">
            <h3 className="text-2xl lg:text-4xl font-bold mb-6">Ready to Transform Your Smile?</h3>
            <p className="text-lg lg:text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white text-primary px-8 lg:px-12 py-4 lg:py-6 rounded-xl lg:rounded-2xl font-bold hover:bg-gray-50 transition-smooth btn-hover-lift text-lg lg:text-xl shadow-lg hover:shadow-xl"
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
