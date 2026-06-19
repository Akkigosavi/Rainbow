'use client';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Building } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="w-20 h-1.5 bg-gold rounded-full mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-10">
              For bulk export inquiries, product samples, or catalog requests, please reach out to our team. We aim to respond to all international inquiries within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Company Details</h4>
                  <p className="text-gray-700 font-semibold">Rainbow Unicorn Exim Services</p>
                  <p className="text-gray-600">Director: Dhananjay Khange</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Phone / WhatsApp</h4>
                  <p className="text-gray-700">+91 93590 73307</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Email directly</h4>
                  <a href="mailto:rainbowunicorneximservices@outlook.com" className="text-primary hover:underline">
                    rainbowunicorneximservices@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Office Address</h4>
                  <p className="text-gray-700 leading-relaxed">
                    D-201, Suyash Nisarg,<br />
                    Handewadi Road, Near JSPM College Corner,<br />
                    Hadapsar, Pune – 411028,<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            id="quote"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Bulk Export Quote</h3>
            <p className="text-gray-600 mb-8">Fill out the form below to get custom pricing based on your requirements.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input type="text" id="company" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (with code)</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="+1 234 567 8900" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input type="text" id="country" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="United States" />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product Requirement</label>
                  <select id="product" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white">
                    <option value="">Select Product...</option>
                    <option value="Spinach Powder">Spinach Powder</option>
                    <option value="All Gravy Mix">All Gravy Mix Powder</option>
                    <option value="Tomato Powder">Tomato Powder</option>
                    <option value="Mint Powder">Mint Powder</option>
                    <option value="Garlic Powder">Garlic Powder</option>
                    <option value="Ginger Powder">Ginger Powder</option>
                    <option value="Beetroot Powder">Beetroot Powder</option>
                    <option value="Amla Powder">Amla Powder</option>
                    <option value="Jamun Powder">Jamun Powder</option>
                    <option value="Multiple/Other">Multiple / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Expected Quantity (Kg / Tons)</label>
                <input type="text" id="quantity" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="e.g., 1000 Kgs" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Special Requirements</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="We need this for..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2 mt-4"
              >
                {formStatus === 'idle' && <><Send className="w-5 h-5" /> Get Custom Pricing</>}
                {formStatus === 'submitting' && <span>Sending Request...</span>}
                {formStatus === 'success' && <span>Request Sent Successfully!</span>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
