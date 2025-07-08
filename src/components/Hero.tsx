
import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/happy-patient-dental-chair.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 pb-12 sm:pb-16 lg:pb-24 hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced Background Image with better fit and overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${heroFamily})`,
            backgroundPosition: 'center 40%',
            filter: 'brightness(0.3) contrast(1.1)',
          }}
        ></div>
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40"></div>
      </div>
      
      {/* Enhanced Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob absolute top-8 sm:top-16 left-4 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 opacity-15"></div>
        <div className="decorative-blob absolute bottom-16 sm:bottom-24 right-4 sm:right-12 w-12 sm:w-20 lg:w-24 h-12 sm:h-20 lg:h-24 opacity-12" style={{animationDelay: '2s'}}></div>
        <div className="decorative-blob absolute top-1/2 left-1/4 w-6 sm:w-12 lg:w-16 h-6 sm:h-12 lg:h-16 opacity-8" style={{animationDelay: '4s'}}></div>
        
        {/* Floating dots */}
        <div className="decorative-dot absolute top-1/4 right-1/4 hidden sm:block" style={{animationDelay: '1s'}}></div>
        <div className="decorative-dot absolute bottom-1/4 left-1/3 hidden sm:block" style={{animationDelay: '2.5s'}}></div>
        <div className="decorative-dot absolute top-3/4 right-1/3 hidden lg:block" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="fade-in space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-gradient-primary drop-shadow-lg block mb-2">Your Smile,</span>
                <span className="text-foreground">Our</span>
                <span className="text-gradient-secondary ml-2">Priority</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Providing personalized and comprehensive dental services to patients of all ages 
                in a comfortable, caring environment with the latest technology and expert care.
              </p>
            </div>
            
            {/* Enhanced Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="btn-hover-lift btn-pulse bg-primary hover:bg-primary-light text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform transition-all duration-300"
              >
                Book Your Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="glass-effect text-lg px-8 py-6 rounded-xl border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
              >
                Our Services
              </Button>
            </div>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 pt-6 justify-center lg:justify-start">
              <div className="text-center fade-in-delay hover-scale group cursor-default">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-primary mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center fade-in-delay hover-scale group cursor-default" style={{animationDelay: '0.4s'}}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-primary mb-2 group-hover:scale-110 transition-transform">5000+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Patients</div>
              </div>
              <div className="text-center fade-in-delay hover-scale group cursor-default" style={{animationDelay: '0.6s'}}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-primary mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-muted-foreground font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="slide-up order-1 lg:order-2 relative">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Enhanced layered shadows */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/15 rounded-2xl lg:rounded-3xl transform rotate-2 scale-105 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-primary-light/15 to-secondary-light/15 rounded-2xl lg:rounded-3xl transform -rotate-1 scale-103 group-hover:-rotate-2 transition-transform duration-700"></div>
              
              <img
                src={heroFamily}
                alt="Happy patient in modern dental chair with professional care"
                className="relative w-full h-auto rounded-2xl lg:rounded-3xl shadow-2xl object-cover group-hover:scale-[1.02] transition-transform duration-500 hover-tilt"
              />
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-secondary to-secondary-light rounded-full flex items-center justify-center shadow-2xl float-animation group-hover:scale-110 transition-transform">
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center shadow-2xl float-animation group-hover:scale-110 transition-transform" style={{animationDelay: '1s'}}>
                <span className="text-xl text-white">😊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
