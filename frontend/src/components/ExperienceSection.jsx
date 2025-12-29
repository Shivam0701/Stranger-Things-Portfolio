import React, { useEffect, useRef, useState } from 'react';
import { FileText, Clock, CheckCircle } from 'lucide-react';
import { experience } from '../data/mockData';
import './ExperienceSection.css';

const ExperienceSection = () => {
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
      id="experience"
      className="experience-section relative py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title text-5xl md:text-7xl font-bold mb-4 text-red-500">
            CLASSIFIED FILES
          </h2>
          <p className="text-xl text-gray-400 tracking-widest font-mono">
            TOP SECRET OPERATIONS
          </p>
          <div className="section-divider mt-8"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`classified-file ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Classified Header */}
              <div className="file-header">
                <div className="classified-stamp">CLASSIFIED</div>
                <h3 className="text-red-500 text-2xl font-bold tracking-widest">
                  {exp.classified}
                </h3>
              </div>

              {/* File Content */}
              <div className="file-content">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="file-detail">
                    <FileText className="w-5 h-5 text-red-500 mb-2" />
                    <p className="text-gray-500 text-xs mb-1">ORGANIZATION</p>
                    <p className="text-white font-bold">{exp.company}</p>
                  </div>
                  <div className="file-detail">
                    <Clock className="w-5 h-5 text-red-500 mb-2" />
                    <p className="text-gray-500 text-xs mb-1">DURATION</p>
                    <p className="text-white font-bold">{exp.duration}</p>
                  </div>
                  <div className="file-detail">
                    <CheckCircle className="w-5 h-5 text-red-500 mb-2" />
                    <p className="text-gray-500 text-xs mb-1">STATUS</p>
                    <p className={`font-bold ${exp.status === 'ACTIVE' ? 'text-green-500' : 'text-blue-500'}`}>
                      {exp.status}
                    </p>
                  </div>
                </div>

                <div className="role-section mb-4">
                  <h4 className="text-red-400 font-bold mb-2">ROLE: {exp.role}</h4>
                  <p className="text-gray-500 text-sm">Type: {exp.type}</p>
                </div>

                <div className="responsibilities-section">
                  <h5 className="text-red-500 font-bold mb-3 text-sm">MISSION OBJECTIVES:</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-300 text-sm font-mono">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Classified Footer */}
              <div className="file-footer">
                <div className="redacted-line"></div>
                <p className="text-gray-600 text-xs text-center">DOCUMENT ID: {exp.classified}-{exp.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background scan lines */}
      <div className="scan-lines"></div>
    </section>
  );
};

export default ExperienceSection;