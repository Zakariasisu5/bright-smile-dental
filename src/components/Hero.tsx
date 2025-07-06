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
    <section id="home" className="pt-16 pb-12 sm:pb-20 hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced Decorative background elements - mobile responsive */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob absolute top-10 sm:top-20 left-2 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 opacity-20"></div>
        <div className="decorative-blob absolute bottom-20 sm:bottom-32 right-4 sm:right-16 w-16 sm:w-24 h-16 sm:h-24 opacity-15" style={{animationDelay: '2s'}}></div>
        <div className="decorative-blob absolute top-1/2 left-1/4 w-8 sm:w-16 h-8 sm:h-16 opacity-10" style={{animationDelay: '4s'}}></div>
        
        {/* Floating dots - responsive positioning */}
        <div className="decorative-dot absolute top-1/4 right-1/4 hidden sm:block" style={{animationDelay: '1s'}}></div>
        <div className="decorative-dot absolute bottom-1/4 left-1/3 hidden sm:block" style={{animationDelay: '2.5s'}}></div>
        <div className="decorative-dot absolute top-3/4 right-1/3 hidden lg:block" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[500px] sm:min-h-[600px]">
          {/* Content - Mobile First Responsive */}
          <div className="fade-in space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gradient-primary drop-shadow-lg block sm:inline">Your Smile,</span>{" "}
                <span className="text-foreground block sm:inline">Our</span>
                <br className="hidden sm:block" />
                <span className="text-gradient-secondary block sm:inline">Priority</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light px-4 sm:px-0">
                Providing personalized and comprehensive dental services to patients of all ages 
                in a comfortable, caring environment with the latest technology.
              </p>
            </div>
            
            {/* Responsive Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 px-4 sm:px-0 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="xl"
                className="btn-hover-lift btn-pulse bg-primary hover:bg-primary-light text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-8 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform transition-all duration-300 w-full sm:w-auto"
              >
                Book Your Appointment
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
                className="glass-effect text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-8 rounded-2xl border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:shadow-lg backdrop-blur-sm w-full sm:w-auto"
              >
                Our Services
              </Button>
            </div>
            
            {/* Enhanced Stats - Mobile Responsive Grid */}
            <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-6 sm:gap-8 lg:gap-12 pt-6 sm:pt-8 justify-center lg:justify-start">
              <div className="text-center fade-in-delay hover-scale group cursor-default">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center fade-in-delay hover-scale group cursor-default" style={{animationDelay: '0.4s'}}>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform">5000+</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">Happy Patients</div>
              </div>
              <div className="text-center fade-in-delay hover-scale group cursor-default" style={{animationDelay: '0.6s'}}>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image - Mobile First */}
          <div className="slide-up order-1 lg:order-2 relative px-4 sm:px-0">
            <div className="relative group max-w-md sm:max-w-lg mx-auto lg:max-w-none">
              {/* Multiple layered shadows for depth - responsive sizes */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/25 rounded-2xl sm:rounded-3xl transform rotate-2 sm:rotate-3 scale-105 group-hover:rotate-4 sm:group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-primary-light/20 to-secondary-light/20 rounded-2xl sm:rounded-3xl transform -rotate-1 sm:-rotate-2 scale-103 group-hover:-rotate-2 sm:group-hover:-rotate-4 transition-transform duration-700"></div>
              
              <img
                src={heroFamily}
                alt="Happy family with beautiful smiles"
                className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl object-cover group-hover:scale-[1.02] transition-transform duration-500 hover-tilt"
              />
              
              {/* Enhanced Floating Elements - Responsive sizes */}
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-r from-secondary to-secondary-light rounded-full flex items-center justify-center shadow-2xl float-animation group-hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl lg:text-3xl">✨</span>
              </div>
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center shadow-2xl float-animation group-hover:scale-110 transition-transform" style={{animationDelay: '1s'}}>
                <span className="text-lg sm:text-xl lg:text-2xl text-white">😊</span>
              </div>
              
              {/* Additional decorative elements - Hidden on mobile for cleaner look */}
              <div className="absolute top-1/4 -left-2 sm:-left-4 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full opacity-60 float-animation hidden sm:block" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/3 -right-1 sm:-right-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-secondary rounded-full opacity-80 float-animation hidden sm:block" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;