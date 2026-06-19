'use client';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Rainbow Unicorn Exim Services has been our most reliable supplier for dehydrated ginger and garlic powders. Their quality is consistent batch after batch.",
      author: "Purchasing Director",
      company: "European Spice Blends Co.",
      type: "Food Manufacturer"
    },
    {
      text: "The color and flavor retention in their tomato powder is exceptional. Highly recommend their services for bulk sourcing.",
      author: "Sourcing Manager",
      company: "Global Nutraceuticals LLC",
      type: "Distributor"
    },
    {
      text: "Excellent documentation support and timely shipments. They make importing from India a seamless experience.",
      author: "Operations Head",
      company: "Middle East Trading Group",
      type: "Importer"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by International Buyers</h2>
          <div className="w-20 h-1.5 bg-gold rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream p-8 rounded-3xl relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">&quot;{testimonial.text}&quot;</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm font-medium text-primary mb-1">{testimonial.company}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
