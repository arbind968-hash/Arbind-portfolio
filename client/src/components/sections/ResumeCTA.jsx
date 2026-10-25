import { Link } from 'react-router-dom';
import { Download, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const ResumeCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-custom relative">
        <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-950/40">
          {/* Subtle background glow inside card */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20 inline-block mb-4">
              Open For Opportunities
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
              Let's Build Something Exceptional Together
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] mb-8 leading-relaxed">
              Whether you are looking for a skilled software engineer, a data analyst, or an automated workflow specialist, I'm ready to bring dedication and expertise to your team.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02]"
              >
                <Mail size={16} />
                Start a Conversation
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/resume"
                className="px-7 py-3.5 rounded-xl glass-card hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all duration-200 flex items-center gap-2 border border-slate-700 hover:border-slate-500"
              >
                <Download size={16} />
                View & Download Resume
              </Link>
            </div>

            {/* Quick reassurance points */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-[#94A3B8] font-medium">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 size={14} className="text-sky-400" />
                <span>Fast Response Within 24h</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 size={14} className="text-blue-400" />
                <span>Available for Full-Time & Freelance</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 size={14} className="text-sky-300" />
                <span>Clean, Documented Codebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeCTA;
