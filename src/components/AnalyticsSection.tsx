import React from 'react';
import { motion } from 'motion/react';
import { Activity, Users, Star, Cookie } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Cookies Baked',
    value: '1M+',
    icon: Cookie,
    color: 'text-orange-500',
    bg: 'bg-orange-100',
  },
  {
    id: 2,
    name: 'Happy Customers',
    value: '50k+',
    icon: Users,
    color: 'text-blue-500',
    bg: 'bg-blue-100',
  },
  {
    id: 3,
    name: '5-Star Reviews',
    value: '10k+',
    icon: Star,
    color: 'text-yellow-500',
    bg: 'bg-yellow-100',
  },
  {
    id: 4,
    name: 'Daily Orders',
    value: '500+',
    icon: Activity,
    color: 'text-pink-500',
    bg: 'bg-pink-100',
  },
];

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're proud of the joy we've brought to cookie lovers everywhere. Here's a look at our journey so far.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-gray-200/60 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.bg} dark:bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-display font-bold text-gray-900 dark:text-white tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {stat.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
