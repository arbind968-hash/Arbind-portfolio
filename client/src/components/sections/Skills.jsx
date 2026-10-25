import { useState } from 'react';
import { skillsData } from '../../data/skills';
import { Sparkles, Code2, Database, Terminal, Cpu } from 'lucide-react';

const categoryIcons = {
  'Data Science & Machine Learning': Database,
  'Full-Stack Web Development': Code2,
  'Programming & Core CS': Terminal,
  'Cloud, DevOps & Tools': Cpu,
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillsData[0].category);

  return (
    <section className="py-20 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-500/20">
            <Sparkles size={13} />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Skills & Core Capabilities
          </h2>
          <p className="mt-3 text-[#94A3B8] text-base">
            From algorithmic foundation and backend API architecture to modern React frontends and data analytics pipelines.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillsData.map((cat) => {
            const Icon = categoryIcons[cat.category] || Code2;
            const isActive = selectedCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-700/80'
                }`}
              >
                <Icon size={16} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        {skillsData
          .filter((cat) => cat.category === selectedCategory)
          .map((cat) => (
            <div key={cat.category} className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">{cat.category}</h3>
                <p className="text-sm text-[#94A3B8]">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/70 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-slate-200 group-hover:text-sky-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-sky-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
