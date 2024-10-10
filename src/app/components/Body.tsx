'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Body = () => {
  const [featuredPosts, setFeaturedPosts] = useState([
    { id: 1, title: "The Art of Storytelling", excerpt: "Discover the secrets behind captivating narratives...", image: "/blog1.jpg" },
    { id: 2, title: "The Future of AI", excerpt: "Discover the latest advancements in artificial intelligence...", image: "/blog2.jpg" },
    { id: 3, title: "Sustainable Living Tips", excerpt: "Learn practical ways to reduce your carbon footprint...", image: "/blog3.jpg" },
  ]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100 text-gray-800">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog${post.id}`} className="text-gray-500 hover:text-gray-700 font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">About Our Blog</h2>
        <div className="bg-white p-8 rounded-lg">
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to our corner of the internet! Here, we explore a wide range of topics, from technology and science to arts and culture. Our goal is to inspire, inform, and entertain you with thought-provoking content that sparks your curiosity and broadens your horizons.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Subscribe to Our Newsletter</h2>
        <form className="max-w-md mx-auto">
          <div className="flex items-center border-b border-gray-300 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" aria-label="Email" />
            <button className="flex-shrink-0 bg-gray-300 hover:bg-gray-400 border-gray-300 hover:border-gray-400 text-sm border-4 text-gray-800 py-1 px-2 rounded" type="button">
              Subscribe
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Body;
