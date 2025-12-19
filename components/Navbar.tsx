
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Works' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'} font-serif`}>
            ASAFU <span className="text-blue-600 font-sans font-medium text-sm ml-1 uppercase tracking-widest">Group</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeTab === item.id ? 'text-blue-600' : 'text-slate-600'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu trigger could be added here */}
      </div>
    </nav>
  );
};

export default Navbar;
