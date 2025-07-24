import Head from 'next/head';
import { NextPage } from 'next';
import HeroSection from '@/components/newHeroImageForAllPage';


const alumniData = {
  heroSection:{
    imageURL:"https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840137/486062223_1056593913163214_903525736881095147_n_cunjj0.jpg",
    description:"Reconnect, share your journey, and stay part of our growing community.",
    title:"Alumni Hub"
  },
  welcome: {
    title: "Catalyst College Alumni Network",
    description: "The Alumni Association of Catalyst College is a thriving community of professionals, entrepreneurs, researchers, and social leaders who continue to be an integral part of our journey. Our alumni are our pride — their achievements reflect the academic and cultural strength of our institution.",
    stats: {
      totalAlumni: 8500,
      countries: 28,
      companies: 420,
      mentorshipPrograms: 36
    }
  },
  objectives: [
    "Strengthen ties between alumni and the institution",
    "Facilitate mentoring, internships, and placement support",
    "Organize alumni reunions, webinars, and networking events",
    "Encourage alumni contributions to college development"
  ],
  notableAlumni: [
    {
      name: "Ravi Kumar",
      program: "BCA",
      batch: 2016,
      position: "Software Engineer",
      company: "Google",
      quote: "Catalyst College gave me the foundation I needed to build my career in tech.",
      photo: "/alumni/ravi-kumar.jpg",
      linkedin: "https://linkedin.com/in/ravikumar"
    },
    {
      name: "Priya Sharma",
      program: "B.Tech CSE",
      batch: 2014,
      position: "Product Manager",
      company: "Microsoft",
      quote: "The problem-solving approach I learned at Catalyst helps me every day.",
      photo: "/alumni/priya-sharma.jpg",
      linkedin: "https://linkedin.com/in/priyasharma"
    },
    {
      name: "Amit Patel",
      program: "MBA",
      batch: 2018,
      position: "Founder & CEO",
      company: "TechStart",
      quote: "The entrepreneurship cell gave me my first taste of building something.",
      photo: "/alumni/amit-patel.jpg",
      linkedin: "https://linkedin.com/in/amitpatel"
    },
    {
      name: "Neha Gupta",
      program: "B.Tech ECE",
      batch: 2015,
      position: "Research Scientist",
      company: "Intel Labs",
      quote: "My professors encouraged my curiosity and shaped my research career.",
      photo: "/alumni/neha-gupta.jpg",
      linkedin: "https://linkedin.com/in/nehagupta"
    }
  ],
  companies: [
    "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Deloitte",
    "Intel", "IBM", "Adobe", "Wipro", "Accenture", "TechStart"
  ],
  events: [
    {
      title: "Annual Alumni Meet 2024",
      date: "2024-12-15",
      location: "Catalyst College Campus",
      description: "Reconnect with batchmates and faculty at our biggest reunion event."
    },
    {
      title: "Alumni Webinar Series",
      date: "2024-09-05",
      location: "Online",
      description: "Industry leaders share insights on emerging technologies."
    },
    {
      title: "Catalyst Foundation Day",
      date: "2024-11-20",
      location: "Catalyst College Campus",
      description: "Celebrate the college's anniversary with special alumni activities."
    }
  ]
};

const AlumniPage: NextPage = () => {


  return (
    <>
      <Head>
        <title>Alumni Network | Catalyst College</title>
        <meta name="description" content="Connect with Catalyst College alumni network. Explore success stories, events, and opportunities to give back." />
        <meta name="keywords" content="alumni, Catalyst College, network, success stories, mentorship" />
        <meta property="og:title" content="Catalyst College Alumni Network" />
        <meta property="og:description" content="Join our thriving alumni community of professionals and leaders" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.Catalystcollege.edu/alumni" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <HeroSection
        imageUrl={alumniData.heroSection.imageURL}
        title={alumniData.heroSection.title}
        description={alumniData.heroSection.description}
        />

        {/* Stats Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Alumni Community</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard
                value={alumniData.welcome.stats.totalAlumni.toLocaleString()}
                label="Alumni Worldwide"
                icon={
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
              />
              <StatCard
                value={String(alumniData.welcome.stats.countries)}
                label="Countries"
                icon={
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              <StatCard
                value={String(alumniData.welcome.stats.companies)}
                label="Companies"
                icon={
                  <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
              />
              <StatCard
                value={String(alumniData.welcome.stats.mentorshipPrograms)}
                label="Mentorship Programs"
                icon={
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Objectives of Our Alumni Network</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {alumniData.objectives.map((objective, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Notable Alumni Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Notable Alumni</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {alumniData.notableAlumni.map((alumnus, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                    <div className="relative z-10 w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white shadow-md">
                      {/* In a real app, this would be an actual image */}
                      <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{alumnus.name}</h3>
                    <p className="text-gray-600 mb-2">{alumnus.program} ({alumnus.batch})</p>
                    <p className="text-gray-800 font-medium mb-3">{alumnus.position} at {alumnus.company}</p>
                    <p className="text-gray-700 italic mb-4">"{alumnus.quote}"</p>
                    <a href={alumnus.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      Connect
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <a href="/alumni-stories" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                View More Success Stories
                <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Where Our Alumni Work</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {alumniData.companies.map((company, index) => (
                <div key={index} className="bg-white  py-4  px-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 justify-center flex items-center">


                  <span className="text-lg font-medium text-gray-800">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-6 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Alumni Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {alumniData.events.map((event, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <div className="bg-white text-blue-600 bg-opacity-20 px-3 py-1 rounded-full text-sm">
                        {event.location === "Online" ? "Virtual" : "In-Person"}
                      </div>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">{event.description}</p>
                    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                      Learn More
                      <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <a href="/alumni-events" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                View All Events
                <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out infinite 2s;
        }
        .animate-float-delay2 {
          animation: float 6s ease-in-out infinite 4s;
        }
      `}</style>
    </>
  );
};

// Stat Card Component
const StatCard = ({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2 text-gray-800">{value}</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

// Contribution Card Component
const ContributionCard = ({ title, description, icon, actionText, actionLink }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  actionText: string;
  actionLink: string;
}) => {
  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-8 text-center">
        <div className="flex justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a href={actionLink} className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
          {actionText}
        </a>
      </div>
    </div>
  );
};

export default AlumniPage;