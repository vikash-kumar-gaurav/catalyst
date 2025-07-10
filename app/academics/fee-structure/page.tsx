import HeroSection from "@/components/newHeroImageForAllPage";
import React from "react";

import { FaRupeeSign, FaAward, FaFileAlt, FaHandsHelping, FaPhoneAlt, FaHeart, FaUserTie, FaBookOpen, FaArrowRight, FaCheckCircle, FaHandHoldingHeart } from "react-icons/fa";
import { GiReceiveMoney, GiGraduateCap } from "react-icons/gi";

const FeeStructurePage = () => {
    const programs = [
        {
            name: "BCA",
            tuition: 35000,
            admission: 5000,
            exam: 2000,
            library: 1000,
            other: 1500,
        },
        {
            name: "BBA",
            tuition: 32000,
            admission: 5000,
            exam: 2000,
            library: 1000,
            other: 1500,
        },
        {
            name: "B.Sc. IT",
            tuition: 38000,
            admission: 5000,
            exam: 2000,
            library: 1000,
            other: 1500,
        },
    ];

    const scholarships = [
        {
            title: "Ladli Beti Yojna",
            benefit: "50% Tuition Fee Discount",
            eligibility: "Female students who are the only girl child",
            icon: <FaAward className="text-pink-500 text-2xl" />,
        },
        {
            title: "Bravery Scheme",
            benefit: "100% Fee Waiver",
            eligibility: "Children of defense personnel martyred in duty",
            icon: <GiReceiveMoney className="text-red-500 text-2xl" />,
        },
        {
            title: "Merit Scholarship",
            benefit: "Up to 25% Fee Discount",
            eligibility: "Students with 90%+ in previous qualification",
            icon: <GiGraduateCap className="text-blue-500 text-2xl" />,
        },
    ];

    return (
        <div className="relative overflow-hidden">

            <HeroSection
                title="Affordable Education for All"
                description="Transparent fee structure with multiple financial support options to make quality education accessible"
                imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                overlayOpacity={0.7}
                height="lg"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Intro */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Education Shouldn't Be a Financial Burden
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        At our institution, we believe financial constraints should never
                        limit potential. Our comprehensive fee structure and financial aid
                        programs ensure every deserving student can access quality education.
                    </p>
                </div>

                {/* Fee Structure */}
                <section className="mb-20">
                    <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Transparent Fee Structure
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Our fees are designed to be affordable while maintaining the
                                highest educational standards. Additional hostel and
                                transportation fees apply separately.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <h4 className="font-semibold text-blue-800 mb-2">
                                    Looking for Education Loan?
                                </h4>
                                <p className="text-blue-700 mb-3">
                                    Explore government-backed student credit card schemes with low
                                    interest rates.
                                </p>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                                    Learn About Student Credit Card
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
                                <h3 className="text-xl font-bold">Annual Fee Breakdown</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Program
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tuition
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Other Fees
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {programs.map((program) => (
                                            <tr key={program.name}>
                                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                                    {program.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    ₹{program.tuition.toLocaleString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    ₹{(program.admission + program.exam + program.library + program.other).toLocaleString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap font-bold text-blue-700">
                                                    ₹{(
                                                        program.tuition +
                                                        program.admission +
                                                        program.exam +
                                                        program.library +
                                                        program.other
                                                    ).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-gray-50 px-6 py-3 text-sm text-gray-500">
                                * Fees subject to change as per university guidelines
                            </div>
                        </div>
                    </div>

                    {/* Student Gallery */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Students in classroom"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Student receiving scholarship"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Students studying together"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                alt="Graduation ceremony"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Scholarships */}
                <section className="mb-8 bg-gradient-to-b from-blue-50 to-white py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header with Visual Impact */}
                        <div className="text-center mb-16 relative">
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <GiReceiveMoney className="text-blue-200 text-6xl" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative z-10">
                                Your Education, <span className="text-blue-600">Our Support</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                We remove financial barriers so you can focus on what really matters -
                                <span className="font-semibold text-blue-700"> your future success</span>
                            </p>
                        </div>

                        {/* Why We Offer Support */}
                        <div className="flex flex-col md:flex-row items-center gap-12 mb-20 bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="md:w-1/2 p-8 md:p-12">
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <FaHandHoldingHeart className="text-blue-600 text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Why We're Committed to Financial Support
                                    </h3>
                                </div>
                                <p className="text-gray-600 mb-6 text-lg">
                                    At our institution, we believe talent knows no economic boundaries.
                                    Last year alone, we helped <span className="font-bold text-blue-700">237 students</span>
                                    achieve their dreams through financial assistance totaling
                                    <span className="font-bold text-blue-700"> ₹1.2 Crores</span> in scholarships and aid.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <div className="text-blue-600 font-bold text-2xl mb-1">94%</div>
                                        <div className="text-gray-700">Scholarship renewal rate</div>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                        <div className="text-green-600 font-bold text-2xl mb-1">63%</div>
                                        <div className="text-gray-700">Students receiving some aid</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 h-full">
                                <img
                                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Happy scholarship recipients"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Scholarship Programs - Enhanced */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {scholarships.map((scholarship, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-2"
                                >
                                    <div className="flex items-start mb-6">
                                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                            {scholarship.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {scholarship.title}
                                            </h3>
                                            <div className="bg-blue-50 text-blue-800 text-sm font-bold px-3 py-1 rounded-full inline-block">
                                                {scholarship.benefit}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                            <FaCheckCircle className="text-green-500 mr-2" />
                                            Who Can Apply:
                                        </h4>
                                        <p className="text-gray-600 pl-6">{scholarship.eligibility}</p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                            <FaAward className="text-yellow-500 mr-2" />
                                            Success Stories:
                                        </h4>
                                        <div className="flex items-center pl-6">
                                            <div className="flex -space-x-2 mr-3">
                                                {[1, 2, 3].map((i) => (
                                                    <img
                                                        key={i}
                                                        src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`}
                                                        className="w-8 h-8 rounded-full border-2 border-white"
                                                        alt="Scholarship recipient"
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-500">+12 recipients this year</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition">
                                        Apply Now
                                        <FaArrowRight className="ml-2" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Benefits Showcase */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-8">
                            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
                                <span className="text-blue-600">Beyond Financial Help</span> - How Our Support Transforms Lives
                            </h3>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: <FaBookOpen className="text-purple-600 text-3xl" />,
                                        title: "Academic Focus",
                                        description: "Students can concentrate on studies without financial stress",
                                        stat: "32% higher GPA"
                                    },
                                    {
                                        icon: <FaUserTie className="text-blue-600 text-3xl" />,
                                        title: "Career Opportunities",
                                        description: "Access to all internships and placement activities",
                                        stat: "87% placement rate"
                                    },
                                    {
                                        icon: <FaHeart className="text-red-500 text-3xl" />,
                                        title: "Community Building",
                                        description: "Join our alumni network of scholarship recipients",
                                        stat: "500+ strong network"
                                    }
                                ].map((benefit, index) => (
                                    <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-xl transition">
                                        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                            {benefit.icon}
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                                        <p className="text-gray-600 mb-4">{benefit.description}</p>
                                        <div className="text-blue-700 font-bold">{benefit.stat}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* Application Process */}
                <section className="bg-blue-50 rounded-xl p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        How to Apply for Financial Aid
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                step: "1",
                                title: "Check Eligibility",
                                description:
                                    "Review requirements for available scholarships",
                                icon: <FaFileAlt className="text-blue-600 text-2xl" />,
                            },
                            {
                                step: "2",
                                title: "Gather Documents",
                                description:
                                    "Collect necessary certificates and proofs",
                                icon: <FaHandsHelping className="text-blue-600 text-2xl" />,
                            },
                            {
                                step: "3",
                                title: "Submit Application",
                                description:
                                    "Complete forms before deadline",
                                icon: <FaRupeeSign className="text-blue-600 text-2xl" />,
                            },
                            {
                                step: "4",
                                title: "Receive Approval",
                                description:
                                    "Get confirmation within 30 days",
                                icon: <GiReceiveMoney className="text-blue-600 text-2xl" />,
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-5 rounded-lg text-center shadow-sm"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">
                                    <span className="text-blue-600 mr-1">{item.step}.</span>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-4">
                        Still Have Questions About Fees?
                    </h2>
                    <p className="mb-6 max-w-2xl mx-auto opacity-90">
                        Our admission counselors are ready to help you understand all fee
                        structures and financial support options.
                    </p>
                    <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-6 py-3 rounded-md transition">
                        Contact Admission Office
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeeStructurePage;