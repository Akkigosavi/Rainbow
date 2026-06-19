'use client';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Handshake, Leaf, Globe, Banknote } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Leaf,
      title: "Expert Product Specialization",
      desc: "We source and process premium ingredients under strict quality standards to ensure exceptional purity and flavor."
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Manufacturing",
      desc: "All our food powders are processed under highly controlled environments complying with global safety standards."
    },
    {
      icon: Globe,
      title: "Global Shipping Network",
      desc: "Robust logistics and worldwide delivery support ensuring your consignments arrive safely and on time."
    },
    {
      icon: Truck,
      title: "Efficient Export Management",
      desc: "We provide complete export support from initial procurement to customs clearance and final delivery."
    },
    {
      icon: Banknote,
      title: "Competitive Pricing",
      desc: "Benefiting from direct manufacturing capabilities, we offer the best value pricing for bulk international buyers."
    },
    {
      icon: Handshake,
      title: "Reliable Partnership",
      desc: "We focus on building long-term business relationships structured around trust, consistency, and mutual growth."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <div className="w-20 h-1.5 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 text-balance">
            Your trusted partner in global sourcing for premium natural ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-transparent hover:border-gold/30"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
