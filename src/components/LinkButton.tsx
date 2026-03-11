import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  variant?: "default" | "outline";
  size?: "default" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex shrink-0 items-center justify-center rounded text-sm font-bold tracking-wide whitespace-nowrap transition-all";

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/80",
  outline:
    "border-2 border-current bg-transparent hover:bg-white/10",
};

const sizes = {
  default: "h-10 gap-2 px-5",
  lg: "h-12 gap-2 px-6 text-sm",
  xl: "h-14 gap-2.5 px-8 text-base",
};

export function LinkButton({
  href,
  variant = "default",
  size = "default",
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
