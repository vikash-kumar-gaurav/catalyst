import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import Head from 'next/head';


export default async function InfrastructurePage() {
let infrastructureData = {
    "page_name": "infrastructure",
    "hero": {
        "title": "Our Infrastructure",
        "description": "A technology-enabled campus designed for academic excellence and student growth",
        "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753097305/ec4d82b1-b8a9-4428-a610-424f89462900.png",
        "overlayOpacity": 0.4,
        "height": "lg"
    },
    "sections": {
        "introduction": {
            "title": "Why Infrastructure Matters",
            "content": "At CATALYST College, we believe that a great learning experience starts with a strong foundation. Our Patna campus is equipped with modern classrooms, high-tech labs, and student-friendly amenities that support academic, professional, and personal growth. The infrastructure reflects our vision of providing a technology-enabled, inclusive, and industry-aligned environment."
        },
        "campusOverview": {
            "title": " 🏫 Campus Overview",
            "description": "Spread across 2 acres in the heart of Patna, our urban campus provides easy accessibility while maintaining an ideal learning atmosphere.",
            "features": [
                "Smart classrooms with digital learning tools",
                "Specialized labs for practical skill development",
                "Dedicated zones for academics and student activities",
                "Modern seminar halls for events and conferences"
            ],
            "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753097044/d7e0f01a-20fb-49ce-8f5a-7d1c1f1baee8.png"
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
                "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753097050/c9e766a6-7aee-4a3d-beed-d975792d7c4c.png"
            },
            {
                "title": "💻 Computer Labs",
                "features": [
                    "150+ computers with latest configurations",
                    "Licensed software (Python, Java, DBMS, etc.)",
                    "Dedicated lab for networking and cybersecurity",
                    "High-speed internet access"
                ],
                "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752827027/486300369_1055984116557527_4023767572347415079_n_h3ujez.jpg"
            },
            {
                "title": "🔬 Robo  Labs",
                "features": [
                    "Well-equipped robotics and mechanical labs",
                    "Modern apparatus and safety equipment",
                    "Dedicated research spaces",
                    "Certified laboratory instructors"
                ],
                "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740741/487301788_1062568922565713_5457511864499874592_n_l65esw.jpg"
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
            "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753098645/484897942_1049471227208816_4162148814278886312_n_x0vwf1.jpg"
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
                "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753094865/WhatsApp_Image_2025-07-21_at_15.31.42_0099e550_ikee5q.jpg"
            },
            {
                "title": "🏠 Home environment",
                "description": "Safe and comfortable accommodation with 24/7 security",
                "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741011/488047278_1063255565830382_136876928379839650_n_vxjwek.jpg"
            },
            {
                "title": "📶 Wi-Fi Campus",
                "description": "High-speed internet across entire campus",
                "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753095611/WhatsApp_Image_2025-07-21_at_16.29.47_8cf836b7_xiawvg.jpg"
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
            "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753095614/WhatsApp_Image_2025-07-21_at_16.29.48_9d92c193_mommgp.jpg"
        }
    },
    "imageGallery": [
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753097038/7522a55e-e824-448f-9b38-1b9c9a4a08bb.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752926173/487039934_1062569379232334_8104513723895339455_n_lrclwg.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752837146/1714817147281_sdao3g.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741195/487877170_1062925559196716_1283809810597617178_n_luvuqq.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741219/486682911_1059488162873789_2936820642328847177_n_w7dlmc.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741171/487548216_1062974769191795_6092592449283881455_n_hpz3nv.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740990/487328149_1063255409163731_4520480043731157829_n_jzaeso.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740770/487872091_1062568942565711_1649777733350717587_n_l1whum.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740741/487301788_1062568922565713_5457511864499874592_n_l65esw.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740409/485146986_1053170816838857_6978447644490651086_n_vuedb7.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740462/484497461_1052423423580263_794801896446851540_n_gfn36v.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752665745/robo_car_qamscx.jpg"
    ]
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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://www.catalystcollege.edu.in/infrastructure" />
    </Head>

    {/* Hero Section with Parallax Effect */}
    <div className="relative bg-blue-50">
      <HeroSection 
        imageUrl={infrastructureData.hero.imageUrl} 
        title={infrastructureData.hero.title} 
        description={infrastructureData.hero.description}
        overlayOpacity={0.3}
      />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Introduction Section with Floating Card */}
      <section className="mb-20 relative bg-white rounded-xl p-6 shadow-sm">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-4 z-10">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full p-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 shadow-md border border-blue-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {sections.introduction.title}
            </h2>
            <div className="flex justify-center">
              <svg width="100" height="6" viewBox="0 0 100 6" className="text-blue-500">
                <path d="M0 3 Q 25 6, 50 3 T 100 3" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            {sections.introduction.content}
          </p>
        </div>
      </section>

      {/* Campus Overview with Interactive Card */}
      <section className="mb-20 bg-gray-50 rounded-xl p-6 shadow-sm">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {sections.campusOverview.title}
          </h2>
          <div className="flex justify-center">
            <svg width="100" height="6" viewBox="0 0 100 6" className="text-green-500">
              <path d="M0 3 Q 25 6, 50 3 T 100 3" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-6">
                {sections.campusOverview.description}
              </p>
              <ul className="space-y-4">
                {sections.campusOverview.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 h-80 md:h-auto">
              <img 
                src={sections.campusOverview.imageUrl} 
                alt="CATALYST College Campus View" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Infrastructure with Alternating Layout */}
      <section className="mb-20 bg-white rounded-xl p-6 shadow-sm">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Academic Infrastructure
          </h2>
          <div className="flex justify-center">
            <svg width="100" height="6" viewBox="0 0 100 6" className="text-blue-500">
              <path d="M0 3 Q 25 6, 50 3 T 100 3" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        
        {sections.academicInfrastructure.map((facility, index) => (
          <div 
            key={index} 
            className={`mb-16 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}
          >
            <div className={`bg-gray-50 rounded-2xl shadow-lg overflow-hidden md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6">
                  {facility.title}
                </h3>
                <ul className="space-y-4">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src={facility.imageUrl} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Library Section with Modern Card */}
      <section className="mb-20 bg-indigo-50 rounded-xl p-6 shadow-sm">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {sections.library.title}
          </h2>
          <div className="flex justify-center">
            <svg width="100" height="6" viewBox="0 0 100 6" className="text-indigo-500">
              <path d="M0 3 Q 25 6, 50 3 T 100 3" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <ul className="space-y-4">
              {sections.library.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto">
            <img 
              src={sections.library.imageUrl} 
              alt="College Library" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Student Facilities with Card Grid */}
      <section className="mb-20 bg-white rounded-xl p-6 shadow-sm">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Student Facilities
          </h2>
          <div className="flex justify-center">
            <svg width="100" height="6" viewBox="0 0 100 6" className="text-yellow-500">
              <path d="M0 3 Q 25 6, 50 3 T 100 3" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.studentFacilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={facility.imageUrl} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Section with Highlighted Features */}
      <section className="mb-20 bg-green-50 rounded-xl p-6 shadow-sm">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {sections.safety.title}
          </h2>
          <div className="flex justify-center">
            <svg width="100" height="6" viewBox="0 0 100 6" className="text-green-600">
              <path d="M0 3 Q 25 6, 50 3 T 100 3" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <ul className="space-y-4">
              {sections.safety.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto">
            <img 
              src={sections.safety.imageUrl} 
              alt="Campus Safety Features" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section with Masonry Layout */}
      <section className="bg-gray-50 rounded-xl p-6 shadow-sm">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Campus Gallery
          </h2>
          <div className="flex justify-center">
            <svg width="100" height="6" viewBox="0 0 100 6" className="text-purple-500">
              <path d="M0 3 Q 25 6, 50 3 T 100 3" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {infrastructureData.imageGallery.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${index % 5 === 0 ? 'md:row-span-2 md:col-span-2' : ''}`}
            >
              <img 
                src={img} 
                alt={`Campus facility ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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