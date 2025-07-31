import BentoGrid from '@/components/BentoGrid';
import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaChalkboardTeacher, FaFlask, FaUserTie, FaFileAlt, FaHandshake, FaAward, FaBuilding } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Careers | Catalyst College Patna',
  description: 'Explore exciting career opportunities to join our team of educators and professionals at Catalyst College Patna',
  keywords: [
    'Catalyst College jobs',
    'teaching jobs Patna',
    'college faculty recruitment',
    'education careers',
    'academic positions',
    'college staff vacancies'
  ],
  openGraph: {
    title: 'Careers | Catalyst College Patna',
    description: 'Join our team of passionate educators and professionals shaping the future of higher education',
    images: [
      {
        url: 'https://catalystcollegepatna.edu.in/images/careers-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Career Opportunities at Catalyst College',
      },
    ],
  },
};

const CareersPage = async () => {

  let pageData = {
    "jobOpenings": [
      {
        "position": "Assistant Professor - BBA",
        "department": "Business Administration",
        "type": "Full-time",
        "deadline": "31 July 2025",
        "experience": "2+ years teaching experience",
        "qualification": "Ph.D. or Master's with NET",
        "applyLink": "#apply",
        "jdLink": "/jds/assistant-professor-bba.pdf"
      },
      {
        "position": "Lab Assistant",
        "department": "Computer Science",
        "type": "Contract",
        "deadline": "15 August 2025",
        "experience": "1+ years lab management",
        "qualification": "BCA/BSc IT with technical skills",
        "applyLink": "#apply",
        "jdLink": "/jds/lab-assistant.pdf"
      },
      {
        "position": "Admission Counselor",
        "department": "Administration",
        "type": "Full-time",
        "deadline": "20 July 2025",
        "experience": "2+ years in student counseling",
        "qualification": "Graduate with communication skills",
        "applyLink": "#apply",
        "jdLink": "/jds/admission-counselor.pdf"
      },
      {
        "position": "Assistant Professor - BCA",
        "department": "Computer Applications",
        "type": "Full-time",
        "deadline": "31 July 2025",
        "experience": "2+ years teaching experience",
        "qualification": "Ph.D. or Master's with NET",
        "applyLink": "#apply",
        "jdLink": "/jds/assistant-professor-bca.pdf"
      }
    ],
    "benefits": [
      {
        "title": "Professional Growth",
        "description": "Regular faculty development programs and conference opportunities",
        "icon": "FaChalkboardTeacher"
      },
      {
        "title": "Research Support",
        "description": "Access to labs, journals, and research grants",
        "icon": "FaFlask"
      },
      {
        "title": "Competitive Compensation",
        "description": "As per UGC 7th Pay Commission norms with bonuses",
        "icon": "FaAward"
      },
      {
        "title": "Modern Facilities",
        "description": "State-of-the-art classrooms and campus amenities",
        "icon": "FaBuilding"
      }
    ],
    "processSteps": [
      { "step": 1, "title": "Review Openings", "description": "Explore current job opportunities" },
      { "step": 2, "title": "Prepare Documents", "description": "CV, cover letter, and credentials" },
      { "step": 3, "title": "Submit Application", "description": "Email or online form submission" },
      { "step": 4, "title": "Selection Process", "description": "Interviews and demo lectures" },
      { "step": 5, "title": "Onboarding", "description": "Orientation and joining formalities" }
    ],
    "testimonials": [
      {
        "quote": "Teaching at Catalyst College has been incredibly fulfilling. The institution encourages innovation and research in every domain.",
        "name": "Dr. A. Verma",
        "position": "Associate Professor, BCA Department",
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840893/download_zb0npp.png"
      },
      {
        "quote": "The collaborative environment and professional development opportunities make this a wonderful place to grow your career.",
        "name": "Ms. Priya Sharma",
        "position": "Admission Counselor",
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840857/download_bxlxfr.jpg"
      }
    ],
    "galleryImages": [
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752914011/514414669_1134115595411045_302502792642437531_n_zgvadr.jpg",
        "caption": "Modern Classroom"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752827027/486300369_1055984116557527_4023767572347415079_n_h3ujez.jpg",
        "caption": "Computer Lab"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752923665/cc907ded-0f25-4fdd-bd4c-35fa374c2c9b.png",
        "caption": "Faculty Development Program"
      },
      {
        "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752923705/images_lctjy2.jpg",
        "caption": "Staff Room"
      }
    ],
    "heroSection": {
      "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752923757/how-asking-for-feedback-can-power-your-career-growth_kqk8xm.jpg",
      "description": "Join our team of passionate educators and professionals in creating transformative learning experiences",
      "title": "Build Your Career With Us"
    },
    "facultyPartyImage" : [
  {
    "tag": "Christmas DJ Night",
    "alt": "Students dancing and enjoying DJ night during the Christmas celebration",
    "link": "/event/christmas-dj-night",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753867278/486574429_1058378179651454_2112050029297448089_n_mclug8.jpg"
  },
  {
    "tag": "Faculty Gathering at Hotel",
    "alt": "Faculty members enjoying an evening gathering at a hotel",
    "link": "/event/faculty-hotel-gathering",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753867790/487876142_1062319959257276_8090554758284863642_n_dyoy54.jpg"
  },
  {
    "tag": "Holi Mela Celebration",
    "alt": "Students celebrating Holi with vibrant colors and joyful dance",
    "link": "/event/holi-mela-celebration",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753867522/495578609_24184266644511679_8336436940404981486_n_t3e5dr.jpg"
  },
  {
    "tag": "Christmas Feast Celebration",
    "alt": "Students enjoying a grand Christmas feast at college",
    "link": "/event/christmas-feast-celebration",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753867308/486574382_1058378186318120_929433346429033326_n_gunmzw.jpg"
  },
  {
    "tag": "Faculty Game Competition",
    "alt": "Faculty members participating in fun games and activities",
    "link": "/event/faculty-game-competition",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753867075/487883149_1064192792403326_92072667349301019_n_zxzypp.jpg"
  },
  {
    "tag": "Faculty Sports Match",
    "alt": "Faculty enjoying a friendly match during sports day",
    "link": "/event/faculty-sports-match",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753867406/488410901_1064034009085871_3525721700938216800_n_iyu6zx.jpg"
  },
  {
    "tag": "Nature Vacation with Faculty",
    "alt": "Faculty members enjoying vacation amidst nature",
    "link": "/event/nature-vacation-faculty",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753865850/6f292350-1668-44be-84f8-6d565c346f28.png"
  },
  {
    "tag": "Faculty Christmas Feast",
    "alt": "Faculty enjoying a festive Christmas meal together",
    "link": "/event/faculty-christmas-feast",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753867432/488547654_1064033755752563_8690397012050982600_n_hebhj9.jpg"
  },
  {
    "tag": "Faculty Festive Gathering",
    "alt": "Faculty gathered for a Christmas celebration and dinner",
    "link": "/event/faculty-festive-gathering",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753867432/488547654_1064033755752563_8690397012050982600_n_hebhj9.jpg"
  },
  {
    "tag": "Santa Claus at CIMAGE",
    "alt": "Santa Claus making a surprise visit during the Christmas celebration at CIMAGE",
    "link": "/event/santa-claus-cimage",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753867460/488368335_1064034149085857_8135956236501725018_n_vmcp2f.jpg"
  },
  {
    "tag": "Krishna Janmashtami Celebration",
    "alt": "Students celebrating Krishna Janmashtami with joy and devotion",
    "link": "/event/krishna-janmashtami-celebration",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753870170/487492130_1062152645940674_6353731412277808638_n_odqid1.jpg"
  },
  {
    "tag": "Student as Lord Krishna",
    "alt": "Student dressed as Lord Krishna during Janmashtami celebration",
    "link": "/event/student-lord-krishna",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753870155/487394714_1062153072607298_2390296265493785834_n_czibo2.jpg"
  },
  {
    "tag": "Saraswati Puja at Campus",
    "alt": "Saraswati Puja conducted at CIMAGE College with devotion",
    "link": "/event/saraswati-puja-campus",
    "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753869770/487313492_10096101577088089_2356953045798843565_n_yul69n.jpg"
  }
]

  }


  const { data, error } = await fetchPageData("career")
  pageData = data as any ?? pageData


  const { heroSection, galleryImages, testimonials, processSteps, benefits, jobOpenings, facultyPartyImage } = pageData

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <HeroSection
        title={heroSection.title}
        description={heroSection.description}
        imageUrl={heroSection.imageUrl}
        overlayOpacity={0.3}
        height="lg"

      />

      {/* Working at College Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Working at Catalyst College Patna</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                At <span className="font-semibold text-blue-600">Catalyst College Patna</span>, we believe in nurturing talent — both in our students and our faculty. We are proud to be a progressive, inclusive, and research-driven institution recognized by UGC and accredited by NAAC.
              </p>
              <p className="mt-4">
                We invite passionate educators, skilled professionals, and administrative experts to join our dynamic team committed to academic excellence and student success across our BBA, BCA, and BSc IT programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="openings" className="py-4 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Current Job Openings</h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobOpenings.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{job.position}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{job.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{job.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{job.experience}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{job.deadline}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <a href={job.jdLink} className="text-blue-600 hover:text-blue-800" download>
                            <FaFileAlt className="inline mr-1" /> JD
                          </a>
                          <a href={job.applyLink} className="text-blue-600 hover:text-blue-800">
                            <FaHandshake className="inline mr-1" /> Apply
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">Don't see your ideal position? Send us your resume for future consideration.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Join Our Team?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------- faculty gallery --------- */}

      <section className="relative py-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-200" />
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Floating accent elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full filter blur-[80px] opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Cimage </span> Faculty's life
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              
            </p>
          </div>

          {/* Expanded BentoGrid Container */}
          <div className="relative group mb-8">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="p-1"> {/* Adds subtle inner spacing */}
                <BentoGrid
                  images={facultyPartyImage}
                />
              </div>
            </div>
            {/* Floating frame effect */}
            <div className="absolute -inset-4 border-2 border-transparent group-hover:border-blue-200 rounded-3xl pointer-events-none transition-all duration-500"></div>
          </div>

        </div>
      </section>



      {/* Application Process */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How to Apply</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Application Checklist</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Updated Curriculum Vitae</li>
                <li>Cover letter specifying the position applied for</li>
                <li>Scanned copies of educational certificates</li>
                <li>Experience certificates (if applicable)</li>
                <li>Research publications (for academic positions)</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Email complete applications to: <span className="font-medium">careers@catalystcollegepatna.edu.in</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Hear From Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <blockquote className="text-lg text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-4 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Campus Environment</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 relative">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
                      <p className="text-white font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl shadow-xl p-8 md:p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Recruitment Contact</h2>
                <p className="mb-6">Have questions about working at Catalyst College? Our HR team is happy to assist.</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p>careers@catalystcollegepatna.edu.in</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p>+91 XXXXXXXXXX</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p>Catalyst College Campus, Patna, Bihar 800001</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-gray-800">
                <h3 className="text-xl font-bold mb-4">Quick Application</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Position Interested In</label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                      <option>Select position</option>
                      {jobOpenings.map((job, index) => (
                        <option key={index}>{job.position}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Submit Interest
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CareersPage;