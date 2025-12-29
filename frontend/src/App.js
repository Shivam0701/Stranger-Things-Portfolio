import React, { useState } from "react";
import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground";
import AudioToggle from "./components/AudioToggle";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import EasterEggsSection from "./components/EasterEggsSection";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleEnterHawkins = () => {
    setShowMainContent(true);
    // Smooth scroll to about section
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="App">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Audio Toggle */}
      <AudioToggle />

      {/* Hero Section - Always visible */}
      <HeroSection onEnter={handleEnterHawkins} />

      {/* Main Content - Shows after clicking Enter */}
      {showMainContent && (
        <>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EasterEggsSection />
          <ContactSection />
          <Footer />
        </>
      )}

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}

export default App;
