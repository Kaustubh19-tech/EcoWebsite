import React from 'react';
import { BookOpen, Newspaper, FileText, Heart, Sparkles, Leaf } from 'lucide-react';

export default function Grade9EnvModal({ onClose }) {
    const stats = [
        { value: '60+', label: 'Newspapers', icon: Newspaper },
        { value: '25+', label: 'Magazines & Comics', icon: FileText },
        { value: '10+', label: 'Environmental Books', icon: BookOpen },
        { value: '95+', label: 'Total Sources', icon: Sparkles }
    ];

    const topics = [
        { title: 'Nature Conservation', icon: Leaf, description: 'Articles and insights on protecting natural habitats and ecosystems' },
        { title: 'Sustainability', icon: Sparkles, description: 'Stories and research on sustainable living and practices' },
        { title: 'Biodiversity', icon: Heart, description: 'Content highlighting the importance of ecological diversity' },
        { title: 'Flora & Fauna Protection', icon: Leaf, description: 'Materials emphasising wildlife and plant conservation' }
    ];

    return (
        <div className="p-8 lg:p-12">
            {/* Header */}
            <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C2956E]/20 to-[#A67C52]/20 rounded-full mb-4">
                    <div className="w-2 h-2 bg-[#C2956E] rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-[#A67C52]">9th Grade Environmental Project</span>
                </div>
                <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
                    Environmental Education Through Research & Curation
                </h2>
                <p className="text-lg text-gray-600">
                    A comprehensive study that ignited my passion for environmental conservation
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#C2956E]/10 to-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                        <stat.icon className="w-8 h-8 text-[#C2956E] mx-auto mb-3" />
                        <div className="text-3xl font-bold text-[#C2956E] mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Project Story */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#A67C52] mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    The Project Journey
                </h3>
                <div className="bg-gradient-to-r from-[#C2956E]/5 to-[#A67C52]/5 rounded-xl p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        In 9th grade, I completed an extensive environmental education project that involved comprehensive research and curation. This wasn't just a school assignment—it became a labour of love that would shape my environmental consciousness for years to come.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        I reviewed over <strong className="text-[#C2956E]">60 newspapers</strong>, <strong className="text-[#C2956E]">25+ magazines and comics</strong>, and more than <strong className="text-[#C2956E]">10 environmental books</strong> to collect articles, pictures, poems, and news clippings emphasising the importance of nature conservation, sustainability, biodiversity, and the protection of flora and fauna.
                    </p>
                </div>
            </div>

            {/* Themes Covered */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#A67C52] mb-6">Key Themes Explored</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {topics.map((topic, index) => (
                        <div key={index} className="bg-white border-2 border-[#C2956E]/20 rounded-xl p-6 hover:border-[#C2956E]/40 transition-all hover:shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#C2956E] to-[#A67C52] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <topic.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#2C2C2C] mb-2">{topic.title}</h4>
                                    <p className="text-sm text-gray-600">{topic.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Curation Process */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#A67C52] mb-4 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Curation & Presentation
                </h3>
                <div className="bg-gradient-to-br from-[#C2956E] to-[#A67C52] text-white rounded-xl p-8">
                    <p className="text-lg leading-relaxed mb-4">
                        I carefully organised and pasted these curated materials into a drawing book to create a well-presented project. Each page was thoughtfully designed to showcase the interconnectedness of environmental issues and solutions.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-2xl font-bold mb-1">Articles</div>
                            <div className="text-sm opacity-90">News clippings & features</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-2xl font-bold mb-1">Pictures</div>
                            <div className="text-sm opacity-90">Visual documentation</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-2xl font-bold mb-1">Poems</div>
                            <div className="text-sm opacity-90">Environmental verses</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Cover */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#A67C52] mb-6 flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    The Original Project
                </h3>
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#C2956E]/20">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <img
                                src="/grade9-env-cover.jpg"
                                alt="Environmental Education Project Cover"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Translation */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-[#A67C52] mb-3">Title (Hindi/Marathi):</h4>
                                <p className="text-3xl font-bold text-[#2C2C2C] mb-4" style={{ fontFamily: 'serif' }}>
                                    पर्यावरण शिक्षण
                                </p>
                                <h4 className="text-lg font-bold text-[#A67C52] mb-3">English Translation:</h4>
                                <p className="text-3xl font-bold text-[#C2956E]">
                                    Environmental Education
                                </p>
                            </div>
                            <div className="bg-[#C2956E]/5 rounded-xl p-6">
                                <h4 className="text-sm font-bold text-[#A67C52] mb-2">Author:</h4>
                                <p className="text-xl font-semibold text-[#2C2C2C]">
                                    Kaustubh Shrikant Ramekar
                                </p>
                            </div>
                            <p className="text-sm text-gray-600 italic">
                                This carefully preserved project book contains months of dedicated research, showcasing hand-curated articles, illustrations, and environmental insights from various sources.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Pages - Zigzag Layout */}
            <div className="mb-10 space-y-8">
                <h3 className="text-2xl font-bold text-[#A67C52] mb-6 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Inside the Project
                </h3>

                {/* Page 1 - Translation LEFT, Image RIGHT */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#C2956E]/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Translation */}
                        <div className="space-y-4 order-2 md:order-1">
                            <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-[#A67C52] mb-4">Project Details (Page 1):</h4>
                                <div className="space-y-3 text-gray-700">
                                    <p><strong>Name:</strong> Kaustubh Shrikant Ramekar</p>
                                    <p><strong>Subject:</strong> Environmental Education Through Pictures</p>
                                    <p><strong>Class:</strong> 9th B</p>
                                    <p><strong>School:</strong> Somalwar High School, Khamla, Nagpur</p>
                                    <p><strong>Objective:</strong> To understand various environmental topics through different media sources</p>
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow order-1 md:order-2">
                            <img
                                src="/grade9-page1.jpg"
                                alt="Project details page"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Page 2 - Image LEFT, Translation RIGHT */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#C2956E]/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <img
                                src="/grade9-page2.jpg"
                                alt="Environmental poems page"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Translation */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-[#A67C52] mb-4">Environmental Poems (Page 2):</h4>
                                <div className="space-y-3 text-gray-700">
                                    <div>
                                        <p className="font-semibold text-[#C2956E] mb-2">Content Includes:</p>
                                        <ul className="list-disc list-inside space-y-1 text-sm">
                                            <li>Poem on Environmental Conservation</li>
                                            <li>Verses about protecting trees and nature</li>
                                            <li>Messages on sustainability and eco-friendly living</li>
                                            <li>Illustrated with hand-drawn decorative borders featuring leaves and vines</li>
                                        </ul>
                                    </div>
                                    <p className="text-sm italic">
                                        This page showcases beautifully illustrated environmental poetry collected from various sources, demonstrating the artistic and literary aspects of environmental awareness.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legacy */}
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#A67C52] mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6" />
                    A Treasured Legacy
                </h3>
                <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 border-l-4 border-[#C2956E] rounded-r-xl p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        My mother, a retired school principal and sustainability advocate, has preserved this project to this day. She recognised the tremendous effort I invested in it and understood that it represented more than just academic work—it was the beginning of my environmental journey.
                    </p>
                    <p className="text-gray-700 leading-relaxed italic">
                        "This project wasn't just about collecting information; it was about understanding my responsibility to the planet. Every article pasted, every poem included, deepened my commitment to environmental stewardship."
                    </p>
                </div>
            </div>

            {/* Close Button */}
            <div className="pt-6 border-t border-gray-200">
                <button
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-[#C2956E] to-[#A67C52] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
