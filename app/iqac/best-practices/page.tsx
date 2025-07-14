import Head from 'next/head';
import HeroSection from '@/components/newHeroImageForAllPage';

export default function BestPracticesPage() {
  // Best Practices Data
  const bestPractices = [
    {
      id: 1,
      title: "Mentor-Mentee System",
      objectives: [
        "Provide personalized guidance to students",
        "Improve academic performance and emotional well-being",
        "Create a support system between faculty and students"
      ],
      context: "Many students come from rural or first-generation backgrounds and struggle with academic and personal challenges. There was a need for a structured faculty-led mentoring system to guide them.",
      practice: [
        "Each faculty mentor is assigned 20-25 students",
        "Monthly one-on-one meetings and academic reviews",
        "Mentors monitor attendance, performance, and career guidance",
        "Critical cases escalated to counselors or HODs"
      ],
      evidence: [
        "Improved class attendance (from 76% to 89%)",
        "Dropout rate reduced by 40%",
        "85% students reported increased confidence in surveys",
        "Alumni praise in feedback forms"
      ],
      challenges: [
        "Time management for faculty during exam seasons",
        "Initial student hesitance to open up",
        "Need for more psychological counseling training"
      ],
      documents: [
        { name: "Mentorship Guidelines", url: "/best-practices/mentorship-guidelines.pdf" }
      ],
      images: [
        "/best-practices/mentor-1.jpg",
        "/best-practices/mentor-2.jpg"
      ]
    },
    {
      id: 2,
      title: "Green Campus Initiative",
      objectives: [
        "Promote eco-conscious behavior among students",
        "Make the campus sustainable through waste management",
        "Reduce institutional carbon footprint"
      ],
      context: "Environmental degradation is a growing concern. The college aimed to reduce its environmental impact while involving students in sustainability practices.",
      practice: [
        "Installation of solar panels and LED lighting",
        "Rainwater harvesting system operational since 2022",
        "Plastic-free campus awareness campaigns",
        "Student-led 'Green Clubs' conduct drives and audits"
      ],
      evidence: [
        "30% reduction in monthly electricity bills",
        "100+ students actively involved in eco-drives",
        "Recognized by local media for community efforts",
        "Recycled 60kg of paper in 2023-24"
      ],
      challenges: [
        "Initial funding for infrastructure upgrades",
        "Behavioral change among students took time",
        "Maintaining consistent participation"
      ],
      documents: [
        { name: "Sustainability Report", url: "/best-practices/sustainability-report.pdf" }
      ],
      images: [
        "/best-practices/green-1.jpg",
        "/best-practices/green-2.jpg"
      ]
    },
    {
      id: 3,
      title: "Industry-Aligned Skill Labs",
      objectives: [
        "Bridge the gap between academia and industry requirements",
        "Provide hands-on experience with latest technologies",
        "Enhance employability of graduates"
      ],
      context: "Employers increasingly demand practical skills. Our traditional curriculum needed complementary skill-building opportunities.",
      practice: [
        "Partnered with 15+ companies for lab setup",
        "Evening/weekend certification programs",
        "Project-based learning approach",
        "Industry professionals as visiting instructors"
      ],
      evidence: [
        "Placement rate increased by 25%",
        "87% students reported higher confidence in technical skills",
        "5 patents filed by students in last 3 years",
        "Recognized as 'Center of Excellence' by state government"
      ],
      challenges: [
        "Initial resistance to curriculum changes",
        "Scheduling conflicts with regular classes",
        "Maintaining up-to-date equipment"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Best Practices | CATALYST College</title>
        <meta name="description" content="Innovative practices implemented at CATALYST College for academic excellence and institutional development" />
        <meta name="keywords" content="best practices, mentor system, green campus, skill labs, quality initiatives" />
        <meta property="og:title" content="Best Practices | CATALYST College" />
        <meta property="og:description" content="Our innovative approaches to education and campus development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/best-practices" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/best-practices-banner.jpg" />
      </Head>

      <HeroSection
        title="Best Practices"
        description="Innovative approaches driving excellence at CATALYST College"
        imageUrl="https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overlayOpacity={0.6}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Quality Initiatives</h2>
            <p className="text-lg text-gray-700">
              At CATALYST College, we continuously innovate to enhance the teaching-learning experience and institutional effectiveness. These best practices have been recognized for their impact and may serve as models for quality improvement in higher education. Each practice follows the NAAC format, detailing objectives, implementation, outcomes, and lessons learned.
            </p>
          </div>
        </section>

        {/* Best Practices List */}
        {bestPractices.map((practice) => (
          <section key={practice.id} className="mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              {/* Practice Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                <h2 className="text-2xl font-bold text-white">🏆 {practice.title}</h2>
              </div>

              {/* Practice Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    {/* Objectives */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                        <span className="mr-2">🎯</span> Objectives
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {practice.objectives.map((obj, index) => (
                          <li key={index}>{obj}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Context */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                        <span className="mr-2">🧩</span> Context
                      </h3>
                      <p className="text-gray-700">{practice.context}</p>
                    </div>

                    {/* The Practice */}
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                        <span className="mr-2">🚀</span> The Practice
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {practice.practice.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Evidence of Success */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                        <span className="mr-2">📈</span> Evidence of Success
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {practice.evidence.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Problems Encountered */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                        <span className="mr-2">⚠️</span> Challenges
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {practice.challenges.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Documents and Gallery */}
                <div className="mt-8">
                  {/* Documents */}
                  {practice.documents && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Related Documents</h3>
                      <div className="flex flex-wrap gap-3">
                        {practice.documents.map((doc, index) => (
                          <a 
                            key={index} 
                            href={doc.url} 
                            className="flex items-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700"
                            download
                          >
                            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            {doc.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Image Gallery */}
                  {practice.images && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {practice.images.map((img, index) => (
                          <div key={index} className="aspect-square overflow-hidden rounded-lg">
                            <img 
                              src={img} 
                              alt={`${practice.title} example ${index + 1}`} 
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Additional Resources */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">More Quality Initiatives</h2>
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
              <h3 className="font-medium text-gray-800">IQAC</h3>
              <p className="text-sm text-gray-600">Quality assurance cell</p>
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
              <h3 className="font-medium text-gray-800">NAAC</h3>
              <p className="text-sm text-gray-600">Accreditation details</p>
            </a>
            <a 
              href="/iqac/aqar-reports" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 text-center"
            >
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-800">AQAR</h3>
              <p className="text-sm text-gray-600">Annual quality reports</p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}