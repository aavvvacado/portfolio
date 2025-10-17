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
      <div className="flex items-start gap-3">
        <img
          src={profile.profileImage}
          alt={profile.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-bento-border transition-all duration-300 hover:scale-110 hover:rotate-6 animate-scale-in cursor-pointer"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-lg font-bold">{profile.name}</h2>
            <span className="text-xl animate-pulse">夜</span>
          </div>
          <p className="text-muted-foreground text-xs mb-2">{profile.username}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-2 flex gap-1.5 flex-wrap">
          {displayedWords.map((word, index) => (
            <span key={index} className="animate-fade-in">{word}</span>
          ))}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed">{profile.bio}</p>
        <p className="text-xs text-muted-foreground mt-3 italic">
          "Do I need setState() here...?"
        </p>
      </div>
      
      <div className="mt-4 flex items-center justify-between animate-fade-in">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-available animate-pulse group-hover:scale-150 transition-transform duration-300" />
          <span className="text-xs text-available group-hover:font-semibold transition-all duration-300">{profile.availability}</span>
        </div>
        <span className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
          {new Date().toLocaleDateString('en-US', { 
            month: '2-digit', 
            day: '2-digit', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })}
        </span>
      </div>
    </BentoCard>
  );
};