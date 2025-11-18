import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('journey');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['journey', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 80 && rect.bottom >= 80;
        }
        return false;
      });
      if (current && current !== activeSection) {
        setActiveSection(current);
      } else if (!current && window.scrollY < 80) {
        setActiveSection('journey');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'journey', label: 'GreenHome', type: 'scroll' },
    { id: 'myquest', label: 'My Quest', type: 'link' },
    { id: 'projects', label: 'Projects', type: 'link' },
    { id: 'treasure', label: 'Treasure', type: 'link' },
    { id: 'contact', label: 'Contact', type: 'scroll' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('journey')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-3xl font-bold text-[#3A6B35] block">
                Kaustubh Ramekar
              </span>
              <span className="text-sm font-medium text-[#2D5016] block">
                AI Environmentalist
              </span>
            </div>
          </button>
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={
                    item.id === 'myquest' 
                      ? createPageUrl('MyQuest') 
                      : item.id === 'projects'
                      ? createPageUrl('Projects')
                      : createPageUrl('Treasure')
                  }
                  className="px-4 py-2 rounded-full text-sm font-medium text-[#2C2C2C] hover:bg-[#A4B494]/20 hover:text-[#2D5016] transition-all duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-[#3A6B35] text-white shadow-md'
                      : 'text-[#2C2C2C] hover:bg-[#A4B494]/20 hover:text-[#2D5016]'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

