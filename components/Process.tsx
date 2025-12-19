
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Strategic Consulting",
    description: "We begin by understanding the unique requirements of the project, whether it's a structural design or a global supply chain challenge."
  },
  {
    number: "02",
    title: "Innovative Design",
    description: "Our architects and systems engineers create optimized blueprints using state-of-the-art modeling and simulation tools."
  },
  {
    number: "03",
    title: "Precision Execution",
    description: "From construction to logistics delivery, our specialized teams execute with a safety-first and quality-driven mindset."
  },
  {
    number: "04",
    title: "Lifecycle Management",
    description: "Our estate management and maintenance divisions ensure the long-term sustainability and performance of every asset."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Method</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              A Unified Approach to <br/>
              <span className="text-blue-600 italic">Complex Challenges.</span>
            </h3>
          </div>
          <p className="text-slate-500 lg:max-w-md text-lg">
            We provide an end-to-end ecosystem that simplifies the most ambitious projects through cross-departmental synergy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-slate-200 -z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className="bg-white border border-slate-100 p-8 rounded-3xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center rounded-2xl text-2xl font-bold mb-6 group-hover:bg-blue-600 transition-colors">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
