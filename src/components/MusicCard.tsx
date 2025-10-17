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
          className="w-20 h-20 rounded-xl object-cover border border-bento-border transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-xl hover:shadow-primary/20 animate-scale-in cursor-pointer"
        />
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground mb-2 italic animate-fade-in truncate">
            "Kaizoku-ou ni naru otoko da."
          </p>
          <h3 className="font-bold text-sm mb-1 hover:text-primary transition-colors duration-300 truncate">{currentlyPlaying.title}</h3>
          <p className="text-xs text-muted-foreground truncate">By: {currentlyPlaying.artist}</p>
          <p className="text-xs text-muted-foreground mt-1 truncate">
            {currentlyPlaying.album} • {currentlyPlaying.year}
          </p>
        </div>
      </div>
    </BentoCard>
  );
};