import React from 'react';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  subtitle?: string;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  title = "Catalyst Campus",
  subtitle = "Where innovation meets education",
  autoplay = true,
  muted = true,
  controls = true,
  className = '',
}) => {
  const getYouTubeUrl = () => {
    const params = new URLSearchParams();
    if (autoplay) params.append('autoplay', '1');
    if (muted) params.append('mute', '1');
    if (controls) params.append('controls', '1');
    params.append('modestbranding', '1');
    params.append('rel', '0');
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  return (
    <div className={`relative isolate py-4 ${className}`}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>


      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.36)]">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h2>
          <p className="font-subheading mt-4 text-xl leading-8 text-white/80">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-4xl backdrop-blur-lg bg-white/50 rounded-3xl p-1 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.36)] overflow-hidden transform transition-all hover:scale-[1.01]">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src={getYouTubeUrl()}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            />
          </div>
        </div>

  
        <div className="mt-6 mx-auto max-w-md text-center backdrop-blur-lg bg-white/5 rounded-full px-6 py-3 border border-white/10">
          <p className="font-mono text-xs uppercase tracking-widest text-white/70">
            View in full screen for more engaging experience
          </p>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&family=Space+Mono&display=swap');
        
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        .font-subheading {
          font-family: 'Poppins', sans-serif;
        }
        .font-mono {
          font-family: 'Space Mono', monospace;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
};