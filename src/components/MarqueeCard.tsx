import { BentoCard } from "./BentoCard";

export const MarqueeCard = () => {
  const text = "Painting with Jupiter. NASA: April 19, 2025 - Rick Lundh • ";
  
  return (
    <BentoCard hover={false} className="overflow-hidden relative">
      <div className="relative w-full overflow-hidden py-2">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="text-sm text-muted-foreground mx-4">{text}</span>
          <span className="text-sm text-muted-foreground mx-4">{text}</span>
          <span className="text-sm text-muted-foreground mx-4">{text}</span>
        </div>
      </div>
    </BentoCard>
  );
};
