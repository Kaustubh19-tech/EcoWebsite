import React from 'react';
import { ArrowLeft, Book, Award, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function Treasure() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#A4B494]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3A6B35]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Link
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-[#3A6B35] hover:text-[#2D5016] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6">
              My <span className="text-[#3A6B35]">Treasure</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A collection of valuable experiences, achievements, and memories from my sustainability journey
            </p>
          </div>
        </div>
      </div>

      {/* Treasure Sections */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24 space-y-16">
        
        {/* British Library Section */}
        <section id="british-library" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center flex-shrink-0">
              <Book className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#2D5016] mb-4">British Library</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Over the past year, I have been conducting independent research at the British Library, exploring innovative applications of artificial intelligence to further sustainability initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* The Royal Society Section */}
        <section id="royal-society" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#2D5016] mb-4">The Royal Society</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Exploring connections and contributions to scientific advancement and sustainability through engagement with one of the world's oldest and most prestigious scientific institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Photos Section */}
        <section id="photos" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center flex-shrink-0">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#2D5016] mb-4">Photos</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A collection of memorable moments and achievements from my sustainability journey, capturing key milestones and experiences along the way.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}


