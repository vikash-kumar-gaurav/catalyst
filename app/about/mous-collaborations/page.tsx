import Head from 'next/head';
import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';

export default async function MoUsPage() {

  let pageData = {
    "heroData": {
      "heroImageURL": "",
      "description": "Building bridges with industry and academia to create real-world opportunities",
      "title": "MoUs & Collaborations"
    },
    "mouData": [
      {
        "id": 1,
        "name": "TCS iON",
        "type": "Industry (IT)",
        "logo": "/logos/tcs-ion.png",
        "area": "Digital certifications, career edge",
        "year": 2023,
        "benefits": "Internship + Placement track",
        "link": "/mous/tcs-ion-mou.pdf"
      },
      {
        "id": 2,
        "name": "AWS Academy",
        "type": "Tech Platform",
        "logo": "/logos/aws-academy.png",
        "area": "Cloud computing training & certification",
        "year": 2022,
        "benefits": "AWS credits + Global badge",
        "link": "/mous/aws-mou.pdf"
      },
      {
        "id": 3,
        "name": "NASSCOM FutureSkills",
        "type": "Industry Body",
        "logo": "/logos/nasscom.png",
        "area": "AI, ML, and Cybersecurity programs",
        "year": 2023,
        "benefits": "Free courses + Recognition",
        "link": "/mous/nasscom-mou.pdf"
      },
      {
        "id": 4,
        "name": "Internshala",
        "type": "EdTech",
        "logo": "/logos/internshala.png",
        "area": "Internship support and training",
        "year": 2021,
        "benefits": "Resume & internship portal",
        "link": "/mous/internshala-mou.pdf"
      },
      {
        "id": 5,
        "name": "IIT Bombay - Spoken Tutorial",
        "type": "Academia",
        "logo": "/logos/iitb.png",
        "area": "FOSS-based online training",
        "year": 2021,
        "benefits": "Free certification programs",
        "link": "/mous/iitb-mou.pdf"
      },
      {
        "id": 6,
        "name": "Red Hat Academy",
        "type": "Global Tech Company",
        "logo": "/logos/redhat.png",
        "area": "Linux admin & open-source training",
        "year": 2024,
        "benefits": "Industry-ready certification",
        "link": "/mous/redhat-mou.pdf"
      },
      {
        "id": 7,
        "name": "MSME Patna",
        "type": "Government Body",
        "logo": "/logos/msme.png",
        "area": "Entrepreneurship development",
        "year": 2023,
        "benefits": "Skill-building & projects",
        "link": "/mous/msme-mou.pdf"
      },
      {
        "id": 8,
        "name": "CIMA, UK",
        "type": "Global Accounting",
        "logo": "/logos/cima.png",
        "area": "Management accounting curriculum bridge",
        "year": 2024,
        "benefits": "Dual qualification path",
        "link": "/mous/cima-mou.pdf"
      }
    ],
    "outcomes": [
      {
        "metric": "700+",
        "description": "students trained under AWS Academy"
      },
      {
        "metric": "80+",
        "description": "internships via Internshala MoU"
      },
      {
        "metric": "3",
        "description": "faculty FDPs under MSME Entrepreneurship Cell"
      },
      {
        "metric": "2",
        "description": "Research projects published via IIT Collaboration"
      }
    ]
  }
  const { data, error } = await fetchPageData("mous-&-collaborations");
  pageData = data as any;
  const { heroData, mouData, outcomes } = pageData;
  return (
    <>
      <Head>
        <title>MoUs & Collaborations | CATALYST College</title>
        <meta name="description" content="Strategic partnerships with industry, academia and global institutions enhancing student opportunities at CATALYST College" />
        <meta name="keywords" content="college MoUs, industry collaborations, academic partnerships, student internships, certification programs" />
        <meta property="og:title" content="MoUs & Collaborations | CATALYST College" />
        <meta property="og:description" content="Our strategic partnerships creating real-world opportunities for students" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/mous" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/collaboration-banner.jpg" />
      </Head>

      <HeroSection
        title={heroData.title}
        description={heroData.description}
        imageUrl={heroData.heroImageURL}
        overlayOpacity={0.3}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Strategic Partnerships</h2>
          <p className="text-lg text-gray-700">
            At CATALYST College, we believe in building bridges with the industry, academia, and research institutions to create real-world opportunities for our students. Through strategic MoUs (Memorandums of Understanding) and collaborations, we ensure access to cutting-edge training, internships, joint projects, and global exposure. These partnerships reflect our commitment to producing industry-ready graduates.
          </p>
        </section>

        {/* Active MoUs Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Active MoUs & Partnerships</h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Partner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Area of Collaboration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Year</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Student Benefits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Document</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mouData.map((mou) => (
                  <tr key={mou.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 object-contain" src={mou.logo} alt={mou.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{mou.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mou.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{mou.area}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mou.year}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{mou.benefits}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href={mou.link} className="text-blue-600 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                        View MoU
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid gap-6">
            {mouData.map((mou) => (
              <div key={mou.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <img className="h-12 w-12 object-contain mr-4" src={mou.logo} alt={mou.name} />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{mou.name}</h3>
                    <p className="text-sm text-gray-600">{mou.type} • {mou.year}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-gray-700">Collaboration Area:</h4>
                  <p className="text-sm text-gray-600">{mou.area}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700">Student Benefits:</h4>
                  <p className="text-sm text-gray-600">{mou.benefits}</p>
                </div>
                <a
                  href={mou.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View MoU Document
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Collaborations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Types of Collaborations</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Academic */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <div className="text-purple-600 text-2xl mb-3">📘</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Academic Collaborations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Joint programs with universities</li>
                <li>Faculty exchange programs</li>
                <li>Curriculum enrichment</li>
                <li>FDPs with IITs/NITs</li>
              </ul>
            </div>

            {/* Industry */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-blue-600 text-2xl mb-3">💻</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Industry Partnerships</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Skill development programs</li>
                <li>Certification bootcamps</li>
                <li>Placement & internships</li>
                <li>Project mentorship</li>
              </ul>
            </div>

            {/* Research */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <div className="text-green-600 text-2xl mb-3">🔬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Research & Innovation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Joint research labs</li>
                <li>Centers of excellence</li>
                <li>Paper publication support</li>
                <li>Innovation cell initiatives</li>
              </ul>
            </div>

            {/* Global */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
              <div className="text-red-600 text-2xl mb-3">🌍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Global Alliances</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>International certifications</li>
                <li>Collaboration with global experts</li>
                <li>Study abroad programs</li>
                <li>Virtual exchange programs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Esteemed Partners</h2>
          <div className="relative">
            <div className="flex overflow-x-auto py-4 space-x-8 scrollbar-hide">
              {mouData.map((mou) => (
                <div key={mou.id} className="flex-shrink-0">
                  <img
                    src={mou.logo}
                    alt={mou.name}
                    className="h-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    title={mou.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Collaboration Outcomes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{outcome.metric}</div>
                <p className="text-gray-700">{outcome.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Downloads Section */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Documentation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/downloads/mous-list.pdf"
              className="flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
              download
            >
              <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Complete MoU List (PDF)
            </a>
            <a
              href="/downloads/mous-signed.zip"
              className="flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
              download
            >
              <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Signed MoU Documents (ZIP)
            </a>
            <a
              href="/downloads/collaboration-report.pdf"
              className="flex items-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
              download
            >
              <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Annual Impact Report
            </a>
          </div>
        </section>
      </div>
    </>
  );
}