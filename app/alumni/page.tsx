import Head from 'next/head';
import { NextPage } from 'next';

// Temporary data - will be replaced with API calls
const alumniData = {
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
        <section className="relative py-20 bg-gradient-to-r from-blue-800 to-purple-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{alumniData.welcome.title}</h1>
                <p className="text-xl mb-8">{alumniData.welcome.description}</p>
                <a href="#register" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center">
                  Join Our Network
                  <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="md:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="w-full h-auto">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(250,250)">
                    <g className="animate-float" style={{ animation: 'float 6s ease-in-out infinite' }}>
                      <path d="M-100,-60 Q0,-100 100,-60 T300,-60" fill="none" stroke="url(#grad1)" strokeWidth="4" opacity="0.5" />
                      <path d="M-100,-30 Q0,-70 100,-30 T300,-30" fill="none" stroke="url(#grad1)" strokeWidth="4" opacity="0.7" />
                      <path d="M-100,0 Q0,-40 100,0 T300,0" fill="none" stroke="url(#grad1)" strokeWidth="4" opacity="0.9" />
                    </g>
                    <g transform="translate(-100,50)" className="animate-float-delay" style={{ animation: 'float 6s ease-in-out infinite 2s' }}>
                      <circle r="40" fill="none" stroke="white" strokeWidth="3" />
                      <circle r="25" fill="none" stroke="white" strokeWidth="3" />
                      <path d="M-20,0 L20,0 M0,-20 L0,20" stroke="white" strokeWidth="3" />
                    </g>
                    <g transform="translate(100,50)" className="animate-float-delay2" style={{ animation: 'float 6s ease-in-out infinite 4s' }}>
                      <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="white" strokeWidth="3" rx="5" />
                      <path d="M-15,-15 L15,15 M15,-15 L-15,15" stroke="white" strokeWidth="3" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-gray-50">
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
        <section className="py-16 bg-white">
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
            <div className="text-center mt-10">
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
        <section className="py-16 bg-gray-50">
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
        <section className="py-16 bg-white">
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
            <div className="text-center mt-10">
              <a href="/alumni-events" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                View All Events
                <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="py-16 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                  <h2 className="text-3xl font-bold mb-6">Join Our Alumni Network</h2>
                  <p className="text-xl mb-8 opacity-90">Stay connected, give back, and access exclusive benefits as part of our alumni community.</p>
                  <div className="  border-2 border-white bg-opacity-10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Benefits of Joining</h3>
                    <ul className="space-y-3 ">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span >Access to alumni directory and networking opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Career development resources and job postings</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className=''>Invitations to exclusive events and reunions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-10">
                  <div className="bg-white rounded-xl shadow-xl p-8 text-gray-800">
                    <h3 className="text-2xl font-bold mb-6 text-center">Register Now</h3>
                    <form>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Program</label>
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option>Select Program</option>
                            <option>BCA</option>
                            <option>B.Tech CSE</option>
                            <option>B.Tech ECE</option>
                            <option>MBA</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Batch</label>
                          <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Graduation year" />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Current Occupation</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Company & Position" />
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">LinkedIn Profile</label>
                        <input type="url" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="https://linkedin.com/in/yourprofile" />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                        Submit Registration
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Give Back to catalyst</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <ContributionCard 
                title="Mentor Students"
                description="Share your expertise and guide current students in their academic and career journeys."
                icon={
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                }
                actionText="Become a Mentor"
                actionLink="/mentor-program"
              />
              <ContributionCard 
                title="Sponsor Scholarships"
                description="Help deserving students access quality education through financial support."
                icon={
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                actionText="Donate Now"
                actionLink="/scholarships"
              />
              <ContributionCard 
                title="Guest Lectures"
                description="Share your industry knowledge by speaking at campus events or classes."
                icon={
                  <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                }
                actionText="Express Interest"
                actionLink="/guest-lectures"
              />
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