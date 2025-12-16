import { BentoCard } from "./BentoCard";
import { ArrowUpRight } from "lucide-react";

import AndroidStudioIcon from "@/assets/dev tools/android-studio-icon.svg";
import VsCodeIcon from "@/assets/dev tools/vs-code-svgrepo-com.svg";
import LinuxIcon from "@/assets/dev tools/linux-svgrepo-com.svg";
import GitIcon from "@/assets/dev tools/git-svgrepo-com.svg";
import FigmaIcon from "@/assets/dev tools/figma-svgrepo-com.svg";
import NotionIcon from "@/assets/dev tools/notion-svgrepo-com.svg";
import DiscordIcon from "@/assets/dev tools/discord-svgrepo-com.svg";
import PostmanIcon from "@/assets/dev tools/postman-icon.svg";

const devToolIcons: { src: string; alt: string }[] = [
  // Preferred order first
  { src: AndroidStudioIcon, alt: "Android Studio" },
  { src: VsCodeIcon, alt: "VS Code" },
  { src: PostmanIcon, alt: "Postman" },

  // Remaining in any order
  { src: LinuxIcon, alt: "Linux" },
  { src: GitIcon, alt: "Git" },
  { src: FigmaIcon, alt: "Figma" },
  { src: NotionIcon, alt: "Notion" },
  { src: DiscordIcon, alt: "Discord" },
];

export const DailyStackCard = () => {
  return (
    <BentoCard className="row-span-2 relative glitter overflow-hidden border-none">
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
      <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight relative z-10">DAILY</h2>
      <h3 className="text-lg md:text-xl text-muted-foreground mb-6 relative z-10">
        Tool <span className="text-white font-bold">STACK</span>
      </h3>

      <div className="relative z-10 flex gap-4 items-stretch">
        {/* Daily tools column using custom assets inside a pill container */}
        <div className="flex items-center">
          <div className="flex flex-col items-center gap-5 px-5 py-6 rounded-[999px] bg-black/70 border border-border/40">
            {devToolIcons.map((icon) => (
              <div
                key={icon.alt}
                className="w-16 h-16 bg-white/95 rounded-2xl flex items-center justify-center hover:bg-white hover:-translate-x-0.5 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] transition-transform transition-colors duration-300"
              >
                <img src={icon.src} alt={icon.alt} className="w-10 h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Vertical resume strip – visible on md+ */}
        <a
          href="https://drive.google.com/file/d/1loGSKMTpNcqZbB4_R1dLS9uYfkjhVvCn/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex flex-col items-center justify-between gap-3 rounded-3xl border border-border/30 bg-black/40 px-1.5 py-4 h-[320px] hover:bg-black/70 hover:border-border/60 transition-all duration-300 cursor-pointer"
          aria-label="Open resume in a new tab"
        >
          <span className="writing-vertical text-xs tracking-[0.4em] font-extrabold">
            RESUME
          </span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </BentoCard>
  );
};
