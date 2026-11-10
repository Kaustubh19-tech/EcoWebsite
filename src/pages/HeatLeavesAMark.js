import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CiteBox, DownloadButton, OrcidLink } from '../components/PaperActions';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { getPaper } from '../data/papers';

const paper = getPaper('does-heat-leave-a-mark');

const serif = '"Times New Roman", Times, "Liberation Serif", "Nimbus Roman", serif';
const hyphens = { hyphens: 'auto', WebkitHyphens: 'auto' };
const REPO = 'https://github.com/TheAlchemist108/heat-leaves-a-mark';

const P = ({ children }) => (
  <p className="mb-[0.85em] text-justify" style={hyphens}>
    {children}
  </p>
);

const H2 = ({ n, id, children }) => (
  <h2 id={id} className="mt-10 mb-3 text-[1.3rem] font-bold leading-snug print:[break-after:avoid]">
    {n && <span className="inline-block min-w-[2rem]">{n}</span>}
    {children}
  </h2>
);

const H3 = ({ n, id, children }) => (
  <h3 id={id} className="mt-7 mb-2 text-[1.1rem] font-bold leading-snug print:[break-after:avoid]">
    {n && <span className="inline-block min-w-[2.6rem]">{n}</span>}
    {children}
  </h3>
);

const Ext = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#b31b1b] hover:underline break-words"
  >
    {children}
  </a>
);

// In-text citation: links to the matching entry in the reference list.
const C = ({ k, children }) => (
  <a href={'#ref-' + k} className="hover:text-[#b31b1b] hover:underline">
    {children}
  </a>
);

// Cross-reference to a section, figure or table.
const X = ({ to, children }) => (
  <a href={'#' + to} className="hover:text-[#b31b1b] hover:underline">
    {children}
  </a>
);

const Th = ({ children, w, right }) => (
  <th
    className={'px-2 py-1.5 align-bottom font-bold ' + (right ? 'text-right' : 'text-left')}
    style={{ borderTop: '2px solid #111', borderBottom: '1px solid #111', width: w }}
  >
    {children}
  </th>
);

const Td = ({ children, right }) => (
  <td
    className={'px-2 py-1.5 align-top ' + (right ? 'text-right' : 'text-left')}
    style={{ borderBottom: '1px solid #e4e4e4' }}
  >
    {children}
  </td>
);

const BottomRule = ({ cols }) => (
  <tr>
    <td colSpan={cols} style={{ borderTop: '2px solid #111', padding: 0 }} />
  </tr>
);

const Figure = ({ n, src, alt, w = 1000, children }) => (
  <figure
    id={'fig-' + n}
    className="relative my-8 print:[break-inside:avoid]"
    style={{ left: '50%', transform: 'translateX(-50%)', width: 'min(' + w + 'px, calc(100vw - 2rem))' }}
  >
    <img src={src} alt={alt} className="block w-full h-auto" />
    <figcaption className="mx-auto mt-3 max-w-3xl text-[0.9rem] leading-snug text-justify" style={hyphens}>
      <strong>Figure {n}:</strong> {children}
    </figcaption>
  </figure>
);

// Equation (1): the national event-study model.
const Equation = () => (
  <div className="relative my-6 overflow-x-auto">
    <div className="flex items-center justify-center gap-1.5 px-10 whitespace-nowrap">
      <span>
        <i>y</i>
        <sub><i>w</i></sub> =
      </span>
      <span className="inline-flex flex-col items-center leading-none text-[0.8rem]">
        <span>12</span>
        <span className="text-[1.9rem] leading-[1.1]">∑</span>
        <span><i>k</i>=−4</span>
      </span>
      <span>
        <i>β</i>
        <sub><i>k</i></sub> <i>D</i>
        <sub><i>w</i>−<i>k</i></sub> + <i>μ</i>
        <sub>week of year(<i>w</i>)</sub> + <i>τ</i>
        <sub>year(<i>w</i>)</sub> + <i>ε</i>
        <sub><i>w</i></sub> ,
      </span>
    </div>
    <span className="absolute right-0 top-1/2 -translate-y-1/2">(1)</span>
  </div>
);

const HYP_HEAD = ['Outcomes', 'Hyp.', 'Estimate', 'p model', 'p RI', 'p cal., Holm', 'Pre-registered rule', 'Calibrated'];
const HYP_ROWS = [["Plan","H1","–","–","–","–","not testable","not testable"],["Plan","H2","–","–","–","–","not testable","not testable"],["Plan","H3","−0.14","0.675","0.301","0.917","inconclusive","inconclusive"],["Plan","H4","–","–","–","–","not testable","not testable"],["Plan","H5a","–","–","–","–","not testable","not testable"],["Plan","H5b","0.13","0.093","0.458","0.917","not detected","not detected"],["Plan","H6","–","–","–","–","not testable","not testable"],["Dev. 2","H1","0.62","0.009","0.012","0.087","present (+)","not detected"],["Dev. 2","H2","−1.67","1.000","<0.001","1.000","undershoot","undershoot"],["Dev. 2","H3","−0.18","0.818","0.123","1.000","inconclusive","inconclusive"],["Dev. 2","H4","0.38","0.079","0.135","0.677","not detected","not detected"],["Dev. 2","H5a","0.85","<0.001","0.042","0.250","present (+)","not detected"],["Dev. 2","H5b","0.32","<0.001","0.208","0.833","not detected","not detected"],["Dev. 2","H6","−0.04","0.876","1.000","1.000","not detected","not detected"]];
const ROB_HEAD = ['Check', 'Salience', 'Coping', 'Concern', 'Placebo (car insurance)'];
const ROB_ROWS = [["Main specification","0.62","0.68","0.30","0.02"],["Drop COP, election, state-funeral weeks","0.58","0.73","0.29","0.02"],["Threshold: 90th percentile","1.13","1.16","0.26","0.00"],["Threshold: 97.5th percentile","0.58","0.72","0.33","0.02"],["Met Office–documented dates","0.46","0.24","0.13","0.04"],["Placebo: dates shifted −2 years","0.03","−0.80","−0.26","−0.05"],["Placebo: shifted −1 year","0.21","−0.72","−0.07","0.05"],["Placebo: shifted +1 year","−0.04","0.46","0.30","−0.04"],["Placebo: shifted +2 years","−0.37","1.04","−0.12","0.13"]];

export default function HeatLeavesAMark() {
  useDocumentTitle(paper.title + ' | Kaustubh Ramekar');
  return (
    <div className="min-h-screen bg-white text-[#111]" style={{ fontFamily: serif }}>
      <div className="border-b border-gray-300 bg-[#f5f5f5] font-sans print:hidden">
        <div className="max-w-3xl mx-auto px-5 py-3 flex items-center justify-between text-sm">
          <Link
            to="/my-research"
            className="inline-flex items-center gap-2 text-[#3A6B35] hover:text-[#2D5016] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to My Research</span>
          </Link>
          <span className="text-gray-600">Preprint</span>
        </div>
      </div>

      <article lang="en-GB" className="max-w-3xl print:max-w-[880px] mx-auto px-5 pt-10 pb-20 print:pt-0 print:pb-0 text-[1.1rem] leading-[1.6]">
        <header className="text-center">
          <h1 className="text-[1.7rem] sm:text-[2.05rem] font-bold leading-tight">
            Does heat leave a mark?
            <span className="mt-2 block text-[1.2rem] sm:text-[1.4rem] font-normal">
              A pre-registered study of UK heatwaves and public attention,{' '}
              <span className="whitespace-nowrap">2022–2026</span>
            </span>
          </h1>
          <p className="mt-6 text-[1.25rem]">Kaustubh Ramekar</p>
          <p className="mt-1 text-[0.95rem] leading-snug text-gray-700">
            Independent researcher: technology, environment and society
            <br />
            London, United Kingdom
          </p>
          <p className="mt-1 text-[0.95rem] text-gray-700">
            <OrcidLink />
          </p>
          <DownloadButton paper={paper} />
        </header>

        <section className="mx-auto mt-9 max-w-[42rem]">
          <h2 className="mb-2 text-center text-[1.05rem] font-bold">Abstract</h2>
          <p className="text-justify text-[1rem] leading-[1.55]" style={hyphens}>
            Extreme heat is the climate impact that most people in the UK now experience directly. Does it change what they pay attention to, and does any change last? I study 9 UK heatwaves between 2022 and 2026, dated by a fixed rule from gridded temperature data, and measure attention with Google Trends (repeated, anchored pulls for the UK and its four nations) and Wikipedia pageviews. The analysis plan was archived publicly before the outcome data were collected, and every later change is logged. Searches for “heatwave” rise by about 86% in the week a heatwave begins, coping searches (air conditioning, heat stroke) by about 97%, and climate-concern searches (climate change, global warming, net zero) by about 35%. Within one to two weeks all three return to normal levels, and two to three months later none is distinguishable from normal. The design has limits that I report in full: with nine events the pre-registered standard errors are far too small, so inference relies on placebo dates; after correction for seven hypotheses no single hypothesis passes the calibrated tests; and placebo tests that shift heatwave dates by a year produce effects as large as the real ones for coping and concern searches. The evidence is consistent with heat producing a short spike in attention, not a lasting shift.
          </p>
          <p className="mt-4 text-[1rem]">
            <strong>Keywords:</strong> heatwaves; climate change; public attention; Google Trends; pre-registration; event study; randomisation inference; United Kingdom
          </p>
        </section>

        <CiteBox paper={paper} />

        <hr className="my-8 border-gray-300" />

        <H2 n="1" id="sec-1">Introduction</H2>

        <P>Heatwaves are becoming the UK’s most direct experience of a changing climate. In July 2022 temperatures passed 40&nbsp;°C for the first time, and the summers since have brought repeated heatwaves. A long-standing question in climate communication is whether such experiences change what people think about. If they do, and if the change lasts, extreme weather could act as a lever for climate engagement. If attention returns to normal as soon as the heat breaks, its role is smaller.</P>

        <P>Earlier work suggests that local weather does move attention and beliefs. Unusually warm weather shifts stated beliefs about global warming (<C k="egan2012">Egan and Mullin, 2012</C>), extreme events are associated with higher climate concern (<C k="konisky2016">Konisky et al., 2016</C>), and weather fluctuations change how often people search for climate information (<C k="lang2014">Lang, 2014</C>). Social-media studies find that extreme events generate climate discussion, but unevenly (<C k="sisco2017">Sisco et al., 2017</C>), and that people quickly come to treat recent temperatures as normal (<C k="moore2019">Moore et al., 2019</C>). This fits the older idea of an issue-attention cycle, in which public interest rises sharply and then fades (<C k="downs1972">Downs, 1972</C>). The heat itself also carries serious health and development costs (<C k="debnath2023">Debnath et al., 2023</C>), which makes understanding public responses to it more pressing.</P>

        <P>Two features make most of this evidence hard to read causally. First, attention is strongly seasonal, so comparing a summer heatwave with the spring before it mixes heat with summer. Second, many analyses are chosen after the data are seen. This study addresses both. It compares heatwave weeks with the same calendar weeks in other years, uses placebo dates and placebo outcomes, and follows an analysis plan that was archived before the outcome data were collected.</P>

        <P>The main finding is a sharp, short spike. Searches about heat, about coping with it, and about climate change all rise in the week a heatwave starts and are back to normal within one to two weeks, with no detectable residue two to three months later. I also report, in full, where the design falls short: some hypotheses could not be tested as planned, the planned standard errors were invalid with so few events, and some placebo checks failed.</P>

        <H2 n="2" id="sec-2">Data</H2>

        <H3 n="2.1" id="sec-2-1">Heat</H3>

        <P>Daily maximum temperatures come from HadUK-Grid (<C k="hollis2019">Hollis et al., 2019</C>), the Met Office’s gridded observations, as official area averages for England, Scotland, Wales and Northern Ireland. HadUK-Grid does not yet cover 2026, so 2026 uses ERA5 (<C k="hersbach2020">Hersbach et al., 2020</C>) daily maxima, averaged over each nation and calibrated to HadUK-Grid on April–October 2016–2025 (daily correlations 0.986–0.996 by nation). A UK series is the population-weighted mean of the four nations.</P>

        <P>A heatwave day is a day in a run of at least three consecutive days with a maximum at or above the 95th percentile of June–August 1991–2020 (25.5&nbsp;°C for the UK; from 21.6&nbsp;°C in Scotland to 26.2&nbsp;°C in England). The three-day rule follows the Met Office heatwave definition. Spells less than 14 days apart form one episode. This gives 9 UK episodes between November 2021 and October 2026 (Figure <X to="fig-1">1</X>). The largest, starting 22 June 2026, delivered 34.7 degree-days above the threshold, compared with 19.5 for the record-breaking July 2022 heat. Weekly heat dose, the sum of daily excesses over the threshold, measures how hot each nation was in each week.</P>

        <Figure n={1} w={660} src="/images/heat_leaves_a_mark_fig1.png" alt="Five stacked panels, one for each year from 2022 to 2026, showing UK daily maximum temperature from April to October. A dashed line marks the heatwave threshold of 25.5 degrees Celsius and heatwave days are shaded.">
          UK daily maximum temperature, April–October 2022–2026. Shaded days are heatwave days under the pre-registered rule.
        </Figure>

        <H3 n="2.2" id="sec-2-2">Attention</H3>

        <P><strong>Google Trends.</strong> Weekly search interest for the UK and each nation, 7 November 2021 to 31 October 2026, and daily UK series for each summer. Google Trends reports each request on its own 0–100 scale, so every request includes an anchor term (“dentist”) and each term is expressed as its log ratio to the anchor. Google estimates interest from a sample of searches, so each request was downloaded 3 times on different days and averaged; between-pull correlations are at least 0.92 for every UK series. Terms are grouped into pre-specified families: salience (“heatwave”), coping (“air conditioning”, “portable air conditioner”, “heat stroke”), concern (“climate change”, “global warming”, “net zero”), and placebo outcomes (“car insurance”, “recipes”).</P>

        <P><strong>Wikipedia.</strong> Daily pageviews of ten pre-specified English Wikipedia articles, globally and, where Wikimedia publishes them, for UK readers only. UK-only figures are withheld on days with few views, and only 1 of the ten articles (the placebo) is published on enough days to pass the pre-registered coverage rule. The UK-only Wikipedia analysis therefore carries little information, and global pageviews serve as a secondary check.</P>

        <H2 n="3" id="sec-3">Design</H2>

        <P><strong>Pre-registration.</strong> The analysis plan, including terms, models, hypotheses and decision rules, was committed as the first version of a public repository and archived independently before any outcome data were downloaded. Four deviations were made later. Each is logged with its date and with what had been seen at the time, and each was committed before the analysis it affects was run, except the fourth, which is post hoc and reported as such (Section <X to="sec-5">5</X>).</P>

        <P><strong>National event study.</strong> For each weekly UK outcome <i>y</i><sub><i>w</i></sub>,</P>

        <Equation />

        <P>where <i>D</i><sub><i>w</i>−<i>k</i></sub> counts heatwave onsets <i>k</i> weeks before week <i>w</i>, the endpoints are binned, and <i>k</i>=−1 is the reference. Week-of-year effects compare each heatwave week with the same weeks in other years, and year effects absorb trends. The <em>impact</em> is the mean of <i>β</i><sub>0</sub> and <i>β</i><sub>1</sub>. A second model aligns events on the end of each heatwave to measure <em>decay</em> (weeks 4–8) and <em>residue</em> (weeks 9–12).</P>

        <P><strong>Four-nation dose-response.</strong> Using the four nations, attention is regressed on 13 weekly lags of heat dose with nation-by-year, nation-by-week-of-year and week fixed effects. Week effects absorb everything common to the UK in a given week, including national news, so the effect is identified only from differences in heat between nations in the same week.</P>

        <P><strong>Inference.</strong> The plan specified Newey–West (national) and Driscoll–Kraay (four-nation) standard errors, together with randomisation inference. A size check on simulated noise, with the same weeks, fixed effects and heatwave timing, shows that the model-based tests reject 15–16% (national) and 19% (four-nation) of the time at a nominal 5% level. With so few events these standard errors are not valid, consistent with known problems of inference with few treated units (<C k="conley2011">Conley and Taber, 2011</C>; <C k="young2019">Young, 2019</C>). The results therefore rest on randomisation inference: the national estimates are compared with 2,000 sets of placebo onsets drawn from summer weeks without heat, and the four-nation estimates with all 24 permutations of the nations’ heat series. Seven pre-registered hypotheses are tested as one family with Holm’s correction (<C k="holm1979">Holm, 1979</C>), and the “no residue” hypotheses use equivalence tests with bounds of ±0.10 log points (<C k="lakens2017">Lakens, 2017</C>).</P>

        <H2 n="4" id="sec-4">Results</H2>

        <H3 n="4.1" id="sec-4-1">A one-week spike</H3>

        <P>Figure <X to="fig-2">2</X> shows the weekly estimates. In the week a heatwave begins, searches for “heatwave” rise by 0.62 log points (about 86%; randomisation <i>p</i>=0.012). Coping searches rise by 0.68 (about 97%; <i>p</i>=0.011) and concern searches by 0.30 (about 35%; <i>p</i>=0.018). Global Wikipedia views move the same way: 0.34 for heat articles (<i>p</i>&lt;0.001) and 0.24 for climate articles (<i>p</i>=0.035), although views of the climate articles are already elevated before onset (pre-trend test <i>p</i>&lt;0.001), so that series is weak support. The placebo searches do not move (car insurance 0.02, <i>p</i>=0.528; recipes −0.04, <i>p</i>=0.255).</P>

        <P>The spike is short. By the second week after onset the estimates are back within the range produced by placebo dates. Because the decay is faster than one week, the weekly data cannot identify a half-life, as the plan anticipated; an earlier daily analysis found half-lives of a few days.</P>

        <Figure n={2} src="/images/heat_leaves_a_mark_fig2.png" alt="Six panels of weekly event-study estimates, in log points relative to the week before. The top row is aligned on heatwave onsets and the bottom row on heatwave ends, for heatwave searches, coping searches and climate-concern searches. Each panel has a grey 95 per cent placebo range. In the top row, each estimate peaks in the week of onset and falls back within one to two weeks.">
          Weekly UK search attention around heatwave onsets (top) and ends (bottom), relative to the week before (<i>k</i>=−1), with 95% ranges from 2,000 placebo-date draws (grey). All pre-registered terms are used (deviation 2). In the bottom row the reference week often falls inside the heatwave; see Section <X to="sec-5">5</X>.
        </Figure>

        <H3 n="4.2" id="sec-4-2">No lasting residue</H3>

        <P>Measured against normal levels (the exploratory estimand of deviation 4), attention two to three months after a heatwave ends is close to zero for every family: −0.19 for salience, −0.07 for coping and −0.07 for concern, with randomisation <i>p</i>-values of 0.329, 0.714 and 0.193. The calibrated standard errors (0.20, 0.17, 0.06) are too wide to show formal equivalence within ±0.10 log points, so the data rule out large lasting effects but cannot prove there are none.</P>

        <H3 n="4.3" id="sec-4-3">Pre-registered hypotheses</H3>

        <P>Table <X to="tab-1">1</X> reports the seven confirmatory tests. With the sparsity rule applied as written, only 2 of the seven can be tested, and neither shows an effect. With all pre-registered terms (deviation 2) and calibrated inference, 0 of the seven pass after Holm’s correction. Under the pre-registered decision rule, which uses the oversized model-based tests in the Holm step, 2 would be counted as present (H1 and H5a); I do not interpret these, for the reasons given in the size check. The onset spikes in Figure <X to="fig-2">2</X> are individually clear, but with seven hypotheses and nine events the corrected thresholds are demanding. The four-nation analysis is limited by design: with four nations the smallest attainable randomisation <i>p</i>-value is 1/24 ≈ 0.042. Hotter nations show larger coping responses (0.85 log points per 10 degree-days, <i>p</i>=0.042), but no four-nation estimate can survive the correction. There is no sign that responses weakened after 2022 (coping interaction −0.04, <i>p</i>=1.000).</P>

        <P>The pre-registered decay and residue estimates (H2, H3) are reported in the table as specified but do not measure what was intended, because their reference week often falls inside the heatwave (Section <X to="sec-5">5</X>). The large negative H2 estimate reflects this: it compares attention after the heat with attention during it.</P>

        <div id="tab-1" className="relative my-8 print:[break-inside:avoid] print:!left-0 print:!w-full print:!transform-none" style={{ left: '50%', transform: 'translateX(-50%)', width: 'min(1100px, calc(100vw - 2rem))' }}>
          <p className="mx-auto mb-2 max-w-3xl text-center text-[0.9rem] leading-snug">
            <strong>Table 1:</strong> Pre-registered hypotheses. “Plan”: sparsity rule as written. “Dev. 2”: all pre-registered terms. <i>p</i> RI: randomisation inference. Calibrated: deviation 3. H1: heat raises salience; H2: coping decays within two months; H3: no concern residue; H4: coping responds more than concern; H5a/b: hotter nations respond more (coping/concern); H6: habituation after 2022.
          </p>
          <div className="overflow-x-auto">
            <table className="print:!min-w-0 w-full border-collapse text-[0.85rem] leading-snug" style={{ minWidth: 760 }}>
              <thead>
                <tr>
                  {HYP_HEAD.map((h, i) => (
                    <Th key={h} right={i >= 2 && i <= 5}>{h.startsWith('p ') ? <><i>p</i>{h.slice(1)}</> : h}</Th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {HYP_ROWS.map((r, i) => (
                  <tr key={i} style={r[0] === 'Dev. 2' && HYP_ROWS[i - 1] && HYP_ROWS[i - 1][0] === 'Plan' ? { borderTop: '1px solid #111' } : undefined}>
                    {r.map((c, j) => (
                      <Td key={j} right={j >= 2 && j <= 5}>{c}</Td>
                    ))}
                  </tr>
                ))}
                <BottomRule cols={8} />
              </tbody>
            </table>
          </div>
        </div>

        <H3 n="4.4" id="sec-4-4">Robustness and placebo checks</H3>

        <P>Table <X to="tab-2">2</X> shows the onset impacts under the pre-registered checks. The salience spike survives dropping weeks with COP summits, the 2024 election and the Queen’s death, changing the threshold, and using Met Office dates. The decisive check is the placebo year: moving every heatwave onset to the same week one or two years earlier or later, where there was no heatwave. For “heatwave” searches the placebo-year estimates (−0.37 to 0.21) are all smaller in size than the real effect of 0.62. For coping (−0.80 to 1.04) and concern (−0.26 to 0.30), some placebo years produce effects as large as the real ones. Coping searches are strongly seasonal, and the timing of the summer season differs between years in ways that week-of-year effects do not absorb. Under the plan’s own criterion, the coping and concern onset effects cannot be reported as causal. The salience effect is the most credible result. In addition, the week before onset is already elevated for coping searches (pre-trend test <i>p</i>=0.006), consistent with people preparing for forecast heat.</P>

        <div id="tab-2" className="my-8 print:[break-inside:avoid]">
          <p className="mx-auto mb-2 max-w-3xl text-center text-[0.9rem] leading-snug">
            <strong>Table 2:</strong> Onset impact (log points) under pre-registered robustness and placebo checks. Placebo-year rows move each heatwave onset to the same week in another year.
          </p>
          <div className="overflow-x-auto">
            <table className="print:!min-w-0 w-full border-collapse text-[0.9rem] leading-snug" style={{ minWidth: 520 }}>
              <thead>
                <tr>
                  {ROB_HEAD.map((h, i) => (
                    <Th key={h} right={i > 0}>{h}</Th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROB_ROWS.map((r, i) => (
                  <tr key={i} style={i === 5 ? { borderTop: '1px solid #111' } : undefined}>
                    {r.map((c, j) => (
                      <Td key={j} right={j > 0}>{c}</Td>
                    ))}
                  </tr>
                ))}
                <BottomRule cols={5} />
              </tbody>
            </table>
          </div>
        </div>

        <H2 n="5" id="sec-5">Deviations from the plan</H2>

        <ol className="mb-[0.85em] list-decimal pl-8 space-y-1.5 text-justify" style={hyphens}>
          <li><strong>Pull dates.</strong> The second and third Google Trends pulls ran two days later than planned. The rule of three pulls on different days, at least 20 hours apart, still holds.</li>
          <li><strong>Sparsity rule.</strong> As written, the rule drops any series with more than 20% of weeks at a value of 1 or less. Seasonal heat terms sit near zero outside summer (0.61 of weeks for “heatwave”, 0.25–0.93 for coping terms), so the rule removed the series the main hypotheses are about. All pre-registered terms are kept in a second, labelled analysis, with a safeguard against floor effects. This was logged before any analysis was run.</li>
          <li><strong>Calibrated inference.</strong> Added after the size check on simulated noise, before any real estimate was produced.</li>
          <li><strong>Reference week (post hoc).</strong> In the end-aligned model the week before the end of a heatwave is often still inside it, so the pre-registered decay and residue compare attention after the heat with attention during it. Baseline-relative estimands were added after provisional results had been seen, and are reported as exploratory.</li>
        </ol>

        <H2 n="6" id="sec-6">Discussion</H2>

        <P>UK heatwaves produce a sharp but short rise in attention, to the heat itself, to coping with it, and to climate change, and the evidence is most robust for attention to the heat itself. Attention returns to normal within one to two weeks, and there is no detectable residue months later. In issue-attention terms, each heatwave is a brief spike rather than a step change, and there is no sign that the record summer of 2022 or the longer 2026 heatwave changed this pattern.</P>

        <P>Three limitations matter. First, nine events give little statistical power, and the main confirmatory tests do not pass after correction. Second, search data measure attention, not beliefs or behaviour: a week of searches about heat and climate change may or may not change what people think or do. Third, the placebo-year failures show that seasonal patterns in coping and concern searches are not fully absorbed by the design, so those effects should be read as descriptive.</P>

        <P>The obvious next step is to turn the study around: to state predictions before the summer of 2027 and test them as heatwaves happen, rather than looking back. Daily data would also allow the decay to be measured properly.</P>

        <P><strong>Data and code.</strong> All data, code, the pre-registration and the deviation log are at <Ext href={REPO}>{REPO}</Ext>. Contains modified Copernicus Climate Change Service information (2026). HadUK-Grid data are © Crown copyright, Met Office, under the Open Government Licence.</P>

        <H2 id="references">References</H2>
        <ol className="list-none text-[0.95rem] leading-snug">
          <li id="ref-conley2011" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Conley, T. G. and Taber, C. R. (2011). Inference with “difference in differences” with a small number of policy changes. <em>Review of Economics and Statistics</em>, 93(1), 113–125.</li>
          <li id="ref-debnath2023" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Debnath, R., Bardhan, R. and Bell, M. L. (2023). Lethal heatwaves are challenging India’s sustainable development. <em>PLOS Climate</em>, 2(4), e0000156.</li>
          <li id="ref-downs1972" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Downs, A. (1972). Up and down with ecology: the “issue-attention cycle”. <em>The Public Interest</em>, 28, 38–50.</li>
          <li id="ref-egan2012" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Egan, P. J. and Mullin, M. (2012). Turning personal experience into political attitudes: the effect of local weather on Americans’ perceptions about global warming. <em>Journal of Politics</em>, 74(3), 796–809.</li>
          <li id="ref-hersbach2020" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Hersbach, H. et al. (2020). The ERA5 global reanalysis. <em>Quarterly Journal of the Royal Meteorological Society</em>, 146, 1999–2049.</li>
          <li id="ref-hollis2019" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Hollis, D., McCarthy, M., Kendon, M., Legg, T. and Simpson, I. (2019). HadUK-Grid: a new UK dataset of gridded climate observations. <em>Geoscience Data Journal</em>, 6(2), 151–159.</li>
          <li id="ref-holm1979" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Holm, S. (1979). A simple sequentially rejective multiple test procedure. <em>Scandinavian Journal of Statistics</em>, 6(2), 65–70.</li>
          <li id="ref-konisky2016" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Konisky, D. M., Hughes, L. and Kaylor, C. H. (2016). Extreme weather events and climate change concern. <em>Climatic Change</em>, 134, 533–547.</li>
          <li id="ref-lakens2017" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Lakens, D. (2017). Equivalence tests: a practical primer for t tests, correlations, and meta-analyses. <em>Social Psychological and Personality Science</em>, 8(4), 355–362.</li>
          <li id="ref-lang2014" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Lang, C. (2014). Do weather fluctuations cause people to seek information about climate change? <em>Climatic Change</em>, 125, 291–303.</li>
          <li id="ref-moore2019" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Moore, F. C., Obradovich, N., Lehner, F. and Baylis, P. (2019). Rapidly declining remarkability of temperature anomalies may obscure public perception of climate change. <em>Proceedings of the National Academy of Sciences</em>, 116(11), 4905–4910.</li>
          <li id="ref-sisco2017" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Sisco, M. R., Bosetti, V. and Weber, E. U. (2017). When do extreme weather events generate attention to climate change? <em>Climatic Change</em>, 143, 227–241.</li>
          <li id="ref-young2019" className="mb-1.5" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>Young, A. (2019). Channeling Fisher: randomization tests and the statistical insignificance of seemingly significant experimental results. <em>Quarterly Journal of Economics</em>, 134(2), 557–598.</li>
        </ol>

        <Link
          to="/my-research"
          className="mt-12 inline-flex items-center gap-2 font-sans text-sm text-[#3A6B35] hover:text-[#2D5016] transition-colors print:hidden"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to My Research</span>
        </Link>
      </article>
    </div>
  );
}
