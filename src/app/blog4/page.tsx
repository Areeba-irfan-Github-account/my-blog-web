'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog4() {
  const [post, setPost] = useState({
    id: 4,
    title: "The Art of Mindfulness",
    author: "Sarah Johnson",
    date: "June 1, 2023",
    image: "/mindfulness.jpg",
    category: "Health",
    content: `
      <p>In today's fast-paced world, the practice of mindfulness has become increasingly important for maintaining mental health and overall well-being. This post explores the art of mindfulness and how it can help reduce stress and improve your quality of life.</p>

      <h2>What is Mindfulness?</h2>
      <p>Mindfulness is the practice of being fully present and engaged in the current moment, aware of our thoughts and feelings without distraction or judgment. It's about paying attention to our experiences as they unfold, moment by moment.</p>

      <h2>Benefits of Mindfulness</h2>
      <p>Regular mindfulness practice has been shown to:</p>
      <ul>
        <li>Reduce stress and anxiety</li>
        <li>Improve focus and concentration</li>
        <li>Enhance emotional regulation</li>
        <li>Boost immune function</li>
        <li>Increase self-awareness</li>
      </ul>

      <h2>Simple Mindfulness Techniques</h2>
      <p>Here are some easy ways to incorporate mindfulness into your daily routine:</p>
      <ol>
        <li>Mindful breathing: Focus on your breath, noticing the sensation of each inhale and exhale.</li>
        <li>Body scan: Gradually direct your attention through different parts of your body, observing any sensations without judgment.</li>
        <li>Mindful eating: Pay full attention to the experience of eating, savoring each bite and noticing textures, flavors, and aromas.</li>
        <li>Walking meditation: While walking, focus on the sensation of your feet touching the ground and the movement of your body.</li>
      </ol>

      <p>Remember, mindfulness is a skill that improves with practice. Start with just a few minutes each day and gradually increase the duration as you become more comfortable with the practice. By cultivating mindfulness, you can reduce stress, improve your overall well-being, and live a more balanced and fulfilling life.</p>
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
              src={"/blog4.jpg"}
              alt={post.title}
              width={250}
              height={300}
              objectFit="contain"
              className="rounded-lg mx-auto"
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
