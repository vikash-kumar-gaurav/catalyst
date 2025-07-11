import HeroSection from '@/components/newHeroImageForAllPage';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaUsers, FaBrain, FaLaptopCode, FaFileAlt, FaComments, FaCertificate, FaDownload } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Career Training | Catalyst College Patna',
  description: 'Comprehensive career readiness programs with technical training, soft skills development, and interview preparation',
  keywords: [
    'Catalyst College career training',
    'placement preparation',
    'soft skills training',
    'aptitude training',
    'technical skills development',
    'mock interviews',
    'resume building workshop'
  ],
  openGraph: {
    title: 'Career Training | Catalyst College Patna',
    description: 'Industry-aligned training programs to enhance employability of BBA, BCA, and BSc IT students',
    images: [
      {
        url: 'https://catalystcollegepatna.edu.in/images/career-training-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Career Training at Catalyst College',
      },
    ],
  },
};

const CareerTraining = () => {
  // Training modules data
  const trainingModules = [
    {
      title: "Soft Skills Training",
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      description: "Developing essential interpersonal skills for professional success",
      components: [
        "Communication (verbal & written)",
        "Group discussions & public speaking",
        "Professional etiquette & grooming",
        "Conflict resolution & emotional intelligence"
      ],
      partners: ["T.I.M.E Institute", "British Council", "SmartTalk"],
      image: "/images/soft-skills.jpg"
    },
    {
      title: "Aptitude & Reasoning",
      icon: <FaBrain className="w-8 h-8 text-purple-600" />,
      description: "Mastering quantitative, logical and analytical abilities for placements",
      components: [
        "Quantitative Aptitude",
        "Logical Reasoning",
        "Data Interpretation",
        "Weekly mock tests with analytics"
      ],
      partners: ["T.I.M.E Institute", "Amcat", "CoCubes"],
      image: "/images/aptitude.jpg"
    },
    {
      title: "Technical Training",
      icon: <FaLaptopCode className="w-8 h-8 text-green-600" />,
      description: "Domain-specific skill development for IT and business students",
      components: [
        "Programming (Java, Python, C++) - BCA/BSc IT",
        "Web development & DBMS",
        "Financial modeling (Excel) - BBA",
        "Digital marketing & business simulations"
      ],
      partners: ["AWS Academy", "Microsoft Learn", "Google Digital Garage"],
      image: "/images/technical.jpg"
    },
    {
      title: "Resume & LinkedIn",
      icon: <FaFileAlt className="w-8 h-8 text-orange-600" />,
      description: "Crafting professional profiles that stand out to recruiters",
      components: [
        "Personalized CV reviews",
        "LinkedIn profile optimization",
        "Cover letter writing",
        "ATS-friendly resume building"
      ],
      partners: ["Internshala Trainings", "Canva", "Zety"],
      image: "/images/resume.jpg"
    },
    {
      title: "Mock Interviews",
      icon: <FaComments className="w-8 h-8 text-red-600" />,
      description: "Simulated interview experiences with detailed feedback",
      components: [
        "One-on-one HR & technical mocks",
        "Recorded sessions for self-review",
        "Company-specific interview drills",
        "Group discussion simulations"
      ],
      partners: ["Alumni Network", "TCS iON", "Placement Cell"],
      image: "/images/mock-interview.jpg"
    },
    {
      title: "Certifications",
      icon: <FaCertificate className="w-8 h-8 text-indigo-600" />,
      description: "Industry-recognized certifications to boost employability",
      components: [
        "AWS Cloud Foundations",
        "Microsoft Office Specialist",
        "Google Analytics Certification",
        "Tally ERP9 & Advanced Excel"
      ],
      partners: ["AWS Educate", "Microsoft Learn", "Google Digital Garage"],
      image: "/images/certification.jpg"
    }
  ];

  // Training schedule
  const trainingSchedule = [
    {
      year: "1st Year",
      focus: "Foundation Skills",
      delivery: "Weekly in-class sessions",
      activities: ["Basic communication", "IT fundamentals", "Professional etiquette"]
    },
    {
      year: "2nd Year",
      focus: "Technical & Aptitude",
      delivery: "Bootcamps & labs",
      activities: ["Programming skills", "Aptitude training", "Domain knowledge"]
    },
    {
      year: "3rd Year",
      focus: "Placement Preparation",
      delivery: "Intensive workshops",
      activities: ["Mock interviews", "Resume building", "Company-specific prep"]
    }
  ];

  // Training partners
  const trainingPartners = [
    "/logos/time.png",
    "/logos/internshala.png",
    "/logos/aws.png",
    "/logos/microsoft.png",
    "/logos/google.png",
    "/logos/tcs-ion.png",
    "/logos/british-council.png",
    "/logos/smarttalk.png"
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "The career training sessions helped me crack my TCS interview with confidence. The mock interviews were especially valuable.",
      name: "Raj Mehta",
      program: "BCA, Batch 2024",
      company: "Placed at TCS",
      image: "/images/student-1.jpg"
    },
    {
      quote: "The soft skills training transformed my communication abilities and helped me secure a marketing role at HDFC Bank.",
      name: "Priya Sharma",
      program: "BBA, Batch 2023",
      company: "Placed at HDFC Bank",
      image: "/images/student-2.jpg"
    },
    {
      quote: "The technical bootcamps gave me hands-on experience that was directly applicable during my Infosys interview process.",
      name: "Amit Kumar",
      program: "BSc IT, Batch 2024",
      company: "Placed at Infosys",
      image: "/images/student-3.jpg"
    }
  ];

  // Gallery images
  const galleryImages = [
    { src: "/images/training-1.jpg", caption: "Soft Skills Workshop" },
    { src: "/images/training-2.jpg", caption: "Aptitude Training Session" },
    { src: "/images/training-3.jpg", caption: "Technical Bootcamp" },
    { src: "/images/training-4.jpg", caption: "Resume Building Workshop" },
    { src: "/images/training-5.jpg", caption: "Mock Interview Session" },
    { src: "/images/training-6.jpg", caption: "Certification Ceremony" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Career Training Programs"
        description="Equipping students with technical proficiency, soft skills, and real-world competencies for career success"
        imageUrl="https://images.unsplash.com/photo-1565688527174-775059ac429c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overlayOpacity={0.4}
        height="lg"
      />

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Career Readiness Approach</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>
              At <span className="font-semibold text-blue-600">Catalyst College Patna</span>, we believe that academic excellence must be complemented by strong employability skills. Our Career Training programs are systematically designed to equip students with technical proficiency, soft skills, interview readiness, and real-world competencies needed to thrive in the professional world.
            </p>
            <p className="mt-4">
              Through a structured three-year curriculum, industry partnerships, and hands-on workshops, we ensure our BBA, BCA, and BSc IT graduates are workplace-ready from day one of their professional journey.
            </p>
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Comprehensive Training Modules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingModules.map((module, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <Image 
                  src={module.image}
                  alt={module.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{module.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Key Components:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {module.components.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Training Partners:</h4>
                  <div className="flex flex-wrap gap-2">
                    {module.partners.map((partner, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Schedule Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Three-Year Training Roadmap</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
              {trainingSchedule.map((year, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{year.year}</h3>
                  <p className="text-blue-600 font-medium mb-4">{year.focus}</p>
                  <p className="text-gray-600 mb-4"><span className="font-medium">Delivery:</span> {year.delivery}</p>
                  
                  <h4 className="font-medium text-gray-700 mb-2">Key Activities:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {year.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Training Partners</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {trainingPartners.map((logo, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <div className="relative w-full h-16">
                <Image 
                  src={logo}
                  alt={`Training partner logo ${index+1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Student Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.program}</p>
                    <p className="text-blue-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Training in Action</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 relative">
                  <Image 
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
                      <p className="text-white font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Career Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Training Calendar</h3>
            <p className="text-gray-600 mb-6">Download our annual career training schedule</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaDownload className="inline mr-2" />
              Download PDF
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Career Handbook</h3>
            <p className="text-gray-600 mb-6">Comprehensive guide to placement preparation</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaDownload className="inline mr-2" />
              Download PDF
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Certification List</h3>
            <p className="text-gray-600 mb-6">All available industry certification programs</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaDownload className="inline mr-2" />
              View Options
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a student, training provider, or industry mentor, join us in preparing the next generation of professionals
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              For Students
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              For Trainers
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Career Cell
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerTraining;