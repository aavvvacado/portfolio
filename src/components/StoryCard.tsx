import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const StoryCard = () => {
  const { story } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 row-span-2">
      <div className="mb-4">
        <h2 className="text-xs text-muted-foreground mb-1">SO FAR</h2>
        <h3 className="text-xl font-bold">STORY</h3>
      </div>
      
      <ScrollArea className="h-[420px] [&>[data-radix-scroll-area-viewport]]:!overflow-y-scroll [&_[data-radix-scroll-area-scrollbar]]:hidden">
        <div className="space-y-4 pr-4">
          {story.map((item, index) => (
            <div key={index} className="border-l-2 border-bento-border pl-4 relative hover:border-primary transition-colors duration-300">
              <div className="absolute -left-[5px] top-1 w-2 h-2 bg-primary rounded-full border-2 border-background" />
              <div className="text-xs text-muted-foreground mb-2">{item.period}</div>
              <h4 className="font-bold text-sm mb-1">{item.role}</h4>
              <p className="text-xs text-muted-foreground">{item.company}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};