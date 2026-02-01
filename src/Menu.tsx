import React, { useState, useEffect } from 'react';
import { useMenu } from './MenuContext';
import { useNavigate } from 'react-router-dom';
// import logo from './assets/logo.png';

export const Menu: React.FC = () => {
  const { categories } = useMenu();
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.titleEn || '');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
        setActiveCategory(categories[0].titleEn);
    }
  }, [categories, activeCategory]);

  const scrollToCategory = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
    const element = document.getElementById(categoryTitle);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 animate-gradient-xy bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50">

      {/* Decorative Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/30 blur-[100px] animate-pulse"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-200/30 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-pink-100/30 blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-header shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Area */}
            <div className="relative group" onDoubleClick={() => navigate('/admin')}>
              <div className="absolute inset-0 bg-primary rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              {/* <img 
                    src={logo} 
                    alt="Ultimate Restocafe Logo" 
                    className="relative w-16 h-16 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                  /> */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl ring-2 ring-white/50 cursor-pointer">
                U
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary leading-tight glow-text tracking-tight">ULTIMATE</h1>
              <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">RESTOCAFE</p>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="overflow-x-auto whitespace-nowrap px-4 pb-4 hide-scrollbar">
          <div className="flex space-x-3 py-1 px-1">
            {categories.map((category) => (
              <button
                key={category.titleEn}
                onClick={() => scrollToCategory(category.titleEn)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-out ${activeCategory === category.titleEn
                  ? 'bg-primary text-white shadow-[0_0_15px_rgb(var(--color-primary)/0.4)] scale-105 ring-2 ring-primary/30 ring-offset-2'
                  : 'bg-white/80 text-gray-600 hover:bg-white hover:text-primary hover:shadow-md border border-white/50'
                  }`}
              >
                {category.titleEn}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 pb-24 max-w-2xl">
        {categories.map((category) => (
          <section key={category.titleEn} id={category.titleEn} className="mb-10 scroll-mt-40">
            <div className="flex items-end gap-4 mb-6 px-2">
              <h2 className="text-2xl font-bold text-primary drop-shadow-sm">{category.titleEn}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent mb-2"></div>
              <h2 className="text-xl font-arabic font-bold text-gray-500">{category.titleAr}</h2>
            </div>

            <div className="grid gap-4">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-5 rounded-2xl group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-default relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-primary transition-colors">{item.nameEn}</h3>
                      <p className="text-gray-600 font-arabic text-lg leading-relaxed">{item.nameAr}</p>
                    </div>
                    {item.price && (
                      <div className="flex flex-col items-end">
                        <span className="font-bold text-primary text-xl bg-primary/5 px-3 py-1 rounded-lg border border-primary/10 shadow-sm">
                          {item.price}
                        </span>
                        <span className="text-[10px] text-gray-400 font-bold mt-1 tracking-wider">AED</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-white bg-primary mt-12 pb-12">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mb-6"></div>
        <p className="font-bold text-xl tracking-widest mb-1">ULTIMATE</p>
        <p className="text-xs text-white/70 tracking-[0.3em] uppercase">RESTOCAFE</p>
      </footer>
    </div>
  );
};
