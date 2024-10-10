'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog1() {
  const [post, setPost] = useState({
    id: 1,
    title: "The Art of Storytelling",
    author: "Jane Doe",
    date: "May 15, 2023",
    excerpt: "Explore the elements that make a story truly compelling and how to apply these techniques in your writing.",
    image: "/blog1.jpg",
    category: "Writing",
    content: `
      <p>Storytelling is an art form that has been with us since the dawn of human civilization. It's a powerful tool for communication, entertainment, and education. In this blog post, we'll explore the key elements that make a story truly compelling and discuss how you can apply these techniques in your own writing.</p>

      <h2>1. Strong Characters</h2>
      <p>At the heart of every great story are memorable characters. They should be complex, relatable, and have clear motivations. Develop your characters' backstories, personalities, and goals to make them feel real to your readers.</p>

      <h2>2. Engaging Plot</h2>
      <p>A well-structured plot keeps readers hooked from beginning to end. Include conflict, rising action, climax, and resolution. Don't be afraid to throw in unexpected twists and turns to keep your audience guessing.</p>

      <h2>3. Vivid Setting</h2>
      <p>Create a rich, immersive world for your story. Use descriptive language to paint a picture in your readers' minds, engaging all their senses.</p>

      <h2>4. Emotional Connection</h2>
      <p>Great stories evoke emotions in readers. Whether it's joy, sadness, fear, or excitement, make sure your writing touches the heart as well as the mind.</p>

      <h2>5. Theme and Message</h2>
      <p>What's the underlying message of your story? A strong theme can elevate your writing and leave a lasting impact on your readers.</p>

      <p>By mastering these elements, you can craft stories that captivate, inspire, and resonate with your audience. Remember, practice makes perfect – so keep writing and refining your storytelling skills!</p>
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
              src={"/blog1.jpg"}
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
