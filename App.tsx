
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectShowcase from './components/ProjectShowcase';
import StatsSection from './components/StatsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50">
      <Navbar activeTab={activeTab} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-20 bg-white">
          <Services />
        </section>

        <StatsSection />

        <section id="projects" className="py-20 bg-slate-50">
          <ProjectShowcase />
        </section>

        <section id="about" className="py-20 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/asafu-about/800/600" 
                  alt="About ASAFU" 
                  className="rounded-2xl shadow-2xl z-10 relative"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-400 rounded-full blur-3xl opacity-20"></div>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-serif font-bold italic">Building the Future, <span className="text-blue-400 not-italic">Delivering Today.</span></h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  ASAFU Group of Companies is a multi-disciplinary conglomerate dedicated to excellence across the built environment and global supply chains. Founded on the principles of integrity and innovation, we provide holistic solutions from architectural blueprints to the final delivery of goods.
                </p>
                <div className="space-y-4">
                  {[
                    "Global Logistics Network reaching 50+ countries",
                    "Award-winning Architecture and Design",
                    "Safety-First Construction Standards",
                    "Comprehensive Estate Portfolio Management"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <ContactForm />
        </section>
      </main>

      <Footer />
      
      {/* Persistent AI Assistant */}
      <AIConsultant />
    </div>
  );
};

export default App;
