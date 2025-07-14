"use client"
import { useState, useRef } from 'react';

interface Video {
  url: string;
  category: string;
}

const YouTubeVideoPlayer = () => {
  // Mock data as array of videos with only url and category
  const videos: Video[] = [
    {
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "category": "Music"
    },
    {
      "url": "https://www.youtube.com/watch?v=9bZkp7q19f0",
      "category": "Music"
    },
    {
      "url": "https://www.youtube.com/watch?v=yfoY53QXEnI",
      "category": "Design"
    },
    {
      "url": "https://www.youtube.com/watch?v=JW5meKfy3fY",
      "category": "Design"
    },
    {
      "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      "category": "Education"
    },
    {
      "url": "https://www.youtube.com/watch?v=gfDE2a7MKjA",
      "category": "Education"
    }
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRefs = useRef<{[key: string]: HTMLIFrameElement | null}>({});

  // Extract video ID from URL
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleVideoClick = (videoId: string) => {
    setActiveVideo(prev => prev === videoId ? null : videoId);
    
    // Update the iframe src to autoplay when selected
    if (videoId !== activeVideo) {
      const iframe = videoRefs.current[videoId];
      if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&controls=1&modestbranding=1&rel=0`;
      }
    }
  };

  const getVideoIframe = (videoId: string) => {
    return (
      <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
        <iframe
          ref={(el:any) => videoRefs.current[videoId] = el}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=1&modestbranding=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      </div>
    );
  };

  const getThumbnail = (videoId: string, category: string) => {
    return (
      <div 
        className="relative cursor-pointer group"
        onClick={() => handleVideoClick(videoId)}
      >
        <img 
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt="Video thumbnail"
          className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
          <div className="p-3 bg-black/50 rounded-full backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Video Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => {
          const videoId = getVideoId(video.url);
          if (!videoId) return null;
          
          return (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${activeVideo === videoId ? 'ring-2 ring-red-500' : 'hover:shadow-lg'}`}
            >
              <div className="p-1">
                {activeVideo === videoId ? (
                  getVideoIframe(videoId)
                ) : (
                  getThumbnail(videoId, video.category)
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YouTubeVideoPlayer;