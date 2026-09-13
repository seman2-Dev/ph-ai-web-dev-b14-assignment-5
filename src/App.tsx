import { useState } from 'react';
import { useEffect } from 'react';

import Logo from './assets/logo-text.png';
import bannerImg from './assets/banner-stack.png';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [myStack, setMyStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load technologies data:', err);
        setLoading(false);
      });
  }, []);

  const addToStack = (tech: Technology) => {
    const exists = myStack.some((item) => item.id === tech.id);
    if (exists) return;
    setMyStack((prev) => [...prev, tech]);
  };

  const removeFromStack = (id: string) => {
    setMyStack((prev) => prev.filter((item) => item.id !== id));
  };

  const clearStack = () => {
    setMyStack([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-slate-800 font-sans">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <a href="#home" className="flex items-center">
              <img src={Logo} alt="Dev Stack Logo" className="h-9 w-auto object-contain"/>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2">
              Sign In
            </button>
            <button className="text-sm font-medium text-white bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-95 px-6 py-2 rounded-full transition-all shadow-md shadow-pink-500/10">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-[#0b0f19] leading-[1.12]">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed font-normal">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="px-7 py-3.5 rounded-full text-white font-semibold bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 shadow-md shadow-pink-500/15 hover:opacity-95 transition-opacity text-sm inline-block"
            >
              Explore Technologies
            </a>
            
            <button className="px-7 py-3.5 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img 
            src={bannerImg} 
            alt="Dev Stack Graphic" 
            className="w-full max-w-120 h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </section>

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-[#0b0f19]">
            Explore the{' '}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-slate-500 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 space-y-4">
                <span className="loading loading-spinner loading-lg text-rose-500"></span>
                <p className="text-slate-500 font-medium">Loading technologies...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => {
                  const isAdded = myStack.some((item) => item.id === tech.id);
                  return (
                    <div
                      key={tech.id}
                      className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                          <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-sky-50 text-sky-600 border border-sky-100">
                            {tech.badge}
                          </span>
                        </div>

                        <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>
                        <p className="mt-2 text-sm text-slate-500 line-clamp-3">{tech.description}</p>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3 mb-4">
                          <span className="font-medium bg-slate-100 px-2 py-1 rounded">{tech.category}</span>
                          <span>{tech.difficulty}</span>
                          <span className="flex items-center font-semibold text-amber-500">
                            ★ {tech.rating}
                          </span>
                        </div>

                        <button
                          onClick={() => addToStack(tech)}
                          disabled={isAdded}
                          className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all ${
                            isAdded
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
                              : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow'
                          }`}
                        >
                          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-24">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
              <p className="text-sm text-slate-500 mt-0.5">
                {myStack.length === 0
                  ? 'No technologies selected yet.'
                  : `${myStack.length} Technology Selected`}
              </p>
            </div>

            {myStack.length === 0 ? (
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center text-slate-400 text-sm my-4">
                Your stack is empty.
              </div>
            ) : (
              <div className="space-y-3 my-4 max-h-[60vh] overflow-y-auto pr-1">
                {myStack.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-slate-50/50 hover:bg-slate-100/80 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-tight">{tech.name}</p>
                        <p className="text-xs text-slate-500">{tech.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromStack(tech.id)}
                      className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            {myStack.length > 0 && (
              <button
                onClick={clearStack}
                className="w-full mt-2 py-2.5 rounded-xl border border-rose-200 text-rose-600 font-medium text-sm hover:bg-rose-50 transition-colors"
              >
                Remove All
              </button>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-4">
              <img src={Logo} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
              <p className="text-slate-500 text-sm max-w-sm">
                Curated tools, technologies, and resources for developers building modern software.
              </p>
              <div className="flex items-center space-x-4 pt-2 text-slate-500">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider">Product</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#home" className="hover:text-slate-900">Home</a></li>
                <li><a href="#technologies" className="hover:text-slate-900">Technologies</a></li>
                <li><a href="#projects" className="hover:text-slate-900">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#about" className="hover:text-slate-900">About</a></li>
                <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
                <li><a href="#careers" className="hover:text-slate-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#privacy" className="hover:text-slate-900">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-slate-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-slate-100 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} DevStack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}