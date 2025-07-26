
import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub, FaChalkboardTeacher, FaArrowRight, FaInstagram, FaGraduationCap, FaBriefcase, FaStar } from 'react-icons/fa';

export default async function FacultyCorner() {

  let  facultyData = {
      "faculty": [
    {
      "id": 1,
      "name": "Neeraj Aggarwal",
      "position": "Director",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752745539/Director-CIMAGE-Group-of-Institutions-1024x683_qvjh2e.jpg",
      "experience": "25 years",
      "skills": ["Strategic planning", "Leadership", "Institutional management"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 2,
      "name": "Megha Aggrawal",
      "position": "Principal",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753447930/hq720_qw6l2e.jpg",
      "experience": "22 years",
      "skills": ["Academic leadership", "Curriculum development", "Quality assurance"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com",
        "github":"git hub"
      }
    },
    {
      "id": 3,
      "name": "Prof. (Dr.) Neeraj Poddar",
      "position": "Dean & HOD, English Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752745570/n_p_wutnea.jpg",
      "experience": "15 years",
      "skills": ["Academic research", "Literary criticism", "Teaching methodologies"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 4,
      "name": "Prof. Nitish Kr Rohatgi",
      "position": "HOD, Management",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753448067/NITISH_ROHATGI_bb09wh.jpg",
      "experience": "17 years",
      "skills": ["Business management", "Organizational behavior", "Leadership training"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 5,
      "name": "Prof. Amit Kr. Shukla",
      "position": "HOD, IT Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753448143/AMIT_KUMAR_SHUKLA_hupv0x.jpg",
      "experience": "18 years",
      "skills": ["Software development", "Network administration", "IT strategy"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 6,
      "name": "Ravi Kumar Soni",
      "position": "Senior Faculty, IT Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518749/487128537_9407198335999769_1331925524575759566_n_mdeupx.jpg",
      "experience": "10 years",
      "skills": ["Java programming", "Database management", "Cloud computing"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 7,
      "name": "Dr. Pawan Kr Jha",
      "position": "Faculty, Management",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753448216/PAWAN_KUMAR_JHA_ckf7ww.jpg",
      "experience": "12 years",
      "skills": ["Marketing strategy", "Financial management", "Case study analysis"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 8,
      "name": "Murli Manohar",
      "position": "Faculty, IT Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753446777/MURLI_MANOHAR_j3kq0w.jpg",
      "experience": "9 years",
      "skills": ["Web development", "Front-end frameworks", "UX/UI design"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 9,
      "name": "Anjesh Kumar",
      "position": "Faculty, IT Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753517804/ANJESH_KUMAR_dxyeii.jpg",
      "experience": "8 years",
      "skills": ["Full-stack development", "Python", "DevOps practices"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 10,
      "name": "Raju Upadhyay",
      "position": "Faculty, IT Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518256/RAJU_UPADHYAY_dqdvtc.jpg",
      "experience": "7 years",
      "skills": ["Mobile app development", "Android SDK", "RESTful APIs"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 11,
      "name": "Sanjana Sinha",
      "position": "Faculty, English Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518284/SANJANA_SINHA_ipaulf.jpg",
      "experience": "10 years",
      "skills": ["Creative writing", "Academic writing", "Communication skills"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 12,
      "name": "Abhinavdeep",
      "position": "Faculty, Mathematics Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753524005/85ad89f5-a72e-41b9-9688-e3317ad58f5a.png",
      "experience": "9 years",
      "skills": ["Calculus", "Statistics", "Applied mathematics"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 13,
      "name": "Kundan Kumar",
      "position": "Faculty, Mathematics Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753523901/921d9229-a7fb-4cbf-a079-ac10631876f7.png",
      "experience": "8 years",
      "skills": ["Algebra", "Geometry", "Problem solving"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 14,
      "name": "Anil Kumar",
      "position": "Faculty, BBA Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753517649/ANIL_KUMAR_t8abok.jpg",
      "experience": "7 years",
      "skills": ["Business administration", "Operations management", "Entrepreneurship"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 15,
      "name": "Nilanjan Bose",
      "position": "Faculty, Spoken English & Competitive Exams",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753517931/NILANJAN_BOSE_vbkuo0.jpg",
      "experience": "11 years",
      "skills": ["Spoken English", "Exam strategy", "Personality development"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 16,
      "name": "Neeraj Kumar Singh",
      "position": "Faculty, IT Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518000/NIRAJ_KUMAR_SINGH_iorrbt.jpg",
      "experience": "6 years",
      "skills": ["C/C++ programming", "Algorithms", "Data structures"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 17,
      "name": "Pankaj Sinha",
      "position": "Faculty, Robotics & Automation",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518080/PANKAJ_SINHA_wvihxz.jpg",
      "experience": "9 years",
      "skills": ["Robotics design", "Arduino", "Automation systems"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 18,
      "name": "Payal Neogi",
      "position": "Faculty, Management",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518119/PAYAL_NEOGI_fezrir.jpg",
      "experience": "8 years",
      "skills": ["HR management", "Organizational behavior", "Team building"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 19,
      "name": "Priyadarshini Jain",
      "position": "Faculty, Management",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518173/PRIYADARSHINI_JAIN_kcfzoc.jpg",
      "experience": "7 years",
      "skills": ["Strategic planning", "Business communication", "Presentation skills"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 20,
      "name": "Rabindra Kumar",
      "position": "Faculty, Mathematics Department",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518218/RABINDRA_KUMAR_hfziyw.jpg",
      "experience": "8 years",
      "skills": ["Trigonometry", "Probability", "Teaching fundamentals"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 21,
      "name": "Sanjeev Kumar",
      "position": "Faculty, Power BI & Business Analytics",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518304/SANJEEV_KUMAR_mrxlwe.jpg",
      "experience": "7 years",
      "skills": ["Power BI", "Data visualization", "Dashboard design"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 22,
      "name": "Sujeet Kumar Suman",
      "position": "Faculty, Management",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518337/SUJEET_KUMAR_SUMAN_a8mss8.jpg",
      "experience": "7 years",
      "skills": ["Operations management", "Project planning", "Cost control"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 23,
      "name": "Vijay Prakash Sinha",
      "position": "Faculty, Management",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518416/VIJAY_PRAKASH_SINHA_pdwfhi.jpg",
      "experience": "6 years",
      "skills": ["Financial planning", "Business strategy", "Market analysis"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    },
    {
      "id": 24,
      "name": "Vitthal Kumar Sarraf",
      "position": "Faculty, Management",
      "profilePic": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753518467/VITTHAL_KUMAR_SARRAF_lajtch.jpg",
      "experience": "6 years",
      "skills": ["Customer relationship", "Sales", "Business ethics"],
      "social": {
        "linkedin": "https://www.linkedin.com",
        "twitter": "https://twitter.com",
        "instagram": "https://www.instagram.com"
      }
    }
  ],
    "heroSection":{
      "heroImageUrl":"https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753445258/488681342_1064190312403574_1994521295769580069_n_hbzitp.jpg",
      "title":"Faculty Corner",
      "description":"A dedicated space for faculty members to manage courses, share resources, and engage with students effectively"
    }
  }

const { data, error } = await fetchPageData("faculty-corner")
facultyData = data as any ?? facultyData;


  return (

<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-gray-100 relative overflow-hidden">
  {/* Grid background pattern */}
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path 
            d="M 40 0 L 0 0 0 40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
            className="text-violet-900"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  {/* Floating gradient circles */}
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-700 rounded-full mix-blend-screen opacity-20 blur-3xl animate-float"></div>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-800 rounded-full mix-blend-screen opacity-20 blur-3xl animate-float-delay"></div>

  {/* Header */}
  <HeroSection
    imageUrl={facultyData.heroSection.heroImageUrl}
    title={facultyData.heroSection.title}
    description={facultyData.heroSection.description}
    overlayOpacity={0.1}
    height='xl'
  />

  {/* Faculty Section */}
  <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-pink-300">
        Our Faculty Members
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyData.faculty.map((teacher: any) => (
          <div
            key={teacher.id}
            className="relative rounded-2xl overflow-hidden border border-violet-800/30 shadow-2xl hover:shadow-violet-900/40 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group isolate"
          >
            {/* Glow effect container */}
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -inset-8 bg-gradient-to-r from-violet-600/20 to-purple-600/20 blur-2xl"></div>
            </div>
            
            {/* Profile Image Section with parallax effect */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                <img
                  src={teacher.profilePic}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white">{teacher.name}</h3>
                <p className="text-violet-300">{teacher.position}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col bg-gradient-to-br from-gray-900/80 to-violet-900/30 backdrop-blur-sm">
              {/* Experience Section */}
              <div className="mb-4">
                <div className="text-sm text-violet-300 mb-1 flex items-center">
                  <FaBriefcase className="mr-2" /> Experience
                </div>
                <div className="font-medium line-clamp-2">{teacher.experience}</div>
              </div>

              {/* Skills Section */}
              <div className="mb-6 flex-1">
                <div className="text-sm text-violet-300 mb-2 flex items-center">
                  <FaStar className="mr-2" /> Expertise
                </div>
                <div className="flex flex-wrap gap-2">
                  {teacher.skills.map((skill: any, index: any) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-violet-900/50 text-violet-100 text-sm rounded-full border border-violet-800/50 
                      hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 hover:text-white hover:border-transparent
                      transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-violet-900/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Media Section */}
              <div className="flex space-x-4 pt-4 border-t border-violet-800/50">
                {teacher.social.linkedin && (
                  <a
                    href={teacher.social.linkedin}
                    className="text-violet-400 hover:text-[#0A66C2] transition-all duration-300 
                    hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.6)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                )}
                {teacher.social.twitter && (
                  <a
                    href={teacher.social.twitter}
                    className="text-violet-400 hover:text-[#1DA1F2] transition-all duration-300 
                    hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(29,161,242,0.6)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                )}
                {teacher.social.github && (
                  <a
                    href={teacher.social.github}
                    className="text-violet-400 hover:text-white transition-all duration-300 
                    hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                )}
                {teacher.social.instagram && (
                  <a
                    href={teacher.social.instagram}
                    className="text-violet-400 hover:text-[#E1306C] transition-all duration-300 
                    hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.6)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="relative px-4 sm:px-6 lg:px-8 z-10">
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-violet-900/80 to-purple-900/80 rounded-2xl p-8 shadow-xl overflow-hidden border border-violet-800/30 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path 
                  d="M 20 0 L 0 0 0 20" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5"
                  className="text-violet-900"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Ready to Take the Next Step?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Student CTA */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-violet-800/30 hover:border-violet-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">Future Students</h3>
                <p className="text-violet-200">
                  Launch your academic journey with our innovative programs and supportive community.
                </p>
              </div>
              <Link
                href="/academics/admission"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg text-white font-medium hover:from-violet-700 hover:to-purple-700 transition-all group relative overflow-hidden"
              >
                <span className="relative z-10">Explore Admissions</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>

            {/* Educator CTA */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-violet-800/30 hover:border-violet-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">Join Our Faculty</h3>
                <p className="text-violet-200">
                  Shape minds and advance knowledge in our collaborative academic environment.
                </p>
              </div>
              <Link
                href="/placements/career"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-violet-700 transition-all group relative overflow-hidden"
              >
                <span className="relative z-10">View Opportunities</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  );
}
