import React from 'react';
import Navigation from '../components/Navigation';
import ProjectsSection from '../components/ProjectsSection';

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <div className="pt-20">
                <ProjectsSection />
            </div>
        </div>
    );
}
