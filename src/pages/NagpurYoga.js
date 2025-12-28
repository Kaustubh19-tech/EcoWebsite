import React from 'react';
import { ArrowLeft, Heart, Users, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function NagpurYoga() {
    const voluntaryImages = [
        '/voluntary-work-1.jpg',
        '/voluntary-work-2.jpg',
        '/voluntary-work-3.jpg',
        '/voluntary-work-4.jpg',
        '/voluntary-work-5.jpg',
        '/voluntary-work-6.jpg',
        '/voluntary-work-7.jpg'
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
                            <Heart className="w-5 h-5 text-pink-700" />
                            <span className="text-sm font-semibold text-pink-700">Nagpur • Community Impact</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                            Teaching <span className="text-[#3A6B35]">Yoga</span> at Orphanages in Nagpur
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Empowering young lives through the transformative practice of yoga - bringing wellness, mindfulness, and joy to children in orphanages across Nagpur
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">

                {/* Mission Statement */}
                <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-8 mb-12 border-2 border-pink-200 shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                        <Target className="w-8 h-8 text-pink-700 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Heart of Service</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                As a dedicated yoga instructor, I volunteer my time at orphanages in <strong className="text-pink-700">Nagpur</strong>, sharing the ancient wisdom of yoga with children who need it most. This voluntary work is driven by a profound passion for making a positive difference in young lives.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Through regular yoga sessions, I help these children discover inner strength, develop self-confidence, and learn valuable tools for <strong className="text-purple-700">emotional regulation</strong> and <strong className="text-purple-700">stress management</strong>. Each session is an opportunity to nurture not just their bodies, but their minds and spirits.
                            </p>
                            <div className="bg-white rounded-xl p-6 border-l-4 border-pink-600 mt-6 shadow-md">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-pink-600" />
                                    My Passion for Community Impact
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    This work is a reflection of my commitment to <strong className="text-pink-700">community service</strong> and my belief that every child deserves access to holistic wellness. By teaching yoga, I aim to empower these young souls with lifelong skills for physical health, mental clarity, and emotional resilience—creating ripples of positive change that extend far beyond the mat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impact Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 shadow-xl text-center transform hover:scale-105 transition-transform duration-300 border-t-4 border-pink-500">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-pink-700" />
                        </div>
                        <h3 className="text-3xl font-bold text-pink-700 mb-2">20+</h3>
                        <p className="text-gray-600 font-medium">Children Empowered</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-xl text-center transform hover:scale-105 transition-transform duration-300 border-t-4 border-purple-500">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-8 h-8 text-purple-700" />
                        </div>
                        <h3 className="text-3xl font-bold text-purple-700 mb-2">Regular</h3>
                        <p className="text-gray-600 font-medium">Weekly Sessions</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-xl text-center transform hover:scale-105 transition-transform duration-300 border-t-4 border-blue-500">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-blue-700" />
                        </div>
                        <h3 className="text-3xl font-bold text-blue-700 mb-2">Holistic</h3>
                        <p className="text-gray-600 font-medium">Development Focus</p>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Moments of <span className="text-pink-600">Joy & Growth</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {voluntaryImages.map((image, index) => (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500"
                            >
                                <img
                                    src={image}
                                    alt={`Voluntary yoga session at orphanage in Nagpur - ${index + 1}`}
                                    className="w-full h-72 object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-500 text-sm mt-6 italic">
                        ✨ Voluntary yoga sessions at orphanage, Nagpur ✨
                    </p>
                </div>

                {/* What We Practice */}
                <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        What We <span className="text-[#3A6B35]">Practice Together</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-pink-50 to-white border-l-4 border-pink-500 pl-6 p-4 rounded-lg">
                            <h3 className="text-xl font-bold text-pink-900 mb-3">🧘‍♀️ Yoga Asanas</h3>
                            <p className="text-gray-700 mb-2">Age-appropriate postures for:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Physical strength and flexibility</li>
                                <li>Better posture and coordination</li>
                                <li>Overall fitness and vitality</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-white border-l-4 border-purple-500 pl-6 p-4 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-900 mb-3">🌬️ Breathing Techniques</h3>
                            <p className="text-gray-700 mb-2">Pranayama practices for:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Calming the mind and reducing stress</li>
                                <li>Enhanced focus and concentration</li>
                                <li>Emotional balance and regulation</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 pl-6 p-4 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">🧠 Mindfulness & Meditation</h3>
                            <p className="text-gray-700 mb-2">Meditation practices for:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Mental clarity and inner peace</li>
                                <li>Self-awareness and confidence</li>
                                <li>Better sleep and relaxation</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-white border-l-4 border-green-500 pl-6 p-4 rounded-lg">
                            <h3 className="text-xl font-bold text-green-900 mb-3">🎯 Life Values</h3>
                            <p className="text-gray-700 mb-2">Teaching essential values:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Discipline and dedication</li>
                                <li>Compassion and kindness</li>
                                <li>Resilience and positive thinking</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Personal Reflection */}
                <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-2xl p-8 border-2 border-pink-300 shadow-xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Transformative Power of Service</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            <strong className="text-pink-700">Building Confidence:</strong> Witnessing shy children transform into confident individuals who believe in their abilities is one of the most rewarding aspects of this voluntary work.
                        </p>
                        <p>
                            <strong className="text-purple-700">Creating Safe Spaces:</strong> Our yoga sessions provide a safe, nurturing environment where children can express themselves, learn, and grow without judgment.
                        </p>
                        <p>
                            <strong className="text-blue-700">Holistic Development:</strong> Beyond physical fitness, these sessions nurture emotional intelligence, mental resilience, and spiritual awareness—essential tools for navigating life's challenges.
                        </p>
                    </div>
                    <div className="mt-8 text-center">
                        <blockquote className="text-xl font-semibold text-gray-800 italic">
                            "Through yoga, we plant seeds of wellness, compassion, and self-belief in young hearts—seeds that will blossom throughout their lives."
                        </blockquote>
                        <p className="text-sm text-gray-600 mt-4">- Dedicated to the children of Nagpur 💚</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
