import { fetchPageData } from '@/lib/useFetchData';
import { ArrowUpIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaCalendarAlt, FaUsers, FaLaptopCode, FaChartLine, FaHandsHelping, FaTrophy, FaArrowRight } from 'react-icons/fa';

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
let pageData ={
  "activities": [
    {
      "category": "Seminars & Expert Talks",
      "items": [
        {
          "title": "AI in Business Strategy",
          "programs": ["BBA", "BCA"],
          "date": "March 15, 2024",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752828414/fe9e2f11-4087-4f43-aa60-9bd2d6f5eb01.png",
          "description": "Joint seminar exploring AI applications in business decision making"
        },
        {
          "title": "Cybersecurity Basics",
          "programs": ["BSc IT", "BCA"],
          "date": "February 28, 2024",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752828495/488922405_23916388957966117_1283071211367299069_n_cfbbii.jpg",
          "description": ""
        }
      ]
    },
    {
      "category": "Workshops & Training",
      "items": [
        {
          "title": "Python for Beginners",
          "programs": ["BCA", "BSc IT"],
          "date": "January 20, 2024",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752828584/485090290_1053184353504170_7489473702427463248_n_jcpvvt.jpg",
          "description": "Hands-on coding workshop covering Python fundamentals"
        },
        {
          "title": "Excel for Financial Modeling",
          "programs": ["BBA"],
          "date": "November 10, 2023",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752828728/download_hnd6ie.png",
          "description": "Full tutorial of Excel"
        }
      ]
    },
    {
      "category": "Industrial Visits",
      "items": [
        {
          "title": "Steel Process Factory",
          "programs": ["BCA", "BSc IT"],
          "date": "December 5, 2023",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752828851/486151393_1055702869918985_3352829412523095400_n_p5bn95.jpg",
          "description": "Exposure to Iron Process and supply"
        },
        {
          "title": "Butter D-lite Plant Visit",
          "programs": ["BBA"],
          "date": "October 18, 2023",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752828867/487555599_1061839282638677_5498399053034687482_n_rc1arw.jpg",
          "description": "Understanding manufacturing and supply chain management"
        }
      ]
    },
    {
      "category": "Tech & Business Fests",
      "items": [
        {
          "title": "Career MahaKumbh",
          "programs": ["BBA", "BCA", "BSc IT"],
          "date": "02 August 2025",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752829184/487039934_1062569379232334_8104513723895339455_n_vfdssr.jpg",
          "description": "Annual inter-department fest with 20+ events"
        }
      ]
    },
    {
      "category": "Competitions",
      "items": [
        {
          "title": "Code Combat",
          "programs": ["BCA", "BSc IT"],
          "date": "February 10, 2024",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740409/485146986_1053170816838857_6978447644490651086_n_vuedb7.jpg",
          "description": "24-hour coding competition with industry judges"
        },
        {
          "title": "Market Masters",
          "programs": ["BBA"],
          "date": "January 25, 2024",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752831252/494024698_24052016884403323_2194228380363041065_n_vb8e5b.jpg",
          "description": "Simulated stock trading competition"
        }
      ]
    },
    {
      "category": "Clubs & Student Bodies",
      "items": [
        {
          "title": "Tech Club Activities",
          "programs": ["BCA", "BSc IT"],
          "date": "Ongoing",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752747110/486057045_1056585686497370_2858634788722645153_n_boowwi.jpg",
          "description": "Regular meetups on emerging technologies"
        },
        {
          "title": "Management Club Events",
          "programs": ["BBA"],
          "date": "Ongoing",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752831411/488245573_1064934782329127_4396540362937987045_n_g1lnja.jpg",
          "description": "Business case studies and leadership workshops"
        }
      ]
    },
    {
      "category": "Social Outreach",
      "items": [
        {
          "title": "Blood Donation Camp",
          "programs": ["BBA", "BCA", "BSc IT"],
          "date": "October 1, 2023",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741326/488217060_1064882295667709_1999050953493412670_n_k0rev3.jpg",
          "description": "Annual blood donation drive in collaboration with Red Cross"
        },
        {
          "title": "Tech for Society",
          "programs": ["BCA", "BSc IT"],
          "date": "September 2023",
          "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752829478/67257742_10157123718725520_8146137322111369216_n_owyqln.jpg",
          "description": "Students developed website for local NGO"
        }
      ]
    }
  ],
  "gallery": [
    {
      "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752832078/WhatsApp_Image_2025-07-18_at_15.17.50_2a297882_syiaaz.jpg",
      "caption": "Cash Prize"
    },
    {
      "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752832349/487798706_1061838152638790_7457525024258014507_n_tqdgbo.jpg",
      "caption": "Industrial Visit "
    },
    {
      "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740831/486873408_1062197215936217_8435744219966123771_n_hjraq7.jpg",
      "caption": "Workshop on Power BI"
    },
    {
      "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741316/487286892_1064883055667633_5024952859530526660_n_lbq9yo.jpg",
      "caption": "Blood Donation Camp 2023"
    },
    {
      "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740468/485734238_1052423500246922_2889030121503606787_n_qfov2y.jpg",
      "caption": "Krititirth"
    },
    {
      "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752832588/486603351_1058956489593623_3298960217531760490_n_k3ului.jpg",
      "caption": "Annual Sports Day"
    }
  ],
  "stats": [
    { "value": "25+", "label": "Workshops Conducted"},
    { "value": "8", "label": "Industrial Visits" },
    { "value": "500+", "label": "Students Participated" },
    { "value": "15", "label": "Expert Sessions" },
    { "value": "3", "label": "Major Fests" },
    { "value": "10+", "label": "CSR Initiatives" }
  ],
  "testimonials": [
    {
      "quote": "The app development bootcamp helped me land an internship at a leading tech firm!",
      "author": "Riya Sharma",
      "program": "BCA, 3rd Year"
    },
    {
      "quote": "Organizing BizQuiz enhanced my leadership and event management skills tremendously.",
      "author": "Akash Verma",
      "program": "BBA, 2nd Year"
    },
    {
      "quote": "Our industrial visit to Infosys gave me clarity about corporate expectations and work culture.",
      "author": "Priyanka Singh",
      "program": "BSc IT, Final Year"
    },
    {
      "quote": "The department activities bridge the gap between theoretical knowledge and practical application effectively.",
      "author": "Prof. Rajiv Kumar",
      "position": "HOD, Computer Applications"
    }
  ]
}

const DepartmentalActivities = async() => {

  const { data , error} = await fetchPageData("departmental- activities")
  pageData = data as any ?? pageData
  const { testimonials, stats, activities } = pageData


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
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities by Category */}

       <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Departmental Activities</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the diverse range of events, workshops, and competitions that define our vibrant academic community.
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {activities.map((activityCategory, index) => (
          <div key={index}>
            {/* Category Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 pb-3 border-b-2 border-indigo-200">
              {activityCategory.category}
            </h3>

            {/* Grid of Activity Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {activityCategory.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 flex flex-col overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                        <FaCalendarAlt className="mr-1.5" />
                        {item.date}
                      </span>
                      <span className="flex items-center bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">
                        <FaUsers className="mr-1.5" />
                        {item.programs.join(' & ')}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed flex-grow mb-4">
                      {item.description}
                    </p>

                    <a
                      href="#"
                      className="mt-auto group inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowUpIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Photo Gallery */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Gallery Highlights</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.gallery.map((image, index) => (
              <div key={index} className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 relative">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
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
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Community Says</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
      <section className="py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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