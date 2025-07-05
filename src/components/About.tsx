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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our dedicated team committed to providing exceptional dental care 
            with a personal touch in a welcoming environment.
          </p>
        </div>

        {/* Dr. Sarah Johnson Profile */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative">
              <img
                src={drSarahJohnson}
                alt="Dr. Sarah Johnson - Professional Dentist"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">Dr. Sarah Johnson</h3>
              <p className="text-lg text-primary font-semibold mb-4">Professional Dentist</p>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-sm font-semibold text-primary">Education</div>
                <div className="text-sm text-muted-foreground">UPenn School of Dental Medicine</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-sm font-semibold text-primary">Specialization</div>
                <div className="text-sm text-muted-foreground">Family & Cosmetic Dentistry</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-sm font-semibold text-primary">Member</div>
                <div className="text-sm text-muted-foreground">American Dental Association</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-sm font-semibold text-primary">Languages</div>
                <div className="text-sm text-muted-foreground">English, Spanish</div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Values */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-2xl shadow-sm hover-scale card-shadow text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;