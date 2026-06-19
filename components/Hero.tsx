'use client';
import { motion } from 'motion/react';
import { ArrowRight, Download, ShieldCheck, Globe, LeafyGreen, Truck } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary/5">
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4">
        <div className="w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/4">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <LeafyGreen className="w-4 h-4" />
              <span>Let&apos;s Grow Together</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Premium Natural <span className="text-primary text-balance">Powder Solutions</span> for Global Markets
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-xl text-balance">
              We export high-quality natural food powders processed under hygienic standards for food, nutraceutical, wellness, and industrial applications worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#quote" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-secondary transition-all hover:shadow-lg hover:-translate-y-0.5">
                Request Bulk Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#products" className="inline-flex justify-center items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-medium hover:border-primary hover:text-primary transition-all">
                Download Catalog <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-200/60">
              {[
                { icon: ShieldCheck, text: "Premium Export Quality" },
                { icon: LeafyGreen, text: "Hygienic Processing" },
                { icon: Truck, text: "Global Supply Chain" },
                { icon: Globe, text: "Trusted by Buyers" }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start sm:flex-row gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-yellow-700" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center sm:text-left">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://picsum.photos/seed/spices1/800/800" 
                alt="Premium natural food powders arranged in bowls"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce hover:animate-none">
              <div className="bg-green-100 p-3 rounded-full">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Exporting to</p>
                <p className="text-lg font-bold text-gray-900">15+ Countries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
