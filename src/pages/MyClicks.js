import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function MyClicks() {
    const images = [
        '/himalaya-1.jpg',
        '/himalaya-2.jpg',
        '/himalaya-3.jpg',
        '/himalaya-4.jpg',
        '/himalaya-5.jpg',
        '/himalaya-6.jpg',
        '/himalaya-7.jpg',
        '/himalaya-8.jpg',
        '/himalaya-9.jpg'
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
                            <Camera className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-8">
                            My <span className="text-[#3A6B35]">Clicks</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8 text-lg text-gray-700 leading-relaxed">
                    <p className="text-justify">
                        I tried to capture the raw beauty and tranquil spirit of the Garhwal Himalayas as I experienced them in 2012, hoping that these photographs would reflect not only the breathtaking landscapes but also my deep appreciation for nature's wonders, reminding us all to cherish and protect these pristine environments for generations to come.
                    </p>
                </div>

                {/* Image Gallery */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {images.map((img, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 h-80">
                            <img
                                src={img}
                                alt={`Himalayan Journey ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
