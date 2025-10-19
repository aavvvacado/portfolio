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
      <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">DAILY</h2>
      <h3 className="text-base text-muted-foreground mb-6">Tool <span className="text-white font-bold">STACK</span></h3>
      
      <div className="space-y-3">
        {dailyTools.map((tool) => {
          const Icon = iconMap[tool.icon as keyof typeof iconMap];
          return (
            <div 
              key={tool.name}
              className="bg-white/5 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-all border border-white/20"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                {Icon && <Icon className="w-6 h-6 text-black" />}
              </div>
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
};
