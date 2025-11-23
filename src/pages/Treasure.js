import React from 'react';
import { ArrowLeft, Book, Award, Camera, Users } from 'lucide-react';
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
        <Link to="/treasure/british-library" className="block group">
          <section id="british-library" className="bg-white rounded-2xl shadow-lg p-8 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Book className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#2D5016] mb-4 group-hover:text-[#3A6B35] transition-colors">British Library</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Over the past year, I have been conducting independent research at the British Library, exploring innovative applications of artificial intelligence to further sustainability initiatives.
                  <span className="block mt-4 text-[#3A6B35] font-medium flex items-center gap-2">
                    Read more <ArrowLeft className="w-4 h-4 rotate-180" />
                  </span>
                </p>
              </div>
            </div>
          </section>
        </Link>

        {/* The Royal Society Section */}
        <Link to="/treasure/royal-society" className="block group">
          <section id="royal-society" className="bg-white rounded-2xl shadow-lg p-8 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#2D5016] mb-4 group-hover:text-[#3A6B35] transition-colors">The Royal Society</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Exploring connections and contributions to scientific advancement and sustainability through engagement with one of the world's oldest and most prestigious scientific institutions.
                  <span className="block mt-4 text-[#3A6B35] font-medium flex items-center gap-2">
                    Read more <ArrowLeft className="w-4 h-4 rotate-180" />
                  </span>
                </p>
              </div>
            </div>
          </section>
        </Link>

        {/* Eco Veterans Section */}
        <Link to="/treasure/eco-veterans" className="block group">
          <section id="eco-veterans" className="bg-white rounded-2xl shadow-lg p-8 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#2D5016] mb-4 group-hover:text-[#3A6B35] transition-colors">Eco Veterans</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Honoring the pioneers and dedicated individuals who have paved the way for environmental conservation and sustainable practices.
                  <span className="block mt-4 text-[#3A6B35] font-medium flex items-center gap-2">
                    Read more <ArrowLeft className="w-4 h-4 rotate-180" />
                  </span>
                </p>
              </div>
            </div>
          </section>
        </Link>

        {/* My Clicks Section */}
        <Link to="/treasure/my-clicks" className="block group">
          <section id="my-clicks" className="bg-white rounded-2xl shadow-lg p-8 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#2D5016] mb-4 group-hover:text-[#3A6B35] transition-colors">My Clicks</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A vibrant collection celebrating nature's beauty, each scene inspiring to cherish, protect, and work towards preserving the wonders of the natural world.
                  <span className="block mt-4 text-[#3A6B35] font-medium flex items-center gap-2">
                    Read more <ArrowLeft className="w-4 h-4 rotate-180" />
                  </span>
                </p>
              </div>
            </div>
          </section>
        </Link>

      </div>
    </div>
  );
}


