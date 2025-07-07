
import { useState } from "react";
import testimonialCouple from "@/assets/patient-dentist-examination.jpg";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Emily R.",
      location: "Patient since 2019",
      rating: 5,
      text: "Wonderful experience! The staff is friendly, and Dr. Johnson is very professional and caring. I finally found a dentist I can trust with my family's oral health.",
      image: testimonialCouple,
      service: "Family Dentistry"
    },
    {
      name: "Michael T.",
      location: "Patient since 2020",
      rating: 5,
      text: "The dental implant procedure was much easier than I expected. Dr. Johnson explained everything clearly and the results are amazing. I can eat and smile with confidence again!",
      image: testimonialCouple,
      service: "Dental Implants"
    },
    {
      name: "Sarah M.",
      location: "Patient since 2021",
      rating: 5,
      text: "I was terrified of getting braces as an adult, but the team made me feel so comfortable. The clear aligners were perfect and my smile transformation is incredible!",
      image: testimonialCouple,
      service: "Orthodontics"
    },
    {
      name: "David L.",
      location: "Patient since 2018",
      rating: 5,
      text: "Professional teeth whitening here gave me the brightest smile I've ever had. The process was quick, painless, and the results exceeded my expectations.",
      image: testimonialCouple,
      service: "Teeth Whitening"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 section-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob absolute top-16 sm:top-32 right-8 sm:right-16 w-32 sm:w-44 h-32 sm:h-44 opacity-12"></div>
        <div className="decorative-blob absolute bottom-8 sm:bottom-16 left-6 sm:left-12 w-24 sm:w-36 h-24 sm:h-36 opacity-10" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied patients 
            have to say about their experience at BrightSmile Dental.
          </p>
        </div>

        {/* Enhanced Main Testimonial - Mobile First */}
        <div className="max-w-4xl mx-auto fade-in-delay">
          <div className="card-gradient rounded-2xl sm:rounded-3xl float-shadow overflow-hidden hover-scale group">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Enhanced Image */}
              <div className="relative lg:order-2 overflow-hidden rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-none lg:rounded-r-2xl sm:lg:rounded-r-3xl">
                <img
                  src={currentTest.image}
                  alt={`${currentTest.name} - Happy Patient`}
                  className="w-full h-48 sm:h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/20"></div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                {/* Enhanced Stars */}
                <div className="flex mb-4 sm:mb-6 lg:mb-8">
                  {[...Array(currentTest.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-yellow-400 fill-current hover-scale float-animation"
                      viewBox="0 0 24 24"
                      style={{animationDelay: `${i * 0.1}s`}}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Enhanced Quote */}
                <blockquote className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 lg:mb-10 italic font-light">
                  "{currentTest.text}"
                </blockquote>

                {/* Enhanced Author Info */}
                <div className="space-y-1 sm:space-y-2 lg:space-y-3">
                  <div className="font-bold text-foreground text-lg sm:text-xl">{currentTest.name}</div>
                  <div className="text-muted-foreground text-sm sm:text-base">{currentTest.location}</div>
                  <div className="text-gradient-secondary font-semibold text-sm sm:text-base">{currentTest.service}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation - Mobile Optimized */}
          <div className="flex items-center justify-center mt-8 sm:mt-12 space-x-4 sm:space-x-6">
            <button
              onClick={prevTestimonial}
              className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 glass-effect rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-xl transition-all btn-hover-lift"
            >
              <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Enhanced Dots - Larger touch targets for mobile */}
            <div className="flex space-x-2 sm:space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary scale-125 shadow-lg"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 glass-effect rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-xl transition-all btn-hover-lift"
            >
              <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Stats - Mobile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-20 fade-in">
          {[
            { value: "98%", label: "Patient Satisfaction" },
            { value: "5000+", label: "Happy Patients" }, 
            { value: "15+", label: "Years Experience" },
            { value: "4.9", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center hover-scale group" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient-primary mb-1 sm:mb-2 lg:mb-3 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
