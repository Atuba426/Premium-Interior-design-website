import Link from "next/link";

const variants = {
  primary:
    "bg-[#1F1F1F] text-white hover:bg-[#B68D40] border border-transparent",
  secondary:
    "bg-transparent text-[#1F1F1F] border border-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white",
  accent:
    "bg-[#B68D40] text-white hover:bg-[#A37A2F] border border-transparent",
  ghost:
    "bg-white/70 text-[#1F1F1F] border border-[#E8E2D9] hover:border-[#1F1F1F]",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon: Icon,
  type = "button",
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[16px] font-semibold tracking-tight transition-colors duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {Icon && <Icon size={18} strokeWidth={2} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {Icon && <Icon size={18} strokeWidth={2} />}
    </button>
  );
}
