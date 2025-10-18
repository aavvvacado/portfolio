import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const TestimonialsCard = () => {
  const { testimonials } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 md:col-span-1 row-span-2">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-1">VOICES</h2>
        <h3 className="text-xs text-muted-foreground">OF TRUST</h3>
      </div>
      
      <ScrollArea className="h-[420px] [&>[data-radix-scroll-area-viewport]]:!overflow-y-scroll [&_[data-radix-scroll-area-scrollbar]]:hidden">
        <div className="space-y-4 pr-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="pb-4 border-b border-bento-border last:border-0 hover:bg-secondary/30 p-3 -m-3 rounded-xl transition-colors duration-300">
              <p className="text-muted-foreground text-xs leading-relaxed italic mb-3">
                "{testimonial.text}"
              </p>
              <div className="text-xs">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};