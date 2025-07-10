
"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useSwipeable } from 'react-swipeable';

interface ImageItem {
  url:any;
  alt: string;
  tag: string;
  link: string;
}

interface BentoGridProps {
  images: ImageItem[];
}

const BentoGrid = ({ images }: BentoGridProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkResponsive();
    window.addEventListener('resize', checkResponsive);

    return () => window.removeEventListener('resize', checkResponsive);
  }, []);


  useEffect(() => {
    if (isMobile || isTablet) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile, isTablet, images.length]);


  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentSlide(prev => (prev + 1) % images.length);
      resetInterval();
    },
    onSwipedRight: () => {
      setCurrentSlide(prev => (prev - 1 + images.length) % images.length);
      resetInterval();
    },
    trackMouse: true
  });

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 3000);
  };

  const desktopLayout = [
    { area: 'a', class: 'col-span-1 row-span-1' },
    { area: 'b', class: 'col-span-2 row-span-2' },
    { area: 'c', class: 'col-span-1 row-span-1' },
    { area: 'd', class: 'col-span-1 row-span-2' },
    { area: 'e', class: 'col-span-1 row-span-1' },
    { area: 'f', class: 'col-span-2 row-span-1' },
    { area: 'g', class: 'col-span-1 row-span-1' },
    { area: 'h', class: 'col-span-1 row-span-2' },
    { area: 'i', class: 'col-span-1 row-span-1' },
    { area: 'j', class: 'col-span-2 row-span-2' },
    { area: 'k', class: 'col-span-1 row-span-1' },
    { area: 'l', class: 'col-span-1 row-span-1' },
    { area: 'm', class: 'col-span-1 row-span-1' }
  ];

  return (
    <div className="w-full">

      {/* Desktop Bento Grid */}
      {!isMobile && !isTablet && (
        <div
          className="hidden lg:grid grid-cols-5 gap-2 auto-rows-[180px]"
          style={{
            gridTemplateAreas: `
              "a b b c d"
              "e b b f g"
              "h i j j k"
              "h l j j m"
            `
          }}
        >
          {images.slice(0, 13).map((image, index) => (
            <BentoItem
              key={index}
              image={image}
              areaName={desktopLayout[index].area}
              className={desktopLayout[index].class}
              isMobile={false}
            />
          ))}
        </div>
      )}

      {/* Mobile/Tablet Carousel */}
      {(isMobile || isTablet) && (
        <div
          {...handlers}
          ref={carouselRef}
          className="relative w-full overflow-hidden"
          style={{ height: isMobile ? '300px' : '400px' }}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${currentSlide * (100 / images.length)}%)`
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-full flex-shrink-0"
                style={{ width: `${100 / images.length}%` }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <Link href={image.link} className="flex justify-center">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/80 shadow-lg whitespace-nowrap">
                    <span className="text-white font-medium text-sm">
                      {image.tag}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  resetInterval();
                }}
                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


const BentoItem = ({ image, areaName, className, isMobile }: any) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!isHovered && tagRef.current) {
      gsap.set(tagRef.current, { opacity: 0, scale: 0.8 });
    }
    return () => {
      animationRef.current?.kill();
    };
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || !tagRef.current || isMobile) return;

    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    animationRef.current?.kill();

    animationRef.current = gsap.to(tagRef.current, {
      x: x,
      y: y,
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto"
    });
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovered(false);
    if (tagRef.current) {
      gsap.to(tagRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2
      });
    }
  };

  return (
    <div
      ref={itemRef}
      className={`relative overflow-hidden rounded-lg transition-all duration-300 ${className}`}
      style={{ gridArea: areaName }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        src={image.url}
        alt={image.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />

     <Link href={image.link}>
  <div
    ref={tagRef}
    className="absolute z-50 group"
    style={{
      transform: 'translate(-50%, -50%)',
      opacity: 0,
      scale: 0.8,
    }}
  >
    {/* Wrap the button tag with the link content */}
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20 shadow-lg hover:bg-gray-900 transition-colors duration-200">
      <span className="text-white font-medium text-xs whitespace-nowrap flex items-center">
        <svg
          className="w-3 h-3 mr-1.5 opacity-80 group-hover:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        {image.tag}
      </span>
    </div>

    {/* Small accent dot */}
    <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-blue-400 rounded-full transform translate-x-0.5 -translate-y-0.5" />
  </div>
</Link>
    </div>
  );
};

export default BentoGrid;