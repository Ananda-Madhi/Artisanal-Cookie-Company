import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Classic Chocolate Chunk',
    description: 'Brown butter dough loaded with semi-sweet and dark chocolate chunks, finished with flaky sea salt.',
    price: '$4.50',
    tags: ['Best Seller', 'Classic'],
    image: 'https://picsum.photos/seed/cookie1/600/400',
  },
  {
    id: 2,
    name: 'Double Dark Chocolate',
    description: 'Rich dark cocoa dough packed with white chocolate chips and gooey fudge centers.',
    price: '$5.00',
    tags: ['Rich', 'Decadent'],
    image: 'https://picsum.photos/seed/cookie2/600/400',
  },
  {
    id: 3,
    name: 'Matcha White Macadamia',
    description: 'Premium ceremonial grade matcha infused dough with roasted macadamia nuts and white chocolate.',
    price: '$5.50',
    tags: ['Unique', 'Nutty'],
    image: 'https://picsum.photos/seed/cookie3/600/400',
  },
  {
    id: 4,
    name: 'Red Velvet Cream Cheese',
    description: 'Vibrant red velvet cookie stuffed with a generous dollop of sweet vanilla cream cheese frosting.',
    price: '$5.50',
    tags: ['Stuffed', 'Sweet'],
    image: 'https://picsum.photos/seed/cookie4/600/400',
  },
  {
    id: 5,
    name: 'Oatmeal Raisin Pecan',
    description: 'Chewy, spiced oatmeal cookie loaded with plump raisins and toasted pecans.',
    price: '$4.00',
    tags: ['Classic', 'Chewy'],
    image: 'https://picsum.photos/seed/cookie5/600/400',
  },
  {
    id: 6,
    name: 'S\'mores Campfire',
    description: 'Graham cracker dough packed with milk chocolate chunks and a massive toasted marshmallow center.',
    price: '$6.00',
    tags: ['Gooey', 'Fan Favorite'],
    image: 'https://picsum.photos/seed/cookie6/600/400',
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span className="font-bold">Our Artisanal Menu</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Baked to Perfection
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our most popular, handcrafted cookies. Each batch is made from scratch daily using only the finest ingredients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight pr-4">
                    {item.name}
                  </h3>
                  <span className="text-xl font-display font-bold text-pink-500 dark:text-pink-400">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                
                <a 
                  href="#order"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-4 rounded-xl font-bold hover:bg-pink-500 hover:text-white dark:hover:bg-pink-600 transition-colors group/btn"
                >
                  <ShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
