import React from 'react';
import { ArrowLeft, Newspaper, Calendar, MapPin, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function ChiaConference2026() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight">
              AI for a Changing World: Inside the <span className="text-[#3A6B35]">CHIA Annual Conference 2026</span>
            </h1>

            {/* Subtitle / meta block */}
            <div className="bg-white rounded-2xl shadow-md p-6 grid sm:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#3A6B35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Date &amp; Time</p>
                  <p className="font-semibold">Mon, 22 Jun 2026 · 9:00 AM – 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3A6B35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Venue</p>
                  <p className="font-semibold">The Cambridge Union, Cambridge, England</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Landmark className="w-5 h-5 text-[#3A6B35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Organiser</p>
                  <p className="font-semibold">Centre for Human-Inspired Artificial Intelligence (CHIA), University of Cambridge</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Newspaper className="w-5 h-5 text-[#3A6B35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Conference</p>
                  <p className="font-semibold">Annual Conference: AI for a Changing World</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8 text-lg text-gray-700 leading-relaxed">

          <p className="text-justify">
            On 22 June, while the UK Parliament in Westminster was going through some of its most significant changes in recent memory, I was sitting at The Cambridge Union, an institution often nicknamed the "pre-parliament" for the generations of politicians, thinkers and debaters it has shaped. I had come to Cambridge for CHIA's Annual Conference, where researchers, industry leaders and policymakers would spend the day examining how artificial intelligence is changing the world we live in.
          </p>

          <p className="text-justify">
            This year's CHIA Annual Conference, <em>AI for a Changing World</em>, took place at this historic venue at the heart of debate and intellectual exchange since 1815. The full-day conference featured keynote talks by leading figures in the field, alongside panel discussions on how AI is reshaping our world: from science and discovery to safety, human relationships, and careers. For the first time, the conference also hosted a Cambridge Union-style debate on a genuinely timely question: whether AI is strengthening or eroding human judgement.
          </p>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">Opening the Day</h2>
          <p className="text-justify">
            The day opened with Anna Korhonen and Dr Ramit Debnath welcoming speakers, researchers, industry leaders, policymakers and students to the Union. From there, the programme moved through AI for science and discovery, a session on AI safety chaired by Dr Umang Bhatt, the Cambridge Union-style debate chaired by Dr Malak Sadek, and an afternoon showcase from CHIA's Early Career Community, led by Ulla Petti and introduced by Sonja Tervola.
          </p>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">AI for Science &amp; Discovery</h2>
          <p className="text-justify">
            The opening session, chaired by Dr Ramit Debnath, showcased how AI is helping researchers uncover new insights and advance scientific discovery across disciplines.
          </p>
          <p className="text-justify">
            <strong>Professor Anil Madhavapeddy</strong> spoke about using self-supervised AI models to build "fingerprints" of locations from vast amounts of satellite imagery, without needing extensive labelled data, enabling scientists to monitor environmental change over time through applications like crop monitoring, biodiversity research, forest management and detecting environmental degradation.
          </p>
          <p className="text-justify">
            <strong>Dr Shruti Mishra</strong> presented work on reinforcement learning for stratified shear flows, where AI learns through interaction with fluid simulations to discover effective strategies for mixing complex fluid systems, with promising applications in environmental and geophysical sciences, including atmospheric modelling.
          </p>
          <p className="text-justify">
            <strong>Dr Burigede Liu</strong> discussed how AI copilots can accelerate engineering modelling, simulation and design, helping engineers explore and optimise solutions more efficiently. His central point stuck with me: AI is most powerful when it augments human expertise, supporting engineers rather than replacing them.
          </p>
          <p className="text-justify">
            Together, the three talks made the case that AI is becoming an increasingly valuable scientific partner, helping researchers analyse complex data, uncover new patterns and tackle challenges that span disciplines.
          </p>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">AI for Safety: Beyond the Technical</h2>
          <p className="text-justify">
            The safety session, chaired by Dr Umang Bhatt, looked beyond technical safety to consider how AI is reshaping trust, communication, human relationships and society itself.
          </p>
          <p className="text-justify">
            In his keynote, <strong>Professor Chris Summerfield</strong> argued that AI's impact will be shaped not only by the technology itself, but by the social, political and economic systems in which it operates. As AI capabilities grow, he suggested, society has a genuine opportunity to shape new norms around authenticity, privacy, trust and human agency.
          </p>
          <p className="text-justify">
            The panel that followed, <strong>Dr Deborah Raji</strong>, <strong>Grace Yip</strong>, <strong>Rebecca Anselmetti</strong> and <strong>Adrian Mak</strong>, brought perspectives from policy, industry and research. The recurring themes were clear: building safe AI requires collaboration across academia, government and industry; measuring AI's long-term societal impact matters just as much as evaluating technical performance; organisations adopting AI have a responsibility for accountability, transparency and meaningful human oversight; and public voices should play an active role in shaping how AI is governed and deployed.
          </p>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">This House Believes: Is AI Eroding Human Agency?</h2>
          <p className="text-justify">
            The highlight of the afternoon, for me, was the Cambridge Union-style debate chaired by Dr Malak Sadek on the motion "AI is Eroding Human Agency", the first time this conference has run a debate in this format, and a fitting choice of venue for it.
          </p>
          <p className="text-justify">
            <strong>Professor James Evans</strong>, speaking for the motion, argued that AI increasingly concentrates power in governments, corporations and those who own large-scale AI systems. While AI may create a feeling of greater control, he suggested, meaningful decision-making power is shifting away from individuals: pointing to workplace automation, surveillance and the rise of "one-person unicorn" companies as examples of how AI can expand opportunities for a few while reducing autonomy for many.
          </p>
          <p className="text-justify">
            <strong>Professor Yvonne Rogers FRS</strong>, speaking against the motion, countered that there is currently limited evidence that AI inherently diminishes human agency. Across healthcare, science and everyday life, she argued, AI can help people organise ideas, solve problems and think in new ways; when thoughtfully designed, AI augments human capabilities rather than replacing human judgement.
          </p>
          <p className="text-justify">
            "This House believes AI is eroding human agency" was the motion put to the debate that afternoon. True to Cambridge Union tradition, the debate was settled by a division of the House rather than a simple show of hands: members and guests filed out through either the AYES or NOES door, with tellers counting each side as they passed through. A first division was held before the debate began, to set a baseline reading of the room, and a second immediately after, so that the result turned not on the raw headcount but on the swing between the two, how many minds had actually moved over the course of the debate. I was firmly on Professor Yvonne Rogers's side, and left through the Noes door. Sitting in that chamber, watching a debate decided the same way generations of Cambridge Union debates have been decided before it, was a reminder of exactly why this venue was the right place to be asking the question.
          </p>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">Early Career Community: Pitches, Posters and a Panel</h2>
          <p className="text-justify">
            The afternoon also showcased research from CHIA's Early Career Community, led by ECC Programme Manager &amp; Teaching Fellow Ulla Petti and introduced by Sonja Tervola. It closed with an intergenerational panel discussion moderated by Alva Markelius, bringing together Afifah Kashif, Hannah Claus, Harin Lee and Per Ola Kristensson to reflect on AI in a changing world.
          </p>
          <p className="text-justify">
            The pitch, poster and demo competition produced three worthy, audience-voted winners: <strong>Shreya Chappidi</strong> took Best Research Pitch for <em>Lessons from the AI Graveyard</em>, investigating why AI projects fail and what drives AI abandonment; <strong>Bernardo Villegas Moreno Villegas</strong> won Best Poster for <em>Secondhand AI</em>, exploring how AI affects not only its users but the colleagues, students, patients and communities around them; and <strong>Shin Zert Phua</strong> won Best Demo for <em>Documenting Deployed AI Decision Traces</em>, an LLM-based approach to improving the transparency and evaluation of AI decision-making in real-world settings. The quality of the work on show was a genuine reflection of the creativity, rigour and impact coming out of Cambridge's Early Career Community.
          </p>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">Closing Thoughts</h2>
          <p className="text-justify">
            By the end of the day, the thread running through every session (science, safety, the debate, the Early Career showcase) was the same: AI's trajectory isn't fixed by the technology alone. It's shaped by the systems, institutions and choices around it, and by how deliberately we design for accountability, trust and human oversight. Walking out of the Union that evening, with Parliament in Westminster still working through its own changes, that felt like the right note to end on: whether we're talking about government or about AI, the institutions built for debate and scrutiny are exactly where these questions belong.
          </p>

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
