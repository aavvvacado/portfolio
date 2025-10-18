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
    <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={profile.profileImage}
          alt={profile.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-border/50"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <span className="text-2xl">夜</span>
          </div>
          <p className="text-sm text-muted-foreground">{profile.username}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-3">
          {displayedWords.join(" ")}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {profile.bio}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs">
        <div className="text-muted-foreground italic">
          "Do I need setState() here...?"
        </div>
        <div className="text-muted-foreground">
          {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}, {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-available animate-pulse"></div>
        <span className="text-sm font-medium text-available">{profile.availability}</span>
      </div>
    </BentoCard>
  );
};
