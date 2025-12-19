
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectShowcase from './components/ProjectShowcase';
import StatsSection from './components/StatsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import LogoCloud from './components/LogoCloud';
import Process from './components/Process';
import Testimonials from './components/Testimonials';

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

        <LogoCloud />

        <section id="services" className="py-24 bg-white">
          <Services />
        </section>

        <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl group-hover:bg-blue-600/30 transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                  alt="ASAFU Headquarters" 
                  className="rounded-2xl shadow-2xl z-10 relative object-cover w-full h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 glass-effect p-8 rounded-2xl shadow-2xl border-white/10 hidden md:block">
                  <p className="text-slate-900 font-serif text-2xl font-bold leading-tight">
                    "Excellence is not an act, but a habit."
                  </p>
                  <p className="text-blue-600 font-bold text-sm mt-2 uppercase tracking-widest">— ASAFU Creed</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Our Legacy</h2>
                  <h3 className="text-5xl font-serif font-bold leading-tight">
                    The intersection of <br/>
                    <span className="text-blue-400">vision</span> and <span className="text-slate-400 italic">execution.</span>
                  </h3>
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  ASAFU Group of Companies is a multi-disciplinary conglomerate dedicated to excellence across the built environment and global supply chains. We believe that true progress is achieved when bold architecture meets relentless engineering and precision logistics.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: "Founded", val: "1998" },
                    { label: "Global Offices", val: "14" },
                    { label: "Experts", val: "2,500+" },
                    { label: "Satisfaction", val: "99.9%" }
                  ].map((stat, i) => (
                    <div key={i} className="border-l-2 border-blue-600 pl-4 py-1">
                      <div className="text-2xl font-bold">{stat.val}</div>
                      <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button className="flex items-center space-x-3 text-white font-bold group">
                  <span className="border-b-2 border-blue-600 pb-1 group-hover:text-blue-400 transition-colors">Download Corporate Profile</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <Process />

        <StatsSection />

        <section id="projects" className="py-24 bg-slate-50">
          <ProjectShowcase />
        </section>

        <Testimonials />

        <section id="contact" className="py-24 bg-white">
          <ContactForm />
        </section>
      </main>

      <Footer />
      <AIConsultant />
    </div>
  );
};

export default App;
