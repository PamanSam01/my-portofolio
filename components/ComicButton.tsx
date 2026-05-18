import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ComicButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "red" | "white";
};

export function ComicButton({ href, children, variant = "red" }: ComicButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden border-2 px-6 py-3 font-display text-xl uppercase leading-none shadow-slash transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-bone focus:ring-offset-2 focus:ring-offset-ink",
        variant === "red" ? "border-bone bg-blood text-white" : "border-ink bg-bone text-ink"
      )}
    >
      <span className="absolute inset-0 -translate-x-full skew-x-[-24deg] bg-ink transition-transform duration-300 group-hover:translate-x-0" />
      <span className="relative z-10 transition-colors group-hover:text-bone">{children}</span>
      <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
}
