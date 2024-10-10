'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog5() {
  const [post, setPost] = useState({
    id: 5,
    title: "Exploring World Cuisines",
    author: "Michael Chen",
    date: "June 5, 2023",
    image: "/world-cuisines.jpg",
    category: "Food",
    content: `
      <p>Embark on a culinary journey around the globe as we explore unique dishes from different cultures. This post will take you on a gastronomic adventure, introducing you to flavors and cooking techniques from various corners of the world.</p>

      <h2>The Diversity of World Cuisines</h2>
      <p>Every culture has its own unique culinary traditions, shaped by history, geography, and local ingredients. From the spicy curries of India to the delicate sushi of Japan, the world offers an incredible array of flavors and dining experiences.</p>

      <h2>Highlighted Cuisines</h2>
      <ul>
        <li>Italian: Known for pasta, pizza, and Mediterranean flavors</li>
        <li>Chinese: Diverse regional cuisines with a focus on balance and harmony</li>
        <li>Mexican: Bold flavors featuring corn, beans, and chili peppers</li>
        <li>Indian: Rich, aromatic dishes with complex spice blends</li>
        <li>French: Refined techniques and emphasis on high-quality ingredients</li>
      </ul>

      <h2>Fusion Cuisine: A Modern Twist</h2>
      <p>In recent years, fusion cuisine has gained popularity, blending elements from different culinary traditions to create innovative and exciting dishes. This approach allows chefs to experiment with flavors and techniques, resulting in unique culinary experiences.</p>

      <h2>Exploring World Cuisines at Home</h2>
      <p>You don't need to travel the world to experience diverse cuisines. Here are some ways to explore global flavors from your own kitchen:</p>
      <ol>
        <li>Try new recipes from international cookbooks or online sources</li>
        <li>Visit ethnic grocery stores to find authentic ingredients</li>
        <li>Attend cooking classes focused on specific cuisines</li>
        <li>Host themed dinner parties featuring dishes from different countries</li>
      </ol>

      <p>Exploring world cuisines is not just about tasting new flavors; it's also a way to learn about different cultures and broaden your culinary horizons. So, grab your apron and embark on a delicious adventure around the world!</p>
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
              src={"/blog5.jpg"}
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
