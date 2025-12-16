import type React from "react";
import { BentoCard } from "./BentoCard";

export const MusicCard = () => {
  return (
    <BentoCard className="relative glitter overflow-hidden">
      {/* Sparkle particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            '--tx': `${(Math.random() - 0.5) * 20}px`,
            '--ty': `${(Math.random() - 0.5) * 20}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random()}s`,
          } as React.CSSProperties}
        />
      ))}

      <div className="relative z-10 space-y-3">
        <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          Now Playing
        </h3>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/episode/4TriiWo3QL6nfEGCqa9udU/video?utm_source=generator"
            width="100%"
            height="351"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            allowFullScreen
            style={{ borderRadius: 12 }}
          />
        </div>
      </div>
    </BentoCard>
  );
};
