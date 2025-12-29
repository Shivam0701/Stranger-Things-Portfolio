import React, { useEffect, useRef, useState } from 'react';
import {
  FileDown,
  FlipVertical,
  AlertTriangle,
  Binary,
  Trophy,
  Award,
  Cloud,
  Code
} from 'lucide-react';
import { easterEggs, achievements, personalInfo } from '../data/mockData';
import { Button } from './ui/button';
import { toast } from '../hooks/use-toast';
import './EasterEggsSection.css';

const iconMap = {
  FileDown,
  FlipVertical,
  AlertTriangle,
  Binary,
  Trophy,
  Award,
  Cloud,
  Code
};

const EasterEggsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeEffect, setActiveEffect] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleEasterEgg = (action) => {
    switch (action) {
      case 'download': {
        // 🔥 REAL DOWNLOAD FIX
        const link = document.createElement('a');
        link.href = personalInfo.resumeLink; // /Shivam_Raj_Resume.pdf
        link.download = 'Shivam_Raj_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast({
          title: "CLASSIFIED FILE EXTRACTED",
          description: "Resume download initiated successfully.",
          duration: 3000,
        });
        break;
      }

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
          description: "Threat level: CRITICAL!",
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
      {activeEffect === 'matrix' && (
        <div className="matrix-rain">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="matrix-column"
              style={{ left: `${i * 3.33}%` }}
            >
              01010101
            </div>
          ))}
        </div>
      )}

      {activeEffect === 'alert' && (
        <div className="alert-overlay">
          <div className="alert-flash"></div>
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-red-500">HIDDEN LAB</h2>
          <p className="text-gray-400 tracking-widest font-mono">
            SECRET EXPERIMENTS & ACHIEVEMENTS
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {easterEggs.map((egg, index) => {
            const Icon = iconMap[egg.icon];
            return (
              <div key={egg.id} className="easter-egg-card">
                <Icon className="w-8 h-8 text-red-500 mb-3" />
                <h4 className="text-red-400 font-bold">{egg.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{egg.description}</p>
                <Button
                  onClick={() => handleEasterEgg(egg.action)}
                  variant="outline"
                  className="w-full border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                >
                  ACTIVATE
                </Button>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((ach) => {
            const Icon = iconMap[ach.icon];
            return (
              <div key={ach.id} className="achievement-card">
                <Icon className="w-10 h-10 text-yellow-500 mb-2" />
                <h4 className="text-yellow-400 font-bold">{ach.title}</h4>
                <p className="text-gray-400 text-xs">{ach.issuer}</p>
                <p className="text-gray-500 text-xs">{ach.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EasterEggsSection;
