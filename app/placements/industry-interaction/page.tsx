import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Industry Interaction | Catalyst College Patna',
    description: 'Explore our industry-academia collaborations, corporate partnerships, and real-world learning initiatives at Catalyst College Patna',
    keywords: ['Catalyst College Patna', 'industry interaction', 'corporate partnerships', 'industrial visits', 'guest lectures', 'live projects', 'Patna colleges'],
    authors: [{ name: 'Catalyst College Patna' }],
    openGraph: {
        title: 'Industry Interaction | Catalyst College Patna',
        description: 'Bridging academia and industry through corporate collaborations and real-world learning',
        url: 'https://catalystcollegepatna.edu.in/industry-interaction',
        siteName: 'Catalyst College Patna',
        images: [
            {
                url: 'https://catalystcollegepatna.edu.in/images/industry-interaction-og.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
};
let pageData = {
    "page_name": "industry-interaction",
    "activities": [
        {
            "title": "Guest Lectures & Industry Talks",
            "description": "Regular sessions by professionals across sectors covering emerging trends and industry practices",
            "examples": [
                "Mr. Ajay Kumar, VP – HDFC Bank: 'Digital Transformation in BFSI'",
                "Ms. Priya Sharma, Data Scientist - Amazon: 'AI in Business Applications'",
                "Mr. Rakesh Verma, Cybersecurity Expert - IBM: 'Enterprise Security Fundamentals'"
            ],
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752828495/488922405_23916388957966117_1283071211367299069_n_cfbbii.jpg"
        },
        {
            "title": "Industrial Visits",
            "description": "Organized visits to factories, IT parks, and corporate offices for practical exposure",
            "examples": [
                "Infosys Campus (Bangalore) – BCA & BSc IT students",
                "Coca-Cola Bottling Unit – BBA students",
                "Patna Software Technology Park – All programs"
            ],
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752828851/486151393_1055702869918985_3352829412523095400_n_p5bn95.jpg"
        },
        {
            "title": "Live Projects & Internships",
            "description": "Industry-sponsored projects where students work on real business challenges",
            "examples": [
                "Social Media Audit Project for local e-commerce startup",
                "Inventory Management System for retail chain",
                "Data Analytics project for healthcare provider"
            ],
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741088/486592318_1058965042926101_237695966334437774_n_fhh3p6.jpg"
        },
        {
            "title": "Corporate Training",
            "description": "Skill development workshops conducted by industry partners",
            "examples": [
                "TCS iON Career Edge - Soft Skills",
                "AWS Academy Cloud Foundations",
                "NASSCOM FutureSkills Prime - Data Analytics"
            ],
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752751502/3843a019-baf0-40e0-97b4-f548462aacf7.png"
        },
        {
            "title": "MoUs & Partnerships",
            "description": "Formal collaborations with leading organizations for knowledge sharing",
            "examples": [
                "Infosys Springboard for digital skills",
                "NASSCOM for future-ready curriculum",
                "AWS Academy for cloud computing"
            ],
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752914011/514414669_1134115595411045_302502792642437531_n_zgvadr.jpg"
        },
        {
            "title": "Alumni-Industry Connect",
            "description": "Our alumni in industry mentor current students and facilitate networking",
            "examples": [
                "Alumni mentorship program",
                "Industry referral network",
                "Career guidance sessions"
            ],
            "image": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752741171/487548216_1062974769191795_6092592449283881455_n_hpz3nv.jpg"
        }
    ],
    "advisoryBoard": [
        {
            "name": "Amit Sukhla",
            "position": "It faculty",
            "expertise": "IT Services & Digital Transformation",
            "imageURL": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752744394/68fa36c2-de43-406c-b4bf-6466c2ed96ac.png"
        }
    ],
    "gallery": [
        {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740866/486615226_1058967089592563_3517955570577837187_n_fjsbul.jpg",
            "caption": "Guest Lecture"
        },
        {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752828867/487555599_1061839282638677_5498399053034687482_n_rc1arw.jpg",
            "caption": "Industrial Visit to Tech Park"
        },
        {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752914370/470232576_9054499931237117_4437534863518638791_n_ffntdw.jpg",
            "caption": "MoU Signing Ceremony"
        },
        {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752832349/487798706_1061838152638790_7457525024258014507_n_tqdgbo.jpg",
            "caption": "Corporate Training Session"
        },
        {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752751660/a0bf2c08-4c4b-48fb-9af2-ebda6d154a04.png",
            "caption": "Live Project Presentation"
        },
        {
            "src": "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752740500/495580619_24182591184679225_1524845308338981122_n_ocuieq.jpg",
            "caption": "Advisory Board Meeting"
        }
    ],
    "heroSection": {
        "title": "Industry Interaction",
        "description": "Bridging academia and industry through corporate collaborations and real-world learning",
        "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    "partnerLogos": [
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753341/download_lptm8v.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753202/download_dpcuui.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753189/download_mjqx63.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753151/download_cmf47v.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753138/download_cjyies.jpg",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753126/download_oyqbjr.png",
        "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1752753114/download_yrgmjz.png"
    ],
    "testimonials": [
        {
            "quote": "The students from Catalyst College come well-prepared with strong fundamentals and practical exposure to real business challenges.",
            "author": "Ms. Neha Sharma",
            "position": "HR Manager, Infosys"
        },
        {
            "quote": "We consistently find Catalyst graduates to be among the most industry-ready, thanks to their hands-on project experience.",
            "author": "Mr. Amit Patel",
            "position": "Talent Acquisition, TCS"
        },
        {
            "quote": "The college's focus on live projects gives students a distinct advantage in understanding actual workplace requirements.",
            "author": "Mr. Rakesh Verma",
            "position": "CTO, Patna Tech Park"
        }
    ]
}

const IndustryInteraction = async () => {

    const { data, error } = await fetchPageData("industry-interaction")
    pageData = data as any ?? pageData
    const { heroSection, partnerLogos, testimonials, advisoryBoard, activities, gallery } = pageData

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <HeroSection
                title={heroSection.title}
                description={heroSection.description}
                imageUrl={heroSection.imageUrl}
                overlayOpacity={0.5}
                height="lg"
            />

            {/* Introduction Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Industry-Academia Collaboration</h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p>
                            At <span className="font-semibold text-blue-600">Catalyst College Patna</span>, strong industry-academia collaboration is a cornerstone of our educational ecosystem. Through expert talks, industrial visits, MoUs, corporate mentorships, and live projects, we ensure our students are workplace-ready before graduation.
                        </p>
                        <p className="mt-4">
                            Our partnerships with leading corporations and organizations provide students with exposure to real-world challenges, cutting-edge technologies, and emerging business trends across BBA, BCA, and BSc IT programs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Industry Engagement Initiatives</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 relative">
                                <Image
                                    src={activity.image}
                                    alt={activity.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{activity.description}</p>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-700 mb-2">Recent Examples:</h4>
                                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                        {activity.examples.map((example, i) => (
                                            <li key={i}>{example}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Advisory Board Section */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Industry Advisory Board</h2>
                    <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto mb-12">
                        Our department benefits from guidance by industry leaders who help shape curriculum and skill outcomes to match evolving industry needs
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {advisoryBoard.map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                                    <Image
                                        src={member.imageURL}
                                        alt={member.name}
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-blue-600 font-medium">{member.position}</p>
                                <p className="text-gray-600 text-sm mt-2">{member.expertise}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Industry Partners Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <FaQuoteLeft className="text-gray-300 text-3xl mb-4" />
                            <blockquote className="text-lg text-gray-700 mb-6">
                                {testimonial.quote}
                            </blockquote>
                            <div className="border-t pt-4">
                                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                                <p className="text-gray-600">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Partner Logos Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Esteemed Industry Partners</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                        {partnerLogos.map((logo, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                                <div className="relative w-32 h-16">
                                    <Image
                                        src={logo}
                                        alt={`Company logo ${index + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Industry Interaction Gallery</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gallery.map((image, index) => (
                        <div key={index} className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
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
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Interested in collaborating with Catalyst College Patna for guest lectures, internships, or campus recruitment?
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                            For Companies
                        </button>
                        <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                            For Alumni
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndustryInteraction;