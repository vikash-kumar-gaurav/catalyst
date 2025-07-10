"use client"

import { useState } from 'react';
import Image from 'next/image';


const CollegeFacilities = ({campusFacility} : {campusFacility:any}) => {
  const [activeFacility, setActiveFacility] = useState<number | null>(null);
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({});

  // Fallback image for when main image fails to load
  const fallbackImage = '';



  // Handle image loading errors
  const handleImageError = (id: number) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className=" h-auto w-full pt-2 pb-8 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Our Campus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where innovation meets education in world-class facilities designed for tomorrow's leaders
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Main Image Section */}
          <div className="lg:w-1/2 w-full h-[500px] lg:h-auto relative rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full h-full">
              {activeFacility ? (
                <Image 
                  src={imageError[activeFacility] ? fallbackImage : campusFacility.facilities.find((f:any) => f.id === activeFacility)?.image || fallbackImage}
                  alt="College Facility"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500"
                  onError={() => handleImageError(activeFacility)}
                />
              ) : (
                <Image 
                  src={campusFacility.campus_img_uri}
                  alt="College Campus"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 h-full"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-2">Our Vibrant Campus</h3>
                  <p className="text-blue-100 text-lg">A learning environment that inspires innovation and collaboration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Facilities Cards */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {campusFacility.facilities.map((facility:any) => (
                <div 
                  key={facility.id}
                  className={`bg-white p-6 rounded-xl shadow-md transition-all duration-300 border-2 flex flex-col h-full
                    ${activeFacility === facility.id 
                      ? 'border-blue-500 scale-[1.02] shadow-lg' 
                      : 'border-transparent hover:border-blue-300'}`}
                  onMouseEnter={() => setActiveFacility(facility.id)}
                  onMouseLeave={() => setActiveFacility(null)}
                >
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-1">
                        {facility.title}
                      </h4>
                      <p className="text-gray-600 mt-2">
                        {facility.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile-only image preview */}
                  <div className="lg:hidden mt-4">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image 
                        src={imageError[facility.id] ? fallbackImage : facility.image}
                        alt={facility.title}
                        layout="fill"
                        objectFit="cover"
                        onError={() => handleImageError(facility.id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button - Moved inside the grid container for better alignment */}
            <div className="flex justify-center mt-10">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center">
                <span>Explore All Facilities</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeFacilities;
