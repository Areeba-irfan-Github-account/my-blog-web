'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog2() {
  const [post, setPost] = useState({
    id: 2,
    title: "The Future of AI",
    author: "John Smith",
    date: "May 20, 2023",
    image: "/ai-future.jpg",
    category: "Technology",
    content: `
      <p>Artificial Intelligence (AI) is rapidly evolving and shaping the future of various industries. In this post, we'll explore some of the latest advancements in AI and their potential impact on different sectors.</p>

      <h2>1. Healthcare</h2>
      <p>AI is revolutionizing healthcare through improved diagnostics, personalized treatment plans, and drug discovery. Machine learning algorithms can analyze medical images with high accuracy, potentially detecting diseases earlier than human doctors.</p>

      <h2>2. Finance</h2>
      <p>In the financial sector, AI is being used for fraud detection, algorithmic trading, and personalized banking experiences. Chatbots and virtual assistants are improving customer service, while AI-driven analytics help in risk assessment and investment strategies.</p>

      <h2>3. Transportation</h2>
      <p>Self-driving cars are perhaps the most visible example of AI in transportation. Beyond this, AI is optimizing traffic flow in smart cities, improving logistics in supply chains, and enhancing safety in various modes of transport.</p>

      <h2>4. Education</h2>
      <p>AI is personalizing learning experiences, providing adaptive assessments, and automating administrative tasks in education. Virtual tutors and AI-powered educational software are making quality education more accessible to students worldwide.</p>

      <h2>5. Environmental Conservation</h2>
      <p>AI is being employed to monitor and predict climate change patterns, optimize renewable energy systems, and track wildlife populations. These applications are crucial in our fight against climate change and biodiversity loss.</p>

      <p>As AI continues to advance, it's crucial to consider the ethical implications and ensure that these technologies are developed and used responsibly. The future of AI is bright, and its potential to solve complex problems and improve our lives is immense.</p>
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
              src={"/blog2.jpg"}
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
