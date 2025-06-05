
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-gradient"></div>
      
      {/* Moving geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full border border-white/10 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full border border-orange-500/20 animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full border border-white/15 animate-float-fast"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-500/60 rounded-full blur-sm animate-pulse-glow"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-400/40 rounded-full blur-sm animate-pulse-glow-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-green-400/50 rounded-full blur-sm animate-pulse-glow-slow"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(249,115,22,0.3)" />
              <stop offset="50%" stopColor="rgba(249,115,22,0.1)" />
              <stop offset="100%" stopColor="rgba(249,115,22,0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q400,100 800,300 T1600,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M0,400 Q600,300 1200,500 T2400,400"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-draw-line-delayed"
          />
        </svg>
      </div>
      
      {/* Interactive hover effects container */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="relative w-full h-full">
            {/* Radial gradient that follows mouse */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-1000 hover:opacity-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
