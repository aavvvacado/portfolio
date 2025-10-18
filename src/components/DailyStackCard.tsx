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
    <BentoCard className="col-span-1 row-span-2">
      <h2 className="text-3xl font-bold mb-2 tracking-tight">DAILY</h2>
      <h3 className="text-base text-muted-foreground mb-6">Tool <span className="font-bold text-foreground">STACK</span></h3>
      
      <div className="flex flex-col gap-3">
        {dailyTools.map((tool, index) => {
          const Icon = iconMap[tool.icon];
          return (
            <div
              key={index}
              className="bg-secondary border border-border/50 rounded-xl p-3 flex items-center gap-3 hover:bg-secondary/80 transition-all duration-200 cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-sm">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
};
