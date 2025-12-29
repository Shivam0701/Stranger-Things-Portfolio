import React, { useEffect, useRef, useState } from 'react';
import { aboutStory } from '../data/mockData';
import './AboutSection.css';

const AboutSection = () => {
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
      id="about"
      className="about-section relative py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title text-5xl md:text-7xl font-bold mb-4 text-red-500">
            {aboutStory.title}
          </h2>
          <p className="text-xl text-gray-400 tracking-widest font-mono">
            {aboutStory.subtitle}
          </p>
          <div className="section-divider mt-8"></div>
        </div>

        {/* Story Content */}
        <div className={`story-content mb-20 ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="story-card p-8 md:p-12 bg-black/60 border-2 border-red-900/50 rounded-lg backdrop-blur-sm">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-mono">
              {aboutStory.story}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <h3 className={`text-3xl md:text-4xl font-bold text-center mb-12 text-red-400 ${isVisible ? 'fade-in-up delay-400' : 'opacity-0'}`}>
            THE JOURNEY THROUGH TIME
          </h3>
          
          <div className="timeline relative">
            {aboutStory.highlights.map((highlight, index) => (
              <div
                key={index}
                className={`timeline-item ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="year-badge">{highlight.year}</div>
                  <h4 className="text-2xl font-bold text-red-400 mb-2">
                    {highlight.event}
                  </h4>
                  <p className="text-gray-400 font-mono">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-900/30 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-red-900/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default AboutSection;