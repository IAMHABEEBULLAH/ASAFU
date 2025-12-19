
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="text-3xl font-serif font-bold tracking-tighter">
            ASAFU <span className="text-blue-500 font-sans font-medium text-xs ml-1 uppercase tracking-widest block mt-1 opacity-60">Group of Companies</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Pioneering excellence across architecture, construction, logistics, and estate management. Building tomorrow's infrastructure with today's innovation and precision.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            {[1, 2, 3, 4].map((i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-800 group">
                <div className="w-4 h-4 bg-slate-400 group-hover:bg-white rounded-sm transition-colors"></div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Quick Links</h4>
          <ul className="space-y-4 text-slate-500 text-sm font-medium">
            <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition-colors">Our Services</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Our Services</h4>
          <ul className="space-y-4 text-slate-500 text-sm font-medium">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Architecture & Design</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Civil Construction</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Global Logistics</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Estate Management</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Contact Us</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 mt-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              </span>
              <span>123 Industrial Way, Suite 500<br/>New York, NY 10001</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              <span>+1 (212) 555-0198</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" /></svg>
              </span>
              <span>contact@asafugroup.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} ASAFU Group of Companies. All rights reserved.</p>
        <div className="flex space-x-6 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
