import React from 'react';
import { X } from 'lucide-react';

export default function ProjectDetailsModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </button>

                <div className="p-8">
                    <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6">Pune's Waste Management Project</h2>
                    <div className="space-y-6 text-gray-600">
                        <p>
                            This comprehensive study focused on understanding the intricacies of Pune's waste management ecosystem.
                            By surveying over 500 households, we gathered crucial data on waste segregation habits and awareness levels.
                        </p>
                        <p>
                            Key findings revealed that while 75% of households were aware of waste segregation, infrastructure gaps
                            often hindered effective implementation. The project proposed targeted improvements for municipal collection
                            systems and community engagement strategies.
                        </p>
                        <div className="bg-[#F5F3ED] p-6 rounded-xl">
                            <h3 className="text-xl font-semibold text-[#3A6B35] mb-4">Project Highlights</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Surveyed 500+ households across diverse neighborhoods</li>
                                <li>Interviewed waste pickers and municipal workers</li>
                                <li>Analyzed recycling plant operations</li>
                                <li>Developed a roadmap for a more circular economy in Pune</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
