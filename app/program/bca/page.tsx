// import { NextPage } from 'next';
// import Head from 'next/head';

// interface Subject {
//   name: string;
//   description?: string;
// }

// interface Semester {
//   semester: string;
//   subjects: Subject[];
// }

// interface CareerOpportunity {
//   sector: string;
//   roles: string[];
// }

// interface PlacementCompany {
//   name: string;
//   logo: string;
// }

// interface Scholarship {
//   name: string;
//   description: string;
// }

// interface InfrastructureItem {
//   name: string;
//   description: string;
//   icon: string;
// }

// const mockData = {
//     title: "Bachelor of Computer Applications (BCA)",
//     description: "3-year undergraduate program in Computer Applications",
//     overview: "The BCA program at our college is designed to equip students with a strong foundation in computer science, software development, and digital innovation. It is ideal for students aiming for careers in IT, software engineering, data science, or system administration.",
//     objectives: [
//       "Provide solid academic foundation in computing principles",
//       "Enable practical knowledge in software development and programming",
//       "Prepare students for careers in IT, web, mobile, and cloud technologies",
//       "Enhance analytical and communication skills for workplace readiness"
//     ],
//     curriculum: [
//       {
//         semester: "Semester 1",
//         subjects: [
//           { name: "Computer Fundamentals" },
//           { name: "Programming in C" },
//           { name: "Digital Logic" },
//           { name: "Mathematics for Computing" },
//           { name: "Communication Skills" }
//         ]
//       },
//       {
//         semester: "Semester 2",
//         subjects: [
//           { name: "Data Structures" },
//           { name: "Operating Systems" },
//           { name: "Database Management Systems" },
//           { name: "Discrete Mathematics" },
//           { name: "Environmental Studies" }
//         ]
//       },
//       {
//         semester: "Semester 3",
//         subjects: [
//           { name: "Object-Oriented Programming with C++" },
//           { name: "Web Technologies" },
//           { name: "Software Engineering" },
//           { name: "Computer Organization" },
//           { name: "Business Communication" }
//         ]
//       },
//       {
//         semester: "Semester 4",
//         subjects: [
//           { name: "Java Programming" },
//           { name: "Computer Networks" },
//           { name: "Cloud Computing" },
//           { name: "Algorithm Design" },
//           { name: "Professional Ethics" }
//         ]
//       },
//       {
//         semester: "Semester 5",
//         subjects: [
//           { name: "Python Programming" },
//           { name: "Data Science Fundamentals" },
//           { name: "Mobile Application Development" },
//           { name: "Elective I" },
//           { name: "Elective II" }
//         ]
//       },
//       {
//         semester: "Semester 6",
//         subjects: [
//           { name: "AI/ML Basics" },
//           { name: "Project Work" },
//           { name: "Internship & Viva" },
//           { name: "Elective III" },
//           { name: "Elective IV" }
//         ]
//       }
//     ],
//     practicalExposure: [
//       "Regular Lab Sessions for every core technical subject",
//       "Mini Projects from 2nd year onwards",
//       "Final Year Major Project",
//       "Industry Assignments & Hackathons",
//       "Case Studies and Live Problem Solving"
//     ],
//     careerOpportunities: [
//       {
//         sector: "IT / Software Firms",
//         roles: ["Software Developer", "System Analyst", "QA Engineer"]
//       },
//       {
//         sector: "Web Development",
//         roles: ["Frontend Developer", "Backend Developer", "Full Stack Developer"]
//       },
//       {
//         sector: "Data & Analytics",
//         roles: ["Data Analyst", "Junior Data Scientist", "Business Intelligence Analyst"]
//       },
//       {
//         sector: "Cybersecurity",
//         roles: ["Security Analyst", "Network Security Engineer"]
//       },
//       {
//         sector: "Government/PSU",
//         roles: ["Technical Assistant", "IT Support Specialist"]
//       },
//       {
//         sector: "Higher Studies",
//         roles: ["MCA", "M.Sc. IT", "MBA", "PGDCA"]
//       }
//     ],
//     placementCompanies: [
//       { name: "TCS", logo: "/logos/tcs.png" },
//       { name: "Infosys", logo: "/logos/infosys.png" },
//       { name: "Wipro", logo: "/logos/wipro.png" },
//       { name: "Cognizant", logo: "/logos/cognizant.png" },
//       { name: "Tech Mahindra", logo: "/logos/tech-mahindra.png" },
//       { name: "Accenture", logo: "/logos/accenture.png" }
//     ],
//     placementSupport: [
//       "Aptitude Training",
//       "Technical Interview Preparation",
//       "Mock Interviews",
//       "Resume Building Workshops",
//       "Soft Skills Development",
//       "Internships (Summer / 6th Sem)"
//     ],
//     eligibilityCriteria: [
//       "Must have passed 10+2 (any stream) with English & Mathematics as subjects",
//       "Minimum 45–50% marks in 10+2 (varies by university norms)",
//       "Direct admission through merit or entrance as applicable"
//     ],
//     admissionProcess: [
//       "Apply via College Admission Portal",
//       "Upload required documents & pay application fee",
//       "Appear for counseling (if required)",
//       "Seat confirmation and document verification",
//       "Fee payment and enrollment completion"
//     ],
//     valueAddedFeatures: [
//       {
//         name: "Certification Courses",
//         description: "Free certification courses in Python, Web Development, AWS, etc."
//       },
//       {
//         name: "Student Clubs",
//         description: "Coding Club, Open Source Community, AI/ML Enthusiasts"
//       },
//       {
//         name: "Workshops",
//         description: "Git, UI/UX Design, Hackathons, Coding Competitions"
//       },
//       {
//         name: "Online Learning",
//         description: "NPTEL/SWAYAM integrated learning with certification"
//       }
//     ],
//     scholarships: [
//       {
//         name: "Ladli Beti Scheme",
//         description: "For female students with outstanding academic records"
//       },
//       {
//         name: "State Merit Scholarship",
//         description: "For top-ranking students in state board exams"
//       },
//       {
//         name: "Economically Weaker Section",
//         description: "Financial support for students from EWS category"
//       }
//     ],
//     infrastructure: [
//       {
//         name: "Computer Labs",
//         description: "Well-equipped labs with latest hardware and software",
//         icon: "💻"
//       },
//       {
//         name: "Campus Network",
//         description: "Wi-Fi enabled campus with high-speed internet",
//         icon: "📶"
//       },
//       {
//         name: "Library",
//         description: "Extensive collection of books and digital resources",
//         icon: "📚"
//       },
//       {
//         name: "Learning Management",
//         description: "LMS with online lecture backups and resources",
//         icon: "🎓"
//       },
//       {
//         name: "Faculty Support",
//         description: "Dedicated mentoring and project guidance",
//         icon: "👨‍🏫"
//       }
//     ]
//   };

// const data = mockData

// export default async function BCAPage()  {
//   return (
//     <>
//       <Head>
//         <title>{data.title} | {data.description}</title>
//         <meta name="description" content={`${data.overview} Learn about curriculum, career opportunities, placements, and admission process for BCA program.`} />
//         <meta name="keywords" content="BCA, Bachelor of Computer Applications, Computer Science degree, IT program, software development course" />
//         <meta property="og:title" content={`${data.title} | ${data.description}`} />
//         <meta property="og:description" content={data.overview} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://yourcollege.edu/bca" />
//         {/* Add canonical URL */}
//         <link rel="canonical" href="https://yourcollege.edu/bca" />
//       </Head>

//       <div className="bg-white">
//         {/* Hero Section */}
//         <div className="relative bg-indigo-900 overflow-hidden">
//           <div className="max-w-7xl mx-auto">
//             <div className="relative z-10 pb-8 bg-indigo-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
//               <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
//                 <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//                   <div className="sm:text-center lg:text-left">
//                     <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
//                       <span className="block">{data.title}</span>
//                       <span className="block text-indigo-200">{data.description}</span>
//                     </h1>
//                     <p className="mt-3 text-base text-indigo-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                       {data.overview}
//                     </p>
//                     <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//                       <div className="rounded-md shadow">
//                         <a
//                           href="#admission"
//                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
//                         >
//                           Apply Now
//                         </a>
//                       </div>
//                       <div className="mt-3 sm:mt-0 sm:ml-3">
//                         <a
//                           href="#curriculum"
//                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10"
//                         >
//                           View Curriculum
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//             <img
//               className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
//               src="https://images.unsplash.com/photo-1752035197224-6e6bdc4f7fb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Students working in computer lab"
//             />
//           </div>
//         </div>

//         {/* Program Highlights */}
//         <div className="py-12 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Program Features</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Why Choose Our BCA Program?
//               </p>
//             </div>

//             <div className="mt-10">
//               <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//                 {data.objectives.map((objective: string, index: number) => (
//                   <div key={index} className="relative">
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                       <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                       </svg>
//                     </div>
//                     <div className="ml-16">
//                       <h3 className="text-lg leading-6 font-medium text-gray-900">Objective {index + 1}</h3>
//                       <p className="mt-2 text-base text-gray-500">
//                         {objective}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Curriculum Section */}
//         <div id="curriculum" className="py-12 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Curriculum</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Comprehensive 3-Year Curriculum
//               </p>
//               <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                 Designed to build strong technical foundations with industry-relevant skills
//               </p>
//             </div>

//             <div className="mt-10">
//               <div className="space-y-10">
//                 {data.curriculum.map((semester: Semester) => (
//                   <div key={semester.semester} className="relative">
//                     <div className="bg-indigo-50 rounded-lg p-6">
//                       <h3 className="text-xl font-medium text-indigo-800 mb-4">{semester.semester}</h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {semester.subjects.map((subject: Subject, index: number) => (
//                           <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//                             <h4 className="text-lg font-medium text-gray-800">{subject.name}</h4>
//                             {subject.description && (
//                               <p className="mt-1 text-sm text-gray-600">{subject.description}</p>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6 text-sm text-gray-500">
//                 <p>* Curriculum may vary based on university norms and syllabus revisions.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Practical Exposure */}
//         <div className="py-12 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Hands-on Learning</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Practical Exposure & Projects
//               </p>
//             </div>

//             <div className="mt-10">
//               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                 {data.practicalExposure.map((item: string, index: number) => (
//                   <div key={index} className="pt-6">
//                     <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow">
//                       <div className="-mt-6">
//                         <div>
//                           <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
//                             <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                             </svg>
//                           </span>
//                         </div>
//                         <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{item}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Career Opportunities */}
//         <div className="py-12 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Careers</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Career Opportunities After BCA
//               </p>
//             </div>

//             <div className="mt-10">
//               <div className="space-y-10">
//                 {data.careerOpportunities.map((opportunity: CareerOpportunity, index: number) => (
//                   <div key={index} className="relative">
//                     <div className="bg-gray-50 rounded-lg p-6">
//                       <h3 className="text-xl font-medium text-indigo-800 mb-4">{opportunity.sector}</h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//                         {opportunity.roles.map((role: string, roleIndex: number) => (
//                           <div key={roleIndex} className="bg-white p-3 rounded shadow-sm border border-gray-100">
//                             <div className="flex items-center">
//                               <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                               </svg>
//                               <span className="text-gray-800">{role}</span>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Placements Section */}
//         <div className="py-12 bg-indigo-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Placements</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Our Recruiting Partners
//               </p>
//             </div>

//             <div className="mt-10">
//               <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
//                 {data.placementCompanies.map((company: PlacementCompany, index: number) => (
//                   <div key={index} className="col-span-1 flex justify-center py-8 px-8 bg-white rounded-lg shadow">
//                     <img className="max-h-12" src={company.logo} alt={company.name} />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-16">
//               <h3 className="text-2xl font-medium text-center text-gray-900 mb-6">Placement Support</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {data.placementSupport.map((item: string, index: number) => (
//                   <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0 bg-indigo-500 rounded-md p-2">
//                         <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                         </svg>
//                       </div>
//                       <div className="ml-4">
//                         <h4 className="text-lg font-medium text-gray-900">{item}</h4>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Admission Section */}
//         <div id="admission" className="py-12 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Admission</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Join Our BCA Program
//               </p>
//             </div>

//             <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
//               <div>
//                 <h3 className="text-2xl font-medium text-gray-900 mb-4">Eligibility Criteria</h3>
//                 <ul className="space-y-3">
//                   {data.eligibilityCriteria.map((criteria: string, index: number) => (
//                     <li key={index} className="flex items-start">
//                       <div className="flex-shrink-0">
//                         <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-gray-700">{criteria}</p>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-2xl font-medium text-gray-900 mb-4">Admission Process</h3>
//                 <ol className="space-y-4">
//                   {data.admissionProcess.map((step: string, index: number) => (
//                     <li key={index} className="flex items-start">
//                       <span className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-800 font-medium mr-3">
//                         {index + 1}
//                       </span>
//                       <p className="text-gray-700">{step}</p>
//                     </li>
//                   ))}
//                 </ol>
//               </div>
//             </div>

//             <div className="mt-12 text-center">
//               <a
//                 href="#"
//                 className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
//               >
//                 Begin Your Application
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Value Added Features */}
//         <div className="py-12 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Beyond Curriculum</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Value-Added Features
//               </p>
//             </div>

//             <div className="mt-10">
//               <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//                 {data.valueAddedFeatures.map((feature: any, index: number) => (
//                   <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                     <h3 className="text-lg font-medium text-indigo-800 mb-2">{feature.name}</h3>
//                     <p className="text-gray-600">{feature.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-16">
//               <h3 className="text-2xl font-medium text-center text-gray-900 mb-6">Scholarships & Financial Aid</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {data.scholarships.map((scholarship: Scholarship, index: number) => (
//                   <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                     <h4 className="text-lg font-medium text-indigo-800 mb-2">{scholarship.name}</h4>
//                     <p className="text-gray-600">{scholarship.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Infrastructure */}
//         <div className="py-12 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Campus Life</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Infrastructure & Support
//               </p>
//             </div>

//             <div className="mt-10">
//               <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
//                 {data.infrastructure.map((item: InfrastructureItem, index: number) => (
//                   <div key={index} className="text-center">
//                     <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto text-xl">
//                       {item.icon}
//                     </div>
//                     <h3 className="mt-4 text-lg font-medium text-gray-900">{item.name}</h3>
//                     <p className="mt-1 text-sm text-gray-600">{item.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Gallery Section */}
//         <div className="py-12 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Gallery</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Campus Life in Pictures
//               </p>
//             </div>

//             <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <div key={item} className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
//                   <img
//                     src={`/images/gallery/bca-${item}.jpg`}
//                     alt={`BCA program gallery ${item}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="bg-indigo-700">
//           <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
//               <span className="block">Ready to start your journey?</span>
//               <span className="block">Apply for BCA program today.</span>
//             </h2>
//             <p className="mt-4 text-lg leading-6 text-indigo-200">
//               Limited seats available for the upcoming academic session.
//             </p>
//             <a
//               href="#"
//               className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
//             >
//               Apply Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };



import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "BCA Program | Catalyst College Patna - Premier Computer Application Degree in Bihar",
  description: "3-year industry-focused BCA program with specializations in Software Development, Cloud Computing, and AI Fundamentals. 95% placement record | AKU-affiliated | State-of-the-art computer labs",
  keywords: [
    "Best BCA College Patna",
    "BCA in Bihar",
    "Computer Applications Degree Patna",
    "Catalyst College BCA",
    "Top BCA College Bihar",
    "AKU affiliated BCA",
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

const bcaProgram = {
  overview: {
    title: "Bachelor of Computer Applications (BCA)",
    intro: "Catalyst College Patna's BCA program bridges the gap between academic learning and industry requirements through intensive practical training and project-based learning.",
    highlights: [
      "AKU-affiliated 3-year degree program",
      "95% placement record in 2023",
      "1000+ hours of practical coding",
      "Mandatory industry internship",
      "AWS Educate Cloud Computing Program"
    ],
    skills: [
      "Full-Stack Development",
      "Database Management",
      "Object-Oriented Programming",
      "Web & Mobile App Development",
      "Cloud Computing Basics",
      "Software Engineering Principles"
    ],
    accreditation: "NAAC 'A' Grade | AWS Educate Member | Microsoft Learn Partner"
  },
  whyChoose: {
    title: "Why Catalyst College for BCA?",
    features: [
      {
        title: "Industry-Ready Curriculum",
        description: "Updated annually with inputs from Patna IT companies and alumni working in MNCs",
        icon: "/svg/curriculum.svg"
      },
      {
        title: "Coding Intensive",
        description: "150+ programming assignments across 6 semesters with code reviews",
        icon: "/svg/coding.svg"
      },
      {
        title: "Project-Based Learning",
        description: "Build 10+ real-world projects including a final year software product",
        icon: "/svg/projects.svg"
      },
      {
        title: "Certification Integration",
        description: "Earn AWS Cloud, Microsoft Azure, and Oracle certifications alongside degree",
        icon: "/svg/certification.svg"
      },
      {
        title: "Startup Support",
        description: "Seed funding up to ₹2 lakhs for student software startups",
        icon: "/svg/startup.svg"
      },
      {
        title: "Hackathon Culture",
        description: "Regular coding competitions with Bihar IT Association",
        icon: "/svg/hackathon.svg"
      }
    ]
  },
  curriculum: {
    structure: {
      duration: "3 Years | 6 Semesters",
      credits: "144 Credit Hours (AKU Pattern)",
      pattern: "70% Practical | 30% Theory"
    },
    coreSubjects: [
      "Programming in C",
      "Data Structures using C++",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
      "Software Engineering",
      "Java Programming",
      "Python for Applications",
      "Discrete Mathematics"
    ],
    specializations: {
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
    labs: [
      {
        name: "Advanced Programming Lab",
        equipment: "50+ high-end workstations with VS Code, IntelliJ, PyCharm",
        image: "/images/bca/programming-lab.jpg"
      },
      {
        name: "Cloud Computing Lab",
        equipment: "AWS/Azure sandbox accounts, Cloud simulation tools",
        image: "/images/bca/cloud-lab.jpg"
      }
    ]
  },
  admission: {
    eligibility: [
      "10+2 from any stream with Mathematics/Computer Science",
      "Minimum 50% marks in 12th standard",
      "Basic computer literacy preferred",
      "No age restriction"
    ],
    process: [
      {
        step: "1. Online Application",
        description: "Submit form at admissions.catalystcollege.edu.in with ₹500 fee",
        icon: "/svg/application.svg"
      },
      {
        step: "2. Basic Aptitude Test",
        description: "Logical reasoning and math test (online/offline option)",
        icon: "/svg/test.svg"
      },
      {
        step: "3. Personal Interaction",
        description: "Faculty interview to assess interest in computing",
        icon: "/svg/interview.svg"
      },
      {
        step: "4. Enrollment",
        description: "Document verification and first semester fee payment",
        icon: "/svg/enrollment.svg"
      }
    ],
    deadlines: {
      "Early Bird": "May 15, 2024",
      "Regular": "June 30, 2024",
      "Extended": "July 31, 2024"
    },
    documents: [
      "10th & 12th original marksheets",
      "Transfer Certificate",
      "Caste Certificate (if applicable)",
      "Passport photos (4 copies)",
      "Aadhar Card copy"
    ]
  },
  careers: {
    roles: [
      "Software Developer",
      "Web Developer",
      "System Analyst",
      "Database Administrator",
      "Cloud Support Associate",
      "IT Consultant",
      "Quality Analyst",
      "Technical Writer"
    ],
    placement: {
      rate: "95%",
      average: "₹3.5 LPA",
      highest: "₹8.9 LPA",
      companies: [
        "/images/recruiters/infosys.png",
        "/images/recruiters/tcs.png",
        "/images/recruiters/patnatech.png",
        "/images/recruiters/bihar-it-hub.png",
        "/images/recruiters/amazon.png"
      ]
    },
    internship: {
      partners: [
        "PatnaTech Solutions",
        "Digital Bihar Initiative",
        "Bihar Startup Network",
        "State Bank IT Division",
        "Patna Smart City Project"
      ],
      duration: "Minimum 6 weeks mandatory in 5th semester"
    }
  },
  faculty: [
    {
      name: "Dr. Sanjay Kumar",
      designation: "Professor & HOD (BCA)",
      qualification: "PhD (Computer Science), IIT Patna",
      expertise: "Software Engineering",
      experience: "18 years (ex-Infosys)",
      image: "/images/faculty/sanjay-kumar.jpg"
    },
    {
      name: "Prof. Neha Singh",
      designation: "Associate Professor",
      qualification: "MCA, NIT Patna",
      expertise: "Cloud Computing",
      experience: "12 years industry experience",
      image: "/images/faculty/neha-singh.jpg"
    }
  ],
  studentLife: {
    clubs: [
      {
        name: "CodeChef Chapter",
        description: "Competitive programming club with weekly contests",
        image: "/images/clubs/codechef.jpg"
      },
      {
        name: "Web Wizards",
        description: "Frontend development and design collective",
        image: "/images/clubs/web-wizards.jpg"
      }
    ],
    events: [
      {
        name: "ByteFest",
        description: "Annual coding festival with 50+ colleges participating",
        image: "/images/events/bytefest.jpg"
      },
      {
        name: "HackPatna",
        description: "36-hour hackathon solving local community problems",
        image: "/images/events/hackpatna.jpg"
      }
    ]
  },
  fees: {
    structure: [
      {
        item: "Tuition Fee",
        amount: "₹58,000/year"
      },
      {
        item: "Lab Fee",
        amount: "₹12,000/year"
      },
      {
        item: "Exam Fee",
        amount: "₹3,500/semester"
      },
      {
        item: "Development Kit",
        amount: "₹8,000 (one-time)"
      }
    ],
    scholarships: [
      {
        name: "Bihar Student Credit Card",
        amount: "Up to ₹4 lakhs"
      },
      {
        name: "Tech Genius Scholarship",
        amount: "30% fee waiver for programming competition winners"
      },
      {
        name: "Girls in Tech Scholarship",
        amount: "25% fee waiver for female students"
      }
    ]
  },
  faqs: [
    {
      question: "What is the difference between BCA and B.Tech?",
      answer: "BCA focuses more on application development and practical software skills, while B.Tech provides deeper engineering knowledge. BCA is 3 years vs B.Tech's 4 years."
    },
    {
      question: "Can I pursue MCA after BCA?",
      answer: "Yes, our BCA program fully qualifies you for MCA programs across India. Many of our graduates pursue MCA at NITs and other top institutions."
    },
    {
      question: "Is mathematics compulsory for BCA?",
      answer: "Yes, you need Mathematics as a subject in 10+2 to be eligible for our BCA program."
    }
  ]
}

export default function BCAPage() {
  return (
    <div className="bg-white">
      {/* Hero Section with Code Background */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('/svg/code-pattern.svg')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {bcaProgram.overview.title}
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-3xl">
                {bcaProgram.overview.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#admission"
                  className="px-6 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Apply Now
                </a>
                <a
                  href="#curriculum"
                  className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-800 transition-colors"
                >
                  View Curriculum
                </a>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/bca/hero-students.jpg"
                alt="BCA students at computer lab"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {bcaProgram.overview.skills.map((skill, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-xs border border-gray-200 text-center">
                  <p className="text-sm font-medium text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Catalyst College?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Bihar's Best BCA Program
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bcaProgram.whyChoose.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
                  <Image 
                    src={feature.icon} 
                    alt="" 
                    width={32} 
                    height={32} 
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
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
                        {subjects.slice(0, 3).map((subject, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{subject}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium">
                        View all {subjects.length} subjects →
                      </button>
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
              href="#"
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