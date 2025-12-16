import type React from "react";
import { BentoCard } from "./BentoCard";
import rengokuImage from "@/assets/anime card/rengoku.jpg";

export const AnimeCard = () => {
  return (
    <BentoCard className="relative glitter overflow-hidden p-0">
      {/* Sparkle particles */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            left: `${20 + i * 20}%`,
            top: `${15 + (i % 2) * 40}%`,
            '--tx': `${(Math.random() - 0.5) * 15}px`,
            '--ty': `${(Math.random() - 0.5) * 15}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random()}s`,
          } as React.CSSProperties}
        />
      ))}

      <div className="relative z-10 h-full w-full">
        <img
          src={rengokuImage}
          alt="Rengoku"
          className="w-full h-full object-cover rounded-[20px]"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-[20px]">
          <h3 className="text-sm font-semibold text-white">Anime</h3>
        </div>
      </div>
    </BentoCard>
  );
};

