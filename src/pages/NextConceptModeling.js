import React from 'react';
import { ArrowLeft, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import useDocumentTitle from '../hooks/useDocumentTitle';

const PAPER = 'https://arxiv.org/abs/2610.14162';
const REPO = 'https://github.com/HazyResearch/ncm';

// Diagram colours, chosen to sit with the rest of the site.
const EDGE = '#8B918A';
const ACCENT = '#3A6B35';
const INK = '#2C2C2C';
const QUIET = '#6B7280';
const BAD = '#B3261E';
const MUTED = '#A9AFA6';

const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#3A6B35] font-semibold hover:underline">
    {children}
  </a>
);

const P = ({ children }) => <p className="text-justify">{children}</p>;

const H2 = ({ children }) => <h2 className="text-2xl font-bold text-[#2D5016] pt-4">{children}</h2>;
const H3 = ({ children }) => <h3 className="text-xl font-bold text-[#2D5016] pt-2">{children}</h3>;

const Figure = ({ caption, children }) => (
  <figure className="my-2">
    <div className="rounded-xl border border-gray-200 bg-[#FCFBF8] p-3 sm:p-5">{children}</div>
    <figcaption className="mt-3 text-center text-sm italic text-gray-500">{caption}</figcaption>
  </figure>
);

const Table = ({ head, rows, compact }) => (
  <div className="overflow-x-auto rounded-xl border border-gray-200">
    <table className={'w-full border-collapse text-left leading-snug ' + (compact ? 'min-w-[560px] text-sm' : 'min-w-[520px] text-base')}>
      <thead>
        <tr className="bg-[#FAF8F3]">
          {head.map((h, i) => (
            <th key={i} className={(compact ? 'px-3 py-2.5 ' : 'px-4 py-3 ') + 'font-semibold text-[#2D5016] border-b border-gray-200'}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className={i % 2 ? 'bg-[#FCFBF8]' : ''}>
            {r.map((c, j) => (
              <td key={j} className={(compact ? 'px-3 py-2 ' : 'px-4 py-3 ') + 'align-top border-b border-gray-100 text-gray-700'}>
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Bullets = ({ items }) => (
  <ul className="space-y-4 pl-2">
    {items.map((it, i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-2.5 w-2 h-2 bg-[#3A6B35] rounded-full flex-shrink-0"></span>
        <span className="text-justify">{it}</span>
      </li>
    ))}
  </ul>
);

// ---------------------------------------------------------------------------------------------
// Diagrams
// ---------------------------------------------------------------------------------------------

const MemoryDiagram = () => (
  <svg viewBox="0 0 760 250" role="img" aria-label="Every new token is another full trip to GPU memory" fontSize="13" className="block w-full h-auto">
    <defs>
      <marker id="mem-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0L10 5L0 10z" fill={EDGE} />
      </marker>
      <marker id="mem-arrow-hot" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0L10 5L0 10z" fill={ACCENT} />
      </marker>
    </defs>
    <text x="24" y="30" fontSize="15" fontWeight="600" fill={INK}>Every new token is another full trip to GPU memory</text>
    <rect x="24" y="70" width="240" height="100" rx="8" fill="none" stroke={EDGE} strokeWidth="1.25" />
    <text x="40" y="96" fontWeight="600" fill={INK}>HBM (GPU memory)</text>
    <text x="40" y="124" fontSize="11.5" fill={INK}>Model weights</text>
    <text x="40" y="142" fontSize="11.5" fill={INK}>KV cache, grows with every token</text>
    <path d="M264 110H478" fill="none" stroke={ACCENT} strokeWidth="2" markerEnd="url(#mem-arrow-hot)" />
    <text x="371" y="98" textAnchor="middle" fontSize="11.5" fill={INK}>weights + KV cache, every step</text>
    <rect x="480" y="70" width="220" height="80" rx="8" fill="none" stroke={EDGE} strokeWidth="1.25" />
    <text x="496" y="96" fontWeight="600" fill={INK}>GPU compute</text>
    <text x="496" y="120" fontSize="11.5" fill={INK}>Math is fast; it often sits</text>
    <text x="496" y="136" fontSize="11.5" fill={INK}>idle waiting for data</text>
    <rect x="530" y="190" width="120" height="32" rx="8" fill="none" stroke={EDGE} strokeWidth="1.25" />
    <text x="590" y="210" textAnchor="middle" fill={INK}>1 new token</text>
    <g fill="none" stroke={EDGE} strokeWidth="1.25">
      <path d="M590 150V188" markerEnd="url(#mem-arrow)" />
      <path d="M530 206H420V132H478" markerEnd="url(#mem-arrow)" />
    </g>
    <text x="410" y="180" textAnchor="end" fontSize="11.5" fill={QUIET}>append it, then repeat</text>
    <text x="410" y="196" textAnchor="end" fontSize="11.5" fill={QUIET}>for every token</text>
  </svg>
);

const NcmDiagram = () => {
  const tok = (cx) => <rect x={cx - 32} y="78" width="64" height="32" rx="8" fill="none" stroke={EDGE} strokeWidth="1.25" />;
  const code = (x, y, w, main) => (
    <rect
      x={x}
      y={y}
      width={w}
      height="32"
      rx="8"
      fill={main ? ACCENT : 'none'}
      fillOpacity={main ? 0.12 : 1}
      stroke={main ? ACCENT : EDGE}
      strokeWidth={main ? 2 : 1.25}
    />
  );
  const words = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
  return (
    <svg viewBox="0 0 760 470" role="img" aria-label="NCM writes in a few levels instead of one pass per token" fontSize="13" className="block w-full h-auto">
      <defs>
        <marker id="ncm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill={EDGE} />
        </marker>
      </defs>
      <text x="24" y="30" fontSize="15" fontWeight="600" fill={INK}>NCM writes in a few levels instead of one pass per token</text>
      <text x="24" y="64" fontWeight="600" fill={INK}>Next-token prediction: one forward pass per token</text>
      <g>
        {words.map((w, i) => (
          <g key={i}>
            {tok(92 + i * 72)}
            <text x={92 + i * 72} y="98" textAnchor="middle" fontSize="12" fill={INK}>{w}</text>
          </g>
        ))}
      </g>
      <text x="60" y="132" fontSize="11.5" fill={QUIET}>9 tokens = 9 sequential passes, each reading the weights and KV cache from memory</text>
      <text x="24" y="172" fontWeight="600" fill={INK}>Next-Concept Modeling: one forward pass per level</text>
      <g>
        {code(170, 186, 390, true)}
        <text x="24" y="206" fill={INK}>Level 1 · gist</text>
        <text x="365" y="206" textAnchor="middle" fontSize="11.5" fill={INK}>rough idea of the whole answer</text>
      </g>
      <g>
        {code(170, 230, 191, false)}
        {code(369, 230, 191, false)}
        <text x="24" y="250" fill={INK}>Level 2</text>
      </g>
      <g>
        {code(170, 274, 91.5, false)}
        {code(269.5, 274, 91.5, false)}
        {code(369, 274, 91.5, false)}
        {code(468.5, 274, 91.5, false)}
        <text x="24" y="294" fill={INK}>Level 3 · detail</text>
      </g>
      <text x="576" y="240" fontSize="11.5" fill={QUIET}>all codes in a level</text>
      <text x="576" y="256" fontSize="11.5" fill={QUIET}>predicted in parallel</text>
      <g fill="none" stroke={EDGE} strokeWidth="1.25">
        <path d="M365 306V328" markerEnd="url(#ncm-arrow)" />
        <path d="M365 362V384" markerEnd="url(#ncm-arrow)" />
      </g>
      <rect x="285" y="330" width="160" height="32" rx="8" fill="none" stroke={EDGE} strokeWidth="1.25" />
      <text x="365" y="350" textAnchor="middle" fill={INK}>Tokenizer decoder</text>
      <rect x="170" y="386" width="390" height="32" rx="8" fill="none" stroke={EDGE} strokeWidth="1.25" />
      <text x="365" y="406" textAnchor="middle" fill={INK}>the quick brown fox jumps over the lazy dog</text>
      <text x="24" y="450" fontSize="11.5" fill={QUIET}>K levels, far fewer than L tokens: early levels are short, so early passes are cheap</text>
    </svg>
  );
};

const TricksDiagram = () => {
  const cell = (cx, wrong) => (
    <rect
      x={cx - 22}
      y="92"
      width="44"
      height="28"
      rx="6"
      fill={wrong ? BAD : 'none'}
      fillOpacity={wrong ? 0.15 : 1}
      stroke={wrong ? BAD : EDGE}
      strokeWidth="1.25"
    />
  );
  return (
    <svg viewBox="0 0 760 288" role="img" aria-label="Two training tricks make the coarse levels meaningful and robust" fontSize="13" className="block w-full h-auto">
      <defs>
        <marker id="tr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill={EDGE} />
        </marker>
      </defs>
      <text x="24" y="30" fontSize="15" fontWeight="600" fill={INK}>Two training tricks make the coarse levels meaningful and robust</text>
      <g>
        <rect x="24" y="48" width="340" height="216" rx="8" fill="none" stroke={EDGE} strokeWidth="1.25" />
        <text x="40" y="74" fontWeight="600" fill={INK}>Nested dropout (tokenizer)</text>
        <rect x="40" y="92" width="308" height="28" rx="6" fill={ACCENT} fillOpacity="0.12" stroke={ACCENT} strokeWidth="2" />
        <text x="194" y="110" textAnchor="middle" fontSize="12" fill={INK}>Level 1 · always kept</text>
        <rect x="40" y="128" width="308" height="28" rx="6" fill="none" stroke={EDGE} strokeWidth="1.25" />
        <text x="194" y="146" textAnchor="middle" fontSize="12" fill={INK}>Level 2 · kept</text>
        <rect x="40" y="164" width="308" height="28" rx="6" fill="none" stroke={EDGE} strokeWidth="1.25" strokeDasharray="4 4" />
        <text x="194" y="182" textAnchor="middle" fontSize="12" fill={QUIET}>Level 3 · dropped this step</text>
        <text x="40" y="220" fontSize="11.5" fill={QUIET}>Random cutoff k: the decoder rebuilds</text>
        <text x="40" y="236" fontSize="11.5" fill={QUIET}>the text from levels 1 to k alone</text>
      </g>
      <g>
        <rect x="396" y="48" width="340" height="216" rx="8" fill="none" stroke={EDGE} strokeWidth="1.25" />
        <text x="412" y="74" fontWeight="600" fill={INK}>Conditioning corruption (generator)</text>
        {cell(434, false)}
        {cell(486, true)}
        {cell(538, false)}
        {cell(590, false)}
        {cell(642, true)}
        {cell(694, false)}
        <text x="566" y="138" textAnchor="middle" fontSize="11.5" fill={QUIET}>some input codes swapped for random ones</text>
        <g fill="none" stroke={EDGE} strokeWidth="1.25">
          <path d="M566 146V164" markerEnd="url(#tr-arrow)" />
          <path d="M566 194V212" markerEnd="url(#tr-arrow)" />
        </g>
        <rect x="478" y="166" width="176" height="28" rx="6" fill="none" stroke={EDGE} strokeWidth="1.25" />
        <text x="566" y="184" textAnchor="middle" fontSize="12" fill={INK}>Generator</text>
        <rect x="438" y="214" width="256" height="32" rx="6" fill={ACCENT} fillOpacity="0.12" stroke={ACCENT} strokeWidth="2" />
        <text x="566" y="234" textAnchor="middle" fontSize="12" fill={INK}>still predicts the true codes</text>
      </g>
    </svg>
  );
};

const SUDOKU_ROWS = [
  { slug: 'ncm', model: 'NCM', nfe: 12, hard: 86.1 },
  { slug: 'fmlm', model: 'FMLM+', nfe: 16, hard: 81.3 },
  { slug: 'duo', model: 'DUO', nfe: 128, hard: 58.4 },
  { slug: 'sflm', model: 'S-FLM', nfe: 128, hard: 45.0 },
  { slug: 'flm', model: 'FLM', nfe: 128, hard: 44.5 },
  { slug: 'mdlm', model: 'MDLM', nfe: 128, hard: 30.2 },
  { slug: 'ar-greedy', model: 'AR, greedy', nfe: 128, hard: 1.0 },
  { slug: 'ar-sample', model: 'AR, sample', nfe: 128, hard: 0.6 },
];

const SudokuChart = () => {
  const x0 = 240;
  const span = 420;
  const Y = (i) => 84 + i * 32;
  return (
    <svg
      viewBox="0 0 760 352"
      role="img"
      aria-label="NCM solves 86% of hard Sudoku boards in 12 steps; autoregressive models solve about 1%"
      fontSize="12.5"
      className="block w-full h-auto"
    >
      <text x="24" y="30" fontSize="15" fontWeight="600" fill={INK}>NCM solves 86% of hard Sudoku boards in 12 steps; AR models solve about 1%</text>
      <text x="24" y="52" fontSize="11.5" fill={QUIET}>Completely solved hard boards (30 clues), %. Steps = forward passes (NFE).</text>
      {SUDOKU_ROWS.map((r, i) => {
        const hot = r.slug === 'ncm';
        const w = Math.max((r.hard / 100) * span, 2);
        return (
          <g key={r.slug}>
            <text x="24" y={Y(i) + 14} fontWeight={hot ? 600 : 400} fill={INK}>{r.model}</text>
            <text x="224" y={Y(i) + 14} textAnchor="end" fontSize="11.5" fill={QUIET}>{`${r.nfe} steps`}</text>
            <rect x={x0} y={Y(i)} width={w} height="20" rx="3" fill={hot ? ACCENT : MUTED}>
              <title>{`${r.model}: ${r.hard}% of hard boards solved in ${r.nfe} steps`}</title>
            </rect>
            <text x={x0 + w + 8} y={Y(i) + 14} fontWeight={hot ? 600 : 400} fill={INK}>{`${r.hard}%`}</text>
          </g>
        );
      })}
    </svg>
  );
};

const HardwareDiagram = () => {
  const steps = Array.from({ length: 16 }, (_, i) => 200 + i * 26);
  return (
    <svg viewBox="0 0 760 224" role="img" aria-label="Fewer, heavier steps move the bottleneck from memory to compute" fontSize="13" className="block w-full h-auto">
      <text x="24" y="30" fontSize="15" fontWeight="600" fill={INK}>Fewer, heavier steps move the bottleneck from memory to compute</text>
      <g>
        <text x="24" y="97" fontWeight="600" fill={INK}>Autoregressive</text>
        {steps.map((x) => (
          <rect key={x} x={x} y="80" width="20" height="24" rx="4" fill="none" stroke={EDGE} strokeWidth="1.25" />
        ))}
        <text x="640" y="97" fill={INK}>memory-bound</text>
        <text x="200" y="126" fontSize="11.5" fill={QUIET}>L light steps, one per token, each mostly waiting on memory</text>
      </g>
      <g>
        <text x="24" y="167" fontWeight="600" fill={INK}>NCM</text>
        <rect x="200" y="150" width="40" height="24" rx="4" fill={ACCENT} fillOpacity="0.12" stroke={ACCENT} strokeWidth="2" />
        <rect x="248" y="150" width="100" height="24" rx="4" fill={ACCENT} fillOpacity="0.12" stroke={ACCENT} strokeWidth="2" />
        <rect x="356" y="150" width="260" height="24" rx="4" fill={ACCENT} fillOpacity="0.12" stroke={ACCENT} strokeWidth="2" />
        <text x="220" y="166" textAnchor="middle" fontSize="11.5" fill={INK}>L1</text>
        <text x="298" y="166" textAnchor="middle" fontSize="11.5" fill={INK}>L2</text>
        <text x="486" y="166" textAnchor="middle" fontSize="11.5" fill={INK}>L3</text>
        <text x="640" y="167" fill={INK}>compute-heavy</text>
        <text x="200" y="196" fontSize="11.5" fill={QUIET}>K heavy steps: early levels are short, the last does full-length parallel work</text>
      </g>
    </svg>
  );
};

const CODE = [
  'git clone https://github.com/HazyResearch/ncm.git',
  'cd ncm',
  'pip install -r requirements.txt',
  '',
  'hf download hazyresearch/ncm-checkpoints --local-dir artifacts',
  'hf download hazyresearch/ncm-datasets --repo-type dataset --local-dir data',
  '',
  'python evaluate.py --config config/eval/<task>.yaml \\',
  '  --checkpoint-dir artifacts/<task> --data-dir data/<task>',
].join('\n');

const TITLE = 'Stop Typing: How Next-Concept Modeling Writes Text Coarse-to-Fine';

export default function NextConceptModeling() {
  useDocumentTitle(TITLE + ' | Kaustubh Ramekar');
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#A4B494]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3A6B35]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#3A6B35] hover:text-[#2D5016] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Blog</span>
          </Link>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-2xl mb-8 shadow-lg">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] leading-tight">
              Stop Typing: How Next-Concept Modeling Writes Text <span className="text-[#3A6B35]">Coarse-to-Fine</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8 text-lg text-gray-700 leading-relaxed">
          <P>
            Stanford’s Hazy Research lab and Together AI have a new way to generate text. It sketches the whole answer first and sharpens it over a handful of passes. They call it{' '}
            <strong>Next-Concept Modeling (NCM)</strong>. At about 100M parameters it matches or beats the strongest diffusion language models while running <strong>10–31× faster</strong>. On hard Sudoku it solves{' '}
            <strong>86.1%</strong> of boards, where small autoregressive models solve about 1%.
          </P>

          <P>
            The paper is <A href={PAPER}>Next-Concept Modeling: Fast, Parallel Coarse-to-Fine Text Generation</A> (arXiv 2610.14162, 9 October 2026). The code and weights are open under the MIT license at{' '}
            <A href={REPO}>HazyResearch/ncm</A>.
          </P>

          <H2>Why word-by-word generation is expensive</H2>
          <P>
            A standard LLM writes one token per forward pass. Each pass has to stream the model’s weights, plus a growing KV cache, from GPU memory (HBM) into the compute units. The arithmetic is fast; moving the data is the slow part. So a 2,000-token answer means roughly 2,000 sequential trips through memory, with the GPU often waiting on bandwidth rather than doing math.
          </P>
          <Figure caption="The memory-bandwidth bottleneck in autoregressive decoding">
            <MemoryDiagram />
          </Figure>
          <P>
            Reasoning models make this worse, because they generate thousands of hidden “thinking” tokens before the visible answer. That is a big reason inference now dominates AI compute budgets, and why HBM and power are so contested. Any method that produces text in far fewer sequential steps attacks the problem at its root.
          </P>

          <H2>The two existing answers, and where they fall short</H2>
          <P>
            NCM’s real rival in the paper is not GPT-style models. It is <strong>diffusion language models (DLMs)</strong>, the leading attempt to escape one-token-at-a-time generation. Commercial systems such as Mercury and DiffusionGemma already serve them.
          </P>
          <Table
            head={['Paradigm', 'Sequential steps for L tokens', 'Work per step', 'Main weakness']}
            rows={[
              ['Autoregressive (next-token)', 'L', 'One new token, reuses KV cache', 'Long chains of memory-bound steps; can’t revise earlier tokens'],
              ['Masked diffusion (MDLM, DUO)', 'T denoising steps, T often 128+', 'Full sequence every step, no KV cache reuse', 'Quality drops fast with fewer steps; training needs 500B+ tokens'],
              ['Next-Concept Modeling', 'K levels, K ≪ L', 'Short sequences early, full length only at the last level', 'Fixed hierarchy depth; separately trained tokenizer'],
            ]}
          />
          <P>
            The paper lists three DLM pain points. Cutting denoising steps degrades quality. Every step processes the whole sequence. And strong baselines like DUO and MDLM train for 1M steps on over 500B tokens. NCM is built to fix all three.
          </P>

          <H2>How NCM works: sketch first, sharpen later</H2>
          <P>
            NCM generates text the way image models like VAR generate pictures: a blurry whole first, then finer detail. Think of zooming into a map, from country to city to street. It has two parts.
          </P>
          <Figure caption="Next-token prediction vs next-concept modeling">
            <NcmDiagram />
          </Figure>
          <P>The fine levels only add detail; the coarse levels already fix what the answer is about.</P>
          <P>
            <strong>Part 1: a multiscale residual VQ-VAE tokenizer.</strong> It encodes a text of L tokens into K levels of discrete codes. Level 1 has only a few codes; each later level is longer, and the last has L. Each level quantizes the <em>residual</em>, meaning the error the earlier levels left behind. Adding up the levels’ contributions gives a progressively sharper reconstruction, which a decoder turns back into tokens.
          </P>
          <P>
            <strong>Part 2: a coarse-to-fine transformer.</strong> With the tokenizer frozen, a transformer learns to predict level k from the cumulative reconstruction of levels 1 to k−1. All codes within one level are predicted <strong>in parallel</strong>, so generation takes K sequential steps instead of L. Training covers all levels in a single forward pass with a cross-entropy loss.
          </P>
          <P>
            The authors use “concept” to mean the information carried by the coarse levels. It is a learned compression code, not a human-readable idea.
          </P>

          <H2>Three tricks that make it work</H2>
          <P>
            A hierarchy is only useful if the top levels hold the important information and the model can recover from its own mistakes. The authors use three techniques for this.
          </P>
          <Figure caption="Nested dropout and conditioning corruption, as described in the paper">
            <TricksDiagram />
          </Figure>
          <P>
            <strong>1. Nested dropout (tokenizer training).</strong> During tokenizer training, a random cutoff k is sampled and only the first k levels are kept for reconstruction. The decoder must often rebuild the text from coarse levels alone. That forces level 1 to carry the gist instead of leaving everything to the fine levels. Without it, level 1 could hold noise, and every later level would build on a meaningless start.
          </P>
          <P>
            <strong>2. Conditioning corruption (generator training).</strong> At inference the generator conditions on its own earlier predictions, so an early mistake can compound. To prepare for this, training swaps a fraction of the conditioning codes for random codes from the same level’s codebook. The labels stay correct. The model learns to repair a flawed outline rather than faithfully elaborate it. Corruption rates vary by level.
          </P>
          <P>
            <strong>3. Spending the saved time on more answers (test-time scaling).</strong> Because NCM is so cheap per sample, it can generate many candidates in the time a diffusion model makes one. <strong>Minimum Bayes risk (MBR) decoding</strong> then picks the candidate with the highest average similarity to the others, a consensus pick. On XSum summarization, this gives about <strong>7% higher ROUGE-L</strong> than the strongest baseline at the same sampling-time budget. Classifier-free guidance (CFG) is also supported for conditional tasks.
          </P>

          <H2>The results</H2>
          <P>
            Across every benchmark, NCM matches or beats the best diffusion baselines with far fewer forward passes (NFE). Wall-clock times were measured generating 1,024 sequences at batch size 16 on one NVIDIA H100 SXM 80GB.
          </P>
          <Table
            head={['Task', 'Strongest baseline', 'NCM result']}
            rows={[
              ['LM1B (unconditional)', 'DUO', <>Better generative perplexity, 11× fewer NFE, <strong>21× faster</strong></>],
              ['OpenWebText (unconditional)', 'Strongest DLM', <>Competitive quality, <strong>10× faster</strong></>],
              ['XSum (summarization)', 'AURORA-LM', <>Matches ROUGE-L, 16× fewer NFE, <strong>31× faster</strong></>],
              ['WMT14 De–En (translation)', 'E2D2', 'Second among non-AR models, 5.8× fewer NFE'],
              ['Training budget (LM1B)', 'Diffusion baselines, 66B tokens', <>13.36B tokens, <strong>4.9× fewer</strong>, tokenizer included</>],
            ]}
          />
          <P>The speedup has two sources: fewer steps, and cheaper steps, because early levels are short.</P>

          <H3>Sudoku: where global planning pays off</H3>
          <P>
            Sudoku punishes left-to-right writing. An autoregressive model commits to each digit and cannot go back when a later cell exposes a conflict. NCM refines a representation of the whole board at every level, so later levels can correct earlier partial solutions. Difficulty is set by the number of clues: 40, 35 and 30.
          </P>
          <Figure caption="Source: arXiv 2610.14162, Table 3 (baselines from Agarwal et al.)">
            <SudokuChart />
          </Figure>
          <Table
            compact
            head={['Model', 'Type', 'Size', 'NFE', 'Easy (%)', 'Medium (%)', 'Hard (%)']}
            rows={[
              [<strong>NCM</strong>, 'Coarse-to-fine', '25M', <strong>12</strong>, <strong>99.5</strong>, <strong>96.5</strong>, <strong>86.1</strong>],
              ['FMLM+', 'Continuous flow', '29M', '16', '97.7', '92.8', '81.3'],
              ['DUO', 'Discrete diffusion', '29M', '128', '96.3', '84.7', '58.4'],
              ['S-FLM', 'Continuous flow', '29M', '128', '94.8', '85.2', '45.0'],
              ['FLM', 'Continuous flow', '29M', '128', '94.2', '82.7', '44.5'],
              ['MDLM', 'Discrete diffusion', '29M', '128', '92.0', '77.1', '30.2'],
              ['AR, greedy', 'Autoregressive', '25M', '128', '14.6', '5.1', '1.0'],
              ['AR, sample', 'Autoregressive', '25M', '128', '13.9', '5.1', '0.6'],
            ]}
          />
          <P>
            Solved boards are completely correct boards. Baseline numbers come from Agarwal et al., as reported in the paper’s Table 3.
          </P>

          <H2>Limitations: “LLMs are dead” is premature</H2>
          <P>NCM is a strong proof of concept, not a replacement for frontier models yet. Read it with these caveats.</P>
          <Bullets
            items={[
              <>
                <strong>Small scale.</strong> The main experiments use generators of about 100M parameters, and the scaling study stops at 725M on LM1B. Frontier LLMs are around a thousand times larger. Quality did improve from 97M to 317M to 725M at a fixed token budget, which is encouraging but not proof.
              </>,
              <>
                <strong>The comparison is mostly against diffusion models.</strong> The headline 10–31× speedups are over diffusion LMs, not over production autoregressive LLMs with KV caching and speculative decoding.
              </>,
              <>
                <strong>Fixed hierarchy.</strong> Depth K and per-level lengths are fixed, so even a short reply runs the full hierarchy. The authors suggest an input-dependent schedule as future work.
              </>,
              <>
                <strong>Two-stage training.</strong> The tokenizer is trained separately and frozen. Its reconstruction is not perfect for open text: 100% on Sudoku, but some errors swap related words or names. End-to-end training is an open direction.
              </>,
              <>
                <strong>Seams between levels.</strong> Output is generally fluent, but the authors note occasional artifacts at coarse-level transitions.
              </>,
            ]}
          />

          <H3>What it means for hardware</H3>
          <P>
            Fewer sequential steps means fewer trips to memory, which eases the memory-bandwidth bottleneck that makes HBM so valuable. But each step now does more parallel work, so the bottleneck shifts toward compute. That makes better use of a GPU’s arithmetic, but it does not make memory demand vanish. The paper itself makes no claims about RAM prices or energy use, so treat those predictions as speculation.
          </P>
          <Figure caption="Schematic, not to scale">
            <HardwareDiagram />
          </Figure>

          <H2>Try it yourself</H2>
          <P>
            The repo ships evaluation code and checkpoints for six tasks: XSum, WMT14 De–En, Sudoku (easy, medium, hard), LM1B (small, medium, large), TinyStories and OpenWebText. Each release pairs a frozen tokenizer with a generator. You’ll want Python 3.10+ and a CUDA build of PyTorch.
          </P>
          <pre className="overflow-x-auto rounded-xl bg-[#1F2A1C] p-5 text-sm leading-relaxed text-gray-100">
            <code className="font-mono">{CODE}</code>
          </pre>
          <P>
            The script runs one generation shard per visible GPU and reports task metrics. Add <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em]">--cfg &lt;scale&gt;</code> to turn on classifier-free guidance for XSum and WMT14. The README currently documents evaluation only, not training.
          </P>

          <H2>The bottom line</H2>
          <P>
            NCM shows that text doesn’t have to be written left to right. Planning the whole answer coarse-to-fine gives large speedups and better global reasoning at small scale. Whether it holds at frontier scale is the open question worth watching.
          </P>

          <H2>Sources</H2>
          <Bullets
            items={[
              <>
                Paper: <A href={PAPER}>Next-Concept Modeling: Fast, Parallel Coarse-to-Fine Text Generation</A>, Kumbong, Khare, Mlauzi, Woen, Ding, Buchanan, Arora, Mirhoseini, Ré (Stanford University, Together AI)
              </>,
              <>
                Code: <A href={REPO}>HazyResearch/ncm on GitHub</A>, MIT license
              </>,
              <>
                Models and data: <A href="https://huggingface.co/collections/hazyresearch/ncm">NCM collection on Hugging Face</A>
              </>,
              <>
                <A href="https://hazyresearch.stanford.edu/blog/2026-10-12-ncm">Hazy Research blog post</A> and{' '}
                <A href="https://scalingintelligence.stanford.edu/blogs/ncm/">Scaling Intelligence blog post</A>
              </>,
            ]}
          />
        </div>

        <Link
          to={createPageUrl('Blog')}
          className="inline-flex items-center gap-2 text-[#3A6B35] hover:text-[#2D5016] mt-10 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to all posts
        </Link>
      </div>
    </div>
  );
}
