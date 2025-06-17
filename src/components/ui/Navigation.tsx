'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from '@/types';
import { scrollToSection } from '@/lib/utils';
import { useActiveSection } from '@/hooks/useActiveSection';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { name: 'HOME', id: 'hero' },
    { name: 'SERVICES', id: 'services' },
    { name: 'CONTACT', id: 'contact' },
    { name: 'ABOUT', id: 'about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md bg-white/90 shadow-lg border-b border-gray-300'
            : 'bg-white/20 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 max-w-[60%] sm:max-w-none">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/logo.png"
                  alt="Legendary Hustlers"
                  width={200}
                  height={60}
                  className="h-8 sm:h-10 md:h-12 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.id)}
                    className={`font-tactical px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 tracking-wider ${
                      activeSection === item.id
                        ? 'bg-yellow-400 text-black border-2 border-yellow-600'
                        : isScrolled 
                          ? 'text-gray-800 hover:bg-yellow-400/20 hover:text-yellow-600' 
                          : 'text-gray-800 hover:bg-white/20 hover:text-yellow-600'
                    }`}
                    aria-label={`Navigate to ${item.name.toLowerCase()} section`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-3 transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-800 hover:bg-yellow-400/20' 
                    : 'text-gray-800 hover:bg-white/20'
                }`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-300 shadow-xl md:hidden">
          <div className="px-6 py-8 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-6 py-4 text-lg font-tactical font-bold transition-all duration-300 tracking-wider ${
                  activeSection === item.id
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-800 hover:text-yellow-600 hover:bg-yellow-400/20'
                }`}
                aria-label={`Navigate to ${item.name.toLowerCase()} section`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation; 