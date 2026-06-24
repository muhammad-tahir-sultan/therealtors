import { cn } from "../../lib/utils";

export function Input({
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[var(--foreground)]">{label}</label>
      <input
        className={cn(
          "flex h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]",
          className
        )}
        {...props}
      />
    </div>
  );
}
