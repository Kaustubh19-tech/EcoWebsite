import React from 'react';
import { X } from 'lucide-react';
import PuneWasteModal from './modals/PuneWasteModal';
import Grade9EnvModal from './modals/Grade9EnvModal';
import EvidexiaModal from './modals/EvidexiaModal';
import AIEarlyWarningModal from './modals/AIEarlyWarningModal';

export default function ProjectDetailsModal({ projectId, onClose }) {
    if (!projectId) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-[95vw] max-h-[95vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="sticky top-4 float-right mr-4 mt-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </button>

                {projectId === 'pune-waste' && <PuneWasteModal onClose={onClose} />}
                {projectId === 'grade9-env' && <Grade9EnvModal onClose={onClose} />}
                {projectId === 'evidexia' && <EvidexiaModal onClose={onClose} />}
                {projectId === 'ai-early-warning' && <AIEarlyWarningModal onClose={onClose} />}
            </div>
        </div>
    );
}
