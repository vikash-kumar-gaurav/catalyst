import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import { FaGraduationCap, FaFileAlt, FaCalendarAlt, FaPhone, FaEnvelope, FaUniversity, FaQuestionCircle } from 'react-icons/fa';
import { GiArchiveResearch, GiAchievement } from 'react-icons/gi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdOutlinePayment, MdOutlineSchool } from 'react-icons/md';

const AdmissionPage = async() => {
  let AdmissionData = {
  "programs": [
    {
      "name": "BCA (Computer Applications)",
      "duration": "3 Years",
      "intake": 120,
      "description": "Comprehensive program covering programming, databases, web development, and software engineering."
    },
    {
      "name": "BBA (Management Studies)",
      "duration": "3 Years",
      "intake": 120,
      "description": "Develops business acumen with specializations in Marketing, Finance, and Human Resources."
    },
    {
      "name": "B.Sc. IT (Information Technology)",
      "duration": "3 Years",
      "intake": 60,
      "description": "Focuses on IT infrastructure, networking, cybersecurity, and emerging technologies."
    }
  ],
  "feeStructure": [
    {
      "program": "BCA",
      "tuitionFee": "₹35,000 – ₹50,000",
      "totalFee": "₹1.05L – ₹1.5L",
      "hostelFee": "₹40,000/year"
    },
    {
      "program": "BBA",
      "tuitionFee": "₹30,000 – ₹45,000",
      "totalFee": "₹90K – ₹1.35L",
      "hostelFee": "₹40,000/year"
    },
    {
      "program": "B.Sc. IT",
      "tuitionFee": "₹35,000 – ₹55,000",
      "totalFee": "₹1.05L – ₹1.65L",
      "hostelFee": "₹40,000/year"
    }
  ],
  "importantDates": [
    {
      "event": "Application Opens",
      "date": "April 1, 2025"
    },
    {
      "event": "Last Date to Apply",
      "date": "June 15, 2025"
    },
    {
      "event": "Counseling Begins",
      "date": "June 20, 2025"
    },
    {
      "event": "Admission Deadline",
      "date": "July 15, 2025"
    },
    {
      "event": "Session Starts",
      "date": "August 1, 2025"
    }
  ],
  "faqs": [
    {
      "question": "Can Commerce students apply for BCA?",
      "answer": "Yes, Commerce students with Mathematics in 10+2 can apply for BCA."
    },
    {
      "question": "Is there an entrance exam for admission?",
      "answer": "Admission is merit-based for all programs. No entrance exam is required."
    },
    {
      "question": "What are the hostel facilities like?",
      "answer": "We don't provide hostel facility but you can find one easily  "
    }
  ],
  "HeroSection":{
    "ImageUrl":"https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752927606/WhatsApp_Image_2025-07-19_at_17.46.49_fcb8ec33_mdu3no.jpg",
    "title":"Admissions 2025-28",
    "Description":"Begin your journey towards academic excellence with our industry-aligned undergraduate programs",
  }
}

const { data, error} = await fetchPageData("admission")
 AdmissionData = data as any ?? AdmissionData

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title={AdmissionData.HeroSection.title}
        description={AdmissionData.HeroSection.Description}
        imageUrl={AdmissionData.HeroSection.ImageUrl}
        overlayOpacity={0.3}
        height="lg"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaUniversity className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">About Our Programs</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our undergraduate programs in Computer Applications, Business Administration, and Information Technology 
              are designed to provide students with a strong theoretical foundation complemented by practical, 
              industry-relevant skills. With NAAC A+ accreditation and modern infrastructure, we prepare students 
              for successful careers in their chosen fields.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 inline-block">
              <p className="text-blue-800 font-medium">
                Applications for 2025-26 batch now open! Limited seats available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Programs Offered</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our industry-aligned undergraduate programs with excellent placement records
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {AdmissionData.programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaGraduationCap className="text-indigo-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800">{program.name}</h3>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {program.duration}</span>
                  <span>Intake: {program.intake}</span>
                </div>
                <p className="text-gray-600 mb-4 text-center">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <img 
                src=""
                alt="Students in classroom"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MdOutlineSchool className="text-green-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">For BCA</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Passed 10+2 (any stream) with Mathematics as a subject</li>
                    <li>Minimum 45% aggregate marks (40% for reserved categories)</li>
                    <li>Basic computer knowledge preferred</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">For BBA</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Passed 10+2 (any stream) from recognized board</li>
                    <li>Minimum 45% aggregate marks (40% for reserved categories)</li>
                    <li>English proficiency required</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">For B.Sc. IT</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Passed 10+2 with Science stream (PCM/PCB)</li>
                    <li>Commerce/Arts students with IT subject may apply</li>
                    <li>Minimum 50% aggregate marks (45% for reserved categories)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <IoDocumentTextOutline className="text-indigo-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Admission Process</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple and transparent admission procedure for all programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Line */}
              <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>
              
              {/* Process Steps */}
              <div className="space-y-12 lg:space-y-0">
                {[
                  {
                    step: "1",
                    title: "Application",
                    description: "Fill the online/offline application form with required details",
                    icon: <FaFileAlt className="text-2xl" />
                  },
                  {
                    step: "2",
                    title: "Document Verification",
                    description: "Submit scanned copies of required documents for verification",
                    icon: <GiArchiveResearch className="text-2xl" />
                  },
                  {
                    step: "3",
                    title: "Merit List",
                    description: "Check published merit list based on 12th marks",
                    icon: <GiAchievement className="text-2xl" />
                  },
                  {
                    step: "4",
                    title: "Counseling",
                    description: "Attend counseling session for program selection",
                    icon: <FaQuestionCircle className="text-2xl" />
                  },
                  {
                    step: "5",
                    title: "Fee Payment",
                    description: "Pay admission fees to confirm your seat",
                    icon: <MdOutlinePayment className="text-2xl" />
                  }
                ].map((step, index) => (
                  <div key={index} className="relative lg:flex lg:items-center lg:justify-between lg:odd:flex-row-reverse">
                    {/* Content */}
                    <div className={`lg:w-5/12 p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}>
                      <div className="flex items-center mb-3">
                        <div className="bg-indigo-100 p-2 rounded-full mr-3">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    {/* Step Number */}
                    <div className="hidden lg:flex absolute left-1/2 bg-indigo-600 text-white w-10 h-10 rounded-full items-center justify-center transform -translate-x-1/2">
                      {step.step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaFileAlt className="text-red-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Documents Required</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Mandatory Documents</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>10th & 12th Mark Sheets (Original + 2 copies)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Transfer Certificate (TC) from last institution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Migration Certificate (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Aadhar Card (Original + 2 copies)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Additional Documents (If Applicable)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Caste Certificate (SC/ST/OBC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Income Certificate for fee concession</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Passport-size photographs (5 copies)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Sports/Cultural Achievement Certificates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaCalendarAlt className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Important Dates</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left">Event</th>
                    <th className="py-3 px-4 text-left">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {AdmissionData.importantDates.map((date, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-gray-800">{date.event}</td>
                      <td className="py-4 px-4">{date.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-4">
              {AdmissionData.faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{faq.question}</span>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join our vibrant academic community and take the first step towards a successful career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/apply" 
              className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Apply Now
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;