import React from 'react';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { papers } from '../data/papers';
import { OrcidLink } from '../components/PaperActions';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function MyResearch() {
  useDocumentTitle('Kaustubh Ramekar | Research');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#A4B494]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3A6B35]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Link
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-[#3A6B35] hover:text-[#2D5016] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6">
              My <span className="text-[#3A6B35]">Research</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Preprints on social tipping points, climate change and public attention
            </p>
            <p className="mt-4 text-gray-600">
              Kaustubh Ramekar · <OrcidLink className="text-[#3A6B35]" />
            </p>
          </div>
        </div>
      </div>

      {/* Papers */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24 space-y-16">
        {papers.map((p) => (
          <section
            key={p.slug}
            className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-2">Preprint</p>
                <h2 className="text-3xl font-bold text-[#2D5016] mb-4 group-hover:text-[#3A6B35] transition-colors">
                  {/* Stretched link: the whole card opens the paper, while the PDF link below stays separate. */}
                  <Link to={p.path} className="after:absolute after:inset-0 after:rounded-2xl">
                    {p.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">{p.summary}</p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#2D5016]">Why it matters for detection: </span>
                  {p.detection}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-medium text-[#3A6B35]">
                  <span className="flex items-center gap-2">
                    Read paper <ArrowLeft className="w-4 h-4 rotate-180" />
                  </span>
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-1.5 hover:text-[#2D5016] hover:underline"
                  >
                    <Download className="w-4 h-4" />
                    PDF
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
