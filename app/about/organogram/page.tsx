import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import Head from 'next/head';

// Organizational data in JSON format
let orgData = {
  "title": "Organizational Structure",
  "description": "Transparent governance and efficient academic administration",
  "meta": {
    "title": "Organizational Structure | CATALYST College",
    "description": "Explore the hierarchical structure and reporting flow of CATALYST College's administration and academic departments",
    "keywords": "college organogram, academic hierarchy, college administration, department structure, governance model",
    "og": {
      "title": "Organizational Structure | CATALYST College",
      "description": "Visual representation of our college's governance and academic structure",
      "type": "website",
      "url": "https://www.catalystcollege.edu.in/organogram",
      "image": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/campus-admin.jpg"
    }
  },
  "heroImage": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752927606/WhatsApp_Image_2025-07-19_at_17.46.49_fcb8ec33_mdu3no.jpg",
  "governingBody": {
    "title": "Governing Body",
    "subtitle": "Chairman & Board Members",
    "members": [
      {"role": "Chairman", "name": "Dr. Rajesh Kumar"},
      {"role": "Secretary", "name": "Prof. Anjali Sharma"},
      {"role": "Board Members", "name": "5 eminent members"}
    ]
  },
  "principal": {
    "title": "Principal",
    "subtitle": "Academic & Administrative Head",
    "name": "Dr. Vikram Singh"
  },
  "vicePrincipal": {
    "title": "Vice Principal",
    "name": "Dr. Priya Menon"
  },
  "administrative": [
    {"title": "Registrar", "name": "Mr. Arun Patel"},
    {"title": "Controller of Examinations", "name": "Dr. Sanjay Mehta"},
    {"title": "Finance Officer", "name": "Ms. Neha Kapoor"}
  ],
  "departments": [
    {"title": "BBA", "head": "Dr. Neha Gupta"},
    {"title": "BCA", "head": "Prof. Sanjay Verma"},
    {"title": "BSc IT", "head": "Dr. Amitabh Roy"},
    {"title": "Commerce", "head": "Dr. Ramesh Iyer"}
  ],
  "supportServices": [
    "IQAC", "Placement Cell", "Grievance Cell", 
    "Women's Cell", "Library", "IT Services"
  ]
};

// SVG underline component
const Underline = ({ color = 'text-blue-600', className = '' }) => (
  <svg
    className={`w-24 h-1 ${color} ${className}`}
    viewBox="0 0 96 4"
    preserveAspectRatio="none"
  >
    <path
      d="M0 2 C 30 6, 66 -2, 96 2"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export default async function OrganogramPage() {
  const { data,error} = await fetchPageData("organogram");
  orgData = data as any ?? orgData
  return (
    <>
      <Head>
        <title>{orgData.meta.title}</title>
        <meta name="description" content={orgData.meta.description} />
        <meta name="keywords" content={orgData.meta.keywords} />
        <meta property="og:title" content={orgData.meta.og.title} />
        <meta property="og:description" content={orgData.meta.og.description} />
        <meta property="og:type" content={orgData.meta.og.type} />
        <meta property="og:url" content={orgData.meta.og.url} />
        <meta property="og:image" content={orgData.meta.og.image} />
      </Head>

      <HeroSection
        title={orgData.title}
        description={orgData.description}
        imageUrl={orgData.heroImage}
        overlayOpacity={0.3}
        height="md"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Governance Framework</h2>
          <div className="flex justify-center mb-6">
            <Underline color="text-purple-500" />
          </div>
          <p className="text-lg text-gray-700">
            The organizational structure of CATALYST College is designed to promote efficient decision-making, academic integrity, and operational transparency. The following chart presents the hierarchy and reporting flow within the institution, from the Governing Body to academic departments and support units.
          </p>
        </section>

        {/* Organizational Chart */}
        <section className="mb-16">
          <div className="relative">
            {/* Mobile View - Vertical Structure */}
            <div className="lg:hidden space-y-8">
              {/* Governing Body */}
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 border-2 border-purple-500 rounded-lg p-4 text-center w-full max-w-xs">
                  <h3 className="font-bold text-purple-800 text-lg">{orgData.governingBody.title}</h3>
                  <p className="text-sm text-purple-600">{orgData.governingBody.subtitle}</p>
                </div>
                <div className="h-8 w-0.5 bg-gray-400 my-2"></div>
              </div>

              {/* Principal */}
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-4 text-center w-full max-w-xs">
                  <h3 className="font-bold text-blue-800 text-lg">{orgData.principal.title}</h3>
                  <p className="text-sm text-blue-600">{orgData.principal.subtitle}</p>
                </div>
                <div className="h-8 w-0.5 bg-gray-400 my-2"></div>
              </div>

              {/* Vice Principal */}
              <div className="flex flex-col items-center">
                <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 text-center w-full max-w-xs">
                  <h3 className="font-bold text-green-800 text-lg">{orgData.vicePrincipal.title}</h3>
                </div>
                <div className="h-8 w-0.5 bg-gray-400 my-2"></div>
              </div>

              {/* Administrative */}
              <div className="space-y-4">
                {orgData.administrative.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-green-50 border border-green-300 rounded-lg p-3 text-center w-full max-w-xs">
                      <h4 className="font-medium text-green-700">{item.title}</h4>
                    </div>
                    {index < orgData.administrative.length - 1 && (
                      <div className="h-4 w-0.5 bg-gray-300 my-1"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="h-8 w-0.5 bg-gray-400 mx-auto my-2"></div>

              {/* Departments */}
              <div className="grid grid-cols-2 gap-4">
                {orgData.departments.map((dept, index) => (
                  <div key={index} className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-center">
                    <h4 className="font-medium text-yellow-700">{dept.title}</h4>
                  </div>
                ))}
              </div>

              <div className="h-8 w-0.5 bg-gray-400 mx-auto my-2"></div>

              {/* Support Services */}
              <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4 text-center w-full max-w-xs mx-auto mb-4">
                <h3 className="font-bold text-red-800 text-lg">Support Services</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {orgData.supportServices.map((service, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                    <h4 className="font-medium text-red-700">{service}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop View - Horizontal Structure */}
            <div className="hidden lg:block min-w-[800px]">
              {/* Governing Body */}
              <div className="flex justify-center mb-8">
                <div className="bg-purple-100 border-2 border-purple-500 rounded-lg p-4 text-center w-64">
                  <h3 className="font-bold text-purple-800 text-lg">{orgData.governingBody.title}</h3>
                  <p className="text-sm text-purple-600">{orgData.governingBody.subtitle}</p>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center mb-2">
                <div className="h-8 w-0.5 bg-gray-400"></div>
              </div>

              {/* Principal */}
              <div className="flex justify-center mb-8">
                <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-4 text-center w-64">
                  <h3 className="font-bold text-blue-800 text-lg">{orgData.principal.title}</h3>
                  <p className="text-sm text-blue-600">{orgData.principal.subtitle}</p>
                </div>
              </div>

              {/* Connectors to Admin and Academic */}
              <div className="flex justify-around mb-4 px-16">
                <div className="h-8 w-0.5 bg-gray-400"></div>
                <div className="h-8 w-0.5 bg-gray-400"></div>
              </div>

              {/* Admin and Academic Row */}
              <div className="flex justify-around mb-8">
                {/* Administrative Offices */}
                <div className="text-center">
                  <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 text-center w-64 mb-4">
                    <h3 className="font-bold text-green-800 text-lg">{orgData.vicePrincipal.title}</h3>
                  </div>
                  
                  <div className="grid gap-4">
                    {orgData.administrative.map((item, index) => (
                      <div key={index} className="bg-green-50 border border-green-300 rounded-lg p-3 text-center">
                        <h4 className="font-medium text-green-700">{item.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Structure */}
                <div className="text-center">
                  <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 text-center w-64 mb-4">
                    <h3 className="font-bold text-yellow-800 text-lg">Heads of Department</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {orgData.departments.map((dept, index) => (
                      <div key={index} className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-center">
                        <h4 className="font-medium text-yellow-700">{dept.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connectors to Support Services */}
              <div className="flex justify-center mb-4">
                <div className="h-8 w-0.5 bg-gray-400"></div>
              </div>

              {/* Support Services */}
              <div className="flex justify-center">
                <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4 text-center w-64 mb-4">
                  <h3 className="font-bold text-red-800 text-lg">Support Services</h3>
                </div>
              </div>

              {/* Support Services Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {orgData.supportServices.map((service, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                    <h4 className="font-medium text-red-700">{service}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Personnel Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Key Administrative Personnel</h2>
          <div className="flex justify-center mb-8">
            <Underline color="text-blue-500" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-800 mb-2">{orgData.governingBody.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {orgData.governingBody.members.map((member, index) => (
                  <li key={index}><strong>{member.role}:</strong> {member.name}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Academic Leadership</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Principal:</strong> {orgData.principal.name}</li>
                <li><strong>Vice Principal:</strong> {orgData.vicePrincipal.name}</li>
                <li><strong>Registrar:</strong> {orgData.administrative[0].name}</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-800 mb-2">Department Heads</h3>
              <ul className="space-y-2 text-gray-700">
                {orgData.departments.map((dept, index) => (
                  <li key={index}><strong>{dept.title}:</strong> {dept.head}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Governance Model Explanation */}
        <section className="bg-gray-50 p-8 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Governance Model</h2>
          <div className="flex mb-6">
            <Underline color="text-gray-600" className="w-16" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Decision-Making Process</h3>
              <p className="text-gray-700 mb-4">
                The Governing Body sets strategic direction, while academic and administrative decisions flow through department heads to the Principal. Our structure ensures both top-down policy implementation and bottom-up feedback mechanisms.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                <li>Quarterly Governing Body meetings</li>
                <li>Monthly Academic Council reviews</li>
                <li>Weekly departmental meetings</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Committees & Reporting</h3>
              <p className="text-gray-700 mb-4">
                Specialized committees report directly to relevant authorities while maintaining cross-functional coordination:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg border-l-4 border-blue-300 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-blue-800">Academic</h4>
                  <p className="text-sm text-gray-600">Reports to Principal</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-green-300 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-green-800">Administrative</h4>
                  <p className="text-sm text-gray-600">Reports to Registrar</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-purple-300 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-purple-800">Quality</h4>
                  <p className="text-sm text-gray-600">Reports to IQAC</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-red-300 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-red-800">Student Services</h4>
                  <p className="text-sm text-gray-600">Reports to Vice Principal</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}