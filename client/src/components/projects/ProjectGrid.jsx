import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-16 glass-card border border-slate-700/80 rounded-2xl p-8 max-w-lg mx-auto">
        <p className="text-[#94A3B8] text-sm">No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project._id || project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
