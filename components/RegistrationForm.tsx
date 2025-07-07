"use client";
import { useState, useRef, useEffect } from 'react';
import { FaUser, FaBirthdayCake, FaGraduationCap, FaUserTie, FaPhone, FaCamera, FaTimes } from 'react-icons/fa';

export default function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    course: '',
    fatherName: '',
    fatherMobile: '',
    studentMobile: '',
    studentImage: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const swipeRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);

  // Handle swipe to cancel
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    const progress = Math.min(Math.max(diff / 100, 0), 1);
    setSwipeProgress(progress);
    
    if (progress > 0.7) {
      setIsCancelled(true);
    }
  };

  const handleTouchEnd = () => {
    setSwipeProgress(0);
    setStartX(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, studentImage: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Form submission logic would go here
  };

  const handleCancel = () => {
    setIsCancelled(true);
  };

  if (isCancelled) return null;
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h3>
        <p className="text-gray-600 mb-6">Thank you for registering with our college.</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Swipe to cancel area */}
      <div 
        ref={swipeRef}
        className="bg-gradient-to-r from-red-100 to-red-200 p-4 flex items-center justify-between cursor-grab"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center">
          <FaTimes className="text-red-500 mr-2" />
          <span className="text-red-600 font-medium">Swipe right to cancel</span>
        </div>
        <div className="w-24 h-2 bg-red-300 rounded-full overflow-hidden">
          <div 
            className="h-full bg-red-500 transition-all duration-200" 
            style={{ width: `${swipeProgress * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Header */}
      <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Student Registration</h2>
        <p className="opacity-90">Join our prestigious institution for a brighter future</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        {/* Student Image Upload */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 rounded-full bg-gray-100 mb-4 overflow-hidden border-2 border-blue-200">
            {formData.studentImage ? (
              <img 
                src={URL.createObjectURL(formData.studentImage)} 
                alt="Student" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <FaCamera className="text-2xl" />
              </div>
            )}
          </div>
          <label className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-100 transition-colors">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="hidden" 
            />
            <span className="flex items-center">
              <FaCamera className="mr-2" /> Upload Photo
            </span>
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-1">
            <label className="flex items-center text-gray-700 font-medium">
              <FaUser className="mr-2 text-blue-500" /> Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Age */}
          <div className="space-y-1">
            <label className="flex items-center text-gray-700 font-medium">
              <FaBirthdayCake className="mr-2 text-blue-500" /> Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="16"
              max="30"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="18"
              required
            />
          </div>

          {/* Course */}
          <div className="space-y-1 md:col-span-2">
            <label className="flex items-center text-gray-700 font-medium">
              <FaGraduationCap className="mr-2 text-blue-500" /> Course Option
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            >
              <option value="">Select your course</option>
              <option value="Computer Science">Computer Science & Engineering</option>
              <option value="Mechanical">Mechanical Engineering</option>
              <option value="Electrical">Electrical Engineering</option>
              <option value="Business">Business Administration</option>
              <option value="Arts">Liberal Arts</option>
              <option value="Medicine">Pre-Medical</option>
            </select>
          </div>

          {/* Father's Name */}
          <div className="space-y-1">
            <label className="flex items-center text-gray-700 font-medium">
              <FaUserTie className="mr-2 text-blue-500" /> Father's Name
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Robert Doe"
              required
            />
          </div>

          {/* Father's Mobile */}
          <div className="space-y-1">
            <label className="flex items-center text-gray-700 font-medium">
              <FaPhone className="mr-2 text-blue-500" /> Father's Mobile
            </label>
            <input
              type="tel"
              name="fatherMobile"
              value={formData.fatherMobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="9876543210"
              required
            />
          </div>

          {/* Student Mobile */}
          <div className="space-y-1 md:col-span-2">
            <label className="flex items-center text-gray-700 font-medium">
              <FaPhone className="mr-2 text-blue-500" /> Your Mobile
            </label>
            <input
              type="tel"
              name="studentMobile"
              value={formData.studentMobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="9876543210"
              required
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <FaTimes className="mr-2" /> Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md flex items-center justify-center"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}