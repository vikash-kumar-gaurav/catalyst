// app/ipr-cell/page.tsx
import { NextPage } from 'next';
import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';

// JSON data for the IPR Cell
let iprCellData = {
  "hero": {
    "title": "Intellectual Property Rights (IPR) Cell",
    "description": "Protecting innovation through awareness, training, and legal support",
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "overlayOpacity": 0.3,
    "height": "lg"
  },
  "introduction": {
    "title": "About the IPR Cell",
    "content": "The Intellectual Property Rights (IPR) Cell at Tech University is established to foster a culture of innovation and intellectual property protection among students and faculty. The cell facilitates awareness, capacity building, and support for patent filing, copyright registration, and other IPR processes. It ensures that innovative work is legally protected and ethically managed."
  },
  "objectives": {
    "title": "Objectives of the IPR Cell",
    "items": [
      "Promote awareness of intellectual property rights and responsibilities",
      "Guide students and faculty in patenting, publishing, and commercialization",
      "Conduct workshops, seminars, and IPR drives",
      "Facilitate legal support for patent filing and documentation",
      "Develop and enforce the institution's IPR policy"
    ]
  },
  "composition": {
    "title": "IPR Cell Composition",
    "members": [
      { "name": "Dr. Anil Kumar", "designation": "Principal", "role": "Chairperson" },
      { "name": "Prof. Riya Sharma", "designation": "IPR Coordinator", "role": "Coordinator" },
      { "name": "Mr. Suresh Singh", "designation": "Legal Advisor (External)", "role": "Legal Guidance" },
      { "name": "Ms. Tanvi Raj", "designation": "Faculty, Dept. of CS", "role": "Member" },
      { "name": "Mr. Arvind Sinha", "designation": "Research Scholar", "role": "Member (Student rep.)" }
    ]
  },
  "policy": {
    "title": "Institutional IPR Policy",
    "summaryPoints": [
      "Ownership of IP created during funded research",
      "Revenue sharing between college and inventor",
      "Patent application process and filing timeline",
      "Use of external legal or IP consultants"
    ],
    "downloadLink": "/documents/ipr-policy.pdf"
  },
  "services": {
    "title": "Services Provided",
    "items": [
      "Patent search and novelty analysis",
      "Support in drafting patent applications",
      "Collaboration with registered patent attorneys",
      "Copyright and trademark registration help",
      "Awareness programs and student competitions",
      "Research journal guidance for original works"
    ]
  },
  "achievements": {
    "title": "IPR Achievements",
    "items": [
      { "title": "Smart Water Tap", "type": "Patent", "inventors": "Prof. Riya Sharma", "status": "Filed", "year": "2024" },
      { "title": "Attendance Tracker", "type": "Copyright", "inventors": "BCA Final Year Team", "status": "Registered", "year": "2023" }
    ]
  },
  "events": {
    "title": "Upcoming IPR Events",
    "items": [
      { "title": "IPR Awareness Workshop", "date": "October 15, 2024", "speaker": "Dr. Mehta (Patent Attorney)" },
      { "title": "Patent Drafting Training", "date": "November 5-6, 2024", "speaker": "Mr. Suresh Singh" },
      { "title": "Student Innovation Protection Drive", "date": "December 10-12, 2024", "speaker": "IPR Cell Team" }
    ]
  }
}


const IprCellPage: NextPage = async() => {
  const { data, error} = await fetchPageData("ipr-cell")
 iprCellData = data as any ?? iprCellData
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title={iprCellData.hero.title}
        description={iprCellData.hero.description}
        imageUrl={iprCellData.hero.imageUrl}
        overlayOpacity={iprCellData.hero.overlayOpacity}
      />

      {/* Introduction */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{iprCellData.introduction.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {iprCellData.introduction.content}
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{iprCellData.objectives.title}</h2>
          <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {iprCellData.objectives.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Composition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{iprCellData.composition.title}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Designation</th>
                  <th className="py-3 px-4 text-left">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {iprCellData.composition.members.map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-4">{member.name}</td>
                    <td className="py-4 px-4">{member.designation}</td>
                    <td className="py-4 px-4">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{iprCellData.policy.title}</h2>
          <ul className="space-y-4 mb-8">
            {iprCellData.policy.summaryPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm font-semibold mr-3">{index + 1}</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <a href={iprCellData.policy.downloadLink} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download IPR Policy PDF
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{iprCellData.services.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {iprCellData.services.items.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{iprCellData.achievements.title}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Title of Work</th>
                  <th className="py-3 px-4 text-left">Type</th>
                  <th className="py-3 px-4 text-left">Inventor(s)</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {iprCellData.achievements.items.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-4">{item.title}</td>
                    <td className="py-4 px-4">{item.type}</td>
                    <td className="py-4 px-4">{item.inventors}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${item.status === 'Filed' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{iprCellData.events.title}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {iprCellData.events.items.map((event, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Date:</span> {event.date}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Speaker:</span> {event.speaker}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need IPR Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our IPR Cell for guidance on protecting your intellectual property.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Contact Us
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default IprCellPage;