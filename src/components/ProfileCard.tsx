import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";
import profileImage from "@/assets/profile/profile.jpeg";

const dynamicTexts = ["Ui's", "Mobile App", "Products", "Experience"];

export const ProfileCard = () => {
  const { profile } = portfolioData;
  const { toggleTheme } = useTheme();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const currentText = dynamicTexts[currentTextIndex];
    let charIndex = 0;
    
    // Clear and start typing new text
    setDisplayedText("");
    setIsTyping(true);
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 80); // Speed of typing (80ms per character)

    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <BentoCard className="double-border w-[480px] h-[340px] !p-4 flex flex-col justify-between relative glitter overflow-hidden">
      {/* Sparkle particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            '--tx': `${(Math.random() - 0.5) * 20}px`,
            '--ty': `${(Math.random() - 0.5) * 20}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random()}s`,
          } as React.CSSProperties}
        />
      ))}
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <img 
            src={profileImage}
            alt={profile.name}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 border border-border/20"
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold mb-1 text-foreground">{profile.name}</h1>
            <p className="text-sm text-muted-foreground mb-3">{profile.username}</p>
            
            <div className="flex items-center gap-1.5 mb-3 relative min-h-[24px]">
              <h2 className="text-base font-bold text-foreground">I build</h2>
              <span className="text-base font-bold text-foreground inline-block">
                {displayedText}
                <span className={`ml-0.5 ${isTyping ? 'typewriter-cursor' : 'opacity-0'}`}>|</span>
              </span>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {profile.bio}
            </p>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="text-xl text-foreground/70 hover:text-foreground transition-colors cursor-pointer flex-shrink-0 relative z-10"
          aria-label="Toggle theme"
        >
          夜
        </button>
      </div>
      
      <div className="flex items-center justify-between gap-4 text-xs">
        <p className="text-muted-foreground italic">
          "Do I need <span className="bg-muted px-1.5 py-0.5 rounded border border-border/30">setState()</span> here...?"
        </p>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-accent font-medium text-xs">{profile.availability}</span>
          </div>
          <span className="text-muted-foreground text-xs">
            {currentDateTime.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}, {currentDateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
          </span>
        </div>
      </div>
    </BentoCard>
  );
};
