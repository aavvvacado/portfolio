import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const StoryCard = () => {
  const { story } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 row-span-2">
      <div className="mb-3">
        <h2 className="text-xs text-muted-foreground mb-0.5 font-bold tracking-wider">SO FAR</h2>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight">STORY</h3>
      </div>
      
      <ScrollArea className="h-[280px] md:h-[400px] [&>[data-radix-scroll-area-viewport]]:!overflow-y-scroll [&_[data-radix-scroll-area-scrollbar]]:hidden">
        <div className="space-y-4 pr-2">
          {story.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-xs text-muted-foreground mb-1 font-medium">{item.period}</div>
              <h4 className="font-bold text-sm mb-0.5">{item.role}</h4>
              <p className="text-xs text-muted-foreground">{item.company}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};
