
import React from 'react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, Horizon Developments",
    content: "ASAFU Group transformed our vision into a landmark reality. Their architecture team is world-class, but it's their estate management that adds long-term value.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Director of Operations, Global Logistics Hub",
    content: "Seamless logistics is the backbone of our business. ASAFU's supply chain solutions are robust, data-driven, and incredibly reliable. They are true partners.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Elena Rodriguez",
    role: "Chief Architect, Urban Planning Dept",
    content: "Collaborating with ASAFU on the Azure Towers project was a masterclass in modern construction. They respect the design while pushing structural boundaries.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Testimonials</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">What our partners say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed text-lg">"{t.content}"</p>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
