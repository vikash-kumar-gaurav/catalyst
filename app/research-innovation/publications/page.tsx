// app/publications/page.tsx
import { NextPage } from 'next';
import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';

// JSON data for publications
let publicationsData = {
  "hero": {
    "title": "Research Publications",
    "description": "Showcasing the intellectual contributions of our faculty and students",
    "imageUrl": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    "overlayOpacity": 0.4,
    "height": "lg"
  },
  "introduction": {
    "title": "Academic Publications at Tech University",
    "content": "At Tech University, research and academic publications are an integral part of our commitment to knowledge creation, critical inquiry, and innovation. Our faculty and students actively contribute to peer-reviewed journals, national and international conferences, books, and creative works. This page highlights our growing repository of intellectual contributions."
  },
  "categories": [
    {
      "id": "journals",
      "name": "Journal Publications",
      "icon": "📄",
      "items": [
        {
          "year": "2024",
          "title": "AI-Powered Attendance System in EdTech",
          "authors": "Prof. R. Sharma, Ankit",
          "journal": "IJRET",
          "identifier": "ISSN: 1234-5678",
          "link": "#"
        },
        {
          "year": "2023",
          "title": "Mobile Commerce Adoption among Rural Youth",
          "authors": "Dr. S. Verma",
          "journal": "Scopus Journal of Marketing",
          "identifier": "DOI: 10.1016/j.jm.2023.05.012",
          "link": "#"
        },
        {
          "year": "2023",
          "title": "Sustainable Energy Solutions for Smart Cities",
          "authors": "Dr. A. Patel, M. Gupta",
          "journal": "IEEE Transactions on Sustainable Energy",
          "identifier": "DOI: 10.1109/TSTE.2023.1234567",
          "link": "#"
        }
      ]
    },
    {
      "id": "books",
      "name": "Books & Chapters",
      "icon": "📘",
      "items": [
        {
          "year": "2024",
          "title": "Advanced Machine Learning Techniques",
          "authors": "Dr. N. Kapoor",
          "publisher": "Springer Nature",
          "identifier": "ISBN: 978-3-031-12345-6",
          "link": "#"
        },
        {
          "year": "2023",
          "title": "Chapter: Cybersecurity in IoT Ecosystems",
          "authors": "Prof. M. Joshi",
          "publisher": "In: IoT Security Handbook (Elsevier)",
          "identifier": "ISBN: 978-0-12-821123-4",
          "link": "#"
        }
      ]
    },
    {
      "id": "conferences",
      "name": "Conference Papers",
      "icon": "🎤",
      "items": [
        {
          "year": "2024",
          "title": "Blockchain Applications in Supply Chain",
          "authors": "Dr. R. Gupta, S. Kumar",
          "conference": "International Conference on Blockchain (ICBC 2024), Tokyo",
          "identifier": "pp. 123-134",
          "link": "#"
        },
        {
          "year": "2023",
          "title": "Augmented Reality in Education",
          "authors": "Prof. S. Desai, A. Sharma",
          "conference": "IEEE TALE 2023, Sydney",
          "identifier": "DOI: 10.1109/TALE.2023.1234567",
          "link": "#"
        }
      ]
    },
    {
      "id": "student",
      "name": "Student Research",
      "icon": "🧪",
      "items": [
        {
          "year": "2024",
          "title": "Waste Management Using IoT",
          "authors": "R. Verma, S. Singh (B.Tech Final Year)",
          "journal": "Student Research Journal, Vol. 5(2)",
          "identifier": "pp. 45-52",
          "link": "#"
        }
      ]
    }
  ],
  "highlightedAuthors": [
    {
      "name": "Prof. Amit Shukla",
      "department": "IT Faculty",
      "achievements": [
        "12 International Journal Papers",
        "3 Scopus-indexed Articles",
        "Invited Speaker at IIM Indore Research Colloquium",
        "Best Paper Award at ICICT 2023"
      ],
      "cover_photo": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741219/486682911_1059488162873789_2936820642328847177_n_w7dlmc.jpg",
      "profile_photo": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752744394/68fa36c2-de43-406c-b4bf-6466c2ed96ac.png"
    },
    {
      "name": "Neeraj Poddar",
      "department": "English Faculty",
      "achievements": [
        "8 Journal Publications (IEEE, Springer)",
        "2 Patents filed",
        "Editorial Board Member: Journal of Sustainable Energy"
      ],
      "cover_photo": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741219/486682911_1059488162873789_2936820642328847177_n_w7dlmc.jpg",
      "profile_photo": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752745570/n_p_wutnea.jpg"
    }
  ],
  "resources": [
    {
      "title": "Annual Publication Report 2023–24",
      "format": "PDF",
      "size": "2.4 MB",
      "link": "#"
    },
    {
      "title": "Research Paper Submission Guidelines",
      "format": "PDF",
      "size": "1.1 MB",
      "link": "#"
    }
  ]
}


const PublicationsPage: NextPage = async() => {
  const { data, error} = await fetchPageData("publications")
  publicationsData = data as any ?? publicationsData
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
<section className="py-16 bg-gray-50 mx-auto">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-3">Featured Faculty Scholars</h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">Celebrating our distinguished academic contributors and their groundbreaking work</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-center">
      {publicationsData.highlightedAuthors.map((author, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
        >
          {/* Large full-width image container */}
          <div className="h-48 w-full relative overflow-hidden">
            <img 
              src={author.cover_photo} 
              alt={author.name}
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Profile image floating over the banner */}
          <div className="relative -mt-16 mx-6">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <img 
                src={author.profile_photo} 
                alt={author.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content area */}
          <div className="px-6 pb-6 pt-2">
            <h3 className="text-2xl font-bold text-gray-800 mt-2">{author.name}</h3>
            <p className="text-blue-600 font-medium mb-4">{author.department}</p>
            
            <ul className="space-y-3 mb-6">
              {author.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-16">
      <button className="inline-flex items-center px-8 py-3.5 text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all">
        Explore All Faculty Members
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
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