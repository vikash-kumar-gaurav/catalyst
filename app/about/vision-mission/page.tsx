import AllPageHero from '@/components/AllPageHeroSection';
import { FaBullseye, FaEye, FaHandshake, FaChartLine, FaGlobeAsia, FaUniversity } from 'react-icons/fa';
import { GiGrowth, GiIndiaGate } from 'react-icons/gi';

const VisionMissionPage = () => {
    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section */}
            <section className="relative  bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
                {/* <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Vision & Mission</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Charting Bihar's transformation into India's next growth engine through revolutionary education and skill development
            </p>
          </div>
        </div> */}
                <AllPageHero imageUrl='https://scontent.fdbd5-1.fna.fbcdn.net/v/t39.30808-6/482052381_1044838277672111_8097514612196927582_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=n-CWIcgxtmoQ7kNvwEFuQTT&_nc_oc=Adk76EdDl6J1eZn2ambZ1thLqn3sCJgoSD1-SVxPpilJASMg8RkFbk3hv8VAz_TYdncDYQhP_8Ux2KPQa281inQb&_nc_zt=23&_nc_ht=scontent.fdbd5-1.fna&_nc_gid=V41dYkca-Xc-UzxIAH69jQ&oh=00_AfTGXHdroDx2M3rn4YYfeZEZcGO_R7t7qxyzrTzj5omuWg&oe=6875A338' tagline="Charting Bihar's transformation into India's next growth engine through revolutionary education and skill development" />

                {/* Decorative curve */}
                {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" fill="currentColor" className="text-gray-50"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" fill="currentColor" className="text-gray-50"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="currentColor" className="text-gray-50"></path>
          </svg>
        </div> */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            fill="currentColor"
                            className="text-gray-50"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            fill="currentColor"
                            className="text-gray-50"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            fill="currentColor"
                            className="text-gray-50"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Vision Section */}
            <section className="relative py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                            <div className="bg-blue-50 inline-flex p-3 rounded-xl mb-6">
                                <FaEye className="text-blue-600 text-3xl" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Our Vision: Bihar as India's Knowledge Capital (2047)
                            </h2>
                            <div className="w-24 h-1 bg-blue-500 mb-8"></div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                As India completes 100 years of independence, we envision Bihar transformed into:
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <GiGrowth className="text-2xl text-blue-600" />,
                                        title: "Top 3 GDP Contributor",
                                        description: "From current 3.1% to 8% of national GDP through education-led economic transformation"
                                    },
                                    {
                                        icon: <FaUniversity className="text-2xl text-blue-600" />,
                                        title: "IT & Education Hub",
                                        description: "5 million tech jobs created, hosting HQs of 10+ Fortune 500 companies"
                                    },
                                    {
                                        icon: <FaGlobeAsia className="text-2xl text-blue-600" />,
                                        title: "Global Talent Exporter",
                                        description: "30% of Bihar graduates placed internationally with avg. salary ₹25LPA"
                                    },
                                    {
                                        icon: <GiIndiaGate className="text-2xl text-blue-600" />,
                                        title: "Social Transformation",
                                        description: "Literacy rate >95%, women workforce participation >60%, zero educational poverty"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex">
                                        <div className="flex-shrink-0 mr-4 mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="bg-gray-200 rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
                                <img
                                    src="/images/bihar-future.jpg"
                                    alt="Vision for Bihar"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent flex items-end p-8">
                                    <div>
                                        <p className="text-white text-sm font-medium">Strategic Plan 2047</p>
                                        <h3 className="text-2xl font-bold text-white mt-1">Bihar's Knowledge Economy Roadmap</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Stats overlay */}
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-blue-600 mb-1">2047</p>
                                    <p className="text-sm font-semibold text-gray-600">India's 100th Independence Year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Bihar Focus */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Bihar Must Become an IT Powerhouse</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
                        <p className="text-gray-600 text-xl">
                            With limited natural resources, Bihar's future lies in developing its human capital through technology education
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaChartLine className="text-3xl mb-4" />,
                                title: "Demographic Dividend",
                                content: "58% population below 25 years - our greatest untapped resource",
                                image: "/images/bihar-youth.jpg"
                            },
                            {
                                icon: <FaHandshake className="text-3xl mb-4" />,
                                title: "Cost Advantage",
                                content: "40% lower operational costs than Bengaluru with equal talent quality",
                                image: "/images/bihar-infra.jpg"
                            },
                            {
                                icon: <FaGlobeAsia className="text-3xl mb-4" />,
                                title: "Global Precedent",
                                content: "Following Israel/Singapore model of resource-scarce nations thriving through knowledge economy",
                                image: "/images/global-tech.jpg"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-blue-600 mb-3">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="relative py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 order-2 lg:order-1">
                            <div className="bg-indigo-50 inline-flex p-3 rounded-xl mb-6">
                                <FaBullseye className="text-indigo-600 text-3xl" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Our Mission: Building Bihar's Digital Future
                            </h2>
                            <div className="w-24 h-1 bg-indigo-500 mb-8"></div>

                            <div className="space-y-6">
                                {[
                                    {
                                        phase: "Phase I (2023-2030)",
                                        goals: [
                                            "Establish 5 Centers of Excellence in emerging tech",
                                            "Place 50,000 students in IT sector",
                                            "Develop Bihar's first unicorn startup"
                                        ]
                                    },
                                    {
                                        phase: "Phase II (2031-2040)",
                                        goals: [
                                            "Make Patna among top 5 Indian IT destinations",
                                            "Attract ₹25,000Cr tech investments",
                                            "50% women participation in tech programs"
                                        ]
                                    },
                                    {
                                        phase: "Phase III (2041-2047)",
                                        goals: [
                                            "Produce 1 million industry-ready tech professionals",
                                            "Establish Global AI Research Center",
                                            "Achieve 0% tech talent migration from Bihar"
                                        ]
                                    }
                                ].map((phase, index) => (
                                    <div key={index} className="border-l-4 border-indigo-200 pl-4">
                                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{phase.phase}</h3>
                                        <ul className="space-y-2">
                                            {phase.goals.map((goal, i) => (
                                                <li key={i} className="flex items-start text-gray-600">
                                                    <span className="text-indigo-500 mr-2">•</span>
                                                    <span>{goal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative order-1 lg:order-2 mb-12 lg:mb-0">
                            <div className="bg-gray-200 rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
                                <img
                                    src="/images/digital-bihar.jpg"
                                    alt="Digital Bihar Mission"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating stats */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
                                <div className="flex items-center">
                                    <div className="bg-indigo-100 p-3 rounded-full mr-3">
                                        <GiGrowth className="text-indigo-600 text-2xl" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">10x</p>
                                        <p className="text-sm text-gray-600">Tech jobs by 2040</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Bihar's Transformation Journey</h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Be part of the movement that's rewriting Bihar's economic future through education and technology
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                            Explore Academic Programs
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                            Partner With Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisionMissionPage;