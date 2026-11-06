import React, { useState } from 'react';
import { Check, Copy, Download } from 'lucide-react';
import { bibtex, citationText } from '../data/papers';

// Both components are hidden when the page is printed, so they do not appear in the PDFs.

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
