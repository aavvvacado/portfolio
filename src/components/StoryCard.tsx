import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const StoryCard = () => {
  const { story } = portfolioData;
  
  return (
    <BentoCard className="group row-span-2 relative glitter overflow-hidden h-full flex flex-col">
      {/* Sparkle particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            '--tx': `${(Math.random() - 0.5) * 20}px`,
            '--ty': `${(Math.random() - 0.5) * 20}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random()}s`,
          } as React.CSSProperties}
        />
      ))}
      <div className="mb-6 relative z-10">
        <div className="relative inline-block">
          <h2 className="text-base text-muted-foreground mb-1 font-bold tracking-wider">
            SO FAR
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            STORY
          </h3>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-out group-hover:w-[calc(100%+0.5rem)]" />
        </div>
      </div>
      
      <ScrollArea className="flex-1 min-h-0 [&>[data-radix-scroll-area-viewport]]:!overflow-y-scroll [&_[data-radix-scroll-area-scrollbar]]:hidden relative z-10">
        <div className="space-y-6 pr-2 pb-8">
          {story.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-sm text-muted-foreground mb-2 font-medium">{item.period}</div>
              <h4 className="font-bold text-base mb-1">{item.role}</h4>
              <p className="text-sm text-muted-foreground mb-1">{item.company}</p>
              {item.description && (
                <p className="text-xs text-muted-foreground/80 leading-relaxed mt-2">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};
