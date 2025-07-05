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

        {/* Enhanced Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl float-shadow hover-scale-lg cursor-pointer transition-all duration-700 fade-in-delay ${
                image.featured ? 'lg:col-span-1 lg:row-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 filter group-hover:brightness-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Enhanced Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-2xl text-sm font-bold border border-white/30">
                      {image.category}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="font-medium text-lg leading-tight mb-2">{image.alt}</p>
                  
                  {/* View More Button */}
                  <div className="flex items-center text-sm font-semibold group/btn">
                    View Details
                    <svg
                      className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Featured Badge */}
                {image.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary to-secondary-light text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg float-animation">
                    ⭐ Featured
                  </div>
                )}
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