import Head from 'next/head';
import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';

export default async function NIRFPage() {
 let nirfData  = {
    "currentStatus": {
        "year": 2024,
        "status": "Data Submitted Successfully",
        "category": "College Category",
        "ranking": "Not Ranked Yet",
        "note": "Our college has submitted data under the 'Colleges' category and is working actively to improve in all NIRF parameters including student-faculty ratio, placements, research, and outreach."
    },
    "historicalData": [
        {
            "year": 2023,
            "status": "Participated",
            "category": "Overall",
            "ranking": "Not Ranked Yet"
        }
    ],
    "parameters": [
        { "name": "Teaching, Learning & Resources", "weightage": "30%" },
        { "name": "Research & Professional Practice", "weightage": "20%" },
        { "name": "Graduation Outcomes", "weightage": "20%" },
        { "name": "Outreach & Inclusivity", "weightage": "10%" },
        { "name": "Perception", "weightage": "20%" }
    ],
    "documents": [
        { "title": "Institutional Data for NIRF 2024", "url": "/nirf/institutional-data-2024.pdf", "type": "PDF" },
        { "title": "NIRF Metrics - Teaching & Learning", "url": "/nirf/teaching-learning-2024.pdf", "type": "PDF" },
        { "title": "NIRF Research & Professional Practice", "url": "/nirf/research-2024.pdf", "type": "PDF" },
        { "title": "Graduation Outcome Data", "url": "/nirf/graduation-outcomes-2024.pdf", "type": "PDF" },
        { "title": "Placement & Salary Report", "url": "/nirf/placement-report-2024.pdf", "type": "PDF" }
    ],
    "herSection":{
      "imageUrl":"https://catalystcollege.edu.in/wp-content/uploads/2023/07/nirf-banner.jpg",
      "title":"NIRF Ranking",
      "description":"Participating in India's National Institutional Ranking Framework",
      "overlayOpacity":0.4,
      "height":"lg"
    }
};
  const { data, error} = await fetchPageData("");
  nirfData = data as any ?? nirfData;
 
  return (
    <>
      <Head>
        <title>NIRF Ranking | CATALYST College</title>
        <meta name="description" content="CATALYST College's participation in the National Institutional Ranking Framework (NIRF) with current status and submitted reports" />
        <meta name="keywords" content="NIRF ranking, college ranking, NIRF India, institutional ranking, education ranking" />
        <meta property="og:title" content="NIRF Ranking | CATALYST College" />
        <meta property="og:description" content="Our participation in the National Institutional Ranking Framework" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/nirf" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/nirf-banner.jpg" />
      </Head>

      <HeroSection
        title={nirfData.herSection.title}
        description={nirfData.herSection.description}
        imageUrl={nirfData.herSection.imageUrl}
        overlayOpacity={nirfData.herSection.overlayOpacity}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About NIRF</h2>
            <p className="text-lg text-gray-700">
              CATALYST College actively participates in the National Institutional Ranking Framework (NIRF) launched by the Ministry of Education, Government of India, to benchmark itself against the highest standards of education. Our participation in NIRF reflects our continuous efforts to enhance teaching, learning, research, graduate outcomes, and outreach.
            </p>
          </div>
        </section>

        {/* Current Status */}
        <section className="mb-16">
          <div className="bg-blue-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">📊 Current NIRF Status</h2>
          </div>
          <div className="border border-blue-50 rounded-b-lg p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Current Year ({nirfData.currentStatus.year})</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Status:</span>
                      <span className="text-gray-900">{nirfData.currentStatus.status}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Category:</span>
                      <span className="text-gray-900">{nirfData.currentStatus.category}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Ranking:</span>
                      <span className="text-gray-900 font-bold">{nirfData.currentStatus.ranking}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  {nirfData.currentStatus.note}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Historical Participation</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ranking</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {nirfData.historicalData.map((data, index) => (
                        <tr key={index}>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{data.year}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{data.status}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{data.category}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{data.ranking}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NIRF Parameters */}
        <section className="mb-16">
          <div className="bg-green-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-green-800">🧩 NIRF Ranking Parameters</h2>
          </div>
          <div className="border border-green-50 rounded-b-lg p-6 bg-white">
            <p className="text-gray-700 mb-6">
              The NIRF ranking is based on five key parameters that evaluate different aspects of institutional performance:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {nirfData.parameters.map((param, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-800 mb-1">{param.name}</h3>
                  <p className="text-green-600 font-semibold">{param.weightage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submitted Documents */}
        <section className="mb-16">
          <div className="bg-purple-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-purple-800">📂 Submitted Reports & Data</h2>
          </div>
          <div className="border border-purple-50 rounded-b-lg p-6 bg-white">
            <p className="text-gray-700 mb-6">
              As part of our NIRF participation, we have submitted the following documents and data:
            </p>
            <div className="space-y-4">
              {nirfData.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-800">{doc.title}</h3>
                    <p className="text-sm text-gray-500">{doc.type} Document</p>
                  </div>
                  <a 
                    href={doc.url} 
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                    download
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-16">
          <div className="bg-yellow-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-yellow-800">🔗 Additional Resources</h2>
          </div>
          <div className="border border-yellow-50 rounded-b-lg p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="https://www.nirfindia.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
              >
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Official NIRF Website</h3>
                  <p className="text-gray-600 text-sm">Explore the National Institutional Ranking Framework</p>
                </div>
              </a>
              <a 
                href="/iqac" 
                className="flex items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
              >
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">IQAC Initiatives</h3>
                  <p className="text-gray-600 text-sm">Our quality assurance measures</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="bg-red-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-red-800">🖼️ NIRF Participation Gallery</h2>
          </div>
          <div className="border border-red-50 rounded-b-lg p-6 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src="/nirf-gallery/data-preparation.jpg" 
                  alt="NIRF Data Preparation" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src="/nirf-gallery/workshop.jpg" 
                  alt="NIRF Workshop" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src="/nirf-gallery/submission.jpg" 
                  alt="NIRF Submission" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}