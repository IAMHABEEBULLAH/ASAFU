
import React from 'react';
import { ServiceCategory } from '../types';

const services = [
  {
    title: ServiceCategory.ARCHITECTURE,
    description: "Our design philosophy merges aesthetic brilliance with structural integrity, creating spaces that inspire.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    image: "https://picsum.photos/seed/arch/400/300"
  },
  {
    title: ServiceCategory.CONSTRUCTION,
    description: "From heavy-duty civil infrastructure to luxury high-rises, we build with precision and safety as our foundation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    image: "https://picsum.photos/seed/constr/400/300"
  },
  {
    title: ServiceCategory.LOGISTICS,
    description: "Streamlined supply chain management, warehousing, and worldwide freight solutions for the modern economy.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    image: "https://picsum.photos/seed/logi/400/300"
  },
  {
    title: ServiceCategory.ESTATE_MANAGEMENT,
    description: "Maximizing the value of property portfolios through expert maintenance, strategic leasing, and asset growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    image: "https://picsum.photos/seed/estate/400/300"
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Capabilities</h2>
        <h3 className="text-4xl font-serif font-bold text-slate-900">Multidisciplinary Excellence</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We leverage synergies between our divisions to deliver projects that are faster, better, and more sustainable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 border border-slate-100">
            <div className="relative h-48 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2.5 rounded-xl text-blue-600 shadow-sm">
                {service.icon}
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h4 className="text-xl font-bold text-slate-900">{service.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              <button className="text-blue-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                Learn More <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
