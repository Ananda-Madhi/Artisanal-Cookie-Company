import React from 'react';
import { motion } from 'motion/react';
import { Truck, Gift, PartyPopper, CalendarHeart, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Nationwide Delivery',
    description: 'Freshly baked cookies delivered straight to your doorstep, anywhere in the country. Packaged perfectly to ensure they arrive warm and gooey.',
    icon: Truck,
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    borderColor: 'border-blue-100 dark:border-blue-500/20',
  },
  {
    id: 2,
    title: 'Corporate Gifting',
    description: 'Leave a lasting impression on clients and employees with our premium artisanal cookie boxes. Custom branding available.',
    icon: Gift,
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-500/10',
    borderColor: 'border-purple-100 dark:border-purple-500/20',
  },
  {
    id: 3,
    title: 'Event Catering',
    description: 'Elevate your weddings, birthdays, and special events with our stunning cookie towers and custom dessert tables.',
    icon: PartyPopper,
    color: 'text-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-500/10',
    borderColor: 'border-pink-100 dark:border-pink-500/20',
  },
  {
    id: 4,
    title: 'Monthly Subscription',
    description: 'Never run out of magic. Join our cookie club to receive a curated box of exclusive, seasonal flavors every month.',
    icon: CalendarHeart,
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-500/10',
    borderColor: 'border-orange-100 dark:border-orange-500/20',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#fafafa] dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              More Than Just Cookies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Whether you're treating yourself, surprising a loved one, or catering a massive event, we have the perfect service to make your experience magical.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm hover:shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${service.bg} border ${service.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a 
                  href="#order" 
                  className={`inline-flex items-center gap-2 font-semibold ${service.color} hover:opacity-80 transition-opacity`}
                >
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
