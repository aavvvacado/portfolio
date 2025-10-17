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
          className="w-24 h-24 rounded-2xl object-cover border border-bento-border transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-xl hover:shadow-primary/20 animate-scale-in cursor-pointer"
        />
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-2 italic animate-fade-in">
            "Kaizoku-ou ni naru otoko da."
          </p>
          <h3 className="font-bold text-lg mb-1 hover:text-primary transition-colors duration-300">{currentlyPlaying.title}</h3>
          <p className="text-sm text-muted-foreground">By: {currentlyPlaying.artist}</p>
          <p className="text-xs text-muted-foreground mt-2">
            {currentlyPlaying.album} • {currentlyPlaying.year}
          </p>
        </div>
      </div>
    </BentoCard>
  );
};