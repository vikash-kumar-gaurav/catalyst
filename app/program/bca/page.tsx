
import YoutubePlayer from '@/components/VideoPlayer'
import { fetchPageData } from '@/lib/useFetchData'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "BCA Program | Catalyst College Patna - Premier Computer Application Degree in Bihar",
  description: "3-year industry-focused BCA program with specializations in Software Development, Cloud Computing, and AI Fundamentals. 95% placement record | PPU-affiliated | State-of-the-art computer labs",
  keywords: [
    "Best BCA College Patna",
    "BCA in Bihar",
    "Computer Applications Degree Patna",
    "Catalyst College BCA",
    "Top BCA College Bihar",
    " affiliated BCA",
    "BCA with placement guarantee",
    "BCA admission 2024",
    "BCA syllabus and subjects",
    "BCA course details",
    "BCA after 12th",
    "BCA jobs in Patna",
    "BCA internship opportunities",
    "BCA programming courses",
    "BCA vs B.Tech",
    "BCA fee structure",
    "BCA scholarship Bihar",
    "BCA project ideas",
    "BCA placement companies"
  ],
  openGraph: {
    title: "BCA Program | Catalyst College Patna",
    description: "Launch your IT career with Bihar's most practical computer applications degree",
    url: "https://catalystcollegepatna.edu.in/bca",
    type: "website",
    locale: "en_IN",
    siteName: "Catalyst College Patna",
    images: [
      {
        url: "/images/bca/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BCA students at Catalyst College Patna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BCA Program | Catalyst College Patna",
    description: "Bihar's premier BCA program with 95% placement record",
    images: ["https://catalystcollegepatna.edu.in/images/bca/og-image.jpg"]
  },
  alternates: {
    canonical: "https://catalystcollegepatna.edu.in/bca"
  }
}

let bcaProgram ={
    "page_name": "bca",
    "admission": {
        "eligibility": [
            "10+2 from any stream with Mathematics/Computer Science",
            "Minimum 50% marks in 12th standard",
            "Basic computer literacy preferred",
            "No age restriction"
        ],
        "process": [
            {
                "step": "1. Online Application",
                "description": "Submit form at admissions.catalystcollege.edu.in with ₹500 fee"
            },
            {
                "step": "2. Basic Aptitude Test",
                "description": "Logical reasoning and math test (online/offline option)"
            },
            {
                "step": "3. Personal Interaction",
                "description": "Faculty interview to assess interest in computing"
            },
            {
                "step": "4. Enrollment",
                "description": "Document verification and first semester fee payment"
            }
        ],
        "deadlines": {
            "Early Bird": "May 15, 2024",
            "Regular": "June 30, 2024",
            "Extended": "July 31, 2024"
        },
        "documents": [
            "10th & 12th original marksheets",
            "Transfer Certificate",
            "Caste Certificate (if applicable)",
            "Passport photos (4 copies)",
            "Aadhar Card copy"
        ]
    },
    "careers": {
        "roles": [
            "Software Developer",
            "Web Developer",
            "System Analyst",
            "Database Administrator",
            "Cloud Support Associate",
            "IT Consultant",
            "Quality Analyst",
            "Technical Writer"
        ],
        "placement": {
            "rate": "95%",
            "average": "₹4 LPA",
            "highest": "₹8.9 LPA",
            "companies": [
                "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
                "https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/media-kit/tcs-light-logo.png",
                "https://www.wipro.com/content/dam/wipro/social-icons/wipro_new_logo.svg",
                "https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/images/maruti/marutisuzuki/global/maruti-logo.webp?h=39&w=194&la=en&hash=A8D386DD695C25850B9EE818532657AC",
                "https://e7.pngegg.com/pngimages/892/32/png-clipart-icici-bank-logo-bank-logos-thumbnail.png"
            ]
        },
        "internship": {
            "partners": [
                "PatnaTech Solutions",
                "Digital Bihar Initiative",
                "Bihar Startup Network",
                "State Bank IT Division",
                "Patna Smart City Project"
            ],
            "duration": "Minimum 6 weeks mandatory in 5th semester"
        }
    },
    "curriculum": {
        "structure": {
            "duration": "3 Years | 6 Semesters",
            "credits": "144 Credit Hours (PPU Pattern)",
            "pattern": "70% Practical | 30% Theory"
        },
        "coreSubjects": [
            "Programming in C",
            "Data Structures using C++",
            "Database Management Systems",
            "Operating Systems",
            "Computer Networks",
            "Web Technologies",
            "Software Engineering",
            "Java Programming",
            "Python for Applications",
            "Discrete Mathematics",
            "Computer Organization and Architecture",
            "Object-Oriented Programming (OOP)",
            "Design and Analysis of Algorithms",
            "Cloud Computing",
            "Mobile Application Development",
            "Artificial Intelligence and Machine Learning",
            "Cyber Security and Ethical Hacking",
            "Theory of Computation",
            "Data Warehousing and Data Mining",
            "Big Data Analytics",
            "Internet of Things (IoT)",
            "Business Intelligence",
            "Computer Graphics and Multimedia"
        ],
        "specializations": {
            "Software Development": [
                "Advanced Java Technologies",
                "Python Frameworks (Django/Flask)",
                "Mobile App Development",
                "DevOps Fundamentals",
                "Microservices Architecture"
            ],
            "Cloud Computing": [
                "AWS Cloud Essentials",
                "Microsoft Azure Fundamentals",
                "Cloud Security",
                "Serverless Computing",
                "Containerization with Docker"
            ],
            "AI Fundamentals": [
                "Python for AI/ML",
                "Machine Learning Basics",
                "Natural Language Processing",
                "Computer Vision Fundamentals",
                "AI Ethics and Governance"
            ]
        },
        "labs": [
            {
                "name": "Advanced Programming Lab",
                "equipment": "50+ high-end workstations with VS Code, IntelliJ, PyCharm",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752748006/486081166_1055984106557528_2486189336089163725_n_k0b9yp.jpg"
            },
            {
                "name": "Cloud Computing Lab",
                "equipment": "AWS/Azure sandbox accounts, Cloud simulation tools",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752748121/rackspace-open-compute-logo-bw_iaejor.jpg"
            }
        ]
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
                "amount": "₹58,000/year"
            },
            {
                "item": "Lab Fee",
                "amount": "₹12,000/year"
            },
            {
                "item": "Exam Fee",
                "amount": "₹3,500/semester"
            },
            {
                "item": "Development Kit",
                "amount": "₹8,000 (one-time)"
            }
        ],
        "scholarships": [
            {
                "name": "Bihar Student Credit Card",
                "amount": "Up to ₹4 lakhs"
            },
            {
                "name": "Tech Genius Scholarship",
                "amount": "30% fee waiver for programming competition winners"
            },
            {
                "name": "Girls in Tech Scholarship",
                "amount": "25% fee waiver for female students"
            }
        ]
    },
    "overview": {
        "title": "Bachelor of Computer Applications (BCA)",
        "intro": "Catalyst College Patna's BCA program bridges the gap between academic learning and industry requirements through intensive practical training and project-based learning.",
        "highlights": [
            "PPU-affiliated 3-year degree program",
            "95% placement record in 2023",
            "1000+ hours of practical coding",
            "Mandatory industry internship",
            "AWS Educate Cloud Computing Program"
        ],
        "skills": [
            "Full-Stack Development",
            "Database Management",
            "Object-Oriented Programming",
            "Web & Mobile App Development",
            "Cloud Computing Basics",
            "Software Engineering Principles"
        ],
        "accreditation": "NAAC excellent Grade | AWS Educate Member | Microsoft Learn Partner"
    },
    "studentLife": {
        "clubs": [
            {
                "name": "CodeChef Chapter",
                "description": "Competitive programming club with weekly contests",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752747310/486678604_1059585816197357_640593102037474519_n_helyxg.jpg"
            },
            {
                "name": "Web Wizards",
                "description": "Frontend development and design collective",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752747260/d3f5cab9-1303-45d1-b76b-d13cd3445503.png"
            }
        ],
        "events": [
            {
                "name": "BootCamps",
                "description": "Monthly coding festival with 1000 colleges participating",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752747110/486057045_1056585686497370_2858634788722645153_n_boowwi.jpg"
            },
            {
                "name": "Code Combat",
                "description": "8-hour hackathon solving local community problems",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740409/485146986_1053170816838857_6978447644490651086_n_vuedb7.jpg"
            }
        ]
    },
    "whyChoose": {
        "title": "Why Catalyst College for BCA?",
        "features": [
            {
                "title": "Industry-Ready Curriculum",
                "description": "Updated annually with inputs from Patna IT companies and alumni working in MNCs",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752665750/power_bi_workshop_agtwqa.png"
            },
            {
                "title": "Coding Intensive",
                "description": "150+ programming assignments across 6 semesters with code reviews",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740814/487511434_1062197365936202_4767026600859138500_n_sconf7.jpg"
            },
            {
                "title": "Project-Based Learning",
                "description": "Build 10+ real-world projects including a final year software product",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741088/486592318_1058965042926101_237695966334437774_n_fhh3p6.jpg"
            },
            {
                "title": "Certification Integration",
                "description": "Earn AWS Cloud, Microsoft Azure, and Oracle certifications alongside degree",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752746556/481173779_9865881320110117_613508857674207901_n_z2gp41.jpg"
            },
            {
                "title": "Startup Support",
                "description": "Seed funding up to ₹2 lakhs for student software startups",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752745794/5fbc02e8-8fdd-40b2-8549-5f5ba7299e5c.png"
            },
            {
                "title": "Hackathon Culture",
                "description": "Regular coding competitions with Bihar IT Association",
                "icon": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740409/485146986_1053170816838857_6978447644490651086_n_vuedb7.jpg"
            }
        ]
    },
    "youtubeVideos": [
        {
            "id": "eLguMx7KLNc",
            "title": "Why to choose CIMAGE College| Best BCA College, Patna"
        },
        {
            "id": "rO7Vi_94g0Q",
            "title": "CIMAGE Campus Tour | Campus Reel | Futuristic College"
        },
        {
            "id": "mepCtekz-sI",
            "title": "CIMAGE PATNA is live"
        },
        {
            "id": "g8GRsU84qJc",
            "title": "Process, Courses & Guidance by Prof. Neeraj Poddar"
        },
        {
            "id": "xsMbNI11SyE",
            "title": "Best BCA College in Patna | Reality of CIMAGE"
        },
        {
            "id": "nmPNN0MiAAE",
            "title": "CIMAGE Campus Tour | College Vlog Made by Students"
        },
        {
            "id": "Yi7LgIBYE6Q",
            "title": "CIMAGE College Vlog"
        }
    ],
    "heroImage": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740866/486615226_1058967089592563_3517955570577837187_n_fjsbul.jpg",
    "youtubeDescription": "view our accademic taily routine ",
    "youtubetitle": "out youtube videos"
}



export default async function BCAPage() {

const { data, error } = await fetchPageData("bca");
bcaProgram = data as any ?? bcaProgram
  return (
    <div className="bg-white">

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

        <div className="relative max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:pt-12 lg:pb-18">
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
                  {bcaProgram.overview.title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
                {bcaProgram.overview.intro}
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
                src={bcaProgram.heroImage}
                alt="BCA students at computer lab"
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
            <div className="text-3xl font-bold text-blue-600">{bcaProgram.careers.placement.rate}</div>
            <div className="text-gray-600 mt-1">Placement Rate</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{bcaProgram.careers.placement.average}</div>
            <div className="text-gray-600 mt-1">Average Package</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">1000+</div>
            <div className="text-gray-600 mt-1">Coding Hours</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">3</div>
            <div className="text-gray-600 mt-1">Specializations</div>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Program Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Building Software Professionals
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Our BCA program combines computer science fundamentals with intensive application development training.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bcaProgram.overview.highlights.map((highlight, index) => (
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center ">
              {bcaProgram.overview.skills.map((skill, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-xs border border-gray-200 text-center">
                  <p className="text-sm font-medium text-gray-700 min-h-12 flex items-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Catalyst College?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Bihar's Premier BCA Program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {bcaProgram.whyChoose.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Container - Larger and full-width */}
                <div className="h-60 w-full overflow-hidden">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ----adding the youtube videos --------- */}
      <YoutubePlayer title={bcaProgram.youtubetitle} description={bcaProgram.youtubeDescription} videos={bcaProgram.youtubeVideos} />
      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Curriculum</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive IT Education
            </p>
            <div className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              <p>{bcaProgram.curriculum.structure.duration} • {bcaProgram.curriculum.structure.credits}</p>
              <p className="mt-2">{bcaProgram.curriculum.structure.pattern}</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Core Subjects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bcaProgram.curriculum.coreSubjects.map((subject, index) => (
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
                  {Object.entries(bcaProgram.curriculum.specializations).map(([specialization, subjects]) => (
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
              Advanced Computing Infrastructure
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {bcaProgram.curriculum.labs.map((lab, index) => (
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
              Join Our BCA Program
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Eligibility Criteria</h3>
              <ul className="space-y-4">
                {bcaProgram.admission.eligibility.map((item, index) => (
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
                    {Object.entries(bcaProgram.admission.deadlines).map(([phase, date]) => (
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
                {bcaProgram.admission.process.map((step, index) => (
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
              Your Future in IT
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Career Paths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bcaProgram.careers.roles.map((role, index) => (
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
                      <p className="text-3xl font-bold text-blue-800">{bcaProgram.careers.placement.rate}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600">Placement Rate</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-800">{bcaProgram.careers.placement.average}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600">Average Package</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-800">{bcaProgram.careers.placement.highest}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600">Highest Package</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Our Top Recruiters</h4>
                    <div className="flex flex-wrap justify-center gap-6">
                      {bcaProgram.careers.placement.companies.map((logo, index) => (
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
              Learn From Industry Experts
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {bcaProgram.faculty.map((faculty, index) => (
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
              {bcaProgram.studentLife.clubs.map((club, index) => (
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
              {bcaProgram.studentLife.events.map((event, index) => (
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
                  {bcaProgram.fees.structure.map((fee, index) => (
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
                {bcaProgram.fees.scholarships.map((scholarship, index) => (
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
    </div>
  )
}     