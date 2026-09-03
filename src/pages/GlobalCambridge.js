import React from 'react';
import { ArrowLeft, Globe, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

const people = [
  {
    name: 'Dr. Khaldon Al Karmadi',
    role: 'Chair & Managing Director of Global Cambridge',
    description: "As the organisation's lead, he shared his vision for how Cambridge's entrepreneurship ecosystem can scale globally and support the wider \"Global Britain\" agenda.",
  },
  {
    name: 'Mr Karthick S',
    role: 'Advisor to Global Cambridge',
    description: "Bringing his perspective to the team's efforts around growth and strategy.",
  },
  {
    name: 'Dr. Yaniv Proselkov',
    role: 'Advisor to Global Cambridge',
    description: "Contributing insight to the think tank's broader mission of connecting Cambridge innovation with global markets.",
  },
];

const galleryImages = [
  '/images/global_cambridge_3.jpg',
  '/images/global_cambridge_2.jpg',
  '/images/global_cambridge_1.jpg',
];

export default function GlobalCambridge() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F3] to-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#A4B494]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3A6B35]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Link
            to={createPageUrl('Treasure')}
            className="inline-flex items-center gap-2 text-[#3A6B35] hover:text-[#2D5016] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Treasure</span>
          </Link>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3A6B35] to-[#2D5016] rounded-2xl mb-8 shadow-lg">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-8">
              Global <span className="text-[#3A6B35]">Cambridge</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8 text-lg text-gray-700 leading-relaxed">

          <p className="text-justify">
            I had the pleasure of attending a networking event hosted by{' '}
            <a href="https://www.globalcambridge.org/" target="_blank" rel="noopener noreferrer" className="text-[#3A6B35] font-semibold hover:underline">
              Global Cambridge
            </a>
            , after being kindly invited by their team. It was a great opportunity to spend an evening in Cambridge exchanging ideas with people genuinely working to shape the region's entrepreneurial future.
          </p>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">About Global Cambridge</h2>
          <p className="text-justify">
            Global Cambridge is an independent entrepreneurship think tank rooted in the Cambridge startup community. Their mission is to bring together founders, researchers, investors, and policymakers to scale Cambridge's economic potential and drive what they call the "Global Britain Agentic Economy", essentially, turning Cambridge's deep well of scientific and technological talent into a bigger engine for national and global impact.
          </p>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">People I Met</h2>
          <p className="text-justify">
            During the event, I had the chance to speak with several members of their leadership team:
          </p>
          <div className="space-y-4">
            {people.map((person) => (
              <div key={person.name} className="bg-[#F0F4ED] rounded-xl p-6 border-l-4 border-[#3A6B35]">
                <h3 className="text-xl font-bold text-[#2D5016]">{person.name}</h3>
                <p className="text-[#3A6B35] font-medium mb-2">{person.role}</p>
                <p className="text-justify">{person.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#2D5016] pt-4">Reflections</h2>
          <p className="text-justify">
            It was refreshing to sit down with people so invested in Cambridge's role as a global innovation hub. The conversation touched on entrepreneurship, scaling deep-tech ideas beyond the region, and the kind of collaboration between founders, researchers, and policymakers that Global Cambridge is built to foster.
          </p>
          <p className="text-justify">
            Thanks again to the Global Cambridge team for the invitation, looking forward to staying connected and seeing where these conversations lead.
          </p>

          <div className="flex justify-center pt-4">
            <a
              href="https://www.globalcambridge.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3A6B35] to-[#2D5016] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Visit globalcambridge.org
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-16 grid grid-cols-1 gap-8">
          {galleryImages.map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50">
              <img
                src={img}
                alt={`Global Cambridge networking event ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <Link
          to={createPageUrl('Treasure')}
          className="inline-flex items-center gap-2 text-[#3A6B35] hover:text-[#2D5016] mt-10 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Treasure
        </Link>
      </div>
    </div>
  );
}
