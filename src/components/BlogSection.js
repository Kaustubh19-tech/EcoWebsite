import React from 'react';

const posts = [
  {
    title: "AI and Reforestation: Targeting Areas that Matter",
    tag: "Forests",
  },
  {
    title: "Optimizing Energy with ML in Smart Buildings",
    tag: "Energy",
  },
  {
    title: "Open Datasets for Transparent Climate Models",
    tag: "Open Data",
  },
  {
    title: "Explaining Predictions to Build Trust",
    tag: "Explainability",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-6 bg-[#F5F3ED]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2D5016] text-center mb-12">Blog</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#2D5016] bg-[#E6E9DE] rounded-full mb-4">
                {post.tag}
              </span>
              <h3 className="text-lg font-semibold text-[#2C2C2C] leading-snug">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
