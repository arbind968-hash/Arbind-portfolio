import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Award, Languages, Compass, CheckCircle2, ArrowRight, User, Sparkles, Code2 } from 'lucide-react';
import { profile } from '../data/profile';

const About = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container-custom max-w-5xl">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <User size={13} />
            About Me
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Data Science & <span className="text-gradient">Engineering Profile</span>
          </h1>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Get to know my academic foundation, internship experience, certifications, and technical passions.
          </p>
        </div>

        {/* Career Objective / Story Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/80 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-sky-400 font-semibold text-sm mb-3">
              <Sparkles size={16} />
              <span>Career Objective</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Computer Science Engineering Student • Aspiring Data Scientist
            </h2>
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                {profile.objective}
              </p>
              <p>
                Currently pursuing <strong className="text-white">B.Tech in Computer Science & Engineering (2024–2028)</strong> at <strong className="text-white">Maharishi Markandeshwar Deemed to be University, Mullana, Ambala</strong> with a cumulative <strong className="text-sky-400">8.22 CGPA</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Internship Experience */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/80 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-sky-400 border border-blue-500/20">
              <Briefcase size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Internship Experience</h2>
              <p className="text-sm text-slate-400">Practical hands-on industry training</p>
            </div>
          </div>

          <div className="space-y-6">
            {profile.internships.map((intern, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{intern.role}</h3>
                    <p className="text-sky-400 font-semibold text-sm">{intern.company}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-300 bg-slate-800/90 px-3 py-1 rounded-full border border-slate-700">
                    {intern.period}
                  </span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {intern.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="text-sm text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/80 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-sky-400 border border-blue-500/20">
              <GraduationCap size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Education & Academics</h2>
              <p className="text-sm text-slate-400">Undergraduate Degree</p>
            </div>
          </div>

          <div className="space-y-8 relative pl-6 border-l-2 border-blue-500/30 ml-4">
            {profile.education.map((edu, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 border-4 border-slate-900 group-hover:scale-125 transition-transform" />

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <span className="text-xs font-mono text-sky-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300 mb-2">{edu.institution}</p>
                  <div className="text-sm font-bold text-sky-400 mb-3">
                    Overall CGPA: {edu.score}
                  </div>
                  <ul className="space-y-1.5">
                    {edu.highlights?.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-slate-400 flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Languages & Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Certifications */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800/80">
            <div className="flex items-center gap-2 text-sky-400 font-bold mb-4 text-base">
              <Award size={20} />
              <h3>Certifications</h3>
            </div>
            <div className="space-y-3">
              {profile.certifications.map((c, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-white">{c.name}</h4>
                  <p className="text-[11px] text-slate-400">{c.issuer} ({c.year})</p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Coding & Problem Solving */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800/80">
            <div className="flex items-center gap-2 text-blue-400 font-bold mb-4 text-base">
              <Code2 size={20} />
              <h3>Competitive Coding</h3>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-3">
              <span className="text-xs font-bold text-sky-400">83+ DSA Questions Solved</span>
              <p className="text-[11px] text-slate-400 mt-0.5">LeetCode & Algorithmic Problem Solving</p>
            </div>
            <div className="space-y-2">
              {profile.extracurricular.map((item, idx) => (
                <div key={idx} className="text-xs text-slate-300 flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Spoken Languages */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800/80">
            <div className="flex items-center gap-2 text-cyan-400 font-bold mb-4 text-base">
              <Compass size={20} />
              <h3>Interests & Languages</h3>
            </div>
            <div className="space-y-2 mb-4">
              {profile.interests.slice(0, 3).map((interest, idx) => (
                <div key={idx} className="text-xs text-slate-300 flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>{interest}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mb-1.5">Spoken Languages</p>
              <div className="flex flex-wrap gap-1.5">
                {profile.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-900 text-[11px] font-medium text-slate-300 border border-slate-800"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl glass-card border border-blue-500/30 glow-blue flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-lg font-bold text-white mb-1">Looking for a Data Science Intern or Developer?</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              I am open to entry-level opportunities, internships, and collaborative data science projects.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center gap-2 shrink-0 transition-all shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
          >
            <span>Get in Touch</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;