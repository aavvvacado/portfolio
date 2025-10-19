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
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <img 
            src={profile.profileImage}
            alt={profile.name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0 border-2 border-white/20"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-1">{profile.name}</h1>
            <p className="text-muted-foreground text-sm mb-4">{profile.username}</p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">I build UIs</h2>
            <p className="text-sm text-foreground/90 leading-relaxed max-w-lg">
              {profile.bio}
            </p>
          </div>
        </div>
        <span className="text-3xl opacity-70">夜</span>
      </div>
      
      <div className="mt-6 flex items-center justify-between text-xs md:text-sm">
        <p className="text-muted-foreground italic">"Do I need setState() here...?"</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-medium">{profile.availability}</span>
          </div>
          <span className="text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}, {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
          </span>
        </div>
      </div>
    </BentoCard>
  );
};
