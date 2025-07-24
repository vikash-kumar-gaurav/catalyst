import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaDownload, FaChartLine, FaBuilding, FaGraduationCap, FaQuoteLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Placement Reports | Catalyst College Patna',
  description: 'Explore our placement statistics, top recruiters, and success stories across BBA, BCA, and BSc IT programs',
  keywords: [
    'Catalyst College Patna placements',
    'placement report 2024',
    'BBA placements',
    'BCA placements',
    'BSc IT placements',
    'campus recruitment',
    'highest package',
    'top recruiters Patna'
  ],
  openGraph: {
    title: 'Placement Reports | Catalyst College Patna',
    description: 'Detailed placement statistics and success stories of our graduates',
    images: [
      {
        url: 'https://catalystcollegepatna.edu.in/images/placement-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Catalyst College Placement Students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Placement Reports | Catalyst College Patna',
    description: 'Detailed placement statistics and success stories of our graduates',
    images: ['https://catalystcollegepatna.edu.in/images/placement-og.jpg'],
  }
};

const PlacementReports = async () => {

  let pageData = {
    "placements": [
    {
      "id": 1,
      "year": "2025",
      "studentsPlaced": 328,
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752665743/cimage_placement_2025_photoshot_ehit1d.jpg",
      "highlights": [
        "18% increase from previous year",
        "Highest package: ₹18 LPA",
        "Average package: ₹5.2 LPA"
      ],
      "topCompanies": ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL", "Tech Mahindra", "Capgemini"]
    },
    {
      "id": 2,
      "year": "2024",
      "studentsPlaced": 278,
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753347367/487811222_1061169542705651_219839437781063715_n_itc6tx.jpg",
      "highlights": [
        "15% increase from previous year",
        "Highest package: ₹16 LPA",
        "Average package: ₹4.8 LPA"
      ],
      "topCompanies": ["IBM", "Deloitte", "PwC", "EY", "KPMG", "Mindtree", "L&T Infotech", "Mphasis"]
    },
    {
      "id": 3,
      "year": "2023",
      "studentsPlaced": 242,
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753349325/482066055_1044840577671881_8853778612889271315_n_q23h0b.jpg",
      "highlights": [
        "12% increase from previous year",
        "Highest package: ₹14 LPA",
        "Average package: ₹4.2 LPA"
      ],
      "topCompanies": ["Amazon", "Flipkart", "Zomato", "Swiggy", "Paytm", "Byju's", "Unacademy", "OYO"]
    },
    {
      "id": 4,
      "year": "2022",
      "studentsPlaced": 216,
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753349932/491914204_23986609060944106_1302111434289028491_n_edlyuh.jpg",
      "highlights": [
        "10% increase from previous year",
        "Highest package: ₹12 LPA",
        "Average package: ₹3.8 LPA"
      ],
      "topCompanies": ["ICICI Bank", "HDFC Bank", "Axis Bank", "Kotak Mahindra", "Bajaj Finserv", "SBI", "PNB", "IndusInd Bank"]
    }
  ],
    "heroSection": {
      "title": "Placement Reports 2024-25",
      "description": "Celebrating our students' success with industry-leading placements across BBA, BCA, and BSc IT programs",
      "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752665743/cimage_placement_2025_photoshot_ehit1d.jpg"
    },
    "annualReports": [
      { "year": "2024-25", "link": "/reports/placement-2024-25.pdf" },
      { "year": "2023-24", "link": "/reports/placement-2023-24.pdf" },
      { "year": "2022-23", "link": "/reports/placement-2022-23.pdf" },
      { "year": "2021-22", "link": "/reports/placement-2021-22.pdf" }
    ],
    "placementStats": {
      "companiesVisited": 42,
      "highestPackage": "₹8.5 LPA",
      "averagePackage": "₹3.5 LPA",
      "placementRate": "92%",
      "topSectors": ["IT Services", "BFSI", "EdTech", "Consulting"]
    },
    "topRecruiters": [
      "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753114/download_yrgmjz.png",
      "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753126/download_oyqbjr.png",
      "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753138/download_cjyies.jpg",
      "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753151/download_cmf47v.png",
      "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753189/download_mjqx63.png",
      "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753202/download_dpcuui.png",
      "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753341/download_lptm8v.png"
    ],
    "programStats": [
      {
        "program": "BBA",
        "roles": ["Marketing Associate", "Sales Executive", "Business Analyst", "HR Trainee"],
        "avgPackage": "₹3.2 LPA",
        "recruiters": ["HDFC Bank", "ICICI Bank", "Kotak Mahindra", "Byju's", "Deloitte"],
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752839829/486697322_1061169472705658_3251323799160285940_n_ctnnsm.jpg"
      },
      {
        "program": "BCA",
        "roles": ["Software Developer", "QA Analyst", "Support Engineer", "UI/UX Designer"],
        "avgPackage": "₹3.6 LPA",
        "recruiters": ["TCS", "Wipro", "Infosys", "Zoho", "Accenture"],
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840024/517591720_1140605858095352_563657926001763622_n_qfafg8.jpg"
      },
      {
        "program": "BSc IT",
        "roles": ["Data Analyst", "Technical Support", "Network Admin", "System Engineer"],
        "avgPackage": "₹3.1 LPA",
        "recruiters": ["Cognizant", "Capgemini", "Tech Mahindra", "HCL", "IBM"],
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752839933/487094251_1061169886038950_5137237617336664906_n_n2nlcv.jpg"
      }
    ],
    "testimonials": [
      {
        "quote": "Getting placed at Infosys was a dream come true. The placement cell guided us at every step of the recruitment process.",
        "name": "Ritu Sharma",
        "program": "BCA (2024)",
        "company": "Infosys",
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840893/download_zb0npp.png"
      },
      {
        "quote": "The mock interviews and resume workshops conducted by the placement cell were instrumental in my selection at Deloitte.",
        "name": "Vishal Kumar",
        "program": "BBA (2025)",
        "company": "Deloitte",
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840736/WhatsApp_Image_2025-07-18_at_17.41.30_f740107d_xrxnwk.jpg"
      },
      {
        "quote": "I received 3 job offers during campus placements. The industry-aligned curriculum gave me an edge in technical rounds.",
        "name": "Tripti",
        "program": "BSc IT (2025)",
        "company": "TCS",
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840857/download_bxlxfr.jpg"
      }
    ],
    "galleryImages": [
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752666397/486627742_1060368422785763_7035592271524232960_n_uw11i6.jpg",
        "caption": "Campus Recruitment Drive"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752665743/cimage_placement_2025_photoshot_ehit1d.jpg",
        "caption": "Offer Letter Celebration"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752828851/486151393_1055702869918985_3352829412523095400_n_p5bn95.jpg",
        "caption": "Industry Interaction Session"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840313/482248163_1049466630542609_1012356091268285421_n_qo03dn.jpg",
        "caption": "Farewell Ceremony"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752829184/487039934_1062569379232334_8104513723895339455_n_vfdssr.jpg",
        "caption": "Pre-Placement Workshop"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840137/486062223_1056593913163214_903525736881095147_n_cunjj0.jpg",
        "caption": "Alumni Meet"
      }
    ],
    "collegePlacementChart": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752839134/download_j3eb6c.jpg"
  }
  const { data, error } = await fetchPageData("placement-reports")
  pageData = data as any ?? pageData

  const { heroSection, galleryImages,placements, testimonials, programStats, topRecruiters, placementStats, annualReports, collegePlacementChart } = pageData
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title={heroSection.title}
        description={heroSection.description}
        imageUrl={heroSection.imageUrl}
        overlayOpacity={0.4}
        height="lg"


      />

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Placement Success Story</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>
              The Placement Cell at <span className="font-semibold text-blue-600">Catalyst College Patna</span> works closely with students and industry to ensure strong career outcomes. Over the years, we've built a robust recruitment ecosystem, reflected in our consistent placement success across programs like BBA, BCA, and BSc IT.
            </p>
            <p className="mt-4">
              Our comprehensive placement preparation includes technical training, soft skills development, mock interviews, and regular industry interactions, resulting in year-on-year growth in both placement percentages and compensation packages.
            </p>
          </div>
        </div>
      </section>

      {/* ------------placements images ---------------- */}

        <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Yearly Placement Records
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our consistent track record of placing students in top companies across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {placements.map((placement) => (
            <div 
              key={placement.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                {/* Replace with actual image or placeholder */}
               <img src={placement.image} alt={placement.image} className='object-center object-cover' />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <span className="font-bold text-blue-600">{placement.year}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {placement.studentsPlaced}+ Placements
                  </h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round((placement.studentsPlaced / placements[0].studentsPlaced) * 100)}%
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Highlights
                  </h4>
                  <ul className="space-y-1">
                    {placement.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Top Recruiters
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {placement.topCompanies.map((company, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Download Reports Section */}
      <section className="py-4 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Annual Placement Reports</h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x">
              {annualReports.map((report, index) => (
                <div key={index} className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{report.year}</h3>
                  <a
                    href={report.link}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    download
                  >
                    <FaDownload className="mr-2" />
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Placement Statistics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Infographic */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <FaChartLine className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Key Metrics</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-600">Companies Visited</span>
                <span className="font-bold text-gray-800">{placementStats.companiesVisited}+</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-600">Highest Package</span>
                <span className="font-bold text-blue-600">{placementStats.highestPackage}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-600">Average Package</span>
                <span className="font-bold text-gray-800">{placementStats.averagePackage}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-600">Placement Rate</span>
                <span className="font-bold text-green-600">{placementStats.placementRate}</span>
              </div>
              <div className="flex justify-between items-start pt-2">
                <span className="text-gray-600">Top Sectors</span>
                <div className="text-right">
                  {placementStats.topSectors.map((sector, i) => (
                    <span key={i} className="block text-gray-800">{sector}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <img
                  className='w-full h-full'
                  src={collegePlacementChart}
                  alt="college process per year.png" />
              </div>
              <p className="text-gray-600">Year-on-year growth in placements and packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Top Recruiters</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {topRecruiters.map((logo, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
                <div className="relative w-full h-16">
                  <Image
                    src={logo}
                    alt={`Recruiter logo ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program-wise Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Program-wise Placement Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programStats.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={program.image}
                  alt={`${program.program} placements`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{program.program}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaGraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-800">Average Package: {program.avgPackage}</h4>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-700 mb-2">Top Roles:</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {program.roles.map((role, i) => (
                      <li key={i}>{role}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Key Recruiters:</h5>
                  <div className="flex flex-wrap gap-2">
                    {program.recruiters.map((recruiter, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {recruiter}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <FaQuoteLeft className="text-gray-300 text-3xl mb-4" />
                <blockquote className="text-lg text-gray-700 mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.program}</p>
                    <p className="text-blue-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Placement Moments</h2>

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
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Success Story</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a student, recruiter, or industry partner, we invite you to be part of our placement success
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              For Recruiters
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              For Students
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Placement Cell
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementReports;