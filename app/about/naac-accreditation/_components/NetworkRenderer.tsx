import HeroSection from '@/components/newHeroImageForAllPage';
import React from 'react'


const NetworkRenderer = ({ accreditationData }: { accreditationData: any }) => {
    return (
        <>


            <HeroSection
                title={accreditationData?.heroSection?.title}
                description={accreditationData?.heroSection?.description}
                imageUrl={accreditationData?.heroSection?.imageURL}
                overlayOpacity={0.3}
                height="lg"
            />

            <div className="container mx-auto px-4 py-12">
                {/* Introduction Section */}
                <section className="mb-16 max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Quality Assurance</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            CATALYST College is accredited by the National Assessment and Accreditation Council (NAAC), an autonomous institution under the University Grants Commission (UGC), which assesses higher education institutions in India on various parameters such as curriculum, teaching-learning, infrastructure, research, student support, and governance.
                        </p>
                        <p className="text-lg text-gray-700">
                            NAAC accreditation reflects our institution's commitment to quality education and continuous improvement. We underwent our first accreditation cycle in 2023 and are committed to enhancing our quality benchmarks in preparation for future cycles.
                        </p>
                    </div>
                </section>

                {/* Accreditation Status */}
                <section className="mb-16">
                    <div className="bg-blue-50 p-6 rounded-t-lg">
                        <h2 className="text-2xl font-bold text-blue-800">📊 Accreditation Status</h2>
                    </div>
                    <div className="border border-blue-50 rounded-b-lg p-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Current Accreditation</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="font-medium text-gray-700">Cycle:</span>
                                            <span className="text-gray-900">{accreditationData.currentCycle.cycle}</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="font-medium text-gray-700">Year:</span>
                                            <span className="text-gray-900">{accreditationData.currentCycle.year}</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="font-medium text-gray-700">CGPA:</span>
                                            <span className="text-gray-900">{accreditationData.currentCycle.cgpa}</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="font-medium text-gray-700">Grade:</span>
                                            <span className="text-gray-900 font-bold">{accreditationData.currentCycle.grade}</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="font-medium text-gray-700">Validity:</span>
                                            <span className="text-gray-900">{accreditationData.currentCycle.validity}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-sm border-2 border-blue-200">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">NAAC Certificate</h3>
                                    <p className="text-gray-600">Official accreditation certificate</p>
                                </div>
                                <a
                                    href={accreditationData.currentCycle.certificateUrl}
                                    className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Certificate (PDF)
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NAAC Documents */}
                <section className="mb-16">
                    <div className="bg-green-50 p-6 rounded-t-lg">
                        <h2 className="text-2xl font-bold text-green-800">📄 NAAC Documents</h2>
                    </div>
                    <div className="border border-green-50 rounded-b-lg p-6 bg-white">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {accreditationData.documents.map((doc: any, index: any) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.type}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.size}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <a
                                                    href={doc.url}
                                                    className="text-blue-600 hover:text-blue-900"
                                                    download
                                                >
                                                    Download
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Quality Initiatives */}
                <section className="mb-16">
                    <div className="bg-purple-50 p-6 rounded-t-lg">
                        <h2 className="text-2xl font-bold text-purple-800">🧭 Quality Initiatives</h2>
                    </div>
                    <div className="border border-purple-50 rounded-b-lg p-6 bg-white">
                        <p className="text-gray-700 mb-6">
                            As part of our commitment to continuous improvement through the NAAC process, we have implemented several quality enhancement initiatives:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <ul className="list-disc list-inside space-y-3 text-gray-700">
                                    {accreditationData.qualityInitiatives.slice(0, 4).map((initiative: any, index: any) => (
                                        <li key={index}>{initiative}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <ul className="list-disc list-inside space-y-3 text-gray-700">
                                    {accreditationData.qualityInitiatives.slice(4).map((initiative: any, index: any) => (
                                        <li key={index}>{initiative}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IQAC Section */}
                <section className="mb-16">
                    <div className="bg-yellow-50 p-6 rounded-t-lg">
                        <h2 className="text-2xl font-bold text-yellow-800">🧩 IQAC & Quality Governance</h2>
                    </div>
                    <div className="border border-yellow-50 rounded-b-lg p-6 bg-white">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Internal Quality Assurance Cell (IQAC)</h3>
                                <p className="text-gray-700 mb-4">
                                    The IQAC plays a central role in planning, guiding, and monitoring quality initiatives and continuous improvement at the institution. It ensures the effective implementation of quality benchmarks set by NAAC.
                                </p>
                                <div className="flex items-center mt-6">
                                    <a
                                        href={`mailto:${accreditationData.iqacInfo.email}`}
                                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mr-4"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Contact IQAC
                                    </a>
                                    <a
                                        href="/iqac"
                                        className="flex items-center px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                                    >
                                        Visit IQAC Page
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">IQAC Composition</h3>
                                <ul className="space-y-2 text-gray-700">
                                    {accreditationData.iqacInfo.composition.map((member: any, index: any) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-yellow-600 mr-2">•</span>
                                            <span>{member}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* IQAC Meetings */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent IQAC Meetings</h3>
                            <div className="bg-gray-50 p-4 rounded">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Date</th>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Minutes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {accreditationData.iqacInfo.meetings.map((meeting: any, index: any) => (
                                            <tr key={index}>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{meeting.date}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                                                    <a href={meeting.minutes} className="text-blue-600 hover:text-blue-900">Download</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section>
                    <div className="bg-red-50 p-6 rounded-t-lg">
                        <h2 className="text-2xl font-bold text-red-800">🖼️ NAAC Visit Gallery</h2>
                    </div>
                    <div className="border border-red-50 rounded-b-lg p-6 bg-white">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="/naac-gallery/peer-team-visit.jpg"
                                    alt="NAAC Peer Team Visit"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="/naac-gallery/exit-meeting.jpg"
                                    alt="NAAC Exit Meeting"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="/naac-gallery/certificate-award.jpg"
                                    alt="Certificate Award Ceremony"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="/naac-gallery/workshop-session.jpg"
                                    alt="NAAC Workshop Session"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default NetworkRenderer