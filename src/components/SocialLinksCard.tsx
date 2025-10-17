import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { Github, Twitter, BookOpen, MessageCircle, Linkedin, Figma, Music } from "lucide-react";

const iconMap: Record<string, any> = {
  github: Github,
  twitter: Twitter,
  "book-open": BookOpen,
  "message-circle": MessageCircle,
  linkedin: Linkedin,
  figma: Figma,
  music: Music,
};

export const SocialLinksCard = () => {
  const { socialLinks } = portfolioData;
  
  return (
    <BentoCard className="col-span-1">
      <h2 className="text-xl font-bold mb-4">LINKS.</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary/80 rounded-2xl p-4 flex items-center justify-center transition-all hover:scale-105"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </BentoCard>
  );
};