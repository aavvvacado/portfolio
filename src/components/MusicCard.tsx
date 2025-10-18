import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";

export const MusicCard = () => {
  const { currentlyPlaying } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1">
      <div className="flex items-start gap-3">
        <img
          src={currentlyPlaying.coverArt}
          alt={currentlyPlaying.title}
          className="w-24 h-24 rounded-xl object-cover border border-bento-border transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-scale-in cursor-pointer"
        />
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground mb-3 italic truncate">
            "Kaizoku-ou ni naru otoko da."
          </p>
          <h3 className="font-bold text-sm mb-1 truncate">{currentlyPlaying.title}</h3>
          <p className="text-xs text-muted-foreground truncate">By: {currentlyPlaying.artist}</p>
        </div>
      </div>
    </BentoCard>
  );
};