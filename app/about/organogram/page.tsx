import HeroSection from '@/components/newHeroImageForAllPage';
import Head from 'next/head';

export default function OrganogramPage() {
  return (
    <>
      <Head>
        <title>Organizational Structure | CATALYST College</title>
        <meta name="description" content="Explore the hierarchical structure and reporting flow of CATALYST College's administration and academic departments" />
        <meta name="keywords" content="college organogram, academic hierarchy, college administration, department structure, governance model" />
        <meta property="og:title" content="Organizational Structure | CATALYST College" />
        <meta property="og:description" content="Visual representation of our college's governance and academic structure" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.catalystcollege.edu.in/organogram" />
        <meta property="og:image" content="https://catalystcollege.edu.in/wp-content/uploads/2023/07/campus-admin.jpg" />
      </Head>

      <HeroSection
        title="Organizational Structure"
        description="Transparent governance and efficient academic administration"
        imageUrl="https://catalystcollege.edu.in/wp-content/uploads/2023/07/campus-admin.jpg"
        overlayOpacity={0.3}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Governance Framework</h2>
          <p className="text-lg text-gray-700">
            The organizational structure of CATALYST College is designed to promote efficient decision-making, academic integrity, and operational transparency. The following chart presents the hierarchy and reporting flow within the institution, from the Governing Body to academic departments and support units.
          </p>
        </section>

        {/* Organizational Chart */}
        <section className="mb-16 overflow-x-auto">
          <div className="min-w-[800px]"> {/* Minimum width for the chart */}
            {/* Governing Body */}
            <div className="flex justify-center mb-8">
              <div className="bg-purple-100 border-2 border-purple-500 rounded-lg p-4 text-center w-64">
                <h3 className="font-bold text-purple-800 text-lg">Governing Body</h3>
                <p className="text-sm text-purple-600">Chairman & Board Members</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-2">
              <div className="h-8 w-0.5 bg-gray-400"></div>
            </div>

            {/* Executive Level */}
            <div className="flex justify-center mb-8">
              <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-4 text-center w-64">
                <h3 className="font-bold text-blue-800 text-lg">Principal</h3>
                <p className="text-sm text-blue-600">Academic & Administrative Head</p>
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
                  <h3 className="font-bold text-green-800 text-lg">Vice Principal</h3>
                </div>
                
                <div className="grid gap-4">
                  <div className="bg-green-50 border border-green-300 rounded-lg p-3 text-center">
                    <h4 className="font-medium text-green-700">Registrar</h4>
                  </div>
                  <div className="bg-green-50 border border-green-300 rounded-lg p-3 text-center">
                    <h4 className="font-medium text-green-700">Controller of Examinations</h4>
                  </div>
                  <div className="bg-green-50 border border-green-300 rounded-lg p-3 text-center">
                    <h4 className="font-medium text-green-700">Finance Officer</h4>
                  </div>
                </div>
              </div>

              {/* Academic Structure */}
              <div className="text-center">
                <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 text-center w-64 mb-4">
                  <h3 className="font-bold text-yellow-800 text-lg">Heads of Department</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-center">
                    <h4 className="font-medium text-yellow-700">BBA</h4>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-center">
                    <h4 className="font-medium text-yellow-700">BCA</h4>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-center">
                    <h4 className="font-medium text-yellow-700">BSc IT</h4>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-center">
                    <h4 className="font-medium text-yellow-700">Commerce</h4>
                  </div>
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
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <h4 className="font-medium text-red-700">IQAC</h4>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <h4 className="font-medium text-red-700">Placement Cell</h4>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <h4 className="font-medium text-red-700">Grievance Cell</h4>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <h4 className="font-medium text-red-700">Women's Cell</h4>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <h4 className="font-medium text-red-700">Library</h4>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <h4 className="font-medium text-red-700">IT Services</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Key Personnel Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Administrative Personnel</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-800 mb-2">Governing Body</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Chairman:</strong> Dr. Rajesh Kumar</li>
                <li><strong>Secretary:</strong> Prof. Anjali Sharma</li>
                <li><strong>Board Members:</strong> 5 eminent members</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Academic Leadership</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Principal:</strong> Dr. Vikram Singh</li>
                <li><strong>Vice Principal:</strong> Dr. Priya Menon</li>
                <li><strong>Registrar:</strong> Mr. Arun Patel</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-green-800 mb-2">Department Heads</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>BBA:</strong> Dr. Neha Gupta</li>
                <li><strong>BCA:</strong> Prof. Sanjay Verma</li>
                <li><strong>BSc IT:</strong> Dr. Amitabh Roy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Governance Model Explanation */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Governance Model</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Decision-Making Process</h3>
              <p className="text-gray-700 mb-4">
                The Governing Body sets strategic direction, while academic and administrative decisions flow through department heads to the Principal. Our structure ensures both top-down policy implementation and bottom-up feedback mechanisms.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
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
                <div className="bg-white p-3 rounded border-l-4 border-blue-300">
                  <h4 className="font-medium text-blue-800">Academic</h4>
                  <p className="text-sm text-gray-600">Reports to Principal</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-300">
                  <h4 className="font-medium text-green-800">Administrative</h4>
                  <p className="text-sm text-gray-600">Reports to Registrar</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-300">
                  <h4 className="font-medium text-purple-800">Quality</h4>
                  <p className="text-sm text-gray-600">Reports to IQAC</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-red-300">
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