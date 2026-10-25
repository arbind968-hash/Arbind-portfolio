import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { navLinks } from '../../data/navigation';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3.5 shadow-lg shadow-black/40' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#F8FAFC] group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white text-sm font-black shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
              A
            </div>
            <span className="font-bold">
              Arbind<span className="text-sky-400">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-slate-700/60 shadow-lg shadow-black/20">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/resume"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-xl hover:bg-slate-800/80 transition-colors"
            >
              <FileText size={15} />
              <span>Resume</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-card text-slate-300 hover:text-white border border-slate-700"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 glass-card rounded-2xl border border-slate-700/80 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2 mt-2 border-t border-slate-700 flex flex-col gap-2">
              <Link
                to="/resume"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-800 hover:text-white"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30"
              >
                <span>Hire Me</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;