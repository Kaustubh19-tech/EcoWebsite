import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function MyQuestSection() {
  return (
    <section id="myquest-section" className="py-20 px-6 bg-[#F5F7F0]">
      <div className="max-w-7xl mx-auto">
        <Link
          to={createPageUrl('MyQuest')}
          className="block bg-white rounded-2xl p-12 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-[#2D5016] mb-4">My Quest</h2>
              <p className="text-lg text-gray-600">
                Explore my journey for a sustainable future from 2002 to 2025 - a timeline of achievements, milestones, and impactful contributions
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


