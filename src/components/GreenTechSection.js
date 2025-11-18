import React from 'react';
import { Wind, Zap, Recycle } from 'lucide-react';

export default function GreenTechSection() {
  return (
    <section id="insights" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2D5016] text-center mb-12">GreenTech Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Wind className="w-12 h-12 text-[#3A6B35] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2D5016] mb-2">Wind Energy</h3>
            <p className="text-gray-600">Harnessing wind power for sustainable electricity generation</p>
          </div>
          <div className="text-center">
            <Zap className="w-12 h-12 text-[#3A6B35] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2D5016] mb-2">Solar Power</h3>
            <p className="text-gray-600">Utilizing solar energy for clean and renewable power</p>
          </div>
          <div className="text-center">
            <Recycle className="w-12 h-12 text-[#3A6B35] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2D5016] mb-2">Recycling</h3>
            <p className="text-gray-600">Promoting circular economy and waste reduction</p>
          </div>
        </div>
      </div>
    </section>
  );
}


