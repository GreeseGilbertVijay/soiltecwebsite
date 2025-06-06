
import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Layer 1: Color-shifting gradient background */}
      <div className="absolute inset-0 animate-gradient-shift bg-gradient-dynamic"></div>
      
      {/* Layer 2: Secondary gradient with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-800/20 to-orange-900/25 animate-gradient-shift-delayed"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      ></div>
      
      {/* Layer 3: Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full border border-white/8 animate-diagonal-float-slow"></div>
        <div className="absolute top-60 right-32 w-64 h-64 rounded-full border border-orange-400/12 animate-diagonal-float-medium"></div>
        <div className="absolute bottom-40 left-1/3 w-96 h-96 rounded-full border border-blue-400/10 animate-diagonal-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full border border-purple-400/15 animate-diagonal-float-reverse"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/2 w-32 h-32 border border-orange-400/20 rotate-45 animate-geometric-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-blue-400/15 animate-geometric-float-reverse transform rotate-12"></div>
        <div className="absolute top-3/4 left-1/6 w-28 h-28 border border-green-400/18 animate-geometric-float-slow transform rotate-45"></div>
        
        {/* Hexagons */}
        <div className="absolute top-1/6 right-1/6 w-20 h-20 border border-purple-400/12 animate-hexagon-float" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}></div>
        <div className="absolute bottom-1/6 left-2/3 w-16 h-16 border border-orange-400/15 animate-hexagon-float-reverse" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}}></div>
      </div>
      
      {/* Layer 4: Floating particles with diagonal movement */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-orange-400/30 to-blue-400/30 rounded-full animate-particle-diagonal-${i % 4}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>
      
      {/* Layer 5: Twinkling stars with zoom effect */}
      <div className="absolute inset-0 animate-zoom-cycle">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
      
      {/* Layer 6: Floating bubbles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm animate-bubble-float"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${25 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
      
      {/* Layer 7: Subtle grid with parallax */}
      <div 
        className="absolute inset-0 opacity-[0.03] animate-grid-shift"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Layer 8: Animated SVG paths */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(249,115,22,0.3)" />
            <stop offset="50%" stopColor="rgba(99,102,241,0.2)" />
            <stop offset="100%" stopColor="rgba(249,115,22,0)" />
          </linearGradient>
          <linearGradient id="pathGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
            <stop offset="50%" stopColor="rgba(249,115,22,0.15)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,300 Q500,150 1000,400 T2000,300"
          stroke="url(#pathGradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-path-draw"
        />
        <path
          d="M0,500 Q700,350 1400,600 T2800,500"
          stroke="url(#pathGradient2)"
          strokeWidth="1.5"
          fill="none"
          className="animate-path-draw-delayed"
        />
      </svg>
      
      {/* Layer 9: Mouse-following interactive elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-40 h-40 bg-gradient-radial from-orange-500/8 via-orange-500/4 to-transparent rounded-full transition-all duration-1000 ease-out animate-pulse-gentle"
          style={{
            left: `${mousePosition.x - 10}%`,
            top: `${mousePosition.y - 10}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-24 h-24 bg-gradient-radial from-blue-500/6 via-blue-500/3 to-transparent rounded-full transition-all duration-1500 ease-out"
          style={{
            left: `${mousePosition.x - 6}%`,
            top: `${mousePosition.y - 6}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      
      {/* Layer 10: Moving light rays */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-orange-500/8 to-transparent h-px animate-ray-sweep"
            style={{
              width: `${300 + Math.random() * 400}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
