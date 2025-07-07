"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ImageItem {
  url: string;
  alt: string;
  tag: string;
  link: string;
}

interface BentoGridProps {
  images: ImageItem[];
}

const desktopPattern = [
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-2',
  // ... continue with remaining patterns
];

const mobilePattern = [
  'col-span-1 row-span-1',
  'col-span-2 row-span-2',
  // ... mobile patterns
];

const BentoGrid = ({ images }: BentoGridProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedImages = isMobile ? images.slice(0, 10) : images;

  return (
    <div className="w-full px-0 mx-0">
      {/* Mobile Grid */}
      <div className="md:hidden grid grid-cols-2 gap-2 auto-rows-[150px]">
        {displayedImages.map((image, index) => (
          <BentoItem 
            key={index}
            image={image}
            patternClass={mobilePattern[index % mobilePattern.length]}
            isMobile={true}
          />
        ))}
      </div>

      {/* Desktop/Tablet Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-3 auto-rows-[200px] px-0">
        {displayedImages.map((image, index) => (
          <BentoItem 
            key={index}
            image={image}
            patternClass={desktopPattern[index % desktopPattern.length]}
            isMobile={false}
          />
        ))}
      </div>
    </div>
  );
};

interface BentoItemProps {
  image: ImageItem;
  patternClass: string;
  isMobile: boolean;
}

const BentoItem = ({ image, patternClass, isMobile }: BentoItemProps) => {
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

    // Kill any existing animation
    animationRef.current?.kill();

    // Create smooth follow animation with GSAP
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
      className={`relative overflow-hidden rounded-lg transition-all duration-300 mx-1 ${patternClass} ${
        patternClass.includes('row-span-2') ? 'md:min-h-[400px]' : 'min-h-[200px]'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={image.url}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-110"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      
      {/* Floating Tag Button with GSAP animation */}
      <Link href={image.link} passHref>
        <div 
          ref={tagRef}
          className="absolute pointer-events-none mix-blend-difference bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30 shadow-lg"
          style={{
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            scale: 0.8,
          }}
        >
          <span className="text-white font-medium text-sm whitespace-nowrap">
            {image.tag}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default BentoGrid;