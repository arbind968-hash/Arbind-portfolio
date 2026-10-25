import { Terminal, CheckCircle2, Cpu } from 'lucide-react';

const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background glow orbs */}
      <div className="absolute -top-6 -left-6 w-56 h-56 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Terminal/Code Card */}
      <div className="relative glass-card rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-blue-950/40">
        {/* Terminal Header */}
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Terminal size={13} className="text-sky-400" />
            <span>arbind_profile.py</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded">
            Verified
          </span>
        </div>

        {/* Code Content */}
        <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-slate-950/90">
          <div className="text-slate-500"># Candidate Profile: Arbind Muraw</div>
          <div className="mt-2">
            <span className="text-blue-400">class</span>{' '}
            <span className="text-sky-300 font-semibold">DataScientist</span>:
          </div>
          <div className="pl-4">
            <span className="text-slate-400">name</span> ={' '}
            <span className="text-sky-200">"Arbind Muraw"</span>
          </div>
          <div className="pl-4">
            <span className="text-slate-400">degree</span> ={' '}
            <span className="text-sky-200">"B.Tech CSE (2024–2028)"</span>
          </div>
          <div className="pl-4">
            <span className="text-slate-400">university</span> ={' '}
            <span className="text-sky-200">"MMDU, Mullana, Ambala"</span>
          </div>
          <div className="pl-4">
            <span className="text-slate-400">cgpa</span> ={' '}
            <span className="text-sky-400 font-bold">8.22</span>
          </div>
          <div className="pl-4">
            <span className="text-slate-400">internship</span> = &#123;
          </div>
          <div className="pl-8">
            <span className="text-slate-400">"company":</span>{' '}
            <span className="text-sky-300">"CodSoft"</span>,
          </div>
          <div className="pl-8">
            <span className="text-slate-400">"role":</span>{' '}
            <span className="text-blue-400">"Data Science Intern"</span>
          </div>
          <div className="pl-4">&#125;</div>
          <div className="pl-4">
            <span className="text-slate-400">skills</span> = [
          </div>
          <div className="pl-8">
            <span className="text-sky-300">"Python"</span>,{' '}
            <span className="text-sky-300">"Machine Learning"</span>,{' '}
            <span className="text-sky-300">"Data Preprocessing"</span>,
          </div>
          <div className="pl-8">
            <span className="text-blue-300">"React"</span>,{' '}
            <span className="text-blue-300">"Node.js"</span>,{' '}
            <span className="text-blue-300">"MongoDB"</span>,{' '}
            <span className="text-sky-300">"AWS"</span>,{' '}
            <span className="text-sky-300">"Docker"</span>
          </div>
          <div className="pl-4">]</div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5 text-sky-400">
              <CheckCircle2 size={14} />
              <span>Certified: CodSoft & Excellence Tech</span>
            </div>
            <span className="text-slate-500 font-mono">CGPA 8.22</span>
          </div>
        </div>
      </div>

      {/* Floating Status Pill 1 */}
      <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2.5 rounded-xl border border-slate-700/90 flex items-center gap-3 shadow-xl animate-float hidden sm:flex">
        <div className="p-2 rounded-lg bg-blue-500/20 text-sky-400 border border-blue-500/30">
          <Cpu size={18} />
        </div>
        <div>
          <p className="text-[11px] text-slate-400">Specialization</p>
          <p className="text-xs font-bold text-white">Data Science & MERN</p>
        </div>
      </div>

      {/* Floating Status Pill 2 */}
      <div className="absolute -top-3 -right-3 glass-card px-3.5 py-2 rounded-xl border border-slate-700/90 flex items-center gap-2 shadow-xl hidden sm:flex">
        <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
        <span className="text-xs font-semibold text-slate-200">Open to Opportunities</span>
      </div>
    </div>
  );
};

export default HeroVisual;
