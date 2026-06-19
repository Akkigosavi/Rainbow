'use client';
import { motion } from 'motion/react';
import { MessageSquareText, Search, ClipboardCheck, Factory, Ship } from 'lucide-react';

export default function Process() {
  const steps = [
    { icon: MessageSquareText, title: "Inquiry", desc: "First contact and understanding your bulk requirements." },
    { icon: Search, title: "Product Consultation", desc: "Tailoring specifications to your industrial needs." },
    { icon: ClipboardCheck, title: "Sample Approval", desc: "Sending samples for your quality testing." },
    { icon: Factory, title: "Production & Packaging", desc: "Hygienic processing and export-grade packing." },
    { icon: Ship, title: "International Shipping", desc: "Dispatch and customs documentation handling." }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Export Process</h2>
          <div className="w-20 h-1.5 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 text-balance">
            Our streamlined 5-step export methodology ensures transparency and timely deliveries.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full z-0"></div>
          
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-gold text-primary shadow-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative">
                  <step.icon className="w-6 h-6" />
                  <div className="absolute -top-3 -right-3 w-7 h-7 bg-gold rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
