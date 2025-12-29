import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mockData';
import { Button } from './ui/button';
import { toast } from '../hooks/use-toast';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleNoLiveLink = (project) => {
    toast({
      title: "🌀 PORTAL UNAVAILABLE",
      description:
        project.fallback ||
        "This project is lost somewhere in the Upside Down 😈",
      duration: 3000,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section relative py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title text-5xl md:text-7xl font-bold mb-4 text-red-500">
            CLASSIFIED MISSIONS
          </h2>
          <p className="text-xl text-gray-400 tracking-widest font-mono">
            COMPLETED OPERATIONS & EXPERIMENTS
          </p>
          <div className="section-divider mt-8"></div>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-content grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="project-image-wrapper">
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <div className="episode-badge">{project.episode}</div>
                      <div className="status-badge">{project.status}</div>
                    </div>
                    {hoveredProject === project.id && (
                      <div className="portal-effect"></div>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="project-details">
                  <h3 className="text-3xl font-bold text-red-400 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 font-mono text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-red-500 font-bold mb-2 text-sm">
                      KEY FEATURES:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-gray-400 text-xs font-mono flex gap-2"
                        >
                          <span className="text-red-500">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-tags mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-500 text-xs font-mono mb-4">
                    DURATION: {project.duration}
                  </p>

                  {/* 🔥 ACTION BUTTONS */}
                  <div className="flex gap-3">
                    {project.liveLink ? (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                      >
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleNoLiveLink(project)}
                        className="border-red-900 text-red-400 hover:bg-red-950"
                      >
                        Want to see ?
                      </Button>
                    )}

                    {project.sourceCode && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                      >
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-red-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-red-900/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProjectsSection;
