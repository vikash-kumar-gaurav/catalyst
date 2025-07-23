
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import collegeLogo from '../public/collegeLogo.png'

const Footer = () => {
    const academicPrograms = [
        { name: "BCA", url: "#" },
        { name: "BBA", url: "#" },
        { name: "BSC-IT", url: "#" },
        
    ];

    const legalLinks = [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
        { name: "Accessibility", url: "#" },
        { name: "Careers", url: "#" }
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {/* Animated Wave SVG */}
            <div className="w-full overflow-hidden">
                <svg 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none" 
                    className="w-full h-16"
                >
                    <path 
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                        opacity=".25" 
                        className="fill-current text-indigo-500"
                    ></path>
                    <path 
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                        opacity=".5" 
                        className="fill-current text-indigo-500"
                    ></path>
                    <path 
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                        className="fill-current text-indigo-600"
                    ></path>
                </svg>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Logo and Tagline */}
                    <section className="space-y-6 md:col-span-2 lg:col-span-1 ">
                        <div className="flex items-center space-x-3">
                            {/* Animated Logo */}
                            <div className="relative">
                                <img src={collegeLogo.src} alt="college logo.png" style={{height:'80px'}} />
                            </div>
                            
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Empowering minds through innovative education. Join our community of learners and shape the future.
                        </p>
                        
                        {/* Newsletter */}
                        <div className="mt-4">
                            <h3 className="text-sm font-semibold text-gray-200 mb-2">Subscribe to our newsletter</h3>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="px-4 py-2 w-full rounded-l-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors">
                                    Join
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Quick Links */}
                    <section className="space-y-6">
                        <h2 className="text-lg font-semibold text-white">Quick Links</h2>
                        <ul className="space-y-3">
                            <FooterLink url="/about-us" name="About Us" />
                            <FooterLink url="/academic-calendar" name="Academic Calendar" />
                            <FooterLink url="/events" name="Events" />
                            <FooterLink url="/alumni-network" name="Alumni Network" />
                            <FooterLink url="/research" name="Research" />
                        </ul>
                    </section>

                    {/* Admissions */}
                    <section className="space-y-6">
                        <h2 className="text-lg font-semibold text-white">Admissions</h2>
                        <ul className="space-y-3">
                            <FooterLink url="/admission" name="Application Process" />
                            <FooterLink url="/fees" name="Fees" />
                            <FooterLink url="/scholorships" name="Scholarships" />
                            <FooterLink url="/virtual-tour" name="Virtual Tour" />
                            <FooterLink url="/faqs" name="FAQs" />
                        </ul>
                    </section>

                    {/* Contact Info */}
                    <section className="space-y-6">
                        <h2 className="text-lg font-semibold text-white">Contact Us</h2>
                        <address className="not-italic space-y-4 text-gray-300 text-sm">
                            <div className="flex items-start gap-3">
                                <FaPhone className="text-indigo-400 mt-0.5 flex-shrink-0" />
                                <a href="tel:+919835024444" className="hover:text-indigo-300 transition-colors">+91 9835024444</a>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaEnvelope className="text-indigo-400 mt-0.5 flex-shrink-0" />
                                <a href="mailto:info@catalystcollege.in" className="hover:text-indigo-300 transition-colors">info@catalystcollege.in</a>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-indigo-400 mt-0.5 flex-shrink-0" />
                                <span>16C Patliputra, Bihar 800010</span>
                            </div>
                        </address>

                        {/* Social Icons */}
                        <div className="pt-4">
                            <h3 className="text-sm font-semibold text-gray-200 mb-3">Connect With Us</h3>
                            <div className="flex items-center gap-3">
                                {[
                                    { icon: <FaFacebookF />, color: 'bg-blue-600 hover:bg-blue-700', label: 'Facebook' , link:'https://www.facebook.com/cimage/'},
                                    { icon: <FaYoutube />, color: 'bg-red-600 hover:bg-red-700', label: 'YouTube' , link:'https://www.youtube.com/@cimagepatna'},
                                    { icon: <FaInstagram />, color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90', label: 'Instagram' , link:'https://www.instagram.com/cimagecollege/?hl=en'},
                                    { icon: <FaLinkedin />, color: 'bg-blue-500 hover:bg-blue-600', label: 'LinkedIn' , link:'https://in.linkedin.com/school/cimage/'},
                                    { icon: <FaWhatsapp />, color: 'bg-green-500 hover:bg-green-600', label: 'WhatsApp' , link:'https://api.whatsapp.com/send/?phone=917250767676&text&type=phone_number&app_absent=0' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${social.color} text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Academic Programs Bar */}
            <div className="bg-gray-800 py-6">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <h3 className="text-sm font-semibold text-indigo-300 whitespace-nowrap">
                            Our Academic Programs:
                        </h3>
                        <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-3">
                            {academicPrograms.map((program, index) => (
                                <a
                                    key={index}
                                    href={program.url}
                                    className="text-gray-300 hover:text-indigo-300 text-sm whitespace-nowrap transition-colors font-medium"
                                >
                                    {program.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Panel */}
            <div className="bg-gray-900 py-6">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
                            <a href="#" className="hover:text-indigo-300 transition-colors font-medium">
                                Student Portal
                            </a>
                            <a href="#" className="hover:text-indigo-300 transition-colors font-medium">
                                Faculty Directory
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
                            {legalLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="hover:text-indigo-300 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 text-center lg:text-right">
                            © {new Date().getFullYear()} Copyright Vijayam Educational Trust 2025 . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ url, name }:{url:string, name:string}) => (
    <li>
        <a
            href={url}
            className="text-gray-300 hover:text-indigo-300 transition-colors py-1 block text-sm hover:translate-x-1 duration-200"
        >
            {name}
        </a>
    </li>
);

export default Footer;


