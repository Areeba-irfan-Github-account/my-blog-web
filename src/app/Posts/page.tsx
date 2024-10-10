'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Art of Storytelling",
      author: "Jane Doe",
      date: "May 15, 2023",
      excerpt: "Explore the elements that make a story truly compelling and how to apply these techniques in your writing.",
      image: "/blog1.jpg",
      category: "Writing"
    },
    {
      id: 2,
      title: "The Future of AI",
      author: "John Smith",
      date: "May 20, 2023",
      excerpt: "Discover the latest advancements in artificial intelligence and their potential impact on various industries.",
      image: "/blog2.jpg",
      category: "Technology"
    },
    {
      id: 3,
      title: "Sustainable Living Tips",
      author: "Emily Green",
      date: "May 25, 2023",
      excerpt: "Learn practical ways to reduce your carbon footprint and live a more environmentally friendly lifestyle.",
      image: "/blog3.jpg",
      category: "Lifestyle"
    },
    {
      id: 4,
      title: "The Art of Mindfulness",
      author: "Sarah Johnson",
      date: "June 1, 2023",
      excerpt: "Discover how mindfulness practices can reduce stress and improve your overall well-being.",
      image: "/blog4.jpg",
      category: "Health"
    },
    {
      id: 5,
      title: "Exploring World Cuisines",
      author: "Michael Chen",
      date: "June 5, 2023",
      excerpt: "Take a culinary journey around the globe and learn about unique dishes from different cultures.",
      image: "/blog5.jpg",
      category: "Food"
    },
    {
      id: 6,
      title: "The Rise of Remote Work",
      author: "Alex Rodriguez",
      date: "June 10, 2023",
      excerpt: "Examine the growing trend of remote work and its impact on businesses and employees.",
      image: "/blog6.jpg",
      category: "Business"
    }
  ]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">All Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/blog${post.id}`} key={post.id}>
                <article className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                  <div className="relative h-40 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-semibold text-indigo-600">{post.category}</span>
                    <h2 className="text-xl font-semibold mt-2 mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm mb-4">{post.author} • {post.date}</p>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <span className="text-indigo-600 hover:text-indigo-800 font-semibold">
                      Read More →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
