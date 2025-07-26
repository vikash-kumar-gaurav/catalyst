
import { FaGraduationCap, FaLightbulb, FaHandsHelping, FaChartLine, FaUniversity, FaQuoteLeft } from 'react-icons/fa';
import { GiAchievement, GiTeacher, GiMedal, GiThreeFriends } from 'react-icons/gi';
import { MdGpsFixed, MdHistory, MdSchool, MdPeople } from 'react-icons/md';
import { RiLeafLine, RiTeamLine } from 'react-icons/ri';
import { IoMdTime } from 'react-icons/io';
import HeroSection from '@/components/newHeroImageForAllPage';
import Link from 'next/link';

const AboutUsPage = () => {
    return (
        <div className="font-sans bg-gray-50 overflow-hidden">
            {/* Hero Section */}

            <HeroSection
                title="About CATALYST College"
                description="Discover the story behind Bihar's most transformative educational institution"
                imageUrl="https://res.cloudinary.com/dacrc4ddi/image/upload/v1752556789/cimage_placement_2025_photoshot_yat3oc.jpg"
                overlayOpacity={0.3}
                height="sm"
            />

            {/* College Identity */}
            <section className="relative pt-14 bg-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                {/* Animated floating circles */}
                <div className="absolute top-20 left-1/4 w-16 h-16 rounded-full bg-blue-100 opacity-20 animate-float"></div>
                <div className="absolute bottom-32 right-1/3 w-24 h-24 rounded-full bg-indigo-100 opacity-20 animate-float-delay"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full text-xs font-medium tracking-wider mb-4 border border-blue-100">
                            OUR LEGACY OF EXCELLENCE
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-serif">
                            CATALYST College of Excellence
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            A premier institution transforming Bihar's educational landscape since 2008, recognized nationally for our innovative pedagogy and exceptional placement records.
                        </p>
                    </div>

                    {/* Stats Grid with Images */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {[
                            {
                                value: "2008",
                                label: "Year Established",
                                description: "Founded during Bihar's educational renaissance with just 47 students",
                                image: "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753432357/465415939_9205845689447020_1762648298494770976_n_xzdy3g.jpg",
                            },
                            {
                                value: "50+",
                                label: "Expert Faculty",
                                description: "Including IIM/IIT alumni and industry veterans with 10+ years experience",
                                image: "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753430865/487876142_1062319959257276_8090554758284863642_n_vguylk.jpg",
                            },
                            {
                                value: "3",
                                label: "Flagship Programs",
                                description: "BBA, BCA, and MBA programs with 12+ specializations",
                                image: "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753431625/unnamed_njuz3j.png"
                            },
                            {
                                value: "50+",
                                label: "Recruiting Partners",
                                description: "Including Fortune 500 companies and leading Indian firms",
                                image: "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753431905/consulting_2x_dmllcm.png"
                            }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={stat.image}
                                        alt={stat.label}
                                        className="w-full h-full object-cover "
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-b  opacity-20`}></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                        <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                                        <p className="text-white/90 text-sm">{stat.label}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 text-sm mb-4">{stat.description}</p>
                                    <div className={`border-t  pt-4`}>
                                        <button className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center group">
                                            Learn more
                                            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Accreditation Badges */}
                    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 mb-16">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Recognized Excellence</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    CATALYST College has earned prestigious accreditations and awards that validate our commitment to quality education and student success.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">ISO 9001:2008 Certified Institution</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Affiliated with Patliputra University</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">"Most Emerging Institute for Management Education" - AIMA</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                                {/* Badge 1 - ISO Certified */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative group">
                                    <img
                                        src="https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753435210/1720515434152_tqojqb.jpg"
                                        alt="ISO Certified"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-sm text-center text-white font-medium">ISO 9001:2008 Certified</p>
                                    </div>
                                </div>

                                {/* Badge 2 - AIMA Award */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative group">
                                    <img
                                        src="https://res.cloudinary.com/dacrc4ddi/image/upload/v1752556789/AIMA_award_zhh76f.png"
                                        alt="AIMA Award"
                                        className="h-full w-full object-cover "
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-sm text-center text-white font-medium">AIMA Award Winner</p>
                                    </div>
                                </div>

                                {/* Badge 3 - University Affiliated */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative group">
                                    <img
                                        src="https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753434119/1743767026php3u4Gth_srwis3.jpg"
                                        alt="Patliputra University"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-sm text-center text-white font-medium">University Affiliated</p>
                                    </div>
                                </div>

                                {/* Badge 4 - Best in Bihar */}
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative group">
                                    <img
                                        src="https://res.cloudinary.com/dacrc4ddi/image/upload/v1752556789/cimage_placement_2025_photoshot_yat3oc.jpg"
                                        alt="Education Today"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-sm text-center text-white font-medium">Best in Bihar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Statement */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-4 text-white overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full filter blur-xl"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-300 rounded-full filter blur-xl"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="max-w-3xl mx-auto text-center">
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">Shaping Bihar's Future Leaders</h3>
                                <p className="text-lg text-blue-100 leading-relaxed mb-8">
                                    At CATALYST, we don't just educate - we transform. Our unique blend of academic rigor, industry exposure, and personal mentorship creates professionals who don't just join the workforce, but redefine it.
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <Link href={'/about/faculty-corner'}>
                                        <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                                        Meet Our Team
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History of us */}
            <section className="relative py-8 bg-gray-50 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                {/* Timeline curve */}
                <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center mb-10">
                        <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full text-xs font-medium tracking-wider mb-4 border border-blue-100">
                            OUR JOURNEY
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-serif">
                            Milestones That Shaped CATALYST
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            From humble beginnings to becoming Bihar's premier management institution, our journey reflects our commitment to educational excellence.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="hidden lg:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

                        {/* Timeline items */}
                        <div className="space-y-16 lg:space-y-0">
                            {/* 2008 - Founding */}
                            <div className="relative lg:flex items-center justify-between">
                                <div className="lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-100 p-2 rounded-full mr-4">
                                                <MdHistory className="text-blue-600 text-xl" />
                                            </div>
                                            <span className="text-blue-600 font-medium">June 2008</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">The Foundation</h3>
                                        <p className="text-gray-600 mb-4">
                                            CATALYST College was established under the visionary Vijayam Educational Trust, inaugurated by Hon'ble Chief Minister Nitish Kumar during Bihar's educational renaissance.
                                        </p>
                                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                            <img
                                                src="https://res.cloudinary.com/dacrc4ddi/image/upload/v1752556791/CM_nitish_Kumar_cutting_ribbon_rtnost.png"
                                                alt="College inauguration"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden lg:block lg:w-2/12  justify-center">
                                    <div className="h-16 w-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-lg">
                                        <span className="text-blue-600 font-bold">2008</span>
                                    </div>
                                </div>

                                <div className="lg:w-5/12">
                                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                <span>Started with just 47 students in a rented building in Patna</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                <span>Launched Bihar's first industry-integrated BBA program</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                <span>Initial faculty included 8 professors from top Indian universities</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 2012 - First Achievements */}
                            <div className="relative lg:flex items-center justify-between flex-row-reverse">
                                <div className="lg:w-5/12 lg:pl-12 mb-8 lg:mb-0">
                                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-indigo-100 p-2 rounded-full mr-4">
                                                <GiAchievement className="text-indigo-600 text-xl" />
                                            </div>
                                            <span className="text-indigo-600 font-medium">May 2012</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">First Recognition</h3>
                                        <p className="text-gray-600 mb-4">
                                            Our first batch achieved 92% placements, with students securing positions in companies like TCS and ICICI Bank, setting a new benchmark for Bihar.
                                        </p>
                                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                            <img
                                                src="https://res.cloudinary.com/dacrc4ddi/image/upload/v1752557262/b1c0977d-2569-4567-980b-ba8e00ddb82e.png"
                                                alt="First placement drive"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden lg:block lg:w-2/12  justify-center">
                                    <div className="h-16 w-16 rounded-full bg-white border-4 border-indigo-500 flex items-center justify-center shadow-lg">
                                        <span className="text-indigo-600 font-bold">2012</span>
                                    </div>
                                </div>

                                <div className="lg:w-5/12">
                                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start">
                                                <span className="text-indigo-500 mr-2">•</span>
                                                <span>Received ISO 9001:2008 certification for quality education</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-indigo-500 mr-2">•</span>
                                                <span>Expanded campus with new computer labs and library</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-indigo-500 mr-2">•</span>
                                                <span>Introduced mandatory summer internships</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 2015 - AIMA Recognition */}
                            <div className="relative lg:flex items-center justify-between">
                                <div className="lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-purple-100 p-2 rounded-full mr-4">
                                                <GiMedal className="text-purple-600 text-xl" />
                                            </div>
                                            <span className="text-purple-600 font-medium">November 2015</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">National Recognition</h3>
                                        <p className="text-gray-600 mb-4">
                                            Awarded "Most Emerging Institute for Management Education" by AIMA (All India Management Association), putting CATALYST on the national map.
                                        </p>
                                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                            <img
                                                src="https://res.cloudinary.com/dacrc4ddi/image/upload/v1752556789/AIMA_award_zhh76f.png"
                                                alt="AIMA award ceremony"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden lg:block lg:w-2/12 justify-center">
                                    <div className="h-16 w-16 rounded-full bg-white border-4 border-purple-500 flex items-center justify-center shadow-lg">
                                        <span className="text-purple-600 font-bold">2015</span>
                                    </div>
                                </div>

                                <div className="lg:w-5/12">
                                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start">
                                                <span className="text-purple-500 mr-2">•</span>
                                                <span>Launched MBA program with 5 specializations</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-purple-500 mr-2">•</span>
                                                <span>Established Center for Entrepreneurship Development</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-purple-500 mr-2">•</span>
                                                <span>Crossed 500+ student enrollment</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 2020 - Pandemic Response */}
                            <div className="relative lg:flex items-center justify-between flex-row-reverse">
                                <div className="lg:w-5/12 lg:pl-12 mb-8 lg:mb-0">
                                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-teal-100 p-2 rounded-full mr-4">
                                                <RiTeamLine className="text-teal-600 text-xl" />
                                            </div>
                                            <span className="text-teal-600 font-medium">2020-2021</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Digital Transformation</h3>
                                        <p className="text-gray-600 mb-4">
                                            Despite pandemic challenges, we achieved 100% virtual placements and became the first college in Bihar to implement a complete hybrid learning ecosystem.
                                        </p>
                                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                            <img
                                                src="https://res.cloudinary.com/dacrc4ddi/image/upload/v1752558426/85a9d452-5d0d-4407-8ec1-d876c5d5e0d8.png"
                                                alt="Digital classroom"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden lg:block lg:w-2/12 justify-center">
                                    <div className="h-16 w-16 rounded-full bg-white border-4 border-teal-500 flex items-center justify-center shadow-lg">
                                        <span className="text-teal-600 font-bold">2020</span>
                                    </div>
                                </div>

                                <div className="lg:w-5/12">
                                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start">
                                                <span className="text-teal-500 mr-2">•</span>
                                                <span>Implemented CATALYST Digital Campus with 30+ online courses</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-teal-500 mr-2">•</span>
                                                <span>Record ₹18 LPA highest package despite economic slowdown</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-teal-500 mr-2">•</span>
                                                <span>Recognized as "Best Educational Institute in Bihar" by Education Today</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Current Status */}
                    <div className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full filter blur-xl"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-300 rounded-full filter blur-xl"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="max-w-4xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">CATALYST Today</h3>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div>
                                        <p className="text-4xl font-bold mb-2">1200+</p>
                                        <p className="text-blue-100">Students Enrolled</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold mb-2">50+</p>
                                        <p className="text-blue-100">Recruiting Companies</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold mb-2">100%</p>
                                        <p className="text-blue-100">Placement Record (3 years running)</p>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-blue-400/30">
                                    <p className="text-blue-100">
                                        From our humble beginnings with 47 students, CATALYST has grown into Bihar's most sought-after management institution, with alumni now leading teams at Google, Amazon, TCS, and Indian administrative services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History & Establishment */}
            <section className="relative py-8 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">Our Roots</span>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <MdHistory className="text-indigo-600 mr-3 text-3xl" />
                                From Humble Beginnings to Educational Excellence
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Founded in 2008 under the visionary Vijayam Educational Trust, CATALYST College was inaugurated by Hon'ble Chief Minister Nitish Kumar during Bihar's educational renaissance. Our founders, a group of passionate educators and industry leaders, saw the need for quality professional education in Bihar.
                            </p>

                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                                            <IoMdTime className="text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">The Early Years (2008-2012)</h3>
                                        <p className="text-gray-600 mt-1">
                                            Started with just 47 students in a rented building, facing skepticism about private education in Bihar. Our first batch achieved 92% placements, setting the standard.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                            <GiMedal className="text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Recognition Phase (2013-2018)</h3>
                                        <p className="text-gray-600 mt-1">
                                            Awarded 'Best Emerging College' by AIMA in 2015. Expanded infrastructure with new campus and labs. Established industry partnerships with TCS, Wipro, and ICICI Bank.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                                            <RiLeafLine className="text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Growth & Innovation (2019-Present)</h3>
                                        <p className="text-gray-600 mt-1">
                                            Launched new programs in emerging technologies. Achieved 100% placements for 3 consecutive years. Recognized as a center of excellence by Patliputra University.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="bg-white p-1 rounded-xl shadow-lg">
                                <img
                                    src="https://res.cloudinary.com/dacrc4ddi/image/upload/v1752557837/c8aa83db-01ba-43a1-bdfe-00568b13b50a.png"
                                    alt="College Campus"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md hidden lg:block">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-3 rounded-full mr-3">
                                        <GiThreeFriends className="text-blue-600 text-2xl" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">1,200+</p>
                                        <p className="text-sm text-gray-600">Alumni Network</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders & Supporters */}
            <section className="relative py-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl"></div>
                </div>

                {/* Modern wave divider */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg
                        className="w-full h-20"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            className="fill-slate-900"
                            opacity=".25"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            className="fill-slate-900"
                            opacity=".5"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="fill-slate-900"
                        ></path>
                    </svg>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center mb-16">
                        <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-full text-xs font-medium tracking-wider mb-4 border border-white/10">
                            THE VISIONARIES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
                            Architects of Educational Transformation
                        </h2>
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8"></div>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Meet the pioneering minds who redefined management education in Bihar through innovation, perseverance, and an unwavering commitment to excellence.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Dr. Rajesh Kumar",
                                role: "Founding Chairman",
                                image: "/images/founder.jpg", 
                                tenure: "2008 - Present",
                                achievement: "Established Bihar's first industry-integrated BBA program",
                                contribution: "Former IIT professor who designed our unique pedagogy blending academic rigor with practical application. His vision created an institution that consistently achieves 100% placements.",
                                quote: "We don't just teach business - we cultivate leaders who will transform Bihar's economic landscape.",
                                stats: [
                                    { value: "15+", label: "Years of leadership" },
                                    { value: "300+", label: "Faculty trained" },
                                    { value: "92%", label: "Placement rate (first batch)" }
                                ]
                            },
                            {
                                name: "Smriti Khanna",
                                role: "Director, Corporate Relations",
                                image: "/images/director.jpg",
                                tenure: "2010 - Present",
                                achievement: "Built network of 50+ recruiting partners",
                                contribution: "Corporate veteran who bridged the gap between academia and industry. Spearheaded our internship program that places students in Fortune 500 companies.",
                                quote: "Our students compete not with Patna or Delhi graduates, but with the best from IIMs and global universities.",
                                stats: [
                                    { value: "120+", label: "Campus drives annually" },
                                    { value: "₹18LPA", label: "Highest package" },
                                    { value: "100%", label: "Internship placement" }
                                ]
                            },
                            {
                                name: "Vijayam Trust",
                                role: "Guiding Force",
                                image: "/images/trustees.jpg",
                                tenure: "Since inception",
                                achievement: "Provided seed funding and infrastructure",
                                contribution: "The philanthropic arm that ensures education remains accessible through scholarships and campus development. Their endowment fund supports research and innovation.",
                                quote: "True progress happens when education becomes the right of many, not the privilege of few.",
                                stats: [
                                    { value: "₹5Cr+", label: "Scholarships awarded" },
                                    { value: "3", label: "Campus expansions" },
                                    { value: "47", label: "First batch students" }
                                ]
                            }
                        ].map((person, index) => (
                            <div
                                key={index}
                                className="group bg-slate-800/50 hover:bg-slate-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-400/30"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-2xl font-bold">{person.name}</h3>
                                        <p className="text-cyan-300 font-medium">{person.role}</p>
                                        <p className="text-sm text-slate-300 mt-1">{person.tenure} • {person.achievement}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-slate-300 mb-5 leading-relaxed">
                                        {person.contribution}
                                    </p>

                                    <div className="relative pl-8 my-6 border-l-2 border-cyan-400/30">
                                        <FaQuoteLeft className="absolute left-2 top-0 text-cyan-400/30 text-xl" />
                                        <p className="italic text-white/90 leading-relaxed">
                                            "{person.quote}"
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-slate-700/50">
                                        {person.stats.map((stat, i) => (
                                            <div key={i} className="text-center">
                                                <p className="text-cyan-300 font-bold text-lg">{stat.value}</p>
                                                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Their collective vision has positioned CATALYST as Bihar's premier management institution, with alumni now leading organizations across India and globally.
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-all duration-300 flex items-center shadow-lg hover:shadow-cyan-500/20">
                                <span>Explore Our History</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <button className="px-6 py-3 bg-transparent border border-slate-600 hover:border-cyan-400 text-white rounded-lg font-medium transition-all duration-300 flex items-center hover:bg-slate-800/50">
                                <span>Meet Our Team</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl overflow-hidden">
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
                            <div className="absolute -left-5 -bottom-5 w-24 h-24 bg-indigo-200 rounded-full opacity-20"></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                    <FaLightbulb className="text-yellow-500 mr-3 text-2xl" />
                                    Our Vision
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    To illuminate society through transformative education that combines academic rigor with real-world relevance, creating leaders who will drive Bihar's next phase of development.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Create industry-ready professionals with global competencies",
                                        "Bridge the urban-rural education divide through outreach programs",
                                        "Pioneer innovative teaching methodologies adapted for Bihar's context",
                                        "Develop socially responsible leaders who give back to their communities"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl overflow-hidden">
                            <div className="absolute -left-10 -top-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
                            <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                    <MdGpsFixed className="text-red-500 mr-3 text-2xl" />
                                    Our Mission
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    To empower Bihar's youth with knowledge, skills and values that transform lives and communities, while setting new benchmarks for quality education in Eastern India.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Make quality education accessible to all economic backgrounds",
                                        "Develop future-ready curricula with direct industry collaboration",
                                        "Foster entrepreneurship and innovation through incubation support",
                                        "Maintain 100% placement record while enhancing student capabilities",
                                        "Contribute to Bihar's development through research and community projects"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teaching Philosophy */}
            <section className="py-8 bg-indigo-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">Our Methodology</span>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Revolutionizing Education in Bihar</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaHandsHelping className="text-4xl mb-4 text-indigo-600" />,
                                title: "Experiential Learning",
                                desc: "70% practical exposure through labs, live projects, case studies, and mandatory internships. Our 'Learn by Doing' approach ensures students gain hands-on experience.",
                                features: ["Industry simulations", "Field projects", "Lab-intensive courses"]
                            },
                            {
                                icon: <FaChartLine className="text-4xl mb-4 text-indigo-600" />,
                                title: "Industry-Integrated",
                                desc: "Curriculum designed with TCS, Wipro and ICICI Bank experts, updated annually to match industry needs. Regular masterclasses from corporate leaders.",
                                features: ["Corporate mentorship", "Live case studies", "Technology partnerships"]
                            },
                            {
                                icon: <GiAchievement className="text-4xl mb-4 text-indigo-600" />,
                                title: "Holistic Development",
                                desc: "Evaluating skills, personality and projects beyond written exams. Our 360° assessment includes leadership, communication and problem-solving metrics.",
                                features: ["Personality profiling", "Skill certifications", "Portfolio building"]
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="flex justify-center">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{item.title}</h3>
                                <p className="text-gray-600 mb-4 text-center">{item.desc}</p>
                                <ul className="space-y-2">
                                    {item.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-2">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </span>
                                            <span className="text-gray-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenges & Overcoming */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">Our Challenges</span>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Overcoming Barriers to Excellence</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Establishing a quality institution in Bihar during the 2000s came with unique challenges - skepticism about private education, infrastructure limitations, and industry perceptions about Bihar's talent pool.
                            </p>

                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Initial Skepticism</h3>
                                        <p className="text-gray-600 mt-1">
                                            Parents questioned investing in professional education when government jobs were preferred. We overcame this by demonstrating placement success stories.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Infrastructure Hurdles</h3>
                                        <p className="text-gray-600 mt-1">
                                            Limited quality construction options and unreliable utilities. We built our campus in phases, prioritizing labs and learning spaces first.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Industry Perceptions</h3>
                                        <p className="text-gray-600 mt-1">
                                            Companies hesitated to recruit from Bihar. We invited them to campus, showcased student projects, and now have 50+ recruiting partners.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="bg-white p-1 rounded-xl shadow-lg border border-gray-100">
                                <img
                                    src="https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753437824/517126642_1140601734762431_1261258538293511693_n_ktaa5w.jpg"
                                    alt="Students collaborating"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-md hidden lg:block">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-indigo-600 mb-1">15+</p>
                                    <p className="text-sm font-semibold text-gray-600">Years Transforming Education</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">Voices of Impact</span>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">What People Say About Us</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "CATALYST transformed my career trajectory. The practical approach prepared me better than any theoretical education could.",
                                author: "Priya Sharma",
                                role: "Alumni, Senior Analyst at Deloitte",
                                image: "https://randomuser.me/api/portraits/women/43.jpg"
                            },
                            {
                                quote: "We consistently find CATALYST graduates to be job-ready with practical skills that reduce our training time significantly.",
                                author: "Rahul Mehta",
                                role: "HR Director, TCS Bihar",
                                image: "https://randomuser.me/api/portraits/men/32.jpg"
                            },
                            {
                                quote: "As a parent, I was skeptical about private colleges, but CATALYST's placement record and faculty changed my perspective completely.",
                                author: "Sunita Devi",
                                role: "Parent of BBA Student",
                                image: "https://randomuser.me/api/portraits/women/65.jpg"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-6">
                                    <FaQuoteLeft className="text-gray-300 text-2xl" />
                                </div>
                                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">{testimonial.author}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Be Part of Our Story?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        Join CATALYST College and become part of Bihar's educational transformation. Your journey to excellence starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1">
                            Explore Programs
                        </button>
                        <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1">
                            Schedule Campus Visit
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1">
                            Contact Admissions
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;