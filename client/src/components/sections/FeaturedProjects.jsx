import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProjectCard from '../projects/ProjectCard';
import { useProjects } from '../../hooks/useProjects';

const FeaturedProjects = () => {
  const { projects } = useProjects();
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-500/20">
              <Sparkles size={13} />
              Portfolio Highlights
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-[#94A3B8] text-base max-w-xl">
              A curated selection of real-world software engineering, data analytics, and automation platforms.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((project) => (
            <ProjectCard key={project._id || project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
