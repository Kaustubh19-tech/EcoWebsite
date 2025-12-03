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
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                            <Heart className="w-5 h-5 text-green-700" />
                            <span className="text-sm font-semibold text-green-700">Community Service</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6">
                            Teaching <span className="text-[#3A6B35]">Yoga</span> at Orphanages
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Sharing the gift of yoga and mindfulness with children, nurturing their physical, mental, and emotional well-being through dedicated volunteer sessions
                        </p>
                    </div>
                        </div>
                        <h3 className="text-3xl font-bold text-green-700 mb-2">15+</h3>
                        <p className="text-gray-600">Children Impacted</p>
                    </div >

                    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-8 h-8 text-blue-700" />
                        </div>
                        <h3 className="text-3xl font-bold text-blue-700 mb-2">Weekly</h3>
                        <p className="text-gray-600">Regular Sessions</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-purple-700" />
                        </div>
                        <h3 className="text-3xl font-bold text-purple-700 mb-2">Holistic</h3>
                        <p className="text-gray-600">Mind-Body Wellness</p>
                    </div>
                </div >

    {/* What We Practice */ }
    < div className = "bg-white rounded-2xl p-8 shadow-lg mb-12" >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Practice</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-l-4 border-green-500 pl-6">
                            <h3 className="text-xl font-bold text-green-900 mb-3">🧘 Asanas (Postures)</h3>
                            <p className="text-gray-700 mb-2">Age-appropriate yoga postures to improve:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Flexibility and strength</li>
                                <li>Body awareness and coordination</li>
                                <li>Physical fitness and stamina</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-6">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">🌬️ Pranayama (Breathing)</h3>
                            <p className="text-gray-700 mb-2">Breathing techniques that help with:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Stress and anxiety management</li>
                                <li>Emotional regulation</li>
                                <li>Improved focus and concentration</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-purple-500 pl-6">
                            <h3 className="text-xl font-bold text-purple-900 mb-3">🧠 Meditation & Mindfulness</h3>
                            <p className="text-gray-700 mb-2">Mindfulness practices for:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Mental clarity and calmness</li>
                                <li>Self-awareness and confidence</li>
                                <li>Better sleep and relaxation</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-6">
                            <h3 className="text-xl font-bold text-orange-900 mb-3">🎯 Life Skills</h3>
                            <p className="text-gray-700 mb-2">Essential skills including:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Discipline and routine building</li>
                                <li>Teamwork and cooperation</li>
                        <p>
                            <strong className="text-green-700">Building Confidence:</strong> Many children who initially felt hesitant gradually developed confidence in their abilities, not just in yoga but in approaching new challenges in life.
                        </p>
                        <p>
                            <strong className="text-blue-700">Emotional Well-being:</strong> The breathing and meditation practices gave children healthy tools to process emotions, manage stress, and find inner peace despite difficult circumstances.
                        </p>
                        <p>
                            <strong className="text-purple-700">Physical Health:</strong> Regular yoga practice improved the children's physical fitness, posture, flexibility, and overall health, contributing to their holistic development.
                        </p>
                        <p>
                            <strong className="text-orange-700">Community & Connection:</strong> Group sessions fostered a sense of community, teaching children to support one another and work together harmoniously.
                        </p>
                    </div>
                    <div className="mt-8 text-center">
                        <blockquote className="text-xl font-semibold text-gray-800 italic">
                            "Yoga is not just about physical postures—it's about giving these children tools for life, empowering them to find strength, peace, and resilience within themselves."
                        </blockquote>
                    </div>
                </div >

            </div >
        </div >
    );
}
