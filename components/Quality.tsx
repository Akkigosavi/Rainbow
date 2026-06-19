'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function Quality() {
  const standards = [
    "Premium Raw Material Selection",
    "Hygienic Processing",
    "Quality Testing",
    "Moisture Control",
    "Export Packaging",
    "Consistent Batch Quality"
  ];

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality You Can Trust
            </h2>
            <div className="w-20 h-1.5 bg-gold rounded-full mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-8 text-balance">
              Quality is the cornerstone of Rainbow Unicorn Exim Services. We maintain rigorous standards at every step of our supply chain—from sourcing the finest fresh ingredients to the final export packaging. 
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {standards.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium text-gray-900">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {/* Placeholders for certificates */}
              <div className="w-24 h-24 bg-cream rounded-xl flex items-center justify-center border border-gray-200">
                <span className="text-xs font-bold text-gray-400 text-center uppercase">ISO<br/>Certified</span>
              </div>
              <div className="w-24 h-24 bg-cream rounded-xl flex items-center justify-center border border-gray-200">
                <span className="text-xs font-bold text-gray-400 text-center uppercase">GMP<br/>Standard</span>
              </div>
              <div className="w-24 h-24 bg-cream rounded-xl flex items-center justify-center border border-gray-200">
                <span className="text-xs font-bold text-gray-400 text-center uppercase">Export<br/>Quality</span>
              </div>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image 
                  src="https://picsum.photos/seed/quality1/400/500" 
                  alt="Quality check"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="https://picsum.photos/seed/quality2/400/500" 
                  alt="Hygienic processing"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
