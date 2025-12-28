import React from 'react';
import { ArrowLeft, Heart, Users, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function YogaOrphanages() {
    const yogaImages = [
        '/yoga-orphanage1.jpg',
        '/yoga-orphanage2.jpg',
        '/yoga-orphanage3.jpg',
        '/yoga-orphanage4.jpg',
        '/yoga-orphanage5.jpg',
        '/yoga-orphanage6.jpg'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
            {/* Hero Section */}
            <div className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#A4B494]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3A6B35]/5 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <Link
                        to="/voluntary-work"
                        className="inline-flex items-center gap-2 text-[#3A6B35] hover:text-[#2D5016] mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back to PSR</span>
                    </Link>
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                            <Heart className="w-5 h-5 text-green-700" />
                            <span className="text-sm font-semibold text-green-700">Community Service</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6">
                            Teaching <span className="text-[#3A6B35]">Yoga</span> at Orphanages
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Sharing the gift of yoga and mindfulness with children, nurturing their physical, mental, and emotional well-being through dedicated volunteer sessions
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">

                {/* Mission Statement */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12 border-2 border-green-200">
                    <div className="flex items-start gap-4 mb-4">
                        <Target className="w-8 h-8 text-green-700 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mission</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Starting in June 2019, I began volunteering at local orphanages in <strong className="text-green-700">Pune</strong> to teach yoga and mindfulness practices to children who often lack access to structured physical and mental wellness programs. Through regular early morning sessions, these children learn essential life skills that go beyond physical postures.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Yoga provides them with tools for <strong className="text-green-700">stress management</strong>, <strong className="text-green-700">emotional regulation</strong>, and <strong className="text-green-700">self-confidence</strong>—skills that are invaluable as they navigate their unique life circumstances.
                            </p>
                            <div className="bg-white rounded-xl p-6 border-l-4 border-green-600 mt-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">💚 My Passion for Community Impact</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    This volunteer work stems from my deep passion for <strong className="text-green-700">doing good for others</strong> and <strong className="text-green-700">positively impacting lives and communities</strong>. I believe that every child deserves the opportunity to develop holistically—physically, mentally, and emotionally. By sharing the gift of yoga, I aim to empower these children with lifelong tools for well-being, resilience, and success, while contributing to building a healthier, more mindful community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impact Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-green-700" />
                        </div>
                        <h3 className="text-3xl font-bold text-green-700 mb-2">15+</h3>
                        <p className="text-gray-600">Children Impacted</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-8 h-8 text-blue-700" />
                        </div>
                        <h3 className="text-3xl font-bold text-blue-700 mb-2">Weekly</h3>
                        <p className="text-gray-600">Regular Sessions</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-purple-700" />
                        </div>
                        <h3 className="text-3xl font-bold text-purple-700 mb-2">Holistic</h3>
                        <p className="text-gray-600">Mind-Body Wellness</p>
                    </div>
                </div>

                {/* What We Practice */}
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Practice</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-l-4 border-green-500 pl-6">
                            <h3 className="text-xl font-bold text-green-900 mb-3">🧘 Asanas (Postures)</h3>
                            <p className="text-gray-700 mb-2">Age-appropriate yoga postures to improve:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Flexibility and strength</li>
                                <li>Body awareness and coordination</li>
                                <li>Physical fitness and stamina</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-6">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">🌬️ Pranayama (Breathing)</h3>
                            <p className="text-gray-700 mb-2">Breathing techniques that help with:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Stress and anxiety management</li>
                                <li>Emotional regulation</li>
                                <li>Improved focus and concentration</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-purple-500 pl-6">
                            <h3 className="text-xl font-bold text-purple-900 mb-3">🧠 Meditation & Mindfulness</h3>
                            <p className="text-gray-700 mb-2">Mindfulness practices for:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Mental clarity and calmness</li>
                                <li>Self-awareness and confidence</li>
                                <li>Better sleep and relaxation</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-6">
                            <h3 className="text-xl font-bold text-orange-900 mb-3">🎯 Life Skills</h3>
                            <p className="text-gray-700 mb-2">Essential skills including:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Discipline and routine building</li>
                                <li>Teamwork and cooperation</li>
                                <li>Positive thinking and resilience</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Moments from Our Sessions</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {yogaImages.map((image, index) => (
                            <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src={image}
                                    alt={`Yoga session at orphanage ${index + 1}`}
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-6 italic">
                        Sessions conducted during June-July 2019 • Early morning yoga classes at orphanage, Pune
                    </p>
                </div>

                {/* The Impact */}
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 border-2 border-green-300">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Impact</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            <strong className="text-green-700">Building Confidence:</strong> Many children who initially felt hesitant gradually developed confidence in their abilities, not just in yoga but in approaching new challenges in life.
                        </p>
                        <p>
                            <strong className="text-blue-700">Emotional Well-being:</strong> The breathing and meditation practices gave children healthy tools to process emotions, manage stress, and find inner peace despite difficult circumstances.
                        </p>
                        <p>
                            <strong className="text-purple-700">Physical Health:</strong> Regular yoga practice improved the children's physical fitness, posture, flexibility, and overall health, contributing to their holistic development.
                        </p>
                        <p>
                            <strong className="text-orange-700">Community & Connection:</strong> Group sessions fostered a sense of community, teaching children to support one another and work together harmoniously.
                        </p>
                    </div>
                    <div className="mt-8 text-center">
                        <blockquote className="text-xl font-semibold text-gray-800 italic">
                            "Yoga is not just about physical postures—it's about giving these children tools for life, empowering them to find strength, peace, and resilience within themselves."
                        </blockquote>
                    </div>
                </div>

            </div>
        </div>
    );
}
