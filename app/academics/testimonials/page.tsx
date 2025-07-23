// "use client"
// import { useState } from 'react';
// import Image from 'next/image';

// type Testimonial = {
//   id: number;
//   name: string;
//   role: string;
//   program?: string;
//   batch?: string;
//   company?: string;
//   relation?: string;
//   content: string;
//   rating?: number;
//   type: 'student' | 'alumni' | 'parent' | 'recruiter' | 'faculty';
//   image?: string;
// };

// export default function TestimonialsPage() {
//   const [activeFilter, setActiveFilter] = useState<string>('all');
//   const [activeTab, setActiveTab] = useState<'written' | 'video'>('written');

//   const filteredTestimonials = activeFilter === 'all' 
//     ? testimonials 
//     : testimonials.filter(t => t.type === activeFilter);

//   // Featured testimonials for the carousel
//   const featuredTestimonials = testimonials.filter(t => t.rating === 5).slice(0, 4);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Hero Section with Background */}
//       <div className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20">
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
//             Voices of Success
//           </h1>
//           <p className="max-w-3xl mx-auto text-xl text-indigo-100">
//             Discover why our community rates us among the top institutions. 
//             Real stories from students, alumni, and partners.
//           </p>
//           <div className="mt-8 flex justify-center gap-4">
//             <button 
//               onClick={() => document.getElementById('testimonials-section')?.scrollIntoView()}
//               className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition"
//             >
//               Read Testimonials
//             </button>
//             <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-700 transition">
//               Watch Videos
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Banner */}
//       <div className="bg-white shadow-lg -mt-10 mx-4 rounded-xl relative z-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
//           {[
//             { value: "95%", label: "Placement Rate" },
//             { value: "100+", label: "Recruiting Partners" },
//             { value: "4.8/5", label: "Satisfaction Score" },
//             { value: "10+", label: "Years of Excellence" }
//           ].map((stat, index) => (
//             <div key={index} className="p-6 text-center">
//               <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
//               <div className="text-gray-600 mt-1">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Featured Testimonials Carousel */}
//       <div className="py-16 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//             Featured Stories
//           </h2>
//           <div className="relative">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {featuredTestimonials.map((testimonial) => (
//                 <div key={testimonial.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                   <div className="p-6">
//                     <div className="flex items-center mb-4">
//                       <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 bg-gray-200">
//                         {testimonial.image && (
//                           <Image
//                             src={testimonial.image}
//                             alt={testimonial.name}
//                             fill
//                             className="object-cover"
//                           />
//                         )}
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-lg">{testimonial.name}</h3>
//                         <p className="text-indigo-600 text-sm">
//                           {testimonial.role}
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 line-clamp-3">{testimonial.content}</p>
//                     <button className="mt-4 text-indigo-600 text-sm font-medium hover:text-indigo-800">
//                       Read full story →
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Testimonials Section */}
//       <div id="testimonials-section" className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Community Testimonials
//             </h2>
//             <p className="max-w-2xl mx-auto text-gray-600">
//               Filter through hundreds of genuine experiences from our college community
//             </p>
//           </div>

//           {/* Tabs and Filters */}
//           <div className="mb-8">
//             <div className="flex justify-center mb-6">
//               <div className="inline-flex rounded-md shadow-sm">
//                 <button
//                   onClick={() => setActiveTab('written')}
//                   className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
//                     activeTab === 'written'
//                       ? 'bg-indigo-600 text-white'
//                       : 'bg-white text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   Written Testimonials
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('video')}
//                   className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
//                     activeTab === 'video'
//                       ? 'bg-indigo-600 text-white'
//                       : 'bg-white text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   Video Testimonials
//                 </button>
//               </div>
//             </div>

//             <div className="flex flex-wrap justify-center gap-2">
//               {['all', 'student', 'alumni', 'parent', 'recruiter', 'faculty'].map((filter) => (
//                 <button
//                   key={filter}
//                   onClick={() => setActiveFilter(filter)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                     activeFilter === filter
//                       ? 'bg-indigo-600 text-white'
//                       : 'bg-white text-gray-700 hover:bg-gray-100'
//                   }`}
//                 >
//                   {filter === 'all' ? 'All' : 
//                   filter.charAt(0).toUpperCase() + filter.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Testimonials Grid */}
//           {activeTab === 'written' ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredTestimonials.map((testimonial) => (
//                 <div 
//                   key={testimonial.id} 
//                   className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
//                 >
//                   <div className="p-6 flex-grow">
//                     <div className="flex items-center mb-4">
//                       <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 bg-gray-200">
//                         {testimonial.image && (
//                           <Image
//                             src={testimonial.image}
//                             alt={testimonial.name}
//                             fill
//                             className="object-cover"
//                           />
//                         )}
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-lg text-gray-800">
//                           {testimonial.name}
//                         </h3>
//                         <p className="text-indigo-600 text-sm">
//                           {testimonial.role}
//                           {testimonial.program && ` • ${testimonial.program}`}
//                           {testimonial.batch && ` • ${testimonial.batch}`}
//                         </p>
//                       </div>
//                     </div>

//                     {testimonial.rating && (
//                       <div className="mb-4 flex">
//                         {[...Array(5)].map((_, i) => (
//                           <svg
//                             key={i}
//                             className={`w-5 h-5 ${
//                               i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'
//                             }`}
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                         ))}
//                       </div>
//                     )}

//                     <blockquote className="relative">
//                       <div className="absolute top-0 left-0 text-4xl text-gray-200 font-serif">
//                         ❝
//                       </div>
//                       <p className="relative z-10 text-gray-600 mt-6 pl-4">
//                         {testimonial.content}
//                       </p>
//                       <div className="absolute bottom-0 right-0 text-4xl text-gray-200 font-serif">
//                         ❞
//                       </div>
//                     </blockquote>
//                   </div>

//                   <div
//                     className={`px-4 py-2 text-center text-xs font-medium ${
//                       testimonial.type === 'student'
//                         ? 'bg-blue-50 text-blue-700'
//                         : testimonial.type === 'alumni'
//                         ? 'bg-green-50 text-green-700'
//                         : testimonial.type === 'parent'
//                         ? 'bg-purple-50 text-purple-700'
//                         : testimonial.type === 'recruiter'
//                         ? 'bg-orange-50 text-orange-700'
//                         : 'bg-indigo-50 text-indigo-700'
//                     }`}
//                   >
//                     {testimonial.type.charAt(0).toUpperCase() + testimonial.type.slice(1)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <div className="inline-block p-4 bg-indigo-100 rounded-full mb-6">
//                 <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-medium text-gray-900 mb-2">Video Testimonials Coming Soon</h3>
//               <p className="text-gray-600 max-w-md mx-auto">
//                 We're currently collecting video stories from our community. Check back soon!
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Alumni Success Stories */}
//       <div className="py-16 bg-indigo-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Alumni Success Stories
//             </h2>
//             <p className="max-w-2xl mx-auto text-gray-600">
//               Where our graduates are making an impact in the world
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Rahul Mehta",
//                 position: "Senior Software Engineer",
//                 company: "Google",
//                 image: "/placeholder-user.jpg",
//                 quote: "The practical projects during my BCA gave me the hands-on experience that helped me stand out during interviews."
//               },
//               {
//                 name: "Priya Singh",
//                 position: "Product Manager",
//                 company: "Amazon",
//                 image: "/placeholder-user.jpg",
//                 quote: "The leadership opportunities in student organizations prepared me for my current role managing teams."
//               },
//               {
//                 name: "Arjun Patel",
//                 position: "Founder & CEO",
//                 company: "TechStart Innovations",
//                 image: "/placeholder-user.jpg",
//                 quote: "The entrepreneurship cell at college gave me the confidence to start my own venture right after graduation."
//               }
//             ].map((alumni, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 bg-gray-200">
//                       <Image
//                         src={alumni.image}
//                         alt={alumni.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-lg">{alumni.name}</h3>
//                       <p className="text-indigo-600 text-sm">{alumni.position}</p>
//                       <p className="text-gray-500 text-sm">{alumni.company}</p>
//                     </div>
//                   </div>
//                   <blockquote className="text-gray-600 italic">
//                     "{alumni.quote}"
//                   </blockquote>
//                   <div className="mt-4 flex justify-between items-center">
//                     <div className="flex space-x-1">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <span className="text-xs text-gray-500">Class of 2018</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="py-16 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Share Your Story?</h2>
//           <p className="max-w-2xl mx-auto text-indigo-100 mb-8">
//             Are you a current student, alumni, or partner? We'd love to hear about your experience!
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition">
//               Submit Your Testimonial
//             </button>
//             <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-700 transition">
//               Contact Our Team
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Priya Sharma',
//     role: 'BCA Student',
//     program: 'BCA',
//     batch: 'Batch 2021–2024',
//     content:
//       'The BCA program gave me not just technical knowledge, but also helped me build confidence and communication skills. The faculty are supportive, and the industry exposure through projects and seminars was outstanding.',
//     rating: 5,
//     type: 'student',
//     image: '/placeholder-user.jpg',
//   },
//   {
//     id: 2,
//     name: 'Aditya Raj',
//     role: 'BBA Student',
//     program: 'BBA',
//     batch: 'Batch 2020–2023',
//     content:
//       'As a BBA student, I loved the interactive teaching style and real-world case studies. The placement training was extremely helpful in cracking interviews.',
//     rating: 4,
//     type: 'student',
//     image: '/placeholder-user.jpg',
//   },
//   {
//     id: 3,
//     name: 'Karan Thakur',
//     role: 'Software Engineer',
//     program: 'B.Sc. IT',
//     batch: 'Alumni 2020',
//     company: 'TCS',
//     content:
//       'After completing my B.Sc. IT from here, I landed a job at TCS. The foundation I got in programming and soft skills really helped me during placement interviews.',
//     rating: 5,
//     type: 'alumni',
//     image: '/placeholder-user.jpg',
//   },
//   {
//     id: 4,
//     name: 'Mrs. Neelam Verma',
//     role: 'Parent',
//     relation: 'Parent of Sakshi Verma (BCA)',
//     content:
//       'As a parent, I was initially concerned about quality education and safety. But seeing my daughter thrive academically and personally at this college has reassured me.',
//     rating: 5,
//     type: 'parent',
//     image: '/placeholder-user.jpg',
//   },
//   {
//     id: 5,
//     name: 'HR Manager',
//     role: 'Infosys Campus Recruitment Team',
//     content:
//       'The students from our college are well-prepared and show a good balance of technical and soft skills. We look forward to continued collaboration.',
//     rating: 4,
//     type: 'recruiter',
//     image: '/placeholder-user.jpg',
//   },
//   {
//     id: 6,
//     name: 'Prof. Renu Kumari',
//     role: 'Assistant Professor',
//     program: 'BBA Department',
//     content:
//       'Being a part of this academic environment has been a rewarding experience. The college fosters innovation and encourages research culture.',
//     rating: 5,
//     type: 'faculty',
//     image: '/placeholder-user.jpg',
//   },
// ];



"use client"
import { useState } from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number | string;
  name: string;
  role: string;
  program?: string;
  batch?: string;
  company?: string;
  relation?: string;
  content: string;
  rating?: number;
  type: 'student' | 'alumni' | 'parent' | 'recruiter' | 'faculty';
  image?: string;
};

type VideoTestimonial = {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
  duration: string;
  speaker: string;
  type: string;
  views: string;
  uploadDate: string;
};

type AlumniStory = {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  batch: string;
  currentLocation?: string;
};

let data = {
  "testimonials": [
    {
      "id": 1,
      "name": "Priya Sharma",
      "role": "BCA Student",
      "program": "BCA",
      "batch": "Batch 2021–2024",
      "content": "The BCA program gave me not just technical knowledge, but also helped me build confidence and communication skills. The faculty are supportive, and the industry exposure through projects and seminars was outstanding.",
      "rating": 5,
      "type": "student",
      "image": "/placeholder-user.jpg"
    },
    {
      "id": 2,
      "name": "Aditya Raj",
      "role": "BBA Student",
      "program": "BBA",
      "batch": "Batch 2020–2023",
      "content": "As a BBA student, I loved the interactive teaching style and real-world case studies. The placement training was extremely helpful in cracking interviews.",
      "rating": 4,
      "type": "student",
      "image": "/placeholder-user.jpg"
    },
    {
      "id": 3,
      "name": "Karan Thakur",
      "role": "Software Engineer",
      "program": "B.Sc. IT",
      "batch": "Alumni 2020",
      "company": "TCS",
      "content": "After completing my B.Sc. IT from here, I landed a job at TCS. The foundation I got in programming and soft skills really helped me during placement interviews.",
      "rating": 5,
      "type": "alumni",
      "image": "/placeholder-user.jpg"
    },
    {
      "id": 4,
      "name": "Mrs. Neelam Verma",
      "role": "Parent",
      "relation": "Parent of Sakshi Verma (BCA)",
      "content": "As a parent, I was initially concerned about quality education and safety. But seeing my daughter thrive academically and personally at this college has reassured me.",
      "rating": 5,
      "type": "parent",
      "image": "/placeholder-user.jpg"
    },
    {
      "id": 5,
      "name": "HR Manager",
      "role": "Infosys Campus Recruitment Team",
      "content": "The students from our college are well-prepared and show a good balance of technical and soft skills. We look forward to continued collaboration.",
      "rating": 4,
      "type": "recruiter",
      "image": "/placeholder-user.jpg"
    },
    {
      "id": 6,
      "name": "Prof. Renu Kumari",
      "role": "Assistant Professor",
      "program": "BBA Department",
      "content": "Being a part of this academic environment has been a rewarding experience. The college fosters innovation and encourages research culture.",
      "rating": 5,
      "type": "faculty",
      "image": "/placeholder-user.jpg"
    }
  ],
  "videoTestimonials": [
    {
      "id": "v1",
      "title": "Cimage College Patna Campus Tour",
      "youtubeId": "dQw4w9WgXcQ",
      "thumbnail": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      "duration": "5:32",
      "speaker": "College Administration",
      "type": "campus",
      "views": "15,243",
      "uploadDate": "2023-05-15"
    },
    {
      "id": "v2",
      "title": "Student Testimonial - BCA Program",
      "youtubeId": "dQw4w9WgXcQ",
      "thumbnail": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      "duration": "3:45",
      "speaker": "Rahul Kumar (BCA Student)",
      "type": "student",
      "views": "8,756",
      "uploadDate": "2023-07-22"
    },
    {
      "id": "v3",
      "title": "Alumni Success Story - Working at Amazon",
      "youtubeId": "dQw4w9WgXcQ",
      "thumbnail": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      "duration": "7:12",
      "speaker": "Priyanka Singh (BBA 2019)",
      "type": "alumni",
      "views": "12,890",
      "uploadDate": "2023-03-10"
    },
    {
      "id": "v4",
      "title": "Placement Drive at Cimage College",
      "youtubeId": "dQw4w9WgXcQ",
      "thumbnail": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      "duration": "4:56",
      "speaker": "Placement Cell",
      "type": "placement",
      "views": "9,432",
      "uploadDate": "2023-06-18"
    },
    {
      "id": "v5",
      "title": "Faculty Interview - Teaching Methodology",
      "youtubeId": "dQw4w9WgXcQ",
      "thumbnail": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      "duration": "6:23",
      "speaker": "Dr. Amit Kumar (HOD, BCA)",
      "type": "faculty",
      "views": "5,678",
      "uploadDate": "2023-04-05"
    }
  ],
  "alumniSuccessStories": [
    {
      "id": "a1",
      "name": "Rahul Mehta",
      "position": "Senior Software Engineer",
      "company": "Google",
      "image": "/placeholder-user.jpg",
      "quote": "The practical projects during my BCA gave me the hands-on experience that helped me stand out during interviews.",
      "batch": "2016",
      "currentLocation": "Bangalore, India"
    },
    {
      "id": "a2",
      "name": "Priya Singh",
      "position": "Product Manager",
      "company": "Amazon",
      "image": "/placeholder-user.jpg",
      "quote": "The leadership opportunities in student organizations prepared me for my current role managing teams.",
      "batch": "2018",
      "currentLocation": "Hyderabad, India"
    },
    {
      "id": "a3",
      "name": "Arjun Patel",
      "position": "Founder & CEO",
      "company": "TechStart Innovations",
      "image": "/placeholder-user.jpg",
      "quote": "The entrepreneurship cell at college gave me the confidence to start my own venture right after graduation.",
      "batch": "2020",
      "currentLocation": "Patna, India"
    }
  ],
  "collegeStats": {
    "placementRate": "95%",
    "recruitingPartners": 100,
    "satisfactionScore": "4.8/5",
    "yearsOfExcellence": 10,
    "totalAlumni": 5000,
    "averagePackage": "6.5 LPA"
  }
}

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'written' | 'video'>('written');

  const filteredTestimonials = activeFilter === 'all' 
    ? data.testimonials 
    : data.testimonials.filter(t => t.type === activeFilter);

  // Featured testimonials for the carousel (top 4 rated)
  const featuredTestimonials = data.testimonials.filter(t => t.rating === 5).slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
            Voices of Success
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-indigo-100">
            Discover why our community rates us among the top institutions. 
            Real stories from students, alumni, and partners.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button 
              onClick={() => document.getElementById('testimonials-section')?.scrollIntoView()}
              className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition"
            >
              Read Testimonials
            </button>
            <button 
              onClick={() => {
                setActiveTab('video');
                document.getElementById('testimonials-section')?.scrollIntoView();
              }}
              className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-700 transition"
            >
              Watch Videos
            </button>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-white shadow-lg -mt-10 mx-4 rounded-xl relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600">{data.collegeStats.placementRate}</div>
            <div className="text-gray-600 mt-1">Placement Rate</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600">{data.collegeStats.recruitingPartners}+</div>
            <div className="text-gray-600 mt-1">Recruiting Partners</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600">{data.collegeStats.satisfactionScore}</div>
            <div className="text-gray-600 mt-1">Satisfaction Score</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600">{data.collegeStats.yearsOfExcellence}+</div>
            <div className="text-gray-600 mt-1">Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Featured Testimonials Carousel */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Stories
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                        {testimonial.image && (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-indigo-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 line-clamp-3">{testimonial.content}</p>
                    <button className="mt-4 text-indigo-600 text-sm font-medium hover:text-indigo-800">
                      Read full story →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Testimonials Section */}
      <div id="testimonials-section" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Community Testimonials
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Filter through hundreds of genuine experiences from our college community
            </p>
          </div>

          {/* Tabs and Filters */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setActiveTab('written')}
                  className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                    activeTab === 'written'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Written Testimonials
                </button>
                <button
                  onClick={() => setActiveTab('video')}
                  className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                    activeTab === 'video'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Video Testimonials
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {['all', 'student', 'alumni', 'parent', 'recruiter', 'faculty'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {filter === 'all' ? 'All' : 
                  filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          {activeTab === 'written' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                        {testimonial.image && (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-indigo-600 text-sm">
                          {testimonial.role}
                          {testimonial.program && ` • ${testimonial.program}`}
                          {testimonial.batch && ` • ${testimonial.batch}`}
                        </p>
                      </div>
                    </div>

                    {testimonial.rating && (
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    )}

                    <blockquote className="relative">
                      <div className="absolute top-0 left-0 text-4xl text-gray-200 font-serif">
                        ❝
                      </div>
                      <p className="relative z-10 text-gray-600 mt-6 pl-4">
                        {testimonial.content}
                      </p>
                      <div className="absolute bottom-0 right-0 text-4xl text-gray-200 font-serif">
                        ❞
                      </div>
                    </blockquote>
                  </div>

                  <div
                    className={`px-4 py-2 text-center text-xs font-medium ${
                      testimonial.type === 'student'
                        ? 'bg-blue-50 text-blue-700'
                        : testimonial.type === 'alumni'
                        ? 'bg-green-50 text-green-700'
                        : testimonial.type === 'parent'
                        ? 'bg-purple-50 text-purple-700'
                        : testimonial.type === 'recruiter'
                        ? 'bg-orange-50 text-orange-700'
                        : 'bg-indigo-50 text-indigo-700'
                    }`}
                  >
                    {testimonial.type.charAt(0).toUpperCase() + testimonial.type.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.videoTestimonials.map((video) => (
                <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-indigo-600 text-sm mb-3">{video.speaker}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{video.views} views</span>
                      <span>{video.uploadDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Alumni Success Stories */}
      <div className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Alumni Success Stories
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Where our graduates are making an impact in the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.alumniSuccessStories.map((alumni) => (
              <div key={alumni.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                      <Image
                        src={alumni.image}
                        alt={alumni.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{alumni.name}</h3>
                      <p className="text-indigo-600 text-sm">{alumni.position}</p>
                      <p className="text-gray-500 text-sm">{alumni.company}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic">
                    "{alumni.quote}"
                  </blockquote>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">Class of {alumni.batch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Share Your Story?</h2>
          <p className="max-w-2xl mx-auto text-indigo-100 mb-8">
            Are you a current student, alumni, or partner? We'd love to hear about your experience!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition">
              Submit Your Testimonial
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-700 transition">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}