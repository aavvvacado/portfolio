import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";

export const ProfileCard = () => {
  const { profile } = portfolioData;
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < profile.tagline.length) {
      const timer = setTimeout(() => {
        setDisplayedWords(prev => [...prev, profile.tagline[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, profile.tagline]);
  
  return (
    <BentoCard className="col-span-2">
      <div className="flex items-start gap-3">
        <img 
          src={profile.profileImage}
          alt={profile.name}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h1 className="text-xl md:text-2xl font-bold mb-0.5">{profile.name}</h1>
          <p className="text-muted-foreground text-xs mb-2">{profile.username}</p>
          
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="opacity-70">夜</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-available-status animate-pulse" />
              <span className="text-muted-foreground">{profile.availability}</span>
            </div>
            <span className="text-muted-foreground">
              {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} • {new Date().toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: '2-digit' })}
            </span>
          </div>
        </div>
      </div>
    </BentoCard>
  );
};
