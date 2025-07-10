
import HeroSection from '@/components/newHeroImageForAllPage';
import { FaChalkboardTeacher, FaCertificate, FaLaptopCode, FaChartLine, FaUsers, FaClipboardCheck } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineWorkspaces, MdOutlineFeedback } from 'react-icons/md';

const ValueAddedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Python for Data Science",
      department: "CSE",
      duration: "30 Hours",
      conductedBy: "Industry Expert (Infosys)",
      year: "2023-24",
      beneficiaries: 80,
      description: "Comprehensive training in Python programming, data analysis, and visualization using Pandas, NumPy, and Matplotlib.",
      mode: "Hybrid (Online lectures + Lab sessions)",
      certification: "Infosys Certified Python Programmer",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Embedded Systems with IoT",
      department: "ECE",
      duration: "40 Hours",
      conductedBy: "Internal + Guest Faculty",
      year: "2023-24",
      beneficiaries: 45,
      description: "Hands-on training with Arduino, Raspberry Pi, and IoT protocols for smart device development.",
      mode: "Offline Workshops",
      certification: "Department Certificate with Industry Recognition",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Communication Skills & Interview Prep",
      department: "All Departments",
      duration: "20 Hours",
      conductedBy: "Soft Skills Trainer",
      year: "2022-23",
      beneficiaries: 120,
      description: "Developing effective communication, resume building, and mock interview sessions with industry HR professionals.",
      mode: "Online + In-person Mock Interviews",
      certification: "Soft Skills Certification",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const stats = [
    { value: "12+", label: "Courses Offered", icon: <FaChalkboardTeacher className="text-3xl" /> },
    { value: "500+", label: "Students Benefited", icon: <FaUsers className="text-3xl" /> },
    { value: "80%", label: "Placement Improvement", icon: <FaChartLine className="text-3xl" /> },
    { value: "100%", label: "Certification Rate", icon: <FaCertificate className="text-3xl" /> }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Value-Added Courses"
        description="Enhancing technical, professional, and interpersonal skills beyond the regular curriculum"
        imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        overlayOpacity={0.6}
        height="lg"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Bridging the Skill Gap</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our Value-Added Courses (VAC) are specifically designed to enhance students' technical, professional, and interpersonal skills, 
              preparing them for industry requirements and career advancement. These courses complement the regular curriculum by focusing 
              on emerging technologies and essential soft skills.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 inline-block">
              <p className="text-blue-800 font-medium">
                In 2023-24, we conducted {courses.length} value-added courses benefiting {courses.reduce((acc, course) => acc + course.beneficiaries, 0)} students across departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-indigo-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <GiSkills className="text-green-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Value-Added Courses</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive skill development programs conducted by industry experts and faculty
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">S.No</th>
                  <th className="py-3 px-4 text-left">Course Title</th>
                  <th className="py-3 px-4 text-left">Department</th>
                  <th className="py-3 px-4 text-left">Duration</th>
                  <th className="py-3 px-4 text-left">Conducted By</th>
                  <th className="py-3 px-4 text-left">Year</th>
                  <th className="py-3 px-4 text-left">Students</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {courses.map((course, index) => (
                  <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">{index + 1}</td>
                    <td className="py-4 px-4 font-medium text-gray-800">{course.title}</td>
                    <td className="py-4 px-4">{course.department}</td>
                    <td className="py-4 px-4">{course.duration}</td>
                    <td className="py-4 px-4">{course.conductedBy}</td>
                    <td className="py-4 px-4">{course.year}</td>
                    <td className="py-4 px-4">{course.beneficiaries}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaLaptopCode className="text-purple-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Course Highlights</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed overview of our flagship value-added courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">{course.department}</span>
                    <span>{course.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="flex items-start mb-3">
                      <MdOutlineWorkspaces className="text-gray-400 mt-1 mr-2" />
                      <span className="text-gray-700"><strong>Mode:</strong> {course.mode}</span>
                    </div>
                    <div className="flex items-start">
                      <FaCertificate className="text-gray-400 mt-1 mr-2" />
                      <span className="text-gray-700"><strong>Certification:</strong> {course.certification}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Assessment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <img 
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Workshop session"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <MdOutlineWorkspaces className="text-yellow-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Delivery & Assessment</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Mode of Delivery</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Hybrid model (Online + Offline)</li>
                    <li>Hands-on workshops and labs</li>
                    <li>Industry expert-led sessions</li>
                    <li>Learning Management System (LMS) support</li>
                    <li>Project-based learning approach</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Assessment & Feedback</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Practical assignments and mini-projects</li>
                    <li>Final project evaluation with rubrics</li>
                    <li>Continuous feedback mechanism</li>
                    <li>Post-course satisfaction surveys</li>
                    <li>Industry mentor evaluations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <FaCertificate className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold">Industry-Recognized Certification</h2>
              </div>
              
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                All our value-added courses provide certification that is recognized by industry partners. These certificates validate the skills acquired and enhance students' employability.
              </p>
              
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>Course completion certificates issued by the institution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>Joint certification with industry partners where applicable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>Digital badges for online verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">✓</span>
                  <span>Detailed skill mapping in certificates</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 lg:pl-12 flex justify-center">
              <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Sample Certificate"
                  className="rounded-lg border-2 border-gray-200"
                />
                <p className="text-center text-gray-600 mt-4">Sample Industry-Recognized Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <MdOutlineFeedback className="text-red-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Learning in Action</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Glimpses from our value-added course sessions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={`https://source.unsplash.com/random/600x600/?workshop,training,education,${item}`}
                  alt={`Session ${item}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValueAddedCourses;