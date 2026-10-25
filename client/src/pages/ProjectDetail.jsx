import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Clock, TrendingUp, CheckCircle, Sparkles, Target, Layers } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Badge from '../components/ui/Badge';

const ProjectDetail = () => {
  const { slug } = useParams();
  const { projects, loading } = useProjects();

  if (loading) return <div className="pt-28"><LoadingSpinner /></div>;

  const project = projects.find((p) => p.slug === slug || p._id === slug);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center container-custom">
        <div className="glass-card rounded-2xl p-12 max-w-lg mx-auto border border-slate-700">
          <h1 className="text-2xl font-bold text-[#F8FAFC] mb-3">Project not found</h1>
          <p className="text-[#94A3B8] text-sm mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-md shadow-blue-600/30"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container-custom max-w-4xl">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to all projects
        </Link>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="primary">{project.category}</Badge>
          {project.featured && (
            <Badge variant="emerald">
              <Sparkles size={12} className="mr-1 inline" /> Featured Case Study
            </Badge>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-6 leading-tight">
          {project.title}
        </h1>

        {/* Short & Long Description */}
        <p className="text-lg text-slate-300 leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {project.longDescription && (
          <div className="glass-card p-6 rounded-2xl border border-slate-700/80 mb-10 text-sm text-slate-300 leading-relaxed">
            {project.longDescription}
          </div>
        )}

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-[#F8FAFC] font-semibold text-sm flex items-center gap-2 border border-slate-700 transition-all shadow-md"
            >
              <Github size={18} />
              View Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50"
            >
              <ExternalLink size={18} />
              Live Demonstration
            </a>
          )}
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-12 glass-card p-6 rounded-2xl border border-slate-700/80">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
            Technologies & Tools Applied
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-sky-300 text-xs font-mono border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Grid Problem & Objective */}
        {(project.problem || project.objective) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {project.problem && (
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-700/80">
                <div className="flex items-center gap-2.5 text-rose-400 font-bold mb-3 text-base">
                  <Target size={18} />
                  <h3>The Problem</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.objective && (
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-700/80">
                <div className="flex items-center gap-2.5 text-sky-400 font-bold mb-3 text-base">
                  <Layers size={18} />
                  <h3>The Solution & Objective</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.objective}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Process / Approach Steps */}
        {project.process && project.process.length > 0 && (
          <div className="mb-12 glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80">
            <h2 className="text-xl font-bold text-[#F8FAFC] mb-6">Development Approach & Architecture</h2>
            <div className="space-y-4">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-500/15 text-sky-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 border border-blue-500/30 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features & Results */}
        {project.features && project.features.length > 0 && (
          <div className="mb-12 glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80">
            <h2 className="text-xl font-bold text-[#F8FAFC] mb-6">Key Engineering Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle size={16} className="text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Business / Performance Impact */}
        {project.businessImpact && (
          <div className="mb-12 glass-card p-6 sm:p-8 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-950/30">
            <h2 className="text-xl font-bold text-[#F8FAFC] mb-6 flex items-center gap-2">
              <TrendingUp size={20} className="text-sky-400" />
              Measurable Impact & Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.businessImpact.timeSaved && (
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-medium text-[#94A3B8] mb-1 flex items-center gap-1.5">
                    <Clock size={14} className="text-sky-400" /> Time Saved
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {project.businessImpact.timeSaved}
                  </div>
                </div>
              )}
              {project.businessImpact.costReduction && (
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-medium text-[#94A3B8] mb-1 flex items-center gap-1.5">
                    <TrendingUp size={14} className="text-emerald-400" /> Cost / Efficiency
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {project.businessImpact.costReduction}
                  </div>
                </div>
              )}
              {project.businessImpact.decisionSpeed && (
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-medium text-[#94A3B8] mb-1 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-sky-300" /> Decision Speed
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {project.businessImpact.decisionSpeed}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
          <Link
            to="/projects"
            className="text-sm font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/30"
          >
            Inquire About Similar Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;