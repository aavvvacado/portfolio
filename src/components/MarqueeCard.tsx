import { BentoCard } from "./BentoCard";

export const MarqueeCard = () => {
  const text = "Painting with Jupiter. NASA: April 19, 2025 - Rick Lundh • ";
  
  return (
    <BentoCard hover={false} className="overflow-hidden relative h-[50px] md:h-[60px]">
      <div className="absolute inset-0 flex items-center">
        <div className="animate-marquee whitespace-nowrap text-[10px] md:text-xs text-muted-foreground">
          {text}{text}{text}
        </div>
      </div>
    </BentoCard>
  );
};
