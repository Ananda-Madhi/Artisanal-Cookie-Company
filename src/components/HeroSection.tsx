import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cookie } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#fdfbf7] dark:bg-gray-950 transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      
      {/* Soft Animated Gradients */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 -right-40 w-96 h-96 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-40 left-20 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      {/* Parallax Abstract Shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-tr from-pink-400 to-orange-300 dark:from-pink-600 dark:to-orange-500 rounded-3xl opacity-20 blur-xl"
        animate={{
          y: [0, -50, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-blue-400 to-purple-300 dark:from-blue-600 dark:to-purple-500 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-500/10 border border-pink-100 dark:border-pink-500/20 text-pink-600 dark:text-pink-400 text-sm font-medium mb-8">
            <Cookie className="w-4 h-4" />
            <span className="font-bold">Warning: Highly addictive cookies inside</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-[#1a1a2e] dark:text-white leading-[1.1] mb-6">
            Taste the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 dark:from-pink-400 dark:to-orange-300">
              magic
            </span> in every bite.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed">
            Imagine a cookie so perfectly baked, it melts in your mouth and takes you back to your best childhood memories. That's exactly what we bake fresh for you every single morning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#order"
              className="inline-flex items-center justify-center gap-2 bg-[#1a1a2e] dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-900/20 dark:shadow-white/10"
            >
              Claim Your First Batch
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#reviews"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
            >
              Read Reviews
            </a>
          </div>
        </motion.div>

        {/* Right Content - Abstract 3D-like representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Decorative elements to simulate the 3D scene from the prompt */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 dark:from-gray-800/80 dark:to-gray-800/20 backdrop-blur-xl rounded-[3rem] border border-white/50 dark:border-gray-700/50 shadow-2xl shadow-pink-500/10 dark:shadow-pink-500/5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20" />
              
              {/* Central "Store" shape */}
              <motion.div 
                className="relative w-64 h-80 bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center overflow-hidden"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Awning */}
                <div className="absolute top-12 w-48 h-12 bg-gradient-to-b from-pink-400 to-pink-500 dark:from-pink-500 dark:to-pink-600 rounded-xl shadow-lg transform -skew-x-12 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl tracking-wider">Cookie.co</span>
                </div>
                {/* Window */}
                <div className="mt-20 w-32 h-40 bg-pink-50 dark:bg-gray-800 rounded-t-full border-4 border-pink-100 dark:border-gray-700 flex items-end justify-center pb-4">
                  <Cookie className="w-12 h-12 text-pink-300 dark:text-pink-500" />
                </div>
              </motion.div>

              {/* Floating Boxes */}
              <motion.div 
                className="absolute top-20 left-10 w-24 h-24 bg-[#e8d5c4] dark:bg-[#8c6b4a] rounded-xl shadow-lg border border-[#d4bca5] dark:border-[#5c452e] flex items-center justify-center"
                animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="font-display font-bold text-[#8c6b4a] dark:text-[#e8d5c4] opacity-50 dark:opacity-80">Box</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-32 right-10 w-20 h-20 bg-[#e8d5c4] dark:bg-[#8c6b4a] rounded-xl shadow-lg border border-[#d4bca5] dark:border-[#5c452e] flex items-center justify-center"
                animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <span className="font-display font-bold text-[#8c6b4a] dark:text-[#e8d5c4] opacity-50 dark:opacity-80">Box</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
