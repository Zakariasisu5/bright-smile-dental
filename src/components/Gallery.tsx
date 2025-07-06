import galleryReception from "@/assets/gallery-reception.jpg";
import galleryTreatmentRoom from "@/assets/gallery-treatment-room.jpg";
import gallerySmileTransformation from "@/assets/gallery-smile-transformation.jpg";
import galleryEquipment from "@/assets/gallery-equipment.jpg";
import galleryImplants from "@/assets/gallery-implants.jpg";
import galleryOrthodontics from "@/assets/gallery-orthodontics.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: galleryReception,
      alt: "Modern dental office reception area with elegant design",
      category: "Office",
      featured: true,
    },
    {
      src: galleryTreatmentRoom,
      alt: "State-of-the-art dental treatment room",
      category: "Treatment",
      featured: true,
    },
    {
      src: gallerySmileTransformation,
      alt: "Amazing smile transformation results",
      category: "Results",
      featured: true,
    },
    {
      src: galleryEquipment,
      alt: "Advanced dental technology and equipment",
      category: "Technology",
      featured: false,
    },
    {
      src: galleryImplants,
      alt: "Successful dental implant procedures",
      category: "Implants",
      featured: false,
    },
    {
      src: galleryOrthodontics,
      alt: "Perfect orthodontic treatment results",
      category: "Orthodontics",
      featured: false,
    },
  ];

  return (
    <section id="gallery" className="py-20 section-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob absolute top-16 right-20 w-48 h-48 opacity-10"></div>
        <div className="decorative-blob absolute bottom-20 left-16 w-40 h-40 opacity-12" style={{animationDelay: '3s'}}></div>
        
        {/* Floating decorative dots */}
        <div className="decorative-dot absolute top-1/4 left-1/4" style={{animationDelay: '1s'}}></div>
        <div className="decorative-dot absolute bottom-1/3 right-1/3" style={{animationDelay: '2s'}}></div>
        <div className="decorative-dot absolute top-2/3 left-2/3" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Gallery</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Take a look at our modern facility and some of the amazing smile 
            transformations we've achieved for our patients.
          </p>
        </div>

        {/* Enhanced Unique Gallery Grid - Mobile First Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl float-shadow hover-scale-lg cursor-pointer transition-all duration-700 fade-in-delay ${
                image.featured && index === 0 
                  ? 'sm:col-span-2 sm:row-span-2' 
                  : image.featured && index === 1
                  ? 'lg:col-span-2'
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Image Container - Variable Heights for Unique Layout */}
              <div className={`relative overflow-hidden ${
                image.featured && index === 0 
                  ? 'h-64 sm:h-96 lg:h-[500px]' 
                  : image.featured && index === 1
                  ? 'h-64 sm:h-80 lg:h-64'
                  : 'h-64 sm:h-72 lg:h-80'
              }`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 filter group-hover:brightness-110"
                />
                
                {/* Unique Diagonal Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Creative Hexagonal Pattern Overlay - Hidden on mobile */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 hidden sm:block" style={{
                  backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary-light)) 2px, transparent 2px)`,
                  backgroundSize: '50px 50px'
                }}></div>
                
                {/* Enhanced Content Overlay - Responsive */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {/* Category Badge with Unique Shape */}
                  <div className="mb-3">
                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full sm:rounded-2xl text-xs sm:text-sm font-bold border border-white/30 shadow-lg">
                      {image.category}
                    </span>
                  </div>
                  
                  {/* Description - Responsive text */}
                  <p className="font-medium text-sm sm:text-base lg:text-lg leading-tight mb-2">{image.alt}</p>
                  
                  {/* View More Button with Arrow Animation */}
                  <div className="flex items-center text-xs sm:text-sm font-semibold group/btn">
                    View Details
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Creative Featured Badge - Unique Design */}
                {image.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-secondary via-secondary-light to-secondary text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg float-animation border border-white/20">
                    <span className="mr-1">⭐</span>
                    <span className="hidden sm:inline">Featured</span>
                  </div>
                )}

                {/* Unique Corner Accent - Hidden on mobile */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] sm:border-l-[40px] border-l-primary/30 border-b-[30px] sm:border-b-[40px] border-b-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
          {[
            { number: "500+", label: "Smile Transformations", icon: "😊" },
            { number: "50+", label: "Dental Implants", icon: "🦷" },
            { number: "200+", label: "Orthodontic Cases", icon: "✨" },
            { number: "1000+", label: "Happy Patients", icon: "❤️" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center hover-scale group" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-4xl mb-2 float-animation group-hover:scale-125 transition-transform" style={{animationDelay: `${index * 0.3}s`}}>
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20 fade-in">
          <div className="bg-gradient-to-r from-primary via-primary-light to-primary-glow p-12 md:p-16 rounded-3xl text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Smile?</h3>
            <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed font-light">
              Join thousands of satisfied patients who have transformed their smiles with us. 
              Schedule your consultation today and see the difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-primary px-12 py-6 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 btn-hover-lift text-xl shadow-lg hover:shadow-xl btn-pulse"
              >
                Book Your Consultation
              </button>
              <span className="text-white/80 text-lg font-medium">or call (555) 123-SMILE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;