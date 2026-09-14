import BannerImg from '../../assets/banner-stack.png';

const Hero = () => {
    return (

      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-[#0b0f19] leading-[1.12]">Build Your Ideal<br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed font-normal">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
          
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#technologies" className="px-7 py-3.5 rounded-full text-white font-semibold bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 shadow-md shadow-pink-500/15 hover:opacity-95 transition-opacity text-sm inline-block">Explore Technologies</a>
            <button className="px-7 py-3.5 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm">Learn More</button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src={BannerImg} alt="Dev Stack Graphic" className="w-full max-w-120 h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"/>
        </div>
      </section>
    );
};

export default Hero;