
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '2020', value: 340 },
  { name: '2021', value: 410 },
  { name: '2022', value: 480 },
  { name: '2023', value: 550 },
  { name: '2024', value: 620 },
];

const StatsSection: React.FC = () => {
  return (
    <div className="bg-slate-900 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Constant Growth, <br/>
              <span className="text-blue-400">Proven Performance.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Our market share and project completion rates have shown consistent year-on-year growth, reflecting our commitment to client satisfaction and operational efficiency.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-white">98%</div>
                <div className="text-sm text-slate-500 uppercase font-bold tracking-widest mt-2">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">2.4M</div>
                <div className="text-sm text-slate-500 uppercase font-bold tracking-widest mt-2">Sq. Ft. Managed</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
            <h4 className="text-white font-bold mb-6 text-center">Annual Project Completions</h4>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{fill: 'transparent'}} 
                    contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff'}}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#3b82f6' : '#334155'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
