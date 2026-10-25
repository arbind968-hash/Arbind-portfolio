import { useState, useMemo } from 'react';
import { Layers, Search } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';
import ProjectGrid from '../components/projects/ProjectGrid';
import ProjectFilters from '../components/projects/ProjectFilters';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const categories = [
  'All',
  'Software Engineering',
  'Data Analytics',
  'Automation',
  'Core Computer Science',
  'Machine Learning',
];

const Projects = () => {
  const { projects, loading, error } = useProjects();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies?.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-500/20">
            <Layers size={13} />
            My Portfolio
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
            Explore practical software engineering applications, analytics dashboards, and automation workflows engineered for performance and impact.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search projects by title, stack (React, Python, SQL...)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-800/80 border border-slate-700/80 rounded-xl text-[#F8FAFC] placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all text-sm shadow-inner"
            />
          </div>
        </div>

        {/* Category Pills */}
        <ProjectFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Content Area */}
        {loading ? (
          <LoadingSpinner text="Fetching projects..." />
        ) : error ? (
          <div className="text-center p-8 glass-card border border-rose-500/30 text-rose-300 rounded-2xl max-w-lg mx-auto bg-rose-950/20">
            {error}
          </div>
        ) : (
          <div>
            <div className="text-xs text-[#94A3B8] mb-6 font-medium">
              Showing <span className="text-white font-bold">{filteredProjects.length}</span> projects
            </div>
            <ProjectGrid projects={filteredProjects} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;