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
      <h2 className="text-sm font-bold mb-3">LINKS.</h2>
      
      <div className="grid grid-cols-2 gap-2">
        {socialLinks.map((link, index) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary/80 rounded-xl p-3 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <Icon className="w-5 h-5 transition-transform duration-300" />
            </a>
          );
        })}
      </div>
    </BentoCard>
  );
};