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
                    <div className="grid md:grid-cols-5 gap-8 items-start">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow md:col-span-4">
                            <img
                                src="/grade9-env-cover.jpg"
                                alt="Environmental Education Project Cover"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Translation */}
                        <div className="space-y-4 md:col-span-1">
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
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        {/* Translation */}
                        <div className="space-y-4 order-2 md:order-1 md:col-span-1">
                            <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-[#A67C52] mb-4">Project Details (Page 1):</h4>
                                <div className="space-y-3 text-gray-700">
                                    <p><strong>Name:</strong> Kaustubh Shrikant Ramekar</p>
                                    <p><strong>Subject:</strong> Environmental Education Through Pictures</p>
                                    <p><strong>Class:</strong> 9th B</p>
                                    <p><strong>School:</strong> Somalwar High School, Khamla, Nagpur</p>
                                    <p><strong>Objective:</strong> To understand various environmental topics through pictures</p>
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow order-1 md:order-2 md:col-span-4">
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
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow md:col-span-4">
                            <img
                                src="/grade9-page2.jpg"
                                alt="Environmental poems page"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Translation */}
                        <div className="space-y-4 md:col-span-1">
                            <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-[#A67C52] mb-4">Translation (Page 2):</h4>
                                <div className="space-y-3 text-gray-700 text-sm">
                                    <div className="bg-white/50 p-3 rounded">
                                        <p className="font-bold text-[#C2956E] mb-2">Main Heading:</p>
                                        <p className="font-semibold">"Story of Environment"</p>
                                    </div>
                                    <div className="bg-white/50 p-3 rounded">
                                        <p className="font-bold text-[#C2956E] mb-2">Two Poems Featured:</p>
                                        <p><strong>1.</strong> Story of Environment</p>
                                        <p><strong>2.</strong> Let's make trees and protect environment</p>
                                    </div>
                                    <p className="italic">Beautifully illustrated with hand-drawn vine and leaf borders around the poems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page 3 - Image LEFT, Translation RIGHT */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#C2956E]/20">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow md:col-span-4">
                            <img
                                src="/grade9-page3.jpg"
                                alt="Environmental themes and health illustrations"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Translation */}
                        <div className="space-y-4 md:col-span-1">
                            <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-[#A67C52] mb-4">Translation (Page 3):</h4>
                                <div className="space-y-3 text-gray-700 text-sm">
                                    <div className="bg-white/50 p-3 rounded">
                                        <p className="font-bold text-[#C2956E] mb-2">Top Label:</p>
                                        <p className="font-semibold">"Picture No. 3"</p>
                                    </div>
                                    <div className="bg-white/50 p-3 rounded">
                                        <p className="font-bold text-[#C2956E] mb-2">Bottom Label:</p>
                                        <p className="font-semibold">"Components of Environment"</p>
                                    </div>
                                    <p className="font-semibold mt-3">Visual Content:</p>
                                    <ul className="list-disc list-inside text-xs space-y-1">
                                        <li>Village scene with houses and trees</li>
                                        <li>Daily life items and home goods</li>
                                        <li>Health and exercise illustrations</li>
                                        <li>Agricultural and natural scenes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page 4 - Translation LEFT, Image RIGHT */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#C2956E]/20">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        {/* Translation */}
                        <div className="space-y-4 order-2 md:order-1 md:col-span-1">
                            <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-[#A67C52] mb-4">Translation (Page 4):</h4>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <div className="bg-white/50 p-3 rounded mb-3">
                                        <p className="font-bold text-[#C2956E] mb-2">Main Slogan:</p>
                                        <p className="font-semibold">"Victory over pollution, Support to environment!"</p>
                                    </div>
                                    <div className="bg-white/50 p-3 rounded">
                                        <p className="font-bold text-[#C2956E] mb-2">Poem Excerpt:</p>
                                        <p className="font-semibold text-xs">About preserving nature's gift...</p>
                                    </div>
                                    <div className="bg-white/50 p-3 rounded mt-2">
                                        <p className="font-bold text-[#C2956E] mb-1">Bottom Message:</p>
                                        <p className="font-semibold text-xs">"Avoid vehicle use, Bring down pollution!"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow order-1 md:order-2 md:col-span-4">
                            <img
                                src="/grade9-page4.jpg"
                                alt="Pollution impact illustrations"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Page 5 - Image LEFT, Translation RIGHT */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#C2956E]/20">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow md:col-span-4">
                            <img
                                src="/grade9-page5.jpg"
                                alt="Environmental pollution illustrations"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Translation */}
                        <div className="space-y-4 md:col-span-1">
                            <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-[#A67C52] mb-4">Translation (Page 5):</h4>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p className="font-bold text-[#C2956E] mb-2">What This Page Shows:</p>
                                    <div className="bg-white/50 p-2 rounded mb-2">
                                        <p className="text-xs">Multiple illustrations of environmental pollution scenes including:</p>
                                    </div>
                                    <ul className="list-disc list-inside space-y-1 text-xs">
                                        <li>Water pollution with people bathing/washing</li>
                                        <li>Industrial pollution from factories</li>
                                        <li>Air pollution from vehicles and emissions</li>
                                        <li>Community gathering and environmental activities</li>
                                        <li>Agricultural fields and farming scenes</li>
                                        <li>Contrast between polluted and clean environments</li>
                                    </ul>
                                    <p className="italic text-xs mt-2">Visual representation of various types of environmental pollution and their impact on daily life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page 6 - Translation LEFT, Image RIGHT */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#C2956E]/20">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        {/* Translation */}
                        <div className="space-y-4 order-2 md:order-1 md:col-span-1">
                            <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-[#A67C52] mb-4">Translation (Page 6):</h4>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <div className="bg-white/50 p-3 rounded mb-3">
                                        <p className="font-bold text-[#C2956E] mb-2">Top Heading:</p>
                                        <p className="font-semibold">"Pollution of population growth, Protect nature!"</p>
                                    </div>
                                    <div className="bg-white/50 p-3 rounded mb-2">
                                        <p className="font-bold text-[#C2956E] mb-2">Middle Text:</p>
                                        <p className="font-semibold text-xs">"Water conservation - Save 6 billion!"</p>
                                    </div>
                                    <p className="font-semibold text-xs mt-2">Diagrams Show:</p>
                                    <ul className="list-disc list-inside text-xs space-y-1">
                                        <li>Population distribution across continents</li>
                                        <li>Balance between industry and environment</li>
                                        <li>Global population (~6 billion)</li>
                                        <li>Water conservation methods</li>
                                        <li>Cross-section of Earth's water resources</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow order-1 md:order-2 md:col-span-4">
                            <img
                                src="/grade9-page6.jpg"
                                alt="Population and conservation diagrams"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Page 7 - Image LEFT, Translation RIGHT */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#C2956E]/20">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow md:col-span-4">
                            <img
                                src="/grade9-page7.jpg"
                                alt="Environmental flowcharts and diagrams"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Translation */}
                        <div className="space-y-4 md:col-span-1">
                            <div className="bg-gradient-to-r from-[#C2956E]/10 to-[#A67C52]/10 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-[#A67C52] mb-4">Translation (Page 7):</h4>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p className="font-bold text-[#C2956E] mb-2">Three Flowchart Diagrams:</p>
                                    <div className="bg-white/50 p-2 rounded mb-2">
                                        <p className="font-semibold text-xs mb-1">Diagram 1 (Top):</p>
                                        <p className="text-xs">"Balanced nutrition elements" - Shows ecosystem balance</p>
                                    </div>
                                    <div className="bg-white/50 p-2 rounded mb-2">
                                        <p className="font-semibold text-xs mb-1">Diagram 2 (Middle):</p>
                                        <p className="text-xs">"Agricultural interdependencies" - Shows farming cycles</p>
                                    </div>
                                    <div className="bg-white/50 p-2 rounded">
                                        <p className="font-semibold text-xs mb-1">Diagram 3 (Bottom):</p>
                                        <p className="text-xs">"Environmental protection systems" - Shows conservation methods</p>
                                    </div>
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
                        My mother, a retired school principal and sustainability advocate, has preserved this project to this day. She recognised the tremendous effort I invested in it and understood that it represented more than just academic work, it was the important part of my environmental journey.
                    </p>
                    <p className="text-gray-700 leading-relaxed italic mb-6">
                        "This project wasn't just about collecting information; it was about understanding my responsibility to the planet. Every article pasted, every poem included, deepened my commitment to environmental stewardship."
                    </p>

                    {/* Mother's Profile Card */}
                    <div className="bg-white rounded-xl p-6 border-2 border-[#C2956E]/30 mt-6">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <h4 className="text-xl font-bold text-[#2C2C2C] mb-2">Mrs. Kirti Ramekar</h4>
                                <p className="text-sm text-gray-600">
                                    Retired School Principal & Sustainability Advocate
                                </p>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/kirtisr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg font-semibold hover:bg-[#004182] transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                Visit LinkedIn Profile
                            </a>
                        </div>
                    </div>
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
