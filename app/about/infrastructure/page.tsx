import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import Head from 'next/head';


export default async function InfrastructurePage() {
let infrastructureData = {
  "hero": {
    "title": "Catalyst Infrastructure ",
    "description": "A technology-enabled campus designed for academic excellence and student growth",
    "imageUrl": "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/487824369_1061032899385982_1193664897519214924_n.jpg",
    "overlayOpacity": 0.3,
    "height": "lg"
  },
  "sections": {
    "introduction": {
      "title": "Why Infrastructure Matters",
      "content": "At CATALYST College, we believe that a great learning experience starts with a strong foundation. Our Patna campus is equipped with modern classrooms, high-tech labs, and student-friendly amenities that support academic, professional, and personal growth. The infrastructure reflects our vision of providing a technology-enabled, inclusive, and industry-aligned environment."
    },
    "campusOverview": {
      "title": "🏫 Campus Overview",
      "description": "Spread across 2 acres in the heart of Patna, our urban campus provides easy accessibility while maintaining an ideal learning atmosphere.",
      "features": [
        "Smart classrooms with digital learning tools",
        "Specialized labs for practical skill development",
        "Dedicated zones for academics and student activities",
        "Modern seminar halls for events and conferences"
      ],
      "imageUrl": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/campus-view.jpg"
    },
    "academicInfrastructure": [
      {
        "title": "🖥️ Smart Classrooms",
        "features": [
          "All classrooms equipped with projectors and smart boards",
          "High-speed Wi-Fi connectivity",
          "Interactive tools for hybrid learning",
          "Ergonomic seating for comfortable learning"
        ],
        "imageUrl": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/smart-class.jpg"
      },
      {
        "title": "💻 Computer Labs",
        "features": [
          "150+ computers with latest configurations",
          "Licensed software (Python, Java, DBMS, etc.)",
          "Dedicated lab for networking and cybersecurity",
          "High-speed internet access"
        ],
        "imageUrl": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/computer-lab.jpg"
      },
      {
        "title": "🔬 Science Labs",
        "features": [
          "Well-equipped physics and chemistry labs",
          "Modern apparatus and safety equipment",
          "Dedicated research spaces",
          "Certified laboratory instructors"
        ],
        "imageUrl": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/science-lab.jpg"
      }
    ],
    "library": {
      "title": "📚 Library & Digital Resources",
      "features": [
        "5,000+ titles and academic journals",
        "Access to National Digital Library and e-resources",
        "Dedicated reading and research zones",
        "Digital catalog system"
      ],
      "imageUrl": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/library.jpg"
    },
    "seminarHalls": {
      "title": "🎯 Seminar Halls & Auditoriums",
      "features": [
        "200+ seating capacity with AC facilities",
        "Advanced audio-visual systems",
        "Regular guest lectures and workshops",
        "Annual fest and cultural event venue"
      ],
      "imageUrl": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/seminar-hall.jpg"
    },
    "studentFacilities": [
      {
        "title": "☕ Cafeteria",
        "description": "Hygienic food court with variety of meal options",
        "imageUrl": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/cafeteria.jpg"
      },
      {
        "title": "🏠 Hostel Facilities",
        "description": "Safe and comfortable accommodation with 24/7 security",
        "imageUrl": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/hostel.jpg"
      },
      {
        "title": "📶 Wi-Fi Campus",
        "description": "High-speed internet across entire campus",
        "imageUrl": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/wifi-campus.jpg"
      }
    ],
    "safety": {
      "title": "🛡️ Green & Safe Campus",
      "features": [
        "24/7 CCTV surveillance",
        "Fire safety systems in all buildings",
        "Eco-friendly campus initiatives",
        "Medical room with first-aid facilities"
      ],
      "imageUrl": "https://catalystcollege.edu.in/wp-content/uploads/2023/07/campus-safety.jpg"
    }
  }
}

const { data ,error } = await fetchPageData("infrastructure")
console.log(data);


infrastructureData = data as any ?? infrastructureData;
const { sections } = infrastructureData;

  return (
    <>
    <Head>
      <title>State-of-the-Art Infrastructure | CATALYST College</title>
      <meta
        name="description"
        content="Explore CATALYST College's modern campus featuring smart classrooms, advanced labs, digital library, and student-friendly facilities in Bihar."
      />
      <meta
        name="keywords"
        content="Catalyst College infrastructure, Bihar college facilities, modern classrooms, computer labs, campus tour, hostel facilities"
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="State-of-the-Art Infrastructure | CATALYST College" />
      <meta
        property="og:description"
        content="Premier educational infrastructure in Bihar with technology-enabled learning spaces"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.catalystcollege.edu.in/infrastructure" />
      <meta
        property="og:image"
        content="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/487824369_1061032899385982_1193664897519214924_n.jpg"
      />

      {/* SEO Essentials */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://www.catalystcollege.edu.in/infrastructure" />
    </Head>

      <HeroSection imageUrl={infrastructureData.hero.imageUrl} title={infrastructureData.hero.title} description={infrastructureData.hero.description} />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{sections.introduction.title}</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700">
              {sections.introduction.content}
            </p>
          </div>
        </section>

        {/* Campus Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{sections.campusOverview.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                {sections.campusOverview.description}
              </p>
              <ul className="space-y-3 text-gray-700">
                {sections.campusOverview.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={sections.campusOverview.imageUrl} 
                alt="CATALYST College Campus View" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Academic Infrastructure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🧱 Academic Infrastructure</h2>
          
          {sections.academicInfrastructure.map((facility, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-8 mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">{facility.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gray-100 rounded-lg overflow-hidden ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                <img 
                  src={facility.imageUrl} 
                  alt={facility.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Library Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{sections.library.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3 text-gray-700">
                {sections.library.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={sections.library.imageUrl} 
                alt="College Library" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Student Facilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🧑‍🎓 Student Facilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sections.studentFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.imageUrl} 
                    alt={facility.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{sections.safety.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3 text-gray-700">
                {sections.safety.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={sections.safety.imageUrl} 
                alt="Campus Safety Features" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📸 Campus Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              sections.campusOverview.imageUrl,
              ...sections.academicInfrastructure.map(f => f.imageUrl),
              sections.library.imageUrl,
              sections.safety.imageUrl,
              ...sections.studentFacilities.map(f => f.imageUrl)
            ].map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={img} 
                  alt={`Campus facility ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}