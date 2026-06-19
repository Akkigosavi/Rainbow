'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Package } from 'lucide-react';

const products = [
  {
    name: "Spinach Powder",
    desc: "Natural green powder made from dehydrated spinach leaves.",
    apps: "Pasta, smoothies, baking, soup mixes",
    seed: "spinach"
  },
  {
    name: "All Gravy Mix Powder",
    desc: "Ready-to-use blend for rich and flavorful gravies.",
    apps: "Curries, instant meals, restaurant use",
    seed: "spicemix"
  },
  {
    name: "Tomato Powder",
    desc: "Premium dehydrated tomato powder with vibrant color.",
    apps: "Sauces, seasonings, snacks, soups",
    seed: "tomato_powder"
  },
  {
    name: "Mint Powder",
    desc: "Fresh mint leaves processed hygienically for flavor retention.",
    apps: "Beverages, chutneys, marinades, dips",
    seed: "mint"
  },
  {
    name: "Garlic Powder",
    desc: "Strong aroma and flavor retention from premium garlic bulbs.",
    apps: "Seasonings, meat rubs, garlic bread, sauces",
    seed: "garlic"
  },
  {
    name: "Ginger Powder",
    desc: "Finely ground fresh ginger roots with therapeutic properties.",
    apps: "Tea blends, baking, Asian cuisine, wellness",
    seed: "ginger"
  },
  {
    name: "Beetroot Powder",
    desc: "Rich color and nutritional value from select beetroots.",
    apps: "Natural food coloring, health drinks, cosmetics",
    seed: "beetroot"
  },
  {
    name: "Amla Powder",
    desc: "Natural Vitamin C source processed from Indian gooseberry.",
    apps: "Ayurvedic products, supplements, hair care",
    seed: "amla"
  },
  {
    name: "Jamun Powder",
    desc: "Traditional wellness ingredient made from dried jamun seeds.",
    apps: "Diabetic supplements, herbal formulas",
    seed: "jamun"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Product Categories</h2>
          <div className="w-20 h-1.5 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 text-balance">
            Explore our extensive range of high-quality dehydrated natural powders suitable for diverse industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex flex-col h-full"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                <Image
                  src={`https://picsum.photos/seed/${product.seed}/600/450`}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.desc}</p>
                
                <div className="border-t border-gray-100 pt-4 mb-6 space-y-2">
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider w-24 shrink-0">Applications:</span>
                    <span className="text-sm text-gray-700">{product.apps}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Package className="w-4 h-4 text-primary" />
                    <span className="font-medium text-gray-900">MOQ:</span> 500 Kg
                  </div>
                </div>
                
                <a href={`#quote?product=${encodeURIComponent(product.name)}`} className="w-full inline-flex justify-center items-center gap-2 bg-primary/10 text-primary px-4 py-2.5 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors">
                  Request Quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
