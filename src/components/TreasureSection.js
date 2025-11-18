import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function TreasureSection() {
  return (
    <section id="treasure" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Link
          to={createPageUrl('Treasure')}
          className="block bg-[#F5F7F0] rounded-2xl p-12 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Treasure</h2>
              <p className="text-lg text-gray-600">
                Explore my collection of valuable experiences, achievements, and memories from my sustainability journey
              </p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

