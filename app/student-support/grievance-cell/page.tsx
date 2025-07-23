import Head from 'next/head';
import { NextPage } from 'next';
import { fetchPageData } from '@/lib/useFetchData';

const GrievancePage: NextPage = async() => {
  // Grievance data
  let grievanceData = {
  "objective": "The Grievance Redressal Cell at Catalyst College is committed to creating a safe, supportive, and inclusive academic environment. The Cell provides a transparent mechanism for students, faculty, and staff to voice their concerns and get timely resolutions.",
  "purposes": [
    "To uphold the dignity of all stakeholders by ensuring that grievances are resolved impartially and promptly",
    "To maintain a peaceful and conducive educational environment",
    "To promote accountability and transparency in college operations"
  ],
  "types": [
    "Academic concerns (teaching quality, exam delays, unfair grading)",
    "Harassment, bullying, or discrimination (including caste, gender, religion)",
    "Infrastructure (classrooms, labs, hostels, sanitation)",
    "Administration (fees, ID cards, certificates, scholarships)",
    "Any other issue affecting a student's academic or personal well-being"
  ],
  "note": "Cases of sexual harassment will be handled by the Internal Complaints Committee (ICC) as per UGC/AICTE norms.",
  "mechanism": [
    {
      "step": "Submission of Complaint",
      "details": "Fill out the online grievance form or submit a written complaint in the Grievance Box placed on campus."
    },
    {
      "step": "Review",
      "details": "The Grievance Cell will review the complaint in a confidential manner within 7 working days."
    },
    {
      "step": "Resolution",
      "details": "The matter will be resolved through consultation with relevant departments or authorities, with feedback given to the complainant."
    },
    {
      "step": "Escalation (if needed)",
      "details": "If unresolved, the grievance may be escalated to the Principal or Governing Body."
    }
  ],
  "committee": [
    {
      "name": "Prof. ABC Verma",
      "designation": "Dean (Student Welfare)",
      "role": "Chairperson",
      "email": "dean@catalystcollege.in"
    },
    {
      "name": "Ms. Ritu Sharma",
      "designation": "Faculty, Dept. of IT",
      "role": "Member",
      "email": "ritu.sharma@catalystcollege.in"
    },
    {
      "name": "Mr. Rajeev Yadav",
      "designation": "Administrative Officer",
      "role": "Member Secretary",
      "email": "rajeev@catalystcollege.in"
    },
    {
      "name": "Student Rep.",
      "designation": "Final Year Student (BBM)",
      "role": "Student Representative",
      "email": "grievance@catalystcollege.in"
    }
  ],
  "submissionMethods": [
    {
      "method": "Email",
      "details": "grievance@catalystcollege.in",
      "icon": "📩"
    },
    {
      "method": "Online Form",
      "details": "Submit Your Grievance",
      "icon": "📝",
      "link": "/submit-grievance"
    },
    {
      "method": "Physical Box",
      "details": "Located outside the Admin Office",
      "icon": "📮"
    }
  ],
  "policies": [
    "Grievance Redressal Policy PDF",
    "AICTE/UGC Guidelines",
    "Code of Conduct Manual"
  ]
}
const { data, error} = await fetchPageData("grievance-cell");
grievanceData = data as any ?? grievanceData

  return (
    <>
      <Head>
        <title>Grievance Redressal | Catalyst College</title>
        <meta name="description" content="Submit and track grievances at Catalyst College through our transparent redressal system" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Grievance Redressal Cell</h1>
            <p className="text-xl max-w-3xl mx-auto">{grievanceData.objective}</p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12 space-y-12">
          {/* Purpose Section */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Purpose of the Grievance Cell</h2>
            <ul className="space-y-4">
              {grievanceData.purposes.map((purpose, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{purpose}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Types of Grievances */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Types of Grievances Handled</h2>
            <ul className="space-y-3">
              {grievanceData.types.map((type, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-3">•</span>
                  <span>{type}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-700/50 rounded-lg border-l-4 border-red-400">
              <p className="italic">{grievanceData.note}</p>
            </div>
          </section>

          {/* Redressal Mechanism */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Grievance Redressal Mechanism</h2>
            <div className="space-y-8">
              {grievanceData.mechanism.map((step, index) => (
                <div key={index} className="flex">
                  <div className="bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.step}</h3>
                    <p className="text-gray-300">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Committee Members */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Grievance Cell Committee Members</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Designation</th>
                    <th className="py-3 px-4 text-left">Role in Cell</th>
                    <th className="py-3 px-4 text-left">Contact Email</th>
                  </tr>
                </thead>
                <tbody>
                  {grievanceData.committee.map((member, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/30">
                      <td className="py-4 px-4">{member.name}</td>
                      <td className="py-4 px-4">{member.designation}</td>
                      <td className="py-4 px-4">{member.role}</td>
                      <td className="py-4 px-4 text-blue-400">
                        <a href={`mailto:${member.email}`}>{member.email}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Submission Methods */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">How to Submit a Grievance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {grievanceData.submissionMethods.map((method, index) => (
                <div key={index} className="bg-gray-700/30 rounded-lg p-6 border border-gray-600 hover:border-blue-500 transition-colors">
                  <div className="text-3xl mb-3">{method.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{method.method}</h3>
                  {method.link ? (
                    <a href={method.link} className="text-blue-400 hover:underline">
                      {method.details}
                    </a>
                  ) : (
                    <p>{method.details}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Confidentiality */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Confidentiality & Anti-Retaliation</h2>
            <div className="space-y-4">
              <p>All grievances are handled with strict confidentiality.</p>
              <p>The college ensures that no complainant will face retaliation or discrimination for reporting concerns.</p>
            </div>
          </section>

          {/* Policy Documents */}
          <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Policy Documents</h2>
            <div className="space-y-3">
              {grievanceData.policies.map((policy, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <a href="#" className="text-blue-400 hover:underline">{policy}</a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default GrievancePage;