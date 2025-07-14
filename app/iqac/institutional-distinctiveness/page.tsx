import Head from 'next/head';
import HeroSection from '@/components/newHeroImageForAllPage';

export default function InstitutionalDistinctivenessPage() {
  return (
    <>
      <Head>
        <title>Institutional Distinctiveness | CATALYST College</title>
        <meta name="description" content="Discover what makes CATALYST College unique - our commitment to empowering rural first-generation learners through affordable digital education" />
        <meta name="keywords" content="institutional distinctiveness, college uniqueness, rural education, digital learning, first-generation students" />
        <meta property="og:title" content="Institutional Distinctiveness | CATALYST College" />
        <meta property="og:description" content="Our unique approach to making quality digital education accessible to rural communities" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/institutional-distinctiveness" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/distinctiveness-banner.jpg" />
      </Head>

      <HeroSection
        title="Institutional Distinctiveness"
        description="Our unique commitment to empowering rural first-generation learners"
        imageUrl="https://catalystcollege.edu.in/wp-content/uploads/2023/07/distinctiveness-banner.jpg"
        overlayOpacity={0.3}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Distinctive Identity</h2>
            <p className="text-lg text-gray-700">
              As part of our commitment to transparency and quality enhancement, CATALYST College presents its Institutional Distinctiveness. This narrative aligns with our mission and values, highlighting our focused approach to making quality digital education accessible to rural first-generation learners - an area where we have demonstrated consistent excellence and created lasting impact.
            </p>
          </div>
        </section>

        {/* Core Focus Area */}
        <section className="mb-16">
          <div className="bg-blue-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">🌟 Our Distinctiveness</h2>
          </div>
          <div className="border border-blue-50 rounded-b-lg p-6 bg-white">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              "Empowering Rural First-Generation Learners through Affordable Digital Education"
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">🎯 Vision Alignment</h4>
                <p className="text-gray-700">
                  Our vision to provide "affordable and quality education with digital access for every aspiring learner" directly addresses the needs of first-generation learners from rural Bihar and Jharkhand.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">📚 Implementation</h4>
                <p className="text-gray-700">
                  We've built a comprehensive digital education ecosystem with smart classrooms, online resources, and industry-aligned curriculum - all at minimal cost to students.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">💡 Key Impact</h4>
                <p className="text-gray-700">
                  Dramatic improvements in retention, employability, and gender parity, transforming lives through education.
                </p>
              </div>
            </div>

            {/* Detailed Sections */}
            <div className="space-y-8">
              {/* Vision Alignment */}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">🎯</span>
                  Vision Alignment
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    CATALYST College was founded with the mission to bridge the urban-rural education divide. Our distinctiveness stems from:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Special focus on first-generation learners (68% of our student body)</li>
                    <li>Strategic location serving rural communities in Bihar and Jharkhand</li>
                    <li>Commitment to keeping education affordable without compromising quality</li>
                    <li>Digital infrastructure designed for students with limited prior tech exposure</li>
                  </ul>
                </div>
              </div>

              {/* Implementation */}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">📚</span>
                  Implementation
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    Our comprehensive approach includes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Academic Structure</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Bilingual instruction (English + Hindi) for better comprehension</li>
                        <li>Remedial digital literacy programs in first semester</li>
                        <li>Industry-aligned curriculum with TCS iON, AWS Academy</li>
                        <li>Evening classes for students who work daytime</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Support Systems</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>60% students receive fee concessions or scholarships</li>
                        <li>Free digital devices lending program</li>
                        <li>Subsidized hostel with 24/7 study facilities</li>
                        <li>Vernacular e-content for complex subjects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Impact */}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">💡</span>
                  Key Impact
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-3 rounded border border-gray-200 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">91%</div>
                      <div className="text-sm text-gray-600">Student Retention Rate (up from 72%)</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">300+</div>
                      <div className="text-sm text-gray-600">First-gen graduates placed in 3 years</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">42%</div>
                      <div className="text-sm text-gray-600">Female enrollment increase</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Student Outcomes</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>85% placement rate for first-generation students</li>
                        <li>12 student startups launched from our incubation center</li>
                        <li>40% graduates supporting siblings' education</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Community Impact</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Digital literacy programs for 500+ local residents</li>
                        <li>Recognized as "Center of Excellence" by state government</li>
                        <li>Featured in national media for rural education innovation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future Plans */}
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">🔄</span>
                  Long-Term Commitment
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3">
                    We're expanding our impact through:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-medium text-gray-800 mb-2">Mobile Learning Labs</h4>
                      <p className="text-gray-700 text-sm">
                        Bringing digital education to remote villages through equipped vans with satellite internet.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-medium text-gray-800 mb-2">Free Coding Bootcamps</h4>
                      <p className="text-gray-700 text-sm">
                        6-month intensive programs in web development and data analytics for rural youth.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-medium text-gray-800 mb-2">Vernacular E-Content</h4>
                      <p className="text-gray-700 text-sm">
                        Developing Hindi and regional language learning materials for complex technical subjects.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-medium text-gray-800 mb-2">Alumni Mentorship</h4>
                      <p className="text-gray-700 text-sm">
                        Connecting current students with successful first-generation alumni for guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <div className="bg-purple-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-purple-800">🌟 Success Stories</h2>
          </div>
          <div className="border border-purple-50 rounded-b-lg p-6 bg-white">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/success-stories/student-1.jpg" 
                    alt="First-generation graduate" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Rahul Kumar</h3>
                <p className="text-sm text-gray-600 mb-2">BBA Graduate, 2022 | Now at TCS</p>
                <p className="text-gray-700 text-sm">
                  "As the first in my family to attend college, the digital literacy program gave me confidence. Today I support my siblings' education."
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/success-stories/student-2.jpg" 
                    alt="Female entrepreneur" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Priya Singh</h3>
                <p className="text-sm text-gray-600 mb-2">BCA Graduate, 2021 | Founder, TechRural</p>
                <p className="text-gray-700 text-sm">
                  "The incubation center helped launch my startup that now provides digital services to 20+ villages."
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/success-stories/student-3.jpg" 
                    alt="Alumni mentor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Amit Patel</h3>
                <p className="text-sm text-gray-600 mb-2">BSc IT, 2020 | Senior Developer</p>
                <p className="text-gray-700 text-sm">
                  "From village school to MNC job - the industry-aligned curriculum made all the difference. Now I mentor current students."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Media & Recognition */}
        <section className="mb-16">
          <div className="bg-green-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-green-800">📰 Media & Recognition</h2>
          </div>
          <div className="border border-green-50 rounded-b-lg p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Featured In</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded mr-3">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">The Hindu - Education Plus</h4>
                      <p className="text-sm text-gray-600">"How one college is bridging the rural-urban digital divide" (March 2023)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded mr-3">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">DD News - Shiksha Darshan</h4>
                      <p className="text-sm text-gray-600">Documentary feature on our rural education model (January 2024)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Awards & Recognition</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>"Best Emerging College for Rural Education" - State Education Awards 2023</li>
                  <li>NAAC commendation for Institutional Distinctiveness (2023)</li>
                  <li>Featured in MHRD's "Innovative Practices in Higher Education" report</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Become Part of Our Story</h2>
            <p className="mb-6">
              Whether you're a prospective student, potential partner, or supporter of rural education, join us in transforming lives through accessible digital education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/admissions" 
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100"
              >
                Explore Admissions
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}