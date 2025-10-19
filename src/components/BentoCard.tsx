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
        "bg-black rounded-[20px] border-2 border-white p-5",
        "transition-all duration-200 animate-fade-in h-full",
        hover && "hover:border-white/80",
        className
      )}
    >
      {children}
    </div>
  );
};