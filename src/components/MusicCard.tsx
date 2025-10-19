import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";

export const MusicCard = () => {
  const { currentlyPlaying } = portfolioData;
  
  return (
    <BentoCard>
      <div className="mb-2">
        <h2 className="text-xs text-muted-foreground mb-0.5 font-bold tracking-wider">NOW PLAYING</h2>
        <h3 className="text-lg md:text-xl font-bold tracking-tight">MUSIC</h3>
      </div>
      
      <div className="flex items-center gap-3">
        <img 
          src={currentlyPlaying.coverArt}
          alt={currentlyPlaying.title}
          className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <h4 className="font-bold text-xs mb-0.5 truncate">{currentlyPlaying.title}</h4>
          <p className="text-[10px] text-muted-foreground truncate">{currentlyPlaying.artist}</p>
        </div>
      </div>
    </BentoCard>
  );
};
