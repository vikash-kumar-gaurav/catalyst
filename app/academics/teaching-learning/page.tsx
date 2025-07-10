import HeroSection from '@/components/newHeroImageForAllPage';
import { FaChalkboardTeacher, FaLaptopCode, FaUsers, FaGraduationCap, FaHandsHelping, FaClipboardCheck, FaLightbulb } from 'react-icons/fa';
import { GiTeacher, GiBrain, GiMeepleGroup } from 'react-icons/gi';
import { MdOutlineScience, MdOutlineAssessment } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';

const TeachingLearningPractices = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection title='Teaching-Learning Practices' description='Our dynamic pedagogical approaches blend traditional wisdom with innovative methodologies to create transformative learning experiences'  />

      {/* Teaching Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Interactive classroom"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-100 p-4 rounded-lg shadow-lg">
                  <FaLightbulb className="text-yellow-500 text-4xl" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaChalkboardTeacher className="text-blue-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Diverse Teaching Methods</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Conventional Methods</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Chalk & Talk sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Interactive PowerPoint lectures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Textbook-based learning</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Innovative Methods</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Flipped classroom model</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Problem-based learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Gamification techniques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student-Centric Learning Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <RiTeamLine className="text-green-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Student-Centric Learning</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our pedagogy places students at the center of the learning process through engaging activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GiBrain className="text-4xl text-purple-600" />,
                title: "Group Discussions",
                desc: "Structured peer learning sessions to develop critical thinking"
              },
              {
                icon: <MdOutlineScience className="text-4xl text-blue-600" />,
                title: "Hands-on Labs",
                desc: "Practical experimentation in state-of-the-art laboratories"
              },
              {
                icon: <GiMeepleGroup className="text-4xl text-green-600" />,
                title: "Role Plays",
                desc: "Scenario-based learning through dramatization"
              },
              {
                icon: <FaGraduationCap className="text-4xl text-yellow-600" />,
                title: "Seminars",
                desc: "Student-led presentations to build communication skills"
              },
              {
                icon: <FaLaptopCode className="text-4xl text-red-600" />,
                title: "Projects",
                desc: "Real-world problem solving through mini and major projects"
              },
              {
                icon: <GiTeacher className="text-4xl text-indigo-600" />,
                title: "Field Visits",
                desc: "Industrial tours for experiential learning"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Technology in education"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaLaptopCode className="text-purple-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Technology Integration</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-800">Learning Management Systems</h3>
                    <p className="text-gray-600">Moodle, Google Classroom, and our custom LMS for seamless course delivery</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-800">Interactive Tools</h3>
                    <p className="text-gray-600">Kahoot, Mentimeter, and Padlet for engaging assessments</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-50 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-800">Video Resources</h3>
                    <p className="text-gray-600">NPTEL, Coursera, and in-house lecture recordings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Practices Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FaClipboardCheck className="text-indigo-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Comprehensive Assessment</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multi-dimensional evaluation framework to measure holistic learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Formative",
                items: ["Weekly quizzes", "Tutorials", "Assignments"],
                color: "bg-blue-100 text-blue-800"
              },
              {
                title: "Summative",
                items: ["Mid-term exams", "End-semester exams"],
                color: "bg-purple-100 text-purple-800"
              },
              {
                title: "Practical",
                items: ["Lab assessments", "Project evaluations", "Viva voce"],
                color: "bg-green-100 text-green-800"
              },
              {
                title: "Continuous",
                items: ["Class participation", "Peer reviews", "Self assessments"],
                color: "bg-yellow-100 text-yellow-800"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className={`${category.color} px-6 py-4 font-bold text-lg`}>
                  {category.title} Assessment
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaHandsHelping className="text-red-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Signature Practices</h2>
            </div>
            <p className="text-lg text-gray-600">
              Innovative initiatives that set our teaching-learning ecosystem apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Talk Tuesdays",
                desc: "Weekly student-led technology presentations",
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              },
              {
                title: "Learn by Doing",
                desc: "Hands-on lab intensive courses",
                icon: <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              },
              {
                title: "Cross-Disciplinary Hackathons",
                desc: "Annual 48-hour innovation challenges",
                icon: <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            ].map((practice, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all">
                <div className="flex justify-center mb-4">
                  {practice.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">{practice.title}</h3>
                <p className="text-gray-600 text-center">{practice.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachingLearningPractices;
