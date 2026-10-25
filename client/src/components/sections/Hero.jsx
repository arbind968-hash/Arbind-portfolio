import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, FileText, Sparkles, Send, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import HeroVisual from './HeroVisual';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-radial-gradient">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[400px] h-[250px] bg-sky-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-sky-300 text-xs font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              B.Tech CSE Student (2024–2028) • Data Science & Full-Stack
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.15] mb-6">
              Hi, I'm <span className="text-gradient">Arbind Muraw</span>.
              <br />
              <span className="text-slate-100">Aspiring </span>
              <span className="text-gradient-subtle">Data Scientist</span>
              <span className="text-sky-400"> & </span>
              <span className="text-gradient">Developer.</span>
            </h1>

            {/* Subtitle / Objective */}
            <p className="text-base sm:text-lg text-[#94A3B8] mb-6 max-w-2xl leading-relaxed">
              Computer Science Engineering student at <strong className="text-[#F8FAFC] font-bold">Maharishi Markandeshwar Deemed to be University (8.22 CGPA)</strong>. Hands-on experience in Python, data preprocessing, machine learning models, data visualization, and Full-Stack MERN development.
            </p>

            {/* Location indicator */}
            <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-8">
              <MapPin size={14} className="text-sky-400" />
              <span>{profile.location}</span>
              <span className="text-slate-600">•</span>
              <span className="text-sky-400 font-medium">Ex-Intern at CodSoft (Data Science)</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Link
                to="/projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02]"
              >
                <Sparkles size={16} />
                Explore Projects
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-card hover:bg-slate-800 text-[#F8FAFC] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-slate-700/80 hover:border-slate-600"
              >
                <Send size={16} />
                Get in Touch
              </Link>

              <Link
                to="/resume"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-slate-700/80"
              >
                <FileText size={16} />
                Resume (PDF)
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-[#94A3B8] text-sm pt-4 border-t border-slate-800 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Profiles:</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
                <span className="text-xs font-medium">arbind968-hash</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
                <span className="text-xs font-medium">arbind-muraw</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Terminal Mockup */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;