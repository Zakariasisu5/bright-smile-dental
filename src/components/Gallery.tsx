import dentalOffice from "@/assets/dental-office.jpg";

const Gallery = () => {
  // Using the generated dental office image and some placeholder content
  const galleryImages = [
    {
      src: dentalOffice,
      alt: "Modern dental office reception area",
      category: "Office",
    },
    {
      src: dentalOffice,
      alt: "State-of-the-art dental equipment",
      category: "Equipment",
    },
    {
      src: dentalOffice,
      alt: "Comfortable treatment room",
      category: "Office",
    },
    {
      src: dentalOffice,
      alt: "Before and after smile transformation",
      category: "Results",
    },
    {
      src: dentalOffice,
      alt: "Dental implant success story",
      category: "Results",
    },
    {
      src: dentalOffice,
      alt: "Orthodontic treatment results",
      category: "Results",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at our modern facility and some of the amazing smile 
            transformations we've achieved for our patients.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-scale transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-smooth duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-2">
                    {image.category}
                  </span>
                  <p className="text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Ready to transform your smile? Schedule your consultation today!
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-light transition-smooth btn-hover-lift"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;