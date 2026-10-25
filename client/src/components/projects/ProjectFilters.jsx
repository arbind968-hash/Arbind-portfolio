const ProjectFilters = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105 font-semibold'
                : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/70'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilters;
