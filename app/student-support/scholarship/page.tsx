import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaFemale, FaShieldAlt, FaRupeeSign, FaFileAlt, FaUniversity } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Scholarship Programs | Catalyst College Patna',
  description: 'Discover financial support opportunities including Ladli Beti Yojna, Army scholarships, and fee waivers for BBA, BCA, and BSc IT students',
  keywords: [
    'Catalyst College scholarships',
    'Ladli Beti Yojna Patna',
    'Army scholarship',
    'BCA fee waiver',
    'BBA financial aid',
    'Bihar student credit card',
    'college scholarship programs'
  ],
  openGraph: {
    title: 'Scholarship Programs | Catalyst College Patna',
    description: 'Financial support schemes to make quality education accessible for all deserving students',
    images: [
      {
        url: 'https://catalystcollegepatna.edu.in/images/scholarship-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Scholarship Opportunities at Catalyst College',
      },
    ],
  },
};

const ScholarshipPage = async() => {
 let pageData = {
    "page_name": "scholarship",
    "heroSection": {
        "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752839829/486697322_1061169472705658_3251323799160285940_n_ctnnsm.jpg",
        "title": "Scholarship Opportunities",
        "description": "Financial support schemes for deserving students across BBA, BCA, and BSc IT programs"
    },
    "scholarshipSchemes": [
        {
            "name": "Ladli Beti Yojna",
            "benefit": "50% Tuition Fee Waiver",
            "eligibility": [
                "Female students from Bihar",
                "Registered under Ladli Beti Scheme",
                "Permanent residents of Bihar"
            ],
            "documents": [
                "Ladli Beti certificate",
                "Domicile certificate",
                "Aadhaar card",
                "Admission proof"
            ],
            "process": "Submit documents to college office within first month of semester",
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753273760/maxresdefault_i8hyux.jpg"
        },
        {
            "name": "Army Personnel Scholarship",
            "benefit": "100% Tuition Fee Waiver",
            "eligibility": [
                "Children of Indian Army officials",
                "Killed in line of duty",
                "Valid supporting documents"
            ],
            "documents": [
                "Army casualty certificate",
                "Proof of relationship",
                "Academic records",
                "ID proof"
            ],
            "process": "Application reviewed by Scholarship Committee",
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753273653/HD-wallpaper-indian-soldiers-with-flag-indian-army_kfjjc6.jpg"
        },
        {
            "name": "Bihar Student Credit Card",
            "benefit": "Financial support up to ₹4 Lakhs",
            "eligibility": [
                "Bihar residents",
                "Completed 12th grade",
                "Enrolled in approved UG programs"
            ],
            "documents": [
                "Aadhaar card",
                "Residence proof",
                "Academic certificates",
                "College admission letter"
            ],
            "process": "Apply online through Bihar government portal",
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752924735/download_q32wr2.jpg",
            "isCreditCard": true
        }
    ],
    "testimonials": [
        {
            "quote": "The Ladli Beti scholarship enabled me to pursue BCA without financial burden on my family. I'm grateful for this opportunity.",
            "name": "Priya Kumari",
            "program": "BCA, 2nd Year"
        },
        {
            "quote": "As the daughter of a martyred soldier, the Army scholarship honors my father's sacrifice while supporting my education.",
            "name": "Anjali Singh",
            "program": "BBA, 3rd Year"
        }
    ]
}

 const { data , error}  = await fetchPageData("scholarship")
pageData = data as any ?? pageData
const { heroSection, scholarshipSchemes, testimonials} = pageData

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <HeroSection
        title={heroSection.title}
        description={heroSection.description}
        imageUrl={heroSection.imageUrl}
        overlayOpacity={0.3}
        height="xl"
      />

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Financial Support for Your Education</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>
              At <span className="font-semibold text-blue-600">Catalyst College Patna</span>, we firmly believe that financial challenges should never be a barrier to quality education. We facilitate multiple scholarship schemes offered by the government and provide special fee waivers to ensure that every eligible student can pursue higher education with dignity and equal opportunity.
            </p>
            <p className="mt-4">
              Our scholarship programs support students from various backgrounds, including meritorious candidates, female students, and children of armed forces personnel. We guide students through the application process to maximize their chances of receiving financial assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarship Schemes Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Available Scholarship Schemes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarshipSchemes.map((scheme, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 relative">
                  <Image 
                    src={scheme.image}
                    alt={scheme.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="flex items-center">
                      <h3 className="text-2xl font-bold text-white">{scheme.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Benefit:</h4>
                      <p className="text-blue-600 font-medium">{scheme.benefit}</p>
                    </div>
                    {scheme.isCreditCard && (
                      <a 
                        href="/academics/credit-card-scheme" 
                        className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        More Details
                      </a>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Eligibility:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {scheme.eligibility.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Required Documents:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {scheme.documents.map((doc, i) => (
                        <li key={i}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Application Process:</h4>
                    <p className="text-gray-600">{scheme.process}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Instructions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaFileAlt className="text-blue-500 mr-3" />
              Important Guidelines
            </h2>
            
            <div className="prose prose-lg text-gray-600">
              <ul className="space-y-4">
                <li>
                  <strong>Application Deadline:</strong> All scholarship applications must be submitted within 30 days of admission or the start of the academic year.
                </li>
                <li>
                  <strong>Renewal Criteria:</strong> Renewable scholarships require maintaining a minimum 75% attendance and passing all subjects with at least 60% marks.
                </li>
                <li>
                  <strong>Documentation:</strong> Submit clear, legible copies of all required documents. Original documents may be required for verification.
                </li>
                <li>
                  <strong>Combination Policy:</strong> Generally, only one scholarship can be availed at a time unless specifically approved by the administration.
                </li>
                <li>
                  <strong>Disbursement:</strong> Approved scholarships will be applied as fee concessions in subsequent semesters after verification.
                </li>
                <li>
                  <strong>Fraud Prevention:</strong> Any attempt to provide false information will result in immediate disqualification and possible disciplinary action.
                </li>
              </ul>
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help Applying?</h3>
                <p>
                  Our Student Support Cell provides guidance on scholarship applications every Tuesday and Thursday from 10 AM to 3 PM. Bring all relevant documents for on-the-spot assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Scholarship Beneficiaries Speak</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ScholarshipPage;