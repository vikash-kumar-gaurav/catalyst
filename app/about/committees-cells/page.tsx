import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import Head from 'next/head';

let committeeData = {
  
  hero: {
    title: "Committees & Cells",
    description: "Ensuring effective governance, student welfare, and academic excellence through dedicated bodies",
    imageUrl: "https://catalystcollege.edu.in/wp-content/uploads/2023/07/campus-committee.jpg",
    overlayOpacity: 0.3,
    height: "lg"
  },
  introduction: {
    content: "At CATALYST College, we have established several statutory and functional committees & cells to ensure effective governance, quality enhancement, student welfare, and academic excellence. These bodies work in alignment with the guidelines set by regulatory bodies such as AICTE, UGC, and the affiliating university. The participation of faculty, students, and external experts ensures transparency, accountability, and holistic development."
  },
  committees: [
    {
      id: 1,
      title: "🚫 Anti-Ragging Committee & Cell",
      objective: "To eliminate ragging in all forms and ensure a safe, respectful, and inclusive environment for all students.",
      responsibilities: [
        "Monitor student interactions",
        "Conduct awareness campaigns and surprise checks",
        "Act on complaints immediately",
        "Liaison with local police when necessary"
      ],
      composition: [
        "Chairperson (Principal)",
        "Faculty members",
        "Parents' representative",
        "Senior students",
        "Police / NGO representative (external)"
      ],
      contacts: [
        { type: "email", value: "antiragging@catalyst.edu.in", label: "Helpline Email" },
        { type: "phone", value: "1800-180-5522", label: "UGC Helpline" },
        { type: "link", value: "https://www.antiragging.in", label: "UGC Anti-Ragging Portal" }
      ],
      mandatory: true
    },
    {
      id: 2,
      title: "📈 Internal Quality Assurance Cell (IQAC)",
      objective: "To plan, monitor, and ensure quality in academic and administrative activities.",
      responsibilities: [
        "Promote continuous improvement through regular audits",
        "Prepare AQAR (Annual Quality Assurance Report)",
        "Organize FDPs and workshops",
        "Support accreditation processes"
      ],
      composition: [
        "Principal (Chairperson)",
        "Senior faculty",
        "Industry expert",
        "Alumni & student representatives"
      ],
      documents: [
        { name: "IQAC Charter", url: "/docs/iqac-charter.pdf" }
      ],
      mandatory: true
    },
    {
      id: 3,
      title: "🎯 Training & Placement Cell",
      objective: "To bridge the gap between academics and industry by providing placement, internship, and career guidance support.",
      activities: [
        "Organize campus recruitment drives",
        "Conduct aptitude and soft skills training",
        "Industry tie-ups and internship support"
      ],
      members: [
        "T&P Officer",
        "Department placement coordinators",
        "Student volunteers"
      ],
      contacts: [
        { type: "email", value: "placements@catalyst.edu.in", label: "Contact Email" }
      ]
    },
    {
      id: 4,
      title: "📣 Grievance Redressal Committee",
      objective: "To address academic, administrative, or personal grievances of students and staff in a fair and timely manner.",
      composition: [
        "Chairperson (Senior faculty)",
        "Faculty member",
        "Student representative",
        "Women representative"
      ],
      documents: [
        { name: "Online Grievance Form", url: "/grievance-form" }
      ]
    },
    {
      id: 5,
      title: "🧍‍♀️ Women's Cell",
      objective: "To create awareness about gender issues and ensure a safe, respectful space for women students and staff.",
      activities: [
        "Awareness programs on women's rights",
        "Self-defense workshops",
        "Addressing gender-based complaints (confidentially)"
      ],
      contacts: [
        { type: "email", value: "womenscell@catalyst.edu.in", label: "Help Email" }
      ]
    },
    {
      id: 6,
      title: "🌿 Discipline & Anti-Sexual Harassment Committee (ICC)",
      objective: "To promote ethical behavior and address cases of misconduct or sexual harassment per UGC's Vishakha Guidelines.",
      members: [
        "Female presiding officer",
        "Faculty members",
        "NGO/external member",
        "Student & non-teaching staff representatives"
      ],
      documents: [
        { name: "Policy on Sexual Harassment Prevention", url: "/docs/anti-harassment-policy.pdf" }
      ],
      mandatory: true
    },
    {
      id: 7,
      title: "📚 Library Committee",
      objective: "To oversee procurement, usage, and enhancement of library resources.",
      duties: [
        "Review book recommendations",
        "Budget allocation",
        "Maintain digital and print resource balance"
      ]
    },
    {
      id: 8,
      title: "🎨 Cultural & Literary Committee",
      objective: "To promote extracurricular development through festivals, clubs, competitions, and cultural fests.",
      activities: [
        "Annual college fest organization",
        "Literary club activities",
        "Inter-college competition participation"
      ]
    },
    {
      id: 9,
      title: "💻 IT & Digital Learning Cell",
      objective: "To implement and maintain ICT tools for teaching, learning, and administration.",
      responsibilities: [
        "LMS management",
        "Digital classroom support",
        "Technical infrastructure maintenance"
      ]
    },
    {
      id: 10,
      title: "🌍 NSS Unit",
      objective: "To instill a sense of social responsibility and community service among students through the National Service Scheme.",
      activities: [
        "Regular community service activities",
        "Blood donation camps",
        "Environmental conservation programs"
      ]
    }
  ]
};

const {data, error} = await fetchPageData("committees-&-cells")


committeeData = data as any ?? committeeData;
export default function CommitteesPage(/*{ committeeData }*/) {
  const { hero, introduction, committees } = committeeData;

  return (
    <>
         <Head>
        <title>Committees & Cells | CATALYST College</title>
        <meta name="description" content="Explore our statutory and functional committees ensuring quality education, student welfare, and institutional excellence" />
        <meta name="keywords" content="college committees, anti-ragging, IQAC, placement cell, grievance redressal, women's cell, NSS" />
        
        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="Committees & Cells | CATALYST College" />
        <meta property="og:description" content="Governance bodies ensuring quality and student welfare at CATALYST College" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/committees" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/campus-committee.jpg" />

        {/* Optional for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.catalystcollege.edu.in/committees" />
      </Head>

      <HeroSection imageUrl={hero.imageUrl} title={hero.title} description={hero.description} />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              {introduction.content}
            </p>
          </div>
        </section>

        {/* Committees Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {committees.map((committee) => (
            <div key={committee.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 flex-grow">{committee.title}</h2>
                  {committee.mandatory && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Mandatory
                    </span>
                  )}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Objective:</h3>
                  <p className="text-gray-600">{committee.objective}</p>
                </div>

                {/* Responsibilities/Activities */}
                {committee.responsibilities && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-1">
                      {committee.activities ? 'Activities:' : 'Responsibilities:'}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {(committee.responsibilities ).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Composition/Members */}
                {(committee.composition || committee.members) && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-1">
                      {committee.members ? 'Members:' : 'Composition:'}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {(committee.composition || committee.members).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Duties (for Library Committee) */}
                {committee.duties && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-1">Duties:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {committee.duties.map((duty, index) => (
                        <li key={index}>{duty}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contacts */}
                {committee.contacts && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-1">Contact:</h3>
                    <div className="space-y-2">
                      {committee.contacts.map((contact, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-gray-700 font-medium mr-2">{contact.label}:</span>
                          {contact.type === 'email' && (
                            <a href={`mailto:${contact.value}`} className="text-blue-600 hover:underline">
                              {contact.value}
                            </a>
                          )}
                          {contact.type === 'phone' && (
                            <a href={`tel:${contact.value}`} className="text-blue-600 hover:underline">
                              {contact.value}
                            </a>
                          )}
                          {contact.type === 'link' && (
                            <a href={contact.value} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              {contact.value.replace(/^https?:\/\//, '')}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Documents */}
                {committee.documents && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-1">Documents:</h3>
                    <div className="space-y-2">
                      {committee.documents.map((doc, index) => (
                        <a 
                          key={index} 
                          href={doc.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:underline"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          {doc.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}