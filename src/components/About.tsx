import drSarahJohnson from "@/assets/dr-sarah-johnson.jpg";

const About = () => {
  const values = [
    {
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to your individual needs and comfort.",
      icon: "❤️"
    },
    {
      title: "Latest Technology",
      description: "State-of-the-art equipment ensures precise, comfortable treatments.",
      icon: "🔬"
    },
    {
      title: "Comfortable Environment",
      description: "Relaxing atmosphere designed to ease dental anxiety.",
      icon: "🌿"
    },
    {
      title: "Comprehensive Care",
      description: "Full range of services for patients of all ages under one roof.",
      icon: "🏥"
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob absolute top-10 right-20 w-40 h-40 opacity-15"></div>
        <div className="decorative-blob absolute bottom-20 left-10 w-32 h-32 opacity-10" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">About Us</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Meet our dedicated team committed to providing exceptional dental care 
            with a personal touch in a welcoming environment.
          </p>
        </div>

        {/* Enhanced Dr. Sarah Johnson Profile */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="slide-up relative">
            <div className="relative group">
              {/* Enhanced layered shadows */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/15 rounded-3xl transform rotate-2 scale-105 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-secondary/15 to-primary/10 rounded-3xl transform -rotate-1 scale-103 group-hover:-rotate-2 transition-transform duration-700"></div>
              
              <img
                src={drSarahJohnson}
                alt="Dr. Sarah Johnson - Professional Dentist"
                className="relative w-full max-w-md mx-auto rounded-3xl float-shadow hover-scale group-hover:shadow-2xl transition-all duration-500"
              />
              
              {/* Enhanced floating badge */}
              <div className="absolute -bottom-8 -right-8 glass-effect rounded-3xl p-6 shadow-2xl float-animation group-hover:scale-110 transition-transform">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-primary">15+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years</div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-delay space-y-8">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 hover-scale">Dr. Sarah Johnson</h3>
              <p className="text-xl text-gradient-secondary font-semibold mb-6">Professional Dentist</p>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Dr. Sarah Johnson brings over 15 years of experience in comprehensive dental care, 
                combining advanced clinical expertise with a gentle, patient-focused approach.
              </p>
              <p>
                She graduated summa cum laude from the University of Pennsylvania School of Dental Medicine 
                and completed her residency at Johns Hopkins Hospital, specializing in family dentistry 
                and cosmetic procedures.
              </p>
              <p>
                Dr. Johnson is committed to staying current with the latest dental technologies and 
                techniques, regularly attending continuing education courses and dental conferences.
              </p>
            </div>

            {/* Enhanced Credentials */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="card-gradient p-6 rounded-2xl float-shadow hover-scale group">
                <div className="text-sm font-bold text-primary mb-1 group-hover:text-primary-light transition-colors">Education</div>
                <div className="text-sm text-muted-foreground">UPenn School of Dental Medicine</div>
              </div>
              <div className="card-gradient p-6 rounded-2xl float-shadow hover-scale group">
                <div className="text-sm font-bold text-primary mb-1 group-hover:text-primary-light transition-colors">Specialization</div>
                <div className="text-sm text-muted-foreground">Family & Cosmetic Dentistry</div>
              </div>
              <div className="card-gradient p-6 rounded-2xl float-shadow hover-scale group">
                <div className="text-sm font-bold text-primary mb-1 group-hover:text-primary-light transition-colors">Member</div>
                <div className="text-sm text-muted-foreground">American Dental Association</div>
              </div>
              <div className="card-gradient p-6 rounded-2xl float-shadow hover-scale group">
                <div className="text-sm font-bold text-primary mb-1 group-hover:text-primary-light transition-colors">Languages</div>
                <div className="text-sm text-muted-foreground">English, Spanish</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Clinic Values */}
        <div className="fade-in">
          <h3 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gradient-primary">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-gradient p-8 rounded-3xl float-shadow hover-scale-lg group text-center transition-all duration-500 fade-in-delay"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl mb-6 float-animation group-hover:scale-125 transition-transform" style={{animationDelay: `${index * 0.5}s`}}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-gradient-primary transition-all">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;