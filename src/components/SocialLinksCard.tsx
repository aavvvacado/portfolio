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
    <BentoCard className="col-span-1">
      <h2 className="text-2xl font-bold mb-4 tracking-tight">LINKS.</h2>
      
      <div className="grid grid-cols-3 gap-2">
        {socialLinks.slice(0, 6).map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary/80 rounded-xl p-4 flex items-center justify-center transition-all duration-200 aspect-square"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </BentoCard>
  );
};
