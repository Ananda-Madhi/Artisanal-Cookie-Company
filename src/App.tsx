/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import MenuSection from './components/MenuSection';
import AnalyticsSection from './components/AnalyticsSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 selection:bg-pink-200 selection:text-pink-900 dark:selection:bg-pink-900 dark:selection:text-pink-200 transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <MenuSection />
        <AnalyticsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <footer className="bg-[#1a1a2e] dark:bg-gray-950 border-t border-white/10 dark:border-gray-800 py-12 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Cookie.co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
