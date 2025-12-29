import React, { useEffect, useRef, useState } from 'react';
import { FileDown, FlipVertical, AlertTriangle, Binary, Trophy, Award, Cloud, Code } from 'lucide-react';
import { easterEggs, achievements, personalInfo } from '../data/mockData';
import { Button } from './ui/button';
import { toast } from '../hooks/use-toast';
import './EasterEggsSection.css';

const iconMap = {
  FileDown: FileDown,
  FlipVertical: FlipVertical,
  AlertTriangle: AlertTriangle,
  Binary: Binary,
  Trophy: Trophy,
  Award: Award,
  Cloud: Cloud,
  Code: Code
};

const EasterEggsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeEffect, setActiveEffect] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleEasterEgg = (action) => {
    switch (action) {
      case 'download':
        toast({
          title: "ACCESSING CLASSIFIED FILES",
          description: "Resume download would start here. File ready for extraction!",
          duration: 4000,
        });
        // In production: window.open(personalInfo.resumeLink, '_blank');
        break;
      
      case 'flip':
        setActiveEffect('flip');
        document.body.style.transform = 'rotate(180deg)';
        toast({
          title: "ENTERING THE UPSIDE DOWN",
          description: "Reality has been inverted!",
          duration: 3000,
        });
        setTimeout(() => {
          document.body.style.transform = 'rotate(0deg)';
          setActiveEffect(null);
        }, 5000);
        break;
      
      case 'alert':
        setActiveEffect('alert');
        toast({
          title: "⚠️ DEMOGORGON DETECTED ⚠️",
          description: "Threat level: CRITICAL! Initiating emergency protocols!",
          duration: 4000,
        });
        setTimeout(() => setActiveEffect(null), 4000);
        break;
      
      case 'matrix':
        setActiveEffect('matrix');
        toast({
          title: "ENTERING CODE DIMENSION",
          description: "Reality.exe has stopped responding...",
          duration: 3000,
        });
        setTimeout(() => setActiveEffect(null), 8000);
        break;
      
      default:
        break;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="easter-eggs"
      className="easter-eggs-section relative py-24 px-6 overflow-hidden"
    >
      {/* Matrix rain effect */}
      {activeEffect === 'matrix' && (
        <div className="matrix-rain">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="matrix-column" style={{ left: `${i * 3.33}%`, animationDelay: `${Math.random() * 2}s` }}>
              01010101
            </div>
          ))}
        </div>
      )}

      {/* Alert effect */}
      {activeEffect === 'alert' && (
        <div className="alert-overlay">
          <div className="alert-flash"></div>
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title text-5xl md:text-7xl font-bold mb-4 text-red-500">
            HIDDEN LAB
          </h2>
          <p className="text-xl text-gray-400 tracking-widest font-mono">
            SECRET EXPERIMENTS & ACHIEVEMENTS
          </p>
          <div className="section-divider mt-8"></div>
        </div>

        {/* Easter Eggs Grid */}
        <div className="mb-20">
          <h3 className={`text-3xl font-bold text-center mb-10 text-red-400 ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`}>
            ACTIVATE SECRET PROTOCOLS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {easterEggs.map((egg, index) => {
              const IconComponent = iconMap[egg.icon];
              return (
                <div
                  key={egg.id}
                  className={`easter-egg-card ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="egg-icon-wrapper">
                    <IconComponent className="w-8 h-8 text-red-500" />
                  </div>
                  <h4 className="text-lg font-bold text-red-400 mb-2">{egg.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 font-mono">{egg.description}</p>
                  <Button
                    onClick={() => handleEasterEgg(egg.action)}
                    variant="outline"
                    size="sm"
                    className="w-full border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                  >
                    ACTIVATE
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <h3 className={`text-3xl font-bold text-center mb-10 text-red-400 ${isVisible ? 'fade-in-up delay-400' : 'opacity-0'}`}>
            BADGES & CERTIFICATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = iconMap[achievement.icon];
              return (
                <div
                  key={achievement.id}
                  className={`achievement-card ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="achievement-icon">
                    <IconComponent className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h4 className="text-base font-bold text-yellow-400 mb-1">{achievement.title}</h4>
                  <p className="text-gray-400 text-xs mb-2">{achievement.issuer}</p>
                  <p className="text-gray-500 text-xs font-mono">{achievement.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasterEggsSection;