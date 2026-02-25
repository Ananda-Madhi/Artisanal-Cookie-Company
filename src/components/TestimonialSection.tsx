import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Creative geniuses who listen, understand, and craft captivating cookies - a bakery that truly understands our cravings.",
    name: "Gabrielle Williams",
    role: "CEO and Co-founder of ABC Company",
    image: "https://picsum.photos/seed/gabrielle/100/100"
  },
  {
    id: 2,
    text: "Exceeded our expectations with innovative flavors that brought our vision to life - a truly remarkable cookie experience.",
    name: "Samantha Johnson",
    role: "CEO and Co-founder of ABC Company",
    image: "https://picsum.photos/seed/samantha/100/100"
  },
  {
    id: 3,
    text: "Their ability to capture our brand essence in every bite is unparalleled - an invaluable culinary collaborator.",
    name: "Isabella Rodriguez",
    role: "CEO and Co-founder of ABC Company",
    image: "https://picsum.photos/seed/isabella/100/100"
  },
  {
    id: 4,
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our event's success.",
    name: "Natalie Martinez",
    role: "CEO and Co-founder of ABC Company",
    image: "https://picsum.photos/seed/natalie/100/100"
  },
  {
    id: 5,
    text: "A refreshing and imaginative bakery that consistently delivers exceptional results - highly recommended for any occasion.",
    name: "Victoria Thompson",
    role: "CEO and Co-founder of ABC Company",
    image: "https://picsum.photos/seed/victoria/100/100"
  },
  {
    id: 6,
    text: "Their team's artistic flair and strategic approach resulted in remarkable treats - a reliable creative partner.",
    name: "John Peter",
    role: "CEO and Co-founder of ABC Company",
    image: "https://picsum.photos/seed/john/100/100"
  }
];

// Duplicate for infinite scroll effect
const allTestimonials = [...testimonials, ...testimonials];

export default function TestimonialSection() {
  return (
    <section id="reviews" className="py-24 bg-[#fafafa] dark:bg-gray-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
          <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-1">
            <Star className="w-3 h-3 fill-current text-white" />
          </div>
          <span>Rated 4.9/5 by over 10,000 cookie lovers</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Words of praise from others about our cookies.
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex flex-col gap-6 w-full max-w-[100vw] overflow-hidden">
        {/* Row 1 */}
        <div className="flex w-max animate-marquee hover:pause gap-6 px-3">
          {allTestimonials.slice(0, 6).map((testimonial, idx) => (
            <div 
              key={`row1-${idx}`}
              className="w-[400px] flex-shrink-0 bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-600 dark:text-blue-500 mb-6 fill-current opacity-80" />
                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed font-medium mb-8">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (Reverse) */}
        <div className="flex w-max animate-marquee-reverse hover:pause gap-6 px-3">
          {allTestimonials.slice(6, 12).map((testimonial, idx) => (
            <div 
              key={`row2-${idx}`}
              className="w-[400px] flex-shrink-0 bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-600 dark:text-blue-500 mb-6 fill-current opacity-80" />
                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed font-medium mb-8">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
