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
        "transition-all duration-300",
        hover && "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};