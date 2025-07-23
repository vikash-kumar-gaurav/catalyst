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
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-2"
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
          <PlayCircle className="w-16 h-16 text-white/90 drop-shadow-lg transform transition-all duration-300 group-hover:scale-110" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg transform transition-all duration-300 group-hover:translate-y-1">
          {video.title}
        </h3>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-2xl"></div>
    </div>
  );
};

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ 
  videos, 
  title = "Modern Video Gallery", 
  description = "Click on any card to instantly play the video." 
}) => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

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
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <main className="relative z-10 min-h-screen text-white p-4 sm:p-8">
        <header className="text-center mb-12 pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-400 mb-4 animate-text-shimmer">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} onPlay={handlePlayVideo} />
          ))}
        </div>
      </main>

      {/* Video Player Modal */}
      {playingVideoId && (
        <div 
          className={`fixed inset-0 bg-black/90 backdrop-blur-md flex items-end justify-center z-50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          onClick={handleClosePlayer}
        >
          <div 
            className="relative w-full max-w-6xl aspect-video bg-black rounded-t-2xl shadow-2xl mb-8 transition-all duration-300 ease-out"
            style={{
              transform: isClosing ? 'translateY(100px)' : 'translateY(0)',
              opacity: isClosing ? 0 : 1
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePlayer}
              className="absolute -top-12 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              aria-label="Close video player"
            >
              <X className="w-6 h-6" />
            </button>
            <YouTube
              videoId={playingVideoId}
              opts={youtubePlayerOptions}
              className="w-full h-full rounded-t-2xl overflow-hidden"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(${Math.random() * 10 - 5}deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default YoutubePlayer;