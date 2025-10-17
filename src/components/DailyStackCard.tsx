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
    <BentoCard className="col-span-1 md:col-span-2">
      <h2 className="text-2xl font-bold mb-2">DAILY</h2>
      <h3 className="text-xl mb-6">Tool STACK</h3>
      
      <div className="flex flex-col gap-3">
        {dailyTools.map((tool, index) => {
          const Icon = iconMap[tool.icon];
          return (
            <div
              key={index}
              className="bg-secondary rounded-2xl p-4 flex items-center gap-3 hover:bg-secondary/80 transition-all"
            >
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-medium">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
};