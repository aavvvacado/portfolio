import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Code, Figma, Package, Terminal, FileText, MessageCircle, GitBranch, Flame } from "lucide-react";

const iconMap: Record<string, any> = {
  code: Code,
  figma: Figma,
  package: Package,
  terminal: Terminal,
  "file-text": FileText,
  "message-circle": MessageCircle,
  "git-branch": GitBranch,
  flame: Flame,
};

export const DailyStackCard = () => {
  const { dailyTools } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 row-span-2">
      <h2 className="text-xl font-bold mb-1">DAILY</h2>
      <h3 className="text-sm text-muted-foreground mb-4">Tool STACK</h3>
      
      <div className="flex flex-col gap-3">
        {dailyTools.map((tool, index) => {
          const Icon = iconMap[tool.icon];
          return (
            <div
              key={index}
              className="bg-secondary border border-border rounded-xl p-3 flex items-center gap-3 hover:bg-secondary/80 transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
};