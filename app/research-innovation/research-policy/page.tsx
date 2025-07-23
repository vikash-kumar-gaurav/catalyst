// app/research-policy/page.tsx
import { NextPage } from 'next';
import HeroSection from '@/components/newHeroImageForAllPage'
import { fetchPageData } from '@/lib/useFetchData';

// JSON data for research policy
let researchPolicyData = {
  "hero": {
    "title": "Research Policy",
    "description": "Guidelines and framework for promoting excellence in research",
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "overlayOpacity": 0.4,
    "height": "lg"
  },
  "introduction": {
    "title": "Research Policy of Tech University",
    "content": "This Research Policy outlines the principles and procedures adopted by Tech University to promote and regulate research activities within the institution. The policy aims to nurture a culture of academic inquiry, innovation, and socially relevant research while upholding the highest standards of ethics and integrity."
  },
  "objectives": {
    "title": "Objectives",
    "items": [
      "Foster research across disciplines and departments",
      "Encourage participation in national and international research projects",
      "Support faculty and student research through funding, time, and resources",
      "Promote publications in reputed journals (Scopus, UGC-CARE, Web of Science)",
      "Enable collaborations with industry and academic institutions",
      "Establish guidelines for plagiarism, ethics, and IPR"
    ]
  },
  "scope": {
    "title": "Scope and Applicability",
    "items": [
      "Applies to all faculty, research staff, and students",
      "Covers funded and unfunded research",
      "Includes basic research, applied projects, publications, and consultancy"
    ]
  },
  "governance": {
    "title": "Research Governance Structure",
    "bodies": [
      {
        "name": "Research Advisory Committee",
        "role": "Oversees all research activities and policy implementation"
      },
      {
        "name": "Dean of Research",
        "role": "Provides strategic direction and leadership"
      },
      {
        "name": "IQAC",
        "role": "Integrates research quality into institutional processes"
      },
      {
        "name": "IPR Cell",
        "role": "Manages patents, copyrights, and intellectual property"
      },
      {
        "name": "Ethics Committee",
        "role": "Reviews ethical aspects of research projects"
      }
    ]
  },
  "funding": {
    "title": "Research Funding & Support",
    "items": [
      {
        "type": "Internal Grants",
        "details": "Seed funding up to ₹50,000 for promising research proposals"
      },
      {
        "type": "Conference Support",
        "details": "Duty leave and partial funding for presenting at conferences"
      },
      {
        "type": "External Grants",
        "details": "Assistance in applying for UGC, DST, ICSSR, AICTE, DBT grants"
      },
      {
        "type": "Publication Incentives",
        "details": "Cash awards for Scopus/Web of Science publications (₹10,000-25,000)"
      }
    ]
  },
  "publication": {
    "title": "Publication Guidelines",
    "items": [
      "Publish in reputed journals (UGC-CARE, Scopus indexed)",
      "Mandatory plagiarism check (similarity < 15%) using approved tools",
      "Clear authorship guidelines following ICMJE standards",
      "Proper acknowledgment of institutional affiliation and funding sources",
      "Open access publishing encouraged where feasible"
    ]
  },
  "ethics": {
    "title": "Ethical Guidelines",
    "items": [
      "Institutional Ethics Committee approval required for human/animal studies",
      "Zero tolerance for plagiarism, data falsification, and misrepresentation",
      "Protection of vulnerable groups and indigenous knowledge",
      "Conflict of interest disclosure for all research projects",
      "Proper data management and retention policies"
    ]
  },
  "collaborations": {
    "title": "Collaborations & Consultancy",
    "items": [
      "MoUs with industry partners for joint research projects",
      "Clear guidelines for sponsored research and consultancy services",
      "IP ownership determined before project commencement",
      "Revenue sharing: 70% inventor, 20% department, 10% institution"
    ]
  },
  "ipr": {
    "title": "Intellectual Property Rights",
    "items": [
      "Institution owns IP from funded research, shared with creators",
      "IPR Cell provides filing support and legal guidance",
      "Royalty distribution as per collaboration agreements",
      "Technology transfer facilitated through institutional channels"
    ]
  },
  "monitoring": {
    "title": "Monitoring & Evaluation",
    "items": [
      "Annual research performance review through IQAC",
      "Faculty research metrics included in appraisal system",
      "Policy reviewed every 3 years by Research Committee",
      "Dashboard tracking publications, patents, and funded projects"
    ]
  },
  "resources": [
    {
      "title": "Full Research Policy Document",
      "format": "PDF",
      "size": "1.8 MB",
      "link": "#"
    },
    {
      "title": "Research Proposal Template",
      "format": "DOCX",
      "size": "0.2 MB",
      "link": "#"
    },
    {
      "title": "Ethics Committee Application Form",
      "format": "PDF",
      "size": "0.5 MB",
      "link": "#"
    }
  ]
}


const ResearchPolicyPage: NextPage = async() => {
  const { data, error} = await fetchPageData("research-policy");
  researchPolicyData = data as any ?? researchPolicyData
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title={researchPolicyData.hero.title}
        description={researchPolicyData.hero.description}
        imageUrl={researchPolicyData.hero.imageUrl}
        overlayOpacity={researchPolicyData.hero.overlayOpacity}
      />

      {/* Introduction */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{researchPolicyData.introduction.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {researchPolicyData.introduction.content}
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{researchPolicyData.objectives.title}</h2>
          <ul className="space-y-4">
            {researchPolicyData.objectives.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Scope */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{researchPolicyData.scope.title}</h2>
          <ul className="space-y-3">
            {researchPolicyData.scope.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3">{index + 1}</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{researchPolicyData.governance.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {researchPolicyData.governance.bodies.map((body, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{body.name}</h3>
                <p className="text-gray-600">{body.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{researchPolicyData.funding.title}</h2>
          <div className="space-y-6">
            {researchPolicyData.funding.items.map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.type}</h3>
                <p className="text-gray-600">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{researchPolicyData.publication.title}</h2>
          <ul className="space-y-4">
            {researchPolicyData.publication.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mr-3">{index + 1}</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ethical Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{researchPolicyData.ethics.title}</h2>
          <ul className="space-y-4">
            {researchPolicyData.ethics.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 text-sm font-medium mr-3">{index + 1}</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{researchPolicyData.collaborations.title}</h2>
          <ul className="space-y-4">
            {researchPolicyData.collaborations.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 text-sm font-medium mr-3">{index + 1}</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* IPR */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{researchPolicyData.ipr.title}</h2>
          <ul className="space-y-4">
            {researchPolicyData.ipr.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mr-3">{index + 1}</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Monitoring */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{researchPolicyData.monitoring.title}</h2>
          <ul className="space-y-4">
            {researchPolicyData.monitoring.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mr-3">{index + 1}</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Policy Documents & Resources</h2>
          
          <div className="space-y-4">
            {researchPolicyData.resources.map((resource, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                <div>
                  <h3 className="font-medium">{resource.title}</h3>
                  <p className="text-gray-300 text-sm">
                    {resource.format} {resource.size && `• ${resource.size}`}
                  </p>
                </div>
                <a 
                  href={resource.link} 
                  className="px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-100 transition-colors flex items-center"
                >
                  {resource.format === "PDF" ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                      </svg>
                      Download
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Research Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our research office for guidance on policy implementation and research initiatives.
          </p>
          <button className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-8 rounded-full transition-colors">
            Contact Research Office
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResearchPolicyPage;