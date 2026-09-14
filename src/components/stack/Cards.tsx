import type { Technology } from '../types/cardInfoType';

interface CardsProps {
  technologies: Technology[];
  myStack: Technology[];
  loading: boolean;
  addToStack: (tech: Technology) => void;
  removeFromStack: (id: string) => void;
  clearStack: () => void;
}

const Cards = ({
  technologies,
  myStack,
  loading,
  addToStack,
  removeFromStack,
  clearStack,
}: CardsProps) => {
    return (
      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-[#0b0f19]">Explore the{' '}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-500 mt-1">Pick one technology per category to build your ideal stack.</p>
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
                          <span className="flex items-center font-semibold text-amber-500">  ★ {tech.rating}</span>
                        </div>

                        <button
                          onClick={() => addToStack(tech)}
                          disabled={isAdded}
                          className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all ${
                            isAdded
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
                              : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow'
                          }`}>
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
                className="w-full mt-2 py-2.5 rounded-xl border border-rose-200 text-rose-600 font-medium text-sm hover:bg-rose-50 transition-colors">Remove All</button>
            )}
          </div>
        </div>
      </main>

    );
};

export default Cards;