import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CiteBox, DownloadButton } from '../components/PaperActions';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { getPaper } from '../data/papers';

const paper = getPaper('social-tipping-points');

const serif = '"Times New Roman", Times, "Liberation Serif", "Nimbus Roman", serif';
const hyphens = { hyphens: 'auto', WebkitHyphens: 'auto' };

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

const Breakout = ({ children }) => (
  <div
    className="relative my-8 print:!left-0 print:!w-full print:!transform-none"
    style={{ left: '50%', transform: 'translateX(-50%)', width: 'min(1180px, calc(100vw - 2rem))' }}
  >
    {children}
  </div>
);

const Equation = () => (
  <div className="relative my-6 overflow-x-auto">
    <div className="flex items-center justify-center gap-3 px-10 whitespace-nowrap">
      <span className="inline-flex flex-col items-center leading-tight">
        <i>dx</i>
        <span className="my-0.5 w-full border-t border-[#111]" />
        <i>dt</i>
      </span>
      <span>
        = <i>f</i>(<i>x</i>; <i>c</i>, <i>θ</i>),
      </span>
      <span className="ml-8">
        Δ = <i>c</i>
        <sub>+</sub> − <i>c</i>
        <sub>−</sub>
      </span>
    </div>
    <span className="absolute right-0 top-1/2 -translate-y-1/2">(1)</span>
  </div>
);

export default function SocialTippingPoints() {
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

      <article lang="en" className="max-w-3xl print:max-w-[880px] mx-auto px-5 pt-10 pb-20 print:pt-0 print:pb-0 text-[1.1rem] leading-[1.6]">
        <header className="text-center">
          <h1 className="text-[1.7rem] sm:text-[2.05rem] font-bold leading-tight">
            From tip point to intervention object: three epistemic shifts in the concept of social tipping points, 1957–2026
          </h1>
          <p className="mt-6 text-[1.25rem]">Kaustubh Ramekar</p>
          <p className="mt-1 text-[0.95rem] leading-snug text-gray-700">
            Independent researcher: technology, environment and society
            <br />
            London, United Kingdom
          </p>
          <DownloadButton paper={paper} />
        </header>

        <section className="mx-auto mt-9 max-w-[42rem]">
          <h2 className="mb-2 text-center text-[1.05rem] font-bold">Abstract</h2>
          <p className="text-justify text-[1rem] leading-[1.55]" style={hyphens}>
            The phrase “social tipping point” is used in climate-governance research as if it named one concept with a long pedigree. This paper argues that it names three incompatible objects. A coded genealogy of fourteen core texts (1957–2026), each scored on unit of analysis, trigger, named feedback, equilibrium structure, reversibility, epistemic stance and stated falsifier, separates a descriptive segregation threshold (Grodzins, Wolf, Schelling), a popular contagion metaphor (Gladwell) and an intervention object in climate governance (Lenton et al., Schellnhuber, Otto et al.). The coding yields three results. Only disproportionality between trigger and effect is conserved across all three shifts. The trigger was replaced without comment, from a distribution of preferences inside the population to a policy lever chosen outside it. Irreversibility was not inherited from the Earth-system definition, which explicitly does not require it; it entered through a definitional synthesis and was then asserted. None of six commonly cited cases shows bistability, an internal feedback separated from the policy driving it, and a measured hysteresis width together. The paper closes with a narrowed definition that a modeler can operationalize, built on bistability, a feedback named in advance and a measurable hysteresis width, and states what it excludes.
          </p>
          <p className="mt-4 text-[1rem]">
            <strong>Keywords:</strong> social tipping points; threshold models; multiple equilibria; hysteresis; reflexivity; conceptual history; climate governance
          </p>
        </section>

        <CiteBox paper={paper} />

        <hr className="my-8 border-gray-300" />

        <H2 n="1" id="sec-1">Introduction</H2>

        <P>The object now called a social tipping point in climate governance is not the object Morton Grodzins called a “tip point” in 1957, and it is not the one Malcolm Gladwell popularized in 2000. The three share a word and a picture of small causes with large effects. They differ in what triggers change, where the feedback sits, whether the new state is stable, and what evidence would show the claim to be false.</P>

        <P>The differences are now routinely collapsed. Otto et al.&nbsp;(2020), in a paper whose purpose is to identify interventions for global decarbonization, cite Grodzins (1957) and Schelling (1971) as evidence that rapid change occurs in socioeconomic systems (their refs. 17–18). Two studies of white departure from racially changing neighborhoods are thereby recruited as precedents for a deliberately triggered and desirable transition. Neither was built to describe one.</P>

        <P>The argument here is that the phrase is the product of three epistemic shifts, and that the shifts are incompatible in a specific sense: each replaced at least one formal property the previous object required, while keeping the vocabulary. The first object is a descriptive threshold in residential segregation, a minority share beyond which white departures become self-sustaining, reported by Grodzins (1957, 1958) and Wolf (1963) and modeled by Schelling (1969, 1971, 1978). The second is a popular contagion metaphor after Gladwell (2000), which dropped equilibrium structure, incentives and reversibility. The third is an intervention object in climate governance. It is anticipated in climate-change communication by Moser and Dilling (2007), receives a formal definition when Lenton et al.&nbsp;(2008) define tipping elements of the Earth system, passes through Skrimshire (2008) and Schellnhuber (2009), and is consolidated by Otto et al.&nbsp;(2020), who adapt the Earth-system criteria to social systems and add the requirement that a human intervention can be identified as the trigger.</P>

        <P>Milkoreit et al.&nbsp;(2018) are the closest predecessor. They reviewed definitions published between 1960 and 2016, identified 23 definitional features, found no discipline-specific taxonomy, and proposed a unified definition with four conditions: multiple stable states, nonlinear change, feedback as the driving mechanism, and limited reversibility. Their definition is coded below as a text in its own right. Their method counted features by frequency to build a common core. The method here follows properties along a citation chain to find where their content was replaced. A frequency count cannot detect that a property survives in name while changing in substance, which is what happens to the trigger.</P>

        <P>Critiques since 2023 address overuse and its effects. Milkoreit (2023) reviews articles that treat social tipping points as climate solutions and finds four recurring problems: premature labeling, undefined system boundaries and scales, incomplete evidence for the characteristics of tipping, and neglect of existing social theories of change. She also identifies desirability and intentionality as risky assumptions that entered with the social usage. Kopp et al.&nbsp;(2025) argue that tipping-point framing confuses public discussion and can distract from climate action. Ejsing (2026) describes an “epistemic drift” in which the concept kept the language of complexity while losing the epistemic humility of its ecological origins. These papers diagnose drift; none periodizes it by formal property. Ejsing’s genealogy also begins in systems ecology (Holling 1973) and treats Schelling and Granovetter as earlier social-science work on thresholds, so the segregation origin enters as background rather than as a source.</P>

        <P>On the account given here, the movement is not from humility to control alone. It runs from an equilibrium description with a documented political use, through a metaphor that discarded the equilibrium, into a definition borrowed from Earth-system science whose criteria social systems mostly fail. The evidence for that account is a coding table (Table&nbsp;1, Section 7), and the paper’s result is a statement of which properties survived each shift and which were replaced.</P>

        <H2 n="2" id="sec-2">What is being traced</H2>

        <P>The comparison uses seven properties that can be read off a text without importing a later definition. Each is stated in the form in which it can be coded as present, absent, or not stated.</P>

        <P><strong>Unit of analysis (U).</strong> The population or system whose state changes, and what lies outside it. A building with a housing stock has a boundary. “The norms and values system” of the world does not.</P>

        <P><strong>Trigger (T).</strong> What moves the system toward the threshold, coded by source: a distribution of preferences or behavior inside the population, a price, a policy, protest, or biophysical forcing. The distinction that matters is whether the trigger is a parameter of the agents’ own decisions or a quantity set from outside the population. In dynamical-systems terms it is the distinction between a state variable and a control parameter.</P>

        <P><strong>Named feedback (F).</strong> A causal loop, described by the author, in which a change in the state variable changes agents’ incentives, information or physical conditions so as to produce further change in the same direction. Positive feedback is coded only when the loop is described. A report that change accelerated is not enough.</P>

        <P><strong>Equilibrium structure (E).</strong> Whether the text posits two or more locally stable states separated by an unstable one, so that the threshold is a boundary between basins of attraction rather than a point on a smooth curve. An S-shaped adoption curve with a single long-run equilibrium has no threshold in this sense, however steep its middle section.</P>

        <P><strong>Reversibility (R).</strong> Whether returning the trigger to its earlier value is said to restore the earlier state. The codes are reversible, hysteretic (recovery requires moving the control well past the forward threshold), irreversible, and not stated. The distinction between hysteresis and irreversibility is substantive. Hysteresis is a width that can be measured; irreversibility is a claim about every accessible path.</P>

        <P><strong>Stance (S).</strong> Descriptive (a threshold was observed), explanatory (a mechanism generates it), or prescriptive (it should be produced or avoided). A text can hold more than one.</P>

        <P><strong>Falsifier (X).</strong> The observation the text states, or directly implies, that would show its tipping claim to be false.</P>

        <P>Two further properties are recorded in the notes to Table&nbsp;1 rather than as columns, because most texts are silent on them and the silence is part of the finding. <em>Separation of forcing and feedback</em> asks whether the quantity being pushed is distinct from the loop that amplifies the push. In Lenton et al.&nbsp;(2008) the control parameter is anthropogenic forcing, external to the ice sheet or ocean circulation on which it acts. <em>Reflexivity</em> asks whether agents’ knowledge of a threshold changes the threshold. For an ice sheet the answer is no by construction. For neighborhoods, Grodzins (1957) had already reported real-estate operators acting on the tip point and Quaker developers trying to stay below it, so reflexivity is present at the origin of the term.</P>

        <P>One property is deliberately not coded as a tipping property: disproportionality, the claim that a small cause produces a large effect. Every text in the corpus asserts it. A linear system with high gain also turns small causes into large effects. Disproportionality indicates tipping only together with equilibrium structure and a named feedback, which is why its survival across all three shifts, reported in Section 7, is a weak result for the concept rather than a strong one.</P>

        <H2 n="3" id="sec-3">Methods</H2>

        <P>The analysis is a concept genealogy: it follows a term through the texts that define it and the texts that cite those definitions, and records what each text requires of the object it names. It is not a bibliometric survey. Milkoreit et al.&nbsp;(2018) and Ejsing (2026) supply broader maps of the literature, and both are coded here as texts.</P>

        <P><strong>Corpus and inclusion rule.</strong> I selected texts by two rules. A text enters if (a) it gives the first use, a definition, or a formal model of tipping language in its domain, and (b) at least one later text in the corpus cites it as a source for that definition or usage. Rule (b) builds a citation chain that can be checked. Otto et al.&nbsp;(2020) cite Lenton et al.&nbsp;(2008), Schellnhuber (2009), Milkoreit et al.&nbsp;(2018), Grodzins (1957), Schelling (1971) and Gladwell (2000). Lenton et al.&nbsp;(2008) cite Gladwell (2000) for the popular notion of a tipping point. Milkoreit et al.&nbsp;(2018) cite Grodzins, Wolf, Schelling, Granovetter, Gladwell, Skrimshire and Schellnhuber. Milkoreit (2023) cites Moser and Dilling (2007) as one of the earliest social-science uses of “social tipping point”. Two critical texts after 2020 enter under rule (a) alone, because they define the concept by contrast with its current use: Milkoreit (2023) and Ejsing (2026), the latter being the most recent paper I could identify whose explicit subject is epistemic drift in this concept. The corpus has fourteen texts; one is split into two codes, giving fifteen rows in Table&nbsp;1.</P>

        <P><strong>Exclusions.</strong> I excluded texts that use the term without defining it and texts that apply an existing definition to a case. On that rule, Westley et al.&nbsp;(2011), Nyborg et al.&nbsp;(2016), Tàbara et al.&nbsp;(2018), Winkelmann et al.&nbsp;(2022), Lenton et al.&nbsp;(2022) and Kopp et al.&nbsp;(2025) are read as context but not coded: each would add a row without adding a definitional move. I also excluded Immanuel Wallerstein. <em>The Modern World-System</em> uses tipping language for the self-reinforcing strength or weakness of state machinery (Wallerstein 1974), but I could not establish that he applied “tipping point” to a systemic threshold, and his term for systemic transition is bifurcation. Coding him would have meant coding a reception claim rather than a text.</P>

        <P><strong>Coding procedure.</strong> Each text was coded on U, T, F, E, R, S and X (Section 2), from the primary text wherever I had it. The rule was to code what a text states, not what later readers attribute to it. Where a text is silent, the code is “not stated”, never an inference. The coding was done by a single coder, and each cell in Table&nbsp;1 is tied to a passage cited in Sections 4–6, so that it can be checked against the text it claims to describe.</P>

        <P><strong>Ambiguous cases.</strong> Two texts required judgments that a second coder might make differently. Schelling (1971) does not discuss reversibility as such. The model’s dynamics are path-dependent but contain no mechanism that blocks a return path, so I coded it “state-dependent, not asserted irreversible” rather than “not stated”. Schellnhuber (2009) uses “social tipping elements” in two senses within one paragraph. I split it into rows 9a and 9b rather than choose one sense.</P>

        <P><strong>What I refused to count as a tipping claim.</strong> Milkoreit et al.&nbsp;(2018) identify Skrimshire (2008) as the first text to use “social tipping points” in the climate context; Milkoreit (2023) later identifies an earlier use (Moser and Dilling 2007). Skrimshire’s use is an ethical argument about acting under uncertainty. It describes social and political turning points and argues against grounding action in calculated thresholds. I coded it, because later texts cite it as an origin of the phrase, but I coded its feedback, equilibrium and falsifier cells as not applicable rather than absent. Gladwell’s case narratives are coded as statements of what his concept is, never as evidence that a mechanism operates.</P>

        <P><strong>Sources for each row.</strong> Grodzins (1957) is coded from the passages reprinted by <em>Scientific American</em> in 2007, which include the definition of the tip point and the passages on real-estate practice and community organization. Two rows are provisional, because I could not obtain the full text. Wolf (1963) is coded from the bibliographic record and from the passages later authors reproduce (Easterly 2009; Milkoreit et al.&nbsp;2018). Moser and Dilling (2007) is coded from Milkoreit’s (2023) account of it and from the chapter’s published reference list. All other rows are coded from the primary texts.</P>

        <P><strong>Limits.</strong> The coding is mine alone, so no inter-rater reliability statistic is reported; Table&nbsp;1 is published so that any cell can be recoded. The corpus is small, English-language, and follows one citation chain, the one that leads into climate governance. The econometrics of neighborhood change after Card et al.&nbsp;(2008a) and network models of complex contagion after Centola and Macy (2007) are separate lineages. They are used here only as evidence about whether particular claims hold. A genealogy along a citation chain risks the error it criticizes, building a lineage after the fact. I have tried to limit that risk by recording only citations the texts actually make and by declining links the texts do not make.</P>

        <H2 n="4" id="sec-4">Period I, 1957–1978: segregation thresholds and critical-mass models</H2>

        <P>Grodzins’s tip point was a segregation threshold in American buildings and neighborhoods, and the article that introduced it reported where the threshold was being used as well as where it was observed. It was not a theory of desirable social transformation.</P>

        <P>The <em>Scientific American</em> article of October 1957 describes white residents who will accept a few Black neighbors and begin to leave once the Black share of a building or neighborhood passes a critical proportion. Grodzins called that proportion the tip point, wrote that it varied from city to city and neighborhood to neighborhood, and held that a tip point existed for most white Americans (Grodzins 1957). The unit is the building or neighborhood. The trigger is the Black share, read through the tolerance of white residents. No feedback is formalized, but the implied loop is plain: departures open vacancies, vacancies are filled by Black families excluded from housing elsewhere, and the share rises again.</P>

        <P>Two features of the first text drop out of most later accounts. The first is reflexivity. Grodzins reported that real-estate operators discussed among themselves how to tip a building or a neighborhood, for the higher rents that came with overcrowding, while Quaker developers of interracial suburbs near Philadelphia planned around the tip point to keep their communities mixed (Grodzins 1957). The threshold was known to the agents in the market, and some of them acted on it for profit. The second is that Grodzins treated the threshold as a movable parameter: “Education and community organization can raise the tip point” (Grodzins 1957), though he added that such efforts had not yet prevented tipping.</P>

        <P>The racial politics are explicit in the text rather than imported by later readers. The article’s subject is a metropolitan pattern in which white suburbs grow around cities whose cores become Black, and the tip point names the local mechanism of that pattern. The stance is descriptive, with a diagnosis attached. The idea later entered housing law as a parameter to be held below. Starrett City in Brooklyn maintained occupancy quotas of about 64 percent white, 22 percent Black and 8 percent Hispanic tenants to prevent white departure, citing expert estimates of the complex’s tipping point; the Second Circuit held in 1988 that the quotas violated the Fair Housing Act (United States v. Starrett City Associates 1988). Either way, the object was a harm to be explained or contained.</P>

        <P>Wolf (1963) brought the longer form “tipping point” into the planning literature. Her paper is also the route by which practitioners’ statements of the idea entered the academic record: Easterly (2009) quotes a 1960 statement by Oscar Cohen from Wolf’s article. Her row is coded provisionally (Section 3), and nothing in this paper depends on a reading of her argument beyond the fact that the term had moved from a political scientist’s report into planning within six years.</P>

        <P>Schelling’s contribution was different in kind. In “Models of Segregation” (1969), “Dynamic Models of Segregation” (1971) and the chapter on neighborhood tipping (Schelling 1972), whose 1971 abstract already announces that “a general theory of ‘tipping’ begins to emerge”, individuals have preferences about the composition of their neighborhood, move when those preferences are not met, and together produce outcomes none of them chose. In the bounded-neighborhood model of 1971, each group has a distribution of tolerances. Entry of one group raises its share; members of the other group whose tolerance is exceeded leave; their departure raises the share again. The feedback is named, and it runs through incentives. The share is both the outcome of decisions and the input to the next ones. The model has multiple equilibria, some stable and some not, and where the system settles depends on the tolerance schedules and the starting composition.</P>

        <P>Schelling did not claim a universal threshold. The tip in his models is a property of a specified pair of tolerance distributions; change the schedules and the tip moves or disappears. The models were not empirical estimates. Their point was that mild individual preferences can generate extreme aggregate segregation, so that observed segregation does not by itself reveal strong preferences. By 1978, <em>Micromotives and Macrobehavior</em> had generalized the logic to binary choices of many kinds under the heading of critical-mass models, in which an activity sustains itself once enough people take part and dies out if too few do; tipping and lemons appear there as two subclasses of the critical-mass model (Schelling 1978, ch.&nbsp;3). Collapse belongs to the critical-mass model as much as takeoff does.</P>

        <P>The first misfit between Schelling’s model and its later use appears within the period. Goering’s 1978 review of the evidence asks whether neighborhoods tip when they become 30 percent nonwhite, and concludes that the variation among neighborhoods in history, population and social structure rules out any general law of racial transition (Goering 1978). The 30 percent figure was not Schelling’s. A model built to show that the threshold depends on preference schedules was already being read as an estimate of where the threshold lies.</P>

        <P>The Period I claim was later tested, and the test supplies the kind of falsifier that the later literature lacks. Card, Mas and Rothstein (2008a) applied regression-discontinuity methods to U.S. census tracts from 1970 to 2000 and found tipping-like behavior in white population flows, with tipping points between about 5 and 20 percent minority share that varied by city and were higher where white racial attitudes were more tolerant. A companion study found the tipping one-sided: tracts above the estimated point moved toward high minority shares, while tracts below it stayed mixed and attracted both white and minority residents, instead of showing the instability of Schelling’s simplest model (Card, Mas and Rothstein 2008b). Easterly (2009), using the same decades of tract data, found that the Schelling model largely failed his tests, with more white departure from neighborhoods with high initial white shares than from mixed ones. The segregation threshold is the one social tipping point in the corpus whose existence, location and variation have been estimated with an identification strategy, and the estimates disagree with one another. What they share is that the threshold depends on preferences, varies across cities, and does not deliver a two-state picture in which mixed neighborhoods cannot persist.</P>

        <P>Granovetter’s threshold model (1978) is related to Schelling’s, but it is not the same object. Each person has a threshold, the number or proportion of others who must already be acting before that person will act, and the aggregate outcome is a fixed point of the cumulative distribution of thresholds. The models differ in three ways. Granovetter’s actors make one binary decision with no exit and no sorting across places, whereas Schelling’s agents relocate, and relocation changes the composition of both the place left and the place entered. Granovetter’s critical value is a property of the whole threshold distribution rather than a population share: in his best-known example, two crowds that differ in one person’s threshold produce either a full riot or almost none. And his model describes episodes. A riot ends, and nothing in the model makes the post-riot state stable or self-maintaining. Granovetter drew a methodological conclusion that later uses ignored, that it is “hazardous to infer individual dispositions from aggregate outcomes” (Granovetter 1978, 1425).</P>

        <H2 n="5" id="sec-5">Period II, 1978–2007: formal models versus popular contagion</H2>

        <P>Between 1978 and 2007 the term led two lives that rarely met. In formal social science, threshold and critical-mass models developed into network models of contagion. In popular writing, Gladwell (2000) turned the tipping point into the moment at which a social epidemic takes off. The climate literature later cited the popular version, not the formal one.</P>

        <P>The formal line is several stories, and forcing them into one would repeat the error this paper describes. Diffusion research had described S-shaped adoption curves since the 1940s (Rogers 1962). An S-curve has an inflection point, but an inflection point is not a boundary between basins of attraction, and diffusion research did not generally claim one. Network models later separated simple contagion, in which one contact is enough to transmit a behavior, from complex contagion, in which adoption requires reinforcement from several contacts (Centola and Macy 2007). Complex contagion is closer to Granovetter than to epidemiology: a threshold rule applied on a network. Kuran’s account of revolutions in which concealed private preferences are revealed all at once is a threshold model in which the thresholds are hidden by preference falsification (Kuran 1995). These lines share a mathematics of thresholds. They do not share a unit, a trigger or a claim about the stability of what follows.</P>

        <P>Gladwell changed the object. <em>The Tipping Point</em> presents fashions, crime waves and word-of-mouth trends as social epidemics and places the tipping point at the moment in an epidemic when change happens all at once. Three rules govern the process: the Law of the Few, which assigns the work of spreading to Connectors, Mavens and Salesmen; the Stickiness Factor, the memorability of a message; and the Power of Context, the effect of surroundings on behavior (Gladwell 2000). Gladwell traces the expression to 1970s sociology on white departure from American cities (Gladwell 2000, 12), so the origin is acknowledged. Nothing of its structure is kept.</P>

        <P>The dropped properties can be read against Section 2. Equilibrium structure is gone: an epidemic has a growth phase and a burnout, not two stable states separated by an unstable one. Incentives are gone: Schelling’s agents move because the composition of their neighborhood changes the value of staying, while Gladwell’s adopters change because they meet the right person or the right message. The distribution of thresholds is replaced by a few exceptional individuals, which reverses Granovetter’s warning by reading individual roles off aggregate outcomes. Reversibility is not discussed. The system boundary is left open, since the same rules are applied to a shoe brand, a city’s crime rate and a disease. No falsifier is stated, and none is available: a case in which change did not occur is explained by the absence of a Connector or of stickiness, so no case can count against the account. What is added is prescription. The book’s promise is that a small, well-placed intervention can start a positive epidemic.</P>

        <P>The formal literature tested Gladwell’s central claim and did not support it. In simulations of influence on networks, Watts and Dodds (2007) found that large cascades were usually driven not by highly influential individuals but by a critical mass of easily influenced ones. That is Granovetter’s point restated for networks. The result did not travel with the phrase.</P>

        <P>The phrase “social tipping point” itself appears in this period, in climate-change communication rather than in climate science. Moser and Dilling (2007) titled the closing chapter of an edited volume on communicating climate change “Toward the social tipping point”, and the chapter’s references include Gladwell (2000). Milkoreit (2023) identifies it as one of the earliest social-science uses of the term and as the text that changed two assumptions inherited from ecological and Earth-system usage: the post-threshold state became desirable, and reaching it became an aim. The intervention object, in other words, existed in name before the Earth-system definition that later gave it its formal vocabulary.</P>

        <P>Climate science adopted the term in this period, before it had a formal definition there. Russill and Nyssa (2009) date the rise of tipping-point language in climate-change communication to about 2005, and Milkoreit et al.&nbsp;(2018) record its use in papers on Arctic sea ice in 2005 and 2006. Whether this adoption followed Gladwell’s book is not established; Milkoreit et al.&nbsp;leave the question open, and it stays open here. What is established is that the definition written in 2008 cites Gladwell for the popular notion it set out to formalize (Section 6).</P>

        <H2 n="6" id="sec-6">Period III, 2008–2026: tipping elements, social tipping elements and positive tipping points</H2>

        <P>The post-2008 sustainability use of social tipping points borrows the formal language of climate tipping points while failing most of the criteria that language was built to enforce. The failures sit in four places: limited reversibility, a clear system boundary, the separation of forcing from feedback, and non-reflexivity. Each becomes visible when Otto et al.&nbsp;(2020) are read beside the definition they adapt.</P>

        <H3 n="6.1" id="sec-6-1">The Earth-system definition</H3>

        <P>Lenton et al.&nbsp;(2008) introduce “tipping element” for components of the Earth system at least subcontinental in scale, and state that a tipping point commonly refers to a threshold at which “a tiny perturbation can qualitatively alter the state or development of a system” (Lenton et al.&nbsp;2008, 1786). Their introduction attributes the popular notion that little things can make a big difference to Gladwell (2000). The Earth-system definition thus formalizes a popular slogan whose academic source was segregation research.</P>

        <P>The formal condition itself is precise. The parameters controlling a system must combine into a single control <i>ρ</i> with a critical value <i>ρ</i><sub>crit</sub>, such that a small variation above it produces a qualitative change in a system feature <i>F</i> after an observation time <i>T</i>. Three further conditions make an element policy-relevant: human decisions within a political time horizon of about a century can determine whether <i>ρ</i><sub>crit</sub> is reached; the change is observed within an ethical time horizon of about a millennium; and a significant number of people care about the component.</P>

        <P>Three features of the 2008 text matter for what follows. It does not require irreversibility: the authors broadened earlier definitions of abrupt climate change partly because, for several phase changes, models disagreed on whether the transition could be reversed, and they wanted both cases inside the definition (Lenton et al.&nbsp;2008). It has a falsifier, since a candidate made the short list only if more than one model study, or past evidence, supported a threshold at subcontinental scale. And its closing paragraph calls for rigorous study of tipping elements in human socioeconomic systems, to ask whether a rapid societal transition toward sustainability could be triggered. The intervention object is seeded in the last paragraph of the text that defines the physical one.</P>

        <H3 n="6.2" id="sec-6-2">Two uses of the term in 2008–2009</H3>

        <P>Skrimshire (2008), writing in theology and ethics in the same year, used the term in the opposite direction. He argued that climatic tipping points have a social counterpart in political turning points, “historic moments of opportunity, ‘now or never’, social revolution” (Skrimshire 2008, as quoted in Milkoreit et al.&nbsp;2018, 7), and that ethical action should not wait on calculated thresholds. Skrimshire’s social tipping point is a moment of decision under uncertainty, not a threshold in a dynamical system. Later citations of his paper as the first use of “social tipping points” are accurate about the words and misleading about the object.</P>

        <P>Schellnhuber (2009) makes the turn explicit, and in one paragraph names two incompatible objects. The PNAS special feature he introduced had been meant to include social tipping elements, which he defined as singular phenomena of the human sphere that may be forced by gradual or abrupt environmental change. His example is the possible collapse of Southeast Asian agriculture fed by glacial meltwater and monsoon rain; the scientific evidence, he wrote, was not yet available. The next sentence raises a different question, “whether economic systems can be deliberately tipped” into sustainable patterns of production and consumption (Schellnhuber 2009).</P>

        <P>The first object is a forced response, in which society is the system on which climate acts. The second is a deliberate intervention, in which society acts on itself. They are coded separately as rows 9a and 9b. The forced-response sense treats society as a passive system pushed by climate, which is the treatment social scientists had objected to in climate discourse. The deliberate-intervention sense is the one the sustainability literature took up.</P>

        <H3 n="6.3" id="sec-6-3">The definitional synthesis</H3>

        <P>Milkoreit et al.&nbsp;(2018) supplied the definition that the rest of Period III cites. Their general definition requires small quantitative changes that trigger nonlinear change, driven by feedback internal to the system, toward a qualitatively different state that is “often irreversible” (Milkoreit et al.&nbsp;2018, 9). Their social tipping point adds that the change occurs in the social component of a social-ecological system and is linked to an ecological change. The synthesis is careful, and it names the difficulty: social systems have agency, reflexivity, power and strategic behavior that ecological systems lack, and continuous time series of social state variables are rarely available.</P>

        <P>The same paper reports two findings that bear on the present argument. The social-science papers in its sample showed less concern with irreversibility than the natural-science ones, since fads, revolutions and opinions can revert. And not one social-science paper in its qualitative database applied bifurcation theory. Irreversibility therefore enters the social tipping literature here, as a weakened necessary condition, in a text whose own evidence showed that social scientists did not usually claim it.</P>

        <H3 n="6.4" id="sec-6-4">The intervention object</H3>

        <P>Otto et al.&nbsp;(2020) define social tipping elements as functional subsystems of the planetary World–Earth system: energy production and storage, human settlements, financial markets, norms and values, education, and information feedbacks. Their criterion C1 adapts Lenton’s first condition. A set of drivers combines into a control parameter which, after crossing a critical threshold by a small amount, produces a qualitative change in a system feature, here the rate of greenhouse-gas emissions. Criterion C2 is new: it must be possible to distinguish a particular human intervention that produces the small change in the control parameter. Two filters follow. Tipping should be triggerable within about 15 years and observable within about 30, and the intervention should be compatible with the Sustainable Development Goals. The evidence base is an online survey completed by 133 experts, a workshop of 17, and a literature review. The text states that social spreading processes, once triggered, “can be irreversible and difficult to stop” (Otto et al.&nbsp;2020, 2355).</P>

        <P>Otto et al.&nbsp;and Milkoreit et al.&nbsp;are not describing the same object, although the first cites the second for its definition. Milkoreit et al.&nbsp;require self-reinforcing feedback as the driving mechanism. Otto et al.’s C1 contains a control parameter and a threshold and no feedback. Feedback appears in the paper’s discussion, as contagion through networks and as mutual reinforcement among elements, but not in the criterion that decides whether something counts as a social tipping element. C2 has no counterpart in Milkoreit et al.&nbsp;The criterion that admits a candidate is a condition on policy design, not on system dynamics.</P>

        <P>Read beside Lenton et al.&nbsp;(2008), the four failures are specific. On reversibility, Lenton does not require irreversibility, Otto asserts it for social processes, and Otto’s own discussion reports that the German feed-in-tariff case, often cited as a success, faded when policy support was not sustained (Otto et al.&nbsp;2020, 2362). On system boundary, Lenton’s elements are subcontinental subsystems with a single control, while “norms and values” and “education” are functional domains with no spatial or membership boundary. On separation of forcing and feedback, Lenton’s <i>ρ</i> is anthropogenic forcing external to the ice sheet, while Otto’s interventions, such as subsidy reform and emissions disclosure, are outputs of the political system they are meant to tip, so the control parameter is endogenous to the system it is supposed to control. On reflexivity, an ice sheet does not respond to a published estimate of its threshold. An industry association, a party or a bond market does, and Grodzins documented that response in 1957.</P>

        <H3 n="6.5" id="sec-6-5">Positive tipping and its critics</H3>

        <P>Lenton et al.&nbsp;(2022) name intentionality as a defining quality of positive tipping points, and the <em>Global Tipping Points Report</em> (Lenton et al.&nbsp;2023) makes positive tipping a central policy theme. The shift to an intervention object is then complete. The critiques that follow describe its consequences: Milkoreit (2023) on overuse and on the risky assumptions of desirability and intentionality; Kopp et al.&nbsp;(2025) on confusion and distraction; Ejsing (2026) on the drift from complexity to control. None returns to the two objects Schellnhuber separated in 2009, or to the reflexivity Grodzins recorded in 1957.</P>

        <H2 n="7" id="sec-7">Results: which properties are conserved</H2>

        <P>Only one property survives all three shifts, and it is the weakest one: the claim that a small cause can have a large effect. The trigger, the reversibility claim, the stance and the falsifier were each replaced, and the replacements are datable to specific texts in Table&nbsp;1.</P>

        <Breakout>
          <p className="mb-2 text-center text-[0.95rem]">
            <strong>Table 1:</strong> Coding of the corpus on seven properties. Codes follow Section 2. “NS” = not stated; “NA” = not applicable (Section 3). Internal trigger = a quantity generated by the population’s own decisions; external = set from outside it.
          </p>
          <div className="overflow-x-auto">
            <table className="print:!min-w-0 w-full border-collapse text-[0.8rem] leading-snug" style={{ minWidth: 1000 }}>
              <thead>
                <tr><Th w="2.2rem"><strong>#</strong></Th><Th w="7rem"><strong>Text</strong></Th><Th><strong>Unit (U)</strong></Th><Th><strong>Trigger (T)</strong></Th><Th><strong>Named feedback (F)</strong></Th><Th><strong>Equilibria (E)</strong></Th><Th><strong>Reversibility (R)</strong></Th><Th><strong>Stance (S)</strong></Th><Th><strong>Falsifier (X)</strong></Th></tr>
              </thead>
              <tbody>
                <tr><Td>1</Td><Td>Grodzins 1957</Td><Td>Building, neighborhood</Td><Td>Black share against white tolerance (internal)</Td><Td>Implied, not formalized: exits → vacancies → rising share</Td><Td>Implicit two states</Td><Td>NS; one-way in practice, but tip point “can be raised”</Td><Td>Descriptive, diagnostic</Td><Td>Implied: mixed buildings that persist above the local tip share</Td></tr>
                <tr><Td>2</Td><Td>Wolf 1963 (provisional)</Td><Td>Neighborhood</Td><Td>Racial share</Td><Td>NS</Td><Td>NS</Td><Td>NS</Td><Td>Descriptive</Td><Td>NS</Td></tr>
                <tr><Td>3</Td><Td>Schelling 1971</Td><Td>Bounded neighborhood; spatial grid</Td><Td>Tolerance distributions of two groups (internal)</Td><Td>Exit of least tolerant raises share, prompting further exit</Td><Td>Multiple; stable and unstable</Td><Td>State-dependent; not asserted irreversible</Td><Td>Explanatory</Td><Td>Given schedules and initial mix, a predicted equilibrium; tested via flow discontinuities</Td></tr>
                <tr><Td>4</Td><Td>Schelling 1978</Td><Td>Any population making a binary choice</Td><Td>Number already taking part (internal)</Td><Td>Participation raises the payoff to participating</Td><Td>Multiple</Td><Td>Symmetric: collapse as well as takeoff</Td><Td>Explanatory, heuristic</Td><Td>Response curve relative to its fixed points</Td></tr>
                <tr><Td>5</Td><Td>Granovetter 1978</Td><Td>Crowd or group, one binary decision</Td><Td>Proportion already acting (internal)</Td><Td>Cumulative participation</Td><Td>Fixed point of threshold distribution</Td><Td>NS; episodic</Td><Td>Explanatory; methodological warning</Td><Td>Measured threshold distribution predicts outcome</Td></tr>
                <tr><Td>6</Td><Td>Gladwell 2000</Td><Td>Unbounded: brand, city, disease</Td><Td>Exceptional individuals, message, context</Td><Td>Epidemic contagion, as metaphor</Td><Td>None</Td><Td>NS</Td><Td>Prescriptive, popular</Td><Td>None stated</Td></tr>
                <tr><Td>6b</Td><Td>Moser and Dilling 2007 (provisional)</Td><Td>Publics addressed by climate communication</Td><Td>Communication and social-change strategies (external)</Td><Td>NS</Td><Td>NS</Td><Td>NS</Td><Td>Prescriptive: desirable, intentional</Td><Td>NS</Td></tr>
                <tr><Td>7</Td><Td>Lenton et al. 2008</Td><Td>Earth-system component ≥ ~1,000 km</Td><Td>Control <i>ρ</i>: anthropogenic forcing (external)</Td><Td>Element-specific physical loops</Td><Td>Bifurcations included, not required</Td><Td>Explicitly not required</Td><Td>Explanatory; normative policy conditions</Td><Td>Threshold supported by {'>'}1 model study or past evidence</Td></tr>
                <tr><Td>8</Td><Td>Skrimshire 2008</Td><Td>Political movement, public sphere</Td><Td>Perceived climatic risk; ethical commitment</Td><Td>NA</Td><Td>NA</Td><Td>NA</Td><Td>Normative, ethical</Td><Td>NA</Td></tr>
                <tr><Td>9a</Td><Td>Schellnhuber 2009, forced sense</Td><Td>Regional society, e.g. Southeast Asian agriculture</Td><Td>Biophysical forcing (external)</Td><Td>NS</Td><Td>NS</Td><Td>NS</Td><Td>Prospective</Td><Td>Evidence “not yet available”</Td></tr>
                <tr><Td>9b</Td><Td>Schellnhuber 2009, deliberate sense</Td><Td>Economic system</Td><Td>Deliberate intervention (external)</Td><Td>NS</Td><Td>NS</Td><Td>NS</Td><Td>Prescriptive research agenda</Td><Td>NS</Td></tr>
                <tr><Td>10</Td><Td>Milkoreit et al. 2018</Td><Td>Social component of a social-ecological system</Td><Td>Small quantitative change</Td><Td>Self-reinforcing feedback, required</Td><Td>Multiple stable states, required</Td><Td>Limited reversibility required; “often irreversible”</Td><Td>Definitional</Td><Td>Absence of any of four conditions</Td></tr>
                <tr><Td>11</Td><Td>Otto et al. 2020</Td><Td>Functional subsystem of World–Earth system</Td><Td>Social tipping intervention (external, chosen)</Td><Td>None in criterion C1; contagion and cross-element reinforcement in discussion</Td><Td>New basin of attraction, schematic</Td><Td>Asserted: “can be irreversible”</Td><Td>Prescriptive</Td><Td>NS; filters are policy timescales</Td></tr>
                <tr><Td>12</Td><Td>Milkoreit 2023</Td><Td>The literature (meta)</Td><Td>NA</Td><Td>NA</Td><Td>NA</Td><Td>NA</Td><Td>Critical: overuse</Td><Td>NA</Td></tr>
                <tr><Td>13</Td><Td>Ejsing 2026</Td><Td>The literature (meta)</Td><Td>NA</Td><Td>NA</Td><Td>NA</Td><Td>NA</Td><Td>Critical: drift to control</Td><Td>NA</Td></tr>
                <BottomRule cols={9} />
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[0.85rem] leading-snug text-justify"><em>Notes.</em> Separation of forcing and feedback is explicit only in row 7. It is absent in row 11, where the control parameter is set by the political system the element belongs to. Reflexivity is reported in row 1, recognized as a difficulty in row 10, and not modeled in any row. Rows 12–13 are coded on stance only, because they describe the concept rather than an instance of it. Rows 2 and 6b are provisional (Section 3).</p>
        </Breakout>

        <H3 n="7.1" id="sec-7-1">What was conserved</H3>

        <P>Read down the columns. Disproportionality, which Table&nbsp;1 does not code because every substantive row asserts it, is the only property present from row 1 to row 11. The threshold vocabulary survives as well, but its referent changes. In rows 1–5 a threshold is a share of a population or a fixed point of a distribution of individual thresholds. In row 7 it is a level of physical forcing. In row 11 it is a level of a control parameter that a policy is designed to move.</P>

        <P>Equilibrium structure is present in Period I (rows 3–4), absent in Period II (row 6), and returns in Period III as a picture rather than a model. Otto et al.&nbsp;draw a stability diagram with two valleys and propose that interventions erode the barrier between them, but no row in Period III specifies the decision rules from which the two equilibria would follow. Named feedback has the same history. Rows 3, 4 and 5 name feedbacks that run through agents’ incentives, row 6 offers a metaphor, row 7 names physical loops element by element, and row 11 names none in the criterion that admits a case.</P>

        <H3 n="7.2" id="sec-7-2">What was replaced</H3>

        <P><strong>The trigger.</strong> Rows 1–5 code an internal trigger: the threshold is a property of how the population’s own members respond to one another. Rows 7 and 9a code an external biophysical trigger. Rows 9b and 11 code an external, chosen intervention. The move from internal to external trigger is the decisive change, and it is not remarked on in the texts that make it. Otto et al.&nbsp;cite Grodzins and Schelling as precedents for rapid socioeconomic change, although the trigger in those texts is the opposite kind of quantity.</P>

        <P><strong>Reversibility.</strong> No text in rows 1–6b asserts irreversibility. Row 7 explicitly declines to require it. Row 10 introduces limited reversibility as a necessary condition, in a paper that also reports that social-science texts rarely claimed it. Row 11 asserts it. Irreversibility was therefore not inherited from the climate definition. It entered through a definitional synthesis and became an asserted property in the intervention literature.</P>

        <P><strong>Stance and valence.</strong> The stance moves from descriptive and explanatory (rows 1–5) to prescriptive (rows 6, 6b, 9b, 11). The prescriptive turn appears first in popular writing (row 6), passes into climate-change communication with the assumptions of desirability and intentionality (row 6b) before any formal definition exists, and enters Earth-system governance in 2009 (row 9b), with the closing paragraph of row 7 as the bridge. The valence reverses with it. In row 1 the tip names a harm, in row 7 a danger, and in row 11 a goal.</P>

        <P><strong>Falsifier.</strong> Rows 1, 3, 4, 5 and 7 state or directly imply an observation that would reject the claim. Rows 6, 6b, 9b and 11 state none. The evidence standard fell at the same points at which the stance became prescriptive.</P>

        <H3 n="7.3" id="sec-7-3">Timeline of semantic shifts</H3>

        <div className="my-8">
          <p className="mb-2 text-center text-[0.95rem]">
            <strong>Table 2:</strong> Dated changes in the object named by tipping language, 1957–2026. Rows in bold mark the three shifts.
          </p>
          <div className="overflow-x-auto">
            <table className="print:!min-w-0 w-full border-collapse text-[0.85rem] leading-snug" style={{ minWidth: 620 }}>
              <thead>
                <tr><Th w="4.2rem"><strong>Year</strong></Th><Th w="9rem"><strong>Text</strong></Th><Th><strong>Object named</strong></Th><Th><strong>Change in meaning</strong></Th></tr>
              </thead>
              <tbody>
                <tr><Td><strong>1957</strong></Td><Td><strong>Grodzins</strong></Td><Td><strong>Tip point of a building or neighborhood</strong></Td><Td><strong>Coinage. Threshold reported as observed and as exploited in the housing market</strong></Td></tr>
                <tr><Td>1963</Td><Td>Wolf</Td><Td>Tipping point in racially changing neighborhoods</Td><Td>Longer form enters planning literature</Td></tr>
                <tr><Td>1969–1972</Td><Td>Schelling</Td><Td>Neighborhood tipping in models with tolerance distributions</Td><Td>Threshold becomes a property of interdependent preferences; multiple equilibria</Td></tr>
                <tr><Td>1978</Td><Td>Schelling; Granovetter; Goering</Td><Td>Critical mass; thresholds of collective behavior; a “30 percent” figure in circulation</Td><Td>Generalized to binary choices; episodic cascades; empirical doubt</Td></tr>
                <tr><Td><strong>2000</strong></Td><Td><strong>Gladwell</strong></Td><Td><strong>Social epidemic</strong></Td><Td><strong>Equilibrium, incentives and reversibility dropped; prescription added</strong></Td></tr>
                <tr><Td>c. 2005</Td><Td>Climate-change communication (Russill and Nyssa 2009)</Td><Td>Abrupt climate change</Td><Td>Term adopted without a formal definition</Td></tr>
                <tr><Td>2007</Td><Td>Moser and Dilling</Td><Td>Social tipping point</Td><Td>Desirability and intentionality, before any formal definition</Td></tr>
                <tr><Td><strong>2008</strong></Td><Td><strong>Lenton et al.</strong></Td><Td><strong>Tipping element of the Earth system</strong></Td><Td><strong>Control-parameter definition; irreversibility not required; Gladwell cited for the popular notion</strong></Td></tr>
                <tr><Td>2008</Td><Td>Skrimshire</Td><Td>Social and political turning points</Td><Td>An ethical moment of decision, not a dynamical threshold</Td></tr>
                <tr><Td>2009</Td><Td>Schellnhuber</Td><Td>Social tipping elements, two senses</Td><Td>Forced collapse of a society, or deliberate tipping of an economy</Td></tr>
                <tr><Td>2011</Td><Td>Westley et al.</Td><Td>Tipping toward sustainability</Td><Td>Deliberate transformation joined to tipping language</Td></tr>
                <tr><Td>2018</Td><Td>Milkoreit et al.</Td><Td>Social tipping point in a social-ecological system</Td><Td>Four-condition definition; limited reversibility made necessary</Td></tr>
                <tr><Td>2020</Td><Td>Otto et al.</Td><Td>Social tipping element and social tipping intervention</Td><Td>Identifiable intervention required; feedback absent from criterion; irreversibility asserted</Td></tr>
                <tr><Td>2022–2023</Td><Td>Lenton et al.; <em>Global Tipping Points Report</em></Td><Td>Positive tipping point</Td><Td>Intentionality named as a defining quality</Td></tr>
                <tr><Td>2023–2026</Td><Td>Milkoreit; Kopp et al.; Ejsing</Td><Td>Overuse, confusion, epistemic drift</Td><Td>Critique of the intervention object</Td></tr>
                <BottomRule cols={4} />
              </tbody>
            </table>
          </div>
        </div>

        <H3 n="7.4" id="sec-7-4">Six common examples as claims under test</H3>

        <P>The cases most often cited for positive social tipping are treated here as claims, each with a proposed feedback and an observation that would reject a tipping interpretation. None is called an established tipping event. For each, the property on which it fails or remains untested is named against Section 2.</P>

        <P><strong>Smoking norms.</strong> The proposed feedback is norm enforcement: as smoking becomes less common, sanctions by nonsmokers become cheaper to apply and more frequent, which raises the cost of smoking further (Nyborg et al.&nbsp;2016). A tipping interpretation is rejected if prevalence declines smoothly with taxes and regulation and shows no discontinuity at any prevalence level, or if relaxing enforcement restores prevalence. The evidence Otto et al.&nbsp;cite for the education route is a decline in cigarette consumption of 4–5 percent a year under combined education and media campaigns in the 1970s (Warner 1977), which is a gradual, policy-tracking path. The case fails on equilibrium structure, which has not been shown, and on separation, since a smoking ban is both the trigger and the codified norm.</P>

        <P><strong>UK coal phase-out in power.</strong> The proposed feedback runs from carbon pricing, including the UK carbon price floor, through a reversal of the cost ranking between coal and other generation, to plant closures, supported by the 2015 announcement of a 2025 phase-out date. Coal’s share of UK generation fell from 39 percent in 2012 to 2 percent in 2019 and 1 percent in 2023, and the last coal plant, Ratcliffe-on-Soar, closed on 30 September 2024 (Ember 2024). A tipping interpretation is rejected if coal’s share tracks the carbon price as a substitution along a cost curve, so that a reversal of the price would have brought coal back while plants remained. The permanence that was observed is the physical retirement of capital, not a social feedback. The case fails on named feedback, because the loop runs through prices set by policy, and on separation.</P>

        <P><strong>Denmark’s wind build-out.</strong> The proposed feedback runs from local cooperative ownership to public acceptance, wider deployment and cost declines through learning. The rejection condition is that deployment stalls when support is withdrawn. National expansion of wind power stagnated from 2002 to 2005, after the change of government in November 2001 brought a radical shift in renewable-energy policy (Meyer 2006). Munksgaard and Morthorst (2008) caution that tariff levels alone do not explain the slowdown and point also to spatial planning and investor risk aversion. On either reading, the rate of build-out tracked policy and planning conditions rather than running ahead of them. Installed turbines remained, but that is capital stock. The case fails on reversibility in the sense that matters for tipping: there was no persistence in the rate once support changed.</P>

        <P><strong>Norway’s electric vehicles.</strong> The proposed feedback links tax and toll exemptions that made electric cars cheaper to buy and run, growing adoption, charging infrastructure, model availability and social learning. A tipping interpretation is rejected if the sales share falls roughly in proportion when incentives are reduced, rather than holding. A partial test exists. From 2023, value-added tax applied to the part of an electric car’s price above NOK 500,000, and from January 2026 above NOK 300,000; the electric share of new car sales was about 95 percent in 2025 and about 94 percent in January 2026 (CMS 2026). The share held, which is the observation a tipping account predicts. The test is weak, because most of the price advantage remained in place and a full removal is only scheduled. The case is the strongest of the six on reversibility, and the weakest on boundary: a national new-car market inside a global supply chain, in a wealthy oil-exporting country with hydroelectric power, is a poor basis for generalization.</P>

        <P><strong>The 3.5 percent figure.</strong> The 3.5 percent figure is not a social-tipping estimate. It comes from data on campaigns with maximalist goals, such as removing a government, between 1900 and 2006: no campaign in that set that reached peak participation of 3.5 percent of the population failed (Chenoweth and Stephan 2011). Chenoweth later described the figure as descriptive rather than prescriptive, reported that the Bahraini campaign of 2011–2014 failed despite peak participation above 6 percent, and called the rule “a tendency, rather than a law” (Chenoweth 2020). The unit is a campaign against a regime, the outcome is an event rather than a self-maintaining state, no feedback internal to the population is named, and nothing is said about hysteresis. A share of participants is its only tipping-like feature. As a tipping constant it is already rejected by the Bahraini case, and it remains exposed to the selection of campaigns large enough to be recorded.</P>

        <P><strong>Agent-based estimates of 10–40 percent.</strong> These are findings about committed minorities in coordination games with specified networks, memory and payoffs. A committed minority of about 10 percent was enough to shift consensus in a binary-agreement model on networks (Xie et al.&nbsp;2011). In online experiments on naming conventions, committed minorities of 25 percent overturned an established convention while 21 percent did not (Centola et al.&nbsp;2018). A synthesis of modeling and empirical studies reports critical masses between 10 and 43 percent, with averages of 24 and 27 percent (Everall et al.&nbsp;2025). With group rather than pairwise interactions, the critical mass can become very small when individuals have a limited propensity to change their views, and it depends in a complex way on group size (Iacopini et al.&nbsp;2022). The spread is a spread over model settings, not an estimate for any real population. Applied to a real case, the claim is rejected if the population lacks agents who never switch, or if the alternatives differ in cost rather than only in convention, which is the situation for most decarbonization choices. The claim fails on unit when it is transferred.</P>

        <P>Across the six cases, the pattern repeats. Each case shows rapid change. Norway alone shows persistence under a partial withdrawal of the control. None shows bistability, a feedback internal to the population that is separated from the policy driving it, and a measured hysteresis width at the same time.</P>

        <H2 n="8" id="sec-8">Implications for modeling</H2>

        <P>A non-metaphorical social tipping model has to restore the properties that Table&nbsp;1 shows were dropped, and it has to state two that no text in the corpus models: the endogeneity of the control and the reflexivity of the agents. The requirements follow directly from the coding.</P>

        <P>The population and its boundary must be named, so that membership and the denominator of any share are fixed. The state variable must be named separately from the control variable. The source of the control must be stated. If the control is a policy, the model must either treat policy as exogenous and say so, or include the political process that sets it, since in that case the control is an output of the system being tipped. The decision rule of the agents must be specified, including how agents use information about the threshold itself; this is the property Grodzins observed in 1957 and that later models leave out. The feedback must be named in advance, as a route by which the state variable changes agents’ payoffs or information. And the claim must come with its falsifier stated before the data are examined.</P>

        <P>In the simplest form, with <i>x</i> the state variable, <i>c</i> the control and <i>θ</i> the parameters of the decision rule, the dynamics are</P>

        <Equation />

        <P>where <i>f</i> has two locally stable fixed points for <i>c</i> between a backward threshold <i>c</i><sub>−</sub> and a forward threshold <i>c</i><sub>+</sub>. A forward tip occurs when <i>c</i> crosses <i>c</i><sub>+</sub> and the low-<i>x</i> state disappears. Recovery requires taking <i>c</i> back below <i>c</i><sub>−</sub>, not merely below <i>c</i><sub>+</sub>. The hysteresis width Δ is the operational content of “hard to reverse”. A claim of irreversibility is a claim that <i>c</i><sub>−</sub> lies outside the range the control can reach, and it should be stated as that.</P>

        <P><strong>Narrowed definition.</strong> A social tipping point is a value <i>c</i><sub>+</sub> of a stated control variable for a bounded population of agents with stated decision rules such that (i) for some range of <i>c</i> the population dynamics have at least two locally stable states; (ii) at <i>c</i><sub>+</sub> one of those states loses stability; (iii) the transition to the other state is carried by a feedback, internal to the population and named in advance, through which the state variable changes agents’ payoffs or information; and (iv) the claim reports, or states how it will estimate, the hysteresis width Δ.</P>

        <P>The definition excludes five things that now commonly pass as social tipping. It excludes rapid diffusion along an S-curve with one long-run equilibrium, however steep. It excludes transitions in which a policy remains the binding cause and Δ is close to zero, so that withdrawing the policy reverses the change; on the record in Section 7.4, Danish wind is the nearest case. It excludes threshold cascades that produce an episode but no persistent alternative state, which places Granovetter’s riots outside the definition, although they are threshold phenomena. It excludes “elements” without a membership boundary, such as a global norms-and-values system. And it excludes retrospective identification: a tip named only after rapid change has been observed, with no rejection condition stated beforehand, is a description of speed.</P>

        <P>One consequence is uncomfortable for the current literature. Of the objects in Table&nbsp;1, the one that comes closest to meeting the narrowed definition is the one with which the term began. Schelling’s neighborhood has a boundary, internal decision rules, a named feedback and multiple equilibria, and Card, Mas and Rothstein estimated where its threshold lies and found its tipping one-sided. The definition does not rule out positive social tipping. It requires that a claim of positive tipping meet the standard that the segregation literature, for all its political history, was held to.</P>

        <H2 n="9" id="sec-9">Conclusion</H2>

        <P>“Social tipping point” names three objects, and the coding of fourteen texts locates the moves between them. The segregation threshold of 1957–1978 had an internal trigger, a feedback through incentives, multiple equilibria in Schelling’s models, and an empirical falsifier that was later used. Gladwell’s social epidemic of 2000 kept the claim that small causes have large effects and dropped the equilibrium, the incentives, the reversibility question and the falsifier. The intervention object built between 2008 and 2020 took its formal language from an Earth-system definition that had itself cited Gladwell, replaced the internal trigger with an intervention chosen from outside the population, and asserted an irreversibility that the Earth-system definition did not require.</P>

        <P>Three results follow from Table&nbsp;1. Disproportionality is the only property conserved across the three shifts. The trigger changed kind, from a property of a population to a lever applied to it, without being remarked on, and Otto et al.&nbsp;(2020) cite the segregation literature as precedent across that change. Irreversibility entered through the definitional synthesis of Milkoreit et al.&nbsp;(2018) and was asserted by Otto et al.&nbsp;(2020); it was not inherited from Lenton et al.&nbsp;(2008).</P>

        <P>The six cases most often cited for positive social tipping each show rapid change, and none yet shows bistability, an internal feedback separated from the policy that drives it, and a measured hysteresis width together. The narrowed definition in Section 8 is meant to make that combination the test. On that test, the best-specified social tipping point in the record remains the one the term was coined to describe.</P>

        <H2 id="acknowledgments-and-statement-on-the-use-of-ai-tools">Acknowledgments and statement on the use of AI tools</H2>

        <P>A generative AI model (Claude, Anthropic) was used to assist with literature retrieval, drafting and typesetting. The author reviewed the text, checked the cited passages against their sources, and takes full responsibility for the content, including the coding in Table 1. No external funding supported this work, and the author declares no competing interests.</P>

        <H2 id="references">References</H2>
        <ol className="list-none text-[0.95rem] leading-snug">
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Card, D., Mas, A., and Rothstein, J. 2008a. Tipping and the dynamics of segregation. <em>Quarterly Journal of Economics</em> 123(1): 177–218.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Card, D., Mas, A., and Rothstein, J. 2008b. Are mixed neighborhoods always unstable? Two-sided and one-sided tipping. NBER Working Paper 14470. Cambridge, MA: National Bureau of Economic Research.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Centola, D., Becker, J., Brackbill, D., and Baronchelli, A. 2018. Experimental evidence for tipping points in social convention. <em>Science</em> 360(6393): 1116–1119.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Centola, D., and Macy, M. 2007. Complex contagions and the weakness of long ties. <em>American Journal of Sociology</em> 113(3): 702–734.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Chenoweth, E. 2020. Questions, answers, and some cautionary updates regarding the 3.5% rule. Carr Center Discussion Paper 2020-005. Cambridge, MA: Carr Center for Human Rights Policy, Harvard Kennedy School.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Chenoweth, E., and Stephan, M. J. 2011. <em>Why Civil Resistance Works: The Strategic Logic of Nonviolent Conflict</em>. New York: Columbia University Press.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>CMS. 2026. A new era for electric vehicle policy in Norway. <em>CMS Automotive Outlook 2026</em>. <Ext href="https://cms.law/en/int/publication/cms-automotive-outlook-2026/a-new-era-for-electric-vehicle-policy-in-norway">https://cms.law/en/int/publication/cms-automotive-outlook-2026/a-new-era-for-electric-vehicle-policy-in-norway</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Easterly, W. 2009. Empirics of strategic interdependence: The case of the racial tipping point. <em>B.E. Journal of Macroeconomics</em> 9(1). NBER Working Paper 15069.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Ejsing, M. 2026. Social tipping points revisited: The epistemic drift from complexity to control. <em>Environmental Science &amp; Policy</em> 182: 104439. <Ext href="https://doi.org/10.1016/j.envsci.2026.104439">https://doi.org/10.1016/j.envsci.2026.104439</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Ember. 2024. <em>The UK’s journey to a coal power phase-out</em>. London: Ember. <Ext href="https://ember-energy.org/latest-insights/the-uks-journey-to-a-coal-power-phase-out/">https://ember-energy.org/latest-insights/the-uks-journey-to-a-coal-power-phase-out/</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Everall, J. P., Tschofenig, F., Donges, J. F., and Otto, I. M. 2025. The Pareto effect in tipping social networks: From minority to majority. <em>Earth System Dynamics</em> 16: 189–214. <Ext href="https://doi.org/10.5194/esd-16-189-2025">https://doi.org/10.5194/esd-16-189-2025</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Gladwell, M. 2000. <em>The Tipping Point: How Little Things Can Make a Big Difference</em>. New York: Little, Brown.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Goering, J. M. 1978. Neighborhood tipping and racial transition: A review of social science evidence. <em>Journal of the American Institute of Planners</em> 44(1): 68–78.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Granovetter, M. 1978. Threshold models of collective behavior. <em>American Journal of Sociology</em> 83(6): 1420–1443.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Grodzins, M. 1957. Metropolitan segregation. <em>Scientific American</em> 197(4): 33–41. <Ext href="https://doi.org/10.1038/scientificamerican1057-33">https://doi.org/10.1038/scientificamerican1057-33</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Grodzins, M. 1958. <em>The Metropolitan Area as a Racial Problem</em>. Pittsburgh: University of Pittsburgh Press.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Holling, C. S. 1973. Resilience and stability of ecological systems. <em>Annual Review of Ecology and Systematics</em> 4: 1–23.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Iacopini, I., Petri, G., Baronchelli, A., and Barrat, A. 2022. Group interactions modulate critical mass dynamics in social convention. <em>Communications Physics</em> 5: 64. <Ext href="https://doi.org/10.1038/s42005-022-00845-y">https://doi.org/10.1038/s42005-022-00845-y</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Kopp, R. E., Gilmore, E. A., Shwom, R. L., Adams, H., Adler, C., Oppenheimer, M., Patwardhan, A., Russill, C., Schmidt, D. N., and York, R. 2025. ‘Tipping points’ confuse and can distract from urgent climate action. <em>Nature Climate Change</em> 15(1): 29–36. <Ext href="https://doi.org/10.1038/s41558-024-02196-8">https://doi.org/10.1038/s41558-024-02196-8</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Kuran, T. 1995. <em>Private Truths, Public Lies: The Social Consequences of Preference Falsification</em>. Cambridge, MA: Harvard University Press.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Lenton, T. M., Held, H., Kriegler, E., Hall, J. W., Lucht, W., Rahmstorf, S., and Schellnhuber, H. J. 2008. Tipping elements in the Earth’s climate system. <em>Proceedings of the National Academy of Sciences</em> 105(6): 1786–1793. <Ext href="https://doi.org/10.1073/pnas.0705414105">https://doi.org/10.1073/pnas.0705414105</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Lenton, T. M., Benson, S., Smith, T., et al.&nbsp;2022. Operationalising positive tipping points towards global sustainability. <em>Global Sustainability</em> 5: e1.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Lenton, T. M., Armstrong McKay, D. I., Loriani, S., Abrams, J. F., Lade, S. J., Donges, J. F., Milkoreit, M., Powell, T., Smith, S. R., Zimm, C., Buxton, J. E., Bailey, E., Laybourn, L., Ghadiali, A., and Dyke, J. G. (eds.) 2023. <em>The Global Tipping Points Report 2023</em>. Exeter: University of Exeter.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Meyer, N. I. 2006. Influence of government policy on the promotion of wind power. <em>International Journal of Global Energy Issues</em> 25(3/4): 204–218.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Milkoreit, M. 2023. Social tipping points everywhere?—Patterns and risks of overuse. <em>WIREs Climate Change</em> 14(2): e813. <Ext href="https://doi.org/10.1002/wcc.813">https://doi.org/10.1002/wcc.813</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Milkoreit, M., Hodbod, J., Baggio, J., Benessaiah, K., Calderón-Contreras, R., Donges, J. F., Mathias, J.-D., Rocha, J. C., Schoon, M., and Werners, S. E. 2018. Defining tipping points for social-ecological systems scholarship—an interdisciplinary literature review. <em>Environmental Research Letters</em> 13(3): 033005. <Ext href="https://doi.org/10.1088/1748-9326/aaaa75">https://doi.org/10.1088/1748-9326/aaaa75</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Moser, S. C., and Dilling, L. 2007. Toward the social tipping point: Creating a climate for change. In S. C. Moser and L. Dilling (eds.), <em>Creating a Climate for Change: Communicating Climate Change and Facilitating Social Change</em>, ch.&nbsp;32. Cambridge: Cambridge University Press.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Munksgaard, J., and Morthorst, P. E. 2008. Wind power in the Danish liberalised power market—Policy measures, price impact and investor incentives. <em>Energy Policy</em> 36(10): 3940–3947.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Nyborg, K., Anderies, J. M., Dannenberg, A., et al.&nbsp;2016. Social norms as solutions. <em>Science</em> 354(6308): 42–43.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Otto, I. M., Donges, J. F., Cremades, R., et al.&nbsp;2020. Social tipping dynamics for stabilizing Earth’s climate by 2050. <em>Proceedings of the National Academy of Sciences</em> 117(5): 2354–2365. <Ext href="https://doi.org/10.1073/pnas.1900577117">https://doi.org/10.1073/pnas.1900577117</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Rogers, E. M. 1962. <em>Diffusion of Innovations</em>. New York: Free Press.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Russill, C., and Nyssa, Z. 2009. The tipping point trend in climate change communication. <em>Global Environmental Change</em> 19(3): 336–344.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Schellnhuber, H. J. 2009. Tipping elements in the Earth System. <em>Proceedings of the National Academy of Sciences</em> 106(49): 20561–20563. <Ext href="https://doi.org/10.1073/pnas.0911106106">https://doi.org/10.1073/pnas.0911106106</Ext></li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Schelling, T. C. 1969. Models of segregation. <em>American Economic Review</em> 59(2): 488–493.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Schelling, T. C. 1971. Dynamic models of segregation. <em>Journal of Mathematical Sociology</em> 1(2): 143–186.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Schelling, T. C. 1972. A process of residential segregation: Neighborhood tipping. In A. H. Pascal (ed.), <em>Racial Discrimination in Economic Life</em>, 157–184. Lexington, MA: D. C. Heath.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Schelling, T. C. 1978. <em>Micromotives and Macrobehavior</em>. New York: W. W. Norton.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Skrimshire, S. 2008. Approaching the tipping point: Climate risks, faith and political action. <em>European Journal of Science and Theology</em> 4(2): 9–22.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Tàbara, J. D., Frantzeskaki, N., Hölscher, K., et al.&nbsp;2018. Positive tipping points in a rapidly warming world. <em>Current Opinion in Environmental Sustainability</em> 31: 120–129.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>United States v. Starrett City Associates. 1988. 840 F.2d 1096 (2d Cir.).</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Wallerstein, I. 1974. <em>The Modern World-System I: Capitalist Agriculture and the Origins of the European World-Economy in the Sixteenth Century</em>. New York: Academic Press.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Warner, K. E. 1977. The effects of the anti-smoking campaign on cigarette consumption. <em>American Journal of Public Health</em> 67(7): 645–650.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Watts, D. J., and Dodds, P. S. 2007. Influentials, networks, and public opinion formation. <em>Journal of Consumer Research</em> 34(4): 441–458.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Westley, F., Olsson, P., Folke, C., et al.&nbsp;2011. Tipping toward sustainability: Emerging pathways of transformation. <em>Ambio</em> 40(7): 762–780.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Winkelmann, R., Donges, J. F., Smith, E. K., et al.&nbsp;2022. Social tipping processes towards climate action: A conceptual framework. <em>Ecological Economics</em> 192: 107242.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Wolf, E. P. 1963. The tipping-point in racially changing neighborhoods. <em>Journal of the American Institute of Planners</em> 29(3): 217–222.</li>
          <li className="mb-1.5" style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}>Xie, J., Sreenivasan, S., Korniss, G., Zhang, W., Lim, C., and Szymanski, B. K. 2011. Social consensus through the influence of committed minorities. <em>Physical Review E</em> 84(1): 011130.</li>
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
