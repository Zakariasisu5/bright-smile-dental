import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/hero-family.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 pb-20 hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob absolute top-20 left-10 w-32 h-32 opacity-20"></div>
        <div className="decorative-blob absolute bottom-32 right-16 w-24 h-24 opacity-15" style={{animationDelay: '2s'}}></div>
        <div className="decorative-blob absolute top-1/2 left-1/4 w-16 h-16 opacity-10" style={{animationDelay: '4s'}}></div>
        
        {/* Floating dots */}
        <div className="decorative-dot absolute top-1/4 right-1/4" style={{animationDelay: '1s'}}></div>
        <div className="decorative-dot absolute bottom-1/4 left-1/3" style={{animationDelay: '2.5s'}}></div>
        <div className="decorative-dot absolute top-3/4 right-1/3" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="fade-in space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gradient-primary drop-shadow-lg">Exceptional</span>{" "}
                <span className="text-foreground">Dental Care</span>
                <br />
                <span className="text-foreground">for the </span>
                <span className="text-gradient-secondary">Whole Family</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                Providing personalized and comprehensive dental services to patients of all ages 
                in a comfortable, caring environment with the latest technology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                onClick={scrollToContact}
                size="xl"
                className="btn-hover-lift btn-pulse bg-primary hover:bg-primary-light text-xl px-10 py-8 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform transition-all duration-300"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => {
                  const element = document.querySelector("#services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="glass-effect text-xl px-10 py-8 rounded-2xl border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
              >
                Our Services
              </Button>
            </div>
            
            {/* Enhanced Stats */}
            <div className="flex flex-wrap gap-12 pt-8">
              <div className="text-center fade-in-delay hover-scale group cursor-default">
                <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center fade-in-delay hover-scale group cursor-default" style={{animationDelay: '0.4s'}}>
                <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2 group-hover:scale-110 transition-transform">5000+</div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">Happy Patients</div>
              </div>
              <div className="text-center fade-in-delay hover-scale group cursor-default" style={{animationDelay: '0.6s'}}>
                <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="slide-up lg:order-last relative">
            <div className="relative group">
              {/* Multiple layered shadows for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/25 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-primary-light/20 to-secondary-light/20 rounded-3xl transform -rotate-2 scale-103 group-hover:-rotate-4 transition-transform duration-700"></div>
              
              <img
                src={heroFamily}
                alt="Happy family with beautiful smiles"
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover group-hover:scale-[1.02] transition-transform duration-500 hover-tilt"
              />
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-secondary to-secondary-light rounded-full flex items-center justify-center shadow-2xl float-animation group-hover:scale-110 transition-transform">
                <span className="text-3xl">✨</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center shadow-2xl float-animation group-hover:scale-110 transition-transform" style={{animationDelay: '1s'}}>
                <span className="text-2xl text-white">😊</span>
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-1/4 -left-4 w-3 h-3 bg-primary rounded-full opacity-60 float-animation" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/3 -right-2 w-2 h-2 bg-secondary rounded-full opacity-80 float-animation" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;