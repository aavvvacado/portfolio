import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const BentoCard = ({ children, className, hover = true }: BentoCardProps) => {
  const hasDoubleBorder = className?.includes('double-border');
  
  return (
    <div
      className={cn(
        "bg-card rounded-[20px] p-5",
        "transition-all duration-200 animate-fade-in h-full",
        hasDoubleBorder 
          ? "border border-border/30 outline outline-1 outline-offset-[-1px] outline-border/20"
          : "border border-border/30",
        hover && "hover:border-border/50",
        className
      )}
    >
      {children}
    </div>
  );
};