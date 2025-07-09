"use client"
import Image from 'next/image';

const GlobalAchievers = ({achievers}:{achievers:any}) => {
  // Mock data for top achievers
  

  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="absolute top-20 left-10 w-64 h-64 text-blue-100 animate-float" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45,-78.3C58.5,-69.8,70,-58.3,77.9,-44.3C85.8,-30.3,90.1,-13.8,89.5,0.4C88.9,14.6,83.4,29.2,74.1,41.8C64.8,54.4,51.7,65,37.2,73.2C22.7,81.4,6.8,87.2,-8.9,86.5C-24.6,85.8,-49.2,78.6,-64.5,65.5C-79.8,52.4,-85.8,33.4,-86.6,14.8C-87.4,-3.8,-83,-22,-72.4,-36.4C-61.8,-50.8,-45,-61.4,-28.9,-69.3C-12.8,-77.2,2.6,-82.5,17.1,-79.1C31.6,-75.7,45,-63.7,45,-78.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            Global Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Top Achievers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alumni excelling at world's leading companies
          </p>
        </div>

        {/* Enhanced Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievers.map((achiever:any) => (
            <div key={achiever.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative h-60 w-full overflow-hidden rounded-t-xl">
                {/* Glass panel effect */}
                <div className="absolute inset-0 backdrop-blur-sm bg-white/10 border-b border-white/20">
                  <Image
                    src={achiever.image}
                    alt={achiever.name}
                    fill
                    className="object-cover mix-blend-multiply opacity-90"
                  />
                </div>

                {/* Floating circular frame */}
                <div className="absolute -bottom-8 left-6 w-20 h-20 rounded-full border-4 border-white/80 overflow-hidden shadow-xl backdrop-blur-sm bg-white/30">
                  <Image
                    src={achiever.image}
                    alt={achiever.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="pt-12 pb-6 px-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{achiever.name}</h3>
                  <p className="text-blue-600 text-sm">{achiever.course}</p>
                </div>

                {/* Position & Company */}
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{achiever.position}</p>
                    <p className="text-sm text-gray-600">{achiever.company}, {achiever.location}</p>
                  </div>
                </div>

                {/* Package Highlight */}
                <div className="mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Package: {achiever.package}
                  </span>
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-600 italic text-sm mb-6 border-l-2 border-blue-200 pl-4">
                  "{achiever.testimonial}"
                </blockquote>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a href={achiever.social.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href={achiever.social.twitter} className="text-blue-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>Start Your Success Journey</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalAchievers;