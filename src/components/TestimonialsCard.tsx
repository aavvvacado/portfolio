import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const TestimonialsCard = () => {
  const { testimonials } = portfolioData;
  
  return (
    <BentoCard className="col-span-1 row-span-2">
      <div className="mb-5">
        <h2 className="text-3xl font-bold tracking-tight mb-1">VOICES</h2>
        <h3 className="text-lg font-bold tracking-tight">OF <span className="text-foreground">TRUST</span></h3>
      </div>
      
      <ScrollArea className="h-[500px] [&>[data-radix-scroll-area-viewport]]:!overflow-y-scroll [&_[data-radix-scroll-area-scrollbar]]:hidden">
        <div className="space-y-6 pr-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="pb-6 border-b border-border/50 last:border-0">
              <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">
                "{testimonial.text}"
              </p>
              <div className="text-sm">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-muted-foreground text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};
