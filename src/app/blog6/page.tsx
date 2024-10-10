'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog6() {
  const [post, setPost] = useState({
    id: 6,
    title: "The Rise of Remote Work",
    author: "Alex Rodriguez",
    date: "June 10, 2023",
    image: "/remote-work.jpg",
    category: "Business",
    content: `
      <p>The landscape of work is rapidly changing, with remote work becoming increasingly prevalent. This post examines the growing trend of remote work and its significant impact on both businesses and employees.</p>

      <h2>The Remote Work Revolution</h2>
      <p>Remote work, once considered a perk, has now become a standard practice for many companies. Advancements in technology, changing attitudes towards work-life balance, and recent global events have accelerated this shift.</p>

      <h2>Benefits for Businesses</h2>
      <ul>
        <li>Reduced overhead costs</li>
        <li>Access to a global talent pool</li>
        <li>Increased productivity</li>
        <li>Improved employee retention</li>
      </ul>

      <h2>Advantages for Employees</h2>
      <ul>
        <li>Improved work-life balance</li>
        <li>Elimination of commute time and costs</li>
        <li>Flexibility in work environment</li>
        <li>Potential for increased job satisfaction</li>
      </ul>

      <h2>Challenges of Remote Work</h2>
      <p>While remote work offers many benefits, it also presents unique challenges:</p>
      <ol>
        <li>Maintaining team cohesion and company culture</li>
        <li>Ensuring effective communication</li>
        <li>Managing work-life boundaries</li>
        <li>Addressing potential feelings of isolation</li>
      </ol>

      <h2>The Future of Work</h2>
      <p>As remote work continues to evolve, we're likely to see:</p>
      <ul>
        <li>Hybrid work models becoming more common</li>
        <li>Increased focus on digital collaboration tools</li>
        <li>Changes in office design to accommodate flexible work arrangements</li>
        <li>New management strategies tailored for remote teams</li>
      </ul>

      <p>The rise of remote work is reshaping the way we think about employment, productivity, and work-life balance. As businesses and employees continue to adapt to this new paradigm, it's clear that remote work will play a significant role in the future of work.</p>
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
              src={"/blog6.jpg"}
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
