import Head from 'next/head';
import HeroSection from '@/components/newHeroImageForAllPage';

export default function IQACMembersPage() {
 
  const iqacMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      designation: "Principal",
      role: "Chairperson",
      department: "Office of the Principal",
      photo: "/faculty/principal.jpg"
    },
    {
      id: 2,
      name: "Prof. Priya Sharma",
      designation: "Professor & HoD",
      role: "Coordinator",
      department: "Department of BBA",
      photo: "/faculty/bba-hod.jpg"
    },
    {
      id: 3,
      name: "Dr. Amit Singh",
      designation: "Associate Professor",
      role: "Faculty Member",
      department: "Department of BCA",
      photo: "/faculty/bca-faculty.jpg"
    },
    {
      id: 4,
      name: "Mr. Arun Patel",
      designation: "Registrar",
      role: "Administrative Officer",
      department: "Administration",
      photo: "/staff/registrar.jpg"
    },
    {
      id: 5,
      name: "Ms. Neha Gupta",
      designation: "Student",
      role: "Student Representative",
      department: "BSc IT (Final Year)",
      photo: "/students/representative.jpg"
    },
    {
      id: 6,
      name: "Mr. Vikram Joshi",
      designation: "CEO",
      role: "Industry Expert",
      department: "Tech Solutions Pvt. Ltd.",
      photo: "/industry/expert.jpg"
    },
    {
      id: 7,
      name: "Ms. Anjali Mehta",
      designation: "Alumni",
      role: "Alumni Representative",
      department: "Batch of 2015",
      photo: "/alumni/representative.jpg"
    }
  ];

  // IQAC Functions Data
  const iqacFunctions = [
    {
      category: "Academic Quality",
      items: [
        "Develop quality benchmarks for academic and administrative activities",
        "Promote outcome-based education and innovative pedagogy",
        "Encourage faculty development and training programs",
        "Monitor curriculum implementation and effectiveness"
      ]
    },
    {
      category: "Monitoring & Reporting",
      items: [
        "Monitor teaching-learning processes and outcomes",
        "Collect and analyze feedback from stakeholders",
        "Prepare and submit Annual Quality Assurance Reports (AQAR)",
        "Maintain documentation for accreditation processes"
      ]
    },
    {
      category: "Institutional Development",
      items: [
        "Identify and promote best practices across departments",
        "Plan quality-related initiatives (seminars, audits, accreditations)",
        "Coordinate efforts for NAAC, NIRF, AISHE compliance",
        "Facilitate research and publication activities"
      ]
    },
    {
      category: "Support and Governance",
      items: [
        "Maintain comprehensive documentation of institutional activities",
        "Foster a quality culture across all departments",
        "Serve as liaison between college and regulatory bodies",
        "Implement quality assurance policies and procedures"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>IQAC Members & Functions | CATALYST College</title>
        <meta name="description" content="Composition of the Internal Quality Assurance Cell and its responsibilities at CATALYST College" />
        <meta name="keywords" content="IQAC members, quality assurance committee, NAAC, AQAR, institutional quality" />
        <meta property="og:title" content="IQAC Members & Functions | CATALYST College" />
        <meta property="og:description" content="Our quality assurance team and their roles in maintaining academic excellence" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/iqac/members" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/iqac-team.jpg" />
      </Head>

      <HeroSection
        title="IQAC Members & Functions"
        description="Meet our quality assurance team and their roles in institutional excellence"
        imageUrl="https://catalystcollege.edu.in/wp-content/uploads/2023/07/iqac-team.jpg"
        overlayOpacity={0.3}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About IQAC Composition</h2>
            <p className="text-lg text-gray-700">
              The Internal Quality Assurance Cell (IQAC) of CATALYST College was constituted as per the guidelines of the National Assessment and Accreditation Council (NAAC). The IQAC acts as a catalyst to improve the academic and administrative performance of the institution. This page outlines the members of the IQAC and their core functions in driving the quality agenda of the college.
            </p>
          </div>
        </section>

        {/* IQAC Members Section */}
        <section className="mb-16">
          <div className="bg-blue-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">👥 IQAC Committee Composition</h2>
          </div>
          <div className="border border-blue-50 rounded-b-lg bg-white overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department/Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IQAC Position</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {iqacMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src={member.photo} alt={member.name} />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{member.designation}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">{member.department}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {member.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden grid gap-6 p-6">
              {iqacMembers.map((member) => (
                <div key={member.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <img className="h-16 w-16 rounded-full object-cover" src={member.photo} alt={member.name} />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.designation}</p>
                      <p className="text-sm text-gray-600">{member.department}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IQAC Functions Section */}
        <section className="mb-4">
          <div className="bg-green-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-green-800">🧩 Functions & Responsibilities</h2>
          </div>
          <div className="border border-green-50 rounded-b-lg p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-8">
              {iqacFunctions.map((funcGroup, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-700 mb-4">{funcGroup.category}</h3>
                  <ul className="space-y-3">
                    {funcGroup.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meeting Information */}
        <section className="mb-4">
          <div className="bg-purple-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-purple-800">🗓️ Meeting Frequency & Documentation</h2>
          </div>
          <div className="border border-purple-50 rounded-b-lg pt-6 bg-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Meeting Schedule</h3>
                <p className="text-gray-700 mb-4">
                  The IQAC meets at least twice a semester to review progress and plan upcoming quality initiatives. Additional meetings may be convened as needed to address specific quality assurance matters.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Regular meetings: First week of March and September</li>
                  <li>Special meetings: As required for accreditation processes</li>
                  <li>Annual review meeting: First week of January</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Documentation</h3>
                <p className="text-gray-700 mb-4">
                  All IQAC meetings are documented with minutes and action items that are tracked for completion. These records are maintained for internal review and NAAC audits.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                  <a 
                    href="/iqac/meeting-minutes" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View IQAC Meeting Minutes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}