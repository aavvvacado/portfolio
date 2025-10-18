import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";

export const MusicCard = () => {
  const { currentlyPlaying } = portfolioData;
  
  return (
    <BentoCard className="col-span-1">
      <div className="space-y-4">
        <img
          src={currentlyPlaying.coverArt}
          alt={currentlyPlaying.title}
          className="w-full aspect-square rounded-xl object-cover border border-border/50"
        />
        <div>
          <h3 className="font-bold text-lg mb-1">{currentlyPlaying.title}</h3>
          <p className="text-sm text-muted-foreground">By: {currentlyPlaying.artist}</p>
          <p className="text-xs text-muted-foreground mt-1">{currentlyPlaying.year}</p>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground mt-4 italic">
        "Kaizoku-ou ni naru otoko da."
      </p>
    </BentoCard>
  );
};
