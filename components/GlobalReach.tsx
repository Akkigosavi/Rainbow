'use client';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function GlobalReach() {
  const regions = [
    "USA", "Canada", "UK", "Germany", "France", 
    "UAE", "Saudi Arabia", "Australia", "New Zealand", "South Africa"
  ];

  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Reach</h2>
          <div className="w-20 h-1.5 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 text-balance">
            Exporting premium Indian natural powders to industrial buyers across the globe.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Export Destinations</h3>
              <div className="grid grid-cols-2 gap-4">
                {regions.map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium text-gray-800">{region}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-cream rounded-2xl border border-gold/20">
                <p className="text-sm text-gray-700 italic">
                  * We continuously expand our network. If your country is not listed, contact us for shipping feasibility and compliance.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] bg-cream rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden">
               {/* Decorative abstract map representation */}
               <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/map/800/600')] bg-cover bg-center mix-blend-multiply"></div>
               <div className="z-10 text-center">
                  <GlobeIcon className="w-24 h-24 text-primary/50 mx-auto mb-4 animate-[spin_20s_linear_infinite]" />
                  <span className="text-xl font-bold text-gray-500 uppercase tracking-widest">Global Network</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      <path d="M2 12h20"/>
    </svg>
  );
}
