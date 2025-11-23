import React from 'react';
import { ArrowLeft, Award, Presentation, Users, TreePine, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function RoyalSociety() {
    const images = [
        { src: '/royal-society-1.jpg', alt: 'Royal Society Discussion Meeting - Enhanced weathering with agriculture for atmospheric carbon dioxide removal' },
        { src: '/royal-society-2.jpg', alt: 'Dr. Bonnie Waring presenting on temporal evolution of ecosystem responses' },
        { src: '/royal-society-3.jpg', alt: 'Presentation on ERW + reforestation + microbiome manipulation trial' },
        { src: '/royal-society-4.jpg', alt: 'Discussion on climate mitigation benefits of ERW in reforestation and afforestation' },
        { src: '/royal-society-5.jpg', alt: 'Dr. Elspeth Spence presenting on Public Acceptability of Enhanced Weathering' },
        { src: '/royal-society-6.jpg', alt: 'Meeting attendees posing in front of a historic scientific portrait at the Royal Society' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
            {/* Hero Section */}
            <div className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#A4B494]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3A6B35]/5 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <Link
                        to={createPageUrl('Treasure')}
                        className="inline-flex items-center gap-2 text-[#3A6B35] hover:text-[#2D5016] mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back to Treasure</span>
                    </Link>
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-2xl mb-8 shadow-lg">
                            <Award className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-8">
                            The <span className="text-[#3A6B35]">Royal Society</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Enhanced weathering with agriculture for atmospheric carbon dioxide removal
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
                {/* Meeting Overview */}
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Presentation className="w-8 h-8 text-[#3A6B35]" />
                        <h2 className="text-3xl font-bold text-[#2D5016]">Discussion Meeting Experience</h2>
                    </div>

                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p className="text-justify">
                            During the Royal Society meeting, I had the opportunity to view insightful slides presented by <strong>Dr. Elspeth Spence of Cardiff University</strong> and <strong>Dr. Bonnie Waring of Imperial College London</strong>, alongside exploring a range of thought-provoking posters. The presentations covered cutting-edge research on enhanced weathering techniques and their potential for atmospheric carbon dioxide removal through agricultural applications.
                        </p>

                        <div className="bg-gradient-to-r from-[#F0F4ED] to-white rounded-xl p-6 border-l-4 border-[#3A6B35]">
                            <h3 className="text-xl font-bold text-[#2D5016] mb-3 flex items-center gap-2">
                                <Users className="w-6 h-6" />
                                Valuable Connections
                            </h3>
                            <p className="text-justify">
                                It was a pleasure to meet <strong>Dr. Kirsty Harrington from the University of Oxford</strong> and gain valuable perspectives on her research initiatives. The discussions provided deep insights into the latest developments in ecosystem responses and climate mitigation strategies.
                            </p>
                        </div>

                        <p className="text-justify">
                            The event showcased groundbreaking research on temporal evolution of ecosystem responses, innovative trials combining enhanced rock weathering (ERW) with reforestation and microbiome manipulation, and the exploration of climate mitigation benefits across different geographical regions.
                        </p>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-[#2D5016] mb-8 text-center">Event Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Carbon Community Section */}
                <div className="bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-2xl shadow-xl p-8 lg:p-12 mb-12 text-white">
                    <div className="flex items-center gap-3 mb-6">
                        <TreePine className="w-10 h-10" />
                        <h2 className="text-3xl font-bold">Discovering The Carbon Community</h2>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed">
                        <p className="text-justify">
                            The event also introduced me to <strong>The Carbon Community</strong>, an organisation making significant contributions to nature-based carbon removal and reforestation within the UK. This inspiring initiative represents a grassroots approach to tackling climate change through meaningful environmental action.
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Globe className="w-7 h-7" />
                                Empowering Communities for Climate Action
                            </h3>
                            <p className="text-justify mb-4">
                                The Carbon Community operates on a powerful principle: bringing together individuals, businesses, and communities to create tangible environmental impact. Their approach combines scientific rigour with community engagement, making carbon removal accessible and meaningful for everyone involved.
                            </p>
                            <p className="text-justify">
                                Through innovative reforestation projects and nature-based solutions, they're not just planting trees—they're cultivating a movement. Each project is designed to maximise biodiversity, restore ecosystems, and sequester carbon whilst educating and engaging local communities in the process.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-3">🌱 Nature-Based Solutions</h3>
                                <p className="text-justify">
                                    Focusing on reforestation and habitat restoration across the UK, creating carbon sinks while enhancing biodiversity and ecosystem resilience.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-3">🤝 Community Driven</h3>
                                <p className="text-justify">
                                    Engaging local communities through volunteer programs, educational workshops, and collaborative planting events that build environmental stewardship.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-3">📊 Measurable Impact</h3>
                                <p className="text-justify">
                                    Employing rigorous monitoring and verification methods to ensure every project delivers real, quantifiable carbon removal and ecological benefits.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-3">🌍 Local & Global</h3>
                                <p className="text-justify">
                                    Creating local environmental impact with global climate significance, proving that community-scale action can drive meaningful change.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
                            <p className="text-justify italic">
                                "What makes The Carbon Community truly special is their ability to transform climate action from an abstract concept into a hands-on, community-building experience. They're proving that environmental restoration and social connection go hand in hand."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-[#2D5016] mb-4 text-center">Learn More</h3>
                    <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
                        For further information about The Carbon Community's mission, ongoing projects, and how you can get involved in nature-based carbon removal and reforestation efforts, please visit their website.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="https://www.carboncommunity.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3A6B35] to-[#2D5016] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Visit www.carboncommunity.org
                            <ArrowLeft className="w-5 h-5 rotate-180" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
