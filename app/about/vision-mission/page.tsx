
import HeroSection from '@/components/newHeroImageForAllPage';
import { JSX } from 'react';
import { FaBullseye, FaEye, FaHandshake, FaChartLine, FaGlobeAsia, FaUniversity, FaGraduationCap, FaLaptopCode, FaUsers, FaLightbulb, FaShieldAlt, FaQuoteLeft } from 'react-icons/fa';
import { GiGrowth, GiIndiaGate, GiTeacher, GiSkills, GiBrain } from 'react-icons/gi';
import { MdOutlineScience, MdEngineering, MdSchool, MdComputer } from 'react-icons/md';
import { IoMdRibbon } from 'react-icons/io';
import { fetchPageData } from '@/lib/useFetchData';

// Modular JSON data structure for easy updates
let pageData = {
    "heroSection": {
        "imageURL": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753085715/465795955_9242357742462481_3285103544361576280_n_tjzwd8.jpg",
        "title": "Our Vision & Mission",
        "description": "Driven by purpose, guided by vision – discover the principles that shape our journey and define our future"
    },
    "vision": {
        "title": "Our Vision: Bihar as India's Knowledge Capital (2047)",
        "description": "As India completes 100 years of independence, we envision Bihar transformed into:",
        "paragraphs": [
            "Bihar stands at the cusp of a monumental transformation. From being historically known as the land of Nalanda and Vikramshila, we're reclaiming our position as India's foremost center of knowledge and innovation.",
            "Our vision extends beyond economic metrics - we're building an ecosystem where every Bihari youth has access to world-class education, where technology solves local challenges, and where our cultural heritage blends seamlessly with cutting-edge innovation."
        ],
        "points": [
            {
                "icon": "GiGrowth",
                "title": "Top 3 GDP Contributor",
                "description": "From current 3.1% to 8% of national GDP through education-led economic transformation"
            },
            {
                "icon": "FaUniversity",
                "title": "IT & Education Hub",
                "description": "5 million tech jobs created, hosting HQs of 10+ Fortune 500 companies"
            },
            {
                "icon": "FaGlobeAsia",
                "title": "Global Talent Exporter",
                "description": "30% of Bihar graduates placed internationally with avg. salary ₹25LPA"
            },
            {
                "icon": "GiIndiaGate",
                "title": "Social Transformation",
                "description": "Literacy rate >95%, women workforce participation >60%, zero educational poverty"
            }
        ],
        "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753085983/unnamed_qvgnid.png",
        "imageCaption": "Bihar's Knowledge Economy Roadmap",
        "stats": [
            { "value": "8%", "label": "National GDP Contribution" },
            { "value": "5M", "label": "Tech Jobs Created" },
            { "value": "95%+", "label": "Literacy Rate" }
        ]
    },
    "whyBihar": {
        "title": "Why Bihar Must Become an IT Powerhouse",
        "description": "With limited natural resources, Bihar's future lies in developing its human capital through technology education",
        "introParagraphs": [
            "Bihar's geographical position in the heart of India, combined with its young population, makes it the perfect candidate to become the nation's next IT hub. While traditional industries require heavy infrastructure, the knowledge economy thrives on human capital - our most abundant resource.",
            "The success stories of Bihari professionals leading global tech companies demonstrate the latent potential waiting to be unlocked at scale. Our mission is to create the ecosystem that allows this talent to flourish within Bihar itself."
        ],
        "cards": [
            {
                "icon": "FaChartLine",
                "title": "Demographic Dividend",
                "content": "58% population below 25 years - our greatest untapped resource",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753086307/unnamed_fs1k4d.png",
                "stats": [
                    { "value": "110M", "label": "Population" },
                    { "value": "64M", "label": "Below 35 years" }
                ]
            },
            {
                "icon": "FaHandshake",
                "title": "Cost Advantage",
                "content": "40% lower operational costs than Bengaluru with equal talent quality",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753086311/unnamed_cpn9kr.png",
                "stats": [
                    { "value": "40%", "label": "Cost Savings" },
                    { "value": "90%", "label": "Talent Retention" }
                ]
            },
            {
                "icon": "FaGlobeAsia",
                "title": "Global Precedent",
                "content": "Following Israel/Singapore model of resource-scarce nations thriving through knowledge economy",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753086315/unnamed_pqx84a.png",
                "stats": [
                    { "value": "7%", "label": "Israel's Tech GDP" },
                    { "value": "12%", "label": "Singapore's Tech GDP" }
                ]
            }
        ],
        "successStories": [
            {
                "name": "Ananya Singh",
                "role": "AI Researcher at Google",
                "story": "From a Patna government school to leading AI projects at Google, my journey proves what's possible when talent meets opportunity.",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1715000003/success1_abc123.jpg"
            },
            {
                "name": "Rahul Kumar",
                "role": "Founder, TechStart Bihar",
                "story": "Built a ₹100Cr IT company in Patna, employing 200+ local engineers working on global projects.",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1715000004/success2_def456.jpg"
            }
        ]
    },
    "mission": {
        "title": "Our Mission: Building Bihar's Digital Future",
        "introParagraphs": [
            "Transforming Bihar into a knowledge economy requires a multi-generational effort with clear milestones. Our mission breaks down into three strategic phases, each building on the last to create irreversible momentum.",
            "We're not just creating IT professionals - we're building an entire ecosystem from grassroots education to cutting-edge research, from startup incubation to global corporate partnerships."
        ],
        "phases": [
            {
                "phase": "Phase I: Foundation (2023-2030)",
                "goals": [
                    "Establish 5 Centers of Excellence in AI, Blockchain, IoT, Cybersecurity and Data Science",
                    "Place 50,000 students in IT sector with average package ₹6LPA+",
                    "Develop Bihar's first unicorn startup in edtech or agritech",
                    "Create 100+ industry-academia partnerships for curriculum development",
                    "Launch statewide digital literacy program covering 10 million citizens",
                    "Upgrade IT infrastructure in 500+ schools and colleges"
                ],
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753086490/Creation-of-More-Employmen_qvlywy.webp",
                "icon": "MdSchool"
            },
            {
                "phase": "Phase II: Acceleration (2031-2040)",
                "goals": [
                    "Make Patna among top 5 Indian IT destinations with 1M sq.ft. tech parks",
                    "Attract ₹25,000Cr tech investments from global companies",
                    "Achieve 50% women participation in tech programs",
                    "Establish AI research parks in Patna, Gaya and Muzaffarpur",
                    "Develop Bihar-specific tech solutions for agriculture, healthcare and governance",
                    "Create 10,000 tech-enabled rural entrepreneurs"
                ],
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753093967/unnamed_hrukir.png",
                "icon": "MdComputer"
            },
            {
                "phase": "Phase III: Leadership (2041-2047)",
                "goals": [
                    "Produce 1 million industry-ready tech professionals annually",
                    "Establish Global AI Research Center recognized worldwide",
                    "Achieve 0% tech talent migration from Bihar",
                    "Create world-class tech infrastructure across all 38 districts",
                    "Become carbon-neutral tech hub with sustainable practices",
                    "Host International Tech Summit with 50+ countries participating"
                ],
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753094130/unnamed_tewmma.png",
                "icon": "GiBrain"
            }
        ],
        "keyInitiatives": [
            {
                "title": "Digital Gurukul Initiative",
                "description": "Modernizing education with smart classrooms in 10,000 schools by 2025",
                "icon": "GiTeacher"
            },
            {
                "title": "Bihar Innovation Fund",
                "description": "₹500Cr fund to support student startups and research projects",
                "icon": "FaLightbulb"
            },
            {
                "title": "Tech Saksharta Abhiyan",
                "description": "Statewide digital literacy program targeting 5 million adults",
                "icon": "MdEngineering"
            },
            {
                "title": "Women in Tech Program",
                "description": "Scholarships and mentorship for 50,000 female students",
                "icon": "FaUsers"
            }
        ]
    },
    "coreValues": {
        "title": "Our Core Values",
        "description": "The foundational principles guiding every decision we make",
        "values": [
            {
                "icon": "FaShieldAlt",
                "title": "Integrity First",
                "description": "We maintain uncompromising standards of honesty and ethical conduct in all our programs and partnerships."
            },
            {
                "icon": "FaLightbulb",
                "title": "Innovation Driven",
                "description": "We challenge conventional thinking to create breakthrough solutions tailored to Bihar's unique context."
            },
            {
                "icon": "FaUsers",
                "title": "Inclusive Growth",
                "description": "We ensure opportunities reach every section of society, especially underserved communities and women."
            },
            {
                "icon": "FaGraduationCap",
                "title": "Excellence in Education",
                "description": "We deliver world-class learning experiences that combine academic rigor with practical skills."
            },
            {
                "icon": "GiIndiaGate",
                "title": "Cultural Roots",
                "description": "We draw inspiration from Bihar's rich heritage while building a modern knowledge economy."
            },
            {
                "icon": "IoMdRibbon",
                "title": "Sustainable Impact",
                "description": "We design programs that create lasting change rather than short-term gains."
            }
        ]
    },
    "strategicPillars": {
        "title": "Strategic Pillars of Transformation",
        "description": "Four foundational elements driving our comprehensive approach to Bihar's development",
        "pillars": [
            {
                "title": "Education Revolution",
                "icon": "GiTeacher",
                "description": "Complete overhaul of technical education system with industry-aligned curriculum and modern pedagogy",
                "stats": "500+ institutions upgraded by 2030",
                "initiatives": [
                    "Curriculum modernization every 3 years",
                    "Faculty development programs",
                    "Smart classroom infrastructure"
                ]
            },
            {
                "title": "Skill Development",
                "icon": "GiSkills",
                "description": "Massive upskilling programs focusing on future technologies and employability skills",
                "stats": "2 million youth skilled annually",
                "initiatives": [
                    "Industry-certified courses",
                    "Apprenticeship programs",
                    "Soft skills training"
                ]
            },
            {
                "title": "Research & Innovation",
                "icon": "MdOutlineScience",
                "description": "Establishing research centers focused on solving Bihar-specific challenges in agriculture, healthcare and governance",
                "stats": "₹1000Cr research fund by 2025",
                "initiatives": [
                    "Student research grants",
                    "Industry-sponsored projects",
                    "Innovation challenges"
                ]
            },
            {
                "title": "Industry Integration",
                "icon": "MdEngineering",
                "description": "Deep partnerships with global tech leaders for practical exposure and employment opportunities",
                "stats": "1000+ corporate partners",
                "initiatives": [
                    "Guest lectures from experts",
                    "Live project opportunities",
                    "Guaranteed internship programs"
                ]
            }
        ]
    },
    "testimonials": {
        "title": "Voices of Change",
        "description": "What leaders and students say about Bihar's transformation",
        "items": [
            {
                "quote": "Bihar's youth have the potential to lead India's next tech revolution. We're creating the ecosystem to make it happen.",
                "author": "Dr. Rajesh Kumar",
                "role": "Education Minister, Bihar",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1715000000/minister_xysabc.jpg"
            },
            {
                "quote": "The quality of talent we're seeing from Bihar now competes with the best engineering colleges in India. We're expanding our Bihar operations threefold.",
                "author": "Priya Sharma",
                "role": "HR Director, Tech Mahindra",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1715000001/hr-director_pqrdef.jpg"
            },
            {
                "quote": "I got placed at Microsoft with ₹18LPA package. Bihar's tech education transformation is real and I'm living proof!",
                "author": "Amit Kumar",
                "role": "Student, NIT Patna",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1715000002/student_mnolgh.jpg"
            },
            {
                "quote": "Our startup got incubated in Patna and now serves clients in 5 countries. Bihar's ecosystem supports entrepreneurs like never before.",
                "author": "Neha Gupta",
                "role": "Founder, AgriTech Solutions",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1715000007/entrepreneur_mno345.jpg"
            },
            {
                "quote": "After 15 years in Silicon Valley, I returned to mentor Bihar's startups. The energy here reminds me of early-stage Bangalore.",
                "author": "Sanjay Verma",
                "role": "Ex-Google, Startup Mentor",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1715000008/mentor_pqr678.jpg"
            },
            {
                "quote": "My daughter is learning AI in her government school. This is the Bihar we dreamed of but never thought we'd see so soon.",
                "author": "Ramesh Singh",
                "role": "Parent & Farmer",
                "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1715000009/parent_stu901.jpg"
            }
        ]
    },
    "cta": {
        "title": "Join Bihar's Transformation Journey",
        "description": "Be part of the movement that's rewriting Bihar's economic future through education and technology",
        "buttons": [
            {
                "text": "Explore Academic Programs",
                "type": "primary"
            },
            {
                "text": "Partner With Us",
                "type": "secondary"
            },
            {
                "text": "Donate to the Cause",
                "type": "secondary"
            }
        ],
        "contact": {
            "email": "contact@bihartechvision.org",
            "phone": "+91 1234567890",
            "address": "Tech Tower, Patna, Bihar 800001"
        }
    },
    "milestones": [
        {
            "year": "2023",
            "events": [
                "Launched Digital Gurukul Initiative",
                "Established first AI research center",
                "Onboarded 50 industry partners"
            ]
        },
        {
            "year": "2024",
            "events": [
                "Trained 10,000 teachers in modern pedagogy",
                "Placed 5,000 students in tech jobs",
                "Started Bihar Innovation Fund"
            ]
        },
        {
            "year": "2025",
            "events": [
                "Opened 3 new tech parks",
                "Achieved 1,000 industry-academia MoUs",
                "Launched Women in Tech program"
            ]
        }
    ]
};

// Icon mapping component
type IconName =
    | 'FaShieldAlt'
    | 'FaLightbulb'
    | 'FaUsers'
    | 'FaGraduationCap'
    | 'GiTeacher'
    | 'GiSkills'
    | 'MdOutlineScience'
    | 'MdEngineering'
    | 'GiGrowth'
    | 'FaUniversity'
    | 'FaGlobeAsia'
    | 'GiIndiaGate'
    | 'FaChartLine'
    | 'FaHandshake'
    | 'GiBrain'
    | 'MdSchool'
    | 'MdComputer'
    | 'IoMdRibbon';

interface IconComponentProps {
    iconName: IconName;
    className?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ iconName, className }) => {
    const icons: Record<IconName, JSX.Element> = {
        FaShieldAlt: <FaShieldAlt className={className} />,
        FaLightbulb: <FaLightbulb className={className} />,
        FaUsers: <FaUsers className={className} />,
        FaGraduationCap: <FaGraduationCap className={className} />,
        GiTeacher: <GiTeacher className={className} />,
        GiSkills: <GiSkills className={className} />,
        MdOutlineScience: <MdOutlineScience className={className} />,
        MdEngineering: <MdEngineering className={className} />,
        GiGrowth: <GiGrowth className={className} />,
        FaUniversity: <FaUniversity className={className} />,
        FaGlobeAsia: <FaGlobeAsia className={className} />,
        GiIndiaGate: <GiIndiaGate className={className} />,
        FaChartLine: <FaChartLine className={className} />,
        FaHandshake: <FaHandshake className={className} />,
        GiBrain: <GiBrain className={className} />,
        MdSchool: <MdSchool className={className} />,
        MdComputer: <MdComputer className={className} />,
        IoMdRibbon: <IoMdRibbon className={className} />
    };
    
    return icons[iconName] || <FaLightbulb className={className} />;
};

const VisionMissionPage = async() => {
const { data, error} = await fetchPageData("vision-&-mission");
pageData = data as any ?? pageData
    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section with Parallax Effect */}
            <div className="relative h-auto overflow-hidden">
                <HeroSection
                    imageUrl={pageData.heroSection.imageURL}
                    title={pageData.heroSection.title}
                    description={pageData.heroSection.description}
                    overlayOpacity={0.4}
                />

            </div>

            {/* Vision Section with Animated Cards */}
            <section className="py-8 md:py-12 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className=" items-center justify-center mb-6  hidden md:inline-flex">
                            <div className="bg-blue-100 p-3 rounded-full animate-pulse">
                                <FaEye className="text-blue-600 text-3xl " />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            {pageData.vision.title}
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                            {pageData.vision.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {pageData.vision.paragraphs.map((para, index) => (
                            <p key={index} className="text-gray-700 text-lg leading-relaxed">
                                {para}
                            </p>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pageData.vision.points.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <IconComponent iconName={item.icon as IconName} className="text-blue-600 text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 pl-16">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2 relative">
                                <img
                                    src={pageData.vision.image}
                                    alt="Vision for Bihar"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent flex items-end p-8">
                                    <div>
                                        <p className="text-white text-sm font-medium uppercase tracking-wider">Strategic Plan 2047</p>
                                        <h3 className="text-2xl font-bold text-white mt-1">{pageData.vision.imageCaption}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    {pageData.vision.stats.map((stat, index) => (
                                        <div key={index} className="text-center p-4 bg-blue-50 rounded-xl">
                                            <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                                            <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <p className="text-gray-600 mb-4">Our strategic roadmap focuses on:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </span>
                                            <span>Education revolution</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </span>
                                            <span>Technology infrastructure</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </span>
                                            <span>Global partnerships</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Bihar Section with Interactive Cards */}
            <section className="py-16 md:py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            {pageData.whyBihar.title}
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                            {pageData.whyBihar.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {pageData.whyBihar.introParagraphs.map((para, index) => (
                            <p key={index} className="text-gray-300 text-lg leading-relaxed">
                                {para}
                            </p>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pageData.whyBihar.cards.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-blue-600 text-white p-3 rounded-lg">
                                        <IconComponent iconName={item.icon as IconName} className="text-xl" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-300 mb-6">{item.content}</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {item.stats.map((stat, i) => (
                                            <div key={i} className="bg-gray-700/50 p-3 rounded-lg backdrop-blur-sm">
                                                <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                                                <p className="text-xs text-gray-300 uppercase tracking-wider">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Success Stories Carousel */}
                    <div className="mt-24">
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Bihar's Rising Stars</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {pageData.whyBihar.successStories.map((story, index) => (
                                <div 
                                    key={index} 
                                    className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="md:flex h-full">
                                        <div className="md:w-1/3 h-64 md:h-auto">
                                            <img 
                                                src={story.image}
                                                alt={story.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                            <div className="flex items-center mb-4">
                                                <div className="bg-blue-600 text-white p-2 rounded-lg mr-4">
                                                    <FaQuoteLeft className="text-lg" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white">{story.name}</h4>
                                                    <p className="text-blue-400 font-medium">{story.role}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 italic">"{story.story}"</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section with Timeline */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="bg-indigo-100 p-3 rounded-full animate-pulse">
                                <FaBullseye className="text-indigo-600 text-3xl" />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            {pageData.mission.title}
                        </h2>
                        <div className="w-24 h-1.5 bg-indigo-500 mx-auto mb-8 rounded-full"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {pageData.mission.introParagraphs.map((para, index) => (
                                <p key={index} className="text-gray-700 text-lg leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Mission Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-indigo-100 transform -translate-x-1/2"></div>
                        
                        {pageData.mission.phases.map((phase, index) => (
                            <div 
                                key={index} 
                                className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                            >
                                <div className={`bg-white rounded-2xl shadow-xl overflow-hidden md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className="md:w-1/2">
                                        <img
                                            src={phase.image}
                                            alt={phase.phase}
                                            className="w-full h-64 md:h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-8 md:w-1/2">
                                        <div className="flex items-center mb-6">
                                            <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                                <IconComponent iconName={phase.icon as IconName} className="text-indigo-600 text-xl" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-indigo-700">{phase.phase}</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {phase.goals.map((goal, i) => (
                                                <li key={i} className="flex items-start text-gray-700">
                                                    <span className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3 mt-1">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </span>
                                                    <span>{goal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute top-1/2 left-1/2 w-6 h-6 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div>
                            </div>
                        ))}
                    </div>

                    {/* Key Initiatives */}
                    <div className="mt-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Key Initiatives Driving Our Mission</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pageData.mission.keyInitiatives.map((initiative, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100"
                                >
                                    <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg inline-flex mb-4">
                                        <IconComponent iconName={initiative.icon as IconName} className="text-2xl" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">{initiative.title}</h4>
                                    <p className="text-gray-600">{initiative.description}</p>
                                    <button className="mt-4 text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors">
                                        Learn more
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            {pageData.coreValues.title}
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            {pageData.coreValues.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pageData.coreValues.values.map((value, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-start">
                                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                                        <IconComponent iconName={value.icon as IconName} className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Pillars Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            {pageData.strategicPillars.title}
                        </h2>
                        <div className="w-24 h-1.5 bg-indigo-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            {pageData.strategicPillars.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pageData.strategicPillars.pillars.map((pillar, index) => (
                            <div 
                                key={index} 
                                className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden"
                            >
                                <div className="absolute -right-6 -top-6 text-blue-100">
                                    <IconComponent iconName={pillar.icon as IconName} className="text-8xl opacity-30" />
                                </div>
                                <div className="relative z-10">
                                    <div className="bg-white w-12 h-12 rounded-xl shadow-sm flex items-center justify-center mb-4">
                                        <IconComponent iconName={pillar.icon as IconName} className="text-blue-600 text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{pillar.title}</h3>
                                    <p className="text-gray-600 mb-4">{pillar.description}</p>
                                    <p className="text-sm font-semibold text-blue-600 mb-4">{pillar.stats}</p>
                                    
                                    <ul className="space-y-2">
                                        {pillar.initiatives.map((initiative, i) => (
                                            <li key={i} className="flex items-start text-sm text-gray-600">
                                                <span className="text-blue-500 mr-2 mt-1">•</span>
                                                <span>{initiative}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Success Metrics */}
                    <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-center">Measuring Our Impact</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: "50K+", label: "Students Trained" },
                                { value: "200+", label: "Industry Partners" },
                                { value: "85%", label: "Placement Rate" },
                                { value: "4.8/5", label: "Student Satisfaction" },
                                { value: "₹100Cr+", label: "Research Funding" },
                                { value: "1M+", label: "Digital Literacy" },
                                { value: "10K+", label: "Women in Tech" },
                                { value: "100+", label: "Startups Incubated" }
                            ].map((metric, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                                >
                                    <p className="text-3xl font-bold text-center mb-2">{metric.value}</p>
                                    <p className="text-blue-100 text-sm text-center uppercase tracking-wider">{metric.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Milestones Timeline */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">Our Journey So Far</h2>
                    
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
                        
                        {/* Milestone items */}
                        <div className="space-y-12 md:space-y-0">
                            {pageData.milestones.map((milestone, index) => (
                                <div 
                                    key={index} 
                                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                                >
                                    <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-last'}`}>
                                        <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                                            <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">
                                                {milestone.year}
                                            </div>
                                            <ul className="space-y-3 mt-4 pl-4">
                                                {milestone.events.map((event, i) => (
                                                    <li key={i} className="flex items-start text-gray-700">
                                                        <span className="text-blue-500 mr-3 mt-1.5">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                                                            </svg>
                                                        </span>
                                                        <span>{event}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:w-1/2"></div>
                                    {/* Timeline dot */}
                                    <div className="hidden md:block absolute top-1/2 left-1/2 w-5 h-5 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 md:py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            {pageData.testimonials.title}
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            {pageData.testimonials.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pageData.testimonials.items.map((testimonial, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:bg-gray-700/50 hover:backdrop-blur-sm"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                                        <img 
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{testimonial.author}</h4>
                                        <p className="text-blue-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <FaQuoteLeft className="text-blue-600/30 text-4xl mb-4" />
                                <p className="text-gray-300 italic relative z-10">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">{pageData.cta.title}</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            {pageData.cta.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {pageData.cta.buttons.map((button, index) => (
                                <button
                                    key={index}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${button.type === 'primary' 
                                        ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl' 
                                        : 'bg-transparent border-2 border-white hover:bg-white/10 hover:shadow-lg'}`}
                                >
                                    {button.text}
                                </button>
                            ))}
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default VisionMissionPage;