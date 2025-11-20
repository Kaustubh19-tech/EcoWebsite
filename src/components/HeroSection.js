
import React from 'react';
import { Sprout, Heart, Globe, Leaf, Target, Scale, Zap, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="journey" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#FAF8F3] to-white pt-12">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#A4B494]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3A6B35]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">

            <h1 className="text-5xl lg:text-7xl font-bold text-[#2C2C2C] leading-tight">
              Building a
              <span className="block text-[#3A6B35] mt-2">Sustainable Future</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Hi, I'm <span className="font-semibold text-[#2C2C2C]">Kaustubh Ramekar</span>.
              Dedicated to creating innovative solutions for climate action, conservation, and sustainable development.
              Through technology and community engagement, I'm working to make our planet greener.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt="Kaustubh Ramekar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#2C2C2C]">Mission</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Empowering communities through sustainable technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">Core Values Guide My Work</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#3A6B35] to-[#A4B494] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-[#2C2C2C] mb-2">Responsible AI</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Leveraging artificial intelligence ethically to solve environmental challenges
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B9D83] to-[#6B7D63] rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-[#2C2C2C] mb-2">Measurable Outcomes</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Data-driven approaches to track and demonstrate real environmental impact
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C2956E] to-[#A67C52] rounded-xl flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-[#2C2C2C] mb-2">Fairness & Transparency</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Open, honest communication and equitable solutions for all communities
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4A7C9C] to-[#2D5B6E] rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-[#2C2C2C] mb-2">Tech That Serves Nature</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Innovation designed to protect and restore our planet's ecosystems
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L60 45C120 40 240 30 360 25C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50H1440V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="#F5F3ED" />
        </svg>
      </div>
    </section>
  );
}

