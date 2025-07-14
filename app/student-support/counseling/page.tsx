import Head from 'next/head';
import { NextPage } from 'next';
import HeroSection from '@/components/newHeroImageForAllPage';
// Temporary data - will be replaced with API calls
const counselingData = {
    introduction: {
        title: "Student Counseling Services",
        description: "At CImage College, we believe every student deserves personal, academic, and emotional support to thrive. Our counseling services are confidential, professional, and designed to help you succeed in all aspects of college life.",
        quote: "Your mental health is just as important as your academic success. We're here to help you balance both."
    },
    services: [
        {
            type: "Academic Counseling",
            icon: "📚",
            description: "Get guidance on your academic journey and overcome challenges in your studies.",
            details: [
                "Course selection advice and academic planning",
                "Exam preparation and study strategies",
                "Time management techniques",
                "Guidance on projects, internships, and certifications",
                "Learning disability screening and support"
            ]
        },
        {
            type: "Career Counseling",
            icon: "💼",
            description: "Discover your career path and prepare for professional success.",
            details: [
                "Career aptitude and personality assessments",
                "Resume writing and interview preparation",
                "Higher education guidance (CAT, GATE, UPSC, etc.)",
                "Industry trends and job market information",
                "Internship and placement support"
            ]
        },
        {
            type: "Personal Counseling",
            icon: "🧠",
            description: "Support for your emotional well-being and personal development.",
            details: [
                "Stress and anxiety management",
                "Relationship and peer pressure issues",
                "Self-esteem and confidence building",
                "Crisis intervention and support",
                "Referrals to professional psychologists when needed"
            ]
        }
    ],
    booking: {
        title: "Schedule a Counseling Session",
        methods: [
            {
                type: "Online Booking",
                description: "Fill our simple online form to request an appointment",
                link: "/book-counseling",
                icon: "💻"
            },
            {
                type: "Walk-in Hours",
                description: "Visit us during our walk-in hours for immediate support",
                details: "Monday-Friday: 10 AM - 1 PM\nCounseling Room (Block A, 2nd Floor)",
                icon: "🚶‍♂️"
            },
            {
                type: "Emergency Contact",
                description: "For urgent mental health support",
                details: "24/7 Helpline: +91 9876543210",
                icon: "🚨"
            }
        ]
    },
    counselors: [
        {
            name: "Dr. Priya Sharma",
            role: "Head Counselor",
            qualification: "PhD in Psychology, 12 years experience",
            specialization: "Career Counseling, Academic Stress",
            photo: "/counselors/priya-sharma.jpg"
        },
        {
            name: "Rahul Kumar",
            role: "Career Counselor",
            qualification: "MA in Career Guidance, Certified Career Coach",
            specialization: "Resume Building, Interview Skills",
            photo: "/counselors/rahul-kumar.jpg"
        },
        {
            name: "Anjali Patel",
            role: "Student Wellness Counselor",
            qualification: "MSW, Trauma-Informed Care Specialist",
            specialization: "Mental Health, Relationship Issues",
            photo: "/counselors/anjali-patel.jpg"
        }
    ],
    resources: [
        {
            title: "Time Management Guide",
            type: "PDF",
            link: "/resources/time-management.pdf"
        },
        {
            title: "Exam Stress Handbook",
            type: "PDF",
            link: "/resources/exam-stress.pdf"
        },
        {
            title: "Career Aptitude Test",
            type: "Online Tool",
            link: "https://career-test.cimage.edu"
        },
        {
            title: "Mental Health Awareness",
            type: "Brochure",
            link: "/resources/mental-health.pdf"
        }
    ],
    events: [
        {
            title: "Managing Exam Anxiety Workshop",
            date: "2024-09-15",
            time: "3:00 PM - 5:00 PM",
            location: "Auditorium, Block C"
        },
        {
            title: "Resume Masterclass",
            date: "2024-10-05",
            time: "2:00 PM - 4:00 PM",
            location: "Career Center, Block B"
        },
        {
            title: "Mindfulness Meditation Sessions",
            date: "Every Wednesday",
            time: "4:00 PM - 5:00 PM",
            location: "Yoga Room, Block A"
        }
    ],
    confidentiality: {
        statement: "All counseling sessions are completely confidential unless there is a risk of harm to yourself or others. We follow strict ethical guidelines to protect your privacy and create a safe space for open discussion.",
        exceptions: [
            "Risk of harm to self or others",
            "Abuse or neglect of minors",
            "Court-ordered disclosure"
        ]
    },
    emergencyContacts: [
        {
            name: "College Counseling Helpline",
            number: "+91 9876543210",
            available: "24/7"
        },
        {
            name: "National Mental Health Helpline",
            number: "1800-123-4567",
            available: "24/7"
        },
        {
            name: "Nearest Emergency Hospital",
            number: "+91 9876543211",
            available: "24/7"
        }
    ],
    careerMahakumbh: {
        title: "Career Mahakumbh",
        description: "India's largest career fair connecting students with top employers and career opportunities",
        features: [
            "1000+ top recruiting companies from diverse sectors",
            "50,000+ job opportunities across experience levels",
            "Career guidance sessions by industry experts",
            "Skill development workshops and certification opportunities"
        ],
        stats: {
            companies: "1000+",
            jobs: "50K+",
            sectors: "10+",
            cities: "5+"
        },
        testimonials: [
            {
                name: "Rahul Sharma",
                position: "Placed at Amazon",
                quote: "Career Mahakumbh connected me with multiple companies in one place. I received 3 job offers!",
                photo: "https://cimage.in/sitepanel/uploads/news/WhatsApp%20Image%202024-01-12%20at%2017-23-41_c0134a3e.jpg"
            },
            {
                name: "Priya Patel",
                position: "Placed at Deloitte",
                quote: "The resume workshops and mock interviews were incredibly helpful for my preparation.",
                photo: "https://cimage.in/sitepanel/uploads/aboutus/cimage-about-cm.jpg"
            },
            {
                name: "Amit Kumar",
                position: "Founder, TechStart",
                quote: "As a recruiter, we found exceptional talent at Career Mahakumbh. Highly recommended!",
                photo: "https://careermahakumbh.com/img/Career_Mahakumbh_Banner2.jpg"
            }
        ],
        images : [
    {
        url: "https://careermahakumbh.com/mahakumbh_pics/1.jpg",
        imageAlternate: "Career Mahakumbh Event - Image 1"
    },
    {
        url: "https://careermahakumbh.com/mahakumbh_pics/6.jpg",
        imageAlternate: "Career Mahakumbh Event - Image 6"
    },
    {
        url: "https://careermahakumbh.com/mahakumbh_pics/12.jpg",
        imageAlternate: "Career Mahakumbh Event - Image 12"
    },
    {
        url: "https://careermahakumbh.com/mahakumbh_pics/9.jpg",
        imageAlternate: "Career Mahakumbh Event - Image 9"
    }
]

    }
};

const CounselingPage: NextPage = () => {
    // This would be replaced with actual API call
    // const { data, error } = useSWR('/api/counseling', fetcher);
    // if (error) return <div>Failed to load</div>;
    // if (!data) return <div>Loading...</div>;

    // Using the local JSON data for now
    const data = counselingData;

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
                    title="Student Counseling Services"
                    description="Begin your journey towards academic excellence with our industry-aligned undergraduate programs"
                    imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    overlayOpacity={0.3}
                    height="lg"
                />
                {/* Services Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Counseling Services</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {data.services.map((service, index) => (
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
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{data.booking.title}</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {data.booking.methods.map((method, index) => (
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
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Counselors</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {data.counselors.map((counselor, index) => (
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
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
                                <h2 className="text-3xl font-bold mb-8 text-gray-800">Resources & Downloads</h2>
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <ul className="space-y-4">
                                        {data.resources.map((resource, index) => (
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
                                        {data.events.map((event, index) => (
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
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Confidentiality & Ethics</h2>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
                            <p className="text-lg text-gray-800 mb-6">{data.confidentiality.statement}</p>
                            <h3 className="font-bold text-gray-800 mb-3">Exceptions to Confidentiality:</h3>
                            <ul className="space-y-2">
                                {data.confidentiality.exceptions.map((exception, index) => (
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

                {/* Emergency Contacts Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Emergency Contacts</h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {data.emergencyContacts.map((contact, index) => (
                                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-red-600 p-4 text-white">
                                        <h3 className="text-xl font-bold">{contact.name}</h3>
                                        <p className="text-sm opacity-90">{contact.available}</p>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-2xl font-mono font-bold text-gray-800 mb-4">{contact.number}</div>
                                        <a href={`tel:${contact.number.replace(/\D/g, '')}`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-300">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            Call Now
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Career Mahakumbh Section */}
                <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-12xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold mb-4">{data.careerMahakumbh.title}</h2>
                                <p className="text-xl max-w-3xl mx-auto opacity-90">
                                    {data.careerMahakumbh.description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 items-start">
                                {/* Left Column - Content */}
                                <div className="space-y-6">
                                    <div className="p-5 bg-blue-900/20 rounded-xl border border-blue-400/20">
                                        <h3 className="text-xl font-semibold mb-4 text-white">Event Highlights</h3>
                                        <ul className="space-y-3">
                                            {data.careerMahakumbh.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="bg-yellow-400 text-blue-900 p-1 rounded-full mr-3 flex-shrink-0">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-blue-100/90 text-sm md:text-base">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-400/20 text-center">
                                            <div className="text-2xl font-bold text-white">{data.careerMahakumbh.stats.companies}</div>
                                            <div className="text-xs opacity-80 text-blue-100">Companies</div>
                                        </div>
                                        <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-400/20 text-center">
                                            <div className="text-2xl font-bold text-white">{data.careerMahakumbh.stats.jobs}</div>
                                            <div className="text-xs opacity-80 text-blue-100">Jobs</div>
                                        </div>
                                        <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-400/20 text-center">
                                            <div className="text-2xl font-bold text-white">{data.careerMahakumbh.stats.sectors}</div>
                                            <div className="text-xs opacity-80 text-blue-100">Sectors</div>
                                        </div>
                                        <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-400/20 text-center">
                                            <div className="text-2xl font-bold text-white">{data.careerMahakumbh.stats.cities}</div>
                                            <div className="text-xs opacity-80 text-blue-100">Cities</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col-2  gap-3 justify-center ">
                                        <a
                                            href="https://careermahakumbh.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium rounded-lg transition-all text-lg"
                                        >
                                            Official Website
                                        </a>
                                        <a
                                            href="https://careermahakumbh.com/registration"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 border border-yellow-400 hover:bg-yellow-400/10 text-yellow-400 font-medium rounded-lg transition-all text-lg"
                                        >
                                            Register Now
                                        </a>
                                    </div>
                                </div>

                                {/* Right Column - Image Gallery */}
                                <div className="grid grid-cols-2 gap-3 h-full">
                                    {data.careerMahakumbh.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="relative rounded-lg overflow-hidden aspect-square"
                                        >
                                            <img
                                                src={image.url}
                                                alt={`Career Mahakumbh event ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                                                <span className="text-white text-xs">{image.imageAlternate}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonials */}
                            <div className="mt-16">
                                <h3 className="text-2xl font-semibold mb-8 text-center">What Participants Say</h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {data.careerMahakumbh.testimonials.map((testimonial, index) => (
                                        <div key={index} className=" bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 rounded-full bg-blue-600 mr-4 overflow-hidden">
                                                    <img
                                                        src={testimonial.photo}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">{testimonial.name}</h4>
                                                    <p className="text-sm opacity-80">{testimonial.position}</p>
                                                </div>
                                            </div>
                                            <p className="italic">"{testimonial.quote}"</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
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

export default CounselingPage;