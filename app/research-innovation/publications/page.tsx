// app/publications/page.tsx
import { NextPage } from 'next';
import HeroSection from '@/components/newHeroImageForAllPage';

// JSON data for publications
const publicationsData = {
  hero: {
    title: "Research Publications",
    description: "Showcasing the intellectual contributions of our faculty and students",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    overlayOpacity: 0.4,
    height: "lg"
  },
  introduction: {
    title: "Academic Publications at Tech University",
    content: "At Tech University, research and academic publications are an integral part of our commitment to knowledge creation, critical inquiry, and innovation. Our faculty and students actively contribute to peer-reviewed journals, national and international conferences, books, and creative works. This page highlights our growing repository of intellectual contributions."
  },
  categories: [
    {
      id: "journals",
      name: "Journal Publications",
      icon: "📄",
      items: [
        {
          year: "2024",
          title: "AI-Powered Attendance System in EdTech",
          authors: "Prof. R. Sharma, Ankit",
          journal: "IJRET",
          identifier: "ISSN: 1234-5678",
          link: "#"
        },
        {
          year: "2023",
          title: "Mobile Commerce Adoption among Rural Youth",
          authors: "Dr. S. Verma",
          journal: "Scopus Journal of Marketing",
          identifier: "DOI: 10.1016/j.jm.2023.05.012",
          link: "#"
        },
        {
          year: "2023",
          title: "Sustainable Energy Solutions for Smart Cities",
          authors: "Dr. A. Patel, M. Gupta",
          journal: "IEEE Transactions on Sustainable Energy",
          identifier: "DOI: 10.1109/TSTE.2023.1234567",
          link: "#"
        }
      ]
    },
    {
      id: "books",
      name: "Books & Chapters",
      icon: "📘",
      items: [
        {
          year: "2024",
          title: "Advanced Machine Learning Techniques",
          authors: "Dr. N. Kapoor",
          publisher: "Springer Nature",
          identifier: "ISBN: 978-3-031-12345-6",
          link: "#"
        },
        {
          year: "2023",
          title: "Chapter: Cybersecurity in IoT Ecosystems",
          authors: "Prof. M. Joshi",
          publisher: "In: IoT Security Handbook (Elsevier)",
          identifier: "ISBN: 978-0-12-821123-4",
          link: "#"
        }
      ]
    },
    {
      id: "conferences",
      name: "Conference Papers",
      icon: "🎤",
      items: [
        {
          year: "2024",
          title: "Blockchain Applications in Supply Chain",
          authors: "Dr. R. Gupta, S. Kumar",
          conference: "International Conference on Blockchain (ICBC 2024), Tokyo",
          identifier: "pp. 123-134",
          link: "#"
        },
        {
          year: "2023",
          title: "Augmented Reality in Education",
          authors: "Prof. S. Desai, A. Sharma",
          conference: "IEEE TALE 2023, Sydney",
          identifier: "DOI: 10.1109/TALE.2023.1234567",
          link: "#"
        }
      ]
    },
    {
      id: "student",
      name: "Student Research",
      icon: "🧪",
      items: [
        {
          year: "2024",
          title: "Waste Management Using IoT",
          authors: "R. Verma, S. Singh (B.Tech Final Year)",
          journal: "Student Research Journal, Vol. 5(2)",
          identifier: "pp. 45-52",
          link: "#"
        }
      ]
    }
  ],
  highlightedAuthors: [
    {
      name: "Prof. Riya Sharma",
      department: "Computer Science",
      achievements: [
        "12 International Journal Papers",
        "3 Scopus-indexed Articles",
        "Invited Speaker at IIM Indore Research Colloquium",
        "Best Paper Award at ICICT 2023"
      ],
      photo: "/images/profiles/prof-riya-sharma.jpg"
    },
    {
      name: "Dr. Amit Patel",
      department: "Electrical Engineering",
      achievements: [
        "8 Journal Publications (IEEE, Springer)",
        "2 Patents filed",
        "Editorial Board Member: Journal of Sustainable Energy"
      ],
      photo: "/images/profiles/dr-amit-patel.jpg"
    }
  ],
  resources: [
    {
      title: "Annual Publication Report 2023–24",
      format: "PDF",
      size: "2.4 MB",
      link: "#"
    },
    {
      title: "Research Paper Submission Guidelines",
      format: "PDF",
      size: "1.1 MB",
      link: "#"
    },
    {
      title: "UGC CARE Journal List",
      format: "External Link",
      size: "",
      link: "https://ugccare.unipune.ac.in/"
    }
  ]
};

const PublicationsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title={publicationsData.hero.title}
        description={publicationsData.hero.description}
        imageUrl={publicationsData.hero.imageUrl}
        overlayOpacity={publicationsData.hero.overlayOpacity}
      />

      {/* Introduction */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{publicationsData.introduction.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {publicationsData.introduction.content}
          </p>
        </div>
      </section>

      {/* Publication Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Publication Categories</h2>
          
          <div className="space-y-16">
            {publicationsData.categories.map((category) => (
              <div key={category.id} className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  {category.name}
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Year</th>
                        <th className="py-3 px-4 text-left">Title</th>
                        <th className="py-3 px-4 text-left">Author(s)</th>
                        <th className="py-3 px-4 text-left">Published In</th>
                        <th className="py-3 px-4 text-left">Identifier</th>
                        <th className="py-3 px-4 text-left">Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {category.items.map((item:any, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-4 px-4">{item.year}</td>
                          <td className="py-4 px-4 font-medium">{item.title}</td>
                          <td className="py-4 px-4">{item.authors}</td>
                          <td className="py-4 px-4">{item?.journal || item?.conference || item?.publisher}</td>
                          <td className="py-4 px-4 text-sm">{item.identifier}</td>
                          <td className="py-4 px-4">
                            {item.link && (
                              <a href={item.link} className="text-indigo-600 hover:text-indigo-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                </svg>
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Authors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Highlighted Faculty Authors</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {publicationsData.highlightedAuthors.map((author, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mr-6">
                    <img 
                      src={author.photo} 
                      alt={author.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{author.name}</h3>
                    <p className="text-gray-600 mb-3">{author.department}</p>
                    <ul className="space-y-2">
                      {author.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-indigo-600 mr-2">•</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Downloadable Resources</h2>
          
          <div className="space-y-4">
            {publicationsData.resources.map((resource, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div>
                  <h3 className="font-medium text-gray-800">{resource.title}</h3>
                  <p className="text-sm text-gray-500">
                    {resource.format} {resource.size && `• ${resource.size}`}
                  </p>
                </div>
                <a 
                  href={resource.link} 
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.format === "PDF" ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Visit
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Research to Publish?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our research support team for guidance on publishing your work.
          </p>
          <button className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-8 rounded-full transition-colors">
            Contact Research Office
          </button>
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;