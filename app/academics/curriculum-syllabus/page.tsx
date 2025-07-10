import { FaBook, FaLaptopCode, FaChartLine, FaMicrophone, FaUsers, FaUserTie } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { MdComputer, MdOutlineWorkspaces } from 'react-icons/md';

const CurriculumPage = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Curriculum & Syllabus</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive academic framework combining university syllabus with value-added programs
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Academic Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              CATALYST College offers industry-aligned programs that combine university curriculum with essential add-on courses for holistic development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <FaLaptopCode className="text-4xl mb-4 text-blue-600" />,
                title: "BCA (Bachelor of Computer Applications)",
                description: "3-year program focusing on software development, database management, and web technologies",
                image: "/images/bca-class.jpg"
              },
              {
                icon: <FaChartLine className="text-4xl mb-4 text-indigo-600" />,
                title: "BBA (Bachelor of Business Administration)",
                description: "3-year program covering management principles, marketing, finance, and entrepreneurship",
                image: "/images/bba-class.jpg"
              },
              {
                icon: <MdComputer className="text-4xl mb-4 text-purple-600" />,
                title: "BSc IT (Bachelor of Science in Information Technology)",
                description: "3-year program emphasizing IT infrastructure, networking, and system administration",
                image: "/images/bscit-class.jpg"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 text-center">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Syllabus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaBook className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">University Syllabus Structure</h2>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="border-b border-gray-200">
                <div className="grid grid-cols-4 bg-gray-100 px-6 py-4 font-medium text-gray-700">
                  <div>Year</div>
                  <div className="col-span-3">Core Subjects (As per Patliputra University)</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  {
                    year: "BCA - Year 1",
                    subjects: [
                      "Computer Fundamentals and Office Automation",
                      "Programming Principles and Algorithms",
                      "Computer Organization and Architecture",
                      "Business Accounting",
                      "Mathematics-I",
                      "English Communication"
                    ]
                  },
                  {
                    year: "BCA - Year 2",
                    subjects: [
                      "Data Structures Using C",
                      "Database Management Systems",
                      "Operating Systems",
                      "Software Engineering",
                      "Web Technologies",
                      "Mathematics-II"
                    ]
                  },
                  {
                    year: "BBA - Year 1",
                    subjects: [
                      "Principles of Management",
                      "Business Economics",
                      "Financial Accounting",
                      "Business Mathematics",
                      "Business Communication",
                      "Computer Applications in Business"
                    ]
                  },
                  {
                    year: "BSc IT - Year 3",
                    subjects: [
                      "Network Security",
                      "Cloud Computing",
                      "Internet of Things",
                      "Project Work",
                      "Elective: AI/ML or Cyber Security"
                    ]
                  }
                ].map((year, index) => (
                  <div key={index} className="grid grid-cols-4 px-6 py-4 hover:bg-gray-50">
                    <div className="font-medium text-gray-800">{year.year}</div>
                    <div className="col-span-3 text-gray-600">
                      {year.subjects.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">Note on University Syllabus</h3>
                  <div className="mt-2 text-yellow-700">
                    <p>
                      The above represents a sample of core subjects. Complete syllabus documents are available with the academic office. 
                      University syllabus is revised every 3 years - current version implemented from 2022-23 academic session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Subjects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <GiTeacher className="text-green-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Value-Added Add-On Subjects</h2>
            </div>

            <p className="text-gray-600 mb-8">
              Our specially designed add-on courses complement the university syllabus and provide students with competitive edge in the job market
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "Technical Add-Ons (For BCA/BSc IT)",
                  courses: [
                    "Full Stack Development with MERN",
                    "Python for Data Science",
                    "Cloud Computing with AWS",
                    "Mobile App Development (Flutter)",
                    "UI/UX Design Principles",
                    "Cyber Security Fundamentals"
                  ],
                  icon: <FaLaptopCode className="text-green-600 text-2xl" />
                },
                {
                  title: "Business Add-Ons (For BBA)",
                  courses: [
                    "Digital Marketing Certification",
                    "Financial Modeling with Excel",
                    "Business Analytics with Power BI",
                    "Entrepreneurship Development",
                    "Advanced Excel for Managers",
                    "Stock Market Operations"
                  ],
                  icon: <FaChartLine className="text-green-600 text-2xl" />
                }
              ].map((category, index) => (
                <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.courses.map((course, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Add-On Program Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Industry Certification",
                    desc: "Earn verifiable certificates from tech partners"
                  },
                  {
                    title: "Project-Based Learning",
                    desc: "Hands-on training with real-world applications"
                  },
                  {
                    title: "Expert Faculty",
                    desc: "Taught by industry professionals"
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-600 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FaUserTie className="text-indigo-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold">Professional Development Program</h2>
            </div>

            <p className="text-gray-300 mb-8 max-w-3xl">
              Our comprehensive professional development modules prepare students for corporate success beyond academic knowledge
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Workshop Series",
                  icon: <MdOutlineWorkspaces className="text-3xl mb-3 text-indigo-400" />,
                  items: [
                    "Resume Building Workshop",
                    "LinkedIn Profile Optimization",
                    "Personal Branding",
                    "Mock Interview Sessions"
                  ]
                },
                {
                  title: "Public Speaking",
                  icon: <FaMicrophone className="text-3xl mb-3 text-indigo-400" />,
                  items: [
                    "Speech Preparation",
                    "Presentation Skills",
                    "Voice Modulation",
                    "Overcoming Stage Fear"
                  ]
                },
                {
                  title: "Group Discussions",
                  icon: <FaUsers className="text-3xl mb-3 text-indigo-400" />,
                  items: [
                    "GD Techniques",
                    "Current Affairs Preparation",
                    "Leadership in GD",
                    "Body Language"
                  ]
                },
                {
                  title: "Corporate Etiquette",
                  icon: <FaUserTie className="text-3xl mb-3 text-indigo-400" />,
                  items: [
                    "Business Communication",
                    "Email Etiquette",
                    "Meeting Protocols",
                    "Professional Attire"
                  ]
                }
              ].map((module, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                  <div className="flex justify-center mb-4">{module.icon}</div>
                  <h3 className="text-xl font-semibold text-center mb-4">{module.title}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {module.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-indigo-900/30 rounded-xl p-8 border border-indigo-800">
              <h3 className="text-xl font-semibold mb-4">Program Structure</h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                <div>
                  <h4 className="font-medium text-indigo-300 mb-2">Duration</h4>
                  <p>6 semesters (Integrated with regular curriculum)</p>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-300 mb-2">Certification</h4>
                  <p>CATALYST Professional Readiness Certificate</p>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-300 mb-2">Evaluation</h4>
                  <p>Practical assessments + Corporate panel interviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Syllabus Documents</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Download complete syllabus PDFs for each program with semester-wise breakdown
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow hover:shadow-md transition-all flex items-center">
              <FaBook className="mr-2" />
              BCA Syllabus
            </button>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow hover:shadow-md transition-all flex items-center">
              <FaChartLine className="mr-2" />
              BBA Syllabus
            </button>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow hover:shadow-md transition-all flex items-center">
              <MdComputer className="mr-2" />
              BSc IT Syllabus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurriculumPage;