import React from 'react';
import { ArrowLeft, Users, TreePine, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function EcoVeterans() {
    const impactStats = [
        { icon: TreePine, value: '1,008,000+', label: 'Trees Planted', subtext: 'Across 8 countries' },
        { icon: TrendingUp, value: '316,682', label: 'Tonnes CO₂ Removed', subtext: 'Carbon equivalent' },
        { icon: Award, value: '317', label: 'Hectares Restored', subtext: 'Nature recovered' },
        { icon: Users, value: '550+', label: 'Businesses Supported', subtext: 'Making an impact' }
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
                            <Users className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-8">
                            Eco <span className="text-[#3A6B35]">Veterans</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
                {/* Carma Introduction */}
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-[#2D5016] mb-6">Carma - Climate Action Supporting UK Veterans</h2>

                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p className="text-justify">
                            <strong>Carma</strong> is a UK-based climate action company that empowers businesses to contribute to environmental sustainability while supporting UK veterans. This unique dual-impact approach makes climate action meaningful for both planet and people.
                        </p>

                        <div className="bg-[#F0F4ED] rounded-xl p-6 border-l-4 border-[#3A6B35]">
                            <h3 className="text-xl font-bold text-[#2D5016] mb-3">Dual Impact Mission</h3>
                            <p className="text-justify">
                                Carma enables organizations to engage in climate actions, such as tree planting and carbon offsetting, with a unique focus on supporting veterans. They employ UK veterans for tree planting projects and donate a portion of their revenue to charities dedicated to veterans' welfare, notably HighGround and The Standing Tall Foundation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-[#3A6B35]/5 to-[#A4B494]/10 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-[#2D5016] mb-3 flex items-center gap-2">
                                    <TreePine className="w-6 h-6" />
                                    Tree Planting Initiatives
                                </h3>
                                <p className="text-justify">
                                    Businesses and individuals can fund tree planting both in the UK (where 1,000 trees equate to £400 donated to veterans via HighGround Charity) and Africa.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#3A6B35]/5 to-[#A4B494]/10 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-[#2D5016] mb-3 flex items-center gap-2">
                                    <Users className="w-6 h-6" />
                                    Employee Engagement
                                </h3>
                                <p className="text-justify">
                                    Carma organizes Tree Planting Days, offering team-building experiences that allow groups to restore nature through hands-on outdoor activities.
                                </p>
                            </div>
                        </div>

                        <p className="text-justify">
                            <strong>Flexible Climate Solutions:</strong> Their offerings include monthly plans, pay-as-you-go solutions, plug-in integrations for businesses, and certified carbon credits—making it easy for organizations of any size to participate.
                        </p>

                        <p className="text-justify">
                            <strong>Transparency & Quality:</strong> Carma supports industry-leading certifications to ensure genuine environmental impact. They are a certified B Corp and a social enterprise.
                        </p>

                        <div className="bg-[#3A6B35]/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-[#2D5016] mb-3">Veteran Support</h3>
                            <p className="text-justify">
                                3% of their gross revenue is donated directly to The Standing Tall Foundation (excluding near break-even carbon credit projects). HighGround helps veterans transition to outdoor sectors like farming, forestry, and conservation, with excellent results in employment readiness.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reported Impact Statistics */}
                <div className="bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-2xl shadow-xl p-8 lg:p-12 mb-12 text-white">
                    <h2 className="text-3xl font-bold mb-8 text-center">Reported Impact</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 rounded-lg p-3">
                                        <stat.icon className="w-8 h-8" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                        <div className="text-xl font-semibold mb-1">{stat.label}</div>
                                        <div className="text-white/80 text-sm">{stat.subtext}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Photo Section */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                    <div className="flex justify-center bg-gray-50 p-4">
                        <img
                            src="/carma-business-show.jpg"
                            alt="Carma at The Business Show"
                            className="max-h-[32rem] w-auto object-contain rounded-lg"
                        />
                    </div>
                    <div className="p-6 bg-gradient-to-r from-[#F0F4ED] to-white">
                        <p className="text-center text-lg text-gray-700 font-medium">
                            With Jay Williams & Jim Holland at The Business Show
                        </p>
                    </div>
                </div>

                {/* Custom Solutions */}
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-8">
                    <h3 className="text-2xl font-bold text-[#2D5016] mb-4">Custom Solutions</h3>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                        Carma provides tailored advice and project quotes for larger organizations seeking comprehensive climate action plans. Carma exemplifies how climate activism can be synergized with community support, especially for veterans, making environmental impact meaningful for both planet and people.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="https://www.carma.earth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3A6B35] to-[#2D5016] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Visit www.carma.earth
                            <ArrowLeft className="w-5 h-5 rotate-180" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
