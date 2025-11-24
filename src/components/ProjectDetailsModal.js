import React from 'react';
import { X, Users, TrendingUp, Target, CheckCircle } from 'lucide-react';

export default function ProjectDetailsModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const stats = [
        { value: '500+', label: 'Households Surveyed' },
        { value: '75%', label: 'Awareness Rate Achieved' },
        { value: '150+', label: 'Stakeholder Interactions' },
        { value: '20%', label: 'Recyclable Materials Lost' }
    ];

    const stakeholders = [
        'Local municipal sanitation workers managing waste collection routes',
        'Transport operators facilitating the movement of waste to dump yards',
        'Dump yard managers overseeing waste reception, sorting, and temporary storage',
        'Recycling plant managers responsible for efficient processing and material recovery'
    ];

    const insights = [
        '500+ households and flats surveyed over the three-month period',
        '75% awareness rate of waste segregation practices among residents achieved',
        '150+ interactions documented with waste pickers and sanitation workers',
        '30% incidence of cart tyre punctures and expense reimbursement delays identified',
        'Three dump yards and two recycling plants visited for data collection',
        '20% of recyclable materials not effectively separated at source, leading to increased landfill burden'
    ];

    const images = [
        { src: '/pune-waste-1.png', alt: 'Pune Waste Management Project Overview' },
        { src: '/pune-waste-2.png', alt: 'Quantitative Insights and Statistics' },
        { src: '/pune-waste-3.png', alt: 'Additional Project Details' }
    ];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="sticky top-4 float-right mr-4 mt-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </button>

                <div className="p-8 lg:p-12">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0F4ED] rounded-full mb-4">
                            <div className="w-2 h-2 bg-[#3A6B35] rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-[#2D5016]">3-Months Live Project Competition 2018</span>
                        </div>
                        <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
                            My Environmental Leadership Through Pune's Waste Management Project
                        </h2>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-gradient-to-br from-[#F0F4ED] to-white p-6 rounded-xl text-center shadow-sm">
                                <div className="text-3xl font-bold text-[#3A6B35] mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Project Overview */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-[#2D5016] mb-4 flex items-center gap-2">
                            <Target className="w-6 h-6" />
                            Project Overview
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            During my MBA programme, I had the opportunity of leading a team in a three-month live project competition focusing on waste management in the City of Pune. This hands-on project involved an in-depth study of the entire waste generation and disposal cycle, from households and residential complexes to the final processing sites, including dump yards and recycling plants.
                        </p>
                    </div>

                    {/* Stakeholder Engagement */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-[#2D5016] mb-4 flex items-center gap-2">
                            <Users className="w-6 h-6" />
                            Comprehensive Stakeholder Engagement
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our team engaged directly with every stakeholder involved in the waste management ecosystem. We surveyed households and flats to understand their waste segregation practices, emphasising the importance of categorising waste into dry and wet bins. This engagement helped us assess public awareness and challenges related to correct waste disposal at the source.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Further, we connected with waste pickers who play a crucial role in the system. We learned about their working conditions, such as difficulties with waste-picking carts, frequent tyre punctures, and complexities related to reimbursement of operational expenses.
                        </p>
                        <div className="bg-[#F0F4ED] rounded-xl p-6">
                            <h4 className="font-bold text-[#2D5016] mb-3">Key Stakeholders Engaged:</h4>
                            <ul className="space-y-2">
                                {stakeholders.map((stakeholder, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-[#3A6B35] flex-shrink-0 mt-0.5" />
                                        <span>{stakeholder}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Research Methodology */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-[#2D5016] mb-4 flex items-center gap-2">
                            <TrendingUp className="w-6 h-6" />
                            Research Methodology & Findings
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Through field visits, interviews, and data gathering, our team explored challenges and opportunities at each stage of the cycle. We identified critical issues such as infrastructure gaps, resource constraints, and sustainability hurdles faced by waste handlers.
                        </p>
                        <div className="bg-gradient-to-r from-[#3A6B35] to-[#2D5016] text-white rounded-xl p-6">
                            <h4 className="font-bold mb-4 text-lg">Quantitative Insights:</h4>
                            <div className="space-y-2">
                                {insights.map((insight, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-sm leading-relaxed">{insight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Photos */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-[#2D5016] mb-6">Project Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {images.map((image, index) => (
                                <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact & Recommendations */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#2D5016] mb-4">Impact & Recommendations</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This immersive project not only deepened our understanding of urban waste management but also highlighted the significant human and environmental factors intertwined in the process. Our findings aim to contribute towards the development of practical, technology-enabled solutions to enhance waste segregation, collection efficiency, and recycling outcomes in Pune.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Through quantitative analysis coupled with qualitative insights, our project presents a clear roadmap for enhancing Pune's waste management system with measurable targets for improvement. These findings informed our recommendations for improving segregation protocols and supporting waste workers with better tools and processes.
                        </p>
                    </div>

                    {/* Close Button */}
                    <div className="pt-6 border-t border-gray-200">
                        <button
                            onClick={onClose}
                            className="w-full bg-gradient-to-r from-[#3A6B35] to-[#2D5016] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
