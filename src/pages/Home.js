import React from 'react';
import Navigation from '../components/Navigation';
import BlogSection from '../components/BlogSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BlogSection />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
