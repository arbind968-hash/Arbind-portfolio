const LoadingSpinner = ({ text = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
        <div className="absolute inset-0 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
      </div>
      {text && <p className="text-sm text-slate-400 font-medium">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
