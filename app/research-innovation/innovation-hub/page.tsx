
import { fetchPageData } from '@/lib/useFetchData';
import { NextPage } from 'next';
import Image from 'next/image';

// JSON data for the innovation hub
let innovationHubData = {
  "introduction": {
    "title": "Innovation Hub at Tech University",
    "description": "The Innovation Hub at Tech University is a collaborative space designed to spark creativity, foster problem-solving, and build a culture of entrepreneurship and applied innovation. Supported by institutional and industry stakeholders, it empowers students and faculty to transform ideas into impact through hands-on projects, mentorship, and startup incubation."
  },
  "vision": {
    "title": "Our Vision & Objectives",
    "objectives": [
      "Nurture innovative thinking and entrepreneurial skills",
      "Support student-led research and product development",
      "Facilitate industry-academia collaboration",
      "Act as a pre-incubation and mentorship center",
      "Host hackathons, idea challenges, workshops, and exhibitions"
    ]
  },
  "components": {
    "title": "Key Components",
    "items": [
      {
        "icon": "🚀",
        "title": "Startup Support Desk",
        "description": "Mentorship, business model guidance, pitch preparation"
      },
      {
        "icon": "🔬",
        "title": "Innovation Lab",
        "description": "Equipped with tools for prototyping (IoT kits, 3D printing, etc.)"
      },
      {
        "icon": "🧑‍🏫",
        "title": "Mentorship Programs",
        "description": "Industry mentors & faculty advisors"
      },
      {
        "icon": "🏢",
        "title": "Incubation Cell / IIC",
        "description": "For nurturing early-stage ideas"
      },
      {
        "icon": "🎯",
        "title": "Idea Portal",
        "description": "Online platform to collect innovative ideas from students"
      },
      {
        "icon": "🧪",
        "title": "Mini Research Projects",
        "description": "Seed funding for selected student/faculty research"
      },
      {
        "icon": "🎤",
        "title": "Events & Competitions",
        "description": "Hackathons, idea fests, demo days, poster presentations"
      }
    ]
  },
  "successStories": {
    "title": "Recent Innovations & Success Stories",
    "projects": [
      {
        "name": "Smart Bin",
        "area": "IoT & Clean Tech",
        "outcome": "Selected for TIDE Pre-Incubation"
      },
      {
        "name": "StudyKart App",
        "area": "EdTech",
        "outcome": "Won ₹50,000 grant from IIC"
      },
      {
        "name": "Solar Cart Design",
        "area": "Renewable Energy",
        "outcome": "Presented at State Tech Fair"
      }
    ]
  },
  "collaborations": {
    "title": "Industry & Academic Collaborations",
    "partners": [
      "TCS iON Innovation Labs",
      "AWS Academy / Microsoft Learn",
      "IIC (MoE Innovation Cell) status",
      "Local startup incubators or angel networks"
    ]
  },
  "events": {
    "title": "Upcoming Activities",
    "calendar": [
      {
        "name": "Innovation Week 2024",
        "date": "October 15-20, 2024"
      },
      {
        "name": "Hackathon on Sustainability",
        "date": "September 28-29, 2024"
      },
      {
        "name": "Idea Pitching Camp",
        "date": "Monthly (1st Friday)"
      },
      {
        "name": "FDP on Design Thinking",
        "date": "November 10-12, 2024"
      }
    ]
  }
}


const InnovationHubPage: NextPage = async() => {

  const { data, error} = await fetchPageData("innovation-hub")
innovationHubData = data as any ?? innovationHubData
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovation Hub</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Fostering creativity, entrepreneurship, and 21st-century skills
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{innovationHubData.introduction.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {innovationHubData.introduction.description}
          </p>
        </div>
      </section>

      {/* Vision & Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{innovationHubData.vision.title}</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {innovationHubData.vision.objectives.map((objective, index) => (
              <li key={index} className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-4 mt-1">✓</span>
                  <p className="text-gray-700">{objective}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{innovationHubData.components.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationHubData.components.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                <div className="text-6xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{innovationHubData.successStories.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {innovationHubData.successStories.projects.map((project, index) => (
              <div key={index} className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-1"><span className="font-medium">Area:</span> {project.area}</p>
                <p className="text-gray-700"><span className="font-medium">Outcome:</span> {project.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{innovationHubData.collaborations.title}</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {innovationHubData.collaborations.partners.map((partner, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <p className="text-gray-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-4 bg-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{innovationHubData.events.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {innovationHubData.events.calendar.map((event, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default InnovationHubPage;