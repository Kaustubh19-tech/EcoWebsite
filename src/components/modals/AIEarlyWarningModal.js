import React, { useState } from 'react';
import { AlertTriangle, X, ChevronDown, ChevronUp, Eye, Shield, Zap, TrendingUp, Users, Brain, CheckCircle } from 'lucide-react';

export default function AIEarlyWarningModal({ onClose }) {
    const [openSections, setOpenSections] = useState({
        current: true,
        problems: false,
        vision: false,
        blueprint: false
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="p-8 lg:p-12">
            {/* Hero Header */}
            <div className="mb-10">
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <span className="text-sm font-bold text-red-700">AI-Powered Emergency Response</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Artificial Intelligence for Climate Early Warning Systems
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
                    Transforming emergency response from reactive warnings to proactive protection
                </h2>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Intelligent, multi-agent AI systems for <strong className="text-red-700">sustainability transitions and multi-risk early warning</strong> in climate-vulnerable ecosystems.
                    </p>
                </div>
            </div>

            {/* Why We Need to See the Unseen */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 mb-8">
                <div className="flex items-center gap-3 mb-6">
                    <Eye className="w-8 h-8 text-red-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Why We Need to See the Unseen</h3>
                </div>

                <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                        <p className="text-gray-800 leading-relaxed mb-4">
                            Environmental disasters are intensifying across the UK. <strong>Storm Claudia</strong> brought <strong className="text-red-700">119 mm of rain</strong> to Monmouth, triggering flooding and overwhelming traditional response systems. Similar impacts from <strong>Storm Eowyn</strong>.
                        </p>
                        <p className="text-gray-700 italic">
                            Current warning systems alert us to danger, but they don't prevent it.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-xl text-center">
                        <h4 className="text-2xl font-bold text-gray-900 mb-3">The Critical Question</h4>
                        <p className="text-xl text-gray-800 mb-4">
                            Can AI spot danger before humans see it and act to protect communities <strong className="text-red-700">automatically</strong>?
                        </p>
                        <p className="text-gray-700">
                            The gap between warning and prevention represents <strong>lost homes</strong>, <strong>disrupted lives</strong>, and <strong>unnecessary risk</strong>.
                        </p>
                        <p className="text-lg font-semibold text-red-700 mt-4">
                            We have the technology to close that gap.
                        </p>
                    </div>
                </div>
            </div>

            {/* Current System Gaps */}
            <div className="mb-8">
                <button
                    onClick={() => toggleSection('current')}
                    className="w-full flex items-center justify-between p-6 bg-orange-600 text-white rounded-2xl shadow-lg hover:bg-orange-700 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">The Current System — Gaps Identified</h3>
                    </div>
                    {openSections.current ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>

                {openSections.current && (
                    <div className="mt-4 bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-100">
                        <div className="space-y-6">
                            {/* Timeline */}
                            <div className="relative">
                                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600"></div>

                                <div className="space-y-8 ml-12">
                                    <div className="relative">
                                        <div className="absolute -left-14 top-2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></div>
                                        <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300">
                                            <h4 className="text-lg font-bold text-yellow-900 mb-2">⚠️ Amber & Yellow Warnings Issued</h4>
                                            <p className="text-gray-700">Met Office and Natural Resources Wales provide advance notice of severe weather.</p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -left-14 top-2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                                        <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-300">
                                            <h4 className="text-lg font-bold text-orange-900 mb-2">🌊 Rivers Burst Banks</h4>
                                            <p className="text-gray-700">Sudden surface flooding overwhelms communities despite warnings.</p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -left-14 top-2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                                        <div className="bg-red-50 p-6 rounded-xl border-2 border-red-300">
                                            <h4 className="text-lg font-bold text-red-900 mb-2">🚨 Major Incident Declared</h4>
                                            <p className="text-gray-700">Emergency services react after the crisis is underway.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-xl">
                                <p className="text-gray-800 font-semibold mb-2">
                                    ❓ Key Question: Why were proactive interventions still limited?
                                </p>
                                <p className="text-red-700 font-bold text-lg">
                                    Answer: Siloed data, delayed decisions, systems designed to warn—not prevent.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Five Critical Problems */}
            <div className="mb-8">
                <button
                    onClick={() => toggleSection('problems')}
                    className="w-full flex items-center justify-between p-6 bg-red-600 text-white rounded-2xl shadow-lg hover:bg-red-700 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">Five Critical Problems Holding Us Back</h3>
                    </div>
                    {openSections.problems ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>

                {openSections.problems && (
                    <div className="mt-4 bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                                <h4 className="text-lg font-bold text-red-900 mb-3">1️⃣ Siloed Data & Delays</h4>
                                <p className="text-gray-700">Fragmented information slows risk detection.</p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                                <h4 className="text-lg font-bold text-orange-900 mb-3">2️⃣ "One-Size-Fits-All" Warnings</h4>
                                <p className="text-gray-700">Regional alerts fail to specify individual risk.</p>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                                <h4 className="text-lg font-bold text-yellow-900 mb-3">3️⃣ Manual Decision-Making</h4>
                                <p className="text-gray-700">Human-dependent processes cause inconsistent responses.</p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                                <h4 className="text-lg font-bold text-purple-900 mb-3">4️⃣ Outdated Pattern Models</h4>
                                <p className="text-gray-700">Historical data fails under accelerating climate change.</p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                                <h4 className="text-lg font-bold text-blue-900 mb-3">5️⃣ Low Trust & Poor Engagement</h4>
                                <p className="text-gray-700">Warning fatigue reduces responsiveness.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* The Vision: Multi-Agent AI */}
            <div className="mb-8">
                <button
                    onClick={() => toggleSection('vision')}
                    className="w-full flex items-center justify-between p-6 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <Brain className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">The Vision: Multi-Agent AI That Protects</h3>
                    </div>
                    {openSections.vision ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>

                {openSections.vision && (
                    <div className="mt-4 bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl text-center">
                                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-blue-900 mb-3">Connected Intelligence</h4>
                                <p className="text-gray-700">Sensors, drones, satellites act as coordinated agents.</p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl text-center">
                                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-green-900 mb-3">Predictive Risk Mapping</h4>
                                <p className="text-gray-700">Live risk maps identify danger zones early.</p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl text-center">
                                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-purple-900 mb-3">Automated Protection</h4>
                                <p className="text-gray-700">AI triggers targeted alerts, barriers, drainage actions.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl text-center">
                            <p className="text-xl font-bold text-gray-900">
                                Not science fiction—this is the <span className="text-blue-700">next evolution</span> of emergency management.
                            </p>
                        </div>

                        {/* UK Innovation */}
                        <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
                            <h4 className="text-2xl font-bold text-gray-900 mb-6">🇬🇧 Real-World Progress: UK Innovation</h4>

                            <div className="space-y-4">
                                <div className="bg-blue-50 p-5 rounded-lg">
                                    <h5 className="font-bold text-blue-900 mb-2">Met Office & Partners Leading Change</h5>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900">AI4NWP Initiative</p>
                                            <p className="text-gray-700 text-sm">Neural networks deliver hyper-local prediction</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900">Nowcasting Toolkits</p>
                                            <p className="text-gray-700 text-sm">Radar-based AI offers 15-minute update cycles</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900">Advanced Pilots</p>
                                            <p className="text-gray-700 text-sm">CCTV blockage spotting, citizen data, real-time monitoring</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mt-4">
                                    <p className="text-gray-800 font-semibold">
                                        <span className="text-blue-700">Next frontier:</span> True multi-agent coordination and automated intervention systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Blueprint for Action */}
            <div className="mb-8">
                <button
                    onClick={() => toggleSection('blueprint')}
                    className="w-full flex items-center justify-between p-6 bg-green-600 text-white rounded-2xl shadow-lg hover:bg-green-700 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <TrendingUp className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">Blueprint for Action: What's Possible Now</h3>
                    </div>
                    {openSections.blueprint ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>

                {openSections.blueprint && (
                    <div className="mt-4 bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h4 className="text-lg font-bold text-green-900 mb-3">🔗 Unified Data Platforms</h4>
                                <p className="text-gray-700">All agencies and sensors synced in real time.</p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h4 className="text-lg font-bold text-blue-900 mb-3">📍 Hyperlocal Insights</h4>
                                <p className="text-gray-700">Block-by-block risk detection.</p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl">
                                <h4 className="text-lg font-bold text-purple-900 mb-3">⚡ Direct Automated Action</h4>
                                <p className="text-gray-700">Drain gates, alerts, diversions automatically triggered.</p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-xl">
                                <h4 className="text-lg font-bold text-orange-900 mb-3">🔄 Continuous Learning</h4>
                                <p className="text-gray-700">Systems evolve with every incident.</p>
                            </div>
                        </div>

                        {/* Innovation Leap */}
                        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl">
                            <h4 className="text-2xl font-bold text-gray-900 mb-6">The Innovation Leap</h4>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Users className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-gray-900">Community-Powered Intelligence</p>
                                        <p className="text-gray-700 text-sm">Residents and responders enrich data</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Brain className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-gray-900">Explainable AI</p>
                                        <p className="text-gray-700 text-sm">Transparent reasoning builds trust</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Zap className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-gray-900">Open Collaboration</p>
                                        <p className="text-gray-700 text-sm">Public-private innovation accelerates impact</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-200 text-center">
                            <p className="text-xl font-bold text-gray-900 mb-3">
                                We must predict the unprecedented.
                            </p>
                            <p className="text-lg text-gray-800">
                                Future resilience demands <span className="text-red-700 font-bold">evolving, learning systems</span>.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Close Button */}
            <div className="pt-6 border-t border-gray-200">
                <button
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
