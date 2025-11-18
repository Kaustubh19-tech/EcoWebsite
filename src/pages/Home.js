import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import MyQuestSection from '../components/MyQuestSection';
import TreasureSection from '../components/TreasureSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <MyQuestSection />
      <ProjectsSection />
      <TreasureSection />
      <ContactSection />
    </div>
  );
}

