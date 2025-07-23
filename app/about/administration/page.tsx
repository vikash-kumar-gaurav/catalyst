import HeroSection from '@/components/newHeroImageForAllPage';

import { fetchPageData } from '@/lib/useFetchData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Administration | Catalyst College - Leadership & Governance",
  description: "Meet the experienced leadership team and administrative structure of Catalyst College, committed to academic excellence and student success.",
  keywords: "college administration, governing body, faculty, leadership, academic heads",
};


let adminData = {
  introduction: {
    title: "Our Administrative Leadership",
    description: "The administration at Catalyst College ensures the smooth and strategic functioning of the institution, focusing on academic excellence, student welfare, staff development, and regulatory compliance. Our leadership is committed to transparency, innovation, and delivering quality education."
  },
  messages: {
    chairman: {
      name: "Prof. Basant Kumar Agrawal",
      title: "Chairman",
      content: [
        "Catalyst College and The Career Catalyst Group have received immense support, trust and love from the residents of Bihar, Jharkhand and Northeast UP for the last 15 consecutive years. This is our capital.",
        "Catalyst College has continuously carried out successful innovative experiments in the field of IT and Management education, which has resulted in better results and better campus placements of our students.",
        "Catalyst has been ranked as the best college in Patna, Bihar for the study of BCA, BBA, BBM, BSc.IT, B.Com & PGDM course with an excellent campus placement. We are confident that we will be able to maintain this belief firmly in future also.",
        "With best wishes for a bright future."
      ],
      image: "/images/chairman.jpg"
    },
    director: {
      name: "Prof. (Dr.) Neeraj Agrawal",
      title: "Director",
      content: [
        "Nobody ever said that leading an academic institution like Catalyst Group of Institutions would be an easy task! They also didn't say that in providing this leadership I would find special rewards that have enriched my life experience immeasurably, yet this is exactly what I have experienced here.",
        "Catalyst is my dream! We teach the students that they need to be lifelong learners, open to the lessons of every experience, and then we provide them with the opportunities to do just that.",
        "The examples of many of our successful students, who graduated or post-graduated from our college, have made our faith even more stronger than before that hard-work, devotion, dedication along with correct guidance; lead us to success.",
        "As I always say and believe 'Either you have strong will power or weak excuses.'"
      ],
      image: "/images/director.jpg"
    },
    centerHead: {
      name: "Mrs. Megha Agrawal",
      title: "Center Head",
      content: [
        "Let me take this opportunity to applaud the efforts of the students, our teachers, and supporting staffs for all their hard work, sincere and dedicated efforts in keeping the Catalyst flag flying high in the academic as well as co-curricular activities.",
        "I am happy to see that our students have achieved excellence in various fields; whether it be profession or business, be it management or accounting.",
        "I take this opportunity to express my sincere and heartfelt gratitude to all the students, their parents, the teaching and the supporting staffs of the college for all their efforts and for the support for effective running of the college.",
        "Thank You"
      ],
      image: "/images/center-head.jpg"
    },
    dean: {
      name: "Prof. (Dr.) Neeraj Poddar",
      title: "Dean",
      content: [
        "The globalization & the opening up of the economy have ushered in a paradigm shift in the entire gamut of industries. Priorities have changed to conforming to the emerging needs.",
        "For the students the changing scenario poses new challenges. To make their mark in this new environs they need to be strong in commitments, focused in their approach and ever quick to assimilate and adopt new ideas and skills.",
        "At Catalyst perspective on learning is different. The courses have been designed and structured in tune with the present market needs. Its multi-disciplinary approach, constant interface with the industry, and networking to instantly access the latest changes, contribute to the overall development of the students.",
        "At Catalyst students set benchmark that fewer will be able to achieve and that's why our students do not fail to deliver in a demanding, professional and result-driven environment."
      ],
      image: "/images/dean.jpg"
    }
  },
  leadership: {
    governingBody: [
      {
        name: "Prof. Basant Kumar Agrawal",
        designation: "Chairman",
        role: "Strategic vision, policy governance",
        image: "/images/chairman.jpg"
      },
      {
        name: "Prof. (Dr.) Neeraj Agrawal",
        designation: "Director",
        role: "Institutional oversight, policy implementation",
        image: "/images/director.jpg"
      }
    ],
    administrativeHeads: [
      {
        name: "Dr. Meena Gupta",
        designation: "Principal",
        role: "Academic leadership, operations management",
        image: "/images/principal.jpg"
      },
      {
        name: "Mr. Rajat Singh",
        designation: "Registrar",
        role: "Student records, official documentation",
        image: "/images/registrar.jpg"
      },
      {
        name: "Ms. Nisha Bhatia",
        designation: "Controller of Examinations",
        role: "Exams, results, and evaluation",
        image: "/images/exam-controller.jpg"
      },
      {
        name: "Mr. Sanjay Roy",
        designation: "Admin Officer",
        role: "Infrastructure, maintenance, logistics",
        image: "/images/admin-officer.jpg"
      }
    ],
    departmentHeads: [
      {
        name: "Prof. Rakesh Jain",
        department: "BBA",
        role: "Department Head",
        image: "/images/hod-bba.jpg"
      },
      {
        name: "Prof. Shalini Menon",
        department: "BCA",
        role: "Department Head",
        image: "/images/hod-bca.jpg"
      },
      {
        name: "Dr. S. Prasad",
        department: "BSc IT",
        role: "Department Head",
        image: "/images/hod-bsc.jpg"
      }
    ]
  },
  committees: [
    {
      name: "Academic Council",
      purpose: "Curriculum review, academic policies",
      members: ["Dr. Meena Gupta (Chair)", "All HODs", "2 External Experts"]
    },
    {
      name: "Anti-Ragging Committee",
      purpose: "Student safety and grievance redressal",
      members: ["Mr. Rajat Singh (Chair)", "2 Faculty Members", "Student Representatives"]
    },
    {
      name: "IQAC",
      purpose: "Quality control and NAAC compliance",
      members: ["Principal (Chair)", "Senior Faculty", "Industry Representative"]
    },
    {
      name: "Disciplinary Committee",
      purpose: "Code of conduct and behavioral policies",
      members: ["Dean (Chair)", "2 Senior Faculty", "Admin Officer"]
    },
    {
      name: "Placement Advisory Committee",
      purpose: "Placement strategy and employer outreach",
      members: ["Training & Placement Officer (Chair)", "2 Faculty", "Industry Experts"]
    }
  ],
  faculty: {
    description: "Catalyst has a team of more than 150 vibrant and energetic professionals. They have the relevant experience of working in different Academic Institutions and MNCs. Among them there are Engineers, Technical Trainers, Management Gurus, Librarian, HR Executives, Placement Coordinators and Marketing Managers.",
    highlights: [
      "Balanced mix of academicians, researchers and professionals",
      "Internationally acclaimed guest faculty",
      "Continually in demand as industry advisors",
      "Strong research and publication record"
    ]
  },
  advisoryCouncil: {
    members: [
      { name: "Prof. Basant Kumar Agrawal", role: "Chairman" },
      { name: "Prof. Neeraj Agrawal", role: "Member" },
      { name: "Mrs. Megha Agrawal", role: "Member" },
      { name: "Prof. Neeraj Poddar", role: "Member" },
      { name: "Mrs. Neha Verma", role: "Member" },
      { name: "Mr. Umashankar Sharma", role: "Member" }
    ]
  },
  examinationCell: {
    members: [
      { name: "Prof. Neeraj Agrawal", role: "Chairman" },
      { name: "Prof. Neeraj Poddar", role: "Dean" },
      { name: "Mr. Nitish Rohatagi", role: "Member" },
      { name: "Pro. Amit kumar Shukla", role: "Member" },
      { name: "Mr. Law Kumar", role: "Member" },
      { name: "Mr. Ravi Kumar Soni", role: "Member" }
    ]
  }
};

const  {data, error} = await fetchPageData("administration")

adminData = data as any ?? adminData;

export default function Administration() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Leadership & Governance"
        description="Meet the visionary leaders and dedicated administrators who guide Catalyst College towards excellence"
        imageUrl="/images/admin-hero.jpg"
        overlayOpacity={0.4}
        height="lg"
      />

      {/* Introduction */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">{adminData.introduction.title}</h2>
        <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto">
          {adminData.introduction.description}
        </p>
      </section>

      {/* Leadership Messages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Messages From Leadership</h2>

          {/* Chairman's Message */}
          <div className="flex flex-col md:flex-row gap-12 mb-20">
            <div className="md:w-1/3">
              <img
                src={adminData.messages.chairman.image}
                alt={adminData.messages.chairman.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold">{adminData.messages.chairman.name}</h3>
                <p className="text-blue-600">{adminData.messages.chairman.title}</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose max-w-none">
                {adminData.messages.chairman.content.map((paragraph:string, index:number) => (
                  <p key={index} className="mb-4 text-lg">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Director's Message */}
          <div className="flex flex-col md:flex-row-reverse gap-12 mb-20">
            <div className="md:w-1/3">
              <img
                src={adminData.messages.director.image}
                alt={adminData.messages.director.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold">{adminData.messages.director.name}</h3>
                <p className="text-blue-600">{adminData.messages.director.title}</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose max-w-none">
                {adminData.messages.director.content.map((paragraph:string, index:number) => (
                  <p key={index} className="mb-4 text-lg">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Center Head's Message */}
          <div className="flex flex-col md:flex-row gap-12 mb-20">
            <div className="md:w-1/3">
              <img
                src={adminData.messages.centerHead.image}
                alt={adminData.messages.centerHead.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold">{adminData.messages.centerHead.name}</h3>
                <p className="text-blue-600">{adminData.messages.centerHead.title}</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose max-w-none">
                {adminData.messages.centerHead.content.map((paragraph:string, index:number) => (
                  <p key={index} className="mb-4 text-lg">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Dean's Message */}
          <div className="flex flex-col md:flex-row-reverse gap-12">
            <div className="md:w-1/3">
              <img
                src={adminData.messages.dean.image}
                alt={adminData.messages.dean.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold">{adminData.messages.dean.name}</h3>
                <p className="text-blue-600">{adminData.messages.dean.title}</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose max-w-none">
                {adminData.messages.dean.content.map((paragraph:string, index:number) => (
                  <p key={index} className="mb-4 text-lg">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Leadership Team</h2>

          {/* Governing Body */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-800">Governing Body</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {adminData.leadership.governingBody.map((member:any, index:number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
                  <img
                    src={member?.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-blue-100"
                  />
                  <div>
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className="text-blue-600 font-medium">{member.designation}</p>
                    <p className="mt-2 text-gray-700">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Administrative Heads */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-800">Administrative Heads</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {adminData.leadership.administrativeHeads.map((member:any, index:number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-blue-100 mx-auto mb-4"
                  />
                  <h4 className="text-lg font-bold">{member.name}</h4>
                  <p className="text-blue-600 font-medium">{member.designation}</p>
                  <p className="mt-2 text-sm text-gray-700">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Department Heads */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-800">Department Heads</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {adminData.leadership.departmentHeads.map((member:any, index:number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-blue-100"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{member.name}</h4>
                    <p className="text-blue-600">{member.department}</p>
                    <p className="text-sm text-gray-700">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Administrative Committees</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adminData.committees.map((committee:any, index:any) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-3">{committee.name}</h3>
                <p className="text-gray-700 mb-4">{committee.purpose}</p>
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">Members:</h4>
                  <ul className="space-y-1">
                    {committee.members.map((member:any, idx:any) => (
                      <li key={idx} className="text-sm">• {member}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty & Advisory Council */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Faculty */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Faculty</h2>
              <p className="text-lg mb-6">{adminData.faculty.description}</p>
              <ul className="space-y-3">
                {adminData.faculty.highlights.map((item:any, index:any) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advisory Council */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Academic Advisory Council</h2>
              <p className="text-lg mb-6">The Advisory Council works as a mentor and advises the college committee for smooth execution of the functioning of the college.</p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Members:</h3>
                <ul className="space-y-3">
                  {adminData.advisoryCouncil.members.map((member:any, index:any) => (
                    <li key={index} className="flex justify-between border-b pb-2">
                      <span>{member.name}</span>
                      <span className="text-blue-600">{member.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Cell */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Examination Cell</h2>
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <p className="text-center mb-8">The Examination Cell is responsible for planning, executing, mentoring and monitoring of the examinations conducted in college.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {adminData.examinationCell.members.map((member:any, index:any) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-xs flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need to Contact Administration?</h2>
          <p className="text-xl mb-8">For official matters, please reach out to the relevant department or office.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contact Registrar Office
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Faculty Directory
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}