import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Impact Initiatives | Catalyst College - Transforming Lives Through Service",
  description: "Explore Catalyst College's extensive social outreach programs including blood donation camps, student welfare, sports initiatives, and community development projects.",
  keywords: "social responsibility, blood donation camp, student welfare, sports initiatives, NSS, women empowerment, rural development",
};


let socialData = {
  "page_name": "social-initiatives",
  "bloodDonation": {
    "title": "Life-Saving Blood Donation Initiatives",
    "description": "Our biannual blood donation camps have become a cornerstone of our community service program.",
    "highlights": [
      "Organized in partnership with Red Cross and local hospitals",
      "Special 'Young Donors' program to encourage student participation",
      "Blood group registry for emergency needs",
      "Awareness sessions on blood donation myths"
    ],
    "achievements": [
      {
        "year": "2023",
        "units": "450",
        "donors": "380"
      },
      {
        "year": "2022",
        "units": "390",
        "donors": "320"
      },
      {
        "year": "2021",
        "units": "280",
        "donors": "240"
      }
    ],
    "testimonials": [
      {
        "quote": "Donating blood at college was my first time. The team made it so comfortable, I've become a regular donor now.",
        "author": "Rahul, B.Com 2nd Year"
      },
      {
        "quote": "Our blood bank camps have saved lives during critical shortages. Proud of our students' commitment.",
        "author": "Dr. Neha Sharma, Medical Coordinator"
      }
    ],
    "gallery": [
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753272299/496072408_24166924442912566_1876959419366284407_n_pozh3q.jpg",
        "alt": "Students donating blood"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753272125/495679674_24166924139579263_2235176618920707169_n_negssj.jpg",
        "alt": "Blood donation camp setup"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753272195/495958566_24166927756245568_3740356836707564457_n_g5gy8z.jpg",
        "alt": "Girls also show their trust"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753272240/495563613_24166931552911855_3621237468637712325_n_kb1wno.jpg",
        "alt": "Blood Donation"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741326/488217060_1064882295667709_1999050953493412670_n_k0rev3.jpg",
        "alt": "happy to donate my blood to save someone"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741316/487286892_1064883055667633_5024952859530526660_n_lbq9yo.jpg",
        "alt": "Donating blood during cimage blood donation camp"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741333/488453873_1064881952334410_3135901574836215516_n_jqm3nv.jpg",
        "alt": "donating blood to save life"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753272351/496939959_24166213659650311_3096548561428537887_n_ujc1e6.jpg",
        "alt": "checking blood sample and hemoglobins"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741330/487216484_1064882302334375_4674392581528068795_n_nu2ori.jpg",
        "alt": "checking blood sample and hemoglobins"
      }
    ]
  },
  "heroSection": {
    "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753272519/487294478_1059465606209378_2863274022583548622_n_d2gmzr.jpg",
    "title": "Social Initiatives",
    "description": "A step towards a better world",
    "overlayOpacity": 0.2,
    "height": "lg"
  },
  "purpose": {
    "title": "Our Social Mission",
    "description": "Catalyst College integrates social responsibility into education, creating compassionate leaders who drive positive change.",
    "points": [
      "Foster civic responsibility through hands-on community projects",
      "Develop leadership skills via student-led social initiatives",
      "Bridge urban-rural divide through technology and education",
      "Promote health awareness through regular medical camps",
      "Support underprivileged students through scholarship programs"
    ],
    "stats": [
      {
        "value": "1500+",
        "label": "Volunteers Engaged"
      },
      {
        "value": "50+",
        "label": "Villages Impacted"
      },
      {
        "value": "5L+",
        "label": "Lives Touched"
      }
    ]
  },
  "sportsInitiatives": {
    "title": "Sports for Social Change",
    "programs": [
      {
        "name": "Champion's Program",
        "description": "Identifying and nurturing rural sports talent",
        "achievements": [
          "5 state-level players identified in 2023",
          "Sports scholarships for 12 students",
          "Annual inter-village sports tournament"
        ]
      },
      {
        "name": "Adaptive Sports",
        "description": "Inclusive sports for differently-abled students",
        "achievements": [
          "Special wheelchair basketball team formed",
          "Annual para-athletics meet since 2021",
          "Sign language training for coaches"
        ]
      },
      {
        "name": "Community Fitness",
        "description": "Promoting health through sports",
        "achievements": [
          "Free yoga classes for 300+ community members",
          "Morning running club with 150+ regulars",
          "Annual 'Run for Cancer' charity event"
        ]
      }
    ],
    "gallery": [
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753273022/486560027_1058956659593606_6797265105672671932_n_ztd9p5.jpg",
        "alt": "College cricket team"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753272887/486823452_1058955299593742_2361378191897172965_n_tzsocb.jpg",
        "alt": "Badminton"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753272843/510317731_1126615716161033_1299775679840386401_n_lk9l3v.jpg",
        "alt": "Yoga session"
      }
    ]
  },
  "studentWelfare": {
    "title": "Comprehensive Student Welfare Programs",
    "sections": [
      {
        "title": "Mental Health Support",
        "icon": "🧠",
        "content": [
          "Free counseling services with professional psychologists",
          "Monthly stress management workshops",
          "24/7 mental health helpline",
          "Peer support group 'Mind Matters'"
        ]
      },
      {
        "title": "Financial Assistance",
        "icon": "💰",
        "content": [
          "Merit-cum-means scholarships for 25% students",
          "Emergency fund for crises",
          "Free laptops for economically disadvantaged students",
          "Book bank with 5000+ titles"
        ]
      },
      {
        "title": "Career Support",
        "icon": "💼",
        "content": [
          "Free skill certification programs",
          "Resume building workshops",
          "Mock interview sessions with HR professionals",
          "Alumni mentorship program"
        ]
      }
    ],
    "stats": [
      {
        "value": "200+",
        "label": "Students assisted annually"
      },
      {
        "value": "₹25L+",
        "label": "Scholarships distributed"
      },
      {
        "value": "100%",
        "label": "Placement assistance"
      }
    ]
  },
  "upcomingEvents": [
    {
      "date": "2 August 2025",
      "title": "Career MahaKumbh",
      "description": "Freely Organize an events that show the new students the new career path in their life"
    },
    {
      "date": "5 Sep 2025",
      "title": "Teachers' Day Village Outreach",
      "description": "Educational activities in rural schools"
    },
    {
      "date": "2 Oct 2023",
      "title": "Gandhi Jayanti Cleanliness Drive",
      "description": "Pan-city cleanliness campaign"
    }
  ],
  "saraswatiPujaInitiatives": {
    "title": "Saraswati Puja Charity Drive",
    "tagline": "Spreading Knowledge & Comfort",
    "overview": "Each year during Saraswati Puja, we distribute essential items to orphanages to bring comfort and support to underprivileged children. Our initiatives focus on providing practical help that improves daily living conditions.",
    "initiatives": [
      {
        "id": 1,
        "title": "Clothing and Bags Distribution",
        "subtitle": "Dignity Through Dress",
        "description": "We provide new sets of clothing to orphans, ensuring they have proper attire for both summer and winter seasons. Each package includes 2 full outfits, undergarments, and seasonal wear.",
        "impactMetrics": [
          {
            "label": "Children Helped",
            "value": "250+"
          },
          {
            "label": "Clothing Sets",
            "value": "500+"
          },
          {
            "label": "Orphanages",
            "value": "5"
          },
          {
            "label": "Volunteers",
            "value": "30+"
          }
        ],
        "gallery": [
          {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752743023/494473416_24165220089749668_4232099554983518496_n_qz7vfa.jpg",
            "alt": "Children receiving new clothes",
            "caption": "Quality clothing brings smiles"
          },
          {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752743049/486824590_1059465382876067_795692266981931850_n_plnicy.jpg",
            "alt": "Clothing packages ready for distribution"
          },
          {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752743058/487348865_1059465572876048_2874551856872495678_n_wixnsy.jpg",
            "alt": "Volunteers sorting clothes"
          }
        ]
      },
      {
        "id": 2,
        "title": "Fan Installation",
        "subtitle": "Cooling Comfort in Summer",
        "description": "We install high-quality ceiling fans in orphanage dormitories and study areas to provide relief during Bengal's intense summer months, helping children sleep and study comfortably.",
        "impactMetrics": [
          {
            "label": "Fans Installed",
            "value": "75+"
          },
          {
            "label": "Rooms Cooled",
            "value": "25+"
          },
          {
            "label": "Orphanages",
            "value": "4"
          },
          {
            "label": "Electricians",
            "value": "12"
          }
        ],
        "gallery": [
          {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752743126/487279874_1059465549542717_8015275644592277424_n_qan62r.jpg",
            "alt": "Electrician installing fan",
            "caption": "Professional installation ensures safety"
          },
          {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752743135/486832023_1059465559542716_857533387504463260_n_h7shfp.jpg",
            "alt": "Children under new fan"
          }
        ]
      },
      {
        "id": 3,
        "title": "Water Purifier Project",
        "subtitle": "Clean Water for Health",
        "description": "Our advanced water purification systems provide safe drinking water year-round, reducing waterborne illnesses and ensuring proper hydration for growing children.",
        "impactMetrics": [
          {
            "label": "Purifiers Installed",
            "value": "15"
          },
          {
            "label": "Children Benefited",
            "value": "300+"
          },
          {
            "label": "Orphanages",
            "value": "3"
          },
          {
            "label": "Maintenance Visits",
            "value": "6/year"
          }
        ],
        "gallery": [
          {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752743738/c850218d-1b00-4076-a7b6-ceed39eb61c0.png",
            "alt": "Water purifier installation",
            "caption": "Clean water changes lives"
          },
          {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752743832/494887616_24101901616081516_7358920563547091298_n_fz6h5x.jpg",
            "alt": "Child drinking clean water"
          }
        ]
      }
    ]
  }
}

export default async function SocialInitiatives() {

  const { data, error } = await fetchPageData("social-initiatives");
  socialData = data as any ?? socialData;


  return (
    <div className="bg-gray-50 ">
      {/* Hero Section */}
      <HeroSection
        title={socialData.heroSection.title}
        description={socialData.heroSection.description}
        imageUrl={socialData.heroSection.imageUrl}
        overlayOpacity={socialData.heroSection.overlayOpacity || 0.4}
        height={"lg"}
      />

      {/* Purpose Section */}
      <section className="py-8 mx-auto max-w-7xl ">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-4xl font-bold text-center mb-8">{socialData.purpose.title}</h2>
            <p className="text-xl text-center mb-12 max-w-4xl mx-auto">{socialData.purpose.description}</p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ul className="space-y-6">
                  {socialData.purpose.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg py-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">Our Impact in Numbers</h3>
                <div className="grid grid-cols-3 items-center gap-4 min-h-4">
                  {socialData.purpose.stats.map((stat, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow text-center w-full sm:w-auto">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-xs sm:text-sm mt-1 sm:mt-2">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Donation Section */}
      <section className="py-8 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{socialData.bloodDonation.title}</h2>
            <p className="text-xl max-w-3xl mx-auto">{socialData.bloodDonation.description}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Camp Highlights</h3>
              <ul className="space-y-4">
                {socialData.bloodDonation.highlights.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Yearly Progress</h3>
              <div className="space-y-6">
                {socialData.bloodDonation.achievements.map((item, index) => (
                  <div key={index}>
                    <div className="font-bold text-lg">{item.year}</div>
                    <div className="flex justify-between mt-2">
                      <span>{item.units} units collected</span>
                      <span>{item.donors} donors</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-red-600 h-2.5 rounded-full"
                        style={{ width: `${(index + 1) * 30}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Testimonials</h3>
              <div className="space-y-6">
                {socialData.bloodDonation.testimonials.map((item, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                    <p className="italic">"{item.quote}"</p>
                    <p className="font-medium mt-2">— {item.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-8 text-center">Gallery</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {socialData.bloodDonation.gallery.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform-gpu hover:scale-105 transition duration-500"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)", // Forces GPU compositing
                    imageRendering: "auto",     // Ensures smooth scaling
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* helping needy on the ocassion of saraswatipuja */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {socialData.saraswatiPujaInitiatives.title}
            </h1>
            <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-800 font-medium">
                {socialData.saraswatiPujaInitiatives.tagline}
              </span>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {socialData.saraswatiPujaInitiatives.overview}
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {socialData.saraswatiPujaInitiatives.initiatives.map((initiative) => (
              <div key={initiative.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image Header */}
                <div className="relative h-48">
                  <img
                    src={initiative.gallery[0].src}
                    alt={initiative.gallery[0].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h2 className="text-xl font-bold text-white">{initiative.title}</h2>
                    <p className="text-blue-200">{initiative.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{initiative.description}</p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {initiative.impactMetrics.map((metric, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-blue-700">{metric.value}</p>
                        <p className="text-xs text-gray-600">{metric.label}</p>
                      </div>
                    ))}
                  </div>



                  {/* Gallery Preview */}
                  {initiative.gallery.length > 1 && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Gallery</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {initiative.gallery.slice(1).map((img, idx) => (
                          <img
                            key={idx}
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-20 object-cover rounded"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Welfare Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{socialData.studentWelfare.title}</h2>
            <p className="text-xl max-w-3xl mx-auto">Holistic support systems ensuring every student thrives academically, emotionally and socially</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {socialData.studentWelfare.sections.map((section, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md border-t-4 border-blue-500">
                <div className="text-5xl mb-6 md:text-center">{section.icon}</div>
                <h3 className="text-2xl font-semibold mb-6 md:text-center">{section.title}</h3>
                <ul className="space-y-4">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-8 text-center">Welfare Program Impact</h3>
            <div className="grid grid-cols-3 gap-4">
              {socialData.studentWelfare.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sports Initiatives Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{socialData.sportsInitiatives.title}</h2>
            <p className="text-xl max-w-3xl mx-auto">Using sports as a tool for social inclusion, health promotion and talent development</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {socialData.sportsInitiatives.programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{program.name}</h3>
                <p className="mb-6">{program.description}</p>
                <h4 className="font-semibold mb-3">Achievements:</h4>
                <ul className="space-y-3">
                  {program.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-8 text-center">Sports Gallery</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {socialData.sportsInitiatives.gallery.map((image, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className=" bg-neutral-600 p-3 rounded-2xl  text-white font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {/* Upcoming Events with Animated Cards */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-800 to-blue-600 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-blue-200 text-sm font-medium">Join Our Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Upcoming Events
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Be part of our next initiatives to create meaningful change
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {socialData.upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Date ribbon */}
                <div className="bg-white/20 px-6 py-4 text-center">
                  <div className="text-2xl font-bold text-white">{event.date.split(' ')[0]}</div>
                  <div className="text-blue-100 font-medium">{event.date.split(' ').slice(1).join(' ')}</div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
                  <p className="text-blue-100 mb-6">{event.description}</p>

                  <button className="w-full flex items-center justify-center space-x-2 bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                    <span>Register Now</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Animated Gradient */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-600 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Join our community of changemakers and help transform lives through our social initiatives.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <button className="relative overflow-hidden group flex-1 max-w-xs mx-auto sm:mx-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <span>Become a Volunteer</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              <button className="relative overflow-hidden group flex-1 max-w-xs mx-auto sm:mx-0 bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span>Partner With Us</span>
                </span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              <button className="relative overflow-hidden group flex-1 max-w-xs mx-auto sm:mx-0 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Donate to Causes</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>

            {/* Additional decorative element */}
            <div className="mt-16 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



