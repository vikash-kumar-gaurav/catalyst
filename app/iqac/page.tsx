import Head from 'next/head';
import HeroSection from '@/components/newHeroImageForAllPage';

export default function IQACPage() {
  // IQAC Data
  const iqacData = {
    objectives: [
      "To develop a system for conscious, consistent, and catalytic improvement in academic and administrative performance",
      "To promote measures for institutional functioning towards quality enhancement",
      "To institutionalize best practices and ensure internalization of quality culture",
      "To act as a nodal agency for quality-related activities in the institution",
      "To document various programs and activities leading to quality improvement"
    ],
    functions: [
      "Planning and monitoring academic and administrative activities",
      "Development of quality benchmarks",
      "Documentation of institutional activities",
      "Collection and analysis of stakeholder feedback",
      "Preparation and submission of AQAR to NAAC",
      "Organizing seminars, workshops, and FDPs",
      "Monitoring quality parameters and suggesting improvements",
      "Coordinating with various departments for quality initiatives"
    ],
    composition: [
      "Chairperson (Principal)",
      "Senior Faculty Members (3)",
      "Administrative Officer",
      "Industry Expert",
      "Alumni Representative",
      "Student Representative",
      "IQAC Coordinator"
    ],
    qualityInitiatives: [
      {
        title: "NAAC Accreditation",
        description: "Guiding the institution through accreditation cycles and continuous quality improvement"
      },
      {
        title: "NIRF Participation",
        description: "Coordinating data collection and reporting for national rankings"
      },
      {
        title: "Curriculum Improvement",
        description: "Regular review and updating of curriculum to match industry standards"
      },
      {
        title: "Teaching-Learning Innovation",
        description: "Promoting innovative pedagogies and technology integration"
      }
    ],
    documents: [
      { title: "AQAR 2022-23", url: "/iqac/aqar-2023.pdf", type: "PDF" },
      { title: "IQAC Minutes 2024", url: "/iqac/minutes-2024.pdf", type: "PDF" },
      { title: "Best Practices Document", url: "/iqac/best-practices.pdf", type: "PDF" }
    ]
  };

  return (
    <>
      <Head>
        <title>IQAC | CATALYST College</title>
        <meta name="description" content="Internal Quality Assurance Cell of CATALYST College - Ensuring continuous improvement in academic and administrative performance" />
        <meta name="keywords" content="IQAC, quality assurance, NAAC, AQAR, best practices, institutional quality" />
        <meta property="og:title" content="IQAC | CATALYST College" />
        <meta property="og:description" content="Our commitment to quality education through systematic enhancement initiatives" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/iqac" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/iqac-banner.jpg" />
      </Head>

      <HeroSection
        title="Internal Quality Assurance Cell (IQAC)"
        description="Championing excellence through systematic quality enhancement"
        imageUrl="https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overlayOpacity={0.3}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About IQAC</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Internal Quality Assurance Cell (IQAC) of CATALYST College was established in accordance with the guidelines of the National Assessment and Accreditation Council (NAAC) to maintain and enhance the quality of education and governance. It functions as a central body that initiates, monitors, and sustains quality-related activities in the institution.
            </p>
            <p className="text-lg text-gray-700">
              Since its establishment, the IQAC has played a vital role in the institution's quality enhancement initiatives, serving as the driving force behind our NAAC accreditation process and continuous improvement efforts.
            </p>
          </div>
        </section>

        {/* Objectives & Functions */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Objectives */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">🎯 Objectives</h2>
              <ul className="space-y-4">
                {iqacData.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Functions */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6">🔁 Key Functions</h2>
              <ul className="space-y-4">
                {iqacData.functions.map((func, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span className="text-gray-700">{func}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Composition & Role */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Composition */}
            <div>
              <div className="bg-purple-50 p-6 rounded-t-lg">
                <h2 className="text-2xl font-bold text-purple-800">🧩 IQAC Composition</h2>
              </div>
              <div className="border border-purple-50 rounded-b-lg p-6 bg-white">
                <ul className="space-y-3">
                  {iqacData.composition.map((member, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span className="text-gray-700">{member}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="/iqac/" 
                  className="inline-flex items-center mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  View Detailed Members List
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Role in Quality */}
            <div>
              <div className="bg-yellow-50 p-6 rounded-t-lg">
                <h2 className="text-2xl font-bold text-yellow-800">📈 Quality Enhancement Role</h2>
              </div>
              <div className="border border-yellow-50 rounded-b-lg p-6 bg-white">
                <div className="space-y-4">
                  {iqacData.qualityInitiatives.map((initiative, index) => (
                    <div key={index} className="border-l-4 border-yellow-400 pl-4">
                      <h3 className="font-bold text-gray-800">{initiative.title}</h3>
                      <p className="text-gray-600 text-sm">{initiative.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="mb-16">
          <div className="bg-red-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-red-800">📂 IQAC Documents</h2>
          </div>
          <div className="border border-red-50 rounded-b-lg p-6 bg-white">
            <div className="grid md:grid-cols-3 gap-6">
              {iqacData.documents.map((doc, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <svg className="w-8 h-8 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="font-medium text-gray-800">{doc.title}</h3>
                  </div>
                  <a 
                    href={doc.url} 
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                    download
                  >
                    Download {doc.type}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="/iqac/members-functions" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Members & Functions</h3>
            </a>
            <a 
              href="/iqac/aqar-reports" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">AQAR Reports</h3>
            </a>
            <a 
              href="/iqac/best-practices" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 text-center"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Best Practices</h3>
            </a>
            <a 
              href="/iqac/institutional-distinctiveness" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Institutional Distinctiveness</h3>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}