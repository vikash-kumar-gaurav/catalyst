import Head from 'next/head';
import HeroSection from '@/components/newHeroImageForAllPage';

export default function AQARPage() {
  // AQAR Data
  const aqarData = [
    {
      year: "2023-24",
      fileType: "PDF",
      fileSize: "2.4 MB",
      downloadUrl: "/aqar/aqar-2023-24.pdf",
      submittedDate: "01 July 2024",
      status: "Accepted by NAAC",
      highlights: [
        "8 faculty development programs (FDPs) conducted",
        "250+ students placed through campus recruitment",
        "12 MoUs signed with industry and academic partners",
        "Smart classrooms upgraded with new digital tools",
        "Enhanced feedback mechanism implemented"
      ]
    },
    {
      year: "2022-23",
      fileType: "PDF",
      fileSize: "2.1 MB",
      downloadUrl: "/aqar/aqar-2022-23.pdf",
      submittedDate: "03 July 2023",
      status: "Accepted by NAAC",
      highlights: [
        "6 new certificate programs introduced",
        "Library digitization project completed",
        "Student satisfaction improved by 12%",
        "Research publications increased by 25%"
      ]
    },
    {
      year: "2021-22",
      fileType: "PDF",
      fileSize: "1.8 MB",
      downloadUrl: "/aqar/aqar-2021-22.pdf",
      submittedDate: "05 July 2022",
      status: "Accepted by NAAC"
    },
    {
      year: "2020-21",
      fileType: "PDF",
      fileSize: "1.5 MB",
      downloadUrl: "/aqar/aqar-2020-21.pdf",
      submittedDate: "10 July 2021",
      status: "Accepted by NAAC"
    }
  ];

  return (
    <>
      <Head>
        <title>AQAR Reports | CATALYST College</title>
        <meta name="description" content="Annual Quality Assurance Reports submitted to NAAC by CATALYST College" />
        <meta name="keywords" content="AQAR, NAAC, quality assurance, annual report, institutional quality" />
        <meta property="og:title" content="AQAR Reports | CATALYST College" />
        <meta property="og:description" content="Our annual quality assurance documentation submitted to NAAC" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/aqar" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/aqar-banner.jpg" />
      </Head>

      <HeroSection
        title="AQAR Reports"
        description="Annual Quality Assurance Reports submitted to NAAC"
        imageUrl="https://catalystcollege.edu.in/wp-content/uploads/2023/07/aqar-banner.jpg"
        overlayOpacity={0.3}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About AQAR</h2>
            <p className="text-lg text-gray-700">
              The Annual Quality Assurance Report (AQAR) is submitted every year by the Internal Quality Assurance Cell (IQAC) of CATALYST College to the National Assessment and Accreditation Council (NAAC). These reports capture the yearly initiatives, outcomes, and enhancements made in the institution as part of our commitment to continuous improvement and academic excellence.
            </p>
          </div>
        </section>

        {/* AQAR Reports Table */}
        <section className="mb-16">
          <div className="bg-blue-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">📥 AQAR Reports</h2>
          </div>
          <div className="border border-blue-50 rounded-b-lg bg-white overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Academic Year</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Download</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {aqarData.map((report, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.year}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.fileType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.fileSize}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.submittedDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${report.status === 'Accepted by NAAC' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a 
                          href={report.downloadUrl} 
                          className="text-blue-600 hover:text-blue-900 flex items-center"
                          download
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden grid gap-4 p-6">
              {aqarData.map((report, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-800">{report.year}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${report.status === 'Accepted by NAAC' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Submitted: {report.submittedDate}</p>
                    <p>{report.fileType} • {report.fileSize}</p>
                  </div>
                  <a 
                    href={report.downloadUrl} 
                    className="mt-3 inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                    download
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Report
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Highlights */}
        <section className="mb-16">
          <div className="bg-green-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-green-800">🌟 Highlights from AQAR 2023-24</h2>
          </div>
          <div className="border border-green-50 rounded-b-lg p-6 bg-white">
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              {aqarData[0].highlights?.map((highlight:any, index:number) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Submission Process */}
        <section className="mb-16">
          <div className="bg-purple-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-purple-800">📝 AQAR Submission Process</h2>
          </div>
          <div className="border border-purple-50 rounded-b-lg p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Preparation Timeline</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Data collection from departments (January-February)</li>
                  <li>Compilation and analysis by IQAC (March)</li>
                  <li>Draft report preparation (April)</li>
                  <li>Review by academic council (May)</li>
                  <li>Final submission to NAAC (June-July)</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Components</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>Curriculum development and teaching-learning</li>
                  <li>Research and innovation activities</li>
                  <li>Infrastructure and learning resources</li>
                  <li>Student support and progression</li>
                  <li>Governance and institutional values</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a 
              href="/iqac" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 text-center"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">IQAC Home</h3>
            </a>
            <a 
              href="/about/naac-accreditation" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 text-center"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">NAAC Accreditation</h3>
            </a>
            <a 
              href="/iqac/best-practices" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 text-center"
            >
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">Best Practices</h3>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}