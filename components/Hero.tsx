
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-100 opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Defining Excellence Since 1998</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1]">
            Integrated <span className="text-blue-600">Solutions</span> for a Better World.
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            ASAFU Group bridges the gap between visionary architecture, industrial-grade construction, and seamless global logistics.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-xl">
              Explore Our Work
            </button>
            <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
              Our Services
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative h-[600px]">
          <div className="absolute inset-0 bg-blue-600/5 rounded-[40px] transform rotate-3"></div>
          <img 
            src="https://picsum.photos/seed/asafu-main/1200/1600" 
            alt="Modern Architecture" 
            className="absolute inset-0 w-full h-full object-cover rounded-[40px] shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-700"
          />
          {/* Floating stat card */}
          <div className="absolute -bottom-10 -left-10 glass-effect p-6 rounded-2xl shadow-xl space-y-2 max-w-[200px] border-blue-100">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-tighter">Completed Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
