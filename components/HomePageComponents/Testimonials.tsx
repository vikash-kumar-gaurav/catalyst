
"use client";
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";







export default function TestimonialsCarousel({testimonials}:{testimonials:any}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="h-auto bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">
          Student Success Stories
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        <p className="text-orange-600 mt-6 max-w-2xl mx-auto">
          Hear from our alumni who have transformed their careers through our programs
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative w-full max-w-5xl">
        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-2/5 bg-orange-50 p-8 flex flex-col items-center justify-center">
              <div className="relative mb-6">
                <div className="bg-orange-200 rounded-full p-1">
                  <img
                    src={currentTestimonial.photo}
                    alt={currentTestimonial.name}
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  {currentTestimonial.company}
                </div>
              </div>
              <h3 className="text-xl font-bold text-orange-900">
                {currentTestimonial.name}
              </h3>
              <p className="text-orange-700 text-sm mt-1">
                {currentTestimonial.course} • {currentTestimonial.duration}
              </p>
            </div>

            {/* Review Section */}
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
              <div className="relative">
                <FaQuoteLeft className="text-orange-200 text-5xl absolute -top-2 -left-2" />
                <p className="text-gray-700 text-lg relative z-10 pl-8">
                  {currentTestimonial.review}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-orange-100">
                <div className="flex flex-wrap gap-2">
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Placement: {currentTestimonial.company}
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentTestimonial.duration} Program
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Career Transformation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows - Dynamic Position */}
        <div className="flex space-x-2 mt-4 justify-center md:static md:mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-orange-50 transition-all group focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft className="text-orange-600 text-lg group-hover:text-orange-800 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-orange-50 transition-all group focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label="Next testimonial"
          >
            <FaArrowRight className="text-orange-600 text-lg group-hover:text-orange-800 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}
