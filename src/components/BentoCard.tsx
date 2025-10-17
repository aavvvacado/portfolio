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
        "bg-bento-card rounded-2xl md:rounded-3xl border border-bento-border p-4 md:p-6",
        "transition-all duration-500 animate-fade-in h-full",
        hover && "hover:border-border hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};