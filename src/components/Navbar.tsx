import React, { useState, useEffect } from 'react';
import { Cookie, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cookie className="w-8 h-8 text-pink-500" />
          <span className="font-display font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
            Cookie<span className="text-pink-500">.</span>co
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#home" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Home</a>
          <a href="#services" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Services</a>
          <a href="#menu" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Menu</a>
          <a href="#analytics" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Analytics</a>
          <a href="#reviews" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Reviews</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="#order" className="hidden md:block text-sm font-medium text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            Login
          </a>
          <a href="#order" className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
