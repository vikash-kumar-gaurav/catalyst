import HeroSection from '@/components/newHeroImageForAllPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Impact Initiatives | Catalyst College - Transforming Lives Through Service",
  description: "Explore Catalyst College's extensive social outreach programs including blood donation camps, student welfare, sports initiatives, and community development projects.",
  keywords: "social responsibility, blood donation camp, student welfare, sports initiatives, NSS, women empowerment, rural development",
};

// Extensive JSON data for all sections
const socialData = {
  purpose: {
    title: "Our Social Mission",
    description: "Catalyst College integrates social responsibility into education, creating compassionate leaders who drive positive change.",
    points: [
      "Foster civic responsibility through hands-on community projects",
      "Develop leadership skills via student-led social initiatives",
      "Bridge urban-rural divide through technology and education",
      "Promote health awareness through regular medical camps",
      "Support underprivileged students through scholarship programs"
    ],
    stats: [
      { value: "1500+", label: "Volunteers Engaged" },
      { value: "50+", label: "Villages Impacted" },
      { value: "5L+", label: "Lives Touched" }
    ]
  },

  bloodDonation: {
    title: "Life-Saving Blood Donation Initiatives",
    description: "Our biannual blood donation camps have become a cornerstone of our community service program.",
    highlights: [
      "Organized in partnership with Red Cross and local hospitals",
      "Special 'Young Donors' program to encourage student participation",
      "Blood group registry for emergency needs",
      "Awareness sessions on blood donation myths"
    ],
    achievements: [
      { year: "2023", units: "450", donors: "380" },
      { year: "2022", units: "390", donors: "320" },
      { year: "2021", units: "280", donors: "240" }
    ],
    testimonials: [
      {
        quote: "Donating blood at college was my first time. The team made it so comfortable, I've become a regular donor now.",
        author: "Rahul, B.Com 2nd Year"
      },
      {
        quote: "Our blood bank camps have saved lives during critical shortages. Proud of our students' commitment.",
        author: "Dr. Neha Sharma, Medical Coordinator"
      }
    ],
    gallery: [
      { src: "/images/blood-donation-1.jpg", alt: "Students donating blood" },
      { src: "/images/blood-donation-2.jpg", alt: "Blood donation camp setup" },
      { src: "/images/blood-certificate.jpg", alt: "Appreciation certificate" }
    ]
  },
  

  studentWelfare: {
    title: "Comprehensive Student Welfare Programs",
    sections: [
      {
        title: "Mental Health Support",
        icon: "🧠",
        content: [
          "Free counseling services with professional psychologists",
          "Monthly stress management workshops",
          "24/7 mental health helpline",
          "Peer support group 'Mind Matters'"
        ]
      },
      {
        title: "Financial Assistance",
        icon: "💰",
        content: [
          "Merit-cum-means scholarships for 25% students",
          "Emergency fund for crises",
          "Free laptops for economically disadvantaged students",
          "Book bank with 5000+ titles"
        ]
      },
      {
        title: "Career Support",
        icon: "💼",
        content: [
          "Free skill certification programs",
          "Resume building workshops",
          "Mock interview sessions with HR professionals",
          "Alumni mentorship program"
        ]
      }
    ],
    stats: [
      { value: "200+", label: "Students assisted annually" },
      { value: "₹25L+", label: "Scholarships distributed" },
      { value: "100%", label: "Placement assistance" }
    ]
  },

  sportsInitiatives: {
    title: "Sports for Social Change",
    programs: [
      {
        name: "Champion's Program",
        description: "Identifying and nurturing rural sports talent",
        achievements: [
          "5 state-level players identified in 2023",
          "Sports scholarships for 12 students",
          "Annual inter-village sports tournament"
        ]
      },
      {
        name: "Adaptive Sports",
        description: "Inclusive sports for differently-abled students",
        achievements: [
          "Special wheelchair basketball team formed",
          "Annual para-athletics meet since 2021",
          "Sign language training for coaches"
        ]
      },
      {
        name: "Community Fitness",
        description: "Promoting health through sports",
        achievements: [
          "Free yoga classes for 300+ community members",
          "Morning running club with 150+ regulars",
          "Annual 'Run for Cancer' charity event"
        ]
      }
    ],
    gallery: [
      { src: "/images/sports-1.jpg", alt: "College cricket team" },
      { src: "/images/sports-2.jpg", alt: "Wheelchair basketball" },
      { src: "/images/sports-3.jpg", alt: "Yoga session" }
    ]
  },

  upcomingEvents: [
    {
      date: "15 Aug 2023",
      title: "Freedom Run 5K",
      description: "Charity run to support education of underprivileged children"
    },
    {
      date: "5 Sep 2023",
      title: "Teachers' Day Village Outreach",
      description: "Educational activities in rural schools"
    },
    {
      date: "2 Oct 2023",
      title: "Gandhi Jayanti Cleanliness Drive",
      description: "Pan-city cleanliness campaign"
    }
  ]
};

export default function SocialInitiatives() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Transforming Lives Through Service"
        description="At Catalyst College, we don't just educate minds - we nurture hearts and build communities."
        imageUrl="/images/social-hero.jpg"
        overlayOpacity={0.4}
        height="lg"
        // ctaText="Join Our Next Initiative"
        // ctaLink="#volunteer"
      />

      {/* Purpose Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
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
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">Our Impact in Numbers</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialData.purpose.stats.map((stat, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                      <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm mt-2">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Donation Section */}
      <section className="py-20 bg-red-50">
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
                        style={{ width: `${(index+1)*30}%` }}
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
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
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
                <div className="text-5xl mb-6">{section.icon}</div>
                <h3 className="text-2xl font-semibold mb-6">{section.title}</h3>
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
      <section className="py-20 bg-gray-100">
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
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl max-w-3xl mx-auto">Join us in our next initiatives to make a difference</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {socialData.upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden">
                <div className="bg-blue-600 text-white p-4 text-center">
                  <div className="text-2xl font-bold">{event.date.split(' ')[0]}</div>
                  <div className="text-lg">{event.date.split(' ').slice(1).join(' ')}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p>{event.description}</p>
                  <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a student, faculty member, or community partner, there's a place for you in our social initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
              Become a Volunteer
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition text-lg">
              Partner With Us
            </button>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-lg">
              Donate to Causes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}