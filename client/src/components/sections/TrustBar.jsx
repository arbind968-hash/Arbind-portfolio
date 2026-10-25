import { profile } from '../../data/profile';
import { Award, Code, TrendingUp, Sparkles } from 'lucide-react';

const icons = [Award, Code, TrendingUp, Sparkles];

const TrustBar = () => {
  return (
    <section className="py-10 border-y border-slate-800/80 bg-slate-900/50 relative">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {profile.stats.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl glass-card border border-slate-800/80 hover:border-blue-500/40 transition-colors shadow-lg shadow-black/20 group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-sky-400 border border-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#94A3B8] font-medium">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
