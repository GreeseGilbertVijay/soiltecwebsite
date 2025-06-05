
import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      {/* Dynamic gradient background that responds to mouse */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 animate-gradient"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(249,115,22,0.1) 0%, rgba(99,102,241,0.05) 25%, rgba(15,23,42,1) 50%)`
        }}
      ></div>
      
      {/* Secondary animated layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-orange-900/10 animate-gradient opacity-70"></div>
      
      {/* Moving geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles with enhanced animations */}
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full border-2 border-white/20 animate-float-slow shadow-2xl shadow-white/5"></div>
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full border border-orange-500/30 animate-float-medium shadow-2xl shadow-orange-500/10"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full border border-blue-400/25 animate-float-fast shadow-2xl shadow-blue-400/10"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full border border-purple-400/20 animate-float-slow shadow-xl shadow-purple-400/5"></div>
        
        {/* Rotating geometric shapes */}
        <div className="absolute top-1/4 left-1/2 w-32 h-32 border border-orange-400/40 rotate-45 animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-400/30 animate-float-fast transform rotate-12"></div>
        
        {/* Enhanced glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-orange-500/80 rounded-full blur-sm animate-pulse-glow shadow-lg shadow-orange-500/50"></div>
        <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-blue-400/60 rounded-full blur-sm animate-pulse-glow-delayed shadow-lg shadow-blue-400/40"></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-green-400/70 rounded-full blur-sm animate-pulse-glow-slow shadow-lg shadow-green-400/40"></div>
        <div className="absolute bottom-1/3 left-1/6 w-5 h-5 bg-purple-400/60 rounded-full blur-sm animate-pulse-glow shadow-lg shadow-purple-400/40"></div>
        
        {/* Enhanced floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-orange-400/60 to-blue-400/60 rounded-full animate-float-particle-${i % 3} shadow-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
        
        {/* Twinkling stars effect */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Enhanced grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="w-full h-full animate-float-slow"
            style={{
              backgroundImage: `
                linear-gradient(rgba(249,115,22,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(249,115,22,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        
        {/* Enhanced animated SVG lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(249,115,22,0.4)" />
              <stop offset="50%" stopColor="rgba(99,102,241,0.3)" />
              <stop offset="100%" stopColor="rgba(249,115,22,0)" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.4)" />
              <stop offset="50%" stopColor="rgba(249,115,22,0.2)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,200 Q400,100 800,300 T1600,200"
            stroke="url(#lineGradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M0,400 Q600,300 1200,500 T2400,400"
            stroke="url(#lineGradient2)"
            strokeWidth="1.5"
            fill="none"
            className="animate-draw-line-delayed"
          />
          <path
            d="M0,600 Q800,500 1600,700 T3200,600"
            stroke="url(#lineGradient1)"
            strokeWidth="1"
            fill="none"
            className="animate-draw-line"
            style={{ animationDelay: '4s' }}
          />
        </svg>
      </div>
      
      {/* Interactive mouse-following elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-orange-500/10 via-transparent to-transparent rounded-full transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 12}%`,
            top: `${mousePosition.y - 12}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-radial from-blue-500/8 via-transparent to-transparent rounded-full transition-all duration-1500 ease-out"
          style={{
            left: `${mousePosition.x - 8}%`,
            top: `${mousePosition.y - 8}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </div>
      
      {/* Floating bubbles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full border border-white/10 animate-float-slow"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
