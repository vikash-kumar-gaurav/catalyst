
"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CallbackRequestSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const interests = [
    'Select area of interest',
    "BCA",
    "BBA",
    "BSC-IT"
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid 10-digit number';
    if (!formData.interest || formData.interest === interests[0]) newErrors.interest = 'Please select an area';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Decorative SVG background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <svg className="absolute top-20 left-10 opacity-10 text-blue-200" width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-20 right-10 opacity-10 text-indigo-200" width="300" height="300" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="120" fill="currentColor" />
        </svg>
        
        {/* Abstract wave pattern */}
        <svg className="absolute bottom-0 left-0 w-full opacity-15 text-blue-300" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content section */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-white rounded-full shadow-sm mb-6">
                Expert Guidance
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Let's find your <span className="text-blue-600">perfect program</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our admission specialists will help you navigate your options and find the right academic path for your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Personalized Matching</h3>
                    <p className="mt-1 text-gray-600">We'll match you with programs that fit your profile</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Quick Response</h3>
                    <p className="mt-1 text-gray-600">Typically within 24 hours during weekdays</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Direct Access</h3>
                    <p className="mt-1 text-gray-600">Speak directly with our admission team</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Form header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8 px-8 text-center">
                <h3 className="text-2xl font-bold text-white">Request a Consultation</h3>
                <p className="text-blue-100 mt-2">We're excited to help with your academic journey</p>
              </div>
              
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 px-4"
                    >
                      <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-50 mb-6">
                        <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                      <p className="text-lg text-gray-600 mb-6">
                        Our team will reach out to you shortly. We look forward to helping you find your perfect program!
                      </p>
                      <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
                        <p className="text-sm font-medium text-blue-600">Have a wonderful day!</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`block w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} focus:ring-2 focus:outline-none transition-colors`}
                          placeholder="Your full name"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500">+91</span>
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={10}
                            className={`block w-full pl-12 pr-4 py-3 rounded-lg border ${errors.phone ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} focus:ring-2 focus:outline-none transition-colors`}
                            placeholder="92061....."
                            aria-invalid={!!errors.phone}
                          />
                          {errors.phone && (
                            <p className="mt-2 text-sm text-red-600">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                          Area of Interest
                        </label>
                        <select
                          name="interest"
                          id="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className={`block w-full px-4 py-3 rounded-lg border ${errors.interest ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} focus:ring-2 focus:outline-none transition-colors`}
                          aria-invalid={!!errors.interest}
                        >
                          {interests.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        {errors.interest && (
                          <p className="mt-2 text-sm text-red-600">
                            {errors.interest}
                          </p>
                        )}
                      </div>

                      <div className="pt-2">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-base font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
                          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            'Get Personalized Advice'
                          )}
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallbackRequestSection;