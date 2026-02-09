import React from 'react';
import { ArrowLeft, Heart, MapPin, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils'; // PSR page utilities

export default function VoluntaryWork() {
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
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
                            <Heart className="w-5 h-5 text-pink-700" />
                            <span className="text-sm font-semibold text-pink-700">Community Impact</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                            Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">Social Responsibility</span> (PSR)
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Empowering young lives through the transformative practice of yoga - bringing wellness, mindfulness, and joy to children in orphanages
                        </p>
                    </div>
                </div>
            </div>

            {/* Yoga Section */}
            <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-16 space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Teaching <span className="text-[#3A6B35]">Yoga at Orphanages</span>
                </h2>

                {/* Nagpur Section */}
                <Link to="/voluntary-work/nagpur" className="block group">
                    <section className="bg-white rounded-2xl shadow-lg p-8 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-[#2D5016] mb-4 group-hover:text-pink-600 transition-colors">
                                    Teaching Yoga at Orphanages in Nagpur
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Volunteering at orphanages in Nagpur, sharing the transformative practice of yoga with children. Through regular sessions, we build physical strength, mental clarity, and emotional resilience.
                                    <span className="block mt-4 text-pink-600 font-medium flex items-center gap-2">
                                        View Details <ArrowLeft className="w-4 h-4 rotate-180" />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </section>
                </Link>

                {/* Pune Section */}
                <Link to="/voluntary-work/pune" className="block group">
                    <section className="bg-white rounded-2xl shadow-lg p-8 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-[#2D5016] mb-4 group-hover:text-green-600 transition-colors">
                                    Teaching Yoga at Orphanages in Pune
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Since June 2019, conducting dedicated yoga and mindfulness sessions at orphanages in Pune. Empowering children with tools for stress management, emotional regulation, and self-confidence.
                                    <span className="block mt-4 text-green-600 font-medium flex items-center gap-2">
                                        View Details <ArrowLeft className="w-4 h-4 rotate-180" />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </section>
                </Link>
            </div>

            {/* Technical Community Leadership Section */}
            <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24 space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Technical <span className="text-orange-600">Community Leadership</span>
                </h2>

                {/* AWS User Group UK Section */}
                <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-[#2D5016] mb-2">
                                Organiser
                            </h3>
                            <h4 className="text-xl font-semibold text-orange-600 mb-4">
                                AWS User Group UK
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                I help coordinate events aimed at sharing deep technical insights, practical case studies, and real-world AWS implementation stories. My role includes supporting speakers, especially those from underrepresented backgrounds, curating session content, and maintaining strong community engagement. This work reflects my passion for improving cloud computing literacy across all skill levels.
                            </p>
                            <a
                                href="https://www.meetup.com/awsuguk/members/?op=leaders"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                View Organisers on Meetup
                                <ExternalLink className="w-5 h-5" />
                            </a>
                            <p className="text-sm text-gray-500 mt-3 italic">
                                You can see my name as organiser on the official meetup page
                            </p>
                        </div>
                    </div>
                </section>

                {/* AWS Volunteering Section */}
                <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-[#2D5016] mb-2">
                                AWS GetIT Ambassador
                            </h3>
                            <h4 className="text-xl font-semibold text-blue-600 mb-4">
                                AWS Volunteering
                            </h4>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                As an AWS GetIT Ambassador, I volunteer my time to inspire and mentor students from underrepresented backgrounds, encouraging them to explore careers in technology and cloud computing. I help guide student teams through the process of designing app ideas to solve real-world problems, sharing my experience to build their confidence and digital skills.
                            </p>
                            <a
                                href="https://aws.amazon.com/education/aws-getit/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                Learn About AWS GetIT
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
