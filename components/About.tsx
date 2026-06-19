'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2, Award, Box, Globe2, TrendingUp, FileText } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Box, text: "Export Ready Products" },
    { icon: Award, text: "Quality Assurance" },
    { icon: TrendingUp, text: "Bulk Supply Capacity" },
    { icon: Globe2, text: "Global Distribution" },
    { icon: CheckCircle2, text: "Competitive Pricing" },
    { icon: FileText, text: "International Doc Support" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="https://picsum.photos/seed/harvest1/800/1000" 
                alt="Agricultural harvest and processing"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 lg:-right-12 w-48 h-48 bg-cream rounded-full border-4 border-white flex items-center justify-center flex-col text-center shadow-lg p-6">
              <span className="text-4xl font-bold text-primary mb-1">100%</span>
              <span className="text-sm font-medium text-gray-600">Natural & Pure Ingredients</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Rainbow Unicorn Exim Services
            </h2>
            <div className="w-20 h-1.5 bg-gold rounded-full mb-8"></div>
            
            <div className="space-y-6 text-lg text-gray-700 mb-10 text-balance">
              <p>
                Rainbow Unicorn Exim Services specializes in manufacturing and exporting premium-quality natural food powders from India. We provide consistent quality, hygienic processing, reliable packaging, and efficient global logistics to meet international standards.
              </p>
              <p>
                Our mission is to help businesses source high-quality natural ingredients with transparency, reliability, and long-term partnership support.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-gray-900">{item.text}</span>
                </div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
