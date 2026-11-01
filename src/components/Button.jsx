export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:opacity-50 disabled:pointer-events-none group cursor-pointer";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-semibold rounded-lg",
    default: "px-5 py-2.5 text-sm font-semibold rounded-xl",
    lg: "px-6 py-3.5 text-sm font-bold rounded-xl",
  };

  const variantClasses = {
    primary:
      "bg-white text-zinc-950 hover:bg-zinc-200 border border-black/20 shadow-xs active:translate-y-0.5",
    yellow:
      "bg-[#ffd000] text-black border-2 border-black font-bold shadow-[2.5px_2.5px_0px_#000000] hover:shadow-[3.5px_3.5px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
    secondary:
      "bg-zinc-900 text-zinc-200 border border-zinc-800 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 active:translate-y-0.5",
    outline:
      "bg-transparent text-zinc-200 border border-zinc-700 hover:bg-zinc-900 hover:border-zinc-500 hover:text-white active:translate-y-0.5",
    ghost:
      "text-zinc-400 hover:text-white hover:bg-zinc-800/60 active:translate-y-0.5",
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
