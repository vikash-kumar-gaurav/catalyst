import React, { useState } from 'react';
import Image from 'next/image';

type ProgramType = 'workshop' | 'internship';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  type: ProgramType;
  duration: string;
  details: string[];
}

interface ProgramsSectionProps {
  programs: Program[];
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ programs }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'workshops' | 'internships'>('all');

  const filteredPrograms = programs.filter(program => {
    if (activeTab === 'all') return true;
    if (activeTab === 'workshops') return program.type === 'workshop';
    return program.type === 'internship';
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Hands-On Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Knowledge <span className="text-blue-600">Into Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your career with our immersive workshops and industry-aligned internships
          </p>
        </div>

        {/* Programs Grid - Card with Tabs */}
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
              >
                All Programs
              </button>
              <button 
                onClick={() => setActiveTab('workshops')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'workshops' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
              >
                Workshops
              </button>
              <button 
                onClick={() => setActiveTab('internships')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'internships' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
              >
                Internships
              </button>
            </div>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div 
                key={program.id}
                className="group relative h-full rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Program Badge */}
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold ${program.type === 'internship' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {program.type === 'internship' ? 'Internship' : 'Workshop'}
                </div>
                
                {/* Program Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{program.title}</h3>
                    <p className="text-blue-200 font-medium">{program.duration}</p>
                  </div>
                </div>

                {/* Program Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-5">{program.description}</p>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {program.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all flex items-center justify-center">
                      {program.type === 'internship' ? 'Apply Now' : 'Register'}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
              Explore All Workshops
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
              Internship Opportunities
              <svg className="w-5 h-5 ml-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
          
          <p className="mt-8 text-gray-500">
            Partnered with 120+ leading companies worldwide
          </p>
          <div className="flex justify-center mt-6 space-x-8 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-auto">
                {/* Company logos would go here */}
                <div className="h-full w-20 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;