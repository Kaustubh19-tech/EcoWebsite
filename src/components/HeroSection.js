import React from 'react';
import { Leaf } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="journey" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2D5016] leading-tight">
            Crafting Change Through Environmental Insight
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From building small science models as a child to designing tech-based sustainability projects, my path reflects a deep-rooted drive to harmonise progress with responsibility. Every step in my work aims to restore balance between human development and the natural world.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6907b5e24e4a0d5b8ade82c4/homepage_hero_image.jpg"
              alt="Kaustubh Ramekar"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                console.error('Image not found:', e.target.src);
              }}
            />
          </div>
          {/* Floating card - Mission Statement Overlay */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#2C2C2C] mb-1">Mission</p>
                <p className="text-sm text-gray-600">
                  Empowering communities through sustainable technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L60 45C120 40 240 30 360 28.3C480 26.7 600 33.3 720 35C840 36.7 960 33.3 1080 31.7C1200 30 1320 30 1380 30L1440 30V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="#F5F7F0"/>
        </svg>
      </div>
    </section>
  );
}

