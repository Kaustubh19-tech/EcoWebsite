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

      // Determine active section based on scroll position
      const sections = ['journey', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust the 150px offset to be slightly below the fixed header
          return rect.top <= 80 && rect.bottom >= 80;
        }
        return false;
      });
      // Only update if a new section is found, to prevent flickering when scrolling rapidly between sections
      if (current && current !== activeSection) {
        setActiveSection(current);
      } else if (!current && window.scrollY < 80) { // If at the very top, set activeSection to 'journey'
        setActiveSection('journey');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // Depend on activeSection to prevent unnecessary re-renders of the effect

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Manually set active section after clicking a nav item
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'journey', label: 'Welcome', type: 'scroll' },
    { id: 'myquest', label: 'My Quest', type: 'link' },
    { id: 'treasure', label: 'Treasure', type: 'link' },
    { id: 'projects', label: 'Projects', type: 'scroll' },
    { id: 'linkedin', label: 'LinkedIn', type: 'external', url: 'https://www.linkedin.com/in/kr28' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('journey')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-3xl font-bold text-[#3A6B35] hidden sm:block">
              Kaustubh Ramekar
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={createPageUrl(item.id === 'myquest' ? 'MyQuest' : 'Treasure')}
                  className="px-4 py-2 rounded-full text-sm font-medium text-[#2C2C2C] hover:bg-[#A4B494]/20 hover:text-[#2D5016] transition-all duration-300"
                >
                  {item.label}
                </Link>
              ) : item.type === 'external' ? (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-medium text-[#2C2C2C] hover:bg-[#A4B494]/20 hover:text-[#2D5016] transition-all duration-300"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
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

