import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import LeetCodeIcon from "@/assets/icons/leetcode.svg";
import DiscordIcon from "@/assets/icons/discord-svgrepo-com (1).svg";

const iconMap: Record<string, any> = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  mail: Mail,
  "message-circle": MessageCircle,
};

export const SocialLinksCard = () => {
  const { socialLinks } = portfolioData;
  
  return (
    <BentoCard className="h-[260px] flex flex-col relative glitter overflow-hidden border-none">
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
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground relative z-10">LINKS.</h2>
      <div className="grid grid-cols-3 gap-1.5 flex-1 relative z-10">
        {socialLinks.slice(0, 6).map((link) => {
          const Icon = iconMap[link.icon];

          const content =
            link.name === "LeetCode" ? (
              <img
                src={LeetCodeIcon}
                alt="LeetCode"
                className="w-6 h-6 md:w-7 md:h-7 object-contain relative z-10"
              />
            ) : link.name === "Discord" ? (
              <img
                src={DiscordIcon}
                alt="Discord"
                className="w-6 h-6 md:w-7 md:h-7 object-contain relative z-10"
              />
            ) : Icon ? (
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:scale-110 transition-transform duration-300 relative z-10" />
            ) : null;

          return (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square bg-transparent rounded-md flex items-center justify-center border border-border/30 hover:border-border/60 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden scale-90"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300" />
                  {content}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </BentoCard>
  );
};