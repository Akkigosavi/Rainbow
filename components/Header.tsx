'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white/50 backdrop-blur-sm shadow-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-2xl text-gray-900 leading-none">
                Rainbow Unicorn
              </span>
              <span className="text-xs text-primary font-medium tracking-widest uppercase mt-1">
                Exim Services
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-800 hover:text-primary font-medium transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex gap-4">
            <a href="#quote" className="bg-primary text-white border border-primary px-6 py-2 rounded-full font-medium hover:bg-secondary transition-colors">
              Request Quote
            </a>
          </div>

          <button className="md:hidden text-gray-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 border-t border-gray-100"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-3 border-b border-gray-50 last:border-0 hover:text-primary">
              {link.name}
            </a>
          ))}
          <a href="#quote" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary flex justify-center text-white text-center px-6 py-3 rounded-full font-medium mt-2">
            Request Quote
          </a>
        </motion.div>
      )}
    </header>
  );
}
