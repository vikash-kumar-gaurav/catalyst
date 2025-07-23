


import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import Head from 'next/head';


let pageData = {
  "page_name": "code-of-conduct",
  "content": {
    "introduction": {
      "title": "Our Commitment",
      "text": "At CATALYST College, we are committed to fostering a learning environment based on integrity, respect, responsibility, and academic excellence. This Code of Conduct outlines the standards of behavior expected from students, faculty, and staff to ensure a professional, safe, and inclusive campus community."
    },
    "studentCode": {
      "title": "🎓 Student Code of Conduct",
      "sections": [
        {
          "title": "Academic Responsibilities",
          "items": [
            "Attend classes and practicals regularly (minimum 75% attendance required)",
            "Submit assignments on time and refrain from plagiarism",
            "Follow examination rules strictly (no malpractice tolerated)",
            "Maintain academic integrity in all coursework"
          ]
        },
        {
          "title": "Behavioral Expectations",
          "items": [
            "Maintain discipline on campus and in hostels",
            "Respect faculty, staff, and fellow students",
            "Absolutely no ragging, harassment, or discrimination",
            "No political activities or protests on campus"
          ]
        },
        {
          "title": "Dress Code & Identification",
          "items": [
            "Wear the prescribed uniform during academic hours",
            "Display college ID card visibly at all times on campus",
            "Maintain modest and professional appearance"
          ]
        },
        {
          "title": "Digital Conduct",
          "items": [
            "Use internet and IT facilities responsibly",
            "No cyberbullying, hacking, or sharing offensive content",
            "Respect copyright laws (no software/media piracy)",
            "Follow social media guidelines when representing the college"
          ]
        }
      ]
    },
    "facultyCode": {
      "title": "👨‍🏫 Faculty & Staff Code of Conduct",
      "sections": [
        {
          "title": "Professional Responsibilities",
          "items": [
            "Maintain integrity in teaching, evaluation, and mentorship",
            "Encourage critical thinking and inclusive discussions",
            "Be punctual and prepared for all academic commitments",
            "Participate in continuous professional development"
          ]
        },
        {
          "title": "Ethical Standards",
          "items": [
            "Absolutely no favoritism or discrimination of any kind",
            "Respect institutional hierarchy and policies",
            "Maintain confidentiality of student records",
            "Declare conflicts of interest when they arise"
          ]
        }
      ]
    },
    "prohibitedConduct": {
      "title": "🚫 Strictly Prohibited Conduct",
      "sections": [
        {
          "title": "General Prohibitions",
          "items": [
            "Ragging in any form (as per UGC Regulations 2009)",
            "Sexual harassment (as per POSH Act 2013)",
            "Substance abuse or possession of illegal materials",
            "Physical/verbal violence or threats"
          ]
        },
        {
          "title": "Institutional Violations",
          "items": [
            "Tampering with college property or records",
            "Financial misconduct or bribery",
            "Unauthorized access to restricted areas",
            "Misuse of college name or resources"
          ]
        }
      ],
      "note": "Violations may lead to immediate suspension and legal action as applicable under college rules and Indian law."
    },
    "disciplinaryProcedure": {
      "title": "⚖️ Disciplinary Procedure",
      "complaintProcess": {
        "title": "Complaint Process",
        "steps": [
          "Formal complaint submitted to Head of Department/Principal",
          "Preliminary inquiry within 3 working days",
          "Show-cause notice issued if prima facie case exists",
          "Response period of 5 working days granted",
          "Disciplinary Committee hearing with all parties"
        ]
      },
      "penalties": [
        {
          "type": "Minor Violations",
          "items": [
            "Written warning",
            "Community service",
            "Behavioral counseling"
          ]
        },
        {
          "type": "Major Violations",
          "items": [
            "Suspension (1 week to 1 month)",
            "Grade reduction",
            "Monetary fines"
          ]
        },
        {
          "type": "Severe Violations",
          "items": [
            "Expulsion from college",
            "Legal action",
            "Permanent record annotation"
          ]
        }
      ],
      "appealProcess": "Any disciplinary action may be appealed within 10 working days to the Governing Council. Appeals must be submitted in writing with supporting evidence."
    },
    "affirmation": {
      "title": "📜 Affirmation & Compliance",
      "content": "All members of the CATALYST College community are required to read, understand, and comply with this Code of Conduct. By enrolling or working at the institution, individuals affirm their commitment to these standards.",
      "declarationProcess": {
        "title": "Declaration Process",
        "items": [
          "Students sign during admission and at start of each academic year",
          "Faculty/staff sign during onboarding and annual review",
          "Parents/guardians acknowledge for minor students",
          "Available in multiple languages for accessibility"
        ],
        "downloadLink": "/docs/code-of-conduct-declaration.pdf"
      }
    }
  },
  "heroSection": {
    "title": "Code of Conduct",
    "description": "Our shared commitment to integrity, respect and academic excellence",
    "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740493/497458717_24182590931345917_8478640871238434579_n_cf8d9j.jpg",
    "overlayOpacity": 0.3,
    "height": "lg"
  }
}





export default async function CodeOfConductPage() {
  const { data, error } = await fetchPageData("code-of-conduct")
  pageData = data as any ?? pageData;
  return (
    <>

      <Head>
        <title>Code of Conduct | CATALYST College</title>
        <meta name="description" content="Official code of conduct for students, faculty and staff at CATALYST College - outlining academic, behavioral and professional expectations" />
        <meta name="keywords" content="college rules, student conduct, academic integrity, campus discipline, anti-ragging policy" />
        <meta property="og:title" content="Code of Conduct | CATALYST College" />
        <meta property="og:description" content="Standards of behavior and ethical expectations for our academic community" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/code-of-conduct" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/campus-conduct.jpg" />
      </Head>

      <HeroSection
        title={pageData.heroSection.title}
        description={pageData.heroSection.description}
        imageUrl={pageData.heroSection.imageUrl}
        overlayOpacity={pageData.heroSection.overlayOpacity}

      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{pageData.content.introduction.title}</h2>
            <p className="text-lg text-gray-700">
              {pageData.content.introduction.text}
            </p>
          </div>
        </section>

        {/* Student Code */}
        <section className="mb-16">
          <div className="bg-blue-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">{pageData.content.studentCode.title}</h2>
          </div>
          <div className="border border-blue-50 rounded-b-lg p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {pageData.content.studentCode.sections.slice(0, 2).map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {pageData.content.studentCode.sections.slice(2).map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Code */}
        <section className="mb-16">
          <div className="bg-green-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-green-800">{pageData.content.facultyCode.title}</h2>
          </div>
          <div className="border border-green-50 rounded-b-lg p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {pageData.content.facultyCode.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibited Conduct */}
        <section className="mb-16">
          <div className="bg-red-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-red-800">{pageData.content.prohibitedConduct.title}</h2>
          </div>
          <div className="border border-red-50 rounded-b-lg p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {pageData.content.prohibitedConduct.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {section.items.map((item, i) => (
                      <li key={i}><strong>{item.split(' ')[0]}</strong> {item.split(' ').slice(1).join(' ')}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-white p-4 rounded border-l-4 border-red-500">
              <p className="text-red-700 font-medium">
                {pageData.content.prohibitedConduct.note}
              </p>
            </div>
          </div>
        </section>

        {/* Disciplinary Procedure */}
        <section className="mb-16">
          <div className="bg-purple-50 p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-purple-800">{pageData.content.disciplinaryProcedure.title}</h2>
          </div>
          <div className="border border-purple-50 rounded-b-lg p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{pageData.content.disciplinaryProcedure.complaintProcess.title}</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-2">
                  {pageData.content.disciplinaryProcedure.complaintProcess.steps.map((step, index) => (
                    <li key={index} className="pl-2">{step}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Possible Penalties</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {pageData.content.disciplinaryProcedure.penalties.map((penalty, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-sm">
                      <h4 className="font-medium text-gray-800 mb-2">{penalty.type}</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {penalty.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Appeal Process</h4>
                <p className="text-gray-700">
                  {pageData.content.disciplinaryProcedure.appealProcess}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Affirmation Section */}
        <section className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{pageData.content.affirmation.title}</h2>
          <p className="text-gray-700 mb-6">
            {pageData.content.affirmation.content}
          </p>
          <div className="bg-white p-6 rounded border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{pageData.content.affirmation.declarationProcess.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {pageData.content.affirmation.declarationProcess.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href={pageData.content.affirmation.declarationProcess.downloadLink}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Download Declaration Form
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}