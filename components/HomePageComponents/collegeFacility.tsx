
"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';




const FacilitiesPage: React.FC<{data: any }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>World-Class Facilities | Prestige University</title>
        <meta name="description" content="Explore our state-of-the-art campus facilities designed to inspire learning and innovation." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <div className="h-auto bg-gradient-to-b from-blue-50 to-white font-montserrat">

        

        {/* Facilities Grid */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-gray-800 mb-4">
            Our <span className="text-blue-600">World-Class</span> Facilities
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Designed to inspire creativity, collaboration, and academic excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.facilities.map((facility:any, index:any) => (
              <FacilityCard key={facility.id} facility={facility} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


const FacilityCard: React.FC<{ facility: any; index: any }> = ({ facility, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.15 }
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-56 md:h-62 overflow-hidden">
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white">{facility.title}</h3>
          <p className="text-yellow-300 font-semibold">{facility.tagline}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{facility.description}</p>
        <ul className="space-y-2 mb-6">
          {facility.features.map((feature:any, i:any) => (
            <li key={i} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};





export default FacilitiesPage;