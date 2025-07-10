
import HeroSection from '@/components/newHeroImageForAllPage';
import { FaUniversity, FaFilePdf, FaAward, FaShieldAlt, FaRegCheckCircle, FaHandshake } from 'react-icons/fa';
import { GiArchiveResearch, GiDiploma } from 'react-icons/gi';
import { MdGavel, MdOutlineApproval } from 'react-icons/md';

const AffiliationPage = () => {
  const statutoryBodies = [
    {
      name: "University Grants Commission (UGC)",
      status: "Recognized under Section 2(f) and 12(B)",
      logo: "/ugc-logo.svg" // Replace with actual path
    },
    {
      name: "All India Council for Technical Education (AICTE)",
      status: "Approved for technical programs",
      logo: "/aicte-logo.svg"
    },
    {
      name: "State Government",
      status: "Permission to run UG/PG courses",
      logo: "/state-govt-logo.svg"
    },
    {
      name: "National Assessment and Accreditation Council (NAAC)",
      status: "Accredited with 'A' Grade (3.51/4.00)",
      logo: "/naac-logo.svg"
    }
  ];

  const approvedCourses = [
    {
      program: "BCA",
      affiliatedTo: "XYZ University",
      approvedBy: ["AICTE", "State Govt.", "UGC"]
    },
    {
      program: "BBA",
      affiliatedTo: "XYZ University",
      approvedBy: ["State Govt.", "UGC"]
    },
    {
      program: "B.Sc. IT",
      affiliatedTo: "XYZ University",
      approvedBy: ["UGC"]
    }
  ];

  const documents = [
    {
      name: "AICTE Approval Letter",
      type: "PDF",
      size: "2.4 MB",
      icon: <FaFilePdf className="text-red-500 text-2xl" />
    },
    {
      name: "UGC Recognition Letter",
      type: "PDF",
      size: "1.8 MB",
      icon: <GiArchiveResearch className="text-blue-500 text-2xl" />
    },
    {
      name: "University Affiliation Letter",
      type: "PDF",
      size: "3.2 MB",
      icon: <FaUniversity className="text-indigo-500 text-2xl" />
    },
    {
      name: "NAAC Accreditation Certificate",
      type: "View",
      size: "High Res",
      icon: <FaAward className="text-yellow-500 text-2xl" />
    }
  ];

  return (
    <div className="bg-gray-50 w-full overflow-hidden">
      {/* SVG Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-5">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 40 L 40 40 40 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <HeroSection
        title="Affiliations & Approvals"
        description="Our commitment to quality education recognized by statutory bodies and accreditation councils"
        imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        overlayOpacity={0.7}
        height="lg"
      />

      {/* Introduction Section */}
      <section className="relative py-20 bg-white">
        {/* Floating SVG decoration */}
        <svg className="absolute top-0 right-0 w-32 h-32 text-blue-50 transform translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45,-78.3C58.1,-70.7,68.4,-58.1,76.5,-44.2C84.6,-30.3,90.5,-15.2,89.6,-0.6C88.7,14.1,81,28.1,70.3,40.1C59.6,52.1,45.9,62,31.3,71.1C16.7,80.3,1.2,88.6,-13.4,85.8C-28,83,-41.7,69,-55.5,56.6C-69.3,44.2,-83.1,33.3,-88.1,19.2C-93.1,5.1,-89.2,-12.2,-80.7,-27.4C-72.2,-42.6,-59.1,-55.7,-44.8,-63C-30.5,-70.3,-15.3,-71.8,0.6,-72.6C16.4,-73.5,32.9,-73.7,45,-78.3Z" transform="translate(100 100)" />
        </svg>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Quality Assurance</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our institution operates under the guidance and regulations of statutory educational bodies, ensuring academic credibility and national compliance. All programs are properly affiliated, approved, and recognized by relevant authorities, providing students with valid degrees and industry-recognized qualifications.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 inline-block">
              <p className="text-blue-800 font-medium">
                All approvals are valid and up-to-date, with regular renewals as per regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* University Affiliation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="University Campus"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                  <GiDiploma className="text-yellow-500 text-4xl" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaUniversity className="text-purple-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">University Affiliation</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                All our undergraduate and postgraduate programs are affiliated with <strong>XYZ University</strong>, a UGC-recognized state university located in City, State. The university governs our academic curriculum, examination system, and degree conferral processes.
              </p>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Affiliation Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <FaRegCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Affiliation Code: XYZU/COL/2020/12345</span>
                  </li>
                  <li className="flex items-start">
                    <FaRegCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Valid Until: June 2030</span>
                  </li>
                  <li className="flex items-start">
                    <FaRegCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>All programs follow university-prescribed syllabus</span>
                  </li>
                  <li className="flex items-start">
                    <FaRegCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Degrees awarded directly by XYZ University</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Approvals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <MdOutlineApproval className="text-green-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Statutory Approvals</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognitions and approvals from national/state-level regulatory bodies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statutoryBodies.map((body, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-16 mb-4 flex items-center justify-center">
                  {/* Replace with actual logo component or img tag */}
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                    {/* <body.icon className="text-3xl text-blue-600" /> */}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">{body.name}</h3>
                <p className="text-gray-600 text-center text-sm">{body.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approval Documents Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaFilePdf className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Approval Documents</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="mr-4">
                      {doc.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-800">{doc.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{doc.type} • {doc.size}</p>
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                        Download Document
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Approval Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <MdGavel className="text-indigo-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Program-wise Approvals</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Affiliated To</th>
                    <th className="py-3 px-4 text-left">Approved By</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {approvedCourses.map((course, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-gray-800">{course.program}</td>
                      <td className="py-4 px-4">{course.affiliatedTo}</td>
                      <td className="py-4 px-4">
                        <div className="flex flex-wrap gap-2">
                          {course.approvedBy.map((body, i) => (
                            <span key={i} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                              {body}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <div className="relative">
                {/* SVG decoration */}
                <svg className="absolute -top-8 -left-8 w-32 h-32 text-blue-100 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M45,-78.3C58.1,-70.7,68.4,-58.1,76.5,-44.2C84.6,-30.3,90.5,-15.2,89.6,-0.6C88.7,14.1,81,28.1,70.3,40.1C59.6,52.1,45.9,62,31.3,71.1C16.7,80.3,1.2,88.6,-13.4,85.8C-28,83,-41.7,69,-55.5,56.6C-69.3,44.2,-83.1,33.3,-88.1,19.2C-93.1,5.1,-89.2,-12.2,-80.7,-27.4C-72.2,-42.6,-59.1,-55.7,-44.8,-63C-30.5,-70.3,-15.3,-71.8,0.6,-72.6C16.4,-73.5,32.9,-73.7,45,-78.3Z" transform="translate(100 100)" />
                </svg>
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Quality Inspection"
                  className="rounded-lg shadow-xl relative"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-yellow-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Compliance & Quality Assurance</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our institution undergoes regular audits, inspections, and quality assurance reviews by affiliating and approving bodies to maintain compliance with all academic standards and regulations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaRegCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Infrastructure Standards</h3>
                    <p className="text-gray-600 text-sm">All facilities meet and exceed norms prescribed by regulatory bodies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaRegCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Faculty Qualifications</h3>
                    <p className="text-gray-600 text-sm">100% of teaching staff meet UGC/AICTE qualification requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaRegCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Curriculum Compliance</h3>
                    <p className="text-gray-600 text-sm">Regular syllabus updates as per university and industry standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaAward className="text-red-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Milestones & Achievements</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our journey of excellence through accreditation and recognition
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Award ceremony",
              "NAAC peer team visit",
              "University inspection",
              "Certificate handover",
              "AICTE approval meeting",
              "Quality award",
              "Campus infrastructure",
              "Signing ceremony"
            ].map((item, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group">
                <img 
                  src={`https://source.unsplash.com/random/600x600/?university,${item.replace(/\s+/g, '-')}`}
                  alt={item}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliationPage;