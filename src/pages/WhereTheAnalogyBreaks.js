import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const serif = '"Times New Roman", Times, "Liberation Serif", "Nimbus Roman", serif';
const hyphens = { hyphens: 'auto', WebkitHyphens: 'auto' };
const ANCILLARY = '/research/where-the-analogy-breaks/figures.py';

const P = ({ children }) => (
  <p className="mb-[0.85em] text-justify" style={hyphens}>
    {children}
  </p>
);

const H2 = ({ n, id, children }) => (
  <h2 id={id} className="mt-10 mb-3 text-[1.3rem] font-bold leading-snug">
    {n && <span className="inline-block min-w-[2rem]">{n}</span>}
    {children}
  </h2>
);

const H3 = ({ n, id, children }) => (
  <h3 id={id} className="mt-7 mb-2 text-[1.1rem] font-bold leading-snug">
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

const Th = ({ children, w }) => (
  <th
    className="px-2 py-1.5 text-left align-bottom font-bold"
    style={{ borderTop: '2px solid #111', borderBottom: '1px solid #111', width: w }}
  >
    {children}
  </th>
);

const Td = ({ children }) => (
  <td className="px-2 py-1.5 align-top" style={{ borderBottom: '1px solid #e4e4e4' }}>
    {children}
  </td>
);

const BottomRule = ({ cols }) => (
  <tr>
    <td colSpan={cols} style={{ borderTop: '2px solid #111', padding: 0 }} />
  </tr>
);

const Breakout = ({ id, children }) => (
  <div
    id={id}
    className="relative my-8"
    style={{ left: '50%', transform: 'translateX(-50%)', width: 'min(1180px, calc(100vw - 2rem))' }}
  >
    {children}
  </div>
);

const Figure = ({ n, src, alt, children }) => (
  <figure
    id={'fig-' + n}
    className="relative my-8"
    style={{ left: '50%', transform: 'translateX(-50%)', width: 'min(1000px, calc(100vw - 2rem))' }}
  >
    <img src={src} alt={alt} className="block w-full h-auto" />
    <figcaption className="mx-auto mt-3 max-w-3xl text-[0.9rem] leading-snug text-justify" style={hyphens}>
      <strong>Figure {n}:</strong> {children}
    </figcaption>
  </figure>
);

const Equation = ({ n }) => (
  <div className="relative my-6 overflow-x-auto">
    <div className="flex items-center justify-center gap-3 px-10 whitespace-nowrap">
      {n === 1 ? (
        <>
          <span className="inline-flex flex-col items-center leading-tight">
            <i>dx</i>
            <span className="my-0.5 w-full border-t border-[#111]" />
            <i>dt</i>
          </span>
          <span>
            = <i>f</i>(<i>x</i>, <i>c</i>) + <i>ση</i>(<i>t</i>).
          </span>
        </>
      ) : (
        <span>
          <i>ρ</i>
          <sub>1</sub> ≈ <i>e</i>
          <sup>
            −<i>λ</i>Δ<i>t</i>
          </sup>{' '}
          → 1 &nbsp;as&nbsp; <i>λ</i> → 0.
        </span>
      )}
    </div>
    <span className="absolute right-0 top-1/2 -translate-y-1/2">({n})</span>
  </div>
);

export default function WhereTheAnalogyBreaks() {
  return (
    <div className="min-h-screen bg-white text-[#111]" style={{ fontFamily: serif }}>
      <div className="border-b border-gray-300 bg-[#f5f5f5] font-sans">
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

      <article lang="en-GB" className="max-w-3xl mx-auto px-5 pt-10 pb-20 text-[1.1rem] leading-[1.6]">
        <header className="text-center">
          <h1 className="text-[1.7rem] sm:text-[2.05rem] font-bold leading-tight">
            Where the analogy breaks: ecological versus social tipping points
          </h1>
          <p className="mt-6 text-[1.25rem]">Kaustubh Ramekar</p>
          <p className="mt-1 text-[0.95rem] leading-snug text-gray-700">
            Independent researcher, London, United Kingdom
          </p>
        </header>

        <section className="mx-auto mt-9 max-w-[42rem]">
          <h2 className="mb-2 text-center text-[1.05rem] font-bold">Abstract</h2>
          <p className="text-justify text-[1rem] leading-[1.55]" style={hyphens}>
            Social tipping points are now a policy instrument and a target for computational detection, yet the concept borrows its vocabulary from theoretical ecology and Earth-system science. This paper tests which parts of that vocabulary carry over. Taking the ecological and Earth-system definition as a benchmark, it examines six properties (thresholds, hysteresis and irreversibility, alternative stable states, state variables, early-warning signals and reflexivity) against three criteria: whether the social case contains the same formal object, whether that object can be identified from observable variables, and whether it can be identified without hindsight. Alternative stable states carry over within bounded coordination settings. Thresholds carry over at the level of individual decision rules but cannot be located in advance outside controlled conditions. Hysteresis survives as lock-in, but irreversibility does not. The state-variable concept fails at the scale of whole societies, because no measurable quantity is also mechanistically meaningful, and with it most of the basis for early warning. Reflexivity has no ecological counterpart and qualifies every other verdict. The results support much of Kopp et al.’s (2025) critique of tipping-point framing but not its remedy. I propose instead a conditional social-tipping claim, defined by six conditions and graded by levels of warrant, and draw out its implications for AI and natural-language methods of detection.
          </p>
          <p className="mt-4 text-[1rem]">
            <strong>Keywords:</strong> social tipping points; regime shifts; alternative stable states; early-warning signals; reflexivity; state variables; detection
          </p>
        </section>

        <hr className="my-8 border-gray-300" />

        <H2 n="1" id="sec-1">Introduction</H2>

        <P>The social tipping point has stopped being only a metaphor. It is now a policy instrument and, increasingly, a detection target. The second <em>Global Tipping Points Report</em> declared in October 2025 that positive tipping points had already been crossed in solar photovoltaics and wind power globally, and in electric vehicles, battery storage and heat pumps in leading markets, and it urged governments to embed tipping-point science in governance and economic planning (<C k="lenton2025">Lenton et al.</C> <C k="lenton2025">2025</C>). Earlier work had already named candidate “social tipping elements” for decarbonisation (<C k="otto2020">Otto et al.</C> <C k="otto2020">2020</C>), proposed ways to operationalise positive tipping points (<C k="lenton2022">Lenton et al.</C> <C k="lenton2022">2022</C>), and offered formal frameworks for social tipping processes (<C k="winkelmann2022">Winkelmann et al.</C> <C k="winkelmann2022">2022</C>). A growing methodological literature now asks whether such tipping can be detected as it approaches: early-warning statistics are being applied to online behavioural data (<C k="boulton2025">Boulton et al.</C> <C k="boulton2025">2025</C>), and natural-language and machine-learning methods are proposed for reading shifts in norms from text.</P>

        <P>All of these claims borrow a vocabulary built elsewhere. <em>Threshold</em>, <em>hysteresis</em>, <em>alternative stable state</em>, <em>state variable</em> and <em>critical slowing down</em> have precise meanings in theoretical ecology and Earth-system science, where they describe the behaviour of dynamical systems with identifiable feedbacks and measurable states (<C k="holling1973">Holling</C> <C k="holling1973">1973</C>; <C k="scheffer2001">Scheffer et al.</C> <C k="scheffer2001">2001</C>; <C k="lenton2008">Lenton et al.</C> <C k="lenton2008">2008</C>). When a report says that a social system has “tipped”, or a model claims to detect an approaching social tipping point, it is implicitly asserting that some or all of these properties hold for the social system in question. Whether that assertion is warranted is an empirical and conceptual question, not a matter of terminology. It is the question this paper addresses.</P>

        <P>The question has become urgent because the tipping-point framing is now under sustained attack. <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) argue that the framing confuses more than it clarifies. They pose three questions: whether tipping points are well defined, whether climate and negative social tipping points generate the kind of urgency that drives action, and whether climate tipping points provide a useful basis for setting targets. They answer all three in the negative. For social systems their critique is sharper still. The tipping-point schema, they argue, offers a deceptively simple model of complex change; its irreversibility can be judged only in historical retrospect; the labels “positive” and “negative” smuggle in contested value judgements; and there is little value in trying to unite Earth-system change and social change within one tipping-points paradigm. They suggest that researchers of positive social tipping consider the term “leverage points” instead. Defenders of the concept have replied that its essential features, including thresholds, self-propelling feedbacks and nonlinear change, now rest on rigorous foundations, and that diversity of use is a reason to improve communication rather than to abandon research (<C k="smithsr2025">Smith et al.</C> <C k="smithsr2025">2025</C>). Others have warned of the concept’s overuse (<C k="milkoreit2023">Milkoreit</C> <C k="milkoreit2023">2023</C>) or examined how its public life shapes political imagination (<C k="hansson2025">Hansson et al.</C> <C k="hansson2025">2025</C>).</P>

        <P>This exchange has a structural weakness. Both sides argue about the tipping point as a whole: either the concept is sound and should be refined, or it is confused and should be retired. Yet a tipping point in the ecological sense is not one property but a bundle of them, and nothing guarantees that a bundle which holds together in a shallow lake will hold together in an electorate, a market or a norm. <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) themselves recommend unbundling abruptness, irreversibility and self-amplification; <C k="milkoreit2018">Milkoreit et al.</C> (<C k="milkoreit2018">2018</C>) identified 23 distinct definitional features across the literature. What is missing is a systematic test of which members of the bundle survive the move to social systems, and on what evidence.</P>

        <P>This paper supplies that test. It treats the ecological and Earth-system definition as a benchmark and examines six properties in turn: thresholds, hysteresis and irreversibility, alternative stable states, state variables and measurability, early-warning signals, and reflexivity. For each I apply three criteria. A property <em>carries over</em> if (i) the social model class contains the same mathematical object, not merely a resemblance; (ii) that object can be identified from observable social variables; and (iii) its identification does not depend on already knowing the outcome. A property <em>partly carries over</em> if the first criterion holds but the second or third fails. A property is a <em>metaphor</em> if the first criterion fails: the word travels, but the formal object does not.</P>

        <P>The verdicts are mixed, and the mixture is the argument. Alternative stable states have a genuine and historically social analogue in multiple equilibria of coordination. Thresholds carry over at the level of individual decision rules but become model-relative at the level of populations. Hysteresis survives as institutional and infrastructural lock-in but not as the irreversibility the term implies. The state-variable concept, by contrast, largely fails at the scale of whole societies, and with it most of the formal machinery of early warning. Reflexivity, the fact that social actors observe and respond to claims about their own tipping, has no ecological counterpart at all and qualifies every other verdict. From these results I derive a narrower, conditional concept of social tipping that I argue is defensible against <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>), and I draw out what it implies for computational detection, where the problem of recognising tipping only in hindsight is acute.</P>

        <P>The paper extends a companion preprint (<C k="ramekar2026">Ramekar</C> <C k="ramekar2026">2026</C>) that traces three epistemic shifts in the concept of social tipping between 1957 and 2026. That work follows the concept’s history; this one tests its content. Section <X to="sec-2">2</X> sets out the ecological and Earth-system benchmark. Section <X to="sec-3">3</X> briefly traces the route by which the concept moved between disciplines. Section <X to="sec-4">4</X> conducts the property-by-property test. Section <X to="sec-5">5</X> engages <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) directly. Section <X to="sec-6">6</X> draws implications for detection, including AI and natural-language methods. Section <X to="sec-7">7</X> concludes, and Section <X to="sec-8">8</X> summarises the verdicts in a table.</P>

        <H2 n="2" id="sec-2">The ecological and Earth-system benchmark</H2>

        <P>The benchmark against which social tipping is tested in this paper is a bundle of five properties, defined formally in dynamical-systems terms. The bundle comes apart even in the biosphere, and that fact fixes the standard of the test: social systems should be judged against the best-established ecological and Earth-system cases, not against an idealised fold that few real systems instantiate.</P>

        <H3 n="2.1" id="sec-2-1">The formal core</H3>

        <P>The canonical model is a system whose state <i>x</i> changes under the influence of internal dynamics <i>f</i>, a slowly varying control condition <i>c</i> that lies outside the system, and stochastic forcing:</P>

        <Equation n={1} />

        <P><C k="holling1973">Holling</C> (<C k="holling1973">1973</C>) supplied the vocabulary for reading such systems. He distinguished the <em>stability</em> of a system, its tendency to return to equilibrium after a small disturbance, from its <em>resilience</em>, its capacity to absorb disturbance and remain within a domain of attraction. A system may have several such domains; populations pushed close to the boundary of one can flip into another. <C k="scheffer2001">Scheffer et al.</C> (<C k="scheffer2001">2001</C>) gave this picture its modern form. When <i>f</i> contains strong positive feedback, the equilibrium curve of <i>x</i> against <i>c</i> can fold back on itself, so that over a range of conditions two stable states coexist, separated by an unstable one. As <i>c</i> passes the fold, or saddle-node bifurcation, the system jumps to the other branch. To return, it is not enough to restore <i>c</i> to the value at which the jump occurred: the backward switch happens at a different critical condition. <C k="scheffer2001">Scheffer et al.</C> (<C k="scheffer2001">2001</C>) note that the degree of this hysteresis can differ within one ecosystem type, so that shallow lakes respond to nutrient loading with pronounced hysteresis while deeper lakes respond smoothly.</P>

        <P><C k="lenton2008">Lenton et al.</C> (<C k="lenton2008">2008</C>) carried this structure into Earth-system science. Their formal definition calls a subsystem a <em>tipping element</em> if the parameters controlling it can be transparently combined into a single control, and if there is a critical value of that control beyond which a small change produces a qualitative change in a crucial feature of the system after some observation time. Two features of this definition matter for what follows. First, it requires a single, identifiable control parameter. Second, it is explicit that many of the systems it considers did not yet have convincingly established tipping points; the review was justified partly by political demand for binding temperature targets.</P>

        <P><C k="ashwin2012">Ashwin et al.</C> (<C k="ashwin2012">2012</C>) then showed that the fold is only one route to tipping. <em>Bifurcation-induced</em> tipping (B-tipping) occurs when a slowly changing control carries the system past the fold. <em>Noise-induced</em> tipping (N-tipping) occurs when fluctuations alone push the system across a basin boundary, with no bifurcation. <em>Rate-induced</em> tipping (R-tipping) occurs when a control changes too fast for the system to track its moving equilibrium, even if no threshold in the control’s level is crossed. The distinction is decisive for detection, because the standard early-warning indicators are derived for B-tipping only.</P>

        <P>Those indicators rest on <em>critical slowing down</em>. As a system approaches a fold, its basin of attraction flattens, so recovery from small perturbations slows. <C k="scheffer2009">Scheffer et al.</C> (<C k="scheffer2009">2009</C>) identify three resulting signals: slower recovery from perturbation, rising autocorrelation and rising variance, with rising skewness and <em>flickering</em> between states as further possible signatures. In linearised form, the recovery rate <i>λ</i> tends to zero at the fold, so lag-1 autocorrelation of a series sampled at interval <i>Δ</i><i>t</i> tends to one:</P>

        <Equation n={2} />

        <P>The advocates of these indicators have been careful about their limits. <C k="dakos2015">Dakos et al.</C> (<C k="dakos2015">2015</C>) stress that not all regime shifts are associated with tipping points, so not all are announced by critical slowing down; that variance and autocorrelation are indirect proxies; and that the most reliable test is to measure recovery directly after a small experimental disturbance. Flickering can mimic or mask critical slowing down in noisy systems (<C k="dakos2013">Dakos et al.</C> <C k="dakos2013">2013</C>).</P>

        <P>Figure <X to="fig-1">1</X> illustrates both properties in a minimal shallow-lake model: hysteresis between two folds, and the rise in lag-1 autocorrelation as the system is pushed slowly towards one of them.</P>

        <Figure n={1} src="/images/where_the_analogy_breaks_fig1.png" alt="Three panels for a minimal shallow-lake model: (a) equilibrium curve with two folds and hysteresis, (b) a simulated series approaching the fold, (c) rising lag-1 autocorrelation.">
          Benchmark dynamics in a minimal model of a shallow lake, <i>d</i><i>x</i>/<i>d</i><i>t</i> = <i>c</i> − <i>x</i> + <i>x</i><sup>8</sup>/(1 + <i>x</i><sup>8</sup>) + <i>σ</i><i>η</i>(<i>t</i>). (a) Equilibria of the state <i>x</i> against the control <i>c</i>; solid branches are stable and the dashed branch is unstable. Raising <i>c</i> past the fold F<sub>2</sub> forces a jump to the upper branch, and returning requires lowering <i>c</i> past F<sub>1</sub>, so forward and backward transitions occur at different control values (hysteresis, B2). (b) A simulated series as <i>c</i> rises slowly towards F<sub>2</sub> on the lower branch. (c) Lag-1 autocorrelation of the detrended series in a moving window rises as the fold approaches (critical slowing down, B5). Illustrative simulation; code is provided as an ancillary file.
        </Figure>

        <H3 n="2.2" id="sec-2-2">The benchmark properties</H3>

        <P>From this core I extract five properties, labelled B1–B5 for use in Section <X to="sec-4">4</X>.</P>

        <ul className="mb-[0.85em] list-none space-y-1.5 text-justify" style={hyphens}>
          <li className="flex gap-3"><span className="w-8 flex-shrink-0"><strong>B1</strong></span><span><strong>Threshold.</strong> A critical value of an identifiable control parameter, beyond which a small change in the control produces a qualitative change in state.</span></li>
          <li className="flex gap-3"><span className="w-8 flex-shrink-0"><strong>B2</strong></span><span><strong>Hysteresis and irreversibility.</strong> Forward and backward transitions occur at different critical values. <em>Irreversibility</em> is a stronger, practical claim: that the return threshold lies outside the range of feasible control.</span></li>
          <li className="flex gap-3"><span className="w-8 flex-shrink-0"><strong>B3</strong></span><span><strong>Alternative stable states.</strong> Two or more attractors coexist for the same value of the control.</span></li>
          <li className="flex gap-3"><span className="w-8 flex-shrink-0"><strong>B4</strong></span><span><strong>State variable.</strong> An observable quantity <i>x</i> whose dynamics are governed by <i>f</i>, measured in stable units, and distinct from the control <i>c</i>.</span></li>
          <li className="flex gap-3"><span className="w-8 flex-shrink-0"><strong>B5</strong></span><span><strong>Early-warning signals.</strong> Statistical signatures of critical slowing down in <i>x</i>, valid under B-tipping, slow forcing and roughly stationary noise.</span></li>
        </ul>

        <P>The properties are not independent. B2 presupposes B3; B5 presupposes B4, a slowly moving control, and a fold-type mechanism. This dependency structure matters later: a failure of B4 in social systems propagates directly to B5.</P>

        <H3 n="2.3" id="sec-2-3">How well the biosphere and climate system meet the benchmark</H3>

        <P>The empirical record of the biosphere shows the bundle instantiated unevenly. <C k="lovejoy2019">Lovejoy and Hannah</C> (<C k="lovejoy2019">2019</C>) organise their volume around observed change, the lessons of the past and projected futures, and their chapters cover cases that sit at very different points on the benchmark. Range and abundance changes, reviewed by <C k="parmesan2019">Parmesan</C> (<C k="parmesan2019">2019</C>), are among the most widely documented biotic responses to warming, and much of this response is better described as continued tracking of shifting climate than as threshold transition, a pattern consistent with the broad synthesis of <C k="hillebrand2020">Hillebrand et al.</C> (<C k="hillebrand2020">2020</C>) discussed below. Rapid, broad-scale ecosystem change, such as drought-driven forest die-off (<C k="breshears2019">Breshears et al.</C> <C k="breshears2019">2019</C>), comes closer to an abrupt shift in state. Tropical forests (<C k="watson2019">Watson et al.</C> <C k="watson2019">2019</C>), and the Amazon in particular (<C k="nepstad2019">Nepstad</C> <C k="nepstad2019">2019</C>), are discussed in explicitly tipping-point terms. Palaeoecological chapters (<C k="park2019">Park</C> <C k="park2019">2019</C>; <C k="williams2019">Williams and Burke</C> <C k="williams2019">2019</C>) supply the strongest evidence that abrupt biotic transitions have occurred in the past.</P>

        <P>Coral reefs are now the leading case. <C k="hoeghguldberg2019">Hoegh-Guldberg</C> (<C k="hoeghguldberg2019">2019</C>) reviews reef biodiversity under unprecedented environmental change, and the <em>Global Tipping Points Report 2025</em> concludes that warm-water reefs are now passing a thermal tipping point, with a central estimate of 1.2 °C global warming and a range of 1–1.5 °C (<C k="lenton2025">Lenton et al.</C> <C k="lenton2025">2025</C>). Yet even this case shows the bundle loosening. The report frames reef loss as irreversible <em>unless</em> warming is reversed, which is a statement about the feasible range of the control, not about hysteresis in the strict sense of B2.</P>

        <P>The physical climate system offers the cleanest cases and the clearest qualifications. <C k="armstrongmckay2022">Armstrong McKay et al.</C> (<C k="armstrongmckay2022">2022</C>) revised the list of tipping elements to sixteen: nine global “core” elements and seven regional “impact” elements. Ice sheets are the textbook instance of hysteresis, because an ice sheet that has retreated does not regrow when temperature returns to its former level (see <C k="mathez2018">Mathez and Smerdon</C> <C k="mathez2018">2018</C>, Ch. 10). But ice-sheet loss is irreversible and self-amplifying without being abrupt on human timescales (<C k="kopp2025">Kopp et al.</C> <C k="kopp2025">2025</C>). The Atlantic Meridional Overturning Circulation is the archetypal tipping element, yet <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) point out that in at least some climate models its collapse is aleatoric: identical forcing histories sometimes produce collapse and sometimes do not. That is consistent with a bifurcation in the system but not with a fixed threshold in the forcing (B1).</P>

        <P>Finally, the strongest general test of B1 in ecology is sobering. <C k="hillebrand2020">Hillebrand et al.</C> (<C k="hillebrand2020">2020</C>) synthesised 36 meta-analyses covering more than 4,600 field experiments on global-change impacts. Only three of the 36 showed statistical evidence of threshold transgression. Most responses grew progressively in magnitude and variance with pressure, and simulations showed that modest noise is enough to hide a threshold even where one exists. <C k="mathez2018">Mathez and Smerdon</C> (<C k="mathez2018">2018</C>, Ch. 12) frame the climate problem in the same register, as risk in an unknowable future.</P>

        <P>Three conclusions follow for the rest of the paper. First, the full bundle holds clearly only in a minority of well-studied systems, such as shallow lakes and ice sheets. Second, even there, the properties are separable: abruptness, hysteresis, irreversibility and self-amplification can occur in different combinations. Third, thresholds are hard to detect in ecological data, so their absence from social data is not by itself evidence that social systems lack them. Section <X to="sec-4">4</X> holds social systems to this realistic standard, not an idealised one.</P>

        <H2 n="3" id="sec-3">How the concept travelled</H2>

        <P>The social tipping point did not simply borrow its meaning from ecology. The concept made a round trip, and the two legs carried different cargo. Social science supplied the threshold; ecology and Earth-system science supplied the dynamical apparatus of state variables, control parameters and early warning. When the concept returned to the social sciences after 2000, it came back with that apparatus attached. Much of the confusion that <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) diagnose follows from this asymmetry. The companion preprint (<C k="ramekar2026">Ramekar</C> <C k="ramekar2026">2026</C>) traces the full history in terms of three epistemic shifts; this section follows only the route through the biosphere and Earth-system literatures.</P>

        <H3 n="3.1" id="sec-3-1">The outbound leg: from tip point to threshold distribution</H3>

        <P>The first scholarly use was social. <C k="grodzins1957">Grodzins</C> (<C k="grodzins1957">1957</C>) described a “tip point” in American neighbourhoods, beyond which white residents left once the non-white share passed a critical level. <C k="schelling1971">Schelling</C> (<C k="schelling1971">1971</C>, <C k="schelling1978">1978</C>) formalised the mechanism, showing that mild individual preferences about neighbours could generate sharp aggregate segregation. <C k="granovetter1978">Granovetter</C> (<C k="granovetter1978">1978</C>) generalised it to any binary choice whose costs or benefits depend on how many others make it: joining a riot, adopting an innovation, voting, striking or migrating. His key move was to locate the threshold in the individual, as the proportion of others a person must see act before acting, and to show that the collective outcome depends on the <em>distribution</em> of thresholds. Two crowds with almost identical average thresholds can produce a full cascade or none at all, depending on whether one person with a low threshold is present. <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) note that even the original segregation model is empirically disputed (<C k="easterly2009">Easterly</C> <C k="easterly2009">2009</C>).</P>

        <P>The social threshold, then, was from the start a property of a population of decision rules, not a critical value of an external control. That distinction is the hinge of Section <X to="sec-4">4</X>.</P>

        <H3 n="3.2" id="sec-3-2">The ecological leg: domains, folds and warnings</H3>

        <P>Ecology developed its own vocabulary largely independently. <C k="holling1973">Holling</C> (<C k="holling1973">1973</C>) introduced multiple domains of attraction and the distinction between stability and resilience; <C k="may1977">May</C> (<C k="may1977">1977</C>) analysed thresholds and breakpoints in ecosystems with several stable states. Through the 1990s, shallow-lake research gave the fold model an empirical home, and <C k="scheffer2001">Scheffer et al.</C> (<C k="scheffer2001">2001</C>) generalised it across lakes, coral reefs, oceans, forests and arid lands. <C k="scheffer2009book">Scheffer</C>’s (<C k="scheffer2009book">2009</C>) monograph <em>Critical Transitions in Nature and Society</em> then extended the framework explicitly to social phenomena, and the early-warning programme (<C k="scheffer2009">Scheffer et al.</C> <C k="scheffer2009">2009</C>) promised that generic statistical signals might anticipate transitions in any system governed by similar dynamics. <C k="milkoreit2018">Milkoreit et al.</C> (<C k="milkoreit2018">2018</C>) show that across all fields “tipping point” became common only after 2000, long after “regime shift” and “critical transition” were established.</P>

        <H3 n="3.3" id="sec-3-3">The Earth-system turn</H3>

        <P>The Earth-system literature adopted the phrase for an explicitly communicative purpose. <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>, Box 1) trace the framing to <C k="gladwell2000">Gladwell</C>’s (<C k="gladwell2000">2000</C>) bestseller, Hansen’s 2005 lecture to the American Geophysical Union and a 2007 commentary by <C k="lentonschellnhuber2007">Lenton and Schellnhuber</C> (<C k="lentonschellnhuber2007">2007</C>), which argued that climate policy must induce a socio-economic tipping to a low-carbon economy to avoid climate tipping points. <C k="lenton2008">Lenton et al.</C> (<C k="lenton2008">2008</C>) then gave the tipping element its formal definition. From the outset, therefore, physical tipping and social tipping were paired: the danger of the first was to be met by triggering the second.</P>

        <P>The biosphere literature registers the same pairing. <C k="lovejoy2019">Lovejoy and Hannah</C>’s (<C k="lovejoy2019">2019</C>) volume, otherwise devoted to observed and projected biological change, closes its policy section with a chapter on increasing public awareness and facilitating behaviour change (<C k="maibach2019">Maibach</C> <C k="maibach2019">2019</C>). The ecologist’s response to biospheric tipping is, in the end, an appeal to social mechanisms.</P>

        <H3 n="3.4" id="sec-3-4">The return leg: social tipping as an intervention object</H3>

        <P>The concept returned to the social sciences as a target for action. <C k="otto2020">Otto et al.</C> (<C k="otto2020">2020</C>) identified candidate social tipping elements and interventions for decarbonisation by 2050. <C k="lenton2020">Lenton</C> (<C k="lenton2020">2020</C>) and <C k="lenton2022">Lenton et al.</C> (<C k="lenton2022">2022</C>) developed positive tipping points as levers for policy. <C k="winkelmann2022">Winkelmann et al.</C> (<C k="winkelmann2022">2022</C>) proposed a formal definition of social tipping processes and argued that they differ from climate and ecological tipping in their agency, their networked structure, their scales and their complexity. <C k="boulton2025">Boulton et al.</C> (<C k="boulton2025">2025</C>) applied early-warning indicators directly to a social dataset, the share of online views going to electric-vehicle adverts in the UK.</P>

        <P>The returning concept was not the one that had left. It combined Granovetter’s individual thresholds with Lenton’s single control parameter, Scheffer’s alternative states and the early-warning toolkit. Whether those parts fit together in a social system is exactly what Section <X to="sec-4">4</X> tests.</P>

        <H2 n="4" id="sec-4">Property-by-property test</H2>

        <P>Each subsection below takes one benchmark property, states its social analogue, applies the three criteria set out in Section 1 (same formal object; identifiable from observable variables; identifiable without hindsight), and ends with a verdict. The sixth property, reflexivity, has no ecological benchmark; it is tested for what it does to the other five.</P>

        <H3 n="4.1" id="sec-4-1">Thresholds</H3>

        <P>The social threshold is the oldest and best-supported part of the analogy, but it is a different kind of object from the ecological one. In the benchmark (B1), the threshold is a critical value of a control parameter that lies outside the system, such as nutrient loading or global mean temperature. In <C k="granovetter1978">Granovetter</C>’s (<C k="granovetter1978">1978</C>) model, the threshold belongs to each individual: it is the proportion of others a person must see act before acting. What tips the population is not a control crossing a critical value but the <em>shape of the threshold distribution</em>, which is a property of the population itself.</P>

        <P>That difference does not make social thresholds unreal. They have been identified experimentally with unusual precision. <C k="centola2018">Centola et al.</C> (<C k="centola2018">2018</C>) varied the size of a committed minority in online groups coordinating on a naming convention. The largest unsuccessful minority was 21% of the group and the smallest successful one was 25%, close to the model’s prediction. <C k="andreoni2021">Andreoni et al.</C> (<C k="andreoni2021">2021</C>) designed a laboratory game in which societal preferences shift gradually and individuals weigh the benefit of deviating from a norm against the cost of non-conformity. A threshold model predicted correctly in 96% of instances whether a society would abandon a detrimental norm.</P>

        <P>These results establish that, under controlled conditions, a population of threshold-following agents can behave as the fold model predicts, with a sharp transition in collective behaviour as a single quantity passes a critical value. In mean-field form, the committed-minority fraction plays the role of the control parameter, and the formal object is the same bifurcation (Figure <X to="fig-2">2</X>a). Criterion (i) is therefore met.</P>

        <P>Criteria (ii) and (iii) are another matter. In the experiments the convention was arbitrary, participants had no prior stake in it, coordination was paid, and the experimenter set the minority’s size. Outside the laboratory none of these conditions hold. Individual thresholds are unobserved and change over time; the network through which people observe one another alters the aggregate threshold; and the quantity that plays the role of the control, the size of the committed group, is not external to the system but is the very thing the tipping process changes. <C k="granovetter1978">Granovetter</C> (<C k="granovetter1978">1978</C>) himself treated measurement, falsification and verification as open problems. <C k="centola2018">Centola et al.</C> (<C k="centola2018">2018</C>) note that real communities close to a tipping point would have no way of knowing it.</P>

        <P><strong>Verdict: partly carries over.</strong> The individual-level threshold and its aggregate bifurcation are the same formal object as B1 (criterion i). But outside controlled settings the critical value cannot be identified from observable variables in advance (criteria ii and iii), because the control is endogenous and the threshold distribution is hidden.</P>

        <Figure n={2} src="/images/where_the_analogy_breaks_fig2.png" alt="Two panels for a threshold model of adoption: (a) equilibrium adoption against committed minority size with a critical mass near 0.22, (b) adoption over time when support is introduced and withdrawn.">
          Thresholds and the withdrawal test in a mean-field threshold model with normally distributed individual thresholds (mean 0.45, standard deviation 0.12). (a) Equilibrium adoption <i>r</i><sup>*</sup> as a function of a committed minority <i>s</i>: below a critical mass <i>s</i><sub><i>c</i></sub> ≈ 0.22 adoption stays low, and above it the population cascades to full adoption. (b) Support, in the form of a committed share <i>s</i>, is introduced at <i>t</i> = 10 and withdrawn at <i>t</i> = 50. Below <i>s</i><sub><i>c</i></sub> (dashed) adoption reverts; above <i>s</i><sub><i>c</i></sub> (solid) it persists. A system with inertia but no bistability (dotted) also rises under support but returns slowly once support is removed. Only the contrast between the solid and dashed cases identifies tipping (condition 4 of Section <X to="sec-5-3">5.3</X>). Illustrative simulation.
        </Figure>

        <H3 n="4.2" id="sec-4-2">Hysteresis and irreversibility</H3>

        <P>Hysteresis has a genuine social analogue; irreversibility, in the sense the word carries in Earth-system science, largely does not. The two must be separated, as B2 already separates them.</P>

        <P>The analogue of hysteresis is lock-in. <C k="unruh2000">Unruh</C> (<C k="unruh2000">2000</C>) described how industrial economies became locked into fossil-fuel energy systems through the co-evolution of technologies and institutions, producing persistent market and policy barriers to alternatives. Increasing returns make an established technology or practice harder to displace than it was to install (<C k="arthur1989">Arthur</C> <C k="arthur1989">1989</C>). In coordination models, the committed minority required to overturn an established norm is larger than the share at which that norm could not have taken hold. <C k="nyborg2016">Nyborg et al.</C> (<C k="nyborg2016">2016</C>) describe both vicious and virtuous cycles of norm-following as potentially stable and hard to break. The formal object of B2, asymmetric forward and backward thresholds, is therefore present.</P>

        <P>Three qualifications matter. First, <C k="unruh2000">Unruh</C> (<C k="unruh2000">2000</C>) is explicit that carbon lock-in is persistent, not permanent. Social persistence is maintained by expectations, investments and rules that people can deliberately change, and social and political contestation often continues after an apparent transition (<C k="kopp2025">Kopp et al.</C> <C k="kopp2025">2025</C>). The ice sheet that has retreated cannot decide to regrow; a society that has adopted a norm can organise to reverse it, and in the presence of backlash often does.</P>

        <P>Second, much of what is called lock-in is not hysteresis at all but <em>inertia</em>. A system with long-lived capital, such as power stations, housing stock or vehicle fleets, returns slowly to its former state when the conditions that produced its new state are removed, but it does return. Hysteresis in the sense of B2 requires more: that the system stays in its new state even after the control has been restored to its earlier value. The two are distinguished by what happens when support is withdrawn, a test taken up in Section <X to="sec-5-2">5.2</X> and illustrated in Figure <X to="fig-2">2</X>b.</P>

        <P>Third, in social systems hysteresis can be designed. This idea is not new. Political scientists have long studied how policies create the constituencies that sustain them (<C k="pierson2000">Pierson</C> <C k="pierson2000">2000</C>; <C k="patashnik2008">Patashnik</C> <C k="patashnik2008">2008</C>). <C k="levin2012">Levin et al.</C> (<C k="levin2012">2012</C>) argue that climate policy should deliberately create path-dependent interventions that constrain our future collective selves, through progressive incremental trajectories that entrench support over time. <C k="meckling2015">Meckling et al.</C> (<C k="meckling2015">2015</C>) show how green industrial policy builds coalitions that then support stricter carbon regulation. <C k="smithek2026">Smith et al.</C> (<C k="smithek2026">2026</C>) make stabilisation of a new trajectory an explicit final stage of societal tipping. What this paper adds is the translation of that literature into dynamical terms: designed persistence is an attempt to create hysteresis where the system would otherwise show only inertia.</P>

        <P>Nor is building persistence unique to human systems. Ecosystem engineers such as beavers and reef-building corals modify their environment in ways that maintain the conditions they depend on (<C k="jones1994">Jones et al.</C> <C k="jones1994">1994</C>). What is distinctively social is that the design is anticipatory. Actors use a model of the system’s dynamics, including models drawn from tipping-point science, to make reversal harder. This links hysteresis directly to reflexivity (Section <X to="sec-4-6">4.6</X>). It also concedes part of <C k="kopp2025">Kopp et al.</C>’s (<C k="kopp2025">2025</C>) argument: where social hysteresis is designed, tipping is partly a matter of choice and not a property of the system waiting to be discovered.</P>

        <P>The first qualification cuts against the alarmist use of social irreversibility. <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) are right that the irreversibility of a social transition can only be judged with historical perspective. A claim that a positive tipping point “has been crossed” is, in its strong form, a prediction that no future coalition will reverse it, and nothing in the formal model licenses that prediction.</P>

        <P><strong>Verdict: partly carries over.</strong> Hysteresis, as asymmetric persistence that survives restoration of the control, is the same formal object (criterion i) and can in principle be observed when support for a new state is withdrawn (criterion ii). It must be distinguished from inertia, which much of the lock-in literature describes. Irreversibility is a metaphor: it fails criterion (iii), because it can only be established after the fact, and the persistence it describes is partly designed and partly contestable.</P>

        <H3 n="4.3" id="sec-4-3">Alternative stable states</H3>

        <P>Alternative stable states are the property that carries over most fully. This is unsurprising once the history in Section <X to="sec-3">3</X> is taken into account: multiple equilibria of coordination were a social-scientific idea before they were an ecological one.</P>

        <P>In a coordination problem, each person’s best choice depends on what others choose, so more than one self-reinforcing pattern of behaviour can be stable. Schelling’s segregation dynamics and Granovetter’s threshold cascades both produce such multiple equilibria, and the formal correspondence with B3 is exact: the stable equilibria of best-response dynamics are attractors, and the population configurations that lead to each are their basins. <C k="nyborg2016">Nyborg et al.</C> (<C k="nyborg2016">2016</C>) apply this structure directly to environmental norms, asking whether a tipping point exists that could turn a vicious cycle of socially damaging behaviour into a virtuous one. The experimental evidence supports bistability: <C k="andreoni2021">Andreoni et al.</C> (<C k="andreoni2021">2021</C>) observed widespread persistence of detrimental norms, even where individuals themselves set the cost of non-conformity, and found that interventions creating a common understanding of the benefits of change helped most societies abandon them.</P>

        <P>Identifying bistability outside the laboratory is harder, but not impossible. The ecological test is to observe both states under the same conditions, as in shallow lakes that are clear or turbid at the same nutrient loading (<C k="scheffer2001">Scheffer et al.</C> <C k="scheffer2001">2001</C>). The social analogue is comparative: similar interventions that produce different stable outcomes. <C k="nyborg2016">Nyborg et al.</C> (<C k="nyborg2016">2016</C>) contrast indoor smoking bans in Norway, Sweden and the United Kingdom, after which the new norm took hold rapidly, with Greece’s 2010 ban, which failed. Such comparisons are suggestive rather than decisive, since the societies differ in more than their norm.</P>

        <P>One caveat qualifies the verdict. In ecology, the structure of <i>f</i> is fixed by physics and biology. In social systems the payoff structure that defines the equilibria is itself an institution, which actors can redesign. Alternative stable states in society are stable relative to a game that may not stay the same.</P>

        <P><strong>Verdict: carries over,</strong> within bounded coordination settings. The formal object is the same (criterion i). It can be identified experimentally and, more weakly, comparatively (criterion ii), and it can in principle be established before a transition by observing coexisting states (criterion iii). The caveat is that the equilibria are conditional on a changeable institutional structure.</P>

        <H3 n="4.4" id="sec-4-4">State variables and measurability</H3>

        <P>The state-variable property fails at the scale of whole societies, and this failure is the most consequential in the paper, because the rest of the formal machinery depends on it.</P>

        <P>In ecology and Earth-system science, the state variable is a physical quantity: phosphorus concentration, macrophyte cover, coral cover, ice volume, overturning strength. It is measured in stable units, it is largely additive, and its value does not depend on how the system describes itself. Environmental assessment has gone further and built standardised accounting systems for such quantities. <C k="cucek2015">Čuček et al.</C> (<C k="cucek2015">2015</C>) survey environmental footprints, including carbon, water and nitrogen footprints, grounded in life-cycle thinking and the distinction between direct, indirect and total effects. Other chapters in the same volume treat indicator-based assessment as a route to decision and argue that sustainability policy depends on measurement (<C k="klemes2015">Klemeš</C> <C k="klemes2015">2015</C>, Chs 4 and 14). The point is not that these measures are perfect. It is that environmental science has agreed conventions, units and accounting rules that make its state variables commensurable across studies, places and decades.</P>

        <P>Social science has no agreed equivalent for the state of a norm. At least four candidates compete:</P>

        <ol className="mb-[0.85em] list-decimal pl-8 space-y-1.5 text-justify" style={hyphens}>
          <li><strong>Adoption share</strong>: the fraction of a population performing a behaviour, such as electric-vehicle ownership or plant-based diets.</li>
          <li><strong>Attitudes</strong>: stated individual preferences, measured by survey.</li>
          <li><strong>Perceived norms</strong>: second-order beliefs about what others do or approve of.</li>
          <li><strong>Discourse</strong>: the frequency and framing of topics in media or online text.</li>
        </ol>

        <P>These do not measure the same thing at different resolutions. They move at different rates and can move in opposite directions. Behaviour can lag private attitudes when people misperceive what others think (<C k="prentice1993">Prentice and Miller</C> <C k="prentice1993">1993</C>); a norm can therefore tip in second-order beliefs before any change is visible in adoption. Which candidate is “the” state variable is not an empirical question that more data would settle. It is a modelling choice, and different choices yield different tipping points, or none.</P>

        <P>The Klemeš volume contains the most interesting attempt to bypass this problem. <C k="gonzalezmejia2015">González-Mejía et al.</C> (<C k="gonzalezmejia2015">2015</C>) describe Fisher information as a measure of dynamic order that can be computed across many variables at once, and apply it to urban, regional and national systems. In related work, Fisher information was calculated from social, economic and environmental variables for France, Germany and the United States across the twentieth century; only Germany appeared to undergo a regime shift, and each country showed declining Fisher information before major events such as the world wars and the Great Depression (<C k="vance2017">Vance et al.</C> <C k="vance2017">2017</C>).</P>

        <P>This approach shows that a regime-shift index can be built for social systems without choosing a single state variable. But it shows something else as well. A Fisher-information index is not governed by any <i>f</i>; it does not say what changed, through which feedback, or which way the system would go next. The result depends on which variables are included, and the index cannot distinguish a coordination tipping from a war. It achieves measurability by giving up mechanism.</P>

        <P>The precise claim, therefore, is not that social systems lack state variables. It is that they lack a state variable that is both measurable in agreed units and mechanistically meaningful. Measures that are mechanistically meaningful, such as perceived norms, are hard to observe at scale; measures that are easy to observe at scale, such as discourse volume or composite indices, are mechanistically opaque. At bounded scales the gap narrows: within a single market, the adoption share of a technology is both observable and directly tied to the feedbacks that drive diffusion.</P>

        <P><strong>Verdict: metaphor at the scale of whole societies; partly carries over at bounded scales.</strong> For a norm or a society, there is no observable quantity that is the same formal object as B4 (criterion i fails). Within a defined market or population and for a specified behaviour, adoption share comes close.</P>

        <H3 n="4.5" id="sec-4-5">Early-warning signals</H3>

        <P>Early-warning signals inherit every weakness identified so far, because B5 presupposes B4, a slowly moving control and a fold-type mechanism. In social systems all three presuppositions are doubtful, and a further statistical problem, the selection of cases by outcome, is worse than in ecology.</P>

        <P>The most careful social application to date deserves to be taken on its own terms. <C k="boulton2025">Boulton et al.</C> (<C k="boulton2025">2025</C>) analysed the daily share of online advert views going to electric vehicles on a UK car-selling website from 2018 to 2023. The share rose overall, spiked after specific external events such as abrupt petrol and diesel price rises, and then relaxed towards a quasi-equilibrium. Return times after these spikes lengthened over time, which the authors interpret as a loss of resilience in the incumbent state, and lag-1 autocorrelation and variance also rose. They conclude that low- and mid-price segments may have passed a tipping point, consistent with evidence that second-hand electric vehicles had reached price parity. The design has real strengths. It works at a bounded scale where adoption-related quantities are observable, and it measures recovery from quasi-natural perturbations, which is close to the direct test of critical slowing down that <C k="dakos2015">Dakos et al.</C> (<C k="dakos2015">2015</C>) recommend.</P>

        <P>Three difficulties remain, and they apply with greater force to less carefully bounded applications.</P>

        <ol className="mb-[0.85em] list-decimal pl-8 space-y-1.5 text-justify" style={hyphens}>
          <li><strong>What the variable measures.</strong> View share is a measure of attention, not of adoption or of the norm itself. It is one of the four candidate state variables of Section <X to="sec-4-4">4.4</X>, chosen because it is observable at high frequency. Whether it is governed by the feedbacks that drive adoption is an assumption, not a finding.</li>
          <li><strong>Alternative explanations for the indicators.</strong> Rising variance and autocorrelation are not unique to critical slowing down. <C k="dakos2015">Dakos et al.</C> (<C k="dakos2015">2015</C>) warn that changes in the pattern of external fluctuations can produce false-positive trends in both. Social time series are typically non-stationary in exactly this way: news cycles, policy announcements and price shocks change in frequency and size. For a variable that is a share, there is also a mechanical effect. The variance of a binomial proportion scales with <i>p</i>(1 − <i>p</i>), so it rises as a share grows from near zero towards one half whether or not the system is near a fold. <C k="boulton2025">Boulton et al.</C> (<C k="boulton2025">2025</C>) detrend the series with a kernel smoother and compute variance on the residuals, but they do not transform the share or normalise its variance, so part of the reported rise in variance may reflect the rising mean of the share itself. Figure <X to="fig-3">3</X> shows how large this effect can be: with the same detrending and window choices, it alone produces a roughly thirty-fold rise in variance in a synthetic share whose resilience never changes.</li>
          <li><strong>Selection by outcome.</strong> <C k="boettiger2012">Boettiger and Hastings</C> (<C k="boettiger2012">2012</C>) showed that when systems are selected for study because they have already undergone a transition, common warning statistics produce an elevated rate of false positives, a version of the prosecutor’s fallacy. Social cases are chosen almost entirely by outcome: the movements that succeeded, the technologies that diffused, the norms that changed.</li>
        </ol>

        <Figure n={3} src="/images/where_the_analogy_breaks_fig3.png" alt="Two panels showing synthetic adoption share and its variance: variance rises about thirty-fold on the raw share but not on the logit scale.">
          Rising variance without loss of resilience. (a) A synthetic daily adoption share rising from 1% to 20% over six years. Fluctuations around the trend are generated on the logit scale by an AR(1) process with constant coefficient (0.5) and constant noise, so the resilience of the system does not change. (b) Variance of the residuals after detrending with a 50-day box kernel, computed in a moving two-year window and indexed to the first window (logarithmic scale). Computed on the raw share, variance rises about thirty-fold (Kendall <i>τ</i> = 1.00); computed on the logit of the share, it does not (<i>τ</i> = −0.25). The detrending and window choices follow <C k="boulton2025">Boulton et al.</C> (<C k="boulton2025">2025</C>). Illustrative simulation.
        </Figure>

        <P>The mechanism problem is equally serious. The standard indicators are derived for B-tipping. Social transitions are often driven by shocks such as wars, pandemics or sudden price changes, which correspond more closely to noise-induced or rate-induced tipping (<C k="ashwin2012">Ashwin et al.</C> <C k="ashwin2012">2012</C>). Purely stochastic transitions do not produce the warning patterns at all (<C k="boettiger2013">Boettiger and Hastings</C> <C k="boettiger2013">2013</C>). Fisher information has been proposed as a leading indicator that performs better than variance and autocorrelation in multivariate systems (<C k="eason2014">Eason et al.</C> <C k="eason2014">2014</C>), but, as Section <X to="sec-4-4">4.4</X> showed, it buys this performance at the cost of mechanism.</P>

        <P><strong>Verdict: partly carries over at bounded scales with high-frequency data; a metaphor for norms at the scale of society.</strong> Where a bounded adoption variable exists and quasi-natural perturbations can be observed, the same formal object can be estimated (criteria i and ii). It cannot yet be validated without hindsight (criterion iii), because no social application has been tested against matched cases that did not tip.</P>

        <H3 n="4.6" id="sec-4-6">Reflexivity</H3>

        <P>Reflexivity has no ecological counterpart, and it changes how every other verdict should be read. A shallow lake does not read <C k="scheffer2001">Scheffer et al.</C> (<C k="scheffer2001">2001</C>). People read the <em>Global Tipping Points Report</em>.</P>

        <P>The philosophical point is well established. <C k="merton1948">Merton</C> (<C k="merton1948">1948</C>) described the self-fulfilling prophecy, in which a belief about a social situation brings about the situation it describes. <C k="hacking1995">Hacking</C> (<C k="hacking1995">1995</C>) argued that the classifications of the human sciences create <em>looping effects</em>: the people classified become aware of the classification and change in response, which in turn changes what the classification refers to. Social tipping claims are classifications of exactly this kind. To announce that a positive tipping point has been crossed is to tell people that most others are moving, and, in a threshold model, telling people that most others are moving is itself the mechanism of tipping. <C k="nyborg2016">Nyborg et al.</C> (<C k="nyborg2016">2016</C>) are explicit that one of the most powerful roles of policy is to give people reasons to change their expectations about others’ behaviour.</P>

        <P>Reflexivity can also be self-defeating. <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) quote the Secretary General of OPEC warning at COP28 that pressure against fossil fuels might reach a tipping point with irreversible consequences: a forecast of tipping, issued in order to mobilise resistance to it. Incumbents who believe a transition is imminent have an incentive to invest in preventing it. A published detection therefore enters the system it describes, and it can push in either direction.</P>

        <P>This has two consequences for the earlier verdicts. First, it strengthens the case for treating social tipping as partly an intervention, not only a property: thresholds, hysteresis and equilibrium selection are all shaped by what actors believe about them. Second, it weakens the case for validation by hindsight. If a tipping claim contributed to the transition it reported, the transition cannot simply be counted as confirmation of the claim.</P>

        <P><strong>Verdict: no ecological analogue.</strong> Reflexivity fails criterion (i) by definition, since there is no benchmark object. It is better understood as a qualification on all the other verdicts: in social systems the observer, and the detector, are inside the system.</P>

        <H2 n="5" id="sec-5">Engaging Kopp et al. (2025)</H2>

        <P>The property-by-property test supports <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) on most of their diagnosis and departs from them on the remedy. The concept is overbundled and often oversold; it is not, for that reason, empty. What survives the test is a narrower, conditional concept of social tipping that can be stated precisely and tested.</P>

        <H3 n="5.1" id="sec-5-1">Where the critique holds</H3>

        <P><strong>Bundling.</strong> <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) recommend specifying abruptness, irreversibility and feedback-driven self-amplification separately rather than bundling them. Section <X to="sec-2">2</X> showed that the bundle loosens even in the biosphere and the climate system, and Section <X to="sec-4">4</X> showed that its parts receive different verdicts in social systems. On this point the audit is a systematic confirmation of their argument.</P>

        <P><strong>Irreversibility in hindsight.</strong> Their claim that social irreversibility can only be assessed in historical retrospect is borne out by Section <X to="sec-4-2">4.2</X>. Hysteresis survives; irreversibility, in the strong sense, does not.</P>

        <P><strong>Normative labelling.</strong> Their objection that “positive” and “negative” encode contested judgements, illustrated by the OPEC warning, is strengthened by Section <X to="sec-4-6">4.6</X>. In a reflexive system, the label is not a neutral description; it is a move in the contest it describes.</P>

        <P><strong>Credibility risk.</strong> <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) warn that conflating political temperature targets with physical thresholds risks a false-alarm effect when a target is passed without visible catastrophe. The social analogue is direct. If a declared positive tipping point is followed by stalling or reversal, the cost falls on the credibility of the science that declared it.</P>

        <H3 n="5.2" id="sec-5-2">Where the critique overreaches</H3>

        <P><strong>It targets the popular model, not the formal one.</strong> Much of the critique is aimed at the “mental model” of tipping, which <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) trace to <C k="gladwell2000">Gladwell</C> (<C k="gladwell2000">2000</C>). But the formal social models are not Gladwellian. Granovetter’s threshold model, the committed-minority model tested by <C k="centola2018">Centola et al.</C> (<C k="centola2018">2018</C>) and the norm-change model tested by <C k="andreoni2021">Andreoni et al.</C> (<C k="andreoni2021">2021</C>) make specific, falsifiable predictions, and under controlled conditions those predictions have been confirmed. That the segregation model’s empirical application is disputed (<C k="easterly2009">Easterly</C> <C k="easterly2009">2009</C>) is a finding about one application, not about the mechanism class.</P>

        <P><strong>“Leverage points” is the more general term, not a replacement.</strong> <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) suggest that positive-tipping researchers consider the term “leverage points” (<C k="meadows1999">Meadows</C> <C k="meadows1999">1999</C>), which they describe as emphasising the opportunity for directed interventions to produce larger changes. That reading is narrower than Meadows’s own framework, whose deeper leverage points concern the structure of a system’s feedbacks, rules and goals; <C k="abson2017">Abson et al.</C> (<C k="abson2017">2017</C>) developed this into the distinction between shallow and deep leverage. The better relation between the two terms is that a tipping point is a special case of a leverage point: one at which an intervention engages a reinforcing feedback strong enough to make the change self-sustaining. Replacing “tipping” with “leverage” would therefore discard the more specific, and more testable, claim.</P>

        <P>That claim has two halves, and both are needed. It is not enough that change continues after an intervention is withdrawn, because smooth diffusion driven by reinforcing feedback, with no threshold and no alternative stable state, also continues once it has started (<C k="bass1969">Bass</C> <C k="bass1969">1969</C>). The signature of tipping is that, after withdrawal, change <em>reverts</em> when the push was below a critical size and <em>persists</em> when it was above it. Figure <X to="fig-2">2</X>b illustrates the contrast, together with the slow return that distinguishes inertia from hysteresis.</P>

        <P>Policy withdrawals provide natural experiments of exactly this kind, and two have already occurred in electric-vehicle markets. In Denmark, the phased reintroduction of registration tax on battery-electric cars from 2016 paralysed sales, and in 2017 the government postponed the phase-in and introduced a battery-capacity deduction to restart the market (<C k="iea2017">International Energy Agency</C> <C k="iea2017">n.d.</C>). In Germany, the federal purchase subsidy was ended abruptly on 17 December 2023, a year earlier than planned (<C k="autovista2024">Autovista24</C> <C k="autovista2024">2024</C>); battery-electric registrations then fell by 27.4% in 2024, to 380,609, and their share of new registrations fell to 13.5%, from 18.4% in 2023 (<C k="eafo2025">European Alternative Fuels Observatory</C> <C k="eafo2025">2025</C>; <C k="autovista2024">Autovista24</C> <C k="autovista2024">2024</C>). In both cases the adoption share reverted when support was removed, which is evidence that neither market had tipped at that time. Neither test is clean: buyers had brought purchases forward ahead of the withdrawals, wider market conditions changed, and the announcements themselves altered expectations, which is the reflexivity problem of Section <X to="sec-4-6">4.6</X>. But they show that the testable content of a tipping claim can be tested, and that the result can be negative.</P>

        <P><strong>There is a shared formal object, even without a shared paradigm.</strong> <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) doubt that there is value in linking Earth-system and social change within a unifying tipping-points paradigm. On the paradigm, I agree: Section <X to="sec-4">4</X> shows that no single framework carries over intact. But Section <X to="sec-4-3">4.3</X> shows that multiple stable states in coordination systems are the same mathematical object as alternative stable states in ecosystems. The link between the fields is real at the level of properties, even where it fails at the level of the whole concept.</P>

        <P><strong>Hindsight is a methodological problem, not a fatal one.</strong> The retrospective character of most social tipping claims is a weakness of current research designs, not a necessary feature of the concept. Laboratory experiments with exogenously varied conditions (<C k="andreoni2021">Andreoni et al.</C> <C k="andreoni2021">2021</C>), pre-specified predictions, policy withdrawals and comparisons against matched cases that did not tip can all, in principle, test tipping claims prospectively in bounded domains.</P>

        <P>The reply by <C k="smithsr2025">Smith et al.</C> (<C k="smithsr2025">2025</C>) also needs qualifying. They are right that thresholds, self-propelling feedbacks and nonlinear change are well established in the scientific literature. But established in the literature is not the same as established for a given social application. <C k="hillebrand2020">Hillebrand et al.</C> (<C k="hillebrand2020">2020</C>) found that thresholds rarely emerge even from ecological experiments. The burden of evidence for any particular social tipping claim remains with the claimant.</P>

        <H3 n="5.3" id="sec-5-3">A defensible concept: the conditional social-tipping claim</H3>

        <P>What survives the test is not a type of system but a type of claim. I propose that a claim of social tipping is warranted to the extent that it meets six conditions. The first five are evidential. The sixth concerns validity: because a published tipping claim can alter what it describes, its reflexive status affects how its evidence should be read.</P>

        <ol className="mb-[0.85em] list-decimal pl-8 space-y-1.5 text-justify" style={hyphens}>
          <li><strong>Mechanism.</strong> It names a specific reinforcing feedback, such as coordination payoffs, network contagion or increasing returns, and the population and boundary over which it operates.</li>
          <li><strong>Observable state.</strong> It names a state variable, such as an adoption share within a defined population, and gives a reason to think the named feedback governs it.</li>
          <li><strong>Route to tipping.</strong> It identifies either a control or critical quantity, such as cost parity or the size of a committed minority, or a specified and estimable measure of criticality in the sense of <C k="smithek2026">Smith et al.</C> (<C k="smithek2026">2026</C>). If the expected route is noise- or rate-induced, it says so, and claims no early warning.</li>
          <li><strong>Nonlinearity.</strong> It presents evidence that distinguishes tipping from smooth reinforcing growth: reversion after a sub-critical intervention is withdrawn and persistence after a supra-critical one is withdrawn, bimodal outcomes across comparable cases, or persistence after the control is restored.</li>
          <li><strong>Counterfactual test.</strong> It is tested against matched cases that did not tip, or out of sample, so that the evidence does not come only from cases selected because they tipped.</li>
          <li><strong>Reflexive status.</strong> It states whether it is a description or an intervention, and how its validation accounts for any effect its own publication may have had on the outcome.</li>
        </ol>

        <P>Stated as a binary test, these conditions would be met almost nowhere outside the laboratory, which would amount to conceding the case of <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>) by another route. They are better read as levels of warrant (Table <X to="tab-1">1</X>). Condition 5 in particular is rarely available for unique historical transitions, so the levels should be stated explicitly instead of hidden.</P>

        <div id="tab-1" className="my-8">
          <p className="mb-2 text-center text-[0.95rem]">
            <strong>Table 1:</strong> Levels of warrant for social tipping claims under the six conditions of Section <X to="sec-5-3">5.3</X>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[0.9rem] leading-snug" style={{ minWidth: 520 }}>
              <thead>
                <tr><Th w="6.5rem"><strong>Warrant</strong></Th><Th><strong>Conditions met</strong></Th><Th><strong>Examples</strong></Th></tr>
              </thead>
              <tbody>
                <tr><Td>Strong</Td><Td>All six, in a controlled or replicated setting</Td><Td><C k="centola2018">Centola et al.</C> (<C k="centola2018">2018</C>); <C k="andreoni2021">Andreoni et al.</C> (<C k="andreoni2021">2021</C>)</Td></tr>
                <tr><Td>Moderate</Td><Td>1–3, with partial evidence on 4</Td><Td><C k="boulton2025">Boulton et al.</C> (<C k="boulton2025">2025</C>); the technology verdicts of the <em>Global Tipping Points Report 2025</em></Td></tr>
                <tr><Td>Weak</Td><Td>1 only, or no mechanism stated</Td><Td>Most society-wide claims that a norm or a society has tipped</Td></tr>
                <BottomRule cols={3} />
              </tbody>
            </table>
          </div>
        </div>

        <P>The Danish and German withdrawals discussed in Section <X to="sec-5-2">5.2</X> show that condition 4 can also return a negative result. A claim that a national electric-vehicle market had tipped would, in those two cases and at those times, have failed it.</P>

        <P>These conditions answer a different question from existing frameworks. <C k="winkelmann2022">Winkelmann et al.</C> (<C k="winkelmann2022">2022</C>) proposed filtering criteria for identifying social tipping processes that could be decisive for climate action, and <C k="lenton2022">Lenton et al.</C> (<C k="lenton2022">2022</C>) set out how positive tipping points might be operationalised and triggered. Both ask which processes are candidates for tipping and how to act on them. The conditional claim asks when a statement that tipping has occurred, or is occurring, is warranted by evidence.</P>

        <P>The closest recent proposal, and the one with which this paper most directly disagrees, is that of <C k="smithek2026">Smith et al.</C> (<C k="smithek2026">2026</C>), currently a discussion preprint. They define <em>criticality</em> as the likelihood that a social system will undergo tipping, and <em>critical agency</em> as the capacity of actors to shape it. They argue that societal tipping is often not well described as a shift between alternative stable states, and they design criticality for cases where a single critical threshold parameter is undefinable, unknown or unknowable, proposing path bifurcations in open-ended systems instead. At the scale of macro-level societal systems, their diagnosis matches the verdict of Section <X to="sec-4-4">4.4</X>. The disagreement is over bounded systems. Section <X to="sec-4-3">4.3</X> found that alternative stable states do carry over within bounded coordination settings, and Section <X to="sec-4-1">4.1</X> that thresholds can be identified there experimentally. Abandoning that machinery everywhere would discard the parts of the analogy that work.</P>

        <P>The two proposals can still be combined. Condition 3 admits criticality as a route to tipping, provided it is specified and estimable. But criticality does not remove the need for conditions 4 and 5: a probability of tipping is only as good as the evidence that separates tipping from smooth change and the cases against which it has been tested. <C k="smithek2026">Smith et al.</C> (<C k="smithek2026">2026</C>) themselves note the difficulties of applying early-warning methods to social data and call for quasi-natural experiments to evaluate interventions, which is the logic of condition 4.</P>

        <H2 n="6" id="sec-6">Implications for detection, including AI and NLP methods</H2>

        <P>The verdicts in Section <X to="sec-4">4</X> sort detection claims into three levels, and computational methods can currently support only the first level without additional design. I distinguish them because research and policy reports often move from one level to the next without saying so.</P>

        <H3 n="6.1" id="sec-6-1">Three levels of claim</H3>

        <ol className="mb-[0.85em] list-decimal pl-8 space-y-1.5 text-justify" style={hyphens}>
          <li><strong>Change detection.</strong> Something in an observed signal changed: the volume, sentiment or framing of discourse about a topic shifted, or an adoption series changed slope. Change-point methods, topic models and large language model classifiers can support claims of this kind well, subject to ordinary concerns about sampling and measurement.</li>
          <li><strong>Mechanism attribution.</strong> The change was a tipping: a transition between alternative states driven by a reinforcing feedback. This requires the first three conditions of Section <X to="sec-5-3">5.3</X>, a named mechanism, an observable state governed by it, and an identified route to tipping. A detector trained only on text cannot supply these; they must come from a model of the system.</li>
          <li><strong>Prospective warning.</strong> A tipping is approaching. This requires, in addition, the fourth and fifth conditions: evidence that separates tipping from smooth growth, and validation against matched cases that did not tip, with out-of-sample performance stated in terms of false-alarm and missed-detection rates (<C k="boettiger2012">Boettiger and Hastings</C> <C k="boettiger2012">2012</C>).</li>
        </ol>

        <P>Most published claims of social tipping, including many framed as early warnings, are evidence at the first level presented as evidence at the second or third.</P>

        <H3 n="6.2" id="sec-6-2">The hindsight problem in machine learning</H3>

        <P>The prosecutor’s fallacy (<C k="boettiger2012">Boettiger and Hastings</C> <C k="boettiger2012">2012</C>) takes a particularly acute form in supervised learning. A model trained on movements, technologies or norms that are known to have tipped learns the features of those cases. Unless it is also trained and tested on cases that looked similar but did not tip, it has learned to recognise the aftermath of success, not its approach. The obvious negative cases are failed or stalled transitions: campaigns that plateaued, norms that resisted interventions which worked elsewhere, such as the Greek indoor smoking ban discussed by <C k="nyborg2016">Nyborg et al.</C> (<C k="nyborg2016">2016</C>), and technologies whose diffusion stalled. These cases are under-recorded because they are less salient, and a corpus assembled from news coverage over-represents the transitions that happened. Careful detection research needs negative controls constructed deliberately and specified before the data are examined.</P>

        <H3 n="6.3" id="sec-6-3">Discourse is not the state</H3>

        <P>Section <X to="sec-4-4">4.4</X> showed that discourse is only one of four candidate state variables, and the least directly tied to the mechanisms of tipping. Three cautions follow for natural-language methods.</P>

        <ul className="mb-[0.85em] list-disc pl-8 space-y-1.5 text-justify" style={hyphens}>
          <li><strong>Attention is not adoption.</strong> Public attention to issues rises and decays on its own dynamics (<C k="downs1972">Downs</C> <C k="downs1972">1972</C>). A spike in discourse after a focusing event is a change in attention, not evidence that a norm has moved, and an attention series can show rising variance and autocorrelation for reasons unrelated to any fold.</li>
          <li><strong>Measure the mechanism, not the topic.</strong> Language models can be used to estimate quantities closer to the mechanism, for example the frequency of statements about what <em>others</em> do or approve of, which bear on second-order beliefs. These are more promising targets than topic volume, though they still require validation against survey or behavioural measures.</li>
          <li><strong>The platform is part of the system.</strong> Recommendation and ranking algorithms are themselves reinforcing feedbacks. A cascade on a platform may reflect the platform’s amplification rather than a change in the wider population, so the measuring instrument and the dynamics are entangled.</li>
        </ul>

        <H3 n="6.4" id="sec-6-4">Reflexivity and deployed detectors</H3>

        <P>A detector whose outputs are published becomes part of the system it monitors (Section <X to="sec-4-6">4.6</X>). This has two practical implications. First, validation designs must account for the possibility that a published signal changed the outcome; a transition that followed a warning cannot automatically count as a correct prediction. Second, once a social indicator is known to be watched, actors have reasons to influence it, so indicators chosen for detection can lose their meaning as they become targets, the general form of Goodhart’s law (<C k="strathern1997">Strathern</C> <C k="strathern1997">1997</C>). Detection work in this area should state whether its outputs are intended for publication or for internal decision-making, and how either might feed back.</P>

        <H3 n="6.5" id="sec-6-5">A test case: the 2025 positive-tipping verdicts</H3>

        <P>The <em>Global Tipping Points Report 2025</em> is a useful test of these standards because it makes near-real-time claims that positive tipping points have been crossed in solar photovoltaics and wind power globally, and in electric vehicles, battery storage and heat pumps in leading markets (<C k="lenton2025">Lenton et al.</C> <C k="lenton2025">2025</C>). Measured against the conditional claim of Section <X to="sec-5-3">5.3</X>, these are among the stronger social tipping claims available, and the reasons are instructive. Each concerns a bounded technology market, not a society-wide norm. Each has an observable adoption share. Each has a plausible, specified reinforcing feedback, namely increasing returns through learning and falling costs, and an identifiable critical quantity, cost parity with incumbents. They therefore meet conditions 1 to 3 reasonably well.</P>

        <P>They are weaker on conditions 4 and 5, since the evidence comes from markets selected because they moved, with no withdrawal test or matched non-tipped comparison, and on condition 6, since the report is openly interventionist: it calls on leaders to embed tipping-point science in governance. That is a legitimate aim, but a claim made in order to accelerate a transition cannot also be treated as a neutral observation of it.</P>

        <P>The Danish and German withdrawals discussed in Section <X to="sec-5-2">5.2</X> show why condition 4 matters for these verdicts. Adoption shares in support-dependent markets have reverted when support was removed, so a market’s position at a moment of rapid growth does not establish that it has tipped. Which markets the report counts as “leading”, and whether their growth would survive the removal of support, are the questions a withdrawal test would answer.</P>

        <P>The contrast with claims about diets, norms or social movements at the scale of whole societies follows the verdicts of Section <X to="sec-4">4</X>. The further a claim moves from bounded technology diffusion towards society-wide norm change, the more it depends on the properties that carry over least: an agreed state variable, early-warning statistics and validation without hindsight. That gradient, rather than a yes-or-no verdict on the concept, is what the audit contributes to detection research.</P>

        <H2 n="7" id="sec-7">Conclusion</H2>

        <P>The analogy between ecological and social tipping points neither holds nor breaks as a whole. It breaks in specific places, and knowing where is more useful than either defending or abandoning the concept.</P>

        <P>Alternative stable states carry over fully, within bounded coordination settings, because multiple equilibria were a social-scientific idea before they were an ecological one. Thresholds carry over at the level of individual decision rules and their aggregate bifurcation, but outside controlled conditions the critical value cannot be identified in advance. Hysteresis survives as lock-in; irreversibility does not, because social persistence can be chosen, contested and reversed. The state-variable concept fails at the scale of whole societies, since no measurable quantity is also mechanistically meaningful, and with it most of the formal basis of early warning. Reflexivity has no ecological counterpart and places the observer, and the detector, inside the system.</P>

        <P>These verdicts support much of the diagnosis of <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>): the concept is overbundled, its irreversibility is a retrospective judgement, and its normative labels are moves in a contest. They do not support abandoning it. The formal social models make testable predictions that have been confirmed under controlled conditions, and the term “tipping” carries a falsifiable claim, that change becomes self-sustaining after a push, which “leverage point” does not. What survives is a conditional claim: one that names a mechanism, an observable state and a route to tipping, presents evidence that separates tipping from smooth growth, is tested against cases that did not tip, and states its own reflexive status.</P>

        <P>For computational detection, the implication is a discipline of levels. Methods that detect change in discourse are valuable, but they are evidence of change, not of tipping, and not of an approaching tipping. Claims at the higher levels require models of mechanism and validation against cases that did not tip. The most defensible current claims concern bounded technology markets; the least defensible concern society-wide norms. Research that aims to detect social tipping in environmental behaviour should start where the analogy holds, and design explicitly for the places where it breaks.</P>

        <H2 n="8" id="sec-8">Summary table</H2>

        <P>Table <X to="tab-2">2</X> summarises the property-by-property verdicts. Criteria: (i) same formal object; (ii) identifiable from observable variables; (iii) identifiable without hindsight.</P>

        <Breakout id="tab-2">
          <p className="mb-2 text-center text-[0.95rem]">
            <strong>Table 2:</strong> Property-by-property verdicts on the ecological–social analogy.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[0.8rem] leading-snug" style={{ minWidth: 1000 }}>
              <thead>
                <tr><Th w="8rem"><strong>Property</strong></Th><Th><strong>Ecological meaning</strong></Th><Th><strong>Social analogue</strong></Th><Th><strong>Verdict</strong></Th><Th><strong>Key sources</strong></Th></tr>
              </thead>
              <tbody>
                <tr><Td>Alternative stable states</Td><Td>Two or more attractors coexist under the same conditions</Td><Td>Multiple equilibria of coordination; stable vicious and virtuous norm cycles</Td><Td>Carries over within bounded coordination settings (i, ii; iii in principle); equilibria depend on changeable institutions</Td><Td><C k="scheffer2001">Scheffer et al.</C> (<C k="scheffer2001">2001</C>); <C k="schelling1971">Schelling</C> (<C k="schelling1971">1971</C>); <C k="nyborg2016">Nyborg et al.</C> (<C k="nyborg2016">2016</C>); <C k="andreoni2021">Andreoni et al.</C> (<C k="andreoni2021">2021</C>)</Td></tr>
                <tr><Td>Thresholds</Td><Td>Critical value of an external control parameter</Td><Td>Individual thresholds and their aggregate distribution; committed-minority critical mass</Td><Td>Partly carries over (i); critical value not identifiable in advance outside controlled settings (ii, iii fail)</Td><Td><C k="lenton2008">Lenton et al.</C> (<C k="lenton2008">2008</C>); <C k="granovetter1978">Granovetter</C> (<C k="granovetter1978">1978</C>); <C k="centola2018">Centola et al.</C> (<C k="centola2018">2018</C>); <C k="hillebrand2020">Hillebrand et al.</C> (<C k="hillebrand2020">2020</C>)</Td></tr>
                <tr><Td>Hysteresis and irreversibility</Td><Td>Forward and backward transitions at different critical values; return threshold outside feasible range</Td><Td>Lock-in and path dependence; persistence designed through policy feedback</Td><Td>Hysteresis partly carries over (i, ii) but must be distinguished from inertia; irreversibility is a metaphor (iii fails)</Td><Td><C k="scheffer2001">Scheffer et al.</C> (<C k="scheffer2001">2001</C>); <C k="unruh2000">Unruh</C> (<C k="unruh2000">2000</C>); <C k="levin2012">Levin et al.</C> (<C k="levin2012">2012</C>); <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>)</Td></tr>
                <tr><Td>State variables and measurability</Td><Td>Physical quantity in stable, additive units, governed by system dynamics</Td><Td>Adoption share, attitudes, perceived norms or discourse, with no agreed choice</Td><Td>Metaphor at the scale of whole societies (i fails); partly carries over within bounded markets</Td><Td><C k="cucek2015">Čuček et al.</C> (<C k="cucek2015">2015</C>); <C k="gonzalezmejia2015">González-Mejía et al.</C> (<C k="gonzalezmejia2015">2015</C>); <C k="vance2017">Vance et al.</C> (<C k="vance2017">2017</C>)</Td></tr>
                <tr><Td>Early-warning signals</Td><Td>Critical slowing down: rising recovery time, autocorrelation and variance before a fold</Td><Td>Indicators applied to attention, adoption or composite indices</Td><Td>Partly carries over at bounded scales with high-frequency data (i, ii); not yet validated without hindsight (iii fails); metaphor for society-wide norms</Td><Td><C k="scheffer2009">Scheffer et al.</C> (<C k="scheffer2009">2009</C>); <C k="dakos2015">Dakos et al.</C> (<C k="dakos2015">2015</C>); <C k="boettiger2012">Boettiger and Hastings</C> (<C k="boettiger2012">2012</C>); <C k="boulton2025">Boulton et al.</C> (<C k="boulton2025">2025</C>)</Td></tr>
                <tr><Td>Reflexivity</Td><Td>No ecological counterpart</Td><Td>Actors observe and respond to tipping claims; claims act as interventions</Td><Td>No analogue; qualifies all other verdicts</Td><Td><C k="hacking1995">Hacking</C> (<C k="hacking1995">1995</C>); <C k="nyborg2016">Nyborg et al.</C> (<C k="nyborg2016">2016</C>); <C k="kopp2025">Kopp et al.</C> (<C k="kopp2025">2025</C>)</Td></tr>
                <BottomRule cols={5} />
              </tbody>
            </table>
          </div>
        </Breakout>

        <H2 id="declarations">Declarations</H2>

        <P><strong>Competing interests.</strong> The author declares no competing interests.</P>

        <P><strong>Funding.</strong> This research received no specific funding.</P>

        <P><strong>Data and code availability.</strong> No new empirical data were generated in this study. Figures <X to="fig-1">1</X>–<X to="fig-3">3</X> are produced from minimal illustrative models and synthetic data; the Python code that generates them is provided as an ancillary file (<Ext href={ANCILLARY}>anc/figures.py</Ext>). Numbers quoted from other sources are cited where they appear.</P>

        <P><strong>Use of generative AI.</strong> Generative AI tools were used to assist with literature searching, citation checking and drafting. The author reviewed and edited all content, verified the sources cited, and takes full responsibility for the paper.</P>

        <H2 id="references">References</H2>
        <ol className="list-none text-[0.95rem] leading-snug">
          <li id="ref-abson2017" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>David J. Abson, Joern Fischer, Julia Leventon, Jens Newig, Thomas Schomerus, Ulli Vilsmaier, Henrik von Wehrden, Paivi Abernethy, Christopher D. Ives, Nicolas W. Jager, and Daniel J. Lang. Leverage points for sustainability transformation. <em>Ambio</em>, 46(1):30–39, 2017. doi: <Ext href="https://doi.org/10.1007/s13280-016-0800-y">10.1007/s13280-016-0800-y</Ext>.</li>
          <li id="ref-andreoni2021" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>James Andreoni, Nikos Nikiforakis, and Simon Siegenthaler. Predicting social tipping and norm change in controlled experiments. <em>Proceedings of the National Academy of Sciences</em>, 118(16):e2014893118, 2021. doi: <Ext href="https://doi.org/10.1073/pnas.2014893118">10.1073/pnas.2014893118</Ext>.</li>
          <li id="ref-armstrongmckay2022" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>David I. Armstrong McKay, Arie Staal, Jesse F. Abrams, Ricarda Winkelmann, Boris Sakschewski, Sina Loriani, Ingo Fetzer, Sarah E. Cornell, Johan Rockström, and Timothy M. Lenton. Exceeding 1.5 °C global warming could trigger multiple climate tipping points. <em>Science</em>, 377(6611):eabn7950, 2022. doi: <Ext href="https://doi.org/10.1126/science.abn7950">10.1126/science.abn7950</Ext>.</li>
          <li id="ref-arthur1989" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>W. Brian Arthur. Competing technologies, increasing returns, and lock-in by historical events. <em>The Economic Journal</em>, 99(394):116–131, 1989.</li>
          <li id="ref-ashwin2012" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Peter Ashwin, Sebastian Wieczorek, Renato Vitolo, and Peter Cox. Tipping points in open systems: bifurcation, noise-induced and rate-dependent examples in the climate system. <em>Philosophical Transactions of the Royal Society A</em>, 370(1962):1166–1184, 2012. doi: <Ext href="https://doi.org/10.1098/rsta.2011.0306">10.1098/rsta.2011.0306</Ext>.</li>
          <li id="ref-autovista2024" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Autovista24. German new-car registrations plunged in December as EV bonus withdrawn early. Published 5 January 2024, 2024. URL <Ext href="https://autovista24.autovistagroup.com/news/german-new-car-registrations-plunged-december-ev-bonus-withdrawn-early/">https://autovista24.autovistagroup.com/news/german-new-car-registrations-plunged-december-ev-bonus-withdrawn-early/</Ext>.</li>
          <li id="ref-bass1969" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Frank M. Bass. A new product growth for model consumer durables. <em>Management Science</em>, 15(5):215–227, 1969.</li>
          <li id="ref-boettiger2012" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Carl Boettiger and Alan Hastings. Early warning signals and the prosecutor’s fallacy. <em>Proceedings of the Royal Society B</em>, 279(1748):4734–4739, 2012. doi: <Ext href="https://doi.org/10.1098/rspb.2012.2085">10.1098/rspb.2012.2085</Ext>.</li>
          <li id="ref-boettiger2013" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Carl Boettiger and Alan Hastings. No early warning signals for stochastic transitions: insights from large deviation theory. <em>Proceedings of the Royal Society B</em>, 280:20131372, 2013. doi: <Ext href="https://doi.org/10.1098/rspb.2013.1372">10.1098/rspb.2013.1372</Ext>.</li>
          <li id="ref-boulton2025" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Chris A. Boulton, Joshua E. Buxton, and Timothy M. Lenton. Early opportunity signals of a tipping point in the UK’s second-hand electric vehicle market. <em>Earth System Dynamics</em>, 16:411–421, 2025. doi: <Ext href="https://doi.org/10.5194/esd-16-411-2025">10.5194/esd-16-411-2025</Ext>.</li>
          <li id="ref-breshears2019" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>David D. Breshears, Jason P. Field, Darin J. Law, Juan C. Villegas, Craig D. Allen, Neil S. Cobb, and John B. Bradford. Rapid broad-scale ecosystem changes and their consequences for biodiversity. In Thomas E. Lovejoy and Lee Hannah, editors, <em>Biodiversity and Climate Change: Transforming the Biosphere</em>, pages 80–90. Yale University Press, New Haven, 2019.</li>
          <li id="ref-centola2018" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Damon Centola, Joshua Becker, Devon Brackbill, and Andrea Baronchelli. Experimental evidence for tipping points in social convention. <em>Science</em>, 360(6393):1116–1119, 2018. doi: <Ext href="https://doi.org/10.1126/science.aas8827">10.1126/science.aas8827</Ext>.</li>
          <li id="ref-cucek2015" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Lidija Čuček, Jiří Jaromír Klemeš, and Zdravko Kravanja. Overview of environmental footprints. In Jiří Jaromír Klemeš, editor, <em>Assessing and Measuring Environmental Impact and Sustainability</em>, chapter 5. Butterworth-Heinemann, Oxford, 2015.</li>
          <li id="ref-dakos2013" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Vasilis Dakos, Egbert H. van Nes, and Marten Scheffer. Flickering as an early warning signal. <em>Theoretical Ecology</em>, 6:309–317, 2013. doi: <Ext href="https://doi.org/10.1007/s12080-013-0186-4">10.1007/s12080-013-0186-4</Ext>.</li>
          <li id="ref-dakos2015" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Vasilis Dakos, Stephen R. Carpenter, Egbert H. van Nes, and Marten Scheffer. Resilience indicators: prospects and limitations for early warnings of regime shifts. <em>Philosophical Transactions of the Royal Society B</em>, 370(1659):20130263, 2015. doi: <Ext href="https://doi.org/10.1098/rstb.2013.0263">10.1098/rstb.2013.0263</Ext>.</li>
          <li id="ref-downs1972" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Anthony Downs. Up and down with ecology: the “issue-attention cycle”. <em>The Public Interest</em>, 28:38–50, 1972.</li>
          <li id="ref-eason2014" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Tarsha Eason, Ahjond S. Garmestani, and Heriberto Cabezas. Managing for resilience: early detection of regime shifts in complex systems. <em>Clean Technologies and Environmental Policy</em>, 16:773–783, 2014. doi: <Ext href="https://doi.org/10.1007/s10098-013-0687-2">10.1007/s10098-013-0687-2</Ext>.</li>
          <li id="ref-easterly2009" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>William Easterly. Empirics of strategic interdependence: the case of the racial tipping point. <em>The B.E. Journal of Macroeconomics</em>, 9(1):25, 2009.</li>
          <li id="ref-eafo2025" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>European Alternative Fuels Observatory. Germany: BEV market share down to 13.5 %, fleet passes 2 million in 2024. European Commission, European Alternative Fuels Observatory, 2025. URL <Ext href="https://alternative-fuels-observatory.ec.europa.eu/general-information/news/germany-bev-market-share-down-135-fleet-2-million-2024">https://alternative-fuels-observatory.ec.europa.eu/general-information/news/germany-bev-market-share-down-135-fleet-2-million-2024</Ext>.</li>
          <li id="ref-gladwell2000" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Malcolm Gladwell. <em>The Tipping Point: How Little Things Can Make a Big Difference</em>. Abacus, London, 2000.</li>
          <li id="ref-gonzalezmejia2015" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Alejandra González-Mejía, Leisha Vance, Tarsha Eason, and Heriberto Cabezas. Recent developments in the application of Fisher information to sustainable environmental management. In Jiří Jaromír Klemeš, editor, <em>Assessing and Measuring Environmental Impact and Sustainability</em>, chapter 2. Butterworth-Heinemann, Oxford, 2015.</li>
          <li id="ref-granovetter1978" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Mark Granovetter. Threshold models of collective behavior. <em>American Journal of Sociology</em>, 83(6):1420–1443, 1978. doi: <Ext href="https://doi.org/10.1086/226707">10.1086/226707</Ext>.</li>
          <li id="ref-grodzins1957" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Morton Grodzins. Metropolitan segregation. <em>Scientific American</em>, 197(4):33–41, 1957.</li>
          <li id="ref-hacking1995" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Ian Hacking. The looping effects of human kinds. In Dan Sperber, David Premack, and Ann James Premack, editors, <em>Causal Cognition: A Multidisciplinary Debate</em>, pages 351–383. Clarendon Press, Oxford, 1995.</li>
          <li id="ref-hansson2025" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Anders Hansson, Jonas Anshelm, and Simon Haikola. A race to the tip: revisiting societal tipping points in the public climate debate. <em>Dialogues on Climate Change</em>, 2025. doi: <Ext href="https://doi.org/10.1177/29768659251380634">10.1177/29768659251380634</Ext>.</li>
          <li id="ref-hillebrand2020" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Helmut Hillebrand, Ian Donohue, W. Stanley Harpole, Dorothee Hodapp, Michal Kucera, Aleksandra M. Lewandowska, Julian Merder, Jose M. Montoya, and Jan A. Freund. Thresholds for ecological responses to global change do not emerge from empirical data. <em>Nature Ecology &amp; Evolution</em>, 4:1502–1509, 2020. doi: <Ext href="https://doi.org/10.1038/s41559-020-1256-9">10.1038/s41559-020-1256-9</Ext>.</li>
          <li id="ref-hoeghguldberg2019" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Ove Hoegh-Guldberg. Coral reefs: megadiversity meets unprecedented environmental change. In Thomas E. Lovejoy and Lee Hannah, editors, <em>Biodiversity and Climate Change: Transforming the Biosphere</em>, pages 55–65. Yale University Press, New Haven, 2019.</li>
          <li id="ref-holling1973" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>C. S. Holling. Resilience and stability of ecological systems. <em>Annual Review of Ecology and Systematics</em>, 4:1–23, 1973. doi: <Ext href="https://doi.org/10.1146/annurev.es.04.110173.000245">10.1146/annurev.es.04.110173.000245</Ext>.</li>
          <li id="ref-iea2017" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>International Energy Agency. Differentiated registration tax (Denmark). IEA Policies Database, n.d. URL <Ext href="https://www.iea.org/policies/2896-differentiated-registration-tax">https://www.iea.org/policies/2896-differentiated-registration-tax</Ext>.</li>
          <li id="ref-jones1994" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Clive G. Jones, John H. Lawton, and Moshe Shachak. Organisms as ecosystem engineers. <em>Oikos</em>, 69(3):373–386, 1994.</li>
          <li id="ref-klemes2015" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Jiří Jaromír Klemeš, editor. <em>Assessing and Measuring Environmental Impact and Sustainability</em>. Butterworth-Heinemann, Oxford, 2015.</li>
          <li id="ref-kopp2025" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Robert E. Kopp, Elisabeth A. Gilmore, Rachael L. Shwom, Helen Adams, Carolina Adler, Michael Oppenheimer, Anand Patwardhan, Chris Russill, Daniela N. Schmidt, and Richard York. ‘Tipping points’ confuse and can distract from urgent climate action. <em>Nature Climate Change</em>, 15(1):29–36, 2025. doi: <Ext href="https://doi.org/10.1038/s41558-024-02196-8">10.1038/s41558-024-02196-8</Ext>. Published online 3 December 2024.</li>
          <li id="ref-lenton2020" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Timothy M. Lenton. Tipping positive change. <em>Philosophical Transactions of the Royal Society B</em>, 375:20190123, 2020. doi: <Ext href="https://doi.org/10.1098/rstb.2019.0123">10.1098/rstb.2019.0123</Ext>.</li>
          <li id="ref-lentonschellnhuber2007" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Timothy M. Lenton and Hans Joachim Schellnhuber. Tipping the scales. <em>Nature Reports Climate Change</em>, 1:97–98, 2007. doi: <Ext href="https://doi.org/10.1038/climate.2007.65">10.1038/climate.2007.65</Ext>.</li>
          <li id="ref-lenton2008" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Timothy M. Lenton, Hermann Held, Elmar Kriegler, Jim W. Hall, Wolfgang Lucht, Stefan Rahmstorf, and Hans Joachim Schellnhuber. Tipping elements in the Earth’s climate system. <em>Proceedings of the National Academy of Sciences</em>, 105(6):1786–1793, 2008. doi: <Ext href="https://doi.org/10.1073/pnas.0705414105">10.1073/pnas.0705414105</Ext>.</li>
          <li id="ref-lenton2022" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Timothy M. Lenton, Scarlett Benson, Talia Smith, Theodora Ewer, Victor Lanel, Elizabeth Petykowski, Thomas W. R. Powell, Jesse F. Abrams, Fenna Blomsma, and Simon Sharpe. Operationalising positive tipping points towards global sustainability. <em>Global Sustainability</em>, 5:e1, 2022. doi: <Ext href="https://doi.org/10.1017/sus.2021.30">10.1017/sus.2021.30</Ext>.</li>
          <li id="ref-lenton2025" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Timothy M. Lenton, Manjana Milkoreit, Simon Willcock, Jesse F. Abrams, David I. Armstrong McKay, et al., editors. <em>The Global Tipping Points Report 2025</em>. University of Exeter, Exeter, 2025. URL <Ext href="https://global-tipping-points.org/">https://global-tipping-points.org/</Ext>.</li>
          <li id="ref-levin2012" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Kelly Levin, Benjamin Cashore, Steven Bernstein, and Graeme Auld. Overcoming the tragedy of super wicked problems: constraining our future selves to ameliorate global climate change. <em>Policy Sciences</em>, 45(2):123–152, 2012. doi: <Ext href="https://doi.org/10.1007/s11077-012-9151-0">10.1007/s11077-012-9151-0</Ext>.</li>
          <li id="ref-lovejoy2019" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Thomas E. Lovejoy and Lee Hannah, editors. <em>Biodiversity and Climate Change: Transforming the Biosphere</em>. Yale University Press, New Haven, 2019.</li>
          <li id="ref-maibach2019" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Edward Maibach. Increasing public awareness and facilitating behavior change: two guiding heuristics. In Thomas E. Lovejoy and Lee Hannah, editors, <em>Biodiversity and Climate Change: Transforming the Biosphere</em>, pages 336–346. Yale University Press, New Haven, 2019.</li>
          <li id="ref-mathez2018" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Edmond A. Mathez and Jason E. Smerdon. <em>Climate Change: The Science of Global Warming and Our Energy Future</em>. Columbia University Press, New York, second edition, 2018.</li>
          <li id="ref-may1977" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Robert M. May. Thresholds and breakpoints in ecosystems with a multiplicity of stable states. <em>Nature</em>, 269:471–477, 1977. doi: <Ext href="https://doi.org/10.1038/269471a0">10.1038/269471a0</Ext>.</li>
          <li id="ref-meadows1999" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Donella Meadows. Leverage points: Places to intervene in a system. Technical report, Sustainability Institute, Hartland, VT, 1999.</li>
          <li id="ref-meckling2015" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Jonas Meckling, Nina Kelsey, Eric Biber, and John Zysman. Winning coalitions for climate policy. <em>Science</em>, 349(6253):1170–1171, 2015. doi: <Ext href="https://doi.org/10.1126/science.aab1336">10.1126/science.aab1336</Ext>.</li>
          <li id="ref-merton1948" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Robert K. Merton. The self-fulfilling prophecy. <em>The Antioch Review</em>, 8(2):193–210, 1948.</li>
          <li id="ref-milkoreit2023" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Manjana Milkoreit. Social tipping points everywhere? Patterns and risks of overuse. <em>WIREs Climate Change</em>, 14:e813, 2023. doi: <Ext href="https://doi.org/10.1002/wcc.813">10.1002/wcc.813</Ext>.</li>
          <li id="ref-milkoreit2018" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Manjana Milkoreit, Jennifer Hodbod, Jacopo Baggio, Karina Benessaiah, Rafael Calderón-Contreras, Jonathan F. Donges, Jean-Denis Mathias, Juan Carlos Rocha, Michael Schoon, and Saskia E. Werners. Defining tipping points for social-ecological systems scholarship: an interdisciplinary literature review. <em>Environmental Research Letters</em>, 13(3):033005, 2018. doi: <Ext href="https://doi.org/10.1088/1748-9326/aaaa75">10.1088/1748-9326/aaaa75</Ext>.</li>
          <li id="ref-nepstad2019" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Daniel Nepstad. Case study 6: postponing the Amazon tipping point. In Thomas E. Lovejoy and Lee Hannah, editors, <em>Biodiversity and Climate Change: Transforming the Biosphere</em>, pages 208–210. Yale University Press, New Haven, 2019.</li>
          <li id="ref-nyborg2016" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Karine Nyborg, John M. Anderies, Astrid Dannenberg, Therese Lindahl, Caroline Schill, Maja Schlüter, W. Neil Adger, Kenneth J. Arrow, Scott Barrett, Stephen Carpenter, et al. Social norms as solutions. <em>Science</em>, 354(6308):42–43, 2016. doi: <Ext href="https://doi.org/10.1126/science.aaf8317">10.1126/science.aaf8317</Ext>.</li>
          <li id="ref-otto2020" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Ilona M. Otto, Jonathan F. Donges, Roger Cremades, Avit Bhowmik, Richard J. Hewitt, Wolfgang Lucht, Johan Rockström, Franziska Allerberger, Mark McCaffrey, Sylvanus S. P. Doe, Alex Lenferna, Nerea Morán, Detlef P. van Vuuren, and Hans Joachim Schellnhuber. Social tipping dynamics for stabilizing Earth’s climate by 2050. <em>Proceedings of the National Academy of Sciences</em>, 117(5):2354–2365, 2020. doi: <Ext href="https://doi.org/10.1073/pnas.1900577117">10.1073/pnas.1900577117</Ext>.</li>
          <li id="ref-park2019" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Jeffrey Park. A paleoecological perspective on sudden climate change and biodiversity crises. In Thomas E. Lovejoy and Lee Hannah, editors, <em>Biodiversity and Climate Change: Transforming the Biosphere</em>, pages 97–113. Yale University Press, New Haven, 2019.</li>
          <li id="ref-parmesan2019" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Camille Parmesan. Range and abundance changes. In Thomas E. Lovejoy and Lee Hannah, editors, <em>Biodiversity and Climate Change: Transforming the Biosphere</em>, pages 25–38. Yale University Press, New Haven, 2019.</li>
          <li id="ref-patashnik2008" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Eric M. Patashnik. <em>Reforms at Risk: What Happens After Major Policy Changes Are Enacted</em>. Princeton University Press, Princeton, 2008.</li>
          <li id="ref-pierson2000" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Paul Pierson. Increasing returns, path dependence, and the study of politics. <em>American Political Science Review</em>, 94(2):251–267, 2000.</li>
          <li id="ref-prentice1993" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Deborah A. Prentice and Dale T. Miller. Pluralistic ignorance and alcohol use on campus: some consequences of misperceiving the social norm. <em>Journal of Personality and Social Psychology</em>, 64(2):243–256, 1993.</li>
          <li id="ref-ramekar2026" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Kaustubh Ramekar. <Link to="/my-research/social-tipping-points" className="text-[#b31b1b] hover:underline">From tip point to intervention object: three epistemic shifts in the concept of social tipping points, 1957–2026.</Link> Preprint, 2026.</li>
          <li id="ref-scheffer2009book" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Marten Scheffer. <em>Critical Transitions in Nature and Society</em>. Princeton University Press, Princeton, 2009.</li>
          <li id="ref-scheffer2001" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Marten Scheffer, Steve Carpenter, Jonathan A. Foley, Carl Folke, and Brian Walker. Catastrophic shifts in ecosystems. <em>Nature</em>, 413:591–596, 2001. doi: <Ext href="https://doi.org/10.1038/35098000">10.1038/35098000</Ext>.</li>
          <li id="ref-scheffer2009" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Marten Scheffer, Jordi Bascompte, William A. Brock, Victor Brovkin, Stephen R. Carpenter, Vasilis Dakos, Hermann Held, Egbert H. van Nes, Max Rietkerk, and George Sugihara. Early-warning signals for critical transitions. <em>Nature</em>, 461:53–59, 2009. doi: <Ext href="https://doi.org/10.1038/nature08227">10.1038/nature08227</Ext>.</li>
          <li id="ref-schelling1971" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Thomas C. Schelling. Dynamic models of segregation. <em>Journal of Mathematical Sociology</em>, 1(2):143–186, 1971.</li>
          <li id="ref-schelling1978" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Thomas C. Schelling. <em>Micromotives and Macrobehavior</em>. W. W. Norton, New York, 1978.</li>
          <li id="ref-smithek2026" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>E. Keith Smith, Carl Folke, Niklas Kitzmann, Manjana Milkoreit, Per Olsson, Ricarda Winkelmann, Anne-Sophie Crépin, Christina Eder, Niklas Harring, Jobst Heitzig, Alexia Katsanidou, Timothy M. Lenton, Franz Mauelshagen, Kelton Minor, Ilona M. Otto, Armon Rezai, Jürgen Scheffran, Isabelle Stadelmann-Steffen, Rick van der Ploeg, Nico Wunderling, and Jonathan F. Donges. Criticality and critical agency in societal tipping processes towards sustainability. EGUsphere preprint, discussion started 21 January 2026, 2026.</li>
          <li id="ref-smithsr2025" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Steven R. Smith, Manjana Milkoreit, Frank W. Geels, and Timothy M. Lenton. Advancing science, policy and action in tipping points research. <em>Nature Climate Change</em>, 15:576–577, 2025. doi: <Ext href="https://doi.org/10.1038/s41558-025-02335-9">10.1038/s41558-025-02335-9</Ext>.</li>
          <li id="ref-strathern1997" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Marilyn Strathern. ‘Improving ratings’: audit in the British university system. <em>European Review</em>, 5(3):305–321, 1997.</li>
          <li id="ref-unruh2000" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Gregory C. Unruh. Understanding carbon lock-in. <em>Energy Policy</em>, 28(12):817–830, 2000. doi: <Ext href="https://doi.org/10.1016/S0301-4215(00)00070-7">10.1016/S0301-4215(00)00070-7</Ext>.</li>
          <li id="ref-vance2017" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Leisha Vance, Tarsha Eason, Heriberto Cabezas, and Michael E. Gorman. Toward a leading indicator of catastrophic shifts in complex systems: assessing changing conditions in nation states. <em>Heliyon</em>, 3:e00465, 2017. doi: <Ext href="https://doi.org/10.1016/j.heliyon.2017.e00465">10.1016/j.heliyon.2017.e00465</Ext>.</li>
          <li id="ref-watson2019" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>James E. M. Watson, Daniel B. Segan, and Joshua Tewksbury. Tropical forests in a changing climate. In Thomas E. Lovejoy and Lee Hannah, editors, <em>Biodiversity and Climate Change: Transforming the Biosphere</em>, pages 196–207. Yale University Press, New Haven, 2019.</li>
          <li id="ref-williams2019" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>John W. Williams and Kevin D. Burke. Past abrupt changes in climate and terrestrial ecosystems. In Thomas E. Lovejoy and Lee Hannah, editors, <em>Biodiversity and Climate Change: Transforming the Biosphere</em>, pages 128–141. Yale University Press, New Haven, 2019.</li>
          <li id="ref-winkelmann2022" className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Ricarda Winkelmann, Jonathan F. Donges, E. Keith Smith, Manjana Milkoreit, Christina Eder, Jobst Heitzig, Alexia Katsanidou, Marc Wiedermann, Nico Wunderling, and Timothy M. Lenton. Social tipping processes towards climate action: a conceptual framework. <em>Ecological Economics</em>, 192:107242, 2022. doi: <Ext href="https://doi.org/10.1016/j.ecolecon.2021.107242">10.1016/j.ecolecon.2021.107242</Ext>.</li>
        </ol>

        <Link
          to="/my-research"
          className="mt-12 inline-flex items-center gap-2 font-sans text-sm text-[#3A6B35] hover:text-[#2D5016] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to My Research</span>
        </Link>
      </article>
    </div>
  );
}
