const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-blue-500/15 text-sky-300 border-blue-500/30',
    secondary: 'bg-slate-800 text-slate-300 border-slate-700',
    cyan: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
    emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    outline: 'bg-transparent text-slate-300 border-slate-700 hover:border-slate-600',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
        variants[variant] || variants.primary
      } ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
