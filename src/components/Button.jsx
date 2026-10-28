export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none group cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg",
    default: "px-6 py-3 text-sm font-semibold rounded-xl",
    lg: "px-8 py-4 text-base font-semibold rounded-xl",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 hover:from-cyan-300 hover:to-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] active:scale-[0.98]",
    secondary:
      "bg-slate-900/80 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] active:scale-[0.98]",
    purple:
      "bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-400 hover:to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] active:scale-[0.98]",
    outline:
      "bg-slate-950/60 text-slate-300 border border-slate-700/80 hover:text-white hover:border-cyan-400/60 hover:bg-slate-800/40 active:scale-[0.98]",
    ghost:
      "text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 active:scale-[0.98]",
  };

  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${
    variantClasses[variant] || variantClasses.primary
  } ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

