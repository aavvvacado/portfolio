import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";

export const MusicCard = () => {
  const { currentlyPlaying } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-2">
      <div className="flex items-start gap-4">
        <img
          src={currentlyPlaying.coverArt}
          alt={currentlyPlaying.title}
          className="w-24 h-24 rounded-2xl object-cover border border-bento-border"
        />
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-2 italic">
            "Kaizoku-ou ni naru otoko da."
          </p>
          <h3 className="font-bold text-lg mb-1">{currentlyPlaying.title}</h3>
          <p className="text-sm text-muted-foreground">By: {currentlyPlaying.artist}</p>
          <p className="text-xs text-muted-foreground mt-2">
            {currentlyPlaying.album} • {currentlyPlaying.year}
          </p>
        </div>
      </div>
    </BentoCard>
  );
};