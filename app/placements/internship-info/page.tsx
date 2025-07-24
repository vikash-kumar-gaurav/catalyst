import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaBriefcase, FaCalendarAlt, FaUniversity, FaBuilding, FaUserTie, FaFileDownload } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Internship Programs | Catalyst College Patna',
  description: 'Explore internship opportunities, processes, and success stories for BBA, BCA, and BSc IT students',
  keywords: [
    'Catalyst College internships',
    'summer internship Patna',
    'BCA internship opportunities',
    'BBA corporate training',
    'BSc IT practical training',
    'college internship program'
  ],
  openGraph: {
    title: 'Internship Programs | Catalyst College Patna',
    description: 'Bridging academic learning with real-world experience through structured internships',
    images: [
      {
        url: 'https://catalystcollegepatna.edu.in/images/internship-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Internship Program at Catalyst College',
      },
    ],
  },
};
let pageData = {
  "internshipTypes": [
    {
      "type": "Summer Internship",
      "duration": "4-8 weeks",
      "eligibility": "End of 2nd year",
      "description": "Intensive project work during summer break",
      "icon": "FaBriefcase"
    },
    {
      "type": "Semester Internship",
      "duration": "3-6 months",
      "eligibility": "Final year students",
      "description": "Credit-based professional experience",
      "icon": "FaCalendarAlt"
    },
    {
      "type": "Virtual Internship",
      "duration": "1-3 months",
      "eligibility": "All years",
      "description": "Remote projects with flexible scheduling",
      "icon": "FaUniversity"
    },
    {
      "type": "Live Projects",
      "duration": "Ongoing",
      "eligibility": "Faculty recommendation",
      "description": "Real-world assignments from companies",
      "icon": "FaBuilding"
    }
  ],
  "supportServices": [
    "Dedicated internship portal with curated opportunities",
    "Resume and LinkedIn profile workshops",
    "Mock interview sessions with industry professionals",
    "Faculty mentorship for project guidance",
    "Tie-ups with Internshala, TCS iON, and AICTE",
    "Regular industry interaction sessions"
  ],
  "processSteps": [
    { "step": 1, "title": "Application", "description": "Submit form through college portal" },
    { "step": 2, "title": "Preparation", "description": "Attend resume and interview workshops" },
    { "step": 3, "title": "Placement", "description": "Get matched with companies" },
    { "step": 4, "title": "Approval", "description": "Faculty review and approval" },
    { "step": 5, "title": "Execution", "description": "Complete internship period" },
    { "step": 6, "title": "Evaluation", "description": "Submit report and present outcomes" }
  ],
  "topCompanies": [
    "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753341/download_lptm8v.png",
    "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753202/download_dpcuui.png",
    "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753189/download_mjqx63.png",
    "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753151/download_cmf47v.png",
    "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753138/download_cjyies.jpg",
    "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753126/download_oyqbjr.png",
    "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753114/download_yrgmjz.png"
  ],
  "roleExamples": [
    {
      "program": "BBA",
      "roles": ["Marketing Intern", "Sales Trainee", "HR Assistant", "Business Analyst"],
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740679/484966724_1053174710171801_7945179237414533460_n_lpdeax.jpg"
    },
    {
      "program": "BCA",
      "roles": ["Web Dev Intern", "Technical Support", "QA Tester", "App Developer"],
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840736/WhatsApp_Image_2025-07-18_at_17.41.30_f740107d_xrxnwk.jpg"
    },
    {
      "program": "BSc IT",
      "roles": ["Data Analyst", "Network Assistant", "IT Support", "Security Trainee"],
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740741/487301788_1062568922565713_5457511864499874592_n_l65esw.jpg"
    }
  ],
  "testimonials": [
    {
      "quote": "My internship at Zoho gave me hands-on experience in full-stack development and led to a pre-placement offer.",
      "name": "Priya Mehta",
      "program": "BCA, 2024",
      "company": "Zoho",
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840857/download_bxlxfr.jpg"
    },
    {
      "quote": "Working as a digital marketing intern at a startup helped me build a strong portfolio that impressed recruiters.",
      "name": "Rohit Sharma",
      "program": "BBA, 2023",
      "company": "Local Startup",
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840893/download_zb0npp.png"
    },
    {
      "quote": "The semester internship at TCS iON gave me industry exposure that complemented my classroom learning perfectly.",
      "name": "Amit Kumar",
      "program": "BSc IT, 2024",
      "company": "TCS iON",
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840893/download_zb0npp.png"
    }
  ],
  "downloads": [
    { "name": "Internship Guidelines", "format": "PDF", "size": "1.2MB" },
    { "name": "Internship Report Format", "format": "DOCX", "size": "0.8MB" },
    { "name": "Offer Letter Template", "format": "PDF", "size": "0.5MB" },
    { "name": "NDA Agreement", "format": "DOCX", "size": "1.0MB" }
  ],
  "calendarEvents": [
    { "activity": "Orientation Session", "timeline": "January / June" },
    { "activity": "Applications Open", "timeline": "March & November" },
    { "activity": "Internship Period", "timeline": "May-July / Dec-Feb" },
    { "activity": "Report Submission", "timeline": "August / March" },
    { "activity": "Evaluation Viva", "timeline": "September / April" }
  ],
  "heroSection": {
    "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740770/487872091_1062568942565711_1649777733350717587_n_l1whum.jpg",
    "description": "Gain real-world experience and build professional skills with our structured internship programs",
    "title": "Industry Immersion Through Internships"
  }
}
const InternshipInfo = async () => {

  const { data, error } = await fetchPageData("internship-info");
  pageData = data as any ?? pageData

  const { heroSection, calendarEvents, downloads, testimonials, roleExamples, topCompanies, processSteps, supportServices, internshipTypes } = pageData


  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with new design */}
      <HeroSection
        title={heroSection.title}
        description={heroSection.description}
        imageUrl={heroSection.imageUrl}
        overlayOpacity={0.3}
        height="xl"

      />

      {/* Why Internships Matter - New Card Design */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-8 border-blue-600">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Internships Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose prose-lg text-gray-600">
              <p>
                Internships are a vital part of the academic experience at <span className="font-semibold text-blue-600">Catalyst College Patna</span>. They bridge classroom learning with real-world application and help students explore career paths, gain professional skills, and build industry connections before graduation.
              </p>
              <p className="mt-4">
                Our structured internship programs across BBA, BCA, and BSc IT programs are designed to provide meaningful professional experiences that enhance employability and academic understanding.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">92%</div>
                <p className="text-gray-700 font-medium">of our students complete at least one internship before graduation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Types - Grid Layout */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Internship Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internshipTypes.map((internship, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{internship.type}</h3>
                    <p className="text-blue-600 font-medium">{internship.duration}</p>
                  </div>
                  {internship.icon}
                </div>
                <p className="text-gray-600 mb-4">{internship.description}</p>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm inline-block">
                  Eligibility: {internship.eligibility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Process - Side by Side */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Support Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaUniversity className="text-blue-500 mr-3" />
                College Support Services
              </h2>
              <ul className="space-y-4">
                {supportServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaUserTie className="text-blue-500 mr-3" />
                Internship Process
              </h2>
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="flex items-center text-blue-600 font-medium">
                  <FaFileDownload className="mr-2" />
                  Download Process Flowchart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies & Roles - New Design */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Internship Partners & Roles</h2>

          {/* Company Logos - Carousel Style */}
          <div className="mb-16">
            <div className="relative overflow-hidden">
              <div className="flex space-x-8 animate-marquee whitespace-nowrap">
                {topCompanies.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 h-16 w-32 relative">
                    <Image
                      src={logo}
                      alt={`Company logo ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Role Examples */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roleExamples.map((program, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="h-64 relative">
                  <Image
                    src={program.image}
                    alt={`${program.program} internship`}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">{program.program} Internships</h3>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h4 className="font-medium text-gray-700 mb-3">Common Roles:</h4>
                  <ul className="space-y-2">
                    {program.roles.map((role, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span className="text-gray-600">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Card Design */}
      <section className="py-6 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Internship Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <blockquote className="text-gray-700 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="bg-gray-50 p-6 flex items-center">
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
                    <p className="text-gray-600 text-sm">{testimonial.program}</p>
                    <p className="text-blue-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads & Calendar - Side by Side */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Downloads */}
            <div className="bg-gray-50 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaFileDownload className="text-blue-500 mr-3" />
                Resources & Downloads
              </h2>
              <div className="space-y-4">
                {downloads.map((file, index) => (
                  <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                    <div>
                      <h3 className="font-medium text-gray-800">{file.name}</h3>
                      <p className="text-gray-500 text-sm">{file.format} • {file.size}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaFileDownload className="text-xl" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-gray-50 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaCalendarAlt className="text-blue-500 mr-3" />
                Internship Timeline
              </h2>
              <div className="space-y-6">
                {calendarEvents.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{event.activity}</h3>
                      <p className="text-gray-600">{event.timeline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InternshipInfo;