import React from "react";
import { GiReceiveMoney, GiGraduateCap, GiNotebook } from "react-icons/gi";
import { FaUserTie, FaRupeeSign, FaUniversity, FaFileAlt, FaHandshake } from "react-icons/fa";
import { MdSchool, MdAccountBalance, Gavel } from "react-icons/md";
import { fetchPageData } from '@/lib/useFetchData';



const StudentCreditCardScheme = async() => {
 let pageData = {
  "eligibility": [
    {
      "criteria": "Age",
      "requirement": "Must be within 25 years at the time of application"
    },
    {
      "criteria": "Residency",
      "requirement": "Must be a permanent resident of Bihar"
    },
    {
      "criteria": "Education",
      "requirement": "Must have passed Class 12 from a recognized board"
    },
    {
      "criteria": "Admission",
      "requirement": "Must have secured admission in a recognized institution"
    }
  ],
  "documents": [
    {
      "name": "10th and 12th Mark Sheets",
      "notes": "Self-attested copies"
    },
    {
      "name": "Aadhar Card",
      "notes": "Student and co-applicant (guardian)"
    },
    {
      "name": "PAN Card",
      "notes": "Student or guardian"
    },
    {
      "name": "Address Proof",
      "notes": "Voter ID, ration card, etc."
    },
    {
      "name": "Admission Letter",
      "notes": "From the institution where admission is confirmed"
    }
  ],
  "processSteps": [
    {
      "step": 1,
      "action": "Register on the official portal"
    },
    {
      "step": 2,
      "action": "Fill the online application form"
    },
    {
      "step": 3,
      "action": "Upload scanned documents"
    },
    {
      "step": 4,
      "action": "Submit and print acknowledgment"
    },
    {
      "step": 5,
      "action": "Attend document verification at DRCC"
    }
  ],
  "courses": [
    {
      "name": "BCA",
      "duration": "3 Years",
      "coverage": "Full tuition + other expenses"
    },
    {
      "name": "BBA",
      "duration": "3 Years",
      "coverage": "Full tuition + other expenses"
    },
    {
      "name": "B.Sc. IT",
      "duration": "3 Years",
      "coverage": "Full tuition + other expenses"
    }
  ]
}
const { data, error } = await fetchPageData("credit-card-scheme")

  const { eligibility, documents, processSteps, courses} = pageData

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-green-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bihar Student Credit Card Scheme
            </h1>
            <p className="text-xl mb-8">
              Empowering Bihar's youth with collateral-free education loans up to ₹4 Lakhs
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-800 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg">
                Apply Now
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-800 font-bold px-6 py-3 rounded-lg transition">
                Download Brochure
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Happy students"
              className="rounded-xl shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">₹4 Lakhs</div>
              <div className="text-sm">Maximum Loan Amount</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About the Scheme
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The Bihar Student Credit Card Scheme is a visionary initiative launched by the Government of Bihar under the flagship program "Saat Nishchay Yojana". It aims to make higher education accessible to all students, especially those from financially weaker sections.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
              <div className="flex items-start">
                <GiReceiveMoney className="text-blue-600 text-3xl mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Collateral-free loans up to ₹4 Lakhs</li>
                    <li>Interest-free until course completion</li>
                    <li>15-year repayment period</li>
                    <li>Covers tuition, hostel, books and more</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Students graduating"
              className="rounded-lg shadow-md h-48 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Student studying"
              className="rounded-lg shadow-md h-48 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Students in classroom"
              className="rounded-lg shadow-md h-48 w-full object-cover"
            />
            <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
              <GiGraduateCap className="text-4xl mb-2" />
              <div className="text-center">
                <div className="text-2xl font-bold">15,000+</div>
                <div className="text-sm">Students Benefited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visionary Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visionary Behind the Scheme
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming education access in Bihar through visionary leadership
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/CM_Nitish_Kumar.jpg/800px-CM_Nitish_Kumar.jpg" 
                  alt="Hon'ble CM Shri Nitish Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Hon'ble Chief Minister Shri Nitish Kumar
                </h3>
                <p className="text-blue-600 font-medium mb-4">Architect of Saat Nishchay Yojana</p>
                <p className="text-gray-600 mb-6">
                  The BSCCS was launched on October 2, 2016, under the leadership of Chief Minister Shri Nitish Kumar, as a part of his broader vision to promote "Quality Education for All" under the Saat Nishchay (Seven Resolves) Mission.
                </p>
                <div className="flex items-center">
                  <FaUniversity className="text-blue-500 mr-2" />
                  <span className="text-gray-700">Implemented through Bihar State Education Finance Corporation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Eligibility Criteria
            </h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Criteria</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Requirement</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {eligibility.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.criteria}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Covered Expenses
            </h2>
            <div className="space-y-4">
              {[
                { icon: <MdSchool className="text-blue-500 text-2xl" />, text: "Tuition fees" },
                { icon: <FaUniversity className="text-blue-500 text-2xl" />, text: "Hostel charges" },
                { icon: <GiNotebook className="text-blue-500 text-2xl" />, text: "Cost of books, uniforms, laptops" },
                { icon: <FaFileAlt className="text-blue-500 text-2xl" />, text: "Examination fees" },
                { icon: <FaRupeeSign className="text-blue-500 text-2xl" />, text: "Miscellaneous academic expenses" },
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-blue-50 p-4 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Required Documents
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaFileAlt className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{doc.name}</h3>
                </div>
                <p className="text-gray-600">{doc.notes}</p>
              </div>
            ))}
            <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Need Help With Documents?</h3>
              <p className="mb-4">Our admission counselors can guide you through the documentation process.</p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-4 py-2 rounded-lg">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
<section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50 rounded-xl">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Your 5-Step Journey to Education Funding
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      We've made the application process simple and transparent - just follow these steps
    </p>
  </div>

  {/* Process Timeline */}
  <div className="relative">
    {/* Vertical line for desktop */}
    <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300 transform -translate-x-1/2"></div>
    
    {/* Process steps */}
    <div className="space-y-12 md:space-y-16">
      {/* Step 1 */}
      <div className="relative md:flex items-center justify-between gap-8">
        <div className="md:w-5/12 md:pr-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition">
            <div className="flex items-center mb-3">
              <div className="bg-blue-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg mr-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900">Online Registration</h3>
            </div>
            <p className="text-gray-600 pl-14">
              Create your account on our portal with basic details. Takes just 5 minutes!
            </p>
          </div>
        </div>
        
        {/* Decorative icon */}
        <div className="hidden md:flex absolute left-1/2 w-14 h-14 bg-blue-100 rounded-full items-center justify-center transform -translate-x-1/2 border-4 border-white shadow-md">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        
        <div className="md:w-5/12"></div>
      </div>

      {/* Step 2 */}
      <div className="relative md:flex items-center justify-between gap-8">
        <div className="md:w-5/12"></div>
        
        <div className="hidden md:flex absolute left-1/2 w-14 h-14 bg-blue-100 rounded-full items-center justify-center transform -translate-x-1/2 border-4 border-white shadow-md">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        <div className="md:w-5/12 md:pl-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition">
            <div className="flex items-center mb-3">
              <div className="bg-green-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg mr-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900">Complete Application</h3>
            </div>
            <p className="text-gray-600 pl-14">
              Fill in your course details and loan requirements. Save and return anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="relative md:flex items-center justify-between gap-8">
        <div className="md:w-5/12 md:pr-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition">
            <div className="flex items-center mb-3">
              <div className="bg-yellow-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg mr-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900">Upload Documents</h3>
            </div>
            <p className="text-gray-600 pl-14">
              Submit digital copies of your marksheets, ID proof, and admission letter.
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex absolute left-1/2 w-14 h-14 bg-blue-100 rounded-full items-center justify-center transform -translate-x-1/2 border-4 border-white shadow-md">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        
        <div className="md:w-5/12"></div>
      </div>

      {/* Step 4 */}
      <div className="relative md:flex items-center justify-between gap-8">
        <div className="md:w-5/12"></div>
        
        <div className="hidden md:flex absolute left-1/2 w-14 h-14 bg-blue-100 rounded-full items-center justify-center transform -translate-x-1/2 border-4 border-white shadow-md">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        
        <div className="md:w-5/12 md:pl-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition">
            <div className="flex items-center mb-3">
              <div className="bg-purple-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg mr-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900">Verification</h3>
            </div>
            <p className="text-gray-600 pl-14">
              Visit our center with original documents for quick physical verification.
            </p>
          </div>
        </div>
      </div>

      {/* Step 5 */}
      <div className="relative md:flex items-center justify-between gap-8">
        <div className="md:w-5/12 md:pr-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition">
            <div className="flex items-center mb-3">
              <div className="bg-red-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg mr-4">
                5
              </div>
              <h3 className="text-xl font-bold text-gray-900">Loan Disbursement</h3>
            </div>
            <p className="text-gray-600 pl-14">
              Receive approval notification and funds transferred directly to your institution.
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex absolute left-1/2 w-14 h-14 bg-blue-100 rounded-full items-center justify-center transform -translate-x-1/2 border-4 border-white shadow-md">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <div className="md:w-5/12"></div>
      </div>
    </div>
  </div>

  {/* CTA Section */}
  <div className="text-center mt-16">
    <div className="flex flex-wrap justify-center gap-6">
      <div className="flex items-center text-blue-600">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
        </svg>
        <span>Average processing time: 25 - 30 working days</span>
      </div>
      <div className="flex items-center text-green-600">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>No application fees | No hidden charges</span>
      </div>
    </div>
  </div>
</section>
      {/* Success Stories */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Kumari",
                course: "BCA",
                college: "Patna Women's College",
                quote: "This scheme helped me pursue my dream of becoming a software engineer",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Rahul Kumar",
                course: "B.Tech",
                college: "NIT Patna",
                quote: "Without this loan, I couldn't have afforded my engineering education",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Anjali Singh",
                course: "MBA",
                college: "LNMU Darbhanga",
                quote: "The repayment terms are so student-friendly, I could focus on studies",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((student, index) => (
              <div key={index} className="bg-white text-gray-900 rounded-xl shadow-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={student.image} 
                      alt={student.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{student.name}</h3>
                      <p className="text-blue-600">{student.course} Graduate</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">"{student.quote}"</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaUniversity className="mr-2" />
                    {student.college}
                  </div>
                </div>
                <div className="bg-blue-50 px-6 py-3 text-blue-800 font-medium">
                  Loan Received: ₹3.5 Lakhs
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Courses */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Supported Courses in Our Institution
        </h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Loan Coverage</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{course.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{course.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium">{course.coverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8">Apply for the Bihar Student Credit Card today and take the first step toward your dream career</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg">
              Apply Online Now
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg">
              Visit Our Campus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentCreditCardScheme;