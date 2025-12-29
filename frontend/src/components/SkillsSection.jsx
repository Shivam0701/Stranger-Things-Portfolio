import React, { useEffect, useRef, useState } from 'react';
import { Code2, Box, Database, Users } from 'lucide-react';
import { skills } from '../data/mockData';
import './SkillsSection.css';

const iconMap = {
  Code2: Code2,
  Box: Box,
  Database: Database,
  Users: Users
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="skills-section relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1758876569703-ea9b21463691)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/85"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title text-5xl md:text-7xl font-bold mb-4 text-red-500">
            {skills.title}
          </h2>
          <p className="text-xl text-gray-400 tracking-widest font-mono">
            {skills.subtitle}
          </p>
          <div className="section-divider mt-8"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.categories.map((category, catIndex) => {
            const IconComponent = iconMap[category.icon];
            return (
              <div
                key={catIndex}
                className={`skill-category ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${catIndex * 0.2}s` }}
              >
                <div className="skill-category-card p-6 bg-black/70 border-2 border-red-900/50 rounded-lg backdrop-blur-sm hover:border-red-600 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="icon-wrapper">
                      <IconComponent className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-400">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-mono text-sm">
                            {skill.name}
                          </span>
                          <span className="text-red-400 font-mono text-sm font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="energy-meter">
                          <div
                            className="energy-fill"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              animationDelay: `${catIndex * 0.2 + skillIndex * 0.1}s`
                            }}
                          >
                            <div className="energy-glow"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative grid overlay */}
      <div className="grid-overlay"></div>
    </section>
  );
};

export default SkillsSection;