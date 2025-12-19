
import React from 'react';

const LogoCloud: React.FC = () => {
  const partners = [
    "Global Dynamics", "BuildSmart", "UrbanFlow", "EcoStructures", "LogiTech Solutions", "Prime Estates"
  ];

  return (
    <div className="bg-white py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">
          Trusted by Industry Leaders Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, idx) => (
            <div key={idx} className="text-xl font-bold font-serif text-slate-900 tracking-tighter">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
