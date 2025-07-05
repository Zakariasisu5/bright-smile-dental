import { useState } from "react";
import testimonialCouple from "@/assets/testimonial-couple.jpg";

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
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied patients 
            have to say about their experience at BrightSmile Dental.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative lg:order-2">
                <img
                  src={currentTest.image}
                  alt={`${currentTest.name} - Happy Patient`}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(currentTest.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                  "{currentTest.text}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="font-semibold text-foreground text-lg">{currentTest.name}</div>
                  <div className="text-muted-foreground text-sm">{currentTest.location}</div>
                  <div className="text-primary text-sm font-medium">{currentTest.service}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-xl transition-smooth btn-hover-lift"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentTestimonial
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-xl transition-smooth btn-hover-lift"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Patient Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-muted-foreground">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;