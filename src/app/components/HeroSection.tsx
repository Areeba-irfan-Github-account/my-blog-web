'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const [quote, setQuote] = useState('');
  const quotes = [
    "The pen is mightier than the sword.",
    "Words have the power to change the world.",
    "In the world of words, every voice matters.",
    "Blogging: Where thoughts become revolutions.",
    "Write to express, not to impress."
  ];

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <Image
        src="/logo.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          Welcome to My Blog
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 animate-fade-in-up">
          Exploring ideas, one post at a time
        </p>
        <div className="text-lg sm:text-xl md:text-2xl italic mb-8 animate-fade-in">
          "{quote}"
        </div>
        <Link href="/Posts" className="inline-block">
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
            Start Reading
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
