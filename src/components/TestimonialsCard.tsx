import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const TestimonialsCard = () => {
  const { testimonials } = portfolioData;
  
  return (
    <BentoCard className="group relative glitter overflow-hidden h-full flex flex-col">
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
      <div className="mb-6 relative z-10">
        <div className="relative inline-block">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
            VOICES
          </h2>
          <h3 className="text-xl font-bold tracking-tight">
            OF <span className="text-white">TRUST</span>
          </h3>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-out group-hover:w-[calc(100%+0.5rem)]" />
        </div>
      </div>
      
      <ScrollArea className="flex-1 min-h-0 relative z-10 [&>[data-radix-scroll-area-viewport]]:!overflow-y-scroll [&_[data-radix-scroll-area-scrollbar]]:hidden">
        <div className="space-y-6 pr-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="pb-6 border-b border-white/20 last:border-0">
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <div className="text-sm">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-muted-foreground text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};
