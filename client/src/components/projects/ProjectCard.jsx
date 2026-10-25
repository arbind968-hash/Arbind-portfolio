import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import Badge from '../ui/Badge';

const ProjectCard = ({ project }) => {
  const getCategoryBadgeVariant = (category) => {
    switch (category) {
      case 'Data Analytics':
        return 'cyan';
      case 'Automation':
        return 'emerald';
      case 'Software Engineering':
        return 'primary';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="group relative glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/40">
      {/* Subtle top accent gradient line on hover */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant={getCategoryBadgeVariant(project.category)}>
            {project.category}
          </Badge>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
              <Sparkles size={12} />
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-sky-300 transition-colors mb-3 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies?.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60 font-mono"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 5 && (
            <span className="text-xs px-2 py-1 rounded-md bg-slate-800/40 text-slate-400 border border-slate-800 font-mono">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors group/link"
        >
          Case Study
          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </Link>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-slate-700/50"
              title="View Source Code"
              aria-label="GitHub Repository"
            >
              <Github size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-blue-600/20 text-sky-400 hover:text-white hover:bg-blue-600 transition-all border border-blue-500/30"
              title="View Live Demo"
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
