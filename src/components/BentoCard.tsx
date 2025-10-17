import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const BentoCard = ({ children, className, hover = true }: BentoCardProps) => {
  return (
    <div
      className={cn(
        "bg-bento-card rounded-3xl border border-bento-border p-6",
        "transition-all duration-500 animate-fade-in",
        hover && "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </div>
  );
};