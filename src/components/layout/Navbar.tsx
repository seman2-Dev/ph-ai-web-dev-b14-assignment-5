import Logo from '../../assets/logo-text.png';

const Navbar = () => {
    return (
      <section className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <a href="#home" className="flex items-center"><img src={Logo} alt="Dev Stack Logo" className="h-9 w-auto object-contain"/></a>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-3">
            <button className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2">Sign In</button>
            <button className="text-sm font-medium text-white bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-95 px-6 py-2 rounded-full transition-all shadow-md shadow-pink-500/10">Sign Up</button>
          </div>
        </div>
      </section>
    );
};

export default Navbar;