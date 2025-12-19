
import React, { useState } from 'react';
import { ServiceCategory, Project } from '../types';

const projects: Project[] = [
  { id: '1', title: 'The Azure Towers', category: ServiceCategory.ARCHITECTURE, description: 'Futuristic residential complex with vertical gardens.', imageUrl: 'https://picsum.photos/seed/proj1/800/600', year: '2023' },
  { id: '2', title: 'Port of Genesis', category: ServiceCategory.LOGISTICS, description: 'Automated container terminal for ultra-large cargo ships.', imageUrl: 'https://picsum.photos/seed/proj2/800/600', year: '2022' },
  { id: '3', title: 'Eco-Vista Estate', category: ServiceCategory.ESTATE_MANAGEMENT, description: 'Luxury sustainable community management.', imageUrl: 'https://picsum.photos/seed/proj3/800/600', year: '2024' },
  { id: '4', title: 'Grand Central Bridge', category: ServiceCategory.CONSTRUCTION, description: 'High-speed rail bridge connecting two major cities.', imageUrl: 'https://picsum.photos/seed/proj4/800/600', year: '2021' },
  { id: '5', title: 'Industrial Hub X', category: ServiceCategory.CONSTRUCTION, description: 'Manufacturing facility with AI-driven operations.', imageUrl: 'https://picsum.photos/seed/proj5/800/600', year: '2023' },
  { id: '6', title: 'Skyline Mall', category: ServiceCategory.ARCHITECTURE, description: 'Open-air retail destination with solar roof.', imageUrl: 'https://picsum.photos/seed/proj6/800/600', year: '2024' },
];

const ProjectShowcase: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Object.values(ServiceCategory)];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Works</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">Portfolio of Impact</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{project.category}</span>
                <span className="text-xs font-medium text-slate-400">{project.year}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h4>
              <p className="text-slate-500 text-sm">{project.description}</p>
            </div>
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
