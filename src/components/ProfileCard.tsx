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
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, profile.tagline]);
  
  return (
    <BentoCard className="col-span-1 md:col-span-2">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={profile.profileImage}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-bento-border transition-all duration-500 hover:scale-110 hover:rotate-6 hover:border-primary animate-scale-in"
        />
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-1">{profile.name}</h1>
          <p className="text-sm text-muted-foreground mb-3">{profile.username}</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-available/10 border border-available/30">
          <div className="w-2 h-2 rounded-full bg-available animate-pulse"></div>
          <span className="text-xs font-medium text-available">{profile.availability}</span>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-3 flex gap-2 flex-wrap">
        {displayedWords.map((word, index) => (
          <span key={index} className="animate-fade-in">{word}</span>
        ))}
        <span className="animate-pulse">|</span>
      </h2>
      
      <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>
    </BentoCard>
  );
};