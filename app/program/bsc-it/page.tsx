// app/bscit/page.tsx
import { fetchPageData } from '@/lib/useFetchData'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "BSc IT Program | Catalyst College Patna - Premier IT Education in Bihar",
  description: "3-year industry-focused BSc in Information Technology with specializations in Software Development, Data Science, and Cybersecurity. 94% placement record | PPU-affiliated | State-of-the-art labs",
  keywords: [
    "Best BSc IT College Patna",
    "BSc IT in Bihar",
    "Information Technology Degree Patna",
    "Catalyst College BSc IT",
    "Top IT College Bihar",
    "PPU affiliated BSc IT"
  ],
  openGraph: {
    title: "BSc IT Program | Catalyst College Patna",
    description: "Launch your tech career with Bihar's most practical IT degree program",
    images: [
      {
        url: "/images/bscit/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Catalyst College BSc IT Students",
      },
    ],
  },
}

let bscitProgram = {
    "page_name": "bsc-it",
    "admission": {
        "eligibility": [
            "10+2 with Mathematics as compulsory subject",
            "Minimum 50% marks in 12th standard",
            "Basic computer knowledge preferred",
            "No age restriction"
        ],
        "process": [
            {
                "step": "1. Online Application",
                "description": "Fill form at admissions.catalystcollege.in with ₹800 fee",
                "icon": "/svg/application.svg"
            },
            {
                "step": "2. Aptitude Test",
                "description": "Basic math and logical reasoning test (online/offline)",
                "icon": "/svg/test.svg"
            },
            {
                "step": "3. Counseling Session",
                "description": "Interactive session with faculty",
                "icon": "/svg/counseling.svg"
            },
            {
                "step": "4. Enrollment",
                "description": "Document verification and fee payment",
                "icon": "/svg/enrollment.svg"
            }
        ],
        "deadlines": {
            "Early Admission": "May 20, 2024",
            "Regular Admission": "June 30, 2024",
            "Late Admission": "July 25, 2024"
        }
    },
    "careers": {
        "roles": [
            "Software Developer",
            "IT Support Specialist",
            "Data Analyst",
            "Network Administrator",
            "Cybersecurity Analyst",
            "Database Administrator",
            "Web Developer",
            "Cloud Engineer"
        ],
        "placement": {
            "rate": "94%",
            "average": "₹3.8 LPA",
            "highest": "₹9.2 LPA",
            "companies": [
                "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753341/download_lptm8v.png",
                "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753202/download_dpcuui.png",
                "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753189/download_mjqx63.png",
                "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753151/download_cmf47v.png",
                "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753138/download_cjyies.jpg",
                "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753126/download_oyqbjr.png",
                "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753114/download_yrgmjz.png"
            ]
        },
        "internship": {
            "partners": [
                "PatnaTech Solutions",
                "Bihar IT Hub",
                "Digital Bihar Initiative",
                "Patna Smart City Project",
                "State Bank of India IT Division"
            ],
            "duration": "Minimum 8 weeks mandatory in 5th semester"
        }
    },
    "curriculum": {
        "structure": {
            "duration": "3 Years | 6 Semesters",
            "credits": "140 Credit Hours (PPU Pattern)",
            "pattern": "60% Practical | 40% Theory"
        },
        "coreSubjects": [
            "Programming Fundamentals",
            "Data Structures & Algorithms",
            "Computer Networks",
            "Database Management Systems",
            "Web Technologies",
            "Operating Systems",
            "Software Engineering",
            "Object-Oriented Programming",
            "Computer Organization",
            "Discrete Mathematics"
        ],
        "specializations": {
            "Software Development": [
                "Advanced Java/Python",
                "Mobile App Development",
                "DevOps Practices",
                "UI/UX Design",
                "Agile Methodologies"
            ],
            "Data Science": [
                "Python for Data Science",
                "Machine Learning Basics",
                "Big Data Analytics",
                "Data Visualization",
                "Statistical Methods"
            ],
            "Cybersecurity": [
                "Ethical Hacking",
                "Network Security",
                "Cyber Laws",
                "Digital Forensics",
                "Cryptography"
            ]
        },
        "labs": [
            "Cisco Networking Lab",
            "Software Development Lab",
            "Data Science Lab",
            "Cybersecurity Lab",
            "Cloud Computing Lab"
        ]
    },
    "facilities": {
        "labs": [
            {
                "name": "Cisco Networking Lab",
                "equipment": "20 Cisco routers/switches, Packet Tracer software",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752752131/download_xcegoa.jpg"
            },
            {
                "name": "Data Science Lab",
                "equipment": "High-performance workstations with Python/R, Tableau",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740814/487511434_1062197365936202_4767026600859138500_n_sconf7.jpg"
            }
        ],
        "library": {
            "volumes": "5000+ IT-specific books/journals",
            "digital": "Access to IEEE Xplore, ACM Digital Library"
        }
    },
    "faculty": [
        {
            "name": "Amit shukhla",
            "designation": "Professor & HOD (BCA)",
            "qualification": "PhD (Computer Science), IIT Patna",
            "expertise": "Software Engineering",
            "experience": "18 years",
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752744394/68fa36c2-de43-406c-b4bf-6466c2ed96ac.png"
        },
        {
            "name": "Murli Manohar",
            "designation": "Cyber Secutity Expert",
            "qualification": "MCA",
            "expertise": "Cloud Computing",
            "experience": "12 years industry experience",
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752746925/Murli-Sir_a6peoy.jpg"
        }
    ],
    "fees": {
        "structure": [
            {
                "item": "Tuition Fee",
                "amount": "₹60,000/year"
            },
            {
                "item": "Lab Fee",
                "amount": "₹10,000/year"
            },
            {
                "item": "Exam Fee",
                "amount": "₹3,500/semester"
            },
            {
                "item": "Industry Certification Fee",
                "amount": "₹5,000 (one-time)"
            }
        ],
        "scholarships": [
            {
                "name": "Bihar Student Credit Card",
                "amount": "Up to ₹4 lakhs"
            },
            {
                "name": "Tech Talent Scholarship",
                "amount": "25% fee waiver for coding competition winners"
            }
        ]
    },
    "herosection": {
        "imageURL": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752665750/power_bi_workshop_agtwqa.png"
    },
    "overview": {
        "title": "Bachelor of Science in Information Technology (BSc IT)",
        "intro": "Catalyst College Patna's BSc IT program equips students with cutting-edge technical skills through hands-on learning in our advanced labs and industry collaborations.",
        "highlights": [
            "PPU-affiliated 3-year degree program",
            "94% placement record in 2023",
            "Project-based learning approach",
            "Guaranteed industry internship",
            "Cisco Networking Academy partnered"
        ],
        "skills": [
            "Full-Stack Development",
            "Data Analysis & Visualization",
            "Cybersecurity Fundamentals",
            "Cloud Computing",
            "Database Management",
            "AI/ML Basics"
        ],
        "accreditation": "NAAC excellent Grade | Cisco Networking Academy | Microsoft Learn Partner"
    },
    "studentLife": {
        "clubs": [
            {
                "name": "Code Catalyst",
                "description": "Weekly coding challenges and hackathon preparation",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752747310/486678604_1059585816197357_640593102037474519_n_helyxg.jpg"
            },
            {
                "name": "Cyber Warriors",
                "description": "Cybersecurity competitions and CTF events",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752747260/d3f5cab9-1303-45d1-b76b-d13cd3445503.png"
            }
        ],
        "events": [
            {
                "name": "TechVista",
                "description": "Annual tech fest with 100+ participants from Bihar",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752747110/486057045_1056585686497370_2858634788722645153_n_boowwi.jpg"
            },
            {
                "name": "HackBihar",
                "description": "48-hour hackathon solving Bihar's digital challenges",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740409/485146986_1053170816838857_6978447644490651086_n_vuedb7.jpg"
            }
        ]
    },
    "whyChoose": {
        "title": "Why Choose Our BSc IT Program?",
        "features": [
            {
                "title": "Advanced Computing Labs",
                "description": "Access to specialized labs: Cisco Networking, AI/ML, Cybersecurity, and Software Development",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752827027/486300369_1055984116557527_4023767572347415079_n_h3ujez.jpg"
            },
            {
                "title": "Industry-Aligned Curriculum",
                "description": "Courses designed with Patna's IT companies like PatnaTech Solutions and Bihar IT Hub",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741171/487548216_1062974769191795_6092592449283881455_n_hpz3nv.jpg"
            },
            {
                "title": "Certification Integration",
                "description": "Earn professional certs in Cisco, Microsoft, AWS alongside your degree",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752751220/1750165678325_uwvafe.jpg"
            },
            {
                "title": "Startup Incubation",
                "description": "Dedicated support for student tech startups through Catalyst Tech Garage",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752751502/3843a019-baf0-40e0-97b4-f548462aacf7.png"
            },
            {
                "title": "Faculty Practitioners",
                "description": "Learn from professors with 10+ years experience at TCS, Infosys, and Patna-based IT firms",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740770/487872091_1062568942565711_1649777733350717587_n_l1whum.jpg"
            },
            {
                "title": "Hackathon Culture",
                "description": "Regular coding competitions with prizes from Bihar IT Association",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740814/487511434_1062197365936202_4767026600859138500_n_sconf7.jpg"
            }
        ]
    }
}


export default async function BScITPage() {
  const { data, error} = await fetchPageData("bsc-it")
bscitProgram = data as any ?? bscitProgram
  return (
    <div className="bg-white">
      {/* Hero Section with Tech Background */}
<div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
        </div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1200,0 L1200,600 Q600,300 0,600 Z"
              fill="white"
            ></path>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content section */}
            <div className="relative z-10">
              {/* Program badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
                <span className="text-blue-200 text-sm font-medium tracking-wider">
                  UNDERGRADUATE PROGRAM
                </span>
              </div>

              {/* Main heading with gradient text */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-200">
                  {bscitProgram.overview.title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
                {bscitProgram.overview.intro}
              </p>

              {/* Stats mockup */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">3</div>
                  <div className="text-sm text-blue-200">Years Duration</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-sm text-blue-200">Industry Projects</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">90%</div>
                  <div className="text-sm text-blue-200">Placement Rate</div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/register"
                  className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                >
                  Apply Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                <a
                  href="#curriculum"
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Curriculum
                </a>
              </div>
            </div>

            {/* Image section with floating elements */}
            <div className="relative h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group">
              {/* Main image */}
              <Image
                src={bscitProgram.herosection.imageURL}
                alt="Bsc-it students at computer lab"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
          <svg
            className="relative block w-full h-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="white"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="white"
              opacity=".5"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white shadow-lg -mt-10 mx-4 rounded-xl relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{bscitProgram.careers.placement.rate}</div>
            <div className="text-gray-600 mt-1">Placement Rate</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{bscitProgram.careers.placement.average}</div>
            <div className="text-gray-600 mt-1">Average Package</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">5</div>
            <div className="text-gray-600 mt-1">Specialized Labs</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600 mt-1">Industry Projects</div>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Program Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Building Bihar's Tech Talent
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Our BSc IT program combines theoretical foundations with hands-on technical training to create industry-ready IT professionals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bscitProgram.overview.highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-md">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{highlight}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-medium text-center text-gray-900 mb-6">Technical Skills You'll Master</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {bscitProgram.overview.skills.map((skill, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-xs border border-gray-200 text-center">
                  <p className="text-sm font-medium text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
        Why Our BSc IT?
      </span>
      <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Bihar's Most <span className="text-blue-600">Practical IT Education</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {bscitProgram.whyChoose.features.map((feature, index) => (
        <div 
          key={index} 
          className="group relative bg-white p-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
          {/* Image Container */}
          <div className="h-48 w-full overflow-hidden">
            <Image 
              src={feature.icon} 
              alt={feature.title}
              width={400}
              height={240}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Curriculum</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Industry-Relevant Tech Education
            </p>
            <div className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              <p>{bscitProgram.curriculum.structure.duration} • {bscitProgram.curriculum.structure.credits}</p>
              <p className="mt-2">{bscitProgram.curriculum.structure.pattern}</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Core Subjects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bscitProgram.curriculum.coreSubjects.map((subject, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-700">{subject}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Specializations</h3>
                <div className="space-y-6">
                  {Object.entries(bscitProgram.curriculum.specializations).map(([specialization, subjects]) => (
                    <div key={specialization} className="bg-white p-4 rounded-lg shadow-xs border border-gray-200">
                      <h4 className="text-lg font-medium text-blue-800">{specialization}</h4>
                      <ul className="mt-3 space-y-2">
                        {subjects.map((subject, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section id="labs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Facilities</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              State-of-the-Art Computing Labs
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {bscitProgram.facilities.labs.map((lab, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={lab.image}
                    alt={lab.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900">{lab.name}</h3>
                  <p className="mt-2 text-gray-600"><span className="font-medium">Equipment:</span> {lab.equipment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="admission" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Admission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Join Our BSc IT Program
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Eligibility Criteria</h3>
              <ul className="space-y-4">
                {bscitProgram.admission.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-green-500">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Important Dates</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <ul className="space-y-4">
                    {Object.entries(bscitProgram.admission.deadlines).map(([phase, date]) => (
                      <li key={phase} className="flex justify-between border-b pb-3">
                        <span className="font-medium text-gray-700">{phase}</span>
                        <span className="text-gray-600">{date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Admission Process</h3>
              <div className="space-y-8">
                {bscitProgram.admission.process.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-800 font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{step.step}</h4>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/register"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Begin Your Application
            </a>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Careers</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Your Future in Technology
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Career Paths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bscitProgram.careers.roles.map((role, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium text-gray-800">{role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Placement Highlights</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-800">{bscitProgram.careers.placement.rate}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600">Placement Rate</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-800">{bscitProgram.careers.placement.average}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600">Average Package</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-800">{bscitProgram.careers.placement.highest}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600">Highest Package</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Our Top Recruiters</h4>
                    <div className="flex flex-wrap justify-center gap-6">
                      {bscitProgram.careers.placement.companies.map((logo, index) => (
                        <div key={index} className="h-12 w-auto">
                          <Image
                            src={logo}
                            alt="Recruiter logo"
                            width={100}
                            height={48}
                            className="h-full w-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Faculty</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Learn From Tech Experts
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {bscitProgram.faculty.map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900">{faculty.name}</h3>
                  <p className="text-blue-600">{faculty.designation}</p>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Qualification:</span> {faculty.qualification}</p>
                    <p><span className="font-medium">Expertise:</span> {faculty.expertise}</p>
                    <p><span className="font-medium">Experience:</span> {faculty.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Student Life</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Beyond Coding
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Tech Clubs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bscitProgram.studentLife.clubs.map((club, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={club.image}
                      alt={club.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-medium text-gray-900">{club.name}</h4>
                    <p className="mt-2 text-gray-600">{club.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Annual Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bscitProgram.studentLife.events.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-medium text-gray-900">{event.name}</h4>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Scholarships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Financials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Fees & Scholarships
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Fee Structure</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <ul className="space-y-4">
                  {bscitProgram.fees.structure.map((fee, index) => (
                    <li key={index} className="flex justify-between border-b pb-3">
                      <span className="font-medium text-gray-700">{fee.item}</span>
                      <span className="text-gray-600">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Scholarships</h3>
              <div className="space-y-4">
                {bscitProgram.fees.scholarships.map((scholarship, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-medium text-blue-800">{scholarship.name}</h4>
                    <p className="mt-2 text-gray-600">Amount: {scholarship.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Launch Your Tech Career?
          </h2>
          <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
            Join Bihar's most practical IT degree program at Catalyst College Patna
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/register"
              className="px-6 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-100"
            >
              Apply Now
            </a>
            <a
              href="#"
              className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-800"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}