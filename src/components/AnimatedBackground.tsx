
import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient background with automatic movement */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 animate-gradient"></div>
      
      {/* Secondary animated layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-orange-900/20 animate-gradient opacity-70"></div>
      
      {/* Moving geometric shapes - smaller and more subtle */}
      <div className="absolute inset-0">
        {/* Floating circles with automatic movement */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-white/10 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full border border-orange-500/20 animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/3 w-56 h-56 rounded-full border border-blue-400/15 animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full border border-purple-400/15 animate-float-slow"></div>
        
        {/* Additional floating shapes */}
        <div className="absolute top-1/4 left-1/2 w-24 h-24 border border-orange-400/25 rotate-45 animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-blue-400/20 animate-float-fast transform rotate-12"></div>
        
        {/* Small glowing orbs that move automatically */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-500/60 rounded-full blur-sm animate-pulse-glow"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-400/50 rounded-full blur-sm animate-pulse-glow-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-green-400/60 rounded-full blur-sm animate-pulse-glow-slow"></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-purple-400/50 rounded-full blur-sm animate-pulse-glow"></div>
        
        {/* Floating particles - smaller and more numerous */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-orange-400/40 to-blue-400/40 rounded-full animate-float-particle-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
        
        {/* Twinkling stars effect */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 6}s`,
            }}
          />
        ))}
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full animate-float-slow"
            style={{
              backgroundImage: `
                linear-gradient(rgba(249,115,22,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(249,115,22,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>
        
        {/* Animated SVG lines */}
        <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(249,115,22,0.2)" />
              <stop offset="50%" stopColor="rgba(99,102,241,0.15)" />
              <stop offset="100%" stopColor="rgba(249,115,22,0)" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
              <stop offset="50%" stopColor="rgba(249,115,22,0.1)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,200 Q400,100 800,300 T1600,200"
            stroke="url(#lineGradient1)"
            strokeWidth="1"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M0,400 Q600,300 1200,500 T2400,400"
            stroke="url(#lineGradient2)"
            strokeWidth="0.8"
            fill="none"
            className="animate-draw-line-delayed"
          />
        </svg>
      </div>
      
      {/* Very subtle mouse-following elements - much smaller */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-32 h-32 bg-gradient-radial from-orange-500/5 via-transparent to-transparent rounded-full transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x - 8}%`,
            top: `${mousePosition.y - 8}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        <div 
          className="absolute w-24 h-24 bg-gradient-radial from-blue-500/3 via-transparent to-transparent rounded-full transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 6}%`,
            top: `${mousePosition.y - 6}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </div>
      
      {/* Small floating bubbles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full border border-white/5 animate-float-slow"
            style={{
              width: `${15 + Math.random() * 25}px`,
              height: `${15 + Math.random() * 25}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>
      
      {/* Moving light rays */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-orange-500/10 to-transparent h-px animate-float-medium"
            style={{
              width: `${200 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
