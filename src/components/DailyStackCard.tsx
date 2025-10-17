import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Code, Figma, Package, Terminal, FileText, MessageCircle } from "lucide-react";

const iconMap: Record<string, any> = {
  code: Code,
  figma: Figma,
  package: Package,
  terminal: Terminal,
  "file-text": FileText,
  "message-circle": MessageCircle,
};

export const DailyStackCard = () => {
  const { dailyTools } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 row-span-2">
      <h2 className="text-lg font-bold mb-1">DAILY</h2>
      <h3 className="text-sm mb-4">Tool STACK</h3>
      
      <div className="flex flex-col gap-2">
        {dailyTools.map((tool, index) => {
          const Icon = iconMap[tool.icon];
          return (
            <div
              key={index}
              className="bg-secondary rounded-xl p-3 flex items-center gap-3 hover:bg-secondary/80 transition-all duration-300 hover:translate-x-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 hover:rotate-12 flex-shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
};