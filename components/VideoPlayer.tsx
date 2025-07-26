

"use client"
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { X, PlayCircle } from 'lucide-react';

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

  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:shadow-teal-500/30 hover:-translate-y-2"
      onClick={() => onPlay(video.id)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnailUrl} 
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-500"></div>
          <PlayCircle className="w-16 h-16 text-white drop-shadow-xl transform transition-all duration-300 group-hover:scale-125" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-white font-bold text-xl leading-snug drop-shadow-lg">
          {video.title}
        </h3>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 transition-all duration-300 rounded-xl"></div>
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
      fs: 0, // Disable fullscreen button
      iv_load_policy: 3, // Hide annotations
      disablekb: 1, // Disable keyboard controls
      origin: typeof window !== 'undefined' ? window.location.origin : '',
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 overflow-hidden py-20">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5"
            style={{
              width: `${Math.random() * 500 + 100}px`,
              height: `${Math.random() * 500 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
              animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} onPlay={handlePlayVideo} />
          ))}
        </div>
      </div>

      {/* Premium Video Player Modal */}
      {playingVideoId && (
        <div 
          className={`fixed inset-0 flex items-end md:items-center justify-center z-50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          onClick={handleClosePlayer}
        >
          <div 
            className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          />
          
          <div 
            className={`relative w-full max-w-6xl mx-4 aspect-video bg-black rounded-t-xl md:rounded-xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
              isClosing ? 'translate-y-full md:translate-y-10' : 'translate-y-0'
            }`}
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
              className="w-full h-full rounded-t-xl md:rounded-xl overflow-hidden"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * 5 - 2.5}deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default YoutubePlayer