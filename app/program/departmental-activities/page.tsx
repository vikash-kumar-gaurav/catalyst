import { Metadata } from 'next';
import Image from 'next/image';
import { FaCalendarAlt, FaUsers, FaLaptopCode, FaChartLine, FaHandsHelping, FaTrophy } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Departmental Activities | Catalyst College Patna',
  description: 'Explore academic and co-curricular activities for BBA, BCA, and BSc IT students at Catalyst College Patna, one of the premier institutions in Bihar.',
  keywords: ['Catalyst College Patna', 'BBA activities', 'BCA workshops', 'BSc IT events', 'college fests', 'industrial visits', 'Patna colleges'],
  authors: [{ name: 'Catalyst College Patna' }],
  openGraph: {
    title: 'Departmental Activities | Catalyst College Patna',
    description: 'Vibrant academic and co-curricular activities for BBA, BCA, and BSc IT students',
    url: 'https://catalystcollegepatna.edu.in/departmental-activities',
    siteName: 'Catalyst College Patna',
    images: [
      {
        url: 'https://catalystcollegepatna.edu.in/images/department-activities-og.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

const DepartmentalActivities = () => {
  const activities = [
    {
      category: 'Seminars & Expert Talks',
      items: [
        {
          title: 'AI in Business Strategy',
          programs: ['BBA', 'BCA'],
          date: 'March 15, 2024',
          image: '/images/seminar-ai.jpg',
          description: 'Joint seminar exploring AI applications in business decision making'
        },
        {
          title: 'Cybersecurity Basics',
          programs: ['BSc IT', 'BCA'],
          date: 'February 28, 2024',
          image: '/images/cyber-security.jpg',
          description: 'Essential cybersecurity practices for IT professionals'
        }
      ]
    },
    {
      category: 'Workshops & Training',
      items: [
        {
          title: 'Python for Beginners',
          programs: ['BCA', 'BSc IT'],
          date: 'January 20, 2024',
          image: '/images/python-workshop.jpg',
          description: 'Hands-on coding workshop covering Python fundamentals'
        },
        {
          title: 'Excel for Financial Modeling',
          programs: ['BBA'],
          date: 'November 10, 2023',
          image: '/images/excel-workshop.jpg',
          description: 'Advanced Excel techniques for financial analysis'
        }
      ]
    },
    {
      category: 'Industrial Visits',
      items: [
        {
          title: 'Infosys Tech Park Visit',
          programs: ['BCA', 'BSc IT'],
          date: 'December 5, 2023',
          image: '/images/infosys-visit.jpg',
          description: 'Exposure to corporate IT infrastructure and workflows'
        },
        {
          title: 'Parle-G Plant Visit',
          programs: ['BBA'],
          date: 'October 18, 2023',
          image: '/images/parle-visit.jpg',
          description: 'Understanding manufacturing and supply chain management'
        }
      ]
    },
    {
      category: 'Tech & Business Fests',
      items: [
        {
          title: 'INNOVA 2K24',
          programs: ['BBA', 'BCA', 'BSc IT'],
          date: 'March 1-3, 2024',
          image: '/images/innova-fest.jpg',
          description: 'Annual inter-department fest with 20+ events'
        }
      ]
    },
    {
      category: 'Competitions',
      items: [
        {
          title: 'CodeStorm Hackathon',
          programs: ['BCA', 'BSc IT'],
          date: 'February 10, 2024',
          image: '/images/codestorm.jpg',
          description: '24-hour coding competition with industry judges'
        },
        {
          title: 'Market Masters',
          programs: ['BBA'],
          date: 'January 25, 2024',
          image: '/images/market-masters.jpg',
          description: 'Simulated stock trading competition'
        }
      ]
    },
    {
      category: 'Clubs & Student Bodies',
      items: [
        {
          title: 'Tech Club Activities',
          programs: ['BCA', 'BSc IT'],
          date: 'Ongoing',
          image: '/images/tech-club.jpg',
          description: 'Regular meetups on emerging technologies'
        },
        {
          title: 'Management Club Events',
          programs: ['BBA'],
          date: 'Ongoing',
          image: '/images/mgmt-club.jpg',
          description: 'Business case studies and leadership workshops'
        }
      ]
    },
    {
      category: 'Social Outreach',
      items: [
        {
          title: 'Blood Donation Camp',
          programs: ['BBA', 'BCA', 'BSc IT'],
          date: 'October 1, 2023',
          image: '/images/blood-donation.jpg',
          description: 'Annual blood donation drive in collaboration with Red Cross'
        },
        {
          title: 'Tech for Society',
          programs: ['BCA', 'BSc IT'],
          date: 'September 2023',
          image: '/images/tech-society.jpg',
          description: 'Students developed website for local NGO'
        }
      ]
    }
  ];

  const stats = [
    { value: '25+', label: 'Workshops Conducted', icon: <FaLaptopCode className="w-8 h-8" /> },
    { value: '8', label: 'Industrial Visits', icon: <FaChartLine className="w-8 h-8" /> },
    { value: '500+', label: 'Students Participated', icon: <FaUsers className="w-8 h-8" /> },
    { value: '15', label: 'Expert Sessions', icon: <FaCalendarAlt className="w-8 h-8" /> },
    { value: '3', label: 'Major Fests', icon: <FaTrophy className="w-8 h-8" /> },
    { value: '10+', label: 'CSR Initiatives', icon: <FaHandsHelping className="w-8 h-8" /> }
  ];

  const testimonials = [
    {
      quote: "The app development bootcamp helped me land an internship at a leading tech firm!",
      author: "Riya Sharma",
      program: "BCA, 3rd Year"
    },
    {
      quote: "Organizing BizQuiz enhanced my leadership and event management skills tremendously.",
      author: "Akash Verma",
      program: "BBA, 2nd Year"
    },
    {
      quote: "Our industrial visit to Infosys gave me clarity about corporate expectations and work culture.",
      author: "Priyanka Singh",
      program: "BSc IT, Final Year"
    },
    {
      quote: "The department activities bridge the gap between theoretical knowledge and practical application effectively.",
      author: "Prof. Rajiv Kumar",
      position: "HOD, Computer Applications"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Departmental Activities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Exploring the vibrant academic and co-curricular initiatives for BBA, BCA, and BSc IT students at Catalyst College Patna
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Academic & Co-Curricular Excellence</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>
              The Department of Commerce & Computer Applications at <span className="font-semibold text-blue-600">Catalyst College Patna</span> regularly organizes academic, technical, and professional development activities for students across its flagship programs — BBA, BCA, and BSc IT. These initiatives aim to bridge the gap between classroom learning and real-world application, nurturing well-rounded graduates ready for the challenges of modern business and technology landscapes.
            </p>
            <p className="mt-4">
              Our activities range from industry-aligned workshops and expert seminars to competitive events and social outreach programs, ensuring comprehensive development of technical skills, business acumen, and leadership qualities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities by Category */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Departmental Activities</h2>
        
        <div className="space-y-16">
          {activities.map((activityCategory, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white">{activityCategory.category}</h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {activityCategory.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                      <div className="flex items-center mt-2 text-sm text-gray-600">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        <span>{item.date}</span>
                        <span className="mx-2">|</span>
                        <FaUsers className="mr-2 text-blue-500" />
                        <span>{item.programs.join(', ')}</span>
                      </div>
                      <p className="mt-3 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Gallery Highlights</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/gallery-1.jpg', caption: 'INNOVA 2K24 Fest' },
              { src: '/images/gallery-2.jpg', caption: 'Industrial Visit to Tech Park' },
              { src: '/images/gallery-3.jpg', caption: 'Workshop on AI Applications' },
              { src: '/images/gallery-4.jpg', caption: 'Blood Donation Camp 2023' },
              { src: '/images/gallery-5.jpg', caption: 'Business Quiz Competition' },
              { src: '/images/gallery-6.jpg', caption: 'Annual Sports Day' },
            ].map((image, index) => (
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
          
          <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Community Says</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.program || testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Catalyst College?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our vibrant academic community and participate in these enriching activities that shape future leaders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentalActivities;