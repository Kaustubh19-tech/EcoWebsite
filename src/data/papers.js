// Single source of truth for the My Research listing, the paper pages and the "Cite as" boxes.
// Papers are shown without a written or published date, by choice. The citation year is kept
// because a citation needs one.

export const SITE_URL = 'https://eco-tech-kksr.vercel.app';
export const AUTHOR = 'Kaustubh Ramekar';
export const AFFILIATION_LINE_1 = 'Independent researcher: technology, environment and society';
export const ORCID_ID = '0009-0007-9522-1226';
export const ORCID_URL = `https://orcid.org/${ORCID_ID}`;
export const AFFILIATION_LINE_2 = 'London, United Kingdom';

export const papers = [
  {
    slug: 'social-tipping-points',
    path: '/my-research/social-tipping-points',
    title:
      'From tip point to intervention object: three epistemic shifts in the concept of social tipping points, 1957–2026',
    year: 2026,
    bibKey: 'ramekar2026tipping',
    pdf: '/research/from-tip-point-to-intervention-object.pdf',
    summary:
      'The phrase “social tipping point” is used in climate-governance research as if it named one concept with a long pedigree. This paper argues that it names three incompatible objects.',
    detection:
      'A detector has to be told which object it is looking for. This paper separates the three, so that a claim to have detected a social tipping point can say what was detected.',
  },
  {
    slug: 'where-the-analogy-breaks',
    path: '/my-research/where-the-analogy-breaks',
    title: 'Where the analogy breaks: ecological versus social tipping points',
    year: 2026,
    bibKey: 'ramekar2026analogy',
    pdf: '/research/where-the-analogy-breaks.pdf',
    summary:
      'Social tipping points are now a policy instrument and a target for computational detection, yet the concept borrows its vocabulary from theoretical ecology and Earth-system science. This paper tests which parts of that vocabulary carry over.',
    detection:
      'Language-model and other detectors can show that something changed, but not on their own that a tipping point is approaching. Section 6 sets out three levels of claim, and the hindsight problem that supervised detectors face.',
  },
  {
    slug: 'does-heat-leave-a-mark',
    path: '/my-research/does-heat-leave-a-mark',
    title: 'Does heat leave a mark? A pre-registered study of UK heatwaves and public attention, 2022–2026',
    year: 2026,
    bibKey: 'ramekar2026heat',
    pdf: '/research/does-heat-leave-a-mark.pdf',
    summary:
      'Nine UK heatwaves between 2022 and 2026, dated by a fixed rule from gridded temperature data, are compared with Google Trends and Wikipedia attention. Searches about heat, coping and climate change spike in the week a heatwave begins and are back to normal within one to two weeks. The analysis plan was pre-registered, and the paper reports where its design falls short.',
    detection:
      'Attention data can show that something moved. This study shows how to tell a one-week spike from a lasting shift, and how a placebo check can undermine an apparent effect.',
  },
];

export const getPaper = (slug) => papers.find((p) => p.slug === slug);

export const citationText = (p) =>
  `Ramekar, K. (${p.year}). ${p.title}. Preprint. ${SITE_URL}${p.path}`;

export const bibtex = (p) =>
  [
    `@misc{${p.bibKey},`,
    `  author = {Ramekar, Kaustubh},`,
    `  title  = {${p.title.replace(/–/g, '--')}},`,
    `  year   = {${p.year}},`,
    `  note   = {Preprint},`,
    `  url    = {${SITE_URL}${p.path}}`,
    `}`,
  ].join('\n');
