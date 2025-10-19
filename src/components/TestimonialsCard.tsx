import { BentoCard } from "./BentoCard";
import { portfolioData } from "@/data/portfolio";
import { ScrollArea } from "./ui/scroll-area";

export const TestimonialsCard = () => {
  const { testimonials } = portfolioData;
  
  return (
    <BentoCard className="row-span-2">
      <div className="mb-3">
        <h2 className="text-xs text-muted-foreground mb-0.5 font-bold tracking-wider">KIND WORDS</h2>
        <h3 className="text-lg md:text-xl font-bold tracking-tight">TESTIMONIALS</h3>
      </div>
      
      <ScrollArea className="h-[250px] md:h-[350px]">
        <div className="space-y-3 pr-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-2 pb-3 border-b border-border/50 last:border-0">
              <p className="text-muted-foreground text-[10px] leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="text-xs">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-muted-foreground text-[10px]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </BentoCard>
  );
};
