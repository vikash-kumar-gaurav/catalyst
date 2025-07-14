import Head from 'next/head';
import HeroSection from '@/components/newHeroImageForAllPage';

export default function FeedbackReportsPage() {
  // Feedback Data
  const feedbackData = [
    {
      year: "2023-24",
      type: "Student Feedback on Curriculum",
      action: "Implemented Choice Based Credit System (CBCS)",
      feedbackUrl: "/feedback/student-feedback-2024.pdf",
      actionUrl: "/feedback/student-action-2024.pdf",
      stats: {
        satisfaction: 82,
        participants: 450,
        keyImprovements: ["More elective options", "Practical assignments", "Industry-relevant content"]
      }
    },
    {
      year: "2023-24",
      type: "Alumni Feedback",
      action: "Added 3 skill-based certificate courses",
      feedbackUrl: "/feedback/alumni-feedback-2024.pdf",
      actionUrl: "/feedback/alumni-action-2024.pdf",
      stats: {
        satisfaction: 78,
        participants: 120,
        keyImprovements: ["Technical skills training", "Soft skills development", "Career counseling"]
      }
    },
    {
      year: "2022-23",
      type: "Faculty Feedback",
      action: "Organized 6 Faculty Development Programs",
      feedbackUrl: "/feedback/faculty-feedback-2023.pdf",
      actionUrl: "/feedback/faculty-action-2023.pdf",
      stats: {
        satisfaction: 85,
        participants: 35,
        keyImprovements: ["Teaching resources", "Research support", "Administrative processes"]
      }
    },
    {
      year: "2022-23",
      type: "Employer Feedback",
      action: "Redesigned internship modules with industry input",
      feedbackUrl: "/feedback/employer-feedback-2023.pdf",
      actionUrl: "/feedback/employer-action-2023.pdf",
      stats: {
        satisfaction: 75,
        participants: 28,
        keyImprovements: ["Technical competencies", "Communication skills", "Problem-solving abilities"]
      }
    }
  ];

  // Action Summary
  const actionSummary = [
    "2 new certificate courses introduced based on alumni feedback",
    "Wi-Fi zones expanded in hostels and library per student requests",
    "Mentorship program strengthened with more frequent sessions",
    "Career services partnered with Internshala & TCS iON",
    "Cafeteria menu diversified based on student suggestions",
    "Library hours extended during examination periods"
  ];

  return (
    <>
      <Head>
        <title>Feedback Reports | CATALYST College</title>
        <meta name="description" content="Stakeholder feedback analysis and action taken reports for continuous improvement at CATALYST College" />
        <meta name="keywords" content="feedback reports, student feedback, alumni feedback, employer feedback, quality improvement" />
        <meta property="og:title" content="Feedback Reports | CATALYST College" />
        <meta property="og:description" content="How we listen and respond to our stakeholders' input" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/feedback-reports" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/feedback-banner.jpg" />
      </Head>

      <HeroSection
        title="Feedback Reports"
        description="Listening, analyzing, and improving based on stakeholder input"
        imageUrl="https://catalystcollege.edu.in/wp-content/uploads/2023/07/feedback-banner.jpg"
        overlayOpacity={0.3}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Feedback Mechanism</h2>
            <p className="text-lg text-gray-700">
              CATALYST College regularly collects structured feedback from its stakeholders — including students, faculty, alumni, employers, and parents — to assess the effectiveness of curriculum delivery, teaching-learning methods, infrastructure, and overall institutional experience. The feedback is systematically analyzed and discussed in IQAC meetings, with necessary actions taken to address gaps and enhance quality.
            </p>
          </div>
        </section>

        {/* Feedback Types */}
        <section className="mb-16">
          <div className="bg-blue-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">👥 Types of Feedback Collected</h2>
          </div>
          <div className="border border-blue-50 rounded-b-lg p-6 bg-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Student Feedback */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📘</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Student Feedback</h3>
                <p className="text-sm text-gray-600">On curriculum, teaching & facilities</p>
              </div>
              
              {/* Faculty Feedback */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧑‍🏫</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Faculty Feedback</h3>
                <p className="text-sm text-gray-600">On institutional processes</p>
              </div>
              
              {/* Alumni Feedback */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Alumni Feedback</h3>
                <p className="text-sm text-gray-600">On academic relevance</p>
              </div>
              
              {/* Employer Feedback */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Employer Feedback</h3>
                <p className="text-sm text-gray-600">On graduate employability</p>
              </div>
              
              {/* Parent Feedback */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👪</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Parent Feedback</h3>
                <p className="text-sm text-gray-600">On institutional support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Reports Table */}
        <section className="mb-16">
          <div className="bg-green-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-green-800">📥 Feedback Reports & Actions</h2>
          </div>
          <div className="border border-green-50 rounded-b-lg bg-white overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Action Taken</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documents</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfaction</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {feedbackData.map((report, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.year}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{report.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{report.action}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <a 
                            href={report.feedbackUrl} 
                            className="text-blue-600 hover:text-blue-900 flex items-center"
                            download
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Feedback
                          </a>
                          <a 
                            href={report.actionUrl} 
                            className="text-green-600 hover:text-green-900 flex items-center"
                            download
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Action
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div 
                              className="bg-green-600 h-2.5 rounded-full" 
                              style={{ width: `${report.stats.satisfaction}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500">{report.stats.satisfaction}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden grid gap-4 p-6">
              {feedbackData.map((report, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-800">{report.year}</h3>
                    <div className="flex items-center">
                      <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${report.stats.satisfaction}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{report.stats.satisfaction}%</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700 mt-1">{report.type}</p>
                  <p className="text-sm text-gray-600 mt-2">{report.action}</p>
                  <div className="mt-3 flex space-x-3">
                    <a 
                      href={report.feedbackUrl} 
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                      download
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Feedback
                    </a>
                    <a 
                      href={report.actionUrl} 
                      className="text-sm text-green-600 hover:text-green-800 flex items-center"
                      download
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Action
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Action Summary */}
        <section className="mb-16">
          <div className="bg-yellow-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-yellow-800">🔁 Summary of Recent Actions Taken</h2>
          </div>
          <div className="border border-yellow-50 rounded-b-lg p-6 bg-white">
            <p className="text-gray-700 mb-4">
              Based on feedback received from various stakeholders in recent years, we've implemented several improvements:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {actionSummary.slice(0, 3).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {actionSummary.slice(3).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Feedback Process */}
        <section className="mb-16">
          <div className="bg-purple-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-purple-800">🔄 Our Feedback Process</h2>
          </div>
          <div className="border border-purple-50 rounded-b-lg p-6 bg-white">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Collection</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Structured online forms</li>
                  <li>Focus group discussions</li>
                  <li>Exit interviews for alumni</li>
                  <li>Employer surveys</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Analysis</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Quantitative data analysis</li>
                  <li>Thematic analysis of qualitative feedback</li>
                  <li>Comparative year-on-year trends</li>
                  <li>Priority identification</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Action</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>IQAC reviews findings</li>
                  <li>Action plans developed</li>
                  <li>Responsibilities assigned</li>
                  <li>Progress monitored</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Cycle Visual */}
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-16">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Feedback Implementation Cycle</h2>
          <div className="max-w-4xl mx-auto">
            <img 
              src="/feedback/feedback-cycle.png" 
              alt="Feedback collection, analysis, and implementation cycle" 
              className="w-full h-auto rounded"
            />
          </div>
        </section>

        {/* Current Feedback Form */}
        <section className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Share Your Feedback</h2>
          <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
            We value your input to help us improve. Please take a moment to share your experience and suggestions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a 
              href="/feedback/student" 
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-200 hover:bg-blue-50 text-center"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="font-medium text-gray-800">Student Feedback Form</h3>
            </a>
            <a 
              href="/feedback/alumni" 
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-200 hover:bg-blue-50 text-center"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">👨‍🎓</span>
              </div>
              <h3 className="font-medium text-gray-800">Alumni Feedback Form</h3>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}