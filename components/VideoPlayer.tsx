
"use client"
import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { X, Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
}

interface YoutubePlayerProps {
  videos: Video[];
  title?: string;
  description?: string;
}

const VideoCard: React.FC<{ video: Video; onPlay: (videoId: string) => void }> = ({ video, onPlay }) => {
  const thumbnailUrl = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-teal-500/30 hover:-translate-y-2 aspect-video"
      onClick={() => onPlay(video.id)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail image */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* Glassmorphism play button that follows mouse */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-linear"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-4 shadow-lg">
              <Play className="w-6 h-6 text-white" />
            </div>
            <span className="mt-2 text-xs font-medium text-white bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm">
              Play
            </span>
          </div>
        </div>
      )}

      {/* Video title */}
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-white font-bold text-xl leading-snug drop-shadow-lg">
          {video.title}
        </h3>
      </div>

      {/* Hover effects */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 transition-all duration-300 rounded-2xl"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      </div>
    </div>
  );
};

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({
  videos,
  title = "Premium Content",
  description = "Exclusive video collection"
}) => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (playingVideoId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [playingVideoId]);

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideoId(videoId);
    setIsClosing(false);

  };

  const handleClosePlayer = () => {
    setIsClosing(true);
    setTimeout(() => {
      setPlayingVideoId(null);
      setIsClosing(false);
    }, 300);
  };

  const youtubePlayerOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      fs: 0, 
      iv_load_policy: 3, 
      disablekb: 1, 
      origin: typeof window !== 'undefined' ? window.location.origin : '',
    }
  };

  return (

    <section className="relative overflow-hidden my-2 py-4">
  {/* Enhanced Background */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {/* Grid pattern with animated dots */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 gap-1">
        {Array.from({ length: 400 }).map((_, i) => (
          <div 
            key={i}
            className="relative rounded-full"
            style={{
              animation: `pulse ${2 + Math.random() * 3}s infinite alternate`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-70" />
          </div>
        ))}
      </div>
    </div>

    {/* Animated gradient mesh */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute -top-1/3 -left-1/4 w-full h-full">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.3)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
            </radialGradient>
          </defs>
          <g className="opacity-80">
            {Array.from({ length: 15 }).map((_, i) => {
              const size = 100 + Math.random() * 200;
              const x = Math.random() * 800;
              const y = Math.random() * 800;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={size}
                  fill="url(#gradient)"
                  style={{
                    animation: `float ${15 + Math.random() * 20}s infinite alternate ease-in-out`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              );
            })}
          </g>
        </svg>
      </div>
    </div>

    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-600 rounded-full filter blur-[80px] opacity-20 animate-float-slow"
      />
      <div 
        className="absolute top-1/2 right-0 w-48 h-48 bg-pink-600 rounded-full filter blur-[60px] opacity-20 animate-float-medium"
      />
      <div 
        className="absolute bottom-0 left-1/3 w-32 h-32 bg-red-500 rounded-full filter blur-[40px] opacity-20 animate-float-fast"
      />
    </div>


    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5vaXNlIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIxMCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-10" />
  </div>

  {/* Content */}
  <div className="relative z-50 container mx-auto px-6">

    <header className="text-center mb-16 relative overflow-hidden">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
          {title}
        </span>
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></span>
      </h1>

      <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto relative font-serif italic tracking-wide leading-relaxed">
        <span className="absolute -left-6 top-0 text-4xl text-purple-400 opacity-60">"</span>
        {description}
        <span className="absolute -right-6 bottom-0 text-4xl text-purple-400 opacity-60">"</span>
      </p>

      <div className="flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
        <div className="mx-4 w-3 h-3 border-2 border-blue-400 rounded-full transform rotate-45"></div>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} onPlay={handlePlayVideo} />
      ))}
    </div>
  </div>

 
  {playingVideoId && (
    <div
      className={`fixed inset-0 flex items-center md:items-center justify-center z-50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleClosePlayer}
    >
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      />
      <div
        className={`relative w-full max-w-6xl mx-4 aspect-video backdrop-blur-lg rounded-t-xl md:rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${isClosing ? 'translate-y-full md:translate-y-10' : 'translate-y-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClosePlayer}
          className="absolute -top-12 right-0 md:-top-3 md:-right-3 z-10 w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-800 shadow-xl transition-all hover:scale-110"
          aria-label="Close video player"
        >
          <X className="w-6 h-6" />
        </button>
        <YouTube
          videoId={playingVideoId}
          opts={youtubePlayerOptions}
          onEnd={handleClosePlayer}
          onError={handleClosePlayer}
          className="w-full h-full rounded-t-xl md:rounded-xl overflow-hidden"
        />
      </div>
    </div>
  )}

  {/* Enhanced animations */}
  <style jsx global>{`
    @keyframes animate-gradient-x {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(10%, 10%); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(20%, 10%) scale(1.1); }
    }
    @keyframes float-medium {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(-15%, -5%) scale(1.05); }
    }
    @keyframes float-fast {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(5%, -10%) scale(0.95); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.1; transform: scale(0.9); }
      50% { opacity: 0.3; transform: scale(1.1); }
    }
  `}</style>
</section>
    
  );
};

export default YoutubePlayer;