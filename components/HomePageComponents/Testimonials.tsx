
// "use client";
// import { useState } from "react";
// import {
//   FaArrowLeft,
//   FaArrowRight,
//   FaQuoteLeft,
//   FaStar,
//   FaUserGraduate,
// } from "react-icons/fa";


// export default function TestimonialsCarousel({testimonials}:{testimonials:any}) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const currentTestimonial = testimonials[currentIndex];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div className="h-auto bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center px-4 py-12">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">
//           Student Success Stories
//         </h2>
//         <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
//         <p className="text-orange-600 mt-6 max-w-2xl mx-auto">
//           Hear from our alumni who have transformed their careers through our programs
//         </p>
//       </div>

//       {/* Testimonial Card */}
//       <div className="relative w-full max-w-5xl">
//         <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="flex flex-col md:flex-row">
//             {/* Image Section */}
//             <div className="md:w-2/5 bg-orange-50 p-8 flex flex-col items-center justify-center">
//               <div className="relative mb-6">
//                 <div className="bg-orange-200 rounded-full p-1">
//                   <img
//                     src={currentTestimonial.photo}
//                     alt={currentTestimonial.name}
//                     className="w-32 h-32 rounded-full border-4 border-white object-cover"
//                   />
//                 </div>
//                 <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
//                   {currentTestimonial.company}
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-orange-900">
//                 {currentTestimonial.name}
//               </h3>
//               <p className="text-orange-700 text-sm mt-1">
//                 {currentTestimonial.course} • {currentTestimonial.duration}
//               </p>
//             </div>

//             {/* Review Section */}
//             <div className="md:w-3/5 p-8 flex flex-col justify-center">
//               <div className="relative">
//                 <FaQuoteLeft className="text-orange-200 text-5xl absolute -top-2 -left-2" />
//                 <p className="text-gray-700 text-lg relative z-10 pl-8">
//                   {currentTestimonial.review}
//                 </p>
//               </div>

//               <div className="mt-8 pt-4 border-t border-orange-100">
//                 <div className="flex flex-wrap gap-2">
//                   <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
//                     Placement: {currentTestimonial.company}
//                   </div>
//                   <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
//                     {currentTestimonial.duration} Program
//                   </div>
//                   <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
//                     Career Transformation
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Arrows - Dynamic Position */}
//         <div className="flex space-x-2 mt-4 justify-center md:static md:mt-6">
//           <button
//             onClick={prevSlide}
//             className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-orange-50 transition-all group focus:outline-none focus:ring-2 focus:ring-orange-300"
//             aria-label="Previous testimonial"
//           >
//             <FaArrowLeft className="text-orange-600 text-lg group-hover:text-orange-800 transition-colors" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-orange-50 transition-all group focus:outline-none focus:ring-2 focus:ring-orange-300"
//             aria-label="Next testimonial"
//           >
//             <FaArrowRight className="text-orange-600 text-lg group-hover:text-orange-800 transition-colors" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsCarousel({ testimonials }: { testimonials: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: initial, 1: right, -1: left
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 py-20 px-4">
      {/* SVG Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(15)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r={Math.random() * 2 + 0.5}
              fill="white"
              opacity={Math.random() * 0.5 + 0.1}
            />
          ))}
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Success Stories</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-500 mx-auto rounded-full mb-6"
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-purple-100 mt-6 max-w-2xl mx-auto"
        >
          Hear how our programs changed lives and launched careers
        </motion.p>
      </div>

      {/* Testimonial Card */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Navigation Arrow - Left */}
          <button
            onClick={prevSlide}
            className="hidden md:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg items-center justify-center hover:bg-white/20 transition-all group mr-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft className="text-white text-xl group-hover:text-amber-300 transition-colors" />
          </button>

          {/* Card Container */}
          <div className="w-full max-w-3xl mx-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-2/5 relative bg-gradient-to-br from-indigo-600 to-purple-700 p-8 flex flex-col items-center justify-center">
                      <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="white" />
                          </pattern>
                          <rect x="0" y="0" width="100" height="100" fill="url(#pattern)" />
                        </svg>
                      </div>
                      <div className="relative z-10 mb-6">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full blur-md opacity-75"></div>
                          <img
                            src={currentTestimonial.photo}
                            alt={currentTestimonial.name}
                            className="relative w-32 h-32 rounded-full border-4 border-white object-cover z-10"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mt-4">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-purple-100 text-sm mt-1">
                        {currentTestimonial.course}
                      </p>
                      <div className="flex mt-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-amber-400 text-sm" />
                        ))}
                      </div>
                    </div>

                    {/* Review Section */}
                    <div className="md:w-3/5 p-8 flex flex-col justify-center">
                      <div className="relative">
                        <FaQuoteLeft className="text-indigo-200 text-4xl absolute -top-2 -left-2" />
                        <p className="text-gray-700 text-lg relative z-10 pl-10">
                          {currentTestimonial.review}
                        </p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                          <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">
                            Placed at: {currentTestimonial.company}
                          </div>
                          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                            {currentTestimonial.duration} Program
                          </div>
                          <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                            {currentTestimonial.result}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrow - Right */}
          <button
            onClick={nextSlide}
            className="hidden md:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg items-center justify-center hover:bg-white/20 transition-all group ml-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Next testimonial"
          >
            <FaArrowRight className="text-white text-xl group-hover:text-amber-300 transition-colors" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center mt-8 md:hidden">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/20 transition-all group mr-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft className="text-white text-lg group-hover:text-amber-300 transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center hover:bg-white/20 transition-all group ml-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Next testimonial"
          >
            <FaArrowRight className="text-white text-lg group-hover:text-amber-300 transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full mx-1 transition-all ${currentIndex === index ? 'bg-amber-400 w-6' : 'bg-white/30'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0">
        <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-20">
          <path
            d="M40 100C40 66.9 66.9 40 100 40C133.1 40 160 66.9 160 100C160 133.1 133.1 160 100 160C66.9 160 40 133.1 40 100Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M70 100C70 83.4 83.4 70 100 70C116.6 70 130 83.4 130 100C130 116.6 116.6 130 100 130C83.4 130 70 116.6 70 100Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}