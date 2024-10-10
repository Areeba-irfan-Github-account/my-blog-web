'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog3() {
  const [post, setPost] = useState({
    id: 3,
    title: "Sustainable Living Tips",
    author: "Emily Green",
    date: "May 25, 2023",
    image: "/sustainable-living.jpg",
    category: "Lifestyle",
    content: `
      <p>Living sustainably is not just a trend; it's a necessity for the future of our planet. In this post, we'll explore practical ways to reduce your carbon footprint and adopt a more environmentally friendly lifestyle.</p>

      <h2>1. Reduce, Reuse, Recycle</h2>
      <p>The classic mantra still holds true. Reduce your consumption, reuse items when possible, and recycle what you can't reuse. This simple practice can significantly decrease waste.</p>

      <h2>2. Energy Efficiency</h2>
      <p>Switch to energy-efficient appliances and LED light bulbs. Unplug electronics when not in use and consider using smart power strips to reduce phantom energy consumption.</p>

      <h2>3. Sustainable Transportation</h2>
      <p>Walk, bike, or use public transportation when possible. If you need to drive, consider carpooling or switching to an electric or hybrid vehicle.</p>

      <h2>4. Eat Sustainably</h2>
      <p>Reduce meat consumption, buy local and seasonal produce, and minimize food waste. Consider starting a small garden or supporting community-supported agriculture.</p>

      <h2>5. Conserve Water</h2>
      <p>Fix leaky faucets, take shorter showers, and use water-efficient appliances. Collect rainwater for gardening and consider drought-resistant landscaping.</p>

      <p>Remember, every small action counts. By incorporating these sustainable living tips into your daily life, you can make a significant positive impact on the environment. Let's work together to create a more sustainable future for all!</p>
    `
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-600">By {post.author} • {post.date}</p>
          </header>
          <div className="relative h-64 w-full mb-8">
          <Image
              src={"/blog3.jpg"}
              alt={post.title}
              width={250}
              height={300}
              objectFit="contain"
              className="rounded-lg  mx-auto"
            />
          </div>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <div className="mt-8">
            <Link href="/Posts" className="text-indigo-600 hover:text-indigo-800 font-semibold">
              ← Back to All Posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
