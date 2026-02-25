import React from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTASection() {
  const email = "anandachristophergunawan@gmail.com";
  const phone = "+6287720756542";
  const subject = "Cookie Order Inquiry";
  const body = "Hi, I would like to place an order for some artisanal cookies!";

  return (
    <section id="order" className="py-32 bg-[#1a1a2e] dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-500/20 dark:bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
            Don't let your cravings wait.
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of cookie lovers who have already discovered their new favorite treat. Order now and we'll bake a fresh batch just for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-5 rounded-full text-lg font-bold hover:bg-pink-50 dark:hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-orange-100 dark:from-pink-200 dark:to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="w-6 h-6 relative z-10 text-pink-500" />
              <span className="relative z-10">Email Order</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`sms:${phone}?body=${encodeURIComponent(body)}`}
              className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 dark:border-white/30 text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-white/10 dark:hover:bg-white/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <MessageSquare className="w-6 h-6 text-blue-400 dark:text-blue-300" />
              <span>Text via SMS</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform opacity-50" />
            </a>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-2 text-sm text-gray-400 dark:text-gray-500 font-medium">
            <p>Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> {email}
              </span>
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> +62 877-2075-6542
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
