import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const StoryCard = () => {
  const { story } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 row-span-2">
      <div className="mb-4">
        <h2 className="text-sm mb-1">SO FAR</h2>
        <h3 className="text-xl font-bold">STORY</h3>
      </div>
      
      <ScrollArea className="h-[400px]">
        <div className="space-y-4 pr-4">
          {story.map((item, index) => (
            <div key={index} className="border-l-2 border-bento-border pl-3 relative">
              <div className="absolute -left-[5px] top-1 w-2 h-2 bg-primary rounded-full border border-background" />
              <div className="text-xs text-muted-foreground mb-1">{item.period}</div>
              <h4 className="font-semibold text-sm">{item.role}</h4>
              <p className="text-xs text-muted-foreground">{item.company}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};