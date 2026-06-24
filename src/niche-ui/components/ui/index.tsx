import Link from "next/link";
import { cn } from "../../lib/utils";

const variants = {
  primary: "bg-[var(--primary)] text-white hover:opacity-90 shadow-lg shadow-[var(--primary)]/25",
  secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
  outline: "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/5",
  ghost: "text-[var(--foreground)] hover:bg-[var(--muted-bg)]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function SectionHeading({
  badge,
  title,
  description,
  light = false,
  className,
}: {
  badge?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {badge && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">{badge}</p>
      )}
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl", light ? "text-white" : "text-[var(--foreground)]")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg", light ? "text-white/80" : "text-[var(--muted)]")}>{description}</p>
      )}
    </div>
  );
}

export function Card({
  children,
  className,
  hover,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm",
        hover && "transition-all hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
