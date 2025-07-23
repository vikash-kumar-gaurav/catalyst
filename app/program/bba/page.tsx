
import YoutubePlayer from '@/components/VideoPlayer'
import { fetchPageData } from '@/lib/useFetchData'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "BBA Program | Catalyst College Patna - Premier Business Education in Bihar",
  description: "3-year industry-integrated BBA program with specializations in Marketing, Finance, HR & Analytics. 92% placement record | -affiliated | Bihar's top business college",
  keywords: [
    "Best BBA College Patna",
    "BBA in Bihar",
    "Business Administration Patna",
    "Catalyst College BBA",
    "Top BBA College Bihar",
    "PPU affiliated BBA"
  ],
  openGraph: {
    title: "BBA Program | Catalyst College Patna",
    description: "Transform into business leaders with Bihar's most industry-connected BBA program",
    images: [
      {
        url: "/images/bba/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Catalyst College BBA Students",
      },
    ],
  },
}

let bbaProgram = {
  "page_name": "bba",
  "admission": {
    "eligibility": [
      "10+2 from any recognized board with minimum 50% marks",
      "No age restriction",
      "English as compulsory subject",
      "Direct admission based on merit (No entrance exam)"
    ],
    "process": [
      {
        "step": "1. Application",
        "description": "Submit online form with ₹500 fee",
        "icon": "/svg/application.svg"
      },
      {
        "step": "2. Document Verification",
        "description": "Upload 10th/12th marksheets, TC, and photos",
        "icon": "/svg/verification.svg"
      },
      {
        "step": "3. Counseling",
        "description": "Optional campus interaction session",
        "icon": "/svg/counseling.svg"
      },
      {
        "step": "4. Enrollment",
        "description": "Fee payment & orientation program",
        "icon": "/svg/enrollment.svg"
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
      "Migration Certificate (if applicable)",
      "Caste Certificate (for reserved category)",
      "Passport size photographs (4 copies)",
      "Aadhar Card copy"
    ]
  },
  "careers": {
    "roles": [
      "Business Analyst",
      "Marketing Executive",
      "Financial Advisor",
      "HR Recruiter",
      "Operations Coordinator",
      "Entrepreneur",
      "Digital Marketer",
      "Sales Manager"
    ],
    "placement": {
      "rate": "92%",
      "average": "₹3.2 LPA",
      "highest": "₹7.5 LPA",
      "companies": [
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753341/download_lptm8v.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753202/download_dpcuui.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753189/download_mjqx63.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753151/download_cmf47v.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753114/download_yrgmjz.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753126/download_oyqbjr.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753138/download_cjyies.jpg"
      ]
    },
    "alumni": [
      {
        "name": "Rahul Kumar",
        "position": "Area Manager",
        "company": "HDFC Bank",
        "quote": "The practical finance projects at Catalyst gave me unmatched exposure to real banking operations.",
        "image": "/images/alumni/rahul.jpg"
      }
    ]
  },
  "contact": {
    "email": "bba.admissions@catalystcollege.edu.in",
    "phone": "+91 1234567890",
    "address": "Catalyst College Campus, Bailey Road, Patna - 800014",
    "hours": "Monday-Saturday: 9:00 AM - 5:00 PM"
  },
  "curriculum": {
    "structure": {
      "duration": "3 Years | 6 Semesters",
      "credits": "132 Credit Hours (PPU Pattern)",
      "pattern": "Choice-Based Credit System (CBCS)"
    },
    "coreSubjects": [
      "Principles of Management",
      "Financial Accounting",
      "Business Economics",
      "Business Mathematics & Statistics",
      "Marketing Management",
      "Organizational Behavior",
      "Business Law",
      "Operations Management",
      "Human Resource Management",
      "Business Communication",
      "Business Environment in Bihar",
      "Entrepreneurship Development",
      "Corporate Finance",
      "Cost and Management Accounting",
      "Supply Chain Management",
      "Consumer Behavior",
      "International Business",
      "Strategic Management",
      "Management Information Systems",
      "Business Ethics and Corporate Governance",
      "Research Methodology",
      "E-Commerce and Digital Marketing",
      "Project Management"
    ],
    "specializations": {
      "Marketing": [
        "Consumer Behavior & Market Research",
        "Digital Marketing & E-Commerce",
        "Rural Marketing Strategies",
        "Brand Management",
        "Sales & Distribution Management"
      ],
      "Finance": [
        "Corporate Finance",
        "Investment Analysis & Portfolio Management",
        "Banking & Insurance",
        "Financial Markets & Services",
        "Cost & Management Accounting"
      ],
      "Human Resource": [
        "Talent Acquisition & Management",
        "Training & Development",
        "Compensation & Benefits",
        "Industrial Relations & Labor Laws",
        "Organizational Development"
      ],
      "Business Analytics": [
        "Business Intelligence",
        "Predictive Analytics",
        "Data Visualization",
        "Python for Business",
        "AI in Business Decision Making"
      ]
    },
    "semesterBreakdown": [
      {
        "semester": "Semester 1",
        "subjects": [
          "Principles of Management",
          "Business Economics",
          "Financial Accounting",
          "Business Mathematics",
          "Business Communication"
        ]
      }
    ]
  },
  "faculty": [
    {
      "name": "Dr. Amit Sukhla",
      "designation": "Professor & HOD",
      "qualification": "PhD (Management), IIM Ahmedabad",
      "expertise": "Marketing Strategy",
      "experience": "18 years (ex-TATA Consumer)",
      "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752744394/68fa36c2-de43-406c-b4bf-6466c2ed96ac.png"
    }
  ],
  "fees": {
    "structure": [
      {
        "item": "Tuition Fee",
        "amount": "₹55,000/year"
      },
      {
        "item": "Lab/Resource Fee",
        "amount": "₹8,000/year"
      },
      {
        "item": "Exam Fee",
        "amount": "₹3,000/semester"
      },
      {
        "item": "Caution Deposit",
        "amount": "₹5,000 (refundable)"
      }
    ],
    "scholarships": [
      {
        "name": "Bihar Student Credit Card",
        "amount": "Up to ₹4 lakhs"
      },
      {
        "name": "EBC Scholarship",
        "amount": "25% fee waiver"
      }
    ]
  },
  "heroSection": {
    "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752748962/68751330_2644774165554238_1799719007876546560_n_dcbapx.jpg"
  },
  "overview": {
    "title": "Bachelor of Business Administration (BBA)",
    "intro": "Catalyst College Patna's BBA program molds aspiring students into industry-ready business professionals through our unique blend of academic rigor and practical exposure.",
    "highlights": [
      "PPU-affiliated 3-year degree program",
      "92% placement record in 2023",
      "Industry-designed curriculum",
      "Summer internship guarantee",
      "Bloomberg Finance Lab access"
    ],
    "skills": [
      "Business Strategy Formulation",
      "Financial Analysis & Reporting",
      "Digital Marketing Execution",
      "Leadership & Team Management",
      "Data-Driven Decision Making",
      "Entrepreneurial Mindset"
    ],
    "accreditation": "Accredited by National Assessment and Accreditation Council (NAAC 'A' Grade)"
  },
  "studentLife": {
    "clubs": [
      {
        "name": "Catalyst Business Club",
        "description": "Organizes stock simulations, case competitions",
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752745794/5fbc02e8-8fdd-40b2-8549-5f5ba7299e5c.png"
      }
    ],
    "events": [
      {
        "name": "Arthashastra",
        "description": "Annual management fest with whole campus",
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752746556/481173779_9865881320110117_613508857674207901_n_z2gp41.jpg"
      }
    ]
  },
  "whyChoose": {
    "title": "Why Catalyst College for BBA?",
    "features": [
      {
        "title": "Patna's Business Network",
        "description": "Direct recruitment partnerships with 50+ Bihar-based companies including Patna Industrial Association members",
        "imageURL": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752837198/images_cltmar.jpg"
      },
      {
        "title": "Learn from Practitioners",
        "description": "70% faculty with 10+ years corporate experience including ex-managers from TATA, HDFC, and Patna-based enterprises",
        "imageURL": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752837146/1714817147281_sdao3g.jpg"
      },
      {
        "title": "Live Business Projects",
        "description": "Solve real challenges from our partner companies like Bihar State Credit Bank and Patna Retail Association",
        "imageURL": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752837104/download_ombx0h.jpg"
      },
      {
        "title": "Entrepreneurship Cell",
        "description": "Incubation support with seed funding up to ₹50 thousands for student startups",
        "imageURL": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752751502/3843a019-baf0-40e0-97b4-f548462aacf7.png"
      },
      {
        "title": "Global Perspective",
        "description": "International case studies and optional summer school at Singapore Management University",
        "imageURL": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752749733/486290682_1057437386412200_7750465166561672240_n_oakb5b.jpg"
      },
      {
        "title": "Digital-First Learning",
        "description": "Access to Coursera, Harvard Business Publishing, and our AI-powered business simulator",
        "imageURL": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740814/487511434_1062197365936202_4767026600859138500_n_sconf7.jpg"
      }
    ]
  },
  "youtubeDescription": "Dive into our academic stories, campus vibes, and daily learning adventures through curated videos.",
  "youtubeVideos": [
    {
      "id": "hyKzgWd6qWg",
      "title": "Different Levels of Strategic Management by 4th Sem",
      "description": "In-depth lecture on various strategic levels in organizations by CIMAGE BBA 4th semester students."
    },
    {
      "id": "ELScL8tvTVM",
      "title": "BBA 4th STRATEGIC MANAGEMENT CIMAGE College, Patna",
      "description": "Student presentation covering strategic management concepts as part of the 4th semester curriculum."
    },
    {
      "id": "0KYEXTGBd08",
      "title": "BBA 5th sem, Retail mgmt, Revision, 23/3/22",
      "description": "Revision session on Retail Management for 5th semester BBA students at CIMAGE College."
    },
    {
      "id": "LpyHfURuVJw",
      "title": "Strategic Management – As they learned. BBA‑4th Sem",
      "description": "BBA 4th semester students share learnings and insights from their Strategic Management course."
    }
  ],
  "youtubetitle": "Explore Our Inspiring YouTube Journey"
}




export default async function BBAPage() {

  const { data, error } = await fetchPageData("bba")
  bbaProgram = data as any ?? bbaProgram
  return (
    <div className="bg-white">
      {/* Hero Section with Animated Background */}
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

        <div className="relative max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:pt-12 lg:pb-24">
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
                  {bbaProgram.overview.title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
                {bbaProgram.overview.intro}
              </p>

              {/* Stats mockup */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">3</div>
                  <div className="text-sm text-blue-200">Years Duration</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-sm text-blue-200">Marketing Projects</div>
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
                src={bbaProgram.heroSection.imageUrl}
                alt="BBA students at computer lab"
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
            <div className="text-3xl font-bold text-blue-600">{bbaProgram.careers.placement.rate}</div>
            <div className="text-gray-600 mt-1">Placement Rate</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{bbaProgram.careers.placement.average}</div>
            <div className="text-gray-600 mt-1">Average Package</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 mt-1">Recruiting Partners</div>
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
              Building Bihar's Next Business Leaders
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Our BBA program combines academic excellence with real-world business exposure to create professionals ready for Patna's growing corporate ecosystem.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bbaProgram.overview.highlights.map((highlight, index) => (
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
            <h3 className="text-2xl font-medium text-center text-gray-900 mb-6">Skills You'll Master</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {bbaProgram.overview.skills.map((skill, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-xs border border-gray-200 text-center">
                  <p className="text-sm font-medium text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
              Why Catalyst College?
            </span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Bihar's Most Industry-Connected <span className="text-blue-600">BBA Program</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {bbaProgram.whyChoose.features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={feature.imageURL}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Curriculum</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Industry-Relevant Learning Structure
            </p>
            <div className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              <p>{bbaProgram.curriculum.structure.duration} • {bbaProgram.curriculum.structure.credits}</p>
              <p className="mt-2">{bbaProgram.curriculum.structure.pattern}</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Core Subjects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bbaProgram.curriculum.coreSubjects.map((subject, index) => (
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
                  {Object.entries(bbaProgram.curriculum.specializations).map(([specialization, subjects]) => (
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

      {/* Admission Process */}
      <section id="admission" className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Admission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Start Your BBA Journey
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Eligibility Criteria</h3>
              <ul className="space-y-4">
                {bbaProgram.admission.eligibility.map((item, index) => (
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
                    {Object.entries(bbaProgram.admission.deadlines).map(([phase, date]) => (
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
                {bbaProgram.admission.process.map((step, index) => (
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

              <div className="mt-10">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Required Documents</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bbaProgram.admission.documents.map((doc, index) => (
                    <div key={index} className="bg-white p-3 rounded border border-gray-200">
                      <p className="text-sm text-gray-700">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Begin Your Application
            </a>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Careers</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Your Future After BBA
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Career Paths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bbaProgram.careers.roles.map((role, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
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
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-800">{bbaProgram.careers.placement.rate}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600">Placement Rate</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-800">{bbaProgram.careers.placement.average}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600">Average Package</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-800">{bbaProgram.careers.placement.highest}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600">Highest Package</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Our Top Recruiters</h4>
                    <div className="flex flex-wrap justify-center gap-6">
                      {bbaProgram.careers.placement.companies.map((logo, index) => (
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
      {/* -----------youtube section ------------ */}
      <YoutubePlayer title={bbaProgram.youtubetitle} description={bbaProgram.youtubeDescription} videos={bbaProgram.youtubeVideos} />


      {/* Faculty Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Faculty</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Learn From Industry Experts
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Our faculty combines academic excellence with real-world business experience
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bbaProgram.faculty.map((faculty, index) => (
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
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Student Life</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Beyond the Classroom
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Clubs & Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bbaProgram.studentLife.clubs.map((club, index) => (
                <div key={index} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={club.image}
                      alt={club.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h4 className="text-xl font-bold text-white">{club.name}</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{club.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Annual Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bbaProgram.studentLife.events.map((event, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-56 w-full">
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
      <section className="py-6 bg-gray-50">
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
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  {bbaProgram.fees.structure.map((fee, index) => (
                    <li key={index} className="flex justify-between border-b pb-3">
                      <span className="font-medium text-gray-700">{fee.item}</span>
                      <span className="text-gray-600">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <span className="font-bold">Note:</span> Additional one-time admission fee of ₹2,000 applicable for new students
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Scholarships</h3>
              <div className="space-y-4">
                {bbaProgram.fees.scholarships.map((scholarship, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-medium text-blue-800">{scholarship.name}</h4>
                    <p className="mt-2 text-gray-600">Amount: {scholarship.amount}</p>
                    <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Eligibility Criteria →
                    </button>
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
            Ready to Launch Your Business Career?
          </h2>
          <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
            Join Bihar's most industry-connected BBA program at Catalyst College Patna
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/register"
              className="px-6 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-100"
            >
              Apply Now
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-800"
            >
              Schedule Campus Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}