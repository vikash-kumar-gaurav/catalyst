import Head from 'next/head';
import { NextPage } from 'next';

interface Scholarship {
  name: string;
  eligibleGroup: string;
  fundingAgency: string;
}

interface FacultyMember {
  name: string;
  designation: string;
  responsibility: string;
}

interface SupportData {
  commitment: string;
  supportServices: string[];
  scholarships: Scholarship[];
  grievanceRedressal: {
    description: string;
    reportLink: string;
  };
  capacityBuilding: string[];
  facultySupport: FacultyMember[];
}

const StudentSupportPage: NextPage = () => {

  const supportData: SupportData = {
    commitment: "Catalyst College is committed to fostering an inclusive campus environment that supports students from Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), and Minority communities. We aim to ensure equal academic opportunities, social justice, and holistic development for all.",
    supportServices: [
      "Remedial Coaching for academically weaker students",
      "Career Counseling for government exams, competitive exams, and private sector jobs",
      "Mentorship Programs with faculty and senior students",
      "Free or subsidized study material and access to e-resources"
    ],
    scholarships: [
      {
        name: "Post-Matric Scholarship for SC/ST/OBC",
        eligibleGroup: "SC/ST/OBC",
        fundingAgency: "Govt. of Bihar / Ministry of SJ&E"
      },
      {
        name: "Minority Merit-cum-Means Scholarship",
        eligibleGroup: "Religious minorities",
        fundingAgency: "Ministry of Minority Affairs"
      },
      {
        name: "Bihar MCM Scholarship",
        eligibleGroup: "All categories (incl. OBC/SC/ST)",
        fundingAgency: "Govt. of Bihar"
      },
      {
        name: "National Fellowship & Scholarship for Higher Education",
        eligibleGroup: "ST",
        fundingAgency: "Ministry of Tribal Affairs"
      }
    ],
    grievanceRedressal: {
      description: "We have a dedicated Equal Opportunity Cell and Grievance Cell to ensure no student is discriminated against based on caste, religion, or background. Complaints are handled confidentially and resolved promptly.",
      reportLink: "/grievance-form"
    },
    capacityBuilding: [
      "Awareness sessions on constitutional rights and social justice",
      "Special talks on role models from marginalized communities",
      "Annual events to celebrate diversity and inclusion"
    ],
    facultySupport: [
      {
        name: "Prof. A.K. Jha",
        designation: "Dean (Student Affairs)",
        responsibility: "Overall In-charge"
      },
      {
        name: "Ms. Shalini Kumari",
        designation: "SC/ST/OBC Coordinator",
        responsibility: "Scholarship & grievance help"
      },
      {
        name: "Mr. Imran Alam",
        designation: "Minority Cell Convener",
        responsibility: "Community support & outreach"
      },
      {
        name: "Student Volunteers",
        designation: "Peer Support Team",
        responsibility: "Mentoring & onboarding"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Student Support for SC/ST/OBC & Minority Communities | Catalyst College</title>
        <meta name="description" content="Catalyst College's support programs for SC, ST, OBC and Minority communities including scholarships, mentorship and grievance redressal" />
        <meta name="keywords" content="SC ST OBC support, minority scholarships, college reservation policy, educational equality" />
        <meta property="og:title" content="Student Support Programs | Catalyst College" />
        <meta property="og:description" content="Discover Catalyst College's inclusive support programs for SC, ST, OBC and Minority students" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://catalystcollege.edu.in/student-support" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-purple-700 text-white py-16">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="currentColor"></path>
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold mb-4">Student Support for SC/ST/OBC and Minority Communities</h1>
            <p className="text-xl max-w-3xl">Ensuring equal opportunities and inclusive growth for all students</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Our Commitment */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Commitment</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <p className="text-gray-700 text-lg">{supportData.commitment}</p>
            </div>
          </section>

          {/* Support Services */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="bg-green-500 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Special Support Services</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {supportData.supportServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Scholarships */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="bg-purple-500 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Government Scholarships & Financial Aid</h2>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">Scholarship Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">Eligible Group</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">Funding Agency</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {supportData.scholarships.map((scholarship, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{scholarship.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scholarship.eligibleGroup}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scholarship.fundingAgency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  ✅ Assistance with form filling, document verification, and portal submission is provided via the college help desk.
                </p>
              </div>
            </div>
          </section>

          {/* Reservation & Admission Guidance */}
          <section className="mb-16 bg-blue-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-500 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Reservation & Admission Guidance</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Admission Policy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Admission seats are reserved as per Government of Bihar/UGC norms</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Category-based counseling is available during the admission process</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Entrance Preparation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Special assistance is provided for entrance test preparation (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Previous year question papers and study material available at library</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Grievance Redressal */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="bg-red-500 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Grievance Redressal for Discrimination</h2>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-red-500">
              <div className="p-6">
                <p className="text-gray-700 mb-6">{supportData.grievanceRedressal.description}</p>
                <a href={supportData.grievanceRedressal.reportLink} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Report Discrimination
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Capacity Building */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-500 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Capacity Building and Awareness Programs</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {supportData.capacityBuilding.map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-indigo-500">
                  <div className="flex items-center mb-3">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Program {index + 1}</h3>
                  </div>
                  <p className="text-gray-600">{program}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Faculty Support */}
          <section>
            <div className="flex items-center mb-6">
              <div className="bg-teal-500 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Dedicated Faculty Support Cell</h2>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-teal-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Designation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Responsibility</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {supportData.facultySupport.map((member, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.designation}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.responsibility}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">Contact our support team for any queries regarding scholarships, admission, or support services.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-blue-50">
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600">
                Call Helpdesk
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default StudentSupportPage;