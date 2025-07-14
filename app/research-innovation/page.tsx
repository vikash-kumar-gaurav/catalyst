
import Head from 'next/head';
import { NextPage } from 'next';

// Temporary data - will be replaced with API calls
const researchData = {
  overview: {
    title: "Research & Innovation at CImage College",
    vision: "To become a center of excellence in research and innovation that addresses societal challenges and drives technological advancement.",
    mission: "To foster a culture of curiosity, creativity, and collaboration among students and faculty to produce impactful research and innovations.",
    stats: {
      facultyProjects: 42,
      studentProjects: 128,
      patentsFiled: 18,
      patentsGranted: 7,
      publications: 156,
      collaborations: 23
    },
    policyLink: "/documents/research-policy.pdf"
  },
  researchCell: {
    title: "Research Cell",
    description: "The Research Cell at CImage College facilitates and promotes research activities across all departments.",
    objectives: [
      "Encourage interdisciplinary research",
      "Provide seed funding for promising projects",
      "Organize research methodology workshops",
      "Facilitate publication in reputed journals",
      "Support patent filing process"
    ],
    committee: [
      { name: "Dr. Rajesh Kumar", role: "Chairperson", department: "Computer Science" },
      { name: "Dr. Priya Sharma", role: "Coordinator", department: "Electronics" },
      { name: "Dr. Amit Patel", role: "Member", department: "Mechanical" },
      { name: "Dr. Sneha Gupta", role: "Member", department: "Biotechnology" }
    ],
    recentActivities: [
      "Workshop on Research Methodology - May 2024",
      "National Conference on AI Applications - March 2024",
      "Faculty Research Grant Announcement - January 2024"
    ]
  },
  publications: [
    { 
      title: "Machine Learning Approaches for Crop Disease Detection", 
      authors: "Kumar, R., Sharma, P.", 
      journal: "International Journal of AI Research", 
      year: 2023,
      department: "Computer Science",
      indexed: "Scopus"
    },
    { 
      title: "IoT-based Smart Irrigation System", 
      authors: "Patel, A., Gupta, S.", 
      journal: "IEEE Sensors Journal", 
      year: 2023,
      department: "Electronics",
      indexed: "SCI"
    }
  ],
  patents: [
    { 
      title: "Automated Attendance System Using Facial Recognition", 
      inventors: "Kumar, R., Sharma, P.", 
      status: "Granted", 
      year: 2022,
      applicationNo: "202241056789"
    },
    { 
      title: "Low-Cost Water Purification Device", 
      inventors: "Gupta, S., Patel, A.", 
      status: "Filed", 
      year: 2023,
      applicationNo: "202341078912"
    }
  ],
  innovationHub: {
    title: "Catalyst Innovation Hub",
    description: "Our innovation hub provides resources and mentorship to transform ideas into prototypes and startups.",
    facilities: [
      "3D Printing Lab",
      "Electronics Workshop",
      "AI/ML Development Kits",
      "Co-working Spaces",
      "Mentorship Network"
    ],
    startups: [
      { name: "AgriTech Solutions", founders: "Rahul, Priya", year: 2022, description: "AI-powered crop monitoring system" },
      { name: "MediCare Devices", founders: "Amit, Sneha", year: 2023, description: "Low-cost medical diagnostic tools" }
    ]
  },
  events: [
    { 
      title: "Annual Research Symposium", 
      date: "2024-08-15", 
      description: "Showcasing student and faculty research projects",
      type: "Conference"
    },
    { 
      title: "Hackathon 2024", 
      date: "2024-09-20", 
      description: "48-hour coding competition to solve real-world problems",
      type: "Competition"
    }
  ]
};

const ResearchInnovationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Research & Innovation | CImage College</title>
        <meta name="description" content="Explore cutting-edge research, innovations, and publications from CImage College. Discover our patents, funded projects, and innovation ecosystem." />
        <meta name="keywords" content="research, innovation, patents, publications, CImage College, Catalyst Innovation Hub, student projects" />
        <meta property="og:title" content="Research & Innovation at CImage College" />
        <meta property="og:description" content="Discover our research outputs, innovation hub, and academic contributions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.cimagecollege.edu/research-innovation" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{researchData.overview.title}</h1>
                <p className="text-xl mb-8">{researchData.overview.vision}</p>
                <p className="text-lg mb-8">{researchData.overview.mission}</p>
                <a href={researchData.overview.policyLink} className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-block">
                  Download Research Policy
                </a>
              </div>
              <div className="md:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="w-full h-auto">
                  <circle cx="250" cy="250" r="200" fill="none" stroke="white" strokeWidth="2" opacity="0.2" />
                  <circle cx="250" cy="250" r="150" fill="none" stroke="white" strokeWidth="2" opacity="0.2" />
                  <path d="M250,50 L250,450 M50,250 L450,250" stroke="white" strokeWidth="2" opacity="0.2" />
                  <g transform="translate(250,250)">
                    <g className="animate-float" style={{ animation: 'float 6s ease-in-out infinite' }}>
                      <path d="M-80,-40 L80,-40 L80,40 L-80,40 Z" fill="none" stroke="#3B82F6" strokeWidth="3" />
                      <path d="M-60,-20 L60,-20 L60,20 L-60,20 Z" fill="none" stroke="#3B82F6" strokeWidth="3" />
                      <path d="M-40,0 L40,0" stroke="#3B82F6" strokeWidth="3" />
                    </g>
                    <g className="animate-float-delay" style={{ animation: 'float 6s ease-in-out infinite 2s', transform: 'translate(60,60)' }}>
                      <circle r="30" fill="none" stroke="#10B981" strokeWidth="3" />
                      <circle r="20" fill="none" stroke="#10B981" strokeWidth="3" />
                      <circle r="10" fill="none" stroke="#10B981" strokeWidth="3" />
                    </g>
                    <g className="animate-float-delay2" style={{ animation: 'float 6s ease-in-out infinite 4s', transform: 'translate(-60,60)' }}>
                      <path d="M-30,-30 L30,30 M30,-30 L-30,30" stroke="#EF4444" strokeWidth="3" />
                      <path d="M-15,-15 L15,15 M15,-15 L-15,15" stroke="#EF4444" strokeWidth="3" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Research Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <StatCard 
                value={researchData.overview.stats.facultyProjects} 
                label="Faculty Projects"
                icon={
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                }
              />
              <StatCard 
                value={researchData.overview.stats.studentProjects} 
                label="Student Projects"
                icon={
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                }
              />
              <StatCard 
                value={researchData.overview.stats.patentsFiled} 
                label="Patents Filed"
                icon={
                  <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
              />
              <StatCard 
                value={researchData.overview.stats.patentsGranted} 
                label="Patents Granted"
                icon={
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              <StatCard 
                value={researchData.overview.stats.publications} 
                label="Publications"
                icon={
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                }
              />
              <StatCard 
                value={researchData.overview.stats.collaborations} 
                label="Collaborations"
                icon={
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* Research Cell Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">{researchData.researchCell.title}</h2>
                <p className="text-lg mb-8 text-gray-700">{researchData.researchCell.description}</p>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Objectives</h3>
                <ul className="mb-8 space-y-2">
                  {researchData.researchCell.objectives.map((obj, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Research Committee</h3>
                  <ul className="space-y-4">
                    {researchData.researchCell.committee.map((member, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{member.name}</h4>
                          <p className="text-gray-600">{member.role} - {member.department}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Recent Activities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {researchData.researchCell.recentActivities.map((activity, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-gray-800">{activity}</h4>
                    </div>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recent Publications</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold">Title</th>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold">Authors</th>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold">Journal</th>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold">Year</th>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold">Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {researchData.publications.map((pub, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="py-4 px-4 text-gray-800 font-medium">{pub.title}</td>
                      <td className="py-4 px-4 text-gray-600">{pub.authors}</td>
                      <td className="py-4 px-4 text-gray-600">{pub.journal}</td>
                      <td className="py-4 px-4 text-gray-600">{pub.year}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${pub.department === 'Computer Science' ? 'bg-blue-100 text-blue-800' : pub.department === 'Electronics' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                          {pub.department}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-10">
              <a href="/publications" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                View All Publications
                <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Patents Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Patents</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {researchData.patents.map((patent, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="mr-6">
                      {patent.status === "Granted" ? (
                        <div className="bg-green-100 p-4 rounded-full">
                          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      ) : (
                        <div className="bg-yellow-100 p-4 rounded-full">
                          <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{patent.title}</h3>
                      <p className="text-gray-600 mb-3"><span className="font-medium">Inventors:</span> {patent.inventors}</p>
                      <p className="text-gray-600 mb-3"><span className="font-medium">Status:</span> <span className={`px-2 py-1 rounded text-sm ${patent.status === "Granted" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>{patent.status}</span></p>
                      <p className="text-gray-600 mb-3"><span className="font-medium">Year:</span> {patent.year}</p>
                      <p className="text-gray-600"><span className="font-medium">Application No:</span> {patent.applicationNo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <a href="/ipr-cell" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
                Learn About Patent Filing
                <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Innovation Hub Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">{researchData.innovationHub.title}</h2>
                <p className="text-lg mb-8 text-gray-700">{researchData.innovationHub.description}</p>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Facilities</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {researchData.innovationHub.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
                
                <a href="/innovation-hub" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-300">
                  Visit Innovation Hub
                  <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-8 rounded-xl relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500 rounded-full opacity-20"></div>
                  
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 relative z-10">Student Startups</h3>
                  
                  <div className="space-y-6 relative z-10">
                    {researchData.innovationHub.startups.map((startup, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-gray-800">{startup.name}</h4>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{startup.year}</span>
                        </div>
                        <p className="text-gray-600 mb-3"><span className="font-medium">Founders:</span> {startup.founders}</p>
                        <p className="text-gray-700">{startup.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {researchData.events.map((event, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-start">
                      <div className="mr-6">
                        <div className="bg-blue-100 p-4 rounded-lg text-center">
                          <div className="text-blue-800 font-bold text-2xl">{new Date(event.date).getDate()}</div>
                          <div className="text-blue-600 uppercase text-sm">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium mr-3 ${event.type === 'Conference' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                            {event.type}
                          </span>
                          <span className="text-gray-500 text-sm">{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 inline-flex items-center">
                          Learn more
                          <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <a href="/events" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                View All Events
                <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Research Journey?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">Join our vibrant research community and contribute to cutting-edge innovations that make a difference.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-100 transition duration-300">
                Contact Research Cell
              </a>
              <a href="/apply" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition duration-300">
                Apply for Research Grant
              </a>
            </div>
          </div>
        </section>
      </main>

    {/* For SSR, move global styles to a CSS/SCSS file or use a <style> tag in _app.tsx or _document.tsx. 
        If you want to keep it here, use a regular <style> tag (not jsx) for SSR compatibility: */}
    <style>{`
      @keyframes float {
         0%, 100% {
            transform: translateY(0);
         }
         50% {
            transform: translateY(-15px);
         }
      }
      .animate-float {
         animation: float 6s ease-in-out infinite;
      }
      .animate-float-delay {
         animation: float 6s ease-in-out infinite 2s;
      }
      .animate-float-delay2 {
         animation: float 6s ease-in-out infinite 4s;
      }
    `}</style>
    </>
  );
};

// Stat Card Component
const StatCard = ({ value, label, icon }: { value: number; label: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2 text-gray-800">{value}+</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

export default ResearchInnovationPage;