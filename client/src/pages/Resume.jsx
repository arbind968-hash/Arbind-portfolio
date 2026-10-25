import { Download, FileText, Printer, Mail, Phone, MapPin, GraduationCap, Briefcase, Code2, Award } from 'lucide-react';
import { profile } from '../data/profile';

const Resume = () => {
  const handlePrint = () => window.print();

  const featuredProjects = [
    {
      title: 'Interactive Sales Analytics Dashboard (Live on Render)',
      badge: 'Render Deployed',
      badgeColor: 'text-sky-400 bg-sky-500/10 border border-sky-500/20',
      description: 'End-to-end cloud-deployed sales dashboard analyzing revenue KPIs, regional metrics, and real-time visual trends.'
    },
    {
      title: 'Credit Card Fraud Detection & Movie Rating Prediction',
      badge: 'Scikit-Learn • ML',
      badgeColor: 'text-blue-400 bg-blue-500/10 border border-blue-500/20',
      description: 'Built regression and classification models utilizing feature engineering, SMOTE imbalance handling, and evaluation metrics.'
    },
    {
      title: 'Python Projects For Data Science',
      badge: 'Python • Web Scraping',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20',
      description: 'Performed data analysis, web scraping, data preprocessing, and visualization using Python.'
    }
  ];

  const technicalSkills = [
    'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'AWS', 'Docker', 'React',
    'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Data Preprocessing',
    'Data Analysis', 'Data Visualization', 'Machine Learning'
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container-custom max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
              <FileText size={13} />
              Curriculum Vitae
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Arbind Muraw <span className="text-gradient">— Resume</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl glass-card hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-all cursor-pointer hover:text-white"
            >
              <Printer size={15} />
              Print
            </button>
            <a
              href="/resume/Arbind Muraw-resume.pdf"
              download="Arbind-Muraw-Resume.pdf"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
            >
              <Download size={15} />
              Download Resume (PDF)
            </a>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/80 shadow-2xl relative">
          {/* Top Profile Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{profile.name}</h2>
              <p className="text-sky-400 font-semibold text-base mt-1">Data Scientist</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3">
                <span className="flex items-center gap-1">
                  <Mail size={14} className="text-sky-400" />
                  <a href={`mailto:${profile.email}`} className="text-slate-300 hover:text-sky-300 hover:underline">{profile.email}</a>
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={14} className="text-sky-400" />
                  <span className="text-slate-300">{profile.phone}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-sky-400" />
                  <span className="text-slate-300">{profile.location}</span>
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-300 space-y-1.5 sm:text-right">
              <div>
                <span className="text-slate-400">LinkedIn: </span>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:underline font-medium">
                  arbind-muraw-09468b294
                </a>
              </div>
              <div>
                <span className="text-slate-400">GitHub: </span>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline font-medium">
                  arbind968-hash
                </a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div className="py-8 border-b border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">Career Objective</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{profile.objective}</p>
          </div>

          {/* Education Section */}
          <div className="py-8 border-b border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-6 flex items-center gap-2">
              <GraduationCap size={16} />
              Education
            </h3>
            <div className="space-y-4">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <p className="text-xs sm:text-sm text-slate-300">{edu.institution}</p>
                    <p className="text-xs text-sky-400 font-bold mt-1">Overall CGPA — {edu.score}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-semibold">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internships Section */}
          <div className="py-8 border-b border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-6 flex items-center gap-2">
              <Briefcase size={16} />
              Internships
            </h3>
            <div className="space-y-6">
              {profile.internships.map((intern, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">{intern.company}</h4>
                      <p className="text-xs font-medium text-sky-300">{intern.role}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
                      {intern.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-3">
                    {intern.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-sky-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Highlight */}
          <div className="py-8 border-b border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-6 flex items-center gap-2">
              <Code2 size={16} />
              Featured Projects
            </h3>
            <div className="space-y-4">
              {featuredProjects.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-sm font-bold text-white">{p.title}</h4>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${p.badgeColor}`}>{p.badge}</span>
                  </div>
                  <p className="text-xs text-slate-300">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="py-8 border-b border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-2">
              <Award size={16} />
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span key={skill} className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 hover:border-sky-500/40 hover:text-sky-300 transition-colors font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications, Languages, Activities */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div>
              <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sky-400">Certifications</h4>
              <ul className="space-y-1 text-slate-300">
                <li>• Data Science — CodSoft (2025)</li>
                <li>• Full Stack Web Dev — Excellence Technology (2026)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-cyan-400">Languages</h4>
              <p className="text-slate-300">English, Hindi, Nepali, Bhojpuri</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-blue-400">Competitive Coding</h4>
              <p className="text-slate-300 font-semibold text-sky-400 mb-1">83+ DSA Questions Solved on LeetCode</p>
              <p className="text-slate-400">Participation in Hackathons. Reading, Visiting Hills and Mountains.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;