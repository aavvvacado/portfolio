import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";

export const StoryCard = () => {
  const { story } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-2 row-span-2">
      <div className="mb-6">
        <h2 className="text-xl mb-1">SO FAR</h2>
        <h3 className="text-3xl font-bold">STORY</h3>
      </div>
      
      <div className="space-y-6">
        {story.map((item, index) => (
          <div key={index} className="border-l-2 border-bento-border pl-4 relative">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-2 border-background" />
            <div className="text-xs text-muted-foreground mb-1">{item.period}</div>
            <h4 className="font-semibold">{item.role}</h4>
            <p className="text-sm text-muted-foreground">{item.company}</p>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};