
import React, { useState } from 'react';
import { ServiceCategory, Project } from '../types';

const projects: Project[] = [
  { id: '1', title: 'The Azure Towers', category: ServiceCategory.ARCHITECTURE, description: 'A state-of-the-art residential complex featuring vertical forests, smart glass technology, and ultra-high efficiency energy systems. Designed to harmonize urban living with nature.', imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200', year: '2023' },
  { id: '2', title: 'Port of Genesis', category: ServiceCategory.LOGISTICS, description: 'A fully automated deep-water container terminal. We implemented AI-driven crane management and a 5G logistics network to reduce vessel turnaround time by 40%.', imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200', year: '2022' },
  { id: '3', title: 'Eco-Vista Estate', category: ServiceCategory.ESTATE_MANAGEMENT, description: 'Management of a premium 500-unit gated community. Our services include smart security integration, landscape maintenance, and comprehensive resident experience portals.', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', year: '2024' },
  { id: '4', title: 'Grand Central Bridge', category: ServiceCategory.CONSTRUCTION, description: 'A critical infrastructure project connecting the financial district with the industrial zone. Features anti-seismic bearings and advanced high-performance concrete.', imageUrl: 'https://images.unsplash.com/photo-1449156006077-9740afb61df9?auto=format&fit=crop&q=80&w=1200', year: '2021' },
  { id: '5', title: 'Industrial Hub X', category: ServiceCategory.CONSTRUCTION, description: 'A sprawling manufacturing facility designed for flexible production lines. Includes a massive solar array and recycled water filtration systems.', imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200', year: '2023' },
  { id: '6', title: 'Skyline Mall', category: ServiceCategory.ARCHITECTURE, description: 'A retail destination redefining the shopping experience with an open-concept atrium and a rooftop community park that harvests rainwater for cooling.', imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=1200', year: '2024' },
];

const ProjectShowcase: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ['All', ...Object.values(ServiceCategory)];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Works</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Portfolio of Excellence</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-slate-200 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-bold flex items-center">
                  View Case Study <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">{project.category}</span>
                <span className="text-xs font-medium text-slate-400">{project.year}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="bg-white w-full max-w-5xl max-h-full overflow-y-auto rounded-[40px] relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-20"
            >
              <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-[400px] lg:h-auto">
                <img src={selectedProject.imageUrl} className="w-full h-full object-cover" alt={selectedProject.title} />
              </div>
              <div className="lg:w-1/2 p-8 md:p-16 space-y-8">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {selectedProject.category} Division
                  </span>
                  <h2 className="text-4xl font-serif font-bold text-slate-900">{selectedProject.title}</h2>
                  <div className="text-slate-400 font-medium">Completed: {selectedProject.year}</div>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</div>
                    <div className="text-slate-900 font-bold">Operational</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</div>
                    <div className="text-slate-900 font-bold">International</div>
                  </div>
                </div>

                <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center space-x-2">
                  <span>Enquire About Similar Works</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
