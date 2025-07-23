import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + (Math.random() * 3 + 1); 
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Academic Seal/Logo */}
      <div className="mb-8">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="drop-shadow-md"
        >
          <defs>
            <linearGradient id="academicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a365d" />
              <stop offset="100%" stopColor="#2c5282" />
            </linearGradient>
          </defs>
          
          {/* Outer circle */}
          <circle cx="60" cy="60" r="50" fill="none" stroke="#e2e8f0" strokeWidth="2" />
          
          {/* Animated book icon */}
          <path
            d="M40 40V80C40 80 50 85 60 80C70 85 80 80 80 80V40C80 40 70 35 60 40C50 35 40 40 40 40Z"
            fill="url(#academicGradient)"
            className="origin-center animate-pulse"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Pages animation */}
          <path
            d="M50 45V75C50 75 55 78 60 75C65 78 70 75 70 75V45C70 45 65 48 60 45C55 48 50 45 50 45Z"
            fill="white"
            fillOpacity="0.8"
            stroke="#e2e8f0"
            strokeWidth="0.5"
          />
          
          {/* Progress ring */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="#3182ce"
            strokeWidth="3"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
            className="transition-all duration-300 ease-out"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* College name */}
      <h1 className="mb-2 text-2xl font-bold text-gray-800">Catalyst College</h1>
      <p className="mb-8 text-gray-600">Loading Academic Resources</p>

      {/* Minimal progress bar */}
      <div className="w-64 max-w-full px-4">
        <div className="relative h-1 w-full rounded-full bg-gray-200">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span>Loading</span>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Subtle academic elements */}
      <div className="absolute bottom-8 flex space-x-6 opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4" />
          <path d="m16.24 7.76 2.83-2.83" />
          <path d="M18 12h4" />
          <path d="m16.24 16.24 2.83 2.83" />
          <path d="M12 18v4" />
          <path d="m7.76 16.24-2.83 2.83" />
          <path d="M6 12H2" />
          <path d="m7.76 7.76-2.83-2.83" />
        </svg>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-pulse {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;