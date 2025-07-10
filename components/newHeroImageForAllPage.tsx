// components/HeroSection.tsx
import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  overlayOpacity?: number;
  showDivider?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; // Added height options
  contentPosition?: 'top' | 'center' | 'bottom'; // Added content positioning
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageUrl = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  overlayOpacity = 0.5,
  showDivider = true,
  height = 'lg', // Default to large height
  contentPosition = 'center' // Default to center
}) => {
  // Height classes mapping
  const heightClasses = {
    sm: 'h-[400px]',
    md: 'h-[500px]',
    lg: 'h-[600px]',
    xl: 'h-[700px]',
    full: 'min-h-screen'
  };

  // Content position classes mapping
  const contentPositionClasses = {
    top: 'pt-32 pb-12',
    center: 'flex items-center justify-center',
    bottom: 'flex items-end justify-center pb-32'
  };

  return (
    <section 
      className={`relative w-full ${heightClasses[height]} bg-cover bg-center text-white overflow-hidden`} 
      style={{ 
        backgroundImage: `url('${imageUrl}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity }}
      ></div>

      <div className={`container mx-auto px-6 relative z-10 h-full ${contentPositionClasses[contentPosition]}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">{title}</h1>
          {showDivider && (
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
          )}
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;