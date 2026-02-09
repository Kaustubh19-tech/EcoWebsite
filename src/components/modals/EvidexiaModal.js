import React, { useState } from 'react';
import { Brain, ChevronDown, ChevronUp, Check, Target, TrendingUp, BarChart3, Shield, Zap } from 'lucide-react';

export default function EvidexiaModal({ onClose }) {
    const [openSections, setOpenSections] = useState({
        overview: true,
        metrics: false,
        roadmap: false,
        business: false
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="p-8 lg:p-12">
            {/* Hero Header */}
            <div className="mb-10">
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6">
                    <Brain className="w-6 h-6 text-blue-600" />
                    <span className="text-sm font-bold text-blue-700">AI-Powered Sustainability Platform</span>
                </div>

                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    EVIDEXIA
                </h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                    AI-Powered Sustainability Compliance Platform
                </h2>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        <strong>Evidexia</strong> is a revolutionary AI-powered sustainability compliance platform that automates the extraction, validation, and documentation of Environmental, Social, and Governance (ESG) metrics from corporate sustainability reports.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Built on principles of privacy, accessibility, and regulatory excellence, Evidexia transforms what typically takes <strong className="text-blue-700">weeks of manual work into minutes</strong> with complete evidence citations and audit trails.
                    </p>
                </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                    <div className="text-sm text-gray-600">ESRS/CSRD Metrics</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Client-Side Processing</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-100 text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">&lt;2min</div>
                    <div className="text-sm text-gray-600">Processing Time</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-100 text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">90%+</div>
                    <div className="text-sm text-gray-600">Extraction Accuracy</div>
                </div>
            </div>

            {/* Product Overview Section */}
            <div className="mb-8">
                <button
                    onClick={() => toggleSection('overview')}
                    className="w-full flex items-center justify-between p-6 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <Target className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">Product Overview: Version 1.0</h3>
                    </div>
                    {openSections.overview ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>

                {openSections.overview && (
                    <div className="mt-4 bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Core Proposition</h4>
                                <p className="text-gray-700">
                                    Evidexia v1.0 is a <strong className="text-blue-600">free, no-signup-required AI platform</strong> that extracts and validates 30+ ESRS/CSRD metrics from sustainability reports with complete evidence citations and audit trails.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Document Processing</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-semibold text-blue-900 mb-2">Supported Formats</p>
                                        <p className="text-sm text-gray-700">PDF, DOCX, XLSX, CSV, TXT</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <p className="font-semibold text-green-900 mb-2">Processing Location</p>
                                        <p className="text-sm text-gray-700">100% client-side (browser-based)</p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <p className="font-semibold text-purple-900 mb-2">Processing Speed</p>
                                        <p className="text-sm text-gray-700">Under 2 minutes for complex documents</p>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <p className="font-semibold text-orange-900 mb-2">File Size Handling</p>
                                        <p className="text-sm text-gray-700">Optimized for up to 50MB</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Evidence Tracking & Auditability</h4>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700"><strong>Page Reference Citations:</strong> Every extracted metric includes specific page numbers</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700"><strong>Confidence Scoring:</strong> AI-generated confidence percentages (0-100%)</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700"><strong>Audit Trail:</strong> Full documentation suitable for regulatory review</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Export Options</h4>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">Excel Export</span>
                                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">JSON Export</span>
                                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-semibold">Custom Field Mapping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Metric Coverage Section */}
            <div className="mb-8">
                <button
                    onClick={() => toggleSection('metrics')}
                    className="w-full flex items-center justify-between p-6 bg-green-600 text-white rounded-2xl shadow-lg hover:bg-green-700 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <BarChart3 className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">Metric Extraction Coverage (30+ Metrics)</h3>
                    </div>
                    {openSections.metrics ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>

                {openSections.metrics && (
                    <div className="mt-4 bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Environmental Pillar */}
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h4 className="text-lg font-bold text-green-900 mb-4">🌍 Environmental (E)</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• GHG Emissions (Scope 1, 2, 3)</li>
                                    <li>• Energy Consumption & Usage</li>
                                    <li>• Renewable Energy %</li>
                                    <li>• Water Consumption</li>
                                    <li>• Water Recycling Rates</li>
                                    <li>• Waste Generation</li>
                                    <li>• Hazardous Waste</li>
                                    <li>• Biodiversity Impact</li>
                                    <li>• Ecosystem Services</li>
                                </ul>
                            </div>

                            {/* Social Pillar */}
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h4 className="text-lg font-bold text-blue-900 mb-4">👥 Social (S)</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Employee Count</li>
                                    <li>• Gender Diversity Ratios</li>
                                    <li>• Management Diversity</li>
                                    <li>• Training Hours</li>
                                    <li>• Safety Incidents</li>
                                    <li>• LTIFR (Lost Time Injury)</li>
                                    <li>• Pay Gap Analysis</li>
                                    <li>• Human Rights Due Diligence</li>
                                </ul>
                            </div>

                            {/* Governance Pillar */}
                            <div className="bg-purple-50 p-6 rounded-xl">
                                <h4 className="text-lg font-bold text-purple-900 mb-4">⚖️ Governance (G)</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Board Composition</li>
                                    <li>• Executive Compensation</li>
                                    <li>• Ethics & Compliance</li>
                                    <li>• Corruption Incidents</li>
                                    <li>• AML Controls</li>
                                    <li>• Data Protection</li>
                                    <li>• GDPR Compliance</li>
                                    <li>• Regulatory Penalties</li>
                                    <li>• Material Litigation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Expansion Roadmap Section */}
            <div className="mb-8">
                <button
                    onClick={() => toggleSection('roadmap')}
                    className="w-full flex items-center justify-between p-6 bg-purple-600 text-white rounded-2xl shadow-lg hover:bg-purple-700 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <TrendingUp className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">Expansion Roadmap: Vision for V2.0+</h3>
                    </div>
                    {openSections.roadmap ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>

                {openSections.roadmap && (
                    <div className="mt-4 bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100 space-y-6">
                        <div className="bg-purple-50 p-6 rounded-xl">
                            <h4 className="text-xl font-bold text-purple-900 mb-4">🔄 Unstructured Data Processing</h4>
                            <p className="text-gray-700 mb-3">Advanced handling of diverse data sources:</p>
                            <div className="grid md:grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    <span>Financial Reports & SEC Filings</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    <span>News Articles & Press Releases</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    <span>Social Media & Web Scraping</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    <span>Image & Infographic Analysis</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    <span>Video Transcripts Processing</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    <span>Sensor Data & IoT Streams</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h4 className="text-xl font-bold text-blue-900 mb-4">🔗 Expanded Data Source Integration</h4>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <p className="font-semibold text-blue-800 mb-2">ERP Systems</p>
                                    <p className="text-gray-600">SAP, Oracle, Microsoft Dynamics</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-800 mb-2">HR Platforms</p>
                                    <p className="text-gray-600">Workday, SAP SuccessFactors</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-800 mb-2">Cloud Platforms</p>
                                    <p className="text-gray-600">AWS, Azure, GCP</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-800 mb-2">IoT Monitoring</p>
                                    <p className="text-gray-600">Real-time emissions tracking</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-800 mb-2">Financial Systems</p>
                                    <p className="text-gray-600">Accounting software integration</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-800 mb-2">Third-Party Data</p>
                                    <p className="text-gray-600">Bloomberg, Refinitiv</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl">
                            <h4 className="text-xl font-bold text-green-900 mb-4">🤖 Enhanced AI Capabilities</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <Zap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span><strong>Larger Models:</strong> Extended context windows (16K-100K tokens)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Zap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span><strong>Multi-Document Correlation:</strong> Cross-reference metrics across time periods</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Zap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span><strong>Anomaly Detection:</strong> Identify inconsistencies and red flags</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Zap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span><strong>Predictive Analytics:</strong> Forecast future ESG metrics</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-xl">
                            <h4 className="text-xl font-bold text-orange-900 mb-4">📊 Platform Features</h4>
                            <div className="space-y-3 text-sm text-gray-700">
                                <p>• <strong>Dashboard & Workspace:</strong> Historical tracking and trend analysis</p>
                                <p>• <strong>Benchmarking:</strong> Industry peer comparison and gap analysis</p>
                                <p>• <strong>Compliance Management:</strong> Automated deadline tracking for CSRD, ESRS, SEC</p>
                                <p>• <strong>Collaboration:</strong> Team workspace with role-based access</p>
                                <p>• <strong>Reporting:</strong> Multi-format report generation with interactive visualizations</p>
                            </div>
                        </div>

                        {/* Implementation Timeline */}
                        <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">📅 Implementation Timeline</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-600 text-white px-3 py-1 rounded-lg font-bold text-sm">Q1 2025</div>
                                    <div className="text-sm text-gray-700">Multi-source connectors, Enhanced LLM, Dashboard MVP, API framework</div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-sm">Q2 2025</div>
                                    <div className="text-sm text-gray-700">5+ enterprise connectors (SAP, Workday), Anomaly detection, Mobile dashboard</div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-600 text-white px-3 py-1 rounded-lg font-bold text-sm">Q3 2025</div>
                                    <div className="text-sm text-gray-700">Team collaboration, Compliance tracking, Benchmarking module, White-label API</div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-600 text-white px-3 py-1 rounded-lg font-bold text-sm">Q4 2025</div>
                                    <div className="text-sm text-gray-700">Pricing implementation, Sales team, Partnership program, Marketing launch</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Business Model Section */}
            <div className="mb-8">
                <button
                    onClick={() => toggleSection('business')}
                    className="w-full flex items-center justify-between p-6 bg-orange-600 text-white rounded-2xl shadow-lg hover:bg-orange-700 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">Business Model & Pricing</h3>
                    </div>
                    {openSections.business ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>

                {openSections.business && (
                    <div className="mt-4 bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-100">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Free Plan */}
                            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Free</h4>
                                <div className="text-3xl font-bold text-gray-900 mb-4">$0</div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                        <span>5 documents/month</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                        <span>15 basic metrics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                        <span>CSV export</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Professional Plan */}
                            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                                <h4 className="text-xl font-bold text-blue-900 mb-2">Professional</h4>
                                <div className="text-3xl font-bold text-blue-900 mb-4">$39<span className="text-lg">/mo</span></div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                        <span>Unlimited documents</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                        <span>30+ full metrics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                        <span>Excel + JSON export</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                        <span>12-month tracking</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Business Plan */}
                            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300">
                                <h4 className="text-xl font-bold text-purple-900 mb-2">Business</h4>
                                <div className="text-3xl font-bold text-purple-900 mb-4">$199<span className="text-lg">/mo</span></div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                                        <span>All Professional features</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                                        <span>Real-time connectors</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                                        <span>Benchmarking & insights</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                                        <span>API access + SSO</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-300">
                                <h4 className="text-xl font-bold text-orange-900 mb-2">Enterprise</h4>
                                <div className="text-3xl font-bold text-orange-900 mb-4">Custom</div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                                        <span>Dedicated account manager</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                                        <span>Custom integrations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                                        <span>Private cloud option</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                                        <span>SLA guarantees</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl">
                            <h4 className="font-bold text-gray-900 mb-2">Market Opportunity</h4>
                            <p className="text-sm text-gray-700 mb-3">
                                <strong>Regulatory Momentum:</strong> EU CSRD mandatory compliance (2024-2028), SEC Climate Disclosure Rules, global ISSB standards convergence
                            </p>
                            <p className="text-sm text-gray-700">
                                <strong>Corporate Demand:</strong> 90% of Fortune 500 publish ESG reports • 73% of consumers expect sustainability action • $35+ trillion in sustainable assets under management
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Technical Excellence Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Why Evidexia?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <Shield className="w-8 h-8 mb-2" />
                        <h4 className="font-bold mb-2">Privacy-First</h4>
                        <p className="text-sm text-blue-100">100% client-side processing. Your data never leaves your browser.</p>
                    </div>
                    <div>
                        <Zap className="w-8 h-8 mb-2" />
                        <h4 className="font-bold mb-2">Lightning Fast</h4>
                        <p className="text-sm text-blue-100">Minutes instead of weeks. Complete extraction with evidence in under 2 minutes.</p>
                    </div>
                    <div>
                        <Target className="w-8 h-8 mb-2" />
                        <h4 className="font-bold mb-2">Audit-Ready</h4>
                        <p className="text-sm text-blue-100">Every metric includes page citations, confidence scores, and full audit trails.</p>
                    </div>
                </div>
            </div>

            {/* Close Button */}
            <div className="pt-6 border-t border-gray-200">
                <button
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
