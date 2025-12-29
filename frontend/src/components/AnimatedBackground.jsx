import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Fog layers */}
      <div className="fog fog-1"></div>
      <div className="fog fog-2"></div>
      <div className="fog fog-3"></div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}
          />
        ))}
      </div>
      
      {/* Red glow pulses */}
      <div className="glow-pulse glow-1"></div>
      <div className="glow-pulse glow-2"></div>
      <div className="glow-pulse glow-3"></div>
    </div>
  );
};

export default AnimatedBackground;