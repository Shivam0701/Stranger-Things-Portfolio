import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import './HeroSection.css';

const HeroSection = ({ onEnter }) => {
  const [showContent, setShowContent] = useState(false);
  const [glitchText, setGlitchText] = useState('WELCOME TO THE UPSIDE DOWN');

  useEffect(() => {
    // Title reveal animation
    setTimeout(() => setShowContent(true), 500);

    // Glitch effect on title
    const glitchInterval = setInterval(() => {
      const glitchChars = ['W', 'E', 'L', 'C', 'O', 'M', 'E', ' ', 'T', 'O', ' ', 'T', 'H', 'E', ' ', 'U', 'P', 'S', 'I', 'D', 'E', ' ', 'D', 'O', 'W', 'N'];
      const randomGlitch = glitchChars.map(char => 
        Math.random() > 0.95 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : char
      ).join('');
      setGlitchText(randomGlitch);
      
      setTimeout(() => setGlitchText('WELCOME TO THE UPSIDE DOWN'), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1709734130802-6308c015ac76?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcmVkJTIwZm9nfGVufDB8fHx8MTc2Njk4MjQxOHww&ixlib=rb-4.1.0&q=85)'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-transparent to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {showContent && (
          <>
            <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 tracking-wider">
              <span className="glitch-text" data-text={glitchText}>
                {glitchText}
              </span>
            </h1>
            
            <div className="hero-subtitle space-y-4 mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-red-500 tracking-wide neon-text">
                SHIVAM RAJ
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 tracking-widest font-mono">
                FULL STACK DEVELOPER & CYBERSECURITY EXPLORER
              </p>
            </div>

            <Button
              onClick={onEnter}
              size="lg"
              className="hero-button text-lg px-10 py-6 bg-red-600 hover:bg-red-700 border-2 border-red-500 shadow-[0_0_30px_rgba(212,31,45,0.6)] hover:shadow-[0_0_50px_rgba(212,31,45,1)] transition-all duration-300 transform hover:scale-105"
            >
              ENTER HAWKINS
              <ChevronDown className="ml-2 animate-bounce" />
            </Button>

            {/* Flicker effect overlay */}
            <div className="flicker-overlay"></div>
          </>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-red-500 opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;