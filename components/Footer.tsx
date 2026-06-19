import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-none">
                  Rainbow Unicorn
                </span>
                <span className="text-xs text-primary font-medium tracking-widest uppercase mt-1">
                  Exim Services
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your reliable partner for sourcing premium natural food powders from India. Processed hygienically, exported globally.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products Catalog</a></li>
              <li><a href="#quality" className="text-gray-400 hover:text-white transition-colors">Quality Standards</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Top Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Spinach & Vegetable Powders</li>
              <li>Tomato & Condiment Powders</li>
              <li>Garlic & Ginger Powders</li>
              <li>Amla & Jamun Supplements</li>
              <li>All Gravy Mixes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Export Compliance</li>
              <li>Shipping Policy</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rainbow Unicorn Exim Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
