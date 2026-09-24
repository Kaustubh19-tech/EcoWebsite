import React from 'react';
import { ArrowLeft, Newspaper, MapPin, Landmark, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

const CISL_LINKEDIN = 'https://www.linkedin.com/company/cambridge-institute-for-sustainability-leadership-education/';

export default function CislCanopy2026() {
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
              Where Innovation Meets Impact: Presenting at <span className="text-[#3A6B35]">CISL Canopy, Cambridge</span>
            </h1>

            {/* Subtitle / meta block */}
            <div className="bg-white rounded-2xl shadow-md p-6 grid sm:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Landmark className="w-5 h-5 text-[#3A6B35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Host</p>
                  <p className="font-semibold">University of Cambridge Institute for Sustainability Leadership (CISL)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3A6B35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Venue</p>
                  <p className="font-semibold">CISL Canopy, The Entopia Building, 1 Regent Street, Cambridge, CB2 1GG</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Newspaper className="w-5 h-5 text-[#3A6B35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Focus</p>
                  <p className="font-semibold">AI-driven solutions for climate resilience and societal response systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#3A6B35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Hosted by</p>
                  <p className="font-semibold">Joanna Gabryel &amp; Zoë Loughlin, CISL Canopy</p>
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
            Earlier this year, I got the kind of opportunity that reminds you why you started building in the first place: a truly enriching day at the{' '}
            <a href={CISL_LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-[#3A6B35] font-semibold hover:underline">
              Cambridge Institute for Sustainability Leadership (CISL)
            </a>
            , where innovation meets impact.
          </p>

          <p className="text-justify">
            Our team had the opportunity to present our AI-driven solutions aimed at advancing climate resilience and improving societal response systems. It was inspiring to exchange ideas with researchers and sustainability leaders on how AI, data and human-centred design can strengthen community resilience during crises.
          </p>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">The People Who Made It Happen</h2>
          <p className="text-justify">
            A big part of what made the day so valuable was the chance to meet the CISL Canopy team, who hosted us at The Entopia Building on Regent Street:
          </p>
          <ul className="space-y-4 pl-2">
            <li className="flex gap-3">
              <span className="mt-2.5 w-2 h-2 bg-[#3A6B35] rounded-full flex-shrink-0"></span>
              <span>
                <strong>Joanna Gabryel</strong>, Canopy Operations Manager, CISL Canopy, University of Cambridge Institute for Sustainability Leadership
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 w-2 h-2 bg-[#3A6B35] rounded-full flex-shrink-0"></span>
              <span>
                <strong>Zoë Loughlin</strong>, Canopy Programme Manager, CISL Canopy
              </span>
            </li>
          </ul>
          <p className="text-justify">
            Grateful to both of them, and to{' '}
            <a href={CISL_LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-[#3A6B35] font-semibold hover:underline">
              CISL
            </a>
            , for hosting us and providing such an engaging environment for collaboration and learning.
          </p>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">The Start of a New Journey</h2>
          <p className="text-justify">
            This marks the start of our new journey together, and we're excited about the long-term collaboration opportunities ahead.
          </p>
          <p className="text-justify">
            Challenging times remind us why technology should serve humanity, enabling faster, smarter and more coordinated responses when it matters most.
          </p>

        </div>

        {/* Image */}
        <div className="mt-16 grid grid-cols-1 gap-8">
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50">
            <img
              src="/images/1772746915353.jpg"
              alt="With the CISL Canopy team at the Canopy Lounge, The Entopia Building, Cambridge"
              className="w-full h-auto object-contain"
            />
          </div>
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
