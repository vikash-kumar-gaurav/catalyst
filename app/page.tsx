"use client"
import React, { useState } from 'react';
import BentoGrid from '@/components/BentoGrid';
import StudentForm from '@/components/RegistrationForm';
import { FaChartLine, FaFlask, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const events = [
  // 20+ image objects
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/496844807_24184237454514598_1691096236981329380_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=azZoqShU12MQ7kNvwHgXwPj&_nc_oc=AdkScE9o2UtIUn-PeTB1rhCL2YsRBSOQuFeZ_0wMjXKRbazbnC0AlXhBCjqv8cx3Jp0&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=Hex35g08yO53FaH65aWCrw&oh=00_AfTROWb_LRoTql2UigYLZxiFvdqr4Qnw_ZG7NFHsLNcsOQ&oe=68717D4F',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/495366607_24184235541181456_4001701579454790737_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cruM3z6XJ-UQ7kNvwEudn_h&_nc_oc=AdlYSJtE6DzVwoIC39E42ms1K_eVWeS065DjJgv0GHEg07e0OB7D03kCTZdZ7K6CeeM&_nc_zt=23&_nc_ht=scontent-del1-2.xx&_nc_gid=mHDlXdGO-OWS1wn7w4GMDw&oh=00_AfS9fc20F0fYtcQxnHqTpevNsy5swOJZCFBe2vJAQTUA9Q&oe=68717609',
    alt: 'Holi Festival',
    tag: 'Tech Fest',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/488886299_1064930345662904_4568816821473952557_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XxgfGpSK4wcQ7kNvwHfgloR&_nc_oc=AdmdzhKwB21HDTx_9SNAQuMtyOA9jlhCNk6Gea8adyXqJUM-B2UdXAeSiVd_v6uVH4w&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=P7otuP4l52RZVSa_e9btxw&oh=00_AfTKWidT17P0yqk1qnFxqiLsJV7x67Qxpx_ZIpdIKo6KXA&oe=68717908',
    alt: 'Holi Festival',
    tag: 'Misister Meet',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/487548214_1064929942329611_6111595072781720104_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X0CKdQPjT1EQ7kNvwHUN6Pf&_nc_oc=Adk3I2ZtR7rX0qQzJ-w4SVl9h1VjYMNS6XaZcSJsmRSDw1vjV7f38TiSRmwbyfwZWx8&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=Olce35jfXBYIQXJj6YN5vw&oh=00_AfT7kk4MqWNnEj8342fZhfMkF2tTerrQK4p83bfdqEeuUQ&oe=68715C14',
    alt: 'Holi Festival',
    tag: 'Krititirth yatrea',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/67983657_2658493784182276_6888045657702006784_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HFQMOaik5fkQ7kNvwEQPlSF&_nc_oc=AdndoU1Y_9KvLcErhFS1T0V1WMXH3CcP8Kvfkh3Hcd0g4RZiiLAS2t_L8WQB0V9B1mM&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=x6oFKcX0CdKpLEUUjhxLzQ&oh=00_AfRpIhhxYJ8VVnhlvXLixnqjD4GIg_Yl21I_u9I_4TK7Yg&oe=689300E8',
    alt: 'Holi Festival',
    tag: 'Mumbai Tech',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/485734238_1052423500246922_2889030121503606787_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=G_0GdeDpqAUQ7kNvwFEynq-&_nc_oc=Adlz5yg-fL4Y0FeVDAAd8FjO4TD_pPBt7lxTT9SX5M5iNbjbVsi06vN1_g89Ki4u0Ic&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=pcqmoIwYLxU1qFVz-7abOw&oh=00_AfQTRVmmn3SZKP_h16WDuWq0aOhgs0iOK_uFYBnDErafRQ&oe=687153E8',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/484497461_1052423423580263_794801896446851540_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AwvlDsrfxNMQ7kNvwFPXoR5&_nc_oc=AdmVysD1IWxq7vYtBbDPbumcEcVXyWr0McUBqCltidDiNLEM5ztPtMOSWMzO9tZwXD4&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=GAcPdPA6zpctfYkDMlFvIQ&oh=00_AfQHK-QzxSY-13G4iNwMy6T0lBKbnPO9SDFo25PTG727xQ&oe=68716990',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/495019092_24100199769585034_2116387603322275259_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FPwl5pv1GFwQ7kNvwFB7H0p&_nc_oc=AdkFZQyfW6F36IQPvP6C2UWyYKR0531nJGuSEfd_xBAdo1VtvsCNDVG4B7gT4scPdb8&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=h_4oD-D7GQBlJsBXoD42zA&oh=00_AfSVm_38HlZRWs_0Yqz4Ya0l7ktns7PdNg6mZ9JUZbsG_g&oe=68714F02',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/488180962_1064929998996272_167265621417818682_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jY9arDewmu8Q7kNvwGVS8B1&_nc_oc=Adl1MZHkc_1wCkPzjJlmouJDEc4hQuDVsqI_nCWGUBD3S2NbiRCyWtf8t12JnQgDIyY&_nc_zt=23&_nc_ht=scontent-del1-2.xx&_nc_gid=CbxbkDPrGJWbn3JVlC2abg&oh=00_AfS8sR9j9NUTZxVhsFixq8XkSn3F0dRTjJRPozHWe4f1SA&oe=68716F38',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },

  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/494811143_24184251007846576_4776582752710620433_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mGQBiBOkq0sQ7kNvwE5SClL&_nc_oc=Adn6dLLd8-p82dm9DXVQFXZZn8PUM3V7ABmotslT9sa2YGFM7dgfTl8aXgyLzGD49X4&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=x6oFKcX0CdKpLEUUjhxLzQ&oh=00_AfR5OMoFqDMldZth6CL8mAu_vLPUMLBDkxKJeQq6shJqww&oe=68717D79',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-2.xx.fbcdn.net/v/t39.30808-6/495413158_24098316586440019_7539199045285954506_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gjLemwDmgRgQ7kNvwG5v3Xr&_nc_oc=AdlYHIxVZ00FGC3QnQa7hNVbf1VqJqeIZOmE3TayODKVyC-RAoqj7rDgw8fqurBkFqk&_nc_zt=23&_nc_ht=scontent-del2-2.xx&_nc_gid=OlYOlncUe6TqcPC4kndc0A&oh=00_AfT3DSxiR0uvg6XzxaNTcMjXfUEd62sYBeuFKNL9wmsxqg&oe=6871720E',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/485655690_1053918783430727_3189819062832752514_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XTZrd4S2PMsQ7kNvwHqaW4J&_nc_oc=AdmjJt95IBzUzj_chkRVFwTa6V2_yxwAFGpKa67zLmfnUPK4KtSVZcT5ZvNtBHU5NdM&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=8z6BomvzFBMdiYxsfYCEfA&oh=00_AfTXKB7hB-Dbt7Ipbjn2YjlU6Y7R1yEWTzvibkMUyEwGfA&oe=687179F7',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/491332251_23964222309849448_4422110462937725377_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QET0uuS-beEQ7kNvwGTjKp8&_nc_oc=AdnWwEsDJOu09GKantf-S9Naiy-BGlZ8W2b4stqbQg-3XoPhlZ0cFDccaIsJSWhvcE4&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=mWGiLvDqXlUa_0P6_Mqu4A&oh=00_AfQVZ5m3le59IN6r4hjSRTFwhkM-f0wSx87otQaorTycOg&oe=687160B5',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/490778149_23964222153182797_5441650466363907850_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=60OYf9DFA8kQ7kNvwHoSyKX&_nc_oc=AdmkVjdqWgQ7kCJsVNFFXvFpTQnkVL5V9VT8R55yHe19MFP0ZZqYZgLtHSkf61LnyYg&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=mWGiLvDqXlUa_0P6_Mqu4A&oh=00_AfQ4y-GtMNiEt1ZcJtAV21zRsGoWbHPmhEOll5auHsN9rQ&oe=68714EB5',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/490778149_23964222153182797_5441650466363907850_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=60OYf9DFA8kQ7kNvwHoSyKX&_nc_oc=AdmkVjdqWgQ7kCJsVNFFXvFpTQnkVL5V9VT8R55yHe19MFP0ZZqYZgLtHSkf61LnyYg&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=mWGiLvDqXlUa_0P6_Mqu4A&oh=00_AfQ4y-GtMNiEt1ZcJtAV21zRsGoWbHPmhEOll5auHsN9rQ&oe=68714EB5',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/490778149_23964222153182797_5441650466363907850_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=60OYf9DFA8kQ7kNvwHoSyKX&_nc_oc=AdmkVjdqWgQ7kCJsVNFFXvFpTQnkVL5V9VT8R55yHe19MFP0ZZqYZgLtHSkf61LnyYg&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=mWGiLvDqXlUa_0P6_Mqu4A&oh=00_AfQ4y-GtMNiEt1ZcJtAV21zRsGoWbHPmhEOll5auHsN9rQ&oe=68714EB5',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/490778149_23964222153182797_5441650466363907850_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=60OYf9DFA8kQ7kNvwHoSyKX&_nc_oc=AdmkVjdqWgQ7kCJsVNFFXvFpTQnkVL5V9VT8R55yHe19MFP0ZZqYZgLtHSkf61LnyYg&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=mWGiLvDqXlUa_0P6_Mqu4A&oh=00_AfQ4y-GtMNiEt1ZcJtAV21zRsGoWbHPmhEOll5auHsN9rQ&oe=68714EB5',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/490778149_23964222153182797_5441650466363907850_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=60OYf9DFA8kQ7kNvwHoSyKX&_nc_oc=AdmkVjdqWgQ7kCJsVNFFXvFpTQnkVL5V9VT8R55yHe19MFP0ZZqYZgLtHSkf61LnyYg&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=mWGiLvDqXlUa_0P6_Mqu4A&oh=00_AfQ4y-GtMNiEt1ZcJtAV21zRsGoWbHPmhEOll5auHsN9rQ&oe=68714EB5',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },


];
const courses = [
  {
    title: "Bachelor of Business Administration (BBA)",
    icon: <FaChartLine className="text-3xl text-blue-600" />,
    description: "Develop business acumen and leadership skills with our comprehensive BBA program that prepares you for the corporate world.",
    highlights: [
      "3-year undergraduate program",
      "Specializations in Marketing, Finance, HR",
      "Industry-relevant curriculum"
    ]
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    icon: <FaLaptopCode className="text-3xl text-green-600" />,
    description: "Master software development and computer applications with hands-on training in modern programming languages and technologies.",
    highlights: [
      "Focus on practical coding skills",
      "Latest technologies and frameworks",
      "Strong industry partnerships"
    ]
  },
  {
    title: "Bachelor of Science in IT (BSc IT)",
    icon: <FaFlask className="text-3xl text-purple-600" />,
    description: "Combine theoretical knowledge with practical IT skills in this program designed for the digital age.",
    highlights: [
      "Comprehensive IT foundation",
      "Emerging technologies focus",
      "Research-oriented approach"
    ]
  }
];

type ProgramType = 'workshop' | 'internship';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  type: ProgramType;
  duration: string;
  details: string[];
}

const programs: Program[] = [
  {
    id: '1',
    title: 'UX Design Masterclass',
    description: 'Learn industry-standard UX design principles and tools in this intensive workshop',
    image: '/ux-workshop.jpg',
    type: 'workshop',
    duration: '2 Days',
    details: [
      'Hands-on design exercises',
      'Figma and Adobe XD training',
      'Portfolio project included',
      'Certificate of completion'
    ]
  },
  {
    id: '2',
    title: 'Data Science Internship',
    description: 'Real-world data analysis experience with our industry partners',
    image: '/data-science.jpg',
    type: 'internship',
    duration: '3 Months',
    details: [
      'Work on live projects',
      'Mentorship from senior data scientists',
      'Python and R training',
      'Letter of recommendation'
    ]
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Build full-stack applications using modern JavaScript frameworks',
    image: '/web-dev.jpg',
    type: 'workshop',
    duration: '4 Weeks',
    details: [
      'React and Node.js curriculum',
      'Daily coding challenges',
      'Final capstone project',
      'Career support included'
    ]
  }
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'workshops' | 'internships'>('all');

  const filteredPrograms = programs.filter(program => {
    if (activeTab === 'all') return true;
    if (activeTab === 'workshops') return program.type === 'workshop';
    if (activeTab === 'internships') return program.type === 'internship';
    return false;
  });

  return (
    <div className="py-12 bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* --------------------hero Image section---------------------------- */}
      <section>

      </section>
        {/* --------------------glallery section -------------------- */}
        <section>
          <div className="w-full">
            <h1 className="text-4xl font-bold text-center mb-12">Cimage at a Glance</h1>
            <BentoGrid images={events} />
          </div>
        </section>
        {/* ---------course details-------------- */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <FaGraduationCap className="text-4xl text-blue-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Undergraduate Programs</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover programs designed to launch your career with industry-relevant skills and knowledge
              </p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-50 rounded-lg mr-4">
                        {course.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <ul className="space-y-2 mb-6">
                      {course.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Full Details Link */}
            <div className="text-center">
              <Link href="/courses" legacyBehavior>
                <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                  Explore All Courses
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* --------------workshops and internships----------------- */}

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                Hands-On Learning
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Transform Knowledge <span className="text-blue-600">Into Experience</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Accelerate your career with our immersive workshops and industry-aligned internships
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
                  {(['all', 'workshops', 'internships'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                        }`}
                    >
                      {tab === 'all' ? 'All Programs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map((program) => (
                  <div
                    key={program.id}
                    className="group relative h-full rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div
                      className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold ${program.type === 'internship' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}
                    >
                      {program.type === 'internship' ? 'Internship' : 'Workshop'}
                    </div>

                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">{program.title}</h3>
                        <p className="text-blue-200 font-medium">{program.duration}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-600 mb-5">{program.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <svg
                            className="w-5 h-5 text-blue-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {program.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all flex items-center justify-center">
                        {program.type === 'internship' ? 'Apply Now' : 'Register'}
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                  Explore All Workshops
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                  Internship Opportunities
                  <svg
                    className="w-5 h-5 ml-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
              </div>

              <p className="mt-8 text-gray-500">Partnered with 120+ leading companies worldwide</p>
              <div className="flex justify-center mt-6 space-x-8 opacity-70">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-10 w-20 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <StudentForm />

      </div>
    );
  }