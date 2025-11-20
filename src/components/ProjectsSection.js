import React, { useState } from 'react';
import { Recycle, Droplets, Wind, Users } from 'lucide-react';
import ProjectDetailsModal from './ProjectDetailsModal';

export default function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      icon: Recycle,
      title: "Pune's Waste Management Project",
      description: "Led a comprehensive three-month study of Pune's waste management ecosystem, surveying 500+ households and engaging with waste pickers, municipal workers, and recycling plants. Achieved 75% awareness rate in waste segregation and identified critical improvements for the city's circular economy.",
      impact: "500+ households surveyed",
      color: "from-[#3A6B35] to-[#2D5016]",
      hasDetails: true
    },
    {
      icon: Droplets,
      title: "Clean Water Access",
      description: "Implementing rainwater harvesting systems and water purification solutions in rural communities, providing clean water to 3,000+ families.",
      impact: "3,000+ families served",
      color: "from-[#4A7C9C] to-[#2D5B6E]",
      hasDetails: false
    },
    {
      icon: Wind,
      title: "Renewable Energy Drive",
      description: "Installing solar panels and wind turbines in off-grid villages, bringing sustainable energy to remote areas and reducing carbon footprint.",
      impact: "15 villages powered",
      color: "from-[#C2956E] to-[#A67C52]",
      hasDetails: false
    },
    {
      icon: Users,
      title: "Zero Waste Communities",
      description: "Establishing community composting centers and recycling hubs, diverting 10 tons of waste from landfills monthly through education and infrastructure.",
      impact: "10 tons waste diverted/month",
      color: "from-[#8B9D83] to-[#6B7D63]",
      hasDetails: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#F5F3ED]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 bg-[#3A6B35] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#2D5016]">Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            Projects Making a Difference
          </h2>
          <p className="text-lg text-gray-600">
            Discover the initiatives bringing positive environmental change to communities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1 bg-gradient-to-r from-[#3A6B35] to-[#A4B494] rounded-full"></div>
                  <span className="text-sm font-semibold text-[#2D5016]">{project.impact}</span>
                </div>
                {project.hasDetails && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-[#3A6B35] text-sm font-extrabold hover:underline transition-all hover:text-[#2D5016]"
                  >
                    Explore here →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
