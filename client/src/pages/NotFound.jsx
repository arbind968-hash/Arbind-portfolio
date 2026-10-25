import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center container-custom">
      <div className="text-center glass-card rounded-3xl p-12 max-w-lg mx-auto border border-slate-800/80 shadow-2xl">
        <span className="text-6xl font-black text-gradient">404</span>
        <h1 className="text-2xl font-bold text-white mt-4 mb-2">Page Not Found</h1>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          The page you are trying to visit might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
          >
            <Home size={16} />
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;