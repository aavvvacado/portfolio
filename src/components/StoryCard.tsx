import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const StoryCard = () => {
  const { story } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 row-span-2">
      <div className="mb-5">
        <h2 className="text-sm text-muted-foreground mb-1 font-bold tracking-wider">SO FAR</h2>
        <h3 className="text-3xl font-bold tracking-tight">STORY</h3>
      </div>
      
      <ScrollArea className="h-[500px] [&>[data-radix-scroll-area-viewport]]:!overflow-y-scroll [&_[data-radix-scroll-area-scrollbar]]:hidden">
        <div className="space-y-6 pr-2">
          {story.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-sm text-muted-foreground mb-2 font-medium">{item.period}</div>
              <h4 className="font-bold text-base mb-1">{item.role}</h4>
              <p className="text-sm text-muted-foreground">{item.company}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};
