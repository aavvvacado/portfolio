import type React from "react";
import { BentoCard } from "./BentoCard";
import { RefreshCcw } from "lucide-react";

export const MarqueeCard = () => {
  const text = "Painting with Jupiter. NASA: April 19, 2025 - Rick Lundh • ";

  return (
    <BentoCard hover={false} className="overflow-hidden relative glitter flex flex-col gap-3">
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

      {/* Scrolling caption text */}
      <div className="relative w-full overflow-hidden py-1 z-10">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="text-xs md:text-sm text-muted-foreground mx-4">{text}</span>
          <span className="text-xs md:text-sm text-muted-foreground mx-4">{text}</span>
          <span className="text-xs md:text-sm text-muted-foreground mx-4">{text}</span>
        </div>
      </div>

      {/* NASA APOD style card */}
      <div className="relative z-10 flex flex-col justify-start items-end gap-2">
        <div className="w-full flex flex-col items-end overflow-hidden">
          <p className="font-mono text-xs text-center text-muted-foreground w-full">
            Mirach&apos;s Ghost
          </p>
          <p className="font-mono text-[0.6rem] text-center text-muted-foreground w-full">
            <span>NASA:</span> 2008-10-29 - Anthony Ayiomamitis
          </p>
        </div>

        <div className="group relative border border-muted/10 rounded-3xl h-56 sm:h-72 w-full overflow-hidden">
          <img
            alt="Mirach's Ghost"
            loading="lazy"
            width={400}
            height={600}
            decoding="async"
            src="https://apod.nasa.gov/apod/image/0810/mirachs_ayiomamitis_c800.jpg"
            className="object-cover w-full h-full rounded-3xl"
          />

          <button
            type="button"
            aria-label="Load new NASA image"
            className="border cursor-pointer border-muted/10 hover:bg-background/20 backdrop-blur-sm absolute size-10 top-3 right-3 translate-y-7 scale-50 opacity-0 group-hover:translate-y-0 group-hover:scale-100 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all rounded-full flex items-center justify-center duration-300 max-sm:group-hover:scale-150 max-sm:bottom-7 max-sm:right-7 max-sm:translate-y-12 p-px bg-background/30"
          >
            <RefreshCcw className="size-4" />
          </button>
        </div>
      </div>
    </BentoCard>
  );
};
