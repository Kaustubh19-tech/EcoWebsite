import React from 'react';
import { X, BookOpen, Newspaper, FileText, Heart, Sparkles } from 'lucide-react';
import PuneWasteModal from './modals/PuneWasteModal';
import Grade9EnvModal from './modals/Grade9EnvModal';

export default function ProjectDetailsModal({ projectId, onClose }) {
    if (!projectId) return null;
    <X className="w-6 h-6 text-gray-600" />
                </button >

        { projectId === 'pune-waste' && <PuneWasteModal onClose={onClose} />
}
{ projectId === 'grade9-env' && <Grade9EnvModal onClose={onClose} /> }
            </div >
        </div >
    );
}
