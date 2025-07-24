import Head from 'next/head';
import { NextPage } from 'next';
import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';

let pageData = {
    "page_name": "counseling",
    "booking": {
        "title": "Schedule a Counseling Session",
        "methods": [
            {
                "type": "Walk-in Hours",
                "description": "Visit us during our walk-in hours for immediate support",
                "details": "Monday-Friday: 10 AM - 1 PM\nCounseling Room (Block A, 2nd Floor)",
                "icon": "🚶‍♂️"
            },
            {
                "type": "Online Booking",
                "description": "Fill our simple online form to request an appointment",
                "link": "/book-counseling",
                "icon": "💻"
            }
        ]
    },
    "careerMahakumbh": {
        "title": "Career Mahakumbh",
        "description": "India's largest career fair connecting students with top employers and career opportunities",
        "features": [
            "1000+ top recruiting companies from diverse sectors",
            "50,000+ job opportunities across experience levels",
            "Career guidance sessions by industry experts",
            "Skill development workshops and certification opportunities"
        ],
        "stats": {
            "companies": "1000+",
            "jobs": "50K+",
            "sectors": "10+",
            "cities": "5+"
        },
        "testimonials": [
            {
                "name": "Rahul Sharma",
                "position": "Placed at Amazon",
                "quote": "Career Mahakumbh connected me with multiple companies in one place. I received 3 job offers!",
                "photo": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840893/download_zb0npp.png"
            },
            {
                "name": "Priya Patel",
                "position": "Placed at Deloitte",
                "quote": "The resume workshops and mock interviews were incredibly helpful for my preparation.",
                "photo": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840857/download_bxlxfr.jpg"
            },
            {
                "name": "Amit Kumar",
                "position": "Founder, TechStart",
                "quote": "As a recruiter, we found exceptional talent at Career Mahakumbh. Highly recommended!",
                "photo": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752840893/download_zb0npp.png"
            }
        ],
        "images": [
            {
                "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740741/487301788_1062568922565713_5457511864499874592_n_l65esw.jpg",
                "imageAlternate": "Career Mahakumbh Event - Image 1"
            },
            {
                "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740764/487170883_1062569279232344_2250675696457092391_n_c4lubh.jpg",
                "imageAlternate": "Career Mahakumbh Event - Image 6"
            },
            {
                "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740741/487301788_1062568922565713_5457511864499874592_n_l65esw.jpg",
                "imageAlternate": "Career Mahakumbh Event - Image 12"
            },
            {
                "url": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752926173/487039934_1062569379232334_8104513723895339455_n_lrclwg.jpg",
                "imageAlternate": "Career Mahakumbh Event - Image 9"
            }
        ]
    },
    "confidentiality": {
        "statement": "All counseling sessions are completely confidential unless there is a risk of harm to yourself or others. We follow strict ethical guidelines to protect your privacy and create a safe space for open discussion.",
        "exceptions": [
            "Risk of harm to self or others",
            "Abuse or neglect of minors",
            "Court-ordered disclosure"
        ]
    },
    "counselors": [
        {
            "name": "Dr. Priya Sharma",
            "role": "Head Counselor",
            "qualification": "PhD in Psychology, 12 years experience",
            "specialization": "Career Counseling, Academic Stress",
            "photo": "/counselors/priya-sharma.jpg"
        },
        {
            "name": "Rahul Kumar",
            "role": "Career Counselor",
            "qualification": "MA in Career Guidance, Certified Career Coach",
            "specialization": "Resume Building, Interview Skills",
            "photo": "/counselors/rahul-kumar.jpg"
        },
        {
            "name": "Anjali Patel",
            "role": "Student Wellness Counselor",
            "qualification": "MSW, Trauma-Informed Care Specialist",
            "specialization": "Mental Health, Relationship Issues",
            "photo": "/counselors/anjali-patel.jpg"
        }
    ],
    "events": [
        {
            "title": "Managing Exam Anxiety Workshop",
            "date": "2024-09-15",
            "time": "3:00 PM - 5:00 PM",
            "location": "Auditorium, Block C"
        },
        {
            "title": "Resume Masterclass",
            "date": "2024-10-05",
            "time": "2:00 PM - 4:00 PM",
            "location": "Career Center, Block B"
        }
    ],
    "heroSection": {
        "imageUrl": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752927606/WhatsApp_Image_2025-07-19_at_17.46.49_fcb8ec33_mdu3no.jpg",
        "title": "Student Counseling Services",
        "description": "Begin your journey towards academic excellence with our industry-aligned undergraduate programs"
    },
    "introduction": {
        "title": "Student Counseling Services",
        "description": "At CImage College, we believe every student deserves personal, academic, and emotional support to thrive. Our counseling services are confidential, professional, and designed to help you succeed in all aspects of college life.",
        "quote": "Your mental health is just as important as your academic success. We're here to help you balance both."
    },
    "resources": [
        {
            "title": "Time Management Guide",
            "type": "PDF",
            "link": "/resources/time-management.pdf"
        },
        {
            "title": "Exam Stress Handbook",
            "type": "PDF",
            "link": "/resources/exam-stress.pdf"
        },
        {
            "title": "Career Aptitude Test",
            "type": "Online Tool",
            "link": "https://career-test.cimage.edu"
        },
        {
            "title": "Mental Health Awareness",
            "type": "Brochure",
            "link": "/resources/mental-health.pdf"
        }
    ],
    "services": [
        {
            "type": "Academic Counseling",
            "icon": "📚",
            "description": "Get guidance on your academic journey and overcome challenges in your studies.",
            "details": [
                "Course selection advice and academic planning",
                "Exam preparation and study strategies",
                "Time management techniques",
                "Guidance on projects, internships, and certifications",
                "Learning disability screening and support"
            ]
        },
        {
            "type": "Career Counseling",
            "icon": "💼",
            "description": "Discover your career path and prepare for professional success.",
            "details": [
                "Career aptitude and personality assessments",
                "Resume writing and interview preparation",
                "Higher education guidance (CAT, GATE, UPSC, etc.)",
                "Industry trends and job market information",
                "Internship and placement support"
            ]
        },
        {
            "type": "Personal Counseling",
            "icon": "🧠",
            "description": "Support for your emotional well-being and personal development.",
            "details": [
                "Stress and anxiety management",
                "Relationship and peer pressure issues",
                "Self-esteem and confidence building",
                "Crisis intervention and support",
                "Referrals to professional psychologists when needed"
            ]
        }
    ]
}


const CounselingPage: NextPage = async () => {

    // const { data, error } = await fetchPageData("counseling")
    // pageData = data as any ?? pageData

    return (
        <>
            <Head>
                <title>Counseling Services | Catalyst College</title>
                <meta name="description" content="Access academic, career, and personal counseling services at CImage College. Professional support for your success and well-being." />
                <meta name="keywords" content="counseling, mental health, career guidance, academic support, CImage College" />
                <meta property="og:title" content="Student Counseling Services | CImage College" />
                <meta property="og:description" content="Professional counseling support for academic, career, and personal challenges" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.cimagecollege.edu/counseling" />
            </Head>

            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">


                {/* Introduction Section */}
                <HeroSection
                    title={pageData.heroSection.title}
                    description={pageData.heroSection.description}
                    imageUrl={pageData.heroSection.imageUrl}
                    overlayOpacity={0.3}
                    height="lg"
                />
                {/* Services Section */}
                <section className="py-6 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Counseling Services</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {pageData.services.map((service, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                                        <div className="text-4xl mb-4">{service.icon}</div>
                                        <h3 className="text-xl font-bold">{service.type}</h3>
                                        <p className="opacity-90">{service.description}</p>
                                    </div>
                                    <div className="p-6">
                                        <ul className="space-y-3">
                                            {service.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Booking Section */}
                <section className="py-6 bg-gray-50 flex items-center justify-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{pageData.booking.title}</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {pageData.booking.methods.map((method, index) => (
                                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                                    <div className="text-4xl mb-4">{method.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">{method.type}</h3>
                                    <p className="text-gray-600 mb-4">{method.description}</p>
                                    {method.link ? (
                                        <a href={method.link} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                                            {method.type === "Online Booking" ? "Book Now" : "More Info"}
                                        </a>
                                    ) : (
                                        <div className="whitespace-pre-line text-gray-700 bg-gray-100 p-3 rounded-lg">
                                            {method.details}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Counselors Section */}
                <section className="py-6 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Counselors</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {pageData.counselors.map((counselor, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                                        <img
                                            src={counselor.photo}
                                            alt={counselor.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">{counselor.name}</h3>
                                        <p className="text-gray-600 mb-2">{counselor.role}</p>
                                        <p className="text-gray-700 mb-3">{counselor.qualification}</p>
                                        <div className="bg-blue-50 border border-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm">
                                            Specializes in: {counselor.specialization}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Resources & Events Section */}
                <section className="py-6 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
                                <h2 className="text-3xl font-bold mb-8 text-gray-800">Resources & Downloads</h2>
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <ul className="space-y-4">
                                        {pageData.resources.map((resource, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                    {resource.type === "PDF" ? (
                                                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">{resource.title}</h4>
                                                    <p className="text-gray-600 text-sm">{resource.type}</p>
                                                    <a href={resource.link} className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center mt-1">
                                                        Download
                                                        <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8">
                                <h2 className="text-3xl font-bold mb-8 text-gray-800">Upcoming Events</h2>
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <ul className="space-y-6">
                                        {pageData.events.map((event, index) => (
                                            <li key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                                                <div className="flex">
                                                    <div className="bg-blue-100 text-blue-800 rounded-lg p-3 mr-4 text-center flex-shrink-0">
                                                        <div className="font-bold text-lg">
                                                            {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}
                                                        </div>
                                                        <div className="text-sm uppercase">
                                                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-800">{event.title}</h4>
                                                        <p className="text-gray-600 text-sm mt-1">
                                                            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            {event.time}
                                                        </p>
                                                        <p className="text-gray-600 text-sm">
                                                            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            {event.location}
                                                        </p>
                                                        <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm mt-2">
                                                            More details
                                                            <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Confidentiality Section */}
                <section className="py-6 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Confidentiality & Ethics</h2>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
                            <p className="text-lg text-gray-800 mb-6">{pageData.confidentiality.statement}</p>
                            <h3 className="font-bold text-gray-800 mb-3">Exceptions to Confidentiality:</h3>
                            <ul className="space-y-2">
                                {pageData.confidentiality.exceptions.map((exception, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-gray-700">{exception}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>


                {/* Career Mahakumbh Section */}
                <section className="py-6 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            {/* Header Section */}
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                    {pageData.careerMahakumbh.title}
                                </h2>
                                <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
                                    {pageData.careerMahakumbh.description}
                                </p>
                            </div>

                            {/* Main Content */}
                            <div className="grid lg:grid-cols-2 gap-8 items-start">
                                {/* Left Column - Content */}
                                <div className="space-y-6">
                                    {/* Features Box */}
                                    <div className="p-6 bg-blue-900/20 rounded-xl border border-blue-400/20 backdrop-blur-sm">
                                        <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                                            <svg className="w-6 h-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                            Event Highlights
                                        </h3>
                                        <ul className="space-y-3">
                                            {pageData.careerMahakumbh.features.map((feature, index) => (
                                                <li key={index} className="flex items-start group">
                                                    <div className="bg-yellow-400 text-blue-900 p-1 rounded-full mr-3 flex-shrink-0 transform group-hover:scale-110 transition-transform">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-blue-100/90 text-base group-hover:text-white transition-colors">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {[
                                            { value: pageData.careerMahakumbh.stats.companies, label: "Companies" },
                                            { value: pageData.careerMahakumbh.stats.jobs, label: "Jobs" },
                                            { value: pageData.careerMahakumbh.stats.sectors, label: "Sectors" },
                                            { value: pageData.careerMahakumbh.stats.cities, label: "Cities" }
                                        ].map((stat, index) => (
                                            <div key={index} className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/20 text-center hover:bg-blue-900/30 transition-colors">
                                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                                <div className="text-xs sm:text-sm opacity-80 text-blue-100">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                        <a
                                            href="https://careermahakumbh.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium rounded-lg transition-all text-center flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                            Official Website
                                        </a>
                                        <a
                                            href="https://careermahakumbh.com/registration"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-6 py-3 border-2 border-yellow-400 hover:bg-yellow-400/10 text-yellow-400 font-medium rounded-lg transition-all text-center flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                            </svg>
                                            Register Now
                                        </a>
                                    </div>
                                </div>

                                {/* Right Column - Image Gallery */}
                                <div className="grid grid-cols-2 gap-4 h-full">
                                    {pageData.careerMahakumbh.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="relative rounded-xl overflow-hidden aspect-square group"
                                        >
                                            <img
                                                src={image.url}
                                                alt={`Career Mahakumbh event ${index + 1}`}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white text-sm font-medium">{image.imageAlternate}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonials Section */}
                            <div className="mt-20">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center relative">
                                    <span className="relative inline-block">
                                        What Participants Say
                                        <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-full transform translate-y-1"></span>
                                    </span>
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {pageData.careerMahakumbh.testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="bg-blue-900/10 p-6 rounded-xl border border-white/20 hover:border-yellow-400/50 transition-all hover:shadow-lg hover:translate-y-[-4px]"
                                        >
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 rounded-full bg-blue-600 mr-4 overflow-hidden border-2 border-yellow-400">
                                                    <img
                                                        src={testimonial.photo}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                                    <p className="text-sm opacity-80">{testimonial.position}</p>
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <div className="absolute -top-3 left-6 w-6 h-6 bg-blue-900/10 border-l border-t border-white/20 rotate-45 transform origin-bottom-right group-hover:border-yellow-400/50 transition-all"></div>
                                                <p className="relative bg-blue-900/10 border border-white/20 rounded-lg p-6 italic text-blue-100 group-hover:border-yellow-400/50 transition-all duration-300 group-hover:shadow-lg">
                                                    <span className="absolute top-3 left-4 text-yellow-400 text-3xl opacity-60">“</span>
                                                    <span className="block pl-6 pr-2 pb-2 pt-1 text-lg leading-relaxed">
                                                        {testimonial.quote}
                                                    </span>
                                                    <span className="absolute bottom-3 right-4 text-yellow-400 text-3xl opacity-60">”</span>
                                                    <span className="absolute bottom-2 right-4 text-xs text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                        — {testimonial.name}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

           
        </>
    );
};

export default CounselingPage;