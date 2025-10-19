import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Code, Figma, Package, Terminal, GitBranch, Flame } from "lucide-react";

const iconMap: Record<string, any> = {
  code: Code,
  figma: Figma,
  package: Package,
  terminal: Terminal,
  "git-branch": GitBranch,
  flame: Flame,
};

export const DailyStackCard = () => {
  const { dailyTools } = portfolioData;
  
  return (
    <BentoCard className="row-span-2">
      <div className="mb-3">
        <h2 className="text-xs text-muted-foreground mb-0.5 font-bold tracking-wider">DAILY</h2>
        <h3 className="text-lg md:text-xl font-bold tracking-tight">STACK</h3>
      </div>
      
      <div className="space-y-2">
        {dailyTools.map((tool) => {
          const Icon = iconMap[tool.icon as keyof typeof iconMap];
          return (
            <div 
              key={tool.name}
              className="flex items-center gap-2 p-2 rounded-lg border border-border/50 hover:border-border transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                {Icon && <Icon className="w-3.5 h-3.5" />}
              </div>
              <span className="text-xs font-medium">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
};
