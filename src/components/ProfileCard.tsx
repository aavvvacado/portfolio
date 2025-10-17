import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";

export const ProfileCard = () => {
  const { profile } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-2">
      <div className="flex items-start gap-4">
        <img
          src={profile.profileImage}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-bento-border"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <span className="text-2xl">夜</span>
          </div>
          <p className="text-muted-foreground text-sm mb-2">{profile.username}</p>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">{profile.tagline}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{profile.bio}</p>
        <p className="text-xs text-muted-foreground mt-4 italic">
          "Do I need setState() here...?"
        </p>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-available animate-pulse" />
          <span className="text-sm text-available">{profile.availability}</span>
        </div>
        <span className="text-xs text-muted-foreground">
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