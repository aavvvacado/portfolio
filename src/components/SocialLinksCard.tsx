import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Github, Twitter, Linkedin, Mail, MessageCircle, Video } from "lucide-react";

const iconMap: Record<string, any> = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  mail: Mail,
  "message-circle": MessageCircle,
  video: Video,
};

export const SocialLinksCard = () => {
  const { socialLinks } = portfolioData;
  
  return (
    <BentoCard>
      <div className="grid grid-cols-3 gap-2">
        {socialLinks.slice(0, 6).map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-secondary/50 transition-all group"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                {Icon && <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />}
              </div>
              <span className="text-[9px] md:text-[10px] font-medium text-muted-foreground text-center">{link.name}</span>
            </a>
          );
        })}
      </div>
    </BentoCard>
  );
};
