
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Architecture',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you shortly.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-50 rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-12 lg:p-20 bg-blue-600 text-white space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <h2 className="text-4xl font-serif font-bold">Partner with the Leaders.</h2>
          <p className="text-blue-100 text-lg">
            Ready to bring your project to life? Our specialized teams are standing by to provide the expertise you need.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-blue-200 uppercase tracking-widest">Call Us</div>
                <div className="text-lg font-medium">+1 (234) 567-8900</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-blue-200 uppercase tracking-widest">Visit Us</div>
                <div className="text-lg font-medium">ASAFU Plaza, Financial District, NY</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-12 lg:p-20 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all outline-none"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all outline-none"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Service Inquiry</label>
              <select 
                className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all outline-none appearance-none"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option>Architecture</option>
                <option>Construction</option>
                <option>Logistics</option>
                <option>Estate Management</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Message</label>
              <textarea 
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:border-blue-600 focus:ring-0 transition-all outline-none resize-none"
                placeholder="Tell us about your project goals..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
