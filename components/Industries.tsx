'use client';
import { motion } from 'motion/react';
import { Factory, Pill, PlusSquare, Coffee, Utensils, Wheat, Tag, Users, PackageOpen } from 'lucide-react';

export default function Industries() {
  const industries = [
    { icon: Factory, name: "Food Processing" },
    { icon: Pill, name: "Nutraceuticals" },
    { icon: PlusSquare, name: "Health Supplements" },
    { icon: Coffee, name: "Beverage Industry" },
    { icon: Utensils, name: "HoReCa" },
    { icon: Wheat, name: "Spice Manufacturers" },
    { icon: Tag, name: "Private Label Brands" },
    { icon: Users, name: "Importers & Distributors" },
    { icon: PackageOpen, name: "Organic Product Companies" }
  ];

  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <div className="w-20 h-1.5 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-primary-100 text-balance opacity-90 mx-auto max-w-2xl">
            Our premium natural powders cater to a wide spectrum of global industries demanding high standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 justify-center">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white border border-white/10 hover:border-white transition-all group ${index === 8 ? 'lg:col-start-3' : ''}`}
            >
              <industry.icon className="w-10 h-10 mb-4 text-gold group-hover:text-primary transition-colors" />
              <span className="font-semibold text-sm group-hover:text-primary transition-colors">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
