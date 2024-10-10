'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import About from '../About/page';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black text-white' : 'bg-transparent text-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl hover:text-gray-300 transition-colors duration-200">
              My Blog
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'About', 'Posts', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : item === 'About' ? '/About' : item === 'Posts' ? '/Posts' : item === 'Contact' ? '/Contact' : `/${item.toLowerCase()}`}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-all duration-200 transform hover:scale-105"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
