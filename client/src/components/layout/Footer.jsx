import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, Phone, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import { navLinks } from '../../data/navigation';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 pt-16 pb-12 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-[#F8FAFC]">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white text-xs font-black shadow-md shadow-blue-500/20">
                A
              </div>
              <span>
                Arbind<span className="text-sky-400">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              B.Tech CSE Student (2024–2028) at MMDU, Mullana. Aspiring Data Scientist with practical experience in machine learning, Python data pipelines, and MERN stack development.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800 transition-colors"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#94A3B8] hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-sky-400" />
                <span className="text-slate-300">{profile.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-blue-400" />
                <span className="text-slate-300">{profile.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-sky-300" />
                <span className="text-slate-300">{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Arbind Muraw. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;