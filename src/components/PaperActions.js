import React, { useState } from 'react';
import { Check, Copy, Download } from 'lucide-react';
import { bibtex, citationText, ORCID_URL } from '../data/papers';

// DownloadButton and CiteBox are hidden when the page is printed, so they do not appear in the PDFs.
// OrcidLink is kept in print, so the iD appears in the PDFs as a clickable link.

export function OrcidLink({ className = '' }) {
  return (
    <a
      href={ORCID_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 hover:underline ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 256 256" aria-hidden="true" className="flex-shrink-0">
        <circle cx="128" cy="128" r="128" fill="#A6CE39" />
        <g fill="#fff">
          <rect x="71" y="78" width="17" height="102" />
          <circle cx="79.5" cy="56" r="11" />
          <path d="M103 78h46c33 0 51 23 51 51s-18 51-51 51h-46zm17 15v72h28c24 0 34-16 34-36s-10-36-34-36z" fillRule="evenodd" />
        </g>
      </svg>
      <span>{ORCID_URL.replace('https://', '')}</span>
    </a>
  );
}

export function DownloadButton({ paper }) {
  return (
    <div className="mt-6 flex justify-center font-sans print:hidden">
      <a
        href={paper.pdf}
        download
        className="inline-flex items-center gap-2 rounded-full bg-[#3A6B35] px-5 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#2D5016]"
      >
        <Download className="h-4 w-4" />
        Download PDF
      </a>
    </div>
  );
}

function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // Fallback for browsers that block the clipboard API.
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        return;
      } finally {
        document.body.removeChild(ta);
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-[#2D5016] transition-colors hover:bg-[#A4B494]/20"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? 'Copied' : label}
    </button>
  );
}

export function CiteBox({ paper }) {
  const cite = citationText(paper);
  const bib = bibtex(paper);

  return (
    <section
      aria-label="Cite as"
      className="mx-auto mt-8 max-w-[42rem] rounded-lg border border-gray-300 bg-[#f7f7f5] p-4 font-sans text-[0.9rem] leading-snug print:hidden"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[0.95rem] font-bold">Cite as</h2>
        <CopyButton text={cite} label="Copy citation" />
      </div>
      <p className="mt-2 break-words text-gray-800">{cite}</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <h3 className="text-[0.85rem] font-bold">BibTeX</h3>
        <CopyButton text={bib} label="Copy BibTeX" />
      </div>
      <pre className="mt-2 overflow-x-auto rounded-md border border-gray-200 bg-white p-3 text-[0.8rem] leading-relaxed text-gray-800">
        {bib}
      </pre>
    </section>
  );
}
