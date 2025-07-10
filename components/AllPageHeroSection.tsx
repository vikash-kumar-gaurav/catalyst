"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';

interface HeroImageProps {
  imageUrl: string;
  tagline: string;
  title?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  overlayOpacity?: number;
  textColor?: string;
  
}

const AllPageHero = ({
  imageUrl,
  tagline,
  title = "Admission Open",
  ctaPrimary = "",
  ctaSecondary = "",
  overlayOpacity = 70,
  textColor = "white"
  
}: HeroImageProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="relative h-[60vh] w-screen max-w-none overflow-hidden ">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl}
            alt="Hero background"
            className={`w-full h-full object-cover transition-all duration-1000 ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-70'}`}
          />
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 mix-blend-multiply`}
            style={{ opacity: `${overlayOpacity}%` }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-6"
                style={{ color: textColor }}>
              <span className="font-montserrat block">{title}</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl font-medium mb-8 text-yellow-500">
              {tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaPrimary && (
                <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {ctaPrimary}
                </button>
              )}
              {ctaSecondary && (
                <button className="px-8 py-3 bg-transparent border-2 hover:bg-white/20 font-bold rounded-lg transition-all transform hover:scale-105"
                        style={{ borderColor: textColor, color: textColor }}>
                  {ctaSecondary}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Animation keyframes */}
        <style jsx global>{`
          @keyframes float1 {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          @keyframes float2 {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(15px) translateX(-15px); }
          }
          @keyframes float3 {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-10px) translateX(-10px); }
          }
          .animate-float1 { animation: float1 8s ease-in-out infinite; }
          .animate-float2 { animation: float2 10s ease-in-out infinite; }
          .animate-float3 { animation: float3 12s ease-in-out infinite; }
          .font-montserrat { font-family: 'Montserrat', sans-serif; }
          .font-playfair { font-family: 'Playfair Display', serif; }
        `}</style>
      </section>
    </>
  );
};

export default AllPageHero;