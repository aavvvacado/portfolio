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
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">LINKS.</h2>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {socialLinks.slice(0, 8).map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all group border border-white/20"
            >
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </a>
          );
        })}
      </div>
    </BentoCard>
  );
};
