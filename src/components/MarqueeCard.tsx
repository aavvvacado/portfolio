import { BentoCard } from "./BentoCard";
import { useEffect, useState } from "react";

export const MarqueeCard = () => {
  const [text] = useState("Fetching from NASA... • Painting with Jupiter. NASA: April 19, 2025 - Rick Lundh • ");
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 overflow-hidden" hover={false}>
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="text-xs text-muted-foreground mx-4">{text}</span>
          <span className="text-xs text-muted-foreground mx-4">{text}</span>
          <span className="text-xs text-muted-foreground mx-4">{text}</span>
        </div>
      </div>
    </BentoCard>
  );
};
