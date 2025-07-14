import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Awards & Recognition | Catalyst College - Celebrating Excellence",
  description: "Discover the prestigious awards, rankings, and recognitions earned by Catalyst College for academic excellence, innovative programs, and outstanding student achievements.",
  keywords: "college awards, academic recognition, student achievements, faculty awards, institutional rankings"
};

// SVG Icons
const AwardIcon = () => (
  <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const MedalIcon = () => (
  <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21H5a2 2 0 01-2-2v-6a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 3h10m0 0a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
  </svg>
);


let awardsData = {
  heroData:{
    heroImageURL:"https://plus.unsplash.com/premium_photo-1751516658465-afa8ea548f63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
    heading:"Awards ",
    tagline:" Award section",
  },
  introduction: {
    title: "Celebrating Excellence in Education",
    content: "At Catalyst College, excellence is a tradition. Our relentless pursuit of academic innovation, industry integration, and student empowerment has been recognized at regional and national levels. These accolades reflect our institutional success and the outstanding achievements of our students and faculty."
  },
  institutionalAwards: [
    {
      title: "Best B-School of India (East)",
      organization: "ASSOCHAM & Ministry of HRD",
      year: "2023",
      description: "Awarded by Dr. Ram Shankar Katheria, Hon. Minister of Education for State in recognition of excellence in management education.",
      image: "/images/assocham-award.jpg"
    },
    {
      title: "Atal Ratna Samman Award",
      organization: "Government of India",
      year: "2021",
      description: "Recognized for extraordinary contributions in Management and IT Education by Union HRD Minister Sri Ramesh Pokhariyal Nishank.",
      image: "/images/atal-award.jpg"
    },
    {
      title: "ABS Award - Best Campus Placement",
      organization: "Catalyst Research & Zee Business",
      year: "2016",
      description: "Awarded by Actress Amisha Patel for outstanding placement records in Eastern India.",
      image: "/images/abs-award.jpg"
    },
    {
      title: "Leaders Award in Education",
      organization: "Bloomberg TV & Education World",
      year: "2019",
      description: "Recognized as 'Best Management Institution in Bihar' by Dr. Satyanarayan Jatia, Hon. MP.",
      image: "/images/leaders-award.jpg"
    },
    {
      title: "Emerging Institute for Management",
      organization: "All India Management Association",
      year: "2012",
      description: "National level recognition for excellence in management education curriculum and pedagogy.",
      image: "/images/aima-award.jpg"
    },
    {
      title: "Peacock Feather Award",
      organization: "National Education Forum",
      year: "2018",
      description: "Best IT & Management College in Bihar awarded by former cricketer Mr. Javagal Srinath.",
      image: "/images/peacock-award.jpg"
    }
  ],
  studentAchievements: [
    {
      name: "Ritu Kumari",
      program: "BBA",
      year: "2024",
      achievement: "National Winner - IIM Ranchi Case Competition",
      image: "/images/student-1.jpg"
    },
    {
      name: "Anand Mishra",
      program: "BCA",
      year: "2023",
      achievement: "1st Prize - Hackathon (Patna Smart Tech Fest)",
      image: "/images/student-2.jpg"
    },
    {
      name: "Priya Sinha",
      program: "BSc IT",
      year: "2022",
      achievement: "Google Certified Data Analyst - Level II",
      image: "/images/student-3.jpg"
    },
    {
      name: "Rohit Kumar",
      program: "BCA",
      year: "2022",
      achievement: "Best Intern - Wipro Internship Program",
      image: "/images/student-4.jpg"
    }
  ],
  facultyRecognition: [
    {
      name: "Dr. Meena Sharma",
      department: "Management",
      achievement: "Best Innovation in Teaching by AICTE-EdTalks 2023",
      image: "/images/faculty-1.jpg"
    },
    {
      name: "Prof. Sanjay Thakur",
      department: "Computer Science",
      achievement: "Excellence in Blended Learning by NPTEL-IIT Madras",
      image: "/images/faculty-2.jpg"
    },
    {
      name: "Dr. Anjali Verma",
      department: "Commerce",
      achievement: "Best Research Paper Award at International Conference 2022",
      image: "/images/faculty-3.jpg"
    }
  ],
  mediaCoverage: [
    {
      title: "Digital Empowerment Initiative",
      outlet: "Prabhat Khabar",
      date: "Feb 2024",
      description: "Featured for rural women digital training program",
      image: "/images/news-1.jpg"
    },
    {
      title: "Health Camp Coverage",
      outlet: "Dainik Bhaskar",
      date: "Jan 2023",
      description: "Highlighted blood donation & health camp in Gaya",
      image: "/images/news-2.jpg"
    },
    {
      title: "Director Interview",
      outlet: "ETV Bihar",
      date: "Dec 2022",
      description: "Exclusive on education innovation in Bihar",
      image: "/images/news-3.jpg"
    }
  ],
  industryRecognitions: [
    {
      partner: "TCS iON",
      recognition: "90% Student Certification Rate",
      year: "2023",
      logo: "/logos/tcs-ion.png"
    },
    {
      partner: "Amazon AWS Academy",
      recognition: "Cloud Certification Excellence",
      year: "2023",
      logo: "/logos/aws.png"
    },
    {
      partner: "Red Hat Academy",
      recognition: "Certification Excellence Partner",
      year: "2023",
      logo: "/logos/redhat.png"
    },
    {
      partner: "Internshala",
      recognition: "Highest Student Engagement",
      year: "2022",
      logo: "/logos/internshala.png"
    }
  ],
  timeline: [
    { year: "2012", event: "Emerging Institute Award by AIMA" },
    { year: "2016", event: "Best Campus Placement Award" },
    { year: "2018", event: "Peacock Feather Award" },
    { year: "2019", event: "Leaders Award in Education" },
    { year: "2021", event: "Atal Ratna Samman" },
    { year: "2023", event: "Best B-School East by ASSOCHAM" }
  ]
};

let {data, error} = await fetchPageData("awards-&-recognition")
console.log(data);

awardsData = data as any ?? awardsData;

export default function AwardsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title={awardsData.heroData.heading}
        description={awardsData.heroData.tagline}
        imageUrl={awardsData.heroData.heroImageURL}
        overlayOpacity={0.4}
        height="lg"
      />

      {/* Introduction */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-100 rounded-full p-4 mb-6">
            <AwardIcon />
          </div>
          <h2 className="text-4xl font-bold mb-4">{awardsData.introduction.title}</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            {awardsData.introduction.content}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-blue-700 text-white rounded-xl p-8 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">25+</div>
            <div>National Awards</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div>Student Achievements</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div>Faculty Honors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">10+</div>
            <div>Industry Recognitions</div>
          </div>
        </div>
      </section>

      {/* Institutional Awards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Prestigious Institutional Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              National recognition for academic excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardsData.institutionalAwards.map((award, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{award.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{award.year}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{award.organization}</p>
                  <p className="text-gray-700 mb-4">{award.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition">
                    View Certificate →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 rounded-full p-4 mb-6">
              <MedalIcon />
            </div>
            <h2 className="text-3xl font-bold mb-4">Student Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our students consistently excel in national competitions and industry certifications
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Year</th>
                  <th className="py-4 px-6 text-left">Student</th>
                  <th className="py-4 px-6 text-left">Program</th>
                  <th className="py-4 px-6 text-left">Achievement</th>
                  <th className="py-4 px-6 text-left">Image</th>
                </tr>
              </thead>
              <tbody>
                {awardsData.studentAchievements.map((student, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6">{student.year}</td>
                    <td className="py-4 px-6 font-medium">{student.name}</td>
                    <td className="py-4 px-6">{student.program}</td>
                    <td className="py-4 px-6">{student.achievement}</td>
                    <td className="py-4 px-6">
                      <img 
                        src={student.image} 
                        alt={student.name}
                        className="w-16 h-16 object-cover rounded-full border-2 border-blue-200"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Faculty Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Faculty Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our distinguished faculty members have been honored for teaching excellence and research contributions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awardsData.facultyRecognition.map((faculty, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-blue-100 mb-4"
                />
                <h3 className="text-xl font-bold">{faculty.name}</h3>
                <p className="text-blue-600 mb-2">{faculty.department}</p>
                <p className="text-gray-700">{faculty.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Media Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our initiatives and achievements featured in prominent media outlets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awardsData.mediaCoverage.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>{item.outlet}</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition">
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognitions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 rounded-full p-4 mb-6">
              <TrophyIcon />
            </div>
            <h2 className="text-3xl font-bold mb-4">Industry Recognitions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Validated by leading corporations and technology partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awardsData.industryRecognitions.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col items-center">
                <img 
                  src={item.logo} 
                  alt={item.partner}
                  className="h-16 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-center mb-2">{item.partner}</h3>
                <p className="text-center text-gray-700 mb-2">{item.recognition}</p>
                <span className="text-sm text-gray-500">{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Milestones of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey of recognition and achievements over the years
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 w-1 h-full bg-blue-600 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            {awardsData.timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                style={{ marginLeft: index % 2 === 0 ? '0' : '50%', marginRight: index % 2 === 0 ? '50%' : '0' }}
              >
                <div className={`absolute top-0 w-6 h-6 rounded-full bg-yellow-500 border-4 border-white ${index % 2 === 0 ? '-right-3' : '-left-3'}`}></div>
                <div className={`p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                  <div className="text-blue-600 font-bold">{item.year}</div>
                  <p className="text-gray-800">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want More Details?</h2>
          <p className="text-xl mb-8">
            Download our awards compendium and annual achievement reports
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Download Awards Brochure (PDF)
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Annual Report Highlights
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}