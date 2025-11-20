import React from 'react';
import { ArrowLeft, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function BritishLibrary() {
    const images = [
        '/images/british_library_new_1.jpg',
        '/images/british_library_new_2.jpg',
        '/images/british_library_new_3.jpg',
        '/images/british_library_new_4.jpg',
        '/images/british_library_new_5.jpg',
        '/images/british_image_6.jpg',
        '/images/british_image_7.jpg',
        '/images/british_image_8.jpg',
        '/images/british_image_9.jpg',
        '/images/british_image_10.jpg',
        '/images/british_image_11.jpg',
        '/images/british_image_12.jpg',
        '/images/british_image_13.jpg',
        '/images/british_image_14.jpg',
        '/images/british_image_15.jpg',
        '/images/british_image_16.jpg',
        '/images/british_image_17.jpg'
    ];

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
                            <Book className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-8">
                            British <span className="text-[#3A6B35]">Library</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8 text-lg text-gray-700 leading-relaxed">
                    <p>
                        Over the past year, I have embarked on an independent research journey at the British Library, delving into the transformative potential of artificial intelligence to drive sustainable change. My exploration has led me to discover a wealth of resources, books and recommended readings that illuminate the intersections of technology and environmental stewardship.
                    </p>
                    <p>
                        One particularly striking moment was finding magazines on artificial intelligence, nature, and sustainability thoughtfully curated together in the same section. It felt as though the library itself was guiding me to blend these disciplines, inspiring a holistic approach to innovation and environmental progress.
                    </p>
                    <p>
                        Amidst intensive study, the British Library offers the perfect respite; its dedicated audio section celebrates the wonders of the natural world, allowing visitors to immerse themselves in the soothing sounds of Mother Nature before returning, refreshed, to their research and creativity.
                    </p>
                </div>

                {/* Image Gallery */}
                {/* Image Gallery */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {images.map((img, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50">
                            <img
                                src={img}
                                alt={`British Library Research ${index + 1}`}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
