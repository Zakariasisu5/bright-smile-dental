
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect border-b border-border/30 shadow-xl backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('#home')}>
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-xl lg:text-2xl">🦷</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-gradient-primary group-hover:scale-105 transition-transform">BrightSmile Dental</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-muted-foreground hover:text-primary transition-smooth font-medium py-2 px-4 rounded-lg hover:bg-primary/5 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="btn-hover-lift btn-hover-glow bg-primary hover:bg-primary-light px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg"
            >
              Book Appointment
            </Button>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-12 h-12 text-muted-foreground hover:text-primary transition-smooth rounded-xl hover:bg-primary/10 hover:shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 glass-effect backdrop-blur-lg rounded-b-2xl mt-2 -mx-4 px-4 shadow-xl">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-smooth font-medium px-4 py-3 rounded-xl hover:bg-primary/10 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-primary hover:bg-primary-light btn-hover-lift btn-hover-glow py-3 rounded-xl font-semibold shadow-lg"
                >
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Enhanced Sticky Book Now Button for Mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => scrollToSection("#contact")}
          className="btn-hover-lift btn-pulse glow-effect bg-primary hover:bg-primary-light px-6 py-4 text-sm font-bold shadow-2xl rounded-2xl"
        >
          📞 Book Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
